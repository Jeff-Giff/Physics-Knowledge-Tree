#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
中文物理知识树 —— 构建脚本
职责：
  1. 扫描 content/**/*.md，解析 YAML front-matter 与 markdown 正文
  2. 校验：id 唯一性、链接目标存在性、领域定义、关系类型、[[wiki]] 引用等
  3. 计算节点体积、连接可视化剪枝（max_visual_degree）
  4. 生成 site/data/graph.js（浏览器直接可用的图数据 + 搜索索引）

关系模型（二元关系，无权重等级）：
  links:
    - {id: calculus, type: prereq,  note: ...}   # calculus 是本节点的先修（有方向）
    - {id: wave-mechanics, type: related}        # 相关（无方向）
  type 仅取 prereq / related 两种。

用法：
  python build.py            # 正常构建
  python build.py --quiet    # 仅输出错误与警告
"""

import datetime
import glob
import json
import os
import re
import sys

try:
    import yaml
except ImportError:
    print("[错误] 需要 PyYAML：pip install pyyaml")
    sys.exit(1)

ROOT = os.path.dirname(os.path.abspath(__file__))
CONTENT_DIR = os.path.join(ROOT, "content")
OUT_DIR = os.path.join(ROOT, "site", "data")
OUT_FILE = os.path.join(OUT_DIR, "graph.js")
LOGS_DIR = os.path.join(ROOT, "logs")
BUILD_LOG = os.path.join(LOGS_DIR, "build.log")

WIKI_RE = re.compile(r"\[\[([a-z0-9][a-z0-9-]*)(?:\|([^\]\n]+))?\]\]")

# 合法关系类型
REL_PREREQ = "prereq"    # 先修（有方向：本节点 → 目标 = 目标是本节点的先修）
REL_RELATED = "related"  # 相关（无方向）
REL_TYPES = (REL_PREREQ, REL_RELATED)

# 已废弃的旧格式字段（用于给出明确的迁移提示）
DEPRECATED_FIELDS = ("superseded_by", "supersedes")


def wiki_ids(text):
    """提取 [[id]] / [[id|别名]] 中的 id"""
    return [m[0] for m in WIKI_RE.findall(text)]


warnings = []
errors = []


def warn(msg):
    warnings.append(msg)


def err(msg):
    errors.append(msg)


# ---------------------------------------------------------------- 元数据
def load_meta():
    meta_path = os.path.join(CONTENT_DIR, "_meta.yaml")
    with open(meta_path, "r", encoding="utf-8") as f:
        meta = yaml.safe_load(f) or {}
    domains = meta.get("domains", {})
    # 规范化领域表
    normalized = {}
    for did, d in domains.items():
        d = d or {}
        normalized[did] = {
            "name": d.get("name", did),
            "name_en": d.get("name_en", ""),
            "color": d.get("color", "#888888"),
            "cloud_alpha": float(d.get("cloud_alpha", 0.08)),
            "cloud_r": float(d.get("cloud_r", 1.0)),
        }
    meta["domains"] = normalized
    return meta


# ---------------------------------------------------------------- 节点解析
def parse_md_file(path):
    """返回 (frontmatter, body) 或抛异常"""
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    if not text.startswith("---"):
        raise ValueError("缺少 YAML front-matter 分隔符 '---'")
    parts = text.split("---", 2)
    if len(parts) < 3:
        raise ValueError("YAML front-matter 未正确闭合（需要两组 '---'）")
    fm_text, body = parts[1], parts[2]
    fm = yaml.safe_load(fm_text) or {}
    return fm, body


def collect_node_files():
    files = []
    for p in glob.glob(os.path.join(CONTENT_DIR, "**", "*.md"), recursive=True):
        rel = os.path.relpath(p, CONTENT_DIR)
        if os.path.basename(p).startswith("_"):
            continue
        files.append((rel, p))
    return files


# ---------------------------------------------------------------- 主流程
def main():
    quiet = "--quiet" in sys.argv
    meta = load_meta()
    domains = meta["domains"]
    max_visual_degree = int(meta.get("max_visual_degree", 8))

    nodes_by_id = {}  # id -> node dict (raw)
    file_of = {}  # id -> rel path
    order = []  # 保持文件顺序

    for rel, path in collect_node_files():
        try:
            fm, body = parse_md_file(path)
        except ValueError as e:
            err(f"[{rel}] 解析失败：{e}")
            continue

        nid = str(fm.get("id", "")).strip()
        name = str(fm.get("name", "")).strip()
        if not nid:
            err(f"[{rel}] 缺少必需的 id")
            continue
        if not name:
            warn(f"[{rel}] 缺少 name，使用 id='{nid}'")
            name = nid

        if nid in nodes_by_id:
            err(f"[{rel}] 重复 id '{nid}'（另一个在 {file_of[nid]}）")
            continue

        domain = str(fm.get("domain", "")).strip() or "unassigned"
        if domain not in domains:
            warn(f"[{rel}] 领域 '{domain}' 未在 _meta.yaml 中定义，将使用默认灰色")
            domains.setdefault(
                domain,
                {
                    "name": domain,
                    "color": "#888888",
                    "cloud_alpha": 0.08,
                    "cloud_r": 1.0,
                },
            )

        # 已废弃字段提示
        for dep in DEPRECATED_FIELDS:
            if fm.get(dep):
                warn(
                    f"[{rel}] 字段 '{dep}' 已废弃（上位替代关系已移除），已忽略。"
                    f"如需保留该语义，请改写为 links 中的 type: prereq / related 条目"
                )

        # 规范化 links（二元关系：type = prereq / related）
        links = []
        for lk in fm.get("links", []) or []:
            if not isinstance(lk, dict):
                warn(f"[{rel}] links 条目应为字典，跳过：{lk}")
                continue
            lid = str(lk.get("id", "")).strip()
            if not lid:
                warn(f"[{rel}] links 中存在缺少 id 的条目，跳过")
                continue
            ltype = str(lk.get("type", "")).strip()
            if ltype not in REL_TYPES:
                if "weight" in lk:
                    warn(
                        f"[{rel}] -> {lid} 仍为旧格式（weight 等级已移除），已忽略。"
                        f"请改为 type: prereq 或 type: related"
                    )
                else:
                    warn(
                        f"[{rel}] -> {lid} 缺少合法的 type"
                        f"（应为 {' / '.join(REL_TYPES)}），已忽略"
                    )
                continue
            links.append(
                {
                    "id": lid,
                    "type": ltype,
                    "note": str(lk.get("note", "")).strip(),
                }
            )

        aliases = [
            str(a).strip() for a in (fm.get("aliases", []) or []) if str(a).strip()
        ]
        tags = [str(t).strip() for t in (fm.get("tags", []) or []) if str(t).strip()]
        keywords = [
            str(k).strip() for k in (fm.get("keywords", []) or []) if str(k).strip()
        ]

        pos = fm.get("pos")
        fixed = bool(fm.get("fixed", False))
        size = fm.get("size")

        node = {
            "id": nid,
            "name": name,
            "name_en": str(fm.get("name_en", "")).strip(),
            "domain": domain,
            "aliases": aliases,
            "tags": tags,
            "keywords": keywords,
            "updated": str(fm.get("updated", "")).strip(),
            "pos": pos,
            "fixed": fixed,
            "size_override": size,
            "links": links,
            "body": body.strip(),
            "wiki_refs": wiki_ids(body),
            "file": rel,
        }
        nodes_by_id[nid] = node
        file_of[nid] = rel
        order.append(nid)

    if errors:
        print("=" * 60)
        print("构建中止：存在无法修复的错误")
        for e in errors:
            print("  [错误]", e)
        sys.exit(1)

    # ---- 校验 wiki 引用 ----
    for nid in order:
        node = nodes_by_id[nid]
        for ref in node["wiki_refs"]:
            if ref not in nodes_by_id:
                warn(f"[{node['file']}] [[{ref}]] 引用了不存在的节点")

    # ---- 构建边 ----
    # edges: key = tuple(sorted((a,b))) ->
    #   {"type": 'prereq'|'related', "dir": (后继,先修) 或 None, "notes": {}}
    edges = {}
    for nid in order:
        node = nodes_by_id[nid]
        for lk in node["links"]:
            tid = lk["id"]
            if tid not in nodes_by_id:
                warn(f"[{node['file']}] link 指向不存在的节点 '{tid}'，已忽略")
                continue
            if tid == nid:
                warn(f"[{node['file']}] link 指向自身 '{nid}'，已忽略")
                continue
            key = tuple(sorted((nid, tid)))
            e = edges.setdefault(key, {"type": None, "dir": None, "notes": {}})

            if lk["type"] == REL_PREREQ:
                # nid 声明 tid 是自己的先修：方向 后继(nid) -> 先修(tid)
                if e["type"] == REL_PREREQ and e["dir"] and e["dir"] != (nid, tid):
                    warn(
                        f"'{nid}' 与 '{tid}' 互相声明对方为先修（循环先修），"
                        f"保留先声明的方向 {e['dir'][0]} -> {e['dir'][1]}"
                    )
                elif e["type"] == REL_RELATED:
                    warn(
                        f"'{nid}' 与 '{tid}' 的关系声明不一致（prereq / related），"
                        f"已按 prereq 处理"
                    )
                    e["type"] = REL_PREREQ
                    e["dir"] = (nid, tid)
                elif e["type"] is None:
                    e["type"] = REL_PREREQ
                    e["dir"] = (nid, tid)
            else:  # related
                if e["type"] is None:
                    e["type"] = REL_RELATED
                elif e["type"] == REL_PREREQ:
                    warn(
                        f"'{nid}' 与 '{tid}' 的关系声明不一致（prereq / related），"
                        f"已按 prereq 处理"
                    )
            if lk["note"]:
                e["notes"].setdefault(nid, lk["note"])

    # ---- 可视化剪枝（度数管理）----
    # 每个节点：先修关系优先，其余按 id 排序，取 top-N 作为该节点的"可视邻域"
    visual_sets = {nid: set() for nid in order}
    for nid in order:
        neighbors = []
        for (a, b), e in edges.items():
            other = None
            if a == nid:
                other = b
            elif b == nid:
                other = a
            if other is None:
                continue
            prio = 0 if e["type"] == REL_PREREQ else 1
            neighbors.append((prio, other))
        neighbors.sort(key=lambda t: (t[0], t[1]))
        for _, tid in neighbors[:max_visual_degree]:
            visual_sets[nid].add(tid)

    edge_visual = {}
    for (a, b) in edges:
        edge_visual[(a, b)] = (a in visual_sets[b]) or (b in visual_sets[a])

    # ---- 组装输出 ----
    out_nodes = []
    for nid in order:
        node = nodes_by_id[nid]
        domain = domains[node["domain"]]

        # 邻居列表（可视 + 软连接）：先修在前、相关在后
        neigh = []
        for (a, b), e in edges.items():
            other = b if a == nid else (a if b == nid else None)
            if other is None:
                continue
            if e["type"] == REL_PREREQ:
                # dir = (后继, 先修)；对本节点而言 out=目标是先修，in=目标是后续
                direction = "out" if e["dir"][0] == nid else "in"
            else:
                direction = None
            neigh.append(
                {
                    "id": other,
                    "type": e["type"],
                    "dir": direction,
                    "note": e["notes"].get(nid, e["notes"].get(other, "")),
                    "visual": edge_visual[(a, b)],
                }
            )
        neigh.sort(key=lambda t: (0 if t["type"] == REL_PREREQ else 1, t["id"]))

        links_out = [x for x in neigh if x["visual"]]
        soft_out = [x for x in neigh if not x["visual"]]

        degree = len(neigh)
        if node["size_override"] is not None:
            size = float(node["size_override"])
        else:
            size = round(18 + 10 * degree, 1)

        out_nodes.append(
            {
                "id": nid,
                "name": node["name"],
                "nameEn": node["name_en"],
                "domain": node["domain"],
                "domainName": domain["name"],
                "color": domain["color"],
                "aliases": node["aliases"],
                "tags": node["tags"],
                "keywords": node["keywords"],
                "size": size,
                "degree": degree,
                "pos": node["pos"],
                "fixed": node["fixed"],
                "body": node["body"],
                "links": [
                    {
                        "id": x["id"],
                        "name": nodes_by_id[x["id"]]["name"],
                        "type": x["type"],
                        "dir": x["dir"],
                        "note": x["note"],
                    }
                    for x in links_out
                ],
                "softLinks": [
                    {
                        "id": x["id"],
                        "name": nodes_by_id[x["id"]]["name"],
                        "type": x["type"],
                        "dir": x["dir"],
                        "note": x["note"],
                    }
                    for x in soft_out
                ],
            }
        )

    out_links = []
    for (a, b), e in edges.items():
        # related：无向；prereq：有向（source=先修节点, target=后继节点）
        # 箭头按"知识流向"渲染：由先修指向后继（如 高等数学 → 力学 → 理论力学）
        if e["type"] == REL_PREREQ:
            tgt, src = e["dir"]  # dir = (后继, 先修)
        else:
            src, tgt = a, b
        out_links.append(
            {
                "source": src,
                "target": tgt,
                "type": e["type"],
                "soft": not edge_visual[(a, b)],
                "notes": list(e["notes"].values()),
            }
        )

    search_entries = [
        {
            "id": n["id"],
            "name": n["name"],
            "nameEn": n["nameEn"],
            "aliases": n["aliases"],
            "tags": n["tags"],
            "keywords": n["keywords"],
            "domainName": n["domainName"],
        }
        for n in out_nodes
    ]

    graph = {
        "meta": {
            "site": meta.get("site", {}),
            "domains": {
                k: {
                    "name": v["name"],
                    "name_en": v.get("name_en", ""),
                    "color": v["color"],
                    "cloud_alpha": v["cloud_alpha"],
                    "cloud_r": v["cloud_r"],
                }
                for k, v in domains.items()
            },
            "max_visual_degree": max_visual_degree,
            "relation_semantics": meta.get("relation_semantics", {}),
        },
        "nodes": out_nodes,
        "links": out_links,
        "search": search_entries,
    }

    os.makedirs(OUT_DIR, exist_ok=True)
    payload = json.dumps(graph, ensure_ascii=False, indent=1)
    with open(OUT_FILE, "w", encoding="utf-8") as f:
        f.write(
            "/* 由 build.py 自动生成，请勿手动修改。修改 content/ 后重新运行 python build.py */\n"
        )
        f.write("window.PHYSICS_GRAPH = ")
        f.write(payload)
        f.write(";\n")

    # ---- 输出统计与警告 ----
    n_visual = sum(1 for l in out_links if not l["soft"])
    n_soft = sum(1 for l in out_links if l["soft"])
    n_prereq = sum(1 for l in out_links if l["type"] == REL_PREREQ)
    n_related = sum(1 for l in out_links if l["type"] == REL_RELATED)

    lines = []
    lines.append("=" * 60)
    lines.append(f"构建完成  {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    lines.append(f"  节点数      : {len(out_nodes)}")
    lines.append(
        f"  边数        : {len(out_links)}（先修 {n_prereq} / 相关 {n_related}；"
        f"可视 {n_visual} / 软连接 {n_soft}）"
    )
    lines.append(f"  输出文件    : {os.path.relpath(OUT_FILE, ROOT)}")
    if warnings:
        lines.append(f"  警告数      : {len(warnings)}")
        for w in warnings:
            lines.append(f"    [警告] {w}")
    else:
        lines.append("  无警告")
    lines.append("=" * 60)
    report = "\n".join(lines)
    print(report)

    os.makedirs(LOGS_DIR, exist_ok=True)
    with open(BUILD_LOG, "a", encoding="utf-8") as f:
        f.write(report + "\n")

    if not quiet:
        # 领域分布
        dist = {}
        for n in out_nodes:
            dist[n["domainName"]] = dist.get(n["domainName"], 0) + 1
        print("\n领域分布：")
        for k, v in sorted(dist.items(), key=lambda t: -t[1]):
            print(f"  {k:<18} {v:>4}")


if __name__ == "__main__":
    main()
