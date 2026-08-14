# 中文物理知识树 · Physics Knowledge Tree

一个面向**物理专业学生**的可交互中文物理知识导航图谱：节点由**本科课程**（参考北大物理学院、清华物理系培养方案：普通物理五门 → 四大力学 → 专业选修）与**研究方向**（按 arXiv Physics 顶层类别归并）两部分组成，以"先修 / 相关"二元关系连接，覆盖 **17 个类别、81 个节点**。

网站是**纯静态、完全离线可用**的 3D 交互应用：克隆仓库后双击 `site/index.html` 即可使用，无需服务器、无需构建。

![static](https://img.shields.io/badge/static-纯静态%20离线-green)
![license](https://img.shields.io/badge/license-GPL--3.0-blue)
![nodes](https://img.shields.io/badge/nodes-81-blue)
![build](https://img.shields.io/badge/build-0%20warnings-green)

> 🌐 在线预览（若已启用 GitHub Pages）：`https://<用户名>.github.io/<仓库名>/`
>
> 部署方式见下文"GitHub Pages"。

---

## ✨ 特性

- **3D 力导向图**：节点间为"先修 / 相关"二元关系——先修边（带箭头，由先修指向后继）距离更近，相关边稍远；同领域节点自动聚成半透明彩色云团（允许重叠）；**单击**高亮该节点的先修链与后继子树，**双击**进入节点；标签默认显示、字号可调。
- **2D 局部平面视图**：双击进入节点后以其为中心 2D 展示；间距可调、节点可自由拖动（释放后固定）、"重置布局"复位。
- **节点详情**：Markdown + **KaTeX 公式**渲染；连线按"先修知识 / 后续知识 / 相关知识点"分组展示，一键跳转。
- **搜索**：按名称 / 英文名 / 别名 / 标签 / 关键词模糊检索。
- **树状学习图**：左侧缩进树记录访问路径；按相关度自动挂载、支持拖拽整理；可命名保存、森林载入（`localStorage` 长期保存）。
- **领域体系**：17 个类别（课程层 5 子类 + 研究层 12 类）、17 种配色、可逐域显隐。

## 🚀 快速开始

1. **本地使用**：双击打开 `site/index.html`（离线可用）。
2. **操作**：3D 图滚轮缩放、拖拽旋转；单击高亮、双击进入节点；顶部搜索框检索；顶栏切换"学习树 / 领域图例"。
3. **重新构建**（改过 `content/` 后）：

   ```bash
   python build.py          # 需要 Python3 + PyYAML，要求 0 警告
   ```

## 📁 目录结构

```
physics-knowledge-tree/
├── site/                     # 可视化网站（静态，可直接部署/打开 index.html）
│   ├── index.html
│   ├── css/style.css
│   ├── js/                   # 应用代码 + 本地化 vendor（three / force-graph / marked / katex）
│   └── data/graph.js         # 由 build.py 生成（已提交，勿手改）
├── content/                  # 知识树源文件（唯一数据源）
│   ├── _meta.yaml            # 领域定义、颜色、云图与可视化参数
│   └── <domain>/*.md         # 每知识点一个文件（YAML front-matter + KaTeX 正文）
├── build.py                  # 构建脚本：解析 / 校验 / 生成 graph.js
├── logs/                     # 每次编辑的日志
├── skills/physics-knowledge-tree/SKILL.md   # 指导 AI 编辑知识树的规范
├── AGENTS.md                 # AI 协作约定
├── CONTRIBUTING.md           # 贡献指南
└── LICENSE                   # GPL-3.0
```

## 🧰 技术栈

- **可视化**：three.js(r160) + 3d-force-graph + force-graph(2D)——全部本地化，离线可用。
- **公式**：KaTeX（含全部字体，本地化）。
- **数据管线**：Python 3 + PyYAML（`build.py` 解析 `content/` → `site/data/graph.js`）。

## ✏️ 编辑知识树

- 完整编辑规范见 [`skills/physics-knowledge-tree/SKILL.md`](skills/physics-knowledge-tree/SKILL.md)（节点模板、weight 语义、上位替代成对、内容扩充标准）。
- 每个知识点是一个 Markdown 文件：YAML front-matter 存元数据（`id/name/domain/links/superseded_by/…`），正文用 KaTeX 公式。
- 每次编辑后：运行 `python build.py`（**0 警告**）+ 在 `logs/YYYY-MM-DD.md` 追加日志。
- 详见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 🤖 CI / GitHub Actions

- **Build Check**（`.github/workflows/build.yml`）：每次 Push / PR 自动运行 `python build.py`，存在警告即失败，保证内容质量。
- **Pages 部署**（`.github/workflows/pages.yml`）：推送到 `main` 后自动重新生成 `site/data/graph.js` 并把 `site/` 部署为 GitHub Pages。

### GitHub Pages 启用步骤

1. 把仓库推送到 GitHub。
2. 进入仓库 **Settings → Pages**，在"Build and deployment"中把 **Source 选为 "GitHub Actions"**。
3. Go to the Actions tab and run the workflow named "Deploy to GitHub Pages"(associated w/ pages.yml).

## 📊 当前规模

- **节点 81**（课程 29 + 研究方向 52）· 连接 153（先修 107 / 相关 46）· 类别 17
- 课程层：数学基础、普通物理、四大力学、实验与计算、专业选修
- 研究层：天体物理与宇宙学、引力与量子引力、高能物理、核物理、凝聚态物理、量子物理与量子信息、原子分子与光物理、等离子体物理、流体与非线性科学、统计物理与复杂系统、软物质与生物物理、地球大气与空间物理

（以 `python build.py` 最新输出为准）

## 📄 许可证

[GPL-3.0](LICENSE) © 2026 Physics Knowledge Tree contributors
