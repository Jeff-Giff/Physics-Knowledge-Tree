# AGENTS.md

本文件为在 `physics-knowledge-tree` 仓库工作的 AI 代理提供约定。编辑前请先阅读 `skills/physics-knowledge-tree/SKILL.md`（完整编辑指南）。

## 仓库是什么

- 中文物理/数学知识图谱。`content/` 下的 Markdown 文件是唯一数据源，`build.py` 把它们汇总为 `site/data/graph.js` 供网站消费。
- 网站是纯静态的，双击 `site/index.html` 即可离线查看。

## 编辑规则（强制执行）

1. **数据源**：只修改 `content/**/*.md` 与 `content/_meta.yaml`。**不要**手改 `site/data/graph.js`。
2. **节点文件格式**：YAML front-matter（id/name/domain/links/…）+ Markdown 正文（概述式，`##` 分节）。节点分课程（id 前缀 `c-`）与研究方向（前缀 `r-`）两类。
3. **id 唯一且稳定**：kebab-case；改名必须全局替换引用。
4. **双向链**：正文用 `[[id]]`；`build.py` 校验所有引用目标。
5. **二元关系**：links 条目必须带 `type`——`prereq`（先修，有方向，只由后续方声明一次）或 `related`（相关，无方向，只声明一侧）。
6. **每次编辑后**：
   - `python build.py`，修复到 0 警告；
   - 在 `logs/YYYY-MM-DD.md` 追加日志（新增/修改节点、连接、说明）。
7. **避免重复节点**：新建前先 grep 中文名/别名。

## 命令

```bash
python build.py        # 解析 + 校验 + 生成 site/data/graph.js
python build.py --quiet
```

## 校验告警常见类型

- `重复 id`、`link 指向不存在的节点`、`[[xxx]] 引用了不存在的节点`、`领域 'x' 未定义`、`缺少合法的 type`、`字段 'superseded_by' 已废弃`、`互相声明对方为先修`
