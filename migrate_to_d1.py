#!/usr/bin/env python3
"""
迁移脚本：把 content/ 下的 Markdown 文件导入 Cloudflare D1

用法：
  1. 确保 wrangler 已登录：wrangler login
  2. 确保 D1 数据库已创建：wrangler d1 create pkt-db
  3. 运行：python migrate_to_d1.py
  4. 按提示执行生成的 SQL

环境变量：
  D1_NAME —— 数据库名称（默认 pkt-db）
"""

import os
import sys
import re
import json
import yaml
from datetime import datetime

CONTENT_DIR = os.path.join(os.path.dirname(__file__), "content")
D1_NAME = os.environ.get("D1_NAME", "pkt-db")


def parse_front_matter(text):
    """解析 Markdown 文件的 YAML front-matter"""
    if text.startswith("---"):
        parts = text.split("---", 2)
        if len(parts) >= 3:
            fm = yaml.safe_load(parts[1])
            body = parts[2].strip()
            return fm or {}, body
    return {}, text.strip()


def wiki_ids(body):
    """提取 [[id]] 引用"""
    return list(set(re.findall(r"\[\[([a-z0-9_-]+)\]\]", body)))


def main():
    if not os.path.isdir(CONTENT_DIR):
        print(f"错误：找不到目录 {CONTENT_DIR}")
        sys.exit(1)

    # 读取 _meta.yaml
    meta_path = os.path.join(CONTENT_DIR, "_meta.yaml")
    meta = {}
    if os.path.isfile(meta_path):
        with open(meta_path, "r", encoding="utf-8") as f:
            meta = yaml.safe_load(f) or {}

    domains = meta.get("domains", {})
    max_visual_degree = meta.get("graph", {}).get("max_visual_degree", 8)
    site = meta.get("site", {})
    relation_semantics = meta.get("relation_semantics", {})

    # 读取 _admins.yaml
    admins = []
    admins_path = os.path.join(CONTENT_DIR, "_admins.yaml")
    if os.path.isfile(admins_path):
        with open(admins_path, "r", encoding="utf-8") as f:
            admins_data = yaml.safe_load(f) or {}
            admins = admins_data.get("admins", [])

    # 收集所有 .md 节点文件
    node_files = []
    for root, dirs, files in os.walk(CONTENT_DIR):
        for name in files:
            if not name.endswith(".md") or name.startswith("_"):
                continue
            p = os.path.join(root, name)
            rel = os.path.relpath(p, CONTENT_DIR)
            domain = os.path.dirname(rel)
            nid = os.path.splitext(os.path.basename(rel))[0]
            node_files.append((domain, nid, rel, p))

    node_files.sort(key=lambda t: t[2])
    print(f"发现 {len(node_files)} 个节点文件")
    print(f"发现 {len(domains)} 个 domain")
    print(f"发现 {len(admins)} 个初始管理员")

    # 生成 SQL（D1 远程执行不支持 BEGIN TRANSACTION / COMMIT）
    sql_lines = [
        "DELETE FROM nodes;",
        "DELETE FROM domains;",
        "DELETE FROM meta;",
        "DELETE FROM admins;",
        "DELETE FROM admin_applications;",
        "DELETE FROM feedback;",
        "DELETE FROM audit_log;",
    ]

    # 插入 domains
    for did, dinfo in domains.items():
        name = dinfo.get("name", did)
        name_en = dinfo.get("name_en", "")
        color = dinfo.get("color", "#888888")
        cloud_alpha = dinfo.get("cloud_alpha", 0.08)
        cloud_r = dinfo.get("cloud_r", 1.0)
        sql_lines.append(
            f"INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ("
            f"'{did}', '{escape_sql(name)}', '{escape_sql(name_en)}', '{color}', {cloud_alpha}, {cloud_r}"
            f");"
        )

    # 插入 meta
    sql_lines.append(f"INSERT INTO meta (key, value) VALUES ('max_visual_degree', '{max_visual_degree}');")
    if site:
        sql_lines.append(f"INSERT INTO meta (key, value) VALUES ('site', '{escape_sql(json.dumps(site, ensure_ascii=False))}');")
    if relation_semantics:
        sql_lines.append(f"INSERT INTO meta (key, value) VALUES ('relation_semantics', '{escape_sql(json.dumps(relation_semantics, ensure_ascii=False))}');")

    # 插入 nodes
    errors = []
    for domain, nid, rel, path in node_files:
        try:
            with open(path, "r", encoding="utf-8") as f:
                text = f.read()
        except Exception as e:
            errors.append(f"[{rel}] 读取失败: {e}")
            continue

        fm, body = parse_front_matter(text)

        title = str(fm.get("name", "") or "").strip()
        if not title:
            errors.append(f"[{rel}] 缺少 name 字段")
            continue

        title_en = str(fm.get("name_en", "") or "").strip()
        description = str(fm.get("description", "") or "").strip()
        aliases = fm.get("aliases", [])
        tags = fm.get("tags", [])
        keywords = fm.get("keywords", [])
        pos = fm.get("pos", None)
        fixed = 1 if fm.get("fixed", False) else 0
        size_override = fm.get("size", None)
        updated = str(fm.get("updated", "") or "").strip()
        links = fm.get("links", [])
        resources = fm.get("resources", [])
        refs = wiki_ids(body)

        # 校验 resources
        if isinstance(resources, list):
            for r in resources:
                if not isinstance(r, dict):
                    continue
                r.setdefault("note", "")

        sql_lines.append(
            "INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ("
            f"'{nid}',"
            f"'{domain}',"
            f"'{escape_sql(title)}',"
            f"'{escape_sql(title_en)}',"
            f"'{escape_sql(description)}',"
            f"'{escape_sql(body)}',"
            f"'{escape_sql(json.dumps(aliases, ensure_ascii=False))}',"
            f"'{escape_sql(json.dumps(tags, ensure_ascii=False))}',"
            f"'{escape_sql(json.dumps(keywords, ensure_ascii=False))}',"
            f"'{escape_sql(json.dumps(pos) if pos else 'null')}',"
            f"{fixed},"
            f"{size_override if size_override is not None else 'NULL'},"
            f"'{escape_sql(updated)}',"
            f"'{escape_sql(json.dumps(resources, ensure_ascii=False))}',"
            f"'{escape_sql(json.dumps(links, ensure_ascii=False))}',"
            f"'{escape_sql(json.dumps(refs, ensure_ascii=False))}'"
            ");"
        )

    # 插入初始管理员
    for a in admins:
        sql_lines.append(
            f"INSERT INTO admins (github_login, granted_by) VALUES ('{a.lower()}', 'system');"
        )

    if errors:
        print("\n警告：")
        for e in errors:
            print(f"  {e}")

    # D1 远程执行有单请求大小限制，分块写入多个 SQL 文件
    # 建表语句放在第一批最前面（确保表存在）
    create_table_sql = """CREATE TABLE IF NOT EXISTS admins (github_login TEXT PRIMARY KEY,granted_by TEXT NOT NULL,granted_at DATETIME DEFAULT CURRENT_TIMESTAMP,role TEXT DEFAULT 'admin');
CREATE TABLE IF NOT EXISTS admin_applications (id INTEGER PRIMARY KEY AUTOINCREMENT,github_login TEXT NOT NULL UNIQUE,reason TEXT,status TEXT DEFAULT 'pending',created_at DATETIME DEFAULT CURRENT_TIMESTAMP,updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,handled_by TEXT,handle_note TEXT);
CREATE TABLE IF NOT EXISTS feedback (id INTEGER PRIMARY KEY AUTOINCREMENT,github_login TEXT NOT NULL,category TEXT NOT NULL,title TEXT NOT NULL,detail TEXT,status TEXT DEFAULT 'open',created_at DATETIME DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS audit_log (id INTEGER PRIMARY KEY AUTOINCREMENT,actor TEXT NOT NULL,action TEXT NOT NULL,target TEXT NOT NULL,detail TEXT,created_at DATETIME DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS domains (id TEXT PRIMARY KEY,name TEXT NOT NULL,name_en TEXT,color TEXT DEFAULT '#888888',cloud_alpha REAL DEFAULT 0.08,cloud_r REAL DEFAULT 1.0);
CREATE TABLE IF NOT EXISTS nodes (id TEXT PRIMARY KEY,domain TEXT NOT NULL,title TEXT NOT NULL,title_en TEXT,description TEXT,body TEXT,aliases TEXT,tags TEXT,keywords TEXT,pos TEXT,fixed INTEGER DEFAULT 0,size_override REAL,updated TEXT,resources TEXT,links TEXT,wiki_refs TEXT,created_at DATETIME DEFAULT CURRENT_TIMESTAMP,updated_at DATETIME DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS meta (key TEXT PRIMARY KEY,value TEXT);"""

    # 第 0 批：建表 + 删表 + domains + meta + admins
    header_end = 7 + len(domains) + (1 + (1 if site else 0) + (1 if relation_semantics else 0)) + len(admins)
    part0 = [create_table_sql] + sql_lines[:header_end]
    node_lines = sql_lines[header_end:]

    files = [("migrate_part0.sql", part0)]
    chunk_size = 40
    for i in range(0, len(node_lines), chunk_size):
        files.append((f"migrate_part{i//chunk_size + 1}.sql", node_lines[i:i+chunk_size]))

    for fname, chunk in files:
        with open(fname, "w", encoding="utf-8") as f:
            f.write("\n".join(chunk))
        print(f"  已生成 {fname}（{len(chunk)} 行）")

    print(f"\n下一步执行（在 worker/ 目录下，逐条运行）：")
    for fname, _ in files:
        print(f"  npx wrangler d1 execute {D1_NAME} --remote --file=../{fname}")


def escape_sql(s):
    """简单的 SQL 字符串转义（用于单引号包裹的字符串）"""
    return s.replace("'", "''")


if __name__ == "__main__":
    main()
