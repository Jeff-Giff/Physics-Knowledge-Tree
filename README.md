# 中文物理知识树 · Physics Knowledge Tree

一个面向**理科学生**的可交互中文科学知识导航图谱：节点由**本科课程**（参考北大、清华本科培养方案）与**研究方向**（物理按 arXiv Physics 顶层类别归并；数学按 arXiv math 与教育部 0701 二级学科；生命科学按 arXiv q-bio；计算机按 arXiv cs、信息按 arXiv eess；化学无 arXiv，按教育部 0703 二级学科与 GB/T 13745 归并；工程按教育部工学 08 大类二级学科归并）两部分组成，以"先修 / 相关"二元关系连接，覆盖物理、数学、化学、生命科学、信息科学、计算机科学、工程科学七个领域的 **35 个类别、190 个节点**。

网站是**纯静态、完全离线可用**的 3D 交互应用：克隆仓库后双击 `site/index.html` 即可使用，无需服务器、无需构建。

![static](https://img.shields.io/badge/static-纯静态%20离线-green)
![license](https://img.shields.io/badge/license-GPL--3.0-blue)
![nodes](https://img.shields.io/badge/nodes-190-blue)

> 🌐 在线预览（若已启用 GitHub Pages）：`https://<用户名>.github.io/<仓库名>/`
>
> 部署方式见下文"GitHub Pages"。

---

## ✨ 特性

- **3D 力导向图**：节点间为"先修 / 相关"二元关系——先修边（带箭头，由先修指向后继）距离更近，相关边稍远；同领域节点自动聚成半透明彩色云团（允许重叠）；**单击**高亮该节点的完整先修链与一级后继子树，**双击**进入节点；标签默认显示、字号可调。
- **2D 局部平面视图**：双击进入节点后以其为中心 2D 展示；间距可调、节点可自由拖动（释放后固定）、"重置布局"复位。
- **节点详情**：Markdown + **KaTeX 公式**渲染；连线按"先修知识 / 后续知识 / 相关知识点"分组展示，一键跳转。
- **搜索**：按名称 / 英文名 / 别名 / 标签 / 关键词模糊检索。
- **我的学习路径**：左侧缩进树记录访问路径；按相关度自动挂载、支持拖拽整理；可命名保存、路径载入（`localStorage` 长期保存）。
- **领域体系**：35 个类别（课程层 11 子类 + 研究层 24 类），课程低饱和度偏灰、研究方向高饱和；色相按学科分区间（数学=紫、物理=蓝紫至蓝绿、化学=绿至黄绿、生命科学=黄绿至黄、信息/计算机/工程=紫红至粉红），可逐域显隐。
- **中英双语界面**：顶栏 "EN / 中" 一键切换——节点标签、领域名、详情面板、搜索、学习路径等界面文本全部双语（节点正文仍为中文），选择本地记忆。
- **分类高亮**：3D 视图下"分类高亮"侧边栏可多选领域，仅亮起所选领域的节点与其内部连线（其余节点、连线、云团弱化）；与单击节点高亮叠加时单击优先。

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
3. Go to the Actions tab and run the workflow titled "Deploy to GitHub Pages"(pages.yml).

## 📊 当前规模

- **节点 190**（课程 81 + 研究方向 109）· 连接 370（先修 255 / 相关 115）· 类别 35
- 课程层：数学基础、数学专业核心、普通物理、四大力学、实验与计算、专业选修、化学、生命科学、计算机科学、信息科学、工程科学
- 研究层（物理）：天体物理与宇宙学、引力与量子引力、高能物理、核物理、凝聚态物理、量子物理与量子信息、原子分子与光物理、等离子体物理、流体与非线性科学、统计物理与复杂系统、软物质与生物物理、地球大气与空间物理
- 研究层（数学）：基础数学、应用与计算数学
- 研究层（化学）：基础化学研究、交叉与应用化学
- 研究层（生命科学）：分子、细胞与基因组；个体、神经与生态
- 研究层（计算机）：理论与算法、系统/网络与安全、人工智能
- 研究层（信息）：信息与电子
- 研究层（工程）：机械/电气与控制、材料/能源与土建

（以 `python build.py` 最新输出为准）

## 📄 许可证

[GPL-3.0](LICENSE) © 2026 Physics Knowledge Tree contributors
