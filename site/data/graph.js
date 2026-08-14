/* 由 build.py 自动生成，请勿手动修改。修改 content/ 后重新运行 python build.py */
window.PHYSICS_GRAPH = {
 "meta": {
  "site": {
   "title": "中文物理知识树",
   "subtitle": "Physics Knowledge Graph",
   "description": "从本科课程到研究方向的物理知识导航网络"
  },
  "domains": {
   "c-math": {
    "name": "数学基础（课程）",
    "color": "#9374aa",
    "cloud_alpha": 0.1,
    "cloud_r": 1.0
   },
   "c-general": {
    "name": "普通物理（课程）",
    "color": "#75789f",
    "cloud_alpha": 0.1,
    "cloud_r": 1.0
   },
   "c-core": {
    "name": "四大力学（课程）",
    "color": "#667b99",
    "cloud_alpha": 0.11,
    "cloud_r": 1.0
   },
   "c-lab": {
    "name": "实验与计算（课程）",
    "color": "#748f9a",
    "cloud_alpha": 0.09,
    "cloud_r": 1.0
   },
   "c-elective": {
    "name": "专业选修（课程）",
    "color": "#608a8a",
    "cloud_alpha": 0.1,
    "cloud_r": 1.0
   },
   "r-astro": {
    "name": "天体物理与宇宙学",
    "color": "#593cec",
    "cloud_alpha": 0.09,
    "cloud_r": 1.0
   },
   "r-gravity": {
    "name": "引力与量子引力",
    "color": "#1f16da",
    "cloud_alpha": 0.08,
    "cloud_r": 1.0
   },
   "r-hep": {
    "name": "高能物理",
    "color": "#3c49ec",
    "cloud_alpha": 0.08,
    "cloud_r": 1.0
   },
   "r-nuclear": {
    "name": "核物理",
    "color": "#163bda",
    "cloud_alpha": 0.08,
    "cloud_r": 1.0
   },
   "r-condmat": {
    "name": "凝聚态物理",
    "color": "#166ada",
    "cloud_alpha": 0.09,
    "cloud_r": 1.0
   },
   "r-quantum": {
    "name": "量子物理与量子信息",
    "color": "#3c73ec",
    "cloud_alpha": 0.09,
    "cloud_r": 1.0
   },
   "r-amo": {
    "name": "原子分子与光物理",
    "color": "#3c9dec",
    "cloud_alpha": 0.08,
    "cloud_r": 1.0
   },
   "r-plasma": {
    "name": "等离子体物理",
    "color": "#169ada",
    "cloud_alpha": 0.08,
    "cloud_r": 1.0
   },
   "r-fluid": {
    "name": "流体与非线性科学",
    "color": "#16c9da",
    "cloud_alpha": 0.08,
    "cloud_r": 1.0
   },
   "r-statphys": {
    "name": "统计物理与复杂系统",
    "color": "#3cc7ec",
    "cloud_alpha": 0.08,
    "cloud_r": 1.0
   },
   "r-softbio": {
    "name": "软物质与生物物理",
    "color": "#16dabd",
    "cloud_alpha": 0.08,
    "cloud_r": 1.0
   },
   "r-earth": {
    "name": "地球、大气与空间物理",
    "color": "#3cece6",
    "cloud_alpha": 0.08,
    "cloud_r": 1.0
   }
  },
  "max_visual_degree": 8,
  "relation_semantics": {
   "prereq": "先修：学习本节点之前应先掌握目标节点（有方向，图上渲染为带箭头的连线）",
   "related": "相关：共享概念或方法、可相互参照（无方向，图上渲染为普通连线）"
  }
 },
 "nodes": [
  {
   "id": "c-electrodynamics",
   "name": "电动力学",
   "nameEn": "Classical Electrodynamics",
   "domain": "c-core",
   "domainName": "四大力学（课程）",
   "color": "#667b99",
   "aliases": [
    "经典电动力学"
   ],
   "tags": [],
   "keywords": [],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 电动力学\n\n## 课程概述\n电磁现象的完整经典场论：从麦克斯韦方程组出发处理静态场、辐射与相对论性表述。\n\n## 主要内容\n- 静电与静磁边值问题、多极展开\n- 电磁波的传播、导行波与谐振腔\n- 电磁辐射、狭义相对论与电动力学的协变形式\n\n## 先修与后续\n先修 [[c-electromagnetism]]、[[c-math-methods]]、[[c-theoretical-mechanics]]。后续为 [[c-qft]]、[[c-gr]]、[[c-plasma-intro]] 与 [[c-amo-course]]。",
   "links": [
    {
     "id": "c-amo-course",
     "name": "原子分子与光物理",
     "type": "prereq",
     "dir": "in",
     "note": "光与物质相互作用的经典电磁基础"
    },
    {
     "id": "c-electromagnetism",
     "name": "电磁学",
     "type": "prereq",
     "dir": "out",
     "note": "电磁学定律是本课程的系统化对象"
    },
    {
     "id": "c-gr",
     "name": "广义相对论",
     "type": "prereq",
     "dir": "in",
     "note": "协变形式与张量运算的预备"
    },
    {
     "id": "c-math-methods",
     "name": "数学物理方法",
     "type": "prereq",
     "dir": "out",
     "note": "边值问题需要数理方程与特殊函数"
    },
    {
     "id": "c-plasma-intro",
     "name": "等离子体物理基础",
     "type": "prereq",
     "dir": "in",
     "note": "等离子体是电磁场中的带电粒子体系"
    },
    {
     "id": "c-qft",
     "name": "量子场论",
     "type": "prereq",
     "dir": "in",
     "note": "规范场与协变形式的经典范本"
    },
    {
     "id": "c-theoretical-mechanics",
     "name": "理论力学",
     "type": "prereq",
     "dir": "out",
     "note": "相对论性表述需要分析力学语言"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-quantum-mechanics",
   "name": "量子力学",
   "nameEn": "Quantum Mechanics",
   "domain": "c-core",
   "domainName": "四大力学（课程）",
   "color": "#667b99",
   "aliases": [
    "量子力学(I)"
   ],
   "tags": [],
   "keywords": [],
   "size": 108,
   "degree": 9,
   "pos": null,
   "fixed": false,
   "body": "# 量子力学\n\n## 课程概述\n微观世界的基本理论框架：态、算符、测量与演化，是现代物理几乎所有分支的语言。\n\n## 主要内容\n- 波函数与薛定谔方程、一维定态问题\n- 算符、表象与测量公设、角动量理论\n- 定态微扰论与变分法、自旋与全同粒子、散射初步\n\n## 先修与后续\n先修 [[c-atomic]]、[[c-math-methods]]、[[c-theoretical-mechanics]]。后续几乎覆盖全部专业选修：[[c-advanced-qm]]、[[c-solid-state]]、[[c-amo-course]]、[[c-quantum-info-intro]]、[[c-group-theory]]、[[c-particle-nuclear]] 等。",
   "links": [
    {
     "id": "c-advanced-qm",
     "name": "高等量子力学",
     "type": "prereq",
     "dir": "in",
     "note": "本课程是量子力学的深化"
    },
    {
     "id": "c-amo-course",
     "name": "原子分子与光物理",
     "type": "prereq",
     "dir": "in",
     "note": "原子分子结构的定量理论"
    },
    {
     "id": "c-atomic",
     "name": "原子物理（近代物理）",
     "type": "prereq",
     "dir": "out",
     "note": "原子物理的实验事实与本课程衔接"
    },
    {
     "id": "c-group-theory",
     "name": "群论",
     "type": "prereq",
     "dir": "in",
     "note": "对称性与角动量理论是主要应用"
    },
    {
     "id": "c-math-methods",
     "name": "数学物理方法",
     "type": "prereq",
     "dir": "out",
     "note": "薛定谔方程求解依赖数理方法"
    },
    {
     "id": "c-particle-nuclear",
     "name": "粒子与核物理",
     "type": "prereq",
     "dir": "in",
     "note": "衰变、散射与壳模型都是量子理论"
    },
    {
     "id": "c-quantum-info-intro",
     "name": "量子信息导论",
     "type": "prereq",
     "dir": "in",
     "note": "量子比特与纠缠是量子力学概念"
    },
    {
     "id": "c-solid-state",
     "name": "固体物理",
     "type": "prereq",
     "dir": "in",
     "note": "能带论建立在量子力学之上"
    },
    {
     "id": "c-theoretical-mechanics",
     "name": "理论力学",
     "type": "prereq",
     "dir": "out",
     "note": "哈密顿形式是量子化的出发点"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-statistical-mechanics",
   "name": "热力学与统计物理",
   "nameEn": "Thermodynamics and Statistical Mechanics",
   "domain": "c-core",
   "domainName": "四大力学（课程）",
   "color": "#667b99",
   "aliases": [
    "统计力学",
    "热统"
   ],
   "tags": [],
   "keywords": [],
   "size": 118,
   "degree": 10,
   "pos": null,
   "fixed": false,
   "body": "# 热力学与统计物理\n\n## 课程概述\n从微观态的概率假设导出宏观热性质，建立平衡态统计力学的系综理论并初步讨论相变。\n\n## 主要内容\n- 微正则、正则与巨正则系综\n- 经典理想气体、量子统计（玻色、费米）\n- 玻色-爱因斯坦凝聚与费米气体、相变与临界现象初步、涨落理论\n\n## 先修与后续\n先修 [[c-thermo]]、[[c-math-methods]]；与 [[c-quantum-mechanics]] 相互支撑（量子统计）。后续为 [[c-solid-state]]、[[c-plasma-intro]]，并通向 [[r-phase]]、[[r-noneq]]、[[r-soft]]、[[r-biophy]]、[[r-complex]] 等研究方向。",
   "links": [
    {
     "id": "c-math-methods",
     "name": "数学物理方法",
     "type": "prereq",
     "dir": "out",
     "note": "系综计算需要积分与级数工具"
    },
    {
     "id": "c-plasma-intro",
     "name": "等离子体物理基础",
     "type": "prereq",
     "dir": "in",
     "note": "等离子体的统计描述"
    },
    {
     "id": "c-solid-state",
     "name": "固体物理",
     "type": "prereq",
     "dir": "in",
     "note": "声子与电子统计需要统计物理"
    },
    {
     "id": "c-thermo",
     "name": "热学",
     "type": "prereq",
     "dir": "out",
     "note": "宏观热力学是本课程的微观化对象"
    },
    {
     "id": "r-biophy",
     "name": "生物物理",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-complex",
     "name": "复杂系统与交叉科学",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-noneq",
     "name": "非平衡统计物理",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-phase",
     "name": "相变与临界现象",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-soft",
     "name": "软物质物理",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-stochastic",
     "name": "随机过程",
     "type": "prereq",
     "dir": "in",
     "note": "物理应用背景"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-theoretical-mechanics",
   "name": "理论力学",
   "nameEn": "Theoretical (Analytical) Mechanics",
   "domain": "c-core",
   "domainName": "四大力学（课程）",
   "color": "#667b99",
   "aliases": [
    "分析力学"
   ],
   "tags": [],
   "keywords": [],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 理论力学\n\n## 课程概述\n以分析力学（拉格朗日、哈密顿形式）重写经典力学，建立贯穿整个理论物理的\"作用量—对称性—守恒律\"框架。\n\n## 主要内容\n- 约束与广义坐标、拉格朗日方程\n- 哈密顿正则方程、正则变换、哈密顿-雅可比理论\n- 小振动、刚体定点转动、非线性动力学初步\n\n## 先修与后续\n先修 [[c-mechanics]]、[[c-math-methods]]。后续为 [[c-electrodynamics]]、[[c-quantum-mechanics]]，并支撑 [[c-gr]]、[[c-fluid]] 与 [[r-nonlinear]]。",
   "links": [
    {
     "id": "c-electrodynamics",
     "name": "电动力学",
     "type": "prereq",
     "dir": "in",
     "note": "相对论性表述需要分析力学语言"
    },
    {
     "id": "c-fluid",
     "name": "流体力学",
     "type": "prereq",
     "dir": "in",
     "note": "连续介质力学是分析力学的延伸"
    },
    {
     "id": "c-gr",
     "name": "广义相对论",
     "type": "prereq",
     "dir": "in",
     "note": "变分原理与时空几何表述"
    },
    {
     "id": "c-math-methods",
     "name": "数学物理方法",
     "type": "prereq",
     "dir": "out",
     "note": "变分法与偏微分方程工具"
    },
    {
     "id": "c-mechanics",
     "name": "力学",
     "type": "prereq",
     "dir": "out",
     "note": "牛顿力学是本课程重写与深化的对象"
    },
    {
     "id": "c-quantum-mechanics",
     "name": "量子力学",
     "type": "prereq",
     "dir": "in",
     "note": "哈密顿形式是量子化的出发点"
    },
    {
     "id": "r-nonlinear",
     "name": "非线性动力学与混沌",
     "type": "prereq",
     "dir": "in",
     "note": "混沌理论根植于动力学系统"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-advanced-qm",
   "name": "高等量子力学",
   "nameEn": "Advanced Quantum Mechanics",
   "domain": "c-elective",
   "domainName": "专业选修（课程）",
   "color": "#608a8a",
   "aliases": [
    "量子力学(II)",
    "高量"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 高等量子力学\n\n## 课程概述\n量子力学的进阶形式与多体推广，是进入量子场论与理论研究的直接预备。\n\n## 主要内容\n- 路径积分、密度矩阵\n- 二次量子化与多体方法初步\n- 相对论量子力学（狄拉克方程）、对称性与角动量深化\n\n## 先修与后续\n先修 [[c-quantum-mechanics]]。后续为 [[c-qft]]，并支撑 [[r-cold-atom]] 等量子多体方向。",
   "links": [
    {
     "id": "c-qft",
     "name": "量子场论",
     "type": "prereq",
     "dir": "in",
     "note": "二次量子化与相对论量子力学是直接基础"
    },
    {
     "id": "c-quantum-mechanics",
     "name": "量子力学",
     "type": "prereq",
     "dir": "out",
     "note": "本课程是量子力学的深化"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-amo-course",
   "name": "原子分子与光物理",
   "nameEn": "Atomic, Molecular and Optical Physics",
   "domain": "c-elective",
   "domainName": "专业选修（课程）",
   "color": "#608a8a",
   "aliases": [
    "AMO物理"
   ],
   "tags": [],
   "keywords": [],
   "size": 98,
   "degree": 8,
   "pos": null,
   "fixed": false,
   "body": "# 原子分子与光物理\n\n## 课程概述\n用量子力学与电动力学系统处理原子、分子结构及光与物质的相互作用，是 AMO 研究的基础课。\n\n## 主要内容\n- 原子结构：精细与超精细结构、外场中的原子\n- 分子光谱与分子结构\n- 光与物质相互作用、激光原理\n\n## 先修与后续\n先修 [[c-quantum-mechanics]]、[[c-electrodynamics]]。是 [[r-atommol]]、[[r-qoptics]]、[[r-laser]]、[[r-ultrafast]]、[[r-spectroscopy]]、[[r-cold-atom]] 等方向的入口。",
   "links": [
    {
     "id": "c-electrodynamics",
     "name": "电动力学",
     "type": "prereq",
     "dir": "out",
     "note": "光与物质相互作用的经典电磁基础"
    },
    {
     "id": "c-quantum-mechanics",
     "name": "量子力学",
     "type": "prereq",
     "dir": "out",
     "note": "原子分子结构的定量理论"
    },
    {
     "id": "r-atommol",
     "name": "原子分子物理",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-cold-atom",
     "name": "冷原子与量子气体",
     "type": "prereq",
     "dir": "in",
     "note": "激光冷却与囚禁是 AMO 技术"
    },
    {
     "id": "r-laser",
     "name": "激光物理",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-qoptics",
     "name": "量子光学",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-spectroscopy",
     "name": "精密光谱",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-ultrafast",
     "name": "超快与强场物理",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-astro-intro",
   "name": "天体物理导论",
   "nameEn": "Introduction to Astrophysics",
   "domain": "c-elective",
   "domainName": "专业选修（课程）",
   "color": "#608a8a",
   "aliases": [
    "天体物理基础"
   ],
   "tags": [],
   "keywords": [],
   "size": 98,
   "degree": 8,
   "pos": null,
   "fixed": false,
   "body": "# 天体物理导论\n\n## 课程概述\n把普通物理应用于天体：从恒星到星系到宇宙，给出天体物理的整体图景。\n\n## 主要内容\n- 天文观测基础、恒星结构与演化\n- 星际介质、星系结构与银河系\n- 宇宙学初步、高能天体现象概览\n\n## 先修与后续\n先修 [[c-mechanics]]、[[c-atomic]]。是天体物理各研究方向（[[r-cosmology]]、[[r-galaxy]]、[[r-stellar]]、[[r-he-astro]]、[[r-exoplanet]]、[[r-astro-instrument]]）的入口。",
   "links": [
    {
     "id": "c-atomic",
     "name": "原子物理（近代物理）",
     "type": "prereq",
     "dir": "out",
     "note": "恒星光谱与核过程的物理基础"
    },
    {
     "id": "c-mechanics",
     "name": "力学",
     "type": "prereq",
     "dir": "out",
     "note": "天体力学与结构平衡的基础"
    },
    {
     "id": "r-astro-instrument",
     "name": "天文仪器与观测方法",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-cosmology",
     "name": "宇宙学",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-exoplanet",
     "name": "行星科学与系外行星",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-galaxy",
     "name": "星系物理",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-he-astro",
     "name": "高能天体物理",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-stellar",
     "name": "恒星物理",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-computational-adv",
   "name": "计算物理进阶",
   "nameEn": "Advanced Computational Physics",
   "domain": "c-elective",
   "domainName": "专业选修（课程）",
   "color": "#608a8a",
   "aliases": [
    "高等计算物理"
   ],
   "tags": [],
   "keywords": [],
   "size": 28,
   "degree": 1,
   "pos": null,
   "fixed": false,
   "body": "# 计算物理进阶\n\n## 课程概述\n面向研究的大规模数值模拟与现代计算方法（本研衔接）。\n\n## 主要内容\n- 偏微分方程的高性能求解、并行计算\n- 蒙特卡洛与分子动力学进阶\n- 机器学习在物理问题中的应用\n\n## 先修与后续\n先修 [[c-computational]]。支撑 [[r-materials]]、[[r-lattice]]、[[r-numerical-rel]] 等计算密集型方向。",
   "links": [
    {
     "id": "c-computational",
     "name": "计算物理",
     "type": "prereq",
     "dir": "out",
     "note": "本课程是计算物理的深化"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-fluid",
   "name": "流体力学",
   "nameEn": "Fluid Mechanics",
   "domain": "c-elective",
   "domainName": "专业选修（课程）",
   "color": "#608a8a",
   "aliases": [
    "流体力学基础"
   ],
   "tags": [],
   "keywords": [],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 流体力学\n\n## 课程概述\n把质点系力学推广到连续介质，建立流体运动的控制方程与典型流动分析。\n\n## 主要内容\n- 连续介质假设、欧拉与纳维-斯托克斯方程\n- 理想流体、涡量动力学、势流\n- 粘性流动与边界层、湍流现象引论\n\n## 先修与后续\n先修 [[c-theoretical-mechanics]]。后续通向 [[r-fluid-dyn]]、[[r-turbulence]]、[[r-pattern]]，并支撑 [[r-atmos]]、[[r-ocean]]。",
   "links": [
    {
     "id": "c-theoretical-mechanics",
     "name": "理论力学",
     "type": "prereq",
     "dir": "out",
     "note": "连续介质力学是分析力学的延伸"
    },
    {
     "id": "r-atmos",
     "name": "大气物理",
     "type": "prereq",
     "dir": "in",
     "note": "大气动力学基础"
    },
    {
     "id": "r-fluid-dyn",
     "name": "流体动力学",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-ocean",
     "name": "海洋物理",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-pattern",
     "name": "图案形成",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-turbulence",
     "name": "湍流",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-gr",
   "name": "广义相对论",
   "nameEn": "General Relativity",
   "domain": "c-elective",
   "domainName": "专业选修（课程）",
   "color": "#608a8a",
   "aliases": [
    "广相"
   ],
   "tags": [],
   "keywords": [],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 广义相对论\n\n## 课程概述\n引力即时空几何：介绍微分几何语言与爱因斯坦场方程及其经典解。\n\n## 主要内容\n- 张量分析与黎曼几何初步\n- 爱因斯坦场方程、史瓦西时空、黑洞初步\n- 引力波、宇宙学初步\n\n## 先修与后续\n先修 [[c-theoretical-mechanics]]、[[c-electrodynamics]]。是 [[r-grav-wave]]、[[r-black-hole]]、[[r-numerical-rel]] 的入口，并与 [[c-qft]] 一起支撑 [[r-qg]]；宇宙学方向见 [[r-cosmology]]。",
   "links": [
    {
     "id": "c-electrodynamics",
     "name": "电动力学",
     "type": "prereq",
     "dir": "out",
     "note": "协变形式与张量运算的预备"
    },
    {
     "id": "c-theoretical-mechanics",
     "name": "理论力学",
     "type": "prereq",
     "dir": "out",
     "note": "变分原理与时空几何表述"
    },
    {
     "id": "r-black-hole",
     "name": "黑洞物理",
     "type": "prereq",
     "dir": "in",
     "note": "黑洞是场方程的精确解"
    },
    {
     "id": "r-cosmology",
     "name": "宇宙学",
     "type": "prereq",
     "dir": "in",
     "note": "宇宙学方程来自广义相对论"
    },
    {
     "id": "r-grav-wave",
     "name": "引力波",
     "type": "prereq",
     "dir": "in",
     "note": "引力波是爱因斯坦方程的波动解"
    },
    {
     "id": "r-numerical-rel",
     "name": "数值相对论",
     "type": "prereq",
     "dir": "in",
     "note": "模拟对象是爱因斯坦方程"
    },
    {
     "id": "r-qg",
     "name": "量子引力",
     "type": "prereq",
     "dir": "in",
     "note": "被量子化的对象是时空几何"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-group-theory",
   "name": "群论",
   "nameEn": "Group Theory for Physicists",
   "domain": "c-elective",
   "domainName": "专业选修（课程）",
   "color": "#608a8a",
   "aliases": [
    "群论(物理)"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 群论\n\n## 课程概述\n对称性的数学理论，是现代理论物理（从角动量到规范场论）的通用语言。\n\n## 主要内容\n- 有限群与群表示论\n- 李群与李代数、转动群与洛伦兹群\n- 对称性与守恒律、在原子分子与粒子物理中的应用\n\n## 先修与后续\n先修 [[c-linear-algebra]]、[[c-quantum-mechanics]]。支撑 [[c-qft]] 与 [[r-hep-th]] 等理论方向。",
   "links": [
    {
     "id": "c-linear-algebra",
     "name": "线性代数",
     "type": "prereq",
     "dir": "out",
     "note": "表示论建立在线性代数之上"
    },
    {
     "id": "c-quantum-mechanics",
     "name": "量子力学",
     "type": "prereq",
     "dir": "out",
     "note": "对称性与角动量理论是主要应用"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-particle-nuclear",
   "name": "粒子与核物理",
   "nameEn": "Particle and Nuclear Physics",
   "domain": "c-elective",
   "domainName": "专业选修（课程）",
   "color": "#608a8a",
   "aliases": [
    "粒子物理与核物理"
   ],
   "tags": [],
   "keywords": [],
   "size": 98,
   "degree": 8,
   "pos": null,
   "fixed": false,
   "body": "# 粒子与核物理\n\n## 课程概述\n研究物质在最小尺度上的组成：原子核的性质与反应，以及基本粒子的标准模型。\n\n## 主要内容\n- 原子核性质、核模型（液滴、壳层、集体）\n- 放射性衰变与核反应、核能与核技术\n- 粒子物理：对称性、夸克模型、标准模型导论、探测器\n\n## 先修与后续\n先修 [[c-quantum-mechanics]]、[[c-atomic]]。是核物理方向（[[r-nucl-structure]]、[[r-nucl-reaction]]、[[r-hic]]、[[r-nucl-astro]]）与粒子实验 [[r-hep-ex]] 的入口；理论深造需 [[c-qft]]。",
   "links": [
    {
     "id": "c-atomic",
     "name": "原子物理（近代物理）",
     "type": "prereq",
     "dir": "out",
     "note": "原子核知识承接原子物理"
    },
    {
     "id": "c-quantum-mechanics",
     "name": "量子力学",
     "type": "prereq",
     "dir": "out",
     "note": "衰变、散射与壳模型都是量子理论"
    },
    {
     "id": "r-hep-ex",
     "name": "粒子物理实验",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-hep-ph",
     "name": "粒子唯象学",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-hic",
     "name": "重离子物理",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-nucl-astro",
     "name": "核天体物理",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-nucl-reaction",
     "name": "核反应",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-nucl-structure",
     "name": "核结构",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-plasma-intro",
   "name": "等离子体物理基础",
   "nameEn": "Fundamentals of Plasma Physics",
   "domain": "c-elective",
   "domainName": "专业选修（课程）",
   "color": "#608a8a",
   "aliases": [
    "等离子体物理导论"
   ],
   "tags": [],
   "keywords": [],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 等离子体物理基础\n\n## 课程概述\n研究电离气体的集体行为：单粒子轨道、流体描述与动理论三个层次。\n\n## 主要内容\n- 等离子体参量与德拜屏蔽\n- 单粒子轨道理论、磁流体力学\n- 等离子体波与不稳定性、动理论初步\n\n## 先修与后续\n先修 [[c-electrodynamics]]、[[c-statistical-mechanics]]。是 [[r-mcf]]、[[r-icf]]、[[r-space-plasma]]、[[r-laser-plasma]] 的入口。",
   "links": [
    {
     "id": "c-electrodynamics",
     "name": "电动力学",
     "type": "prereq",
     "dir": "out",
     "note": "等离子体是电磁场中的带电粒子体系"
    },
    {
     "id": "c-statistical-mechanics",
     "name": "热力学与统计物理",
     "type": "prereq",
     "dir": "out",
     "note": "等离子体的统计描述"
    },
    {
     "id": "r-icf",
     "name": "惯性约束与高能量密度物理",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-laser-plasma",
     "name": "激光等离子体",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-mcf",
     "name": "磁约束聚变",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-space-plasma",
     "name": "空间等离子体",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-qft",
   "name": "量子场论",
   "nameEn": "Quantum Field Theory",
   "domain": "c-elective",
   "domainName": "专业选修（课程）",
   "color": "#608a8a",
   "aliases": [
    "QFT"
   ],
   "tags": [],
   "keywords": [],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 量子场论\n\n## 课程概述\n量子力学与狭义相对论的结合：场作为基本对象，粒子是场的激发。\n\n## 主要内容\n- 正则量子化、自由场与传播子\n- 微扰论与费曼图、量子电动力学\n- 重整化初步、规范场论与非阿贝尔规范理论导论\n\n## 先修与后续\n先修 [[c-advanced-qm]]、[[c-electrodynamics]]；与 [[c-group-theory]]（对称性语言）相互支撑。是 [[r-hep-ph]]、[[r-hep-th]]、[[r-lattice]] 的入口，并与 [[c-gr]] 共同支撑 [[r-qg]]。",
   "links": [
    {
     "id": "c-advanced-qm",
     "name": "高等量子力学",
     "type": "prereq",
     "dir": "out",
     "note": "二次量子化与相对论量子力学是直接基础"
    },
    {
     "id": "c-electrodynamics",
     "name": "电动力学",
     "type": "prereq",
     "dir": "out",
     "note": "规范场与协变形式的经典范本"
    },
    {
     "id": "r-hep-ph",
     "name": "粒子唯象学",
     "type": "prereq",
     "dir": "in",
     "note": "计算工具是量子场论"
    },
    {
     "id": "r-hep-th",
     "name": "形式理论（弦论与超对称）",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-lattice",
     "name": "格点场论",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-qg",
     "name": "量子引力",
     "type": "prereq",
     "dir": "in",
     "note": "量子化方法是场论方法"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-quantum-info-intro",
   "name": "量子信息导论",
   "nameEn": "Introduction to Quantum Information",
   "domain": "c-elective",
   "domainName": "专业选修（课程）",
   "color": "#608a8a",
   "aliases": [
    "量子信息基础"
   ],
   "tags": [],
   "keywords": [],
   "size": 78,
   "degree": 6,
   "pos": null,
   "fixed": false,
   "body": "# 量子信息导论\n\n## 课程概述\n以信息科学的视角重新审视量子力学：量子比特、纠缠与量子算法。\n\n## 主要内容\n- 量子比特、量子门与量子线路\n- 纠缠、贝尔不等式、量子隐形传态\n- 量子算法（Shor、Grover）、量子纠错、量子通信\n\n## 先修与后续\n先修 [[c-quantum-mechanics]]、[[c-linear-algebra]]。是 [[r-qc]]、[[r-qcomm]]、[[r-qmetro]]、[[r-qsim]] 的入口。",
   "links": [
    {
     "id": "c-linear-algebra",
     "name": "线性代数",
     "type": "prereq",
     "dir": "out",
     "note": "量子门即酉矩阵"
    },
    {
     "id": "c-quantum-mechanics",
     "name": "量子力学",
     "type": "prereq",
     "dir": "out",
     "note": "量子比特与纠缠是量子力学概念"
    },
    {
     "id": "r-qc",
     "name": "量子计算",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-qcomm",
     "name": "量子通信",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-qmetro",
     "name": "量子精密测量",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-qsim",
     "name": "量子模拟",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-solid-state",
   "name": "固体物理",
   "nameEn": "Solid State Physics",
   "domain": "c-elective",
   "domainName": "专业选修（课程）",
   "color": "#608a8a",
   "aliases": [
    "固体物理学"
   ],
   "tags": [],
   "keywords": [],
   "size": 98,
   "degree": 8,
   "pos": null,
   "fixed": false,
   "body": "# 固体物理\n\n## 课程概述\n研究周期结构中电子、声子的行为，是凝聚态物理各研究方向的共同基础课。\n\n## 主要内容\n- 晶体结构、倒格子与衍射\n- 晶格振动与声子、固体热性质\n- 自由电子论、能带理论、半导体初步\n\n## 先修与后续\n先修 [[c-quantum-mechanics]]、[[c-statistical-mechanics]]。是凝聚态研究方向（[[r-strong-corr]]、[[r-superconduct]]、[[r-meso]]、[[r-materials]]、[[r-spintronics]]、[[r-semiconductor]]）的入口。",
   "links": [
    {
     "id": "c-quantum-mechanics",
     "name": "量子力学",
     "type": "prereq",
     "dir": "out",
     "note": "能带论建立在量子力学之上"
    },
    {
     "id": "c-statistical-mechanics",
     "name": "热力学与统计物理",
     "type": "prereq",
     "dir": "out",
     "note": "声子与电子统计需要统计物理"
    },
    {
     "id": "r-materials",
     "name": "材料科学（计算材料）",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-meso",
     "name": "介观与纳米物理",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-semiconductor",
     "name": "半导体物理",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-spintronics",
     "name": "磁学与自旋电子学",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-strong-corr",
     "name": "强关联电子",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    },
    {
     "id": "r-superconduct",
     "name": "超导物理",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-atomic",
   "name": "原子物理（近代物理）",
   "nameEn": "Atomic Physics (Modern Physics)",
   "domain": "c-general",
   "domainName": "普通物理（课程）",
   "color": "#75789f",
   "aliases": [
    "近代物理",
    "原子物理学"
   ],
   "tags": [],
   "keywords": [],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 原子物理（近代物理）\n\n## 课程概述\n普通物理的收官课程，经原子光谱与黑体辐射等实验事实引向量子概念，并概览核与粒子物理。\n\n## 主要内容\n- 玻尔模型、波粒二象性、薛定谔方程初步\n- 单电子与多电子原子、元素周期表、分子结构简介\n- 原子核与粒子初步、狭义相对论动力学\n\n## 先修与后续\n先修 [[c-optics]]、[[c-electromagnetism]]。后续为 [[c-quantum-mechanics]]；也是 [[c-particle-nuclear]]、[[r-medphy]] 等的基础。",
   "links": [
    {
     "id": "c-astro-intro",
     "name": "天体物理导论",
     "type": "prereq",
     "dir": "in",
     "note": "恒星光谱与核过程的物理基础"
    },
    {
     "id": "c-electromagnetism",
     "name": "电磁学",
     "type": "prereq",
     "dir": "out",
     "note": "原子结构的库仑相互作用图景"
    },
    {
     "id": "c-modern-lab",
     "name": "近代物理实验",
     "type": "prereq",
     "dir": "in",
     "note": "多数实验基于原子与核物理现象"
    },
    {
     "id": "c-optics",
     "name": "光学",
     "type": "prereq",
     "dir": "out",
     "note": "光谱学事实是原子理论的实验依据"
    },
    {
     "id": "c-particle-nuclear",
     "name": "粒子与核物理",
     "type": "prereq",
     "dir": "in",
     "note": "原子核知识承接原子物理"
    },
    {
     "id": "c-quantum-mechanics",
     "name": "量子力学",
     "type": "prereq",
     "dir": "in",
     "note": "原子物理的实验事实与本课程衔接"
    },
    {
     "id": "r-medphy",
     "name": "医学物理",
     "type": "prereq",
     "dir": "in",
     "note": "电离辐射与成像的物理基础"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-electromagnetism",
   "name": "电磁学",
   "nameEn": "Electromagnetism",
   "domain": "c-general",
   "domainName": "普通物理（课程）",
   "color": "#75789f",
   "aliases": [
    "电磁学基础"
   ],
   "tags": [],
   "keywords": [],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 电磁学\n\n## 课程概述\n系统建立电磁场的实验定律与麦克斯韦方程组的积分形式，是电动力学的唯象基础。\n\n## 主要内容\n- 静电场、导体与电介质、稳恒电流与电路\n- 稳恒磁场、磁介质、电磁感应\n- 麦克斯韦方程组（积分形式）与电磁波概念\n\n## 先修与后续\n先修 [[c-mechanics]]。后续为 [[c-optics]]（光是电磁波）与 [[c-electrodynamics]]（系统的场论表述）。",
   "links": [
    {
     "id": "c-atomic",
     "name": "原子物理（近代物理）",
     "type": "prereq",
     "dir": "in",
     "note": "原子结构的库仑相互作用图景"
    },
    {
     "id": "c-electrodynamics",
     "name": "电动力学",
     "type": "prereq",
     "dir": "in",
     "note": "电磁学定律是本课程的系统化对象"
    },
    {
     "id": "c-mechanics",
     "name": "力学",
     "type": "prereq",
     "dir": "out",
     "note": "受力分析与能量观念来自力学"
    },
    {
     "id": "c-optics",
     "name": "光学",
     "type": "prereq",
     "dir": "in",
     "note": "光的电磁理论是波动光学的基础"
    },
    {
     "id": "r-geophy",
     "name": "固体地球物理",
     "type": "prereq",
     "dir": "in",
     "note": "重磁电勘探的物理基础"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-mechanics",
   "name": "力学",
   "nameEn": "Mechanics",
   "domain": "c-general",
   "domainName": "普通物理（课程）",
   "color": "#75789f",
   "aliases": [
    "普通物理力学"
   ],
   "tags": [],
   "keywords": [],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 力学\n\n## 课程概述\n普通物理第一门，建立质点与刚体机械运动的完整经典框架，并初步接触狭义相对论。\n\n## 主要内容\n- 质点运动学、牛顿运动定律、非惯性系\n- 动量、能量、角动量及其守恒律\n- 刚体力学、振动与波动、流体力学初步、狭义相对论简介\n\n## 先修与后续\n先修 [[c-calculus]]。后续为 [[c-theoretical-mechanics]]（分析力学重写）与 [[c-thermo]]、[[c-electromagnetism]] 等普通物理课程。",
   "links": [
    {
     "id": "c-astro-intro",
     "name": "天体物理导论",
     "type": "prereq",
     "dir": "in",
     "note": "天体力学与结构平衡的基础"
    },
    {
     "id": "c-calculus",
     "name": "高等数学（微积分）",
     "type": "prereq",
     "dir": "out",
     "note": "运动学与动力学用微积分表述"
    },
    {
     "id": "c-electromagnetism",
     "name": "电磁学",
     "type": "prereq",
     "dir": "in",
     "note": "受力分析与能量观念来自力学"
    },
    {
     "id": "c-general-lab",
     "name": "普通物理实验",
     "type": "prereq",
     "dir": "in",
     "note": "力热实验与理论课同步或稍后开设"
    },
    {
     "id": "c-theoretical-mechanics",
     "name": "理论力学",
     "type": "prereq",
     "dir": "in",
     "note": "牛顿力学是本课程重写与深化的对象"
    },
    {
     "id": "c-thermo",
     "name": "热学",
     "type": "prereq",
     "dir": "in",
     "note": "分子动理论以力学为基础"
    },
    {
     "id": "r-geophy",
     "name": "固体地球物理",
     "type": "prereq",
     "dir": "in",
     "note": "弹性波与应力场的基础"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-optics",
   "name": "光学",
   "nameEn": "Optics",
   "domain": "c-general",
   "domainName": "普通物理（课程）",
   "color": "#75789f",
   "aliases": [
    "波动光学"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 光学\n\n## 课程概述\n以电磁波理论为基础研究光的传播、干涉、衍射与偏振，并引出光的量子性。\n\n## 主要内容\n- 几何光学：成像、光学仪器\n- 波动光学：干涉、衍射、偏振\n- 光与物质相互作用初步、光的量子性引论\n\n## 先修与后续\n先修 [[c-electromagnetism]]。后续为 [[c-atomic]]（量子性的深入）与 [[c-amo-course]]；实验上衔接 [[c-general-lab]]。",
   "links": [
    {
     "id": "c-atomic",
     "name": "原子物理（近代物理）",
     "type": "prereq",
     "dir": "in",
     "note": "光谱学事实是原子理论的实验依据"
    },
    {
     "id": "c-electromagnetism",
     "name": "电磁学",
     "type": "prereq",
     "dir": "out",
     "note": "光的电磁理论是波动光学的基础"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-thermo",
   "name": "热学",
   "nameEn": "Thermal Physics",
   "domain": "c-general",
   "domainName": "普通物理（课程）",
   "color": "#75789f",
   "aliases": [
    "热力学基础"
   ],
   "tags": [],
   "keywords": [],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 热学\n\n## 课程概述\n研究热现象的宏观规律（热力学）与微观图像（分子动理论），是统计物理的直观前导。\n\n## 主要内容\n- 温度、物态方程、热力学第零/第一/第二定律\n- 熵与热力学过程、热机与制冷循环\n- 分子动理论：麦克斯韦分布、输运现象、相变初步\n\n## 先修与后续\n先修 [[c-mechanics]]。后续为 [[c-statistical-mechanics]]；在应用上通向 [[r-atmos]]（大气热力学）等方向。",
   "links": [
    {
     "id": "c-mechanics",
     "name": "力学",
     "type": "prereq",
     "dir": "out",
     "note": "分子动理论以力学为基础"
    },
    {
     "id": "c-statistical-mechanics",
     "name": "热力学与统计物理",
     "type": "prereq",
     "dir": "in",
     "note": "宏观热力学是本课程的微观化对象"
    },
    {
     "id": "r-atmos",
     "name": "大气物理",
     "type": "prereq",
     "dir": "in",
     "note": "大气热力学基础"
    },
    {
     "id": "r-ocean",
     "name": "海洋物理",
     "type": "prereq",
     "dir": "in",
     "note": "温盐结构与混合"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-computational",
   "name": "计算物理",
   "nameEn": "Computational Physics",
   "domain": "c-lab",
   "domainName": "实验与计算（课程）",
   "color": "#748f9a",
   "aliases": [
    "计算物理基础"
   ],
   "tags": [],
   "keywords": [],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 计算物理\n\n## 课程概述\n用数值方法研究物理问题的入门课程：当解析解不可得时，计算是理论物理的第三条腿。\n\n## 主要内容\n- 数值分析基础：插值、积分、微分方程数值解\n- 蒙特卡洛方法、分子动力学模拟\n- 矩阵计算与编程实践（Python/C++）\n\n## 先修与后续\n先修 [[c-math-methods]]，与 [[c-theoretical-mechanics]] 内容相配合。后续为 [[c-computational-adv]]；支撑 [[r-lattice]]、[[r-numerical-rel]] 等计算密集型研究方向。",
   "links": [
    {
     "id": "c-computational-adv",
     "name": "计算物理进阶",
     "type": "prereq",
     "dir": "in",
     "note": "本课程是计算物理的深化"
    },
    {
     "id": "c-math-methods",
     "name": "数学物理方法",
     "type": "prereq",
     "dir": "out",
     "note": "数值求解的对象是数理方程"
    },
    {
     "id": "r-lattice",
     "name": "格点场论",
     "type": "prereq",
     "dir": "in",
     "note": "格点计算是大规模数值模拟"
    },
    {
     "id": "r-numerical-rel",
     "name": "数值相对论",
     "type": "prereq",
     "dir": "in",
     "note": "大规模数值方法"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-frontier-lab",
   "name": "前沿物理实验（精密测量）",
   "nameEn": "Frontier Physics Experiments (Precision Measurement)",
   "domain": "c-lab",
   "domainName": "实验与计算（课程）",
   "color": "#748f9a",
   "aliases": [
    "精密测量实验",
    "综合物理实验"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 前沿物理实验（精密测量）\n\n## 课程概述\n对接科研前沿的高阶实验课程，围绕精密测量与现代实验技术组织课题式训练。\n\n## 主要内容\n- 精密测量原理（锁相放大、频率稳定、低噪声探测）\n- 课题式前沿实验（依实验室条件开设）\n- 实验设计、数据采集与不确定度分析的综合训练\n\n## 先修与后续\n先修 [[c-modern-lab]]。与研究方向 [[r-qmetro]] 直接相关。",
   "links": [
    {
     "id": "c-modern-lab",
     "name": "近代物理实验",
     "type": "prereq",
     "dir": "out",
     "note": "以近代物理实验的训练为基础"
    },
    {
     "id": "r-qmetro",
     "name": "量子精密测量",
     "type": "related",
     "dir": null,
     "note": "精密测量实验训练"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-general-lab",
   "name": "普通物理实验",
   "nameEn": "General Physics Laboratory",
   "domain": "c-lab",
   "domainName": "实验与计算（课程）",
   "color": "#748f9a",
   "aliases": [
    "普物实验"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 普通物理实验\n\n## 课程概述\n物理实验训练的起点：力、热、电、光基础实验，建立实验规范与误差意识。\n\n## 主要内容\n- 基本量测量与仪器使用（示波器、分光计等）\n- 误差理论、不确定度评定、数据记录规范\n- 力、热、电磁、光学基础实验\n\n## 先修与后续\n配合 [[c-mechanics]] 等普通物理课程，与 [[c-electromagnetism]]、[[c-optics]] 内容呼应。后续为 [[c-modern-lab]]。",
   "links": [
    {
     "id": "c-mechanics",
     "name": "力学",
     "type": "prereq",
     "dir": "out",
     "note": "力热实验与理论课同步或稍后开设"
    },
    {
     "id": "c-modern-lab",
     "name": "近代物理实验",
     "type": "prereq",
     "dir": "in",
     "note": "需要先修完基础实验训练"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-modern-lab",
   "name": "近代物理实验",
   "nameEn": "Modern Physics Laboratory",
   "domain": "c-lab",
   "domainName": "实验与计算（课程）",
   "color": "#748f9a",
   "aliases": [
    "近物实验"
   ],
   "tags": [],
   "keywords": [],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 近代物理实验\n\n## 课程概述\n重现近代物理关键实验，训练谱学、核探测与真空等技术，是进入科研前的核心实验训练。\n\n## 主要内容\n- 原子与分子光谱实验（氢光谱、塞曼效应等）\n- 核探测技术（盖革计数器、能谱测量）\n- 磁共振、微波、真空与低温技术入门\n\n## 先修与后续\n先修 [[c-general-lab]]、[[c-atomic]]、[[c-probability]]。后续为 [[c-frontier-lab]]。",
   "links": [
    {
     "id": "c-atomic",
     "name": "原子物理（近代物理）",
     "type": "prereq",
     "dir": "out",
     "note": "多数实验基于原子与核物理现象"
    },
    {
     "id": "c-frontier-lab",
     "name": "前沿物理实验（精密测量）",
     "type": "prereq",
     "dir": "in",
     "note": "以近代物理实验的训练为基础"
    },
    {
     "id": "c-general-lab",
     "name": "普通物理实验",
     "type": "prereq",
     "dir": "out",
     "note": "需要先修完基础实验训练"
    },
    {
     "id": "c-probability",
     "name": "概率论与数理统计",
     "type": "prereq",
     "dir": "out",
     "note": "计数统计与误差分析需要概率论"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-calculus",
   "name": "高等数学（微积分）",
   "nameEn": "Calculus",
   "domain": "c-math",
   "domainName": "数学基础（课程）",
   "color": "#9374aa",
   "aliases": [
    "微积分",
    "数学分析"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 高等数学（微积分）\n\n## 课程概述\n理工科数学的起点，为全部物理课程提供微积分语言：极限、导数、积分与级数是书写物理规律的基本工具。\n\n## 主要内容\n- 极限与连续、一元函数微分与积分\n- 多元函数微积分、重积分、曲线曲面积分\n- 无穷级数、常微分方程初步、矢量分析初步\n\n## 先修与后续\n无先修（入学即修）。是 [[c-mechanics]]、[[c-math-methods]] 等几乎所有后续课程的数学基础。",
   "links": [
    {
     "id": "c-math-methods",
     "name": "数学物理方法",
     "type": "prereq",
     "dir": "in",
     "note": "微积分是全部内容的出发点"
    },
    {
     "id": "c-mechanics",
     "name": "力学",
     "type": "prereq",
     "dir": "in",
     "note": "运动学与动力学用微积分表述"
    },
    {
     "id": "c-probability",
     "name": "概率论与数理统计",
     "type": "prereq",
     "dir": "in",
     "note": "微积分是概率密度与期望计算的基础"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-linear-algebra",
   "name": "线性代数",
   "nameEn": "Linear Algebra",
   "domain": "c-math",
   "domainName": "数学基础（课程）",
   "color": "#9374aa",
   "aliases": [
    "高等代数"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 线性代数\n\n## 课程概述\n研究向量空间与线性变换，是量子力学态空间、数值计算与数据科学的公共语言。\n\n## 主要内容\n- 矩阵运算与行列式、线性方程组\n- 向量空间、基与维数、线性变换\n- 特征值与特征向量、内积空间、正交对角化\n\n## 先修与后续\n无先修。后续支撑 [[c-quantum-mechanics]]（态矢量与算符）、[[c-group-theory]]、[[c-quantum-info-intro]]（量子比特的矩阵表述）。",
   "links": [
    {
     "id": "c-group-theory",
     "name": "群论",
     "type": "prereq",
     "dir": "in",
     "note": "表示论建立在线性代数之上"
    },
    {
     "id": "c-math-methods",
     "name": "数学物理方法",
     "type": "prereq",
     "dir": "in",
     "note": "函数空间与本征展开需要线性代数语言"
    },
    {
     "id": "c-quantum-info-intro",
     "name": "量子信息导论",
     "type": "prereq",
     "dir": "in",
     "note": "量子门即酉矩阵"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-math-methods",
   "name": "数学物理方法",
   "nameEn": "Methods of Mathematical Physics",
   "domain": "c-math",
   "domainName": "数学基础（课程）",
   "color": "#9374aa",
   "aliases": [
    "数理方法",
    "数理方程"
   ],
   "tags": [],
   "keywords": [],
   "size": 88,
   "degree": 7,
   "pos": null,
   "fixed": false,
   "body": "# 数学物理方法\n\n## 课程概述\n连接基础数学与四大力学的桥梁课程，提供求解物理边值问题所需的分析工具。\n\n## 主要内容\n- 复变函数与留数定理、积分变换（傅里叶、拉普拉斯）\n- 数学物理方程：波动方程、热传导方程、拉普拉斯方程\n- 特殊函数（勒让德、贝塞尔等）、变分法初步、格林函数\n\n## 先修与后续\n先修 [[c-calculus]]、[[c-linear-algebra]]。是四大力学——[[c-theoretical-mechanics]]、[[c-electrodynamics]]、[[c-quantum-mechanics]]、[[c-statistical-mechanics]]——共同的数学先修。",
   "links": [
    {
     "id": "c-calculus",
     "name": "高等数学（微积分）",
     "type": "prereq",
     "dir": "out",
     "note": "微积分是全部内容的出发点"
    },
    {
     "id": "c-computational",
     "name": "计算物理",
     "type": "prereq",
     "dir": "in",
     "note": "数值求解的对象是数理方程"
    },
    {
     "id": "c-electrodynamics",
     "name": "电动力学",
     "type": "prereq",
     "dir": "in",
     "note": "边值问题需要数理方程与特殊函数"
    },
    {
     "id": "c-linear-algebra",
     "name": "线性代数",
     "type": "prereq",
     "dir": "out",
     "note": "函数空间与本征展开需要线性代数语言"
    },
    {
     "id": "c-quantum-mechanics",
     "name": "量子力学",
     "type": "prereq",
     "dir": "in",
     "note": "薛定谔方程求解依赖数理方法"
    },
    {
     "id": "c-statistical-mechanics",
     "name": "热力学与统计物理",
     "type": "prereq",
     "dir": "in",
     "note": "系综计算需要积分与级数工具"
    },
    {
     "id": "c-theoretical-mechanics",
     "name": "理论力学",
     "type": "prereq",
     "dir": "in",
     "note": "变分法与偏微分方程工具"
    }
   ],
   "softLinks": []
  },
  {
   "id": "c-probability",
   "name": "概率论与数理统计",
   "nameEn": "Probability and Statistics",
   "domain": "c-math",
   "domainName": "数学基础（课程）",
   "color": "#9374aa",
   "aliases": [
    "概率统计"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 概率论与数理统计\n\n## 课程概述\n研究随机现象的数学理论，是统计物理、实验数据处理与量子测量概率解释的基础。\n\n## 主要内容\n- 随机事件与概率、随机变量及其分布\n- 大数定律与中心极限定理\n- 参数估计、假设检验、最小二乘拟合\n\n## 先修与后续\n先修 [[c-calculus]]。后续支撑 [[c-statistical-mechanics]]（统计系综的概率框架）与 [[c-modern-lab]]（实验误差与数据分析），研究层面通向 [[r-stochastic]]。",
   "links": [
    {
     "id": "c-calculus",
     "name": "高等数学（微积分）",
     "type": "prereq",
     "dir": "out",
     "note": "微积分是概率密度与期望计算的基础"
    },
    {
     "id": "c-modern-lab",
     "name": "近代物理实验",
     "type": "prereq",
     "dir": "in",
     "note": "计数统计与误差分析需要概率论"
    },
    {
     "id": "r-stochastic",
     "name": "随机过程",
     "type": "prereq",
     "dir": "in",
     "note": "课程基础"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-atommol",
   "name": "原子分子物理",
   "nameEn": "Atomic and Molecular Physics",
   "domain": "r-amo",
   "domainName": "原子分子与光物理",
   "color": "#3c9dec",
   "aliases": [
    "原子分子"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 原子分子物理\n\n## 方向概述\narXiv: physics.atom-ph。研究原子分子的结构、碰撞与外场响应。\n\n## 核心问题\n- 精密结构计算（多电子关联、QED 修正）\n- 原子分子碰撞与冷碰撞\n- 强外场中的原子分子\n\n## 代表方法与设施\n电子束离子阱、离子阱谱学、符合测量。\n\n## 与其他方向的联系\n与 [[r-spectroscopy]]、[[r-cold-atom]]、[[r-ultrafast]] 交叉。",
   "links": [
    {
     "id": "c-amo-course",
     "name": "原子分子与光物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-spectroscopy",
     "name": "精密光谱",
     "type": "related",
     "dir": null,
     "note": "精密测量原子分子结构"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-laser",
   "name": "激光物理",
   "nameEn": "Laser Physics",
   "domain": "r-amo",
   "domainName": "原子分子与光物理",
   "color": "#3c9dec",
   "aliases": [
    "激光技术"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 激光物理\n\n## 方向概述\narXiv: physics.optics 核心。研究激光产生、调控与新型光源。\n\n## 核心问题\n- 激光原理与谐振腔设计\n- 非线性光学与频率变换\n- 新型激光器（光纤、碟片、自由电子激光）\n\n## 代表方法与设施\n超净光学平台、非线性晶体、光纤系统。\n\n## 与其他方向的联系\n与 [[r-ultrafast]]、[[r-laser-plasma]]、[[r-semiconductor]]（半导体激光器）交叉。",
   "links": [
    {
     "id": "c-amo-course",
     "name": "原子分子与光物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-laser-plasma",
     "name": "激光等离子体",
     "type": "related",
     "dir": null,
     "note": "高功率激光驱动等离子体"
    },
    {
     "id": "r-ultrafast",
     "name": "超快与强场物理",
     "type": "related",
     "dir": null,
     "note": "超快激光是直接延伸"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-qoptics",
   "name": "量子光学",
   "nameEn": "Quantum Optics",
   "domain": "r-amo",
   "domainName": "原子分子与光物理",
   "color": "#3c9dec",
   "aliases": [
    "量子光学"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 量子光学\n\n## 方向概述\n研究光的量子性质及光与原子的相干相互作用。\n\n## 核心问题\n- 光场量子化：压缩态、单光子源\n- 腔量子电动力学\n- 量子相干效应（电磁诱导透明等）\n\n## 代表方法与设施\n高品质光学腔、单光子探测、符合计数。\n\n## 与其他方向的联系\n与 [[r-qc]]、[[r-cold-atom]]、[[r-qmetro]] 交叉。",
   "links": [
    {
     "id": "c-amo-course",
     "name": "原子分子与光物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-cold-atom",
     "name": "冷原子与量子气体",
     "type": "related",
     "dir": null,
     "note": "光与原子相互作用"
    },
    {
     "id": "r-qc",
     "name": "量子计算",
     "type": "related",
     "dir": null,
     "note": "光子是量子计算的载体之一"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-spectroscopy",
   "name": "精密光谱",
   "nameEn": "Precision Spectroscopy",
   "domain": "r-amo",
   "domainName": "原子分子与光物理",
   "color": "#3c9dec",
   "aliases": [
    "精密测量物理"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 精密光谱\n\n## 方向概述\n以极限精度测量原子分子跃迁频率，检验基本物理规律。\n\n## 核心问题\n- 光频梳与频率计量\n- 原子钟跃迁与精细结构常数测量\n- 检验局域洛伦兹不变性、寻找新相互作用\n\n## 代表方法与设施\n稳频激光、光钟、离子阱。\n\n## 与其他方向的联系\n与 [[r-qmetro]]、[[r-atommol]] 交叉。",
   "links": [
    {
     "id": "c-amo-course",
     "name": "原子分子与光物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-atommol",
     "name": "原子分子物理",
     "type": "related",
     "dir": null,
     "note": "精密测量原子分子结构"
    },
    {
     "id": "r-qmetro",
     "name": "量子精密测量",
     "type": "related",
     "dir": null,
     "note": "原子钟与频率测量"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-ultrafast",
   "name": "超快与强场物理",
   "nameEn": "Ultrafast and Strong-Field Physics",
   "domain": "r-amo",
   "domainName": "原子分子与光物理",
   "color": "#3c9dec",
   "aliases": [
    "阿秒物理",
    "强场物理"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 超快与强场物理\n\n## 方向概述\n在阿秒到飞秒尺度探测与控制电子动力学，并研究强激光场中的非微扰行为。\n\n## 核心问题\n- 阿秒脉冲产生与测量\n- 高次谐波与强场电离（隧穿、再碰撞）\n- 分子电影与电荷迁移\n\n## 代表方法与设施\n飞秒/阿秒激光系统、光电子符合成像。\n\n## 与其他方向的联系\n与 [[r-laser]]、[[r-atommol]] 交叉。",
   "links": [
    {
     "id": "c-amo-course",
     "name": "原子分子与光物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-laser",
     "name": "激光物理",
     "type": "related",
     "dir": null,
     "note": "超快激光是直接延伸"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-astro-instrument",
   "name": "天文仪器与观测方法",
   "nameEn": "Astronomical Instrumentation and Methods",
   "domain": "r-astro",
   "domainName": "天体物理与宇宙学",
   "color": "#593cec",
   "aliases": [
    "天文技术与方法"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 天文仪器与观测方法\n\n## 方向概述\narXiv: astro-ph.IM。研究观测设备与数据方法本身：望远镜、探测器与巡天数据处理。\n\n## 核心问题\n- 新型探测器（CCD/CMOS、超导探测器）\n- 自适应光学与干涉技术\n- 巡天管线、机器学习辅助的数据挖掘\n\n## 代表方法与设施\n地基大望远镜、空间望远镜、射电阵（SKA）。\n\n## 与其他方向的联系\n服务全体天体物理方向；技术上与 [[r-qmetro]]（单光子探测）交叉。",
   "links": [
    {
     "id": "c-astro-intro",
     "name": "天体物理导论",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-he-astro",
     "name": "高能天体物理",
     "type": "related",
     "dir": null,
     "note": "高能探测器是主要应用对象"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-cosmology",
   "name": "宇宙学",
   "nameEn": "Cosmology",
   "domain": "r-astro",
   "domainName": "天体物理与宇宙学",
   "color": "#593cec",
   "aliases": [
    "物理宇宙学"
   ],
   "tags": [],
   "keywords": [],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 宇宙学\n\n## 方向概述\narXiv: astro-ph.CO。研究宇宙整体的起源、组分与演化：从原初涨落到今天的暗能量主导。\n\n## 核心问题\n- 宇宙组分：暗物质、暗能量的本质\n- 早期宇宙：暴胀、原初核合成、宇宙微波背景\n- 大尺度结构形成与宇宙学参数测量\n\n## 代表方法与设施\nCMB 与巡天观测（Planck、Euclid、CSST）、数值模拟、统计推断。\n\n## 与其他方向的联系\n与 [[r-hep-ph]]（粒子宇宙学）、[[r-qg]]（极早期）、[[r-galaxy]]（结构形成末端）交叉。",
   "links": [
    {
     "id": "c-astro-intro",
     "name": "天体物理导论",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "c-gr",
     "name": "广义相对论",
     "type": "prereq",
     "dir": "out",
     "note": "宇宙学方程来自广义相对论"
    },
    {
     "id": "r-galaxy",
     "name": "星系物理",
     "type": "related",
     "dir": null,
     "note": "星系形成嵌在宇宙学框架中"
    },
    {
     "id": "r-hep-ph",
     "name": "粒子唯象学",
     "type": "related",
     "dir": null,
     "note": "早期宇宙与粒子物理交叉（暴胀、暗物质候选者）"
    },
    {
     "id": "r-qg",
     "name": "量子引力",
     "type": "related",
     "dir": null,
     "note": "普朗克时期需要量子引力"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-exoplanet",
   "name": "行星科学与系外行星",
   "nameEn": "Planetary Science and Exoplanets",
   "domain": "r-astro",
   "domainName": "天体物理与宇宙学",
   "color": "#593cec",
   "aliases": [
    "系外行星"
   ],
   "tags": [],
   "keywords": [],
   "size": 28,
   "degree": 1,
   "pos": null,
   "fixed": false,
   "body": "# 行星科学与系外行星\n\n## 方向概述\narXiv: astro-ph.EP。研究行星系统的形成、探测与宜居性。\n\n## 核心问题\n- 行星形成理论（星子吸积、迁移）\n- 系外行星探测：凌星、视向速度、直接成像\n- 大气刻画与宜居性\n\n## 代表方法与设施\nKepler/TESS/JWST 测光与光谱、高对比度成像。\n\n## 与其他方向的联系\n与 [[r-stellar]]（宿主星）、[[r-astro-instrument]]（探测技术）交叉。",
   "links": [
    {
     "id": "c-astro-intro",
     "name": "天体物理导论",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-galaxy",
   "name": "星系物理",
   "nameEn": "Galaxy Astrophysics",
   "domain": "r-astro",
   "domainName": "天体物理与宇宙学",
   "color": "#593cec",
   "aliases": [
    "星系天文学"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 星系物理\n\n## 方向概述\narXiv: astro-ph.GA。研究星系的结构、形成与演化，以及银河系考古。\n\n## 核心问题\n- 星系形成与演化、恒星形成历史\n- 星系动力学、暗物质晕\n- 活动星系核与星系际介质\n\n## 代表方法与设施\n多波段巡天（SDSS、LSST）、积分场光谱、星系数值模拟。\n\n## 与其他方向的联系\n与 [[r-cosmology]]（宇宙学初始条件）、[[r-stellar]]（恒星种群）交叉。",
   "links": [
    {
     "id": "c-astro-intro",
     "name": "天体物理导论",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-cosmology",
     "name": "宇宙学",
     "type": "related",
     "dir": null,
     "note": "星系形成嵌在宇宙学框架中"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-he-astro",
   "name": "高能天体物理",
   "nameEn": "High-Energy Astrophysics",
   "domain": "r-astro",
   "domainName": "天体物理与宇宙学",
   "color": "#593cec",
   "aliases": [
    "高能天体"
   ],
   "tags": [],
   "keywords": [],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 高能天体物理\n\n## 方向概述\narXiv: astro-ph.HE。研究宇宙中最剧烈的能量过程：黑洞吸积、喷流、伽马暴与宇宙线。\n\n## 核心问题\n- 黑洞吸积盘与喷流物理\n- 伽马射线暴、活动星系核\n- 宇宙线起源、多信使天文学\n\n## 代表方法与设施\nX 射线/伽马射线卫星（HXMT、Fermi）、甚高能观测（LHAASO）、切伦科夫望远镜。\n\n## 与其他方向的联系\n与 [[r-grav-wave]]、[[r-black-hole]]、[[r-laser-plasma]]（实验室类比）交叉。",
   "links": [
    {
     "id": "c-astro-intro",
     "name": "天体物理导论",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-astro-instrument",
     "name": "天文仪器与观测方法",
     "type": "related",
     "dir": null,
     "note": "高能探测器是主要应用对象"
    },
    {
     "id": "r-black-hole",
     "name": "黑洞物理",
     "type": "related",
     "dir": null,
     "note": "吸积黑洞是高能天体的中心引擎"
    },
    {
     "id": "r-grav-wave",
     "name": "引力波",
     "type": "related",
     "dir": null,
     "note": "多信使天文学（双中子星并合等）"
    },
    {
     "id": "r-nucl-astro",
     "name": "核天体物理",
     "type": "related",
     "dir": null,
     "note": "核过程决定高能辐射机制"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-stellar",
   "name": "恒星物理",
   "nameEn": "Stellar Physics",
   "domain": "r-astro",
   "domainName": "天体物理与宇宙学",
   "color": "#593cec",
   "aliases": [
    "恒星结构与演化"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 恒星物理\n\n## 方向概述\narXiv: astro-ph.SR。研究恒星的结构、演化与死亡：从主序星到超新星与致密天体。\n\n## 核心问题\n- 恒星结构与演化模型\n- 超新星爆发机制、白矮星与中子星\n- 双星演化与变星\n\n## 代表方法与设施\n恒星演化程序、时域巡天、星震学。\n\n## 与其他方向的联系\n与 [[r-nucl-astro]]（核合成）、[[r-he-astro]]（致密星吸积）交叉。",
   "links": [
    {
     "id": "c-astro-intro",
     "name": "天体物理导论",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-nucl-astro",
     "name": "核天体物理",
     "type": "related",
     "dir": null,
     "note": "恒星核燃烧即核天体物理"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-materials",
   "name": "材料科学（计算材料）",
   "nameEn": "Materials Science",
   "domain": "r-condmat",
   "domainName": "凝聚态物理",
   "color": "#166ada",
   "aliases": [
    "计算材料学"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 材料科学（计算材料）\n\n## 方向概述\narXiv: cond-mat.mtrl-sci。以物理原理（常与计算结合）设计与理解功能材料。\n\n## 核心问题\n- 第一性原理计算与材料数据库\n- 能源材料（电池、催化、光伏）\n- 低维与量子材料设计\n\n## 代表方法与设施\nDFT 高通量计算、材料基因组、同步辐射表征。\n\n## 与其他方向的联系\n与 [[r-semiconductor]]、[[r-strong-corr]] 交叉；方法上依托 [[c-computational-adv]]。",
   "links": [
    {
     "id": "c-solid-state",
     "name": "固体物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-semiconductor",
     "name": "半导体物理",
     "type": "related",
     "dir": null,
     "note": "功能材料的重要类别"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-meso",
   "name": "介观与纳米物理",
   "nameEn": "Mesoscopic and Nanoscale Physics",
   "domain": "r-condmat",
   "domainName": "凝聚态物理",
   "color": "#166ada",
   "aliases": [
    "介观物理"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 介观与纳米物理\n\n## 方向概述\narXiv: cond-mat.mes-hall。研究介于宏观与微观之间尺度的量子输运现象。\n\n## 核心问题\n- 量子输运：量子霍尔效应、弹道输运、库仑阻塞\n- 量子点与量子线器件\n- 二维材料（石墨烯、TMD）新奇物性\n\n## 代表方法与设施\n微纳加工、稀释制冷输运测量、扫描探针。\n\n## 与其他方向的联系\n与 [[r-qc]]、[[r-semiconductor]]、[[r-strong-corr]] 交叉。",
   "links": [
    {
     "id": "c-solid-state",
     "name": "固体物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-qc",
     "name": "量子计算",
     "type": "related",
     "dir": null,
     "note": "量子点与拓扑器件是量子计算平台"
    },
    {
     "id": "r-semiconductor",
     "name": "半导体物理",
     "type": "related",
     "dir": null,
     "note": "纳米器件的半导体基础"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-semiconductor",
   "name": "半导体物理",
   "nameEn": "Semiconductor Physics",
   "domain": "r-condmat",
   "domainName": "凝聚态物理",
   "color": "#166ada",
   "aliases": [
    "半导体"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 半导体物理\n\n## 方向概述\n研究半导体的载流子行为与器件物理，是微电子与光电子的科学基础。\n\n## 核心问题\n- 载流子统计与输运、p-n 结\n- 低维与宽禁带半导体\n- 半导体光电子器件（激光器、探测器）\n\n## 代表方法与设施\n外延生长（MBE）、器件制备与电学/光学表征。\n\n## 与其他方向的联系\n与 [[r-meso]]、[[r-materials]]、[[r-laser]]（半导体激光器）交叉。",
   "links": [
    {
     "id": "c-solid-state",
     "name": "固体物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-materials",
     "name": "材料科学（计算材料）",
     "type": "related",
     "dir": null,
     "note": "功能材料的重要类别"
    },
    {
     "id": "r-meso",
     "name": "介观与纳米物理",
     "type": "related",
     "dir": null,
     "note": "纳米器件的半导体基础"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-spintronics",
   "name": "磁学与自旋电子学",
   "nameEn": "Magnetism and Spintronics",
   "domain": "r-condmat",
   "domainName": "凝聚态物理",
   "color": "#166ada",
   "aliases": [
    "自旋电子学"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 磁学与自旋电子学\n\n## 方向概述\n研究磁有序与自旋自由度在信息器件中的应用。\n\n## 核心问题\n- 磁有序与磁激发（自旋波、斯格明子）\n- 自旋输运：自旋霍尔效应、自旋矩转移\n- 磁性存储与自旋器件\n\n## 代表方法与设施\n磁光测量、铁磁共振、微磁模拟。\n\n## 与其他方向的联系\n与 [[r-strong-corr]]、[[r-meso]] 交叉。",
   "links": [
    {
     "id": "c-solid-state",
     "name": "固体物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-strong-corr",
     "name": "强关联电子",
     "type": "related",
     "dir": null,
     "note": "磁性多源于关联效应"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-strong-corr",
   "name": "强关联电子",
   "nameEn": "Strongly Correlated Electrons",
   "domain": "r-condmat",
   "domainName": "凝聚态物理",
   "color": "#166ada",
   "aliases": [
    "强关联体系"
   ],
   "tags": [],
   "keywords": [],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 强关联电子\n\n## 方向概述\narXiv: cond-mat.str-el。研究电子间相互作用主导的多体物理：能带图像失效之处。\n\n## 核心问题\n- 莫特绝缘体、重费米子\n- 量子磁性与自旋液体\n- 拓扑物态（拓扑绝缘体、外尔半金属）\n\n## 代表方法与设施\n量子多体数值方法（DMRG、张量网络）、ARPES、中子散射。\n\n## 与其他方向的联系\n与 [[r-superconduct]]、[[r-phase]]、[[r-qsim]]（量子模拟平台）交叉。",
   "links": [
    {
     "id": "c-solid-state",
     "name": "固体物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-phase",
     "name": "相变与临界现象",
     "type": "related",
     "dir": null,
     "note": "量子相变是核心议题"
    },
    {
     "id": "r-qsim",
     "name": "量子模拟",
     "type": "related",
     "dir": null,
     "note": "模拟目标是强关联模型"
    },
    {
     "id": "r-spintronics",
     "name": "磁学与自旋电子学",
     "type": "related",
     "dir": null,
     "note": "磁性多源于关联效应"
    },
    {
     "id": "r-superconduct",
     "name": "超导物理",
     "type": "related",
     "dir": null,
     "note": "非常规超导多出于强关联体系"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-superconduct",
   "name": "超导物理",
   "nameEn": "Superconductivity",
   "domain": "r-condmat",
   "domainName": "凝聚态物理",
   "color": "#166ada",
   "aliases": [
    "超导"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 超导物理\n\n## 方向概述\narXiv: cond-mat.supr-con。研究超导与超流的机制、材料与应用。\n\n## 核心问题\n- BCS 与非常规配对（高温超导、铁基超导）\n- 拓扑超导与马约拉纳零能模\n- 超导应用：磁体、量子比特、单光子探测\n\n## 代表方法与设施\n极低温输运、缪子自旋弛豫、薄膜生长。\n\n## 与其他方向的联系\n与 [[r-strong-corr]]、[[r-qc]]（超导量子比特）、[[r-meso]] 交叉。",
   "links": [
    {
     "id": "c-solid-state",
     "name": "固体物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-strong-corr",
     "name": "强关联电子",
     "type": "related",
     "dir": null,
     "note": "非常规超导多出于强关联体系"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-atmos",
   "name": "大气物理",
   "nameEn": "Atmospheric Physics",
   "domain": "r-earth",
   "domainName": "地球、大气与空间物理",
   "color": "#3cece6",
   "aliases": [
    "大气科学物理"
   ],
   "tags": [],
   "keywords": [],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 大气物理\n\n## 方向概述\narXiv: physics.ao-ph。研究大气的物理过程与气候。\n\n## 核心问题\n- 大气辐射与遥感\n- 云与降水微物理\n- 大气动力学与气候变率\n\n## 代表方法与设施\n气象卫星与雷达、气候模式。\n\n## 与其他方向的联系\n与 [[r-ocean]]、[[r-turbulence]]、[[r-space-plasma]]（空间天气）交叉。",
   "links": [
    {
     "id": "c-fluid",
     "name": "流体力学",
     "type": "prereq",
     "dir": "out",
     "note": "大气动力学基础"
    },
    {
     "id": "c-thermo",
     "name": "热学",
     "type": "prereq",
     "dir": "out",
     "note": "大气热力学基础"
    },
    {
     "id": "r-ocean",
     "name": "海洋物理",
     "type": "related",
     "dir": null,
     "note": "海气耦合"
    },
    {
     "id": "r-space-plasma",
     "name": "空间等离子体",
     "type": "related",
     "dir": null,
     "note": "空间天气影响高层大气"
    },
    {
     "id": "r-turbulence",
     "name": "湍流",
     "type": "related",
     "dir": null,
     "note": "大气湍流"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-geophy",
   "name": "固体地球物理",
   "nameEn": "Solid Earth Geophysics",
   "domain": "r-earth",
   "domainName": "地球、大气与空间物理",
   "color": "#3cece6",
   "aliases": [
    "地球内部物理"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 固体地球物理\n\n## 方向概述\narXiv: physics.geo-ph。用物理场探测地球内部结构与过程。\n\n## 核心问题\n- 地震学与地球内部成像\n- 重力、地磁与电磁勘探\n- 地球动力学（地幔对流、板块运动）\n\n## 代表方法与设施\n地震台网、重力卫星（GRACE）、数值地球动力学模拟。\n\n## 与其他方向的联系\n与 [[r-ocean]]、[[r-fluid-dyn]]（地幔对流）交叉。",
   "links": [
    {
     "id": "c-electromagnetism",
     "name": "电磁学",
     "type": "prereq",
     "dir": "out",
     "note": "重磁电勘探的物理基础"
    },
    {
     "id": "c-mechanics",
     "name": "力学",
     "type": "prereq",
     "dir": "out",
     "note": "弹性波与应力场的基础"
    },
    {
     "id": "r-ocean",
     "name": "海洋物理",
     "type": "related",
     "dir": null,
     "note": "同属地球系统"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-ocean",
   "name": "海洋物理",
   "nameEn": "Physical Oceanography",
   "domain": "r-earth",
   "domainName": "地球、大气与空间物理",
   "color": "#3cece6",
   "aliases": [
    "物理海洋学"
   ],
   "tags": [],
   "keywords": [],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 海洋物理\n\n## 方向概述\n研究海洋中的运动：环流、波动与混合。\n\n## 核心问题\n- 大洋环流与温盐环流\n- 海洋内波与湍流混合\n- 海气相互作用\n\n## 代表方法与设施\n潜标与浮标阵（Argo）、海洋模式。\n\n## 与其他方向的联系\n与 [[r-atmos]]、[[r-fluid-dyn]] 交叉。",
   "links": [
    {
     "id": "c-fluid",
     "name": "流体力学",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "c-thermo",
     "name": "热学",
     "type": "prereq",
     "dir": "out",
     "note": "温盐结构与混合"
    },
    {
     "id": "r-atmos",
     "name": "大气物理",
     "type": "related",
     "dir": null,
     "note": "海气耦合"
    },
    {
     "id": "r-geophy",
     "name": "固体地球物理",
     "type": "related",
     "dir": null,
     "note": "同属地球系统"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-fluid-dyn",
   "name": "流体动力学",
   "nameEn": "Fluid Dynamics",
   "domain": "r-fluid",
   "domainName": "流体与非线性科学",
   "color": "#16c9da",
   "aliases": [
    "流体力学研究"
   ],
   "tags": [],
   "keywords": [],
   "size": 28,
   "degree": 1,
   "pos": null,
   "fixed": false,
   "body": "# 流体动力学\n\n## 方向概述\narXiv: physics.flu-dyn。研究各类流动现象：稳定性、涡结构与复杂介质流动。\n\n## 核心问题\n- 流动失稳与转捩\n- 涡动力学、波流相互作用\n- 多相流、微流与生物流体\n\n## 代表方法与设施\n水洞风洞实验、直接数值模拟、PIV 测量。\n\n## 与其他方向的联系\n与 [[r-turbulence]]、[[r-atmos]]、[[r-ocean]]、[[r-hic]]（QGP 流体）交叉。",
   "links": [
    {
     "id": "c-fluid",
     "name": "流体力学",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-nonlinear",
   "name": "非线性动力学与混沌",
   "nameEn": "Nonlinear Dynamics and Chaos",
   "domain": "r-fluid",
   "domainName": "流体与非线性科学",
   "color": "#16c9da",
   "aliases": [
    "混沌"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 非线性动力学与混沌\n\n## 方向概述\narXiv: nlin.CD。研究确定性系统中的分岔、混沌与复杂时间行为。\n\n## 核心问题\n- 分岔理论、奇怪吸引子\n- 混沌的控制与同步\n- 时间序列分析与复杂网络动力学\n\n## 代表方法与设施\n动力系统理论、数值分岔分析。\n\n## 与其他方向的联系\n与 [[r-turbulence]]、[[r-pattern]]、[[r-complex]] 交叉。",
   "links": [
    {
     "id": "c-theoretical-mechanics",
     "name": "理论力学",
     "type": "prereq",
     "dir": "out",
     "note": "混沌理论根植于动力学系统"
    },
    {
     "id": "r-pattern",
     "name": "图案形成",
     "type": "related",
     "dir": null,
     "note": "斑图形成是非线性行为的空间表现"
    },
    {
     "id": "r-turbulence",
     "name": "湍流",
     "type": "related",
     "dir": null,
     "note": "湍流是非线性系统的代表"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-pattern",
   "name": "图案形成",
   "nameEn": "Pattern Formation",
   "domain": "r-fluid",
   "domainName": "流体与非线性科学",
   "color": "#16c9da",
   "aliases": [
    "斑图动力学"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 图案形成\n\n## 方向概述\narXiv: nlin.PS。研究远离平衡系统中自发形成的空间结构：斑图、孤波与耗散结构。\n\n## 核心问题\n- 反应-扩散系统与图灵斑图\n- 孤波与可积系统\n- 界面生长与枝晶\n\n## 代表方法与设施\n振幅方程、数值模拟、对流实验。\n\n## 与其他方向的联系\n与 [[r-nonlinear]]、[[r-soft]] 交叉。",
   "links": [
    {
     "id": "c-fluid",
     "name": "流体力学",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-nonlinear",
     "name": "非线性动力学与混沌",
     "type": "related",
     "dir": null,
     "note": "斑图形成是非线性行为的空间表现"
    },
    {
     "id": "r-soft",
     "name": "软物质物理",
     "type": "related",
     "dir": null,
     "note": "软物质是斑图的典型载体"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-turbulence",
   "name": "湍流",
   "nameEn": "Turbulence",
   "domain": "r-fluid",
   "domainName": "流体与非线性科学",
   "color": "#16c9da",
   "aliases": [
    "湍流研究"
   ],
   "tags": [],
   "keywords": [],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 湍流\n\n## 方向概述\n经典物理最著名的未解问题：多尺度强非线性运动的统计规律。\n\n## 核心问题\n- 能级串与惯性区标度律\n- 间歇性与相干结构\n- 湍流封闭模型与机器学习建模\n\n## 代表方法与设施\n超算直接数值模拟、高雷诺数实验。\n\n## 与其他方向的联系\n与 [[r-nonlinear]]、[[r-atmos]]、[[r-space-plasma]]（等离子体湍流）交叉。",
   "links": [
    {
     "id": "c-fluid",
     "name": "流体力学",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-atmos",
     "name": "大气物理",
     "type": "related",
     "dir": null,
     "note": "大气湍流"
    },
    {
     "id": "r-nonlinear",
     "name": "非线性动力学与混沌",
     "type": "related",
     "dir": null,
     "note": "湍流是非线性系统的代表"
    },
    {
     "id": "r-space-plasma",
     "name": "空间等离子体",
     "type": "related",
     "dir": null,
     "note": "太阳风是天然湍流实验室"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-black-hole",
   "name": "黑洞物理",
   "nameEn": "Black Hole Physics",
   "domain": "r-gravity",
   "domainName": "引力与量子引力",
   "color": "#1f16da",
   "aliases": [
    "黑洞"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 黑洞物理\n\n## 方向概述\n研究黑洞的解、热力学与观测：从史瓦西几何到事件视界成像。\n\n## 核心问题\n- 黑洞解与扰动、准正规模\n- 黑洞热力学与霍金辐射、信息佯谬\n- 阴影成像与强场检验\n\n## 代表方法与设施\n事件视界望远镜（EHT）、引力波观测、半经典与全息方法。\n\n## 与其他方向的联系\n与 [[r-he-astro]]、[[r-qg]]、[[r-grav-wave]] 交叉。",
   "links": [
    {
     "id": "c-gr",
     "name": "广义相对论",
     "type": "prereq",
     "dir": "out",
     "note": "黑洞是场方程的精确解"
    },
    {
     "id": "r-he-astro",
     "name": "高能天体物理",
     "type": "related",
     "dir": null,
     "note": "吸积黑洞是高能天体的中心引擎"
    },
    {
     "id": "r-qg",
     "name": "量子引力",
     "type": "related",
     "dir": null,
     "note": "信息佯谬指向量子引力"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-grav-wave",
   "name": "引力波",
   "nameEn": "Gravitational Waves",
   "domain": "r-gravity",
   "domainName": "引力与量子引力",
   "color": "#1f16da",
   "aliases": [
    "引力波物理"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 引力波\n\n## 方向概述\narXiv: gr-qc 的核心实验领域。研究引力波的产生、探测与天体物理应用。\n\n## 核心问题\n- 波源建模：双黑洞、双中子星并合\n- 探测器：激光干涉仪、脉冲星计时阵、空间探测\n- 用引力波检验广义相对论与测量宇宙学参数\n\n## 代表方法与设施\nLIGO/Virgo/KAGRA、LISA、太极/天琴计划。\n\n## 与其他方向的联系\n与 [[r-he-astro]]（多信使）、[[r-numerical-rel]]（波形）、[[r-qmetro]]（量子噪声抑制）交叉。",
   "links": [
    {
     "id": "c-gr",
     "name": "广义相对论",
     "type": "prereq",
     "dir": "out",
     "note": "引力波是爱因斯坦方程的波动解"
    },
    {
     "id": "r-he-astro",
     "name": "高能天体物理",
     "type": "related",
     "dir": null,
     "note": "多信使天文学（双中子星并合等）"
    },
    {
     "id": "r-numerical-rel",
     "name": "数值相对论",
     "type": "related",
     "dir": null,
     "note": "波形模板依赖数值模拟"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-numerical-rel",
   "name": "数值相对论",
   "nameEn": "Numerical Relativity",
   "domain": "r-gravity",
   "domainName": "引力与量子引力",
   "color": "#1f16da",
   "aliases": [
    "数值相对论模拟"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 数值相对论\n\n## 方向概述\n在计算机上求解强场、动态时空的爱因斯坦方程。\n\n## 核心问题\n- 3+1 分解与演化格式（BSSN 等）\n- 双黑洞/双中子星并合模拟\n- 引力波模板与临界现象\n\n## 代表方法与设施\n高性能计算集群、开源码（Einstein Toolkit）。\n\n## 与其他方向的联系\n直接服务 [[r-grav-wave]]；与 [[r-he-astro]]（并合电磁对应体）交叉。",
   "links": [
    {
     "id": "c-computational",
     "name": "计算物理",
     "type": "prereq",
     "dir": "out",
     "note": "大规模数值方法"
    },
    {
     "id": "c-gr",
     "name": "广义相对论",
     "type": "prereq",
     "dir": "out",
     "note": "模拟对象是爱因斯坦方程"
    },
    {
     "id": "r-grav-wave",
     "name": "引力波",
     "type": "related",
     "dir": null,
     "note": "波形模板依赖数值模拟"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-qg",
   "name": "量子引力",
   "nameEn": "Quantum Gravity",
   "domain": "r-gravity",
   "domainName": "引力与量子引力",
   "color": "#1f16da",
   "aliases": [
    "量子引力理论"
   ],
   "tags": [],
   "keywords": [],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 量子引力\n\n## 方向概述\narXiv: gr-qc / hep-th 交叉。寻求量子力学与广义相对论统一的理论框架。\n\n## 核心问题\n- 微扰不可重整性的出路：弦论、圈量子引力、渐近安全\n- 全息原理与 AdS/CFT\n- 黑洞信息、时空的涌现\n\n## 代表方法与设施\n形式理论方法为主；观测上寄望原初引力波与黑洞物理。\n\n## 与其他方向的联系\n与 [[r-hep-th]]、[[r-cosmology]]（极早期宇宙）、[[r-black-hole]] 交叉。",
   "links": [
    {
     "id": "c-gr",
     "name": "广义相对论",
     "type": "prereq",
     "dir": "out",
     "note": "被量子化的对象是时空几何"
    },
    {
     "id": "c-qft",
     "name": "量子场论",
     "type": "prereq",
     "dir": "out",
     "note": "量子化方法是场论方法"
    },
    {
     "id": "r-black-hole",
     "name": "黑洞物理",
     "type": "related",
     "dir": null,
     "note": "信息佯谬指向量子引力"
    },
    {
     "id": "r-cosmology",
     "name": "宇宙学",
     "type": "related",
     "dir": null,
     "note": "普朗克时期需要量子引力"
    },
    {
     "id": "r-hep-th",
     "name": "形式理论（弦论与超对称）",
     "type": "related",
     "dir": null,
     "note": "弦论是主要途径之一"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-hep-ex",
   "name": "粒子物理实验",
   "nameEn": "Experimental Particle Physics",
   "domain": "r-hep",
   "domainName": "高能物理",
   "color": "#3c49ec",
   "aliases": [
    "高能实验"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 粒子物理实验\n\n## 方向概述\narXiv: hep-ex。在对撞机与非对撞机实验上检验标准模型、寻找新物理。\n\n## 核心问题\n- 希格斯性质精确测量、顶夸克与味物理\n- 中微子振荡实验\n- 暗物质直接探测、新粒子寻找\n\n## 代表方法与设施\nLHC（ATLAS/CMS）、BESIII、江门中微子实验（JUNO）。\n\n## 与其他方向的联系\n与 [[r-hep-ph]]（理论解释）、[[r-hic]]（重离子对撞）交叉。",
   "links": [
    {
     "id": "c-particle-nuclear",
     "name": "粒子与核物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-hep-ph",
     "name": "粒子唯象学",
     "type": "related",
     "dir": null,
     "note": "实验检验唯象预言"
    },
    {
     "id": "r-hic",
     "name": "重离子物理",
     "type": "related",
     "dir": null,
     "note": "共享对撞机实验技术"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-hep-ph",
   "name": "粒子唯象学",
   "nameEn": "Particle Phenomenology",
   "domain": "r-hep",
   "domainName": "高能物理",
   "color": "#3c49ec",
   "aliases": [
    "粒子唯象"
   ],
   "tags": [],
   "keywords": [],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 粒子唯象学\n\n## 方向概述\narXiv: hep-ph。连接形式理论与实验：从标准模型精确计算到新物理模型的可观测预言。\n\n## 核心问题\n- 标准模型的高阶修正与精确检验\n- 超出标准模型的新物理（超对称、额外维等）\n- 味物理与 CP 破坏、中微子质量模型\n\n## 代表方法与设施\n微扰 QFT 计算、有效场论、蒙特卡洛事例生成。\n\n## 与其他方向的联系\n与 [[r-hep-ex]]、[[r-cosmology]]、[[r-lattice]]（强子矩阵元）交叉。",
   "links": [
    {
     "id": "c-particle-nuclear",
     "name": "粒子与核物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "c-qft",
     "name": "量子场论",
     "type": "prereq",
     "dir": "out",
     "note": "计算工具是量子场论"
    },
    {
     "id": "r-cosmology",
     "name": "宇宙学",
     "type": "related",
     "dir": null,
     "note": "粒子宇宙学交叉"
    },
    {
     "id": "r-hep-ex",
     "name": "粒子物理实验",
     "type": "related",
     "dir": null,
     "note": "实验检验唯象预言"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-hep-th",
   "name": "形式理论（弦论与超对称）",
   "nameEn": "Formal High-Energy Theory",
   "domain": "r-hep",
   "domainName": "高能物理",
   "color": "#3c49ec",
   "aliases": [
    "弦论",
    "形式高能理论"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 形式理论（弦论与超对称）\n\n## 方向概述\narXiv: hep-th。研究量子场论与引力的深层结构：弦论、超对称、全息对偶与散射振幅。\n\n## 核心问题\n- 弦论与 M 理论、紧化与现象学\n- 超对称场论、超引力\n- AdS/CFT 对应、现代振幅方法\n\n## 代表方法与设施\n解析方法为主（共形场论、可积性、振幅 Bootstrap）。\n\n## 与其他方向的联系\n与 [[r-qg]]、[[r-phase]]（全息凝聚态应用）交叉。",
   "links": [
    {
     "id": "c-qft",
     "name": "量子场论",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-qg",
     "name": "量子引力",
     "type": "related",
     "dir": null,
     "note": "弦论是量子引力的候选"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-lattice",
   "name": "格点场论",
   "nameEn": "Lattice Field Theory",
   "domain": "r-hep",
   "domainName": "高能物理",
   "color": "#3c49ec",
   "aliases": [
    "格点QCD"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 格点场论\n\n## 方向概述\narXiv: hep-lat。把时空离散化为格点，用蒙特卡洛方法非微扰求解 QCD 等规范理论。\n\n## 核心问题\n- 强子谱与强子结构\n- QCD 相变与有限温度密度\n- 味物理所需的强子矩阵元\n\n## 代表方法与设施\n超级计算机、格点 QCD 国际合作组。\n\n## 与其他方向的联系\n与 [[r-hic]]、[[r-hep-ph]]、[[r-nucl-structure]]（核力的格点研究）交叉。",
   "links": [
    {
     "id": "c-computational",
     "name": "计算物理",
     "type": "prereq",
     "dir": "out",
     "note": "格点计算是大规模数值模拟"
    },
    {
     "id": "c-qft",
     "name": "量子场论",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-hic",
     "name": "重离子物理",
     "type": "related",
     "dir": null,
     "note": "QCD 相图与状态方程"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-hic",
   "name": "重离子物理",
   "nameEn": "Heavy-Ion Physics",
   "domain": "r-nuclear",
   "domainName": "核物理",
   "color": "#163bda",
   "aliases": [
    "相对论重离子碰撞"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 重离子物理\n\n## 方向概述\narXiv: nucl-ex/th 与 hep-ex 交叉。用相对论性重离子碰撞产生并研究夸克-胶子等离子体（QGP）。\n\n## 核心问题\n- QGP 的性质：近理想流体行为、喷注淬火\n- QCD 相图与临界点寻找\n- 小系统中的集体性\n\n## 代表方法与设施\nRHIC、LHC-ALICE；流体动力学模拟。\n\n## 与其他方向的联系\n与 [[r-lattice]]、[[r-hep-ex]]、[[r-fluid-dyn]]（流体描述）交叉。",
   "links": [
    {
     "id": "c-particle-nuclear",
     "name": "粒子与核物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-hep-ex",
     "name": "粒子物理实验",
     "type": "related",
     "dir": null,
     "note": "共享对撞机实验技术"
    },
    {
     "id": "r-lattice",
     "name": "格点场论",
     "type": "related",
     "dir": null,
     "note": "QCD 相图的格点结果"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-nucl-astro",
   "name": "核天体物理",
   "nameEn": "Nuclear Astrophysics",
   "domain": "r-nuclear",
   "domainName": "核物理",
   "color": "#163bda",
   "aliases": [
    "核天体"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 核天体物理\n\n## 方向概述\n研究天体环境中的核过程：元素如何被合成、恒星如何燃烧。\n\n## 核心问题\n- 大爆炸与恒星核合成\n- 快/慢中子俘获过程（r 过程、s 过程）的核数据与场所\n- 中子星物态方程\n\n## 代表方法与设施\n深地实验室（JUNA）、放射性束装置、引力波/电磁多信使观测。\n\n## 与其他方向的联系\n与 [[r-stellar]]（恒星演化）、[[r-he-astro]]（超新星与中子星）交叉。",
   "links": [
    {
     "id": "c-particle-nuclear",
     "name": "粒子与核物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-he-astro",
     "name": "高能天体物理",
     "type": "related",
     "dir": null,
     "note": "核过程决定高能辐射机制"
    },
    {
     "id": "r-stellar",
     "name": "恒星物理",
     "type": "related",
     "dir": null,
     "note": "恒星核燃烧即核天体物理"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-nucl-reaction",
   "name": "核反应",
   "nameEn": "Nuclear Reactions",
   "domain": "r-nuclear",
   "domainName": "核物理",
   "color": "#163bda",
   "aliases": [
    "原子核反应"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 核反应\n\n## 方向概述\narXiv: nucl-ex。研究核反应机制与截面，及其在能源、核技术与天体中的应用。\n\n## 核心问题\n- 直接反应与复合核反应机制\n- 熔合与裂变动力学\n- 核数据测量与评价、核能物理\n\n## 代表方法与设施\n加速器束流实验、反应堆与散裂中子源。\n\n## 与其他方向的联系\n与 [[r-nucl-structure]]、[[r-nucl-astro]]（天体截面）、[[r-medphy]] 交叉。",
   "links": [
    {
     "id": "c-particle-nuclear",
     "name": "粒子与核物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-medphy",
     "name": "医学物理",
     "type": "related",
     "dir": null,
     "note": "核数据支撑放射治疗与成像"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-nucl-structure",
   "name": "核结构",
   "nameEn": "Nuclear Structure",
   "domain": "r-nuclear",
   "domainName": "核物理",
   "color": "#163bda",
   "aliases": [
    "原子核结构"
   ],
   "tags": [],
   "keywords": [],
   "size": 28,
   "degree": 1,
   "pos": null,
   "fixed": false,
   "body": "# 核结构\n\n## 方向概述\narXiv: nucl-th/ex。研究原子核作为量子多体系统的结构与性质。\n\n## 核心问题\n- 壳模型与集体模型、从头算方法\n- 奇特核（晕核、滴线核）\n- 核对称能与超重元素\n\n## 代表方法与设施\n放射性束装置（HIRFL、HIAF）、伽马谱学。\n\n## 与其他方向的联系\n与 [[r-nucl-reaction]]、[[r-lattice]]（核力来源）交叉。",
   "links": [
    {
     "id": "c-particle-nuclear",
     "name": "粒子与核物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-icf",
   "name": "惯性约束与高能量密度物理",
   "nameEn": "Inertial Confinement Fusion & HEDP",
   "domain": "r-plasma",
   "domainName": "等离子体物理",
   "color": "#169ada",
   "aliases": [
    "惯性约束聚变",
    "高能量密度物理"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 惯性约束与高能量密度物理\n\n## 方向概述\n用强驱动（激光、Z 箍缩）把燃料压缩到极端密度温度，研究点火与极端物态。\n\n## 核心问题\n- 内爆流体稳定性（RT/RM 不稳定性）\n- 点火与燃烧物理\n- 温稠密物质与状态方程\n\n## 代表方法与设施\nNIF、神光系列装置；辐射流体模拟。\n\n## 与其他方向的联系\n与 [[r-mcf]]、[[r-laser-plasma]]、[[r-materials]]（状态方程）交叉。",
   "links": [
    {
     "id": "c-plasma-intro",
     "name": "等离子体物理基础",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-laser-plasma",
     "name": "激光等离子体",
     "type": "related",
     "dir": null,
     "note": "激光是主要驱动源"
    },
    {
     "id": "r-mcf",
     "name": "磁约束聚变",
     "type": "related",
     "dir": null,
     "note": "另一条聚变路线"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-laser-plasma",
   "name": "激光等离子体",
   "nameEn": "Laser-Plasma Physics",
   "domain": "r-plasma",
   "domainName": "等离子体物理",
   "color": "#169ada",
   "aliases": [
    "激光等离子体相互作用"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 激光等离子体\n\n## 方向概述\n研究强激光与等离子体相互作用及其加速与辐射应用。\n\n## 核心问题\n- 激光尾场加速电子/离子\n- 快点火与冲击点火\n- 实验室天体物理（喷流、激波类比）\n\n## 代表方法与设施\n拍瓦激光装置、粒子与辐射诊断。\n\n## 与其他方向的联系\n与 [[r-laser]]、[[r-icf]]、[[r-he-astro]] 交叉。",
   "links": [
    {
     "id": "c-plasma-intro",
     "name": "等离子体物理基础",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-icf",
     "name": "惯性约束与高能量密度物理",
     "type": "related",
     "dir": null,
     "note": "激光是主要驱动源"
    },
    {
     "id": "r-laser",
     "name": "激光物理",
     "type": "related",
     "dir": null,
     "note": "高功率激光驱动等离子体"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-mcf",
   "name": "磁约束聚变",
   "nameEn": "Magnetic Confinement Fusion",
   "domain": "r-plasma",
   "domainName": "等离子体物理",
   "color": "#169ada",
   "aliases": [
    "托卡马克"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 磁约束聚变\n\n## 方向概述\narXiv: physics.plasm-ph 核心。用强磁场约束高温等离子体以实现受控聚变。\n\n## 核心问题\n- 托卡马克平衡与稳定性\n- 湍流与反常输运\n- 边界物理（偏滤器）与燃烧等离子体\n\n## 代表方法与设施\nEAST、ITER、CFETR；平衡与不稳定性数值程序。\n\n## 与其他方向的联系\n与 [[r-icf]]、[[r-fluid-dyn]]（MHD）、[[r-materials]]（面向等离子体材料）交叉。",
   "links": [
    {
     "id": "c-plasma-intro",
     "name": "等离子体物理基础",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-icf",
     "name": "惯性约束与高能量密度物理",
     "type": "related",
     "dir": null,
     "note": "另一条聚变路线"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-space-plasma",
   "name": "空间等离子体",
   "nameEn": "Space Plasma Physics",
   "domain": "r-plasma",
   "domainName": "等离子体物理",
   "color": "#169ada",
   "aliases": [
    "空间物理"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 空间等离子体\n\n## 方向概述\narXiv: physics.space-ph。研究日地空间与天体环境中的等离子体过程。\n\n## 核心问题\n- 磁层动力学与磁重联\n- 太阳风加速与加热\n- 空间天气、辐射带\n\n## 代表方法与设施\n卫星就位探测（MMS、帕克探针）、全球 MHD 模拟。\n\n## 与其他方向的联系\n与 [[r-atmos]]、[[r-turbulence]]、[[r-he-astro]]（天体等离子体）交叉。",
   "links": [
    {
     "id": "c-plasma-intro",
     "name": "等离子体物理基础",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-atmos",
     "name": "大气物理",
     "type": "related",
     "dir": null,
     "note": "空间天气影响高层大气"
    },
    {
     "id": "r-turbulence",
     "name": "湍流",
     "type": "related",
     "dir": null,
     "note": "太阳风是天然湍流实验室"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-cold-atom",
   "name": "冷原子与量子气体",
   "nameEn": "Cold Atoms and Quantum Gases",
   "domain": "r-quantum",
   "domainName": "量子物理与量子信息",
   "color": "#3c73ec",
   "aliases": [
    "超冷原子"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 冷原子与量子气体\n\n## 方向概述\narXiv: cond-mat.quant-gas / quant-ph 交叉。研究激光冷却原子形成的量子简并气体。\n\n## 核心问题\n- 玻色-爱因斯坦凝聚与简并费米气体\n- 光晶格中的强关联物理\n- 少体问题（Efimov 效应）与极化子\n\n## 代表方法与设施\n激光冷却、磁光阱、蒸发冷却、Feshbach 共振。\n\n## 与其他方向的联系\n与 [[r-qoptics]]、[[r-qsim]]、[[r-strong-corr]] 交叉。",
   "links": [
    {
     "id": "c-amo-course",
     "name": "原子分子与光物理",
     "type": "prereq",
     "dir": "out",
     "note": "激光冷却与囚禁是 AMO 技术"
    },
    {
     "id": "r-qoptics",
     "name": "量子光学",
     "type": "related",
     "dir": null,
     "note": "光与原子相互作用"
    },
    {
     "id": "r-qsim",
     "name": "量子模拟",
     "type": "related",
     "dir": null,
     "note": "冷原子是主要模拟平台"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-qc",
   "name": "量子计算",
   "nameEn": "Quantum Computing",
   "domain": "r-quantum",
   "domainName": "量子物理与量子信息",
   "color": "#3c73ec",
   "aliases": [
    "量子计算机"
   ],
   "tags": [],
   "keywords": [],
   "size": 68,
   "degree": 5,
   "pos": null,
   "fixed": false,
   "body": "# 量子计算\n\n## 方向概述\narXiv: quant-ph 核心。建造利用量子叠加与纠缠进行计算的设备与算法。\n\n## 核心问题\n- 硬件平台：超导、离子阱、中性原子、光量子\n- 量子算法与量子优势\n- 量子纠错与容错计算\n\n## 代表方法与设施\n超导/离子阱处理器、量子云平台。\n\n## 与其他方向的联系\n与 [[r-qsim]]、[[r-meso]]（拓扑比特）、[[r-superconduct]]（超导电路）交叉。",
   "links": [
    {
     "id": "c-quantum-info-intro",
     "name": "量子信息导论",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-meso",
     "name": "介观与纳米物理",
     "type": "related",
     "dir": null,
     "note": "量子点与拓扑器件是量子计算平台"
    },
    {
     "id": "r-qcomm",
     "name": "量子通信",
     "type": "related",
     "dir": null,
     "note": "共享纠缠资源与量子网络"
    },
    {
     "id": "r-qoptics",
     "name": "量子光学",
     "type": "related",
     "dir": null,
     "note": "光子是量子计算的载体之一"
    },
    {
     "id": "r-qsim",
     "name": "量子模拟",
     "type": "related",
     "dir": null,
     "note": "模拟是计算的重要应用"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-qcomm",
   "name": "量子通信",
   "nameEn": "Quantum Communication",
   "domain": "r-quantum",
   "domainName": "量子物理与量子信息",
   "color": "#3c73ec",
   "aliases": [
    "量子保密通信"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 量子通信\n\n## 方向概述\n利用量子态传输信息：量子密钥分发与量子网络。\n\n## 核心问题\n- 量子密钥分发（QKD）协议与安全性\n- 量子中继与量子存储\n- 星地量子通信与量子互联网\n\n## 代表方法与设施\n光纤与自由空间链路、墨子号卫星。\n\n## 与其他方向的联系\n与 [[r-qc]]、[[r-qmetro]]（单光子探测）交叉。",
   "links": [
    {
     "id": "c-quantum-info-intro",
     "name": "量子信息导论",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-qc",
     "name": "量子计算",
     "type": "related",
     "dir": null,
     "note": "共享纠缠资源与量子网络"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-qmetro",
   "name": "量子精密测量",
   "nameEn": "Quantum Metrology and Sensing",
   "domain": "r-quantum",
   "domainName": "量子物理与量子信息",
   "color": "#3c73ec",
   "aliases": [
    "量子传感"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 量子精密测量\n\n## 方向概述\n利用量子资源（压缩、纠缠）突破经典测量极限。\n\n## 核心问题\n- 量子增强干涉与压缩态\n- 原子钟与光钟\n- 量子传感：磁场、惯性、引力测量\n\n## 代表方法与设施\n光晶格钟、原子干涉仪、金刚石 NV 色心。\n\n## 与其他方向的联系\n与 [[r-spectroscopy]]、[[r-grav-wave]]（量子噪声）、[[r-he-astro]]（基本常数检验）交叉。",
   "links": [
    {
     "id": "c-quantum-info-intro",
     "name": "量子信息导论",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "c-frontier-lab",
     "name": "前沿物理实验（精密测量）",
     "type": "related",
     "dir": null,
     "note": "精密测量实验训练"
    },
    {
     "id": "r-spectroscopy",
     "name": "精密光谱",
     "type": "related",
     "dir": null,
     "note": "原子钟与频率测量"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-qsim",
   "name": "量子模拟",
   "nameEn": "Quantum Simulation",
   "domain": "r-quantum",
   "domainName": "量子物理与量子信息",
   "color": "#3c73ec",
   "aliases": [
    "量子模拟器"
   ],
   "tags": [],
   "keywords": [],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 量子模拟\n\n## 方向概述\n用可控量子系统模拟难以计算的量子多体问题。\n\n## 核心问题\n- 哈伯德模型的冷原子模拟\n- 量子磁性、规范场模拟\n- 变分量子算法与近期（NISQ）模拟\n\n## 代表方法与设施\n光晶格、里德伯原子阵列、离子链。\n\n## 与其他方向的联系\n与 [[r-cold-atom]]、[[r-strong-corr]]、[[r-qc]] 交叉。",
   "links": [
    {
     "id": "c-quantum-info-intro",
     "name": "量子信息导论",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-cold-atom",
     "name": "冷原子与量子气体",
     "type": "related",
     "dir": null,
     "note": "冷原子是主要模拟平台"
    },
    {
     "id": "r-qc",
     "name": "量子计算",
     "type": "related",
     "dir": null,
     "note": "模拟是计算的重要应用"
    },
    {
     "id": "r-strong-corr",
     "name": "强关联电子",
     "type": "related",
     "dir": null,
     "note": "模拟目标是强关联模型"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-biophy",
   "name": "生物物理",
   "nameEn": "Biological Physics",
   "domain": "r-softbio",
   "domainName": "软物质与生物物理",
   "color": "#16dabd",
   "aliases": [
    "生物物理学"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 生物物理\n\n## 方向概述\narXiv: physics.bio-ph。用物理的概念与定量方法研究生命体系。\n\n## 核心问题\n- 单分子生物物理（蛋白质折叠、分子马达）\n- 膜与细胞力学\n- 神经与系统生物的物理建模\n\n## 代表方法与设施\n单分子操纵（光镊、磁镊）、荧光成像、理论建模。\n\n## 与其他方向的联系\n与 [[r-soft]]、[[r-noneq]]、[[r-stochastic]] 交叉。",
   "links": [
    {
     "id": "c-statistical-mechanics",
     "name": "热力学与统计物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-soft",
     "name": "软物质物理",
     "type": "related",
     "dir": null,
     "note": "生物体系多为软物质"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-medphy",
   "name": "医学物理",
   "nameEn": "Medical Physics",
   "domain": "r-softbio",
   "domainName": "软物质与生物物理",
   "color": "#16dabd",
   "aliases": [
    "医学物理学"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 医学物理\n\n## 方向概述\narXiv: physics.med-ph。把核物理与成像物理应用于诊断与治疗。\n\n## 核心问题\n- 放射治疗物理与剂量学\n- 医学成像（CT、MRI、PET）\n- 质子/重离子治疗\n\n## 代表方法与设施\n医用加速器、成像系统、蒙特卡洛剂量计算。\n\n## 与其他方向的联系\n与 [[r-biophy]]、[[r-nucl-reaction]]（核数据）交叉。",
   "links": [
    {
     "id": "c-atomic",
     "name": "原子物理（近代物理）",
     "type": "prereq",
     "dir": "out",
     "note": "电离辐射与成像的物理基础"
    },
    {
     "id": "r-nucl-reaction",
     "name": "核反应",
     "type": "related",
     "dir": null,
     "note": "核数据支撑放射治疗与成像"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-soft",
   "name": "软物质物理",
   "nameEn": "Soft Matter Physics",
   "domain": "r-softbio",
   "domainName": "软物质与生物物理",
   "color": "#16dabd",
   "aliases": [
    "软凝聚态"
   ],
   "tags": [],
   "keywords": [],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 软物质物理\n\n## 方向概述\narXiv: cond-mat.soft。研究热涨落与弱相互作用主导的凝聚体系。\n\n## 核心问题\n- 聚合物、胶体、液晶的统计物理\n- 自组装与凝胶\n- 活性物质（自驱动粒子体系）\n\n## 代表方法与设施\n光镊、共聚焦显微镜、粗粒化模拟。\n\n## 与其他方向的联系\n与 [[r-biophy]]、[[r-noneq]]、[[r-pattern]] 交叉。",
   "links": [
    {
     "id": "c-statistical-mechanics",
     "name": "热力学与统计物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-biophy",
     "name": "生物物理",
     "type": "related",
     "dir": null,
     "note": "生物体系多为软物质"
    },
    {
     "id": "r-noneq",
     "name": "非平衡统计物理",
     "type": "related",
     "dir": null,
     "note": "软物质是典型的驱动耗散体系"
    },
    {
     "id": "r-pattern",
     "name": "图案形成",
     "type": "related",
     "dir": null,
     "note": "软物质是斑图的典型载体"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-complex",
   "name": "复杂系统与交叉科学",
   "nameEn": "Complex Systems",
   "domain": "r-statphys",
   "domainName": "统计物理与复杂系统",
   "color": "#3cc7ec",
   "aliases": [
    "交叉科学"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 复杂系统与交叉科学\n\n## 方向概述\narXiv: physics.soc-ph 等。把统计物理思想推广到由大量个体组成的复杂系统。\n\n## 核心问题\n- 复杂网络的结构与动力学\n- 集体行为（蜂拥、意见动力学）\n- 经济物理与社会物理\n\n## 代表方法与设施\n基于主体的模拟、大数据实证分析。\n\n## 与其他方向的联系\n与 [[r-noneq]]、[[r-stochastic]]、[[r-nonlinear]] 交叉。",
   "links": [
    {
     "id": "c-statistical-mechanics",
     "name": "热力学与统计物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-noneq",
     "name": "非平衡统计物理",
     "type": "related",
     "dir": null,
     "note": "复杂系统多为非平衡"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-noneq",
   "name": "非平衡统计物理",
   "nameEn": "Non-Equilibrium Statistical Mechanics",
   "domain": "r-statphys",
   "domainName": "统计物理与复杂系统",
   "color": "#3cc7ec",
   "aliases": [
    "非平衡态"
   ],
   "tags": [],
   "keywords": [],
   "size": 58,
   "degree": 4,
   "pos": null,
   "fixed": false,
   "body": "# 非平衡统计物理\n\n## 方向概述\n研究远离平衡态的涨落与输运规律，是统计物理当前最活跃的前沿之一。\n\n## 核心问题\n- 涨落定理与随机热力学\n- 输运理论与反常输运\n- 驱动-耗散系统的稳态\n\n## 代表方法与设施\n解析理论（大偏差）、胶体实验验证。\n\n## 与其他方向的联系\n与 [[r-soft]]、[[r-biophy]]（分子马达）、[[r-complex]] 交叉。",
   "links": [
    {
     "id": "c-statistical-mechanics",
     "name": "热力学与统计物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-complex",
     "name": "复杂系统与交叉科学",
     "type": "related",
     "dir": null,
     "note": "复杂系统多为非平衡"
    },
    {
     "id": "r-soft",
     "name": "软物质物理",
     "type": "related",
     "dir": null,
     "note": "软物质是典型的驱动耗散体系"
    },
    {
     "id": "r-stochastic",
     "name": "随机过程",
     "type": "related",
     "dir": null,
     "note": "随机热力学是共同语言"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-phase",
   "name": "相变与临界现象",
   "nameEn": "Phase Transitions and Critical Phenomena",
   "domain": "r-statphys",
   "domainName": "统计物理与复杂系统",
   "color": "#3cc7ec",
   "aliases": [
    "临界现象"
   ],
   "tags": [],
   "keywords": [],
   "size": 38,
   "degree": 2,
   "pos": null,
   "fixed": false,
   "body": "# 相变与临界现象\n\n## 方向概述\narXiv: cond-mat.stat-mech 核心。研究物质状态突变附近的普适规律。\n\n## 核心问题\n- 普适性与标度律、重整化群\n- 量子相变\n- 阻挫与无序系统的相变\n\n## 代表方法与设施\n场论方法、蒙特卡洛模拟、张量网络。\n\n## 与其他方向的联系\n与 [[r-strong-corr]]、[[r-hep-th]]（全息与场论方法互通）交叉。",
   "links": [
    {
     "id": "c-statistical-mechanics",
     "name": "热力学与统计物理",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "r-strong-corr",
     "name": "强关联电子",
     "type": "related",
     "dir": null,
     "note": "量子相变是核心议题"
    }
   ],
   "softLinks": []
  },
  {
   "id": "r-stochastic",
   "name": "随机过程",
   "nameEn": "Stochastic Processes",
   "domain": "r-statphys",
   "domainName": "统计物理与复杂系统",
   "color": "#3cc7ec",
   "aliases": [
    "随机动力学"
   ],
   "tags": [],
   "keywords": [],
   "size": 48,
   "degree": 3,
   "pos": null,
   "fixed": false,
   "body": "# 随机过程\n\n## 方向概述\n研究随机动力学本身：从布朗运动到反常扩散的数学与物理。\n\n## 核心问题\n- 朗之万与福克-普朗克方程\n- 首达时间与搜索过程\n- 反常扩散与非高斯涨落\n\n## 代表方法与设施\n随机分析、单粒子追踪实验。\n\n## 与其他方向的联系\n与 [[r-noneq]]、[[r-biophy]]、[[r-complex]]（金融与社交网络建模）交叉。",
   "links": [
    {
     "id": "c-probability",
     "name": "概率论与数理统计",
     "type": "prereq",
     "dir": "out",
     "note": "课程基础"
    },
    {
     "id": "c-statistical-mechanics",
     "name": "热力学与统计物理",
     "type": "prereq",
     "dir": "out",
     "note": "物理应用背景"
    },
    {
     "id": "r-noneq",
     "name": "非平衡统计物理",
     "type": "related",
     "dir": null,
     "note": "随机热力学是共同语言"
    }
   ],
   "softLinks": []
  }
 ],
 "links": [
  {
   "source": "c-electromagnetism",
   "target": "c-electrodynamics",
   "type": "prereq",
   "soft": false,
   "notes": [
    "电磁学定律是本课程的系统化对象"
   ]
  },
  {
   "source": "c-math-methods",
   "target": "c-electrodynamics",
   "type": "prereq",
   "soft": false,
   "notes": [
    "边值问题需要数理方程与特殊函数"
   ]
  },
  {
   "source": "c-theoretical-mechanics",
   "target": "c-electrodynamics",
   "type": "prereq",
   "soft": false,
   "notes": [
    "相对论性表述需要分析力学语言"
   ]
  },
  {
   "source": "c-atomic",
   "target": "c-quantum-mechanics",
   "type": "prereq",
   "soft": false,
   "notes": [
    "原子物理的实验事实与本课程衔接"
   ]
  },
  {
   "source": "c-math-methods",
   "target": "c-quantum-mechanics",
   "type": "prereq",
   "soft": false,
   "notes": [
    "薛定谔方程求解依赖数理方法"
   ]
  },
  {
   "source": "c-theoretical-mechanics",
   "target": "c-quantum-mechanics",
   "type": "prereq",
   "soft": false,
   "notes": [
    "哈密顿形式是量子化的出发点"
   ]
  },
  {
   "source": "c-thermo",
   "target": "c-statistical-mechanics",
   "type": "prereq",
   "soft": false,
   "notes": [
    "宏观热力学是本课程的微观化对象"
   ]
  },
  {
   "source": "c-math-methods",
   "target": "c-statistical-mechanics",
   "type": "prereq",
   "soft": false,
   "notes": [
    "系综计算需要积分与级数工具"
   ]
  },
  {
   "source": "c-mechanics",
   "target": "c-theoretical-mechanics",
   "type": "prereq",
   "soft": false,
   "notes": [
    "牛顿力学是本课程重写与深化的对象"
   ]
  },
  {
   "source": "c-math-methods",
   "target": "c-theoretical-mechanics",
   "type": "prereq",
   "soft": false,
   "notes": [
    "变分法与偏微分方程工具"
   ]
  },
  {
   "source": "c-quantum-mechanics",
   "target": "c-advanced-qm",
   "type": "prereq",
   "soft": false,
   "notes": [
    "本课程是量子力学的深化"
   ]
  },
  {
   "source": "c-quantum-mechanics",
   "target": "c-amo-course",
   "type": "prereq",
   "soft": false,
   "notes": [
    "原子分子结构的定量理论"
   ]
  },
  {
   "source": "c-electrodynamics",
   "target": "c-amo-course",
   "type": "prereq",
   "soft": false,
   "notes": [
    "光与物质相互作用的经典电磁基础"
   ]
  },
  {
   "source": "c-mechanics",
   "target": "c-astro-intro",
   "type": "prereq",
   "soft": false,
   "notes": [
    "天体力学与结构平衡的基础"
   ]
  },
  {
   "source": "c-atomic",
   "target": "c-astro-intro",
   "type": "prereq",
   "soft": false,
   "notes": [
    "恒星光谱与核过程的物理基础"
   ]
  },
  {
   "source": "c-computational",
   "target": "c-computational-adv",
   "type": "prereq",
   "soft": false,
   "notes": [
    "本课程是计算物理的深化"
   ]
  },
  {
   "source": "c-theoretical-mechanics",
   "target": "c-fluid",
   "type": "prereq",
   "soft": false,
   "notes": [
    "连续介质力学是分析力学的延伸"
   ]
  },
  {
   "source": "c-theoretical-mechanics",
   "target": "c-gr",
   "type": "prereq",
   "soft": false,
   "notes": [
    "变分原理与时空几何表述"
   ]
  },
  {
   "source": "c-electrodynamics",
   "target": "c-gr",
   "type": "prereq",
   "soft": false,
   "notes": [
    "协变形式与张量运算的预备"
   ]
  },
  {
   "source": "c-linear-algebra",
   "target": "c-group-theory",
   "type": "prereq",
   "soft": false,
   "notes": [
    "表示论建立在线性代数之上"
   ]
  },
  {
   "source": "c-quantum-mechanics",
   "target": "c-group-theory",
   "type": "prereq",
   "soft": false,
   "notes": [
    "对称性与角动量理论是主要应用"
   ]
  },
  {
   "source": "c-quantum-mechanics",
   "target": "c-particle-nuclear",
   "type": "prereq",
   "soft": false,
   "notes": [
    "衰变、散射与壳模型都是量子理论"
   ]
  },
  {
   "source": "c-atomic",
   "target": "c-particle-nuclear",
   "type": "prereq",
   "soft": false,
   "notes": [
    "原子核知识承接原子物理"
   ]
  },
  {
   "source": "c-electrodynamics",
   "target": "c-plasma-intro",
   "type": "prereq",
   "soft": false,
   "notes": [
    "等离子体是电磁场中的带电粒子体系"
   ]
  },
  {
   "source": "c-statistical-mechanics",
   "target": "c-plasma-intro",
   "type": "prereq",
   "soft": false,
   "notes": [
    "等离子体的统计描述"
   ]
  },
  {
   "source": "c-advanced-qm",
   "target": "c-qft",
   "type": "prereq",
   "soft": false,
   "notes": [
    "二次量子化与相对论量子力学是直接基础"
   ]
  },
  {
   "source": "c-electrodynamics",
   "target": "c-qft",
   "type": "prereq",
   "soft": false,
   "notes": [
    "规范场与协变形式的经典范本"
   ]
  },
  {
   "source": "c-quantum-mechanics",
   "target": "c-quantum-info-intro",
   "type": "prereq",
   "soft": false,
   "notes": [
    "量子比特与纠缠是量子力学概念"
   ]
  },
  {
   "source": "c-linear-algebra",
   "target": "c-quantum-info-intro",
   "type": "prereq",
   "soft": false,
   "notes": [
    "量子门即酉矩阵"
   ]
  },
  {
   "source": "c-quantum-mechanics",
   "target": "c-solid-state",
   "type": "prereq",
   "soft": false,
   "notes": [
    "能带论建立在量子力学之上"
   ]
  },
  {
   "source": "c-statistical-mechanics",
   "target": "c-solid-state",
   "type": "prereq",
   "soft": false,
   "notes": [
    "声子与电子统计需要统计物理"
   ]
  },
  {
   "source": "c-optics",
   "target": "c-atomic",
   "type": "prereq",
   "soft": false,
   "notes": [
    "光谱学事实是原子理论的实验依据"
   ]
  },
  {
   "source": "c-electromagnetism",
   "target": "c-atomic",
   "type": "prereq",
   "soft": false,
   "notes": [
    "原子结构的库仑相互作用图景"
   ]
  },
  {
   "source": "c-mechanics",
   "target": "c-electromagnetism",
   "type": "prereq",
   "soft": false,
   "notes": [
    "受力分析与能量观念来自力学"
   ]
  },
  {
   "source": "c-calculus",
   "target": "c-mechanics",
   "type": "prereq",
   "soft": false,
   "notes": [
    "运动学与动力学用微积分表述"
   ]
  },
  {
   "source": "c-electromagnetism",
   "target": "c-optics",
   "type": "prereq",
   "soft": false,
   "notes": [
    "光的电磁理论是波动光学的基础"
   ]
  },
  {
   "source": "c-mechanics",
   "target": "c-thermo",
   "type": "prereq",
   "soft": false,
   "notes": [
    "分子动理论以力学为基础"
   ]
  },
  {
   "source": "c-math-methods",
   "target": "c-computational",
   "type": "prereq",
   "soft": false,
   "notes": [
    "数值求解的对象是数理方程"
   ]
  },
  {
   "source": "c-modern-lab",
   "target": "c-frontier-lab",
   "type": "prereq",
   "soft": false,
   "notes": [
    "以近代物理实验的训练为基础"
   ]
  },
  {
   "source": "c-mechanics",
   "target": "c-general-lab",
   "type": "prereq",
   "soft": false,
   "notes": [
    "力热实验与理论课同步或稍后开设"
   ]
  },
  {
   "source": "c-general-lab",
   "target": "c-modern-lab",
   "type": "prereq",
   "soft": false,
   "notes": [
    "需要先修完基础实验训练"
   ]
  },
  {
   "source": "c-atomic",
   "target": "c-modern-lab",
   "type": "prereq",
   "soft": false,
   "notes": [
    "多数实验基于原子与核物理现象"
   ]
  },
  {
   "source": "c-probability",
   "target": "c-modern-lab",
   "type": "prereq",
   "soft": false,
   "notes": [
    "计数统计与误差分析需要概率论"
   ]
  },
  {
   "source": "c-calculus",
   "target": "c-math-methods",
   "type": "prereq",
   "soft": false,
   "notes": [
    "微积分是全部内容的出发点"
   ]
  },
  {
   "source": "c-linear-algebra",
   "target": "c-math-methods",
   "type": "prereq",
   "soft": false,
   "notes": [
    "函数空间与本征展开需要线性代数语言"
   ]
  },
  {
   "source": "c-calculus",
   "target": "c-probability",
   "type": "prereq",
   "soft": false,
   "notes": [
    "微积分是概率密度与期望计算的基础"
   ]
  },
  {
   "source": "c-amo-course",
   "target": "r-atommol",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-atommol",
   "target": "r-spectroscopy",
   "type": "related",
   "soft": false,
   "notes": [
    "精密测量原子分子结构"
   ]
  },
  {
   "source": "c-amo-course",
   "target": "r-laser",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-laser",
   "target": "r-ultrafast",
   "type": "related",
   "soft": false,
   "notes": [
    "超快激光是直接延伸"
   ]
  },
  {
   "source": "r-laser",
   "target": "r-laser-plasma",
   "type": "related",
   "soft": false,
   "notes": [
    "高功率激光驱动等离子体"
   ]
  },
  {
   "source": "c-amo-course",
   "target": "r-qoptics",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-qc",
   "target": "r-qoptics",
   "type": "related",
   "soft": false,
   "notes": [
    "光子是量子计算的载体之一"
   ]
  },
  {
   "source": "c-amo-course",
   "target": "r-spectroscopy",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "c-amo-course",
   "target": "r-ultrafast",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "c-astro-intro",
   "target": "r-astro-instrument",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-astro-instrument",
   "target": "r-he-astro",
   "type": "related",
   "soft": false,
   "notes": [
    "高能探测器是主要应用对象"
   ]
  },
  {
   "source": "c-astro-intro",
   "target": "r-cosmology",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "c-gr",
   "target": "r-cosmology",
   "type": "prereq",
   "soft": false,
   "notes": [
    "宇宙学方程来自广义相对论"
   ]
  },
  {
   "source": "r-cosmology",
   "target": "r-hep-ph",
   "type": "related",
   "soft": false,
   "notes": [
    "早期宇宙与粒子物理交叉（暴胀、暗物质候选者）",
    "粒子宇宙学交叉"
   ]
  },
  {
   "source": "r-cosmology",
   "target": "r-qg",
   "type": "related",
   "soft": false,
   "notes": [
    "普朗克时期需要量子引力"
   ]
  },
  {
   "source": "c-astro-intro",
   "target": "r-exoplanet",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "c-astro-intro",
   "target": "r-galaxy",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-cosmology",
   "target": "r-galaxy",
   "type": "related",
   "soft": false,
   "notes": [
    "星系形成嵌在宇宙学框架中"
   ]
  },
  {
   "source": "c-astro-intro",
   "target": "r-he-astro",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-grav-wave",
   "target": "r-he-astro",
   "type": "related",
   "soft": false,
   "notes": [
    "多信使天文学（双中子星并合等）"
   ]
  },
  {
   "source": "r-he-astro",
   "target": "r-nucl-astro",
   "type": "related",
   "soft": false,
   "notes": [
    "核过程决定高能辐射机制"
   ]
  },
  {
   "source": "c-astro-intro",
   "target": "r-stellar",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-nucl-astro",
   "target": "r-stellar",
   "type": "related",
   "soft": false,
   "notes": [
    "恒星核燃烧即核天体物理"
   ]
  },
  {
   "source": "c-solid-state",
   "target": "r-materials",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-materials",
   "target": "r-semiconductor",
   "type": "related",
   "soft": false,
   "notes": [
    "功能材料的重要类别"
   ]
  },
  {
   "source": "c-solid-state",
   "target": "r-meso",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-meso",
   "target": "r-qc",
   "type": "related",
   "soft": false,
   "notes": [
    "量子点与拓扑器件是量子计算平台"
   ]
  },
  {
   "source": "r-meso",
   "target": "r-semiconductor",
   "type": "related",
   "soft": false,
   "notes": [
    "纳米器件的半导体基础"
   ]
  },
  {
   "source": "c-solid-state",
   "target": "r-semiconductor",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "c-solid-state",
   "target": "r-spintronics",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-spintronics",
   "target": "r-strong-corr",
   "type": "related",
   "soft": false,
   "notes": [
    "磁性多源于关联效应"
   ]
  },
  {
   "source": "c-solid-state",
   "target": "r-strong-corr",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-phase",
   "target": "r-strong-corr",
   "type": "related",
   "soft": false,
   "notes": [
    "量子相变是核心议题"
   ]
  },
  {
   "source": "r-strong-corr",
   "target": "r-superconduct",
   "type": "related",
   "soft": false,
   "notes": [
    "非常规超导多出于强关联体系"
   ]
  },
  {
   "source": "c-solid-state",
   "target": "r-superconduct",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "c-thermo",
   "target": "r-atmos",
   "type": "prereq",
   "soft": false,
   "notes": [
    "大气热力学基础"
   ]
  },
  {
   "source": "c-fluid",
   "target": "r-atmos",
   "type": "prereq",
   "soft": false,
   "notes": [
    "大气动力学基础"
   ]
  },
  {
   "source": "r-atmos",
   "target": "r-ocean",
   "type": "related",
   "soft": false,
   "notes": [
    "海气耦合"
   ]
  },
  {
   "source": "r-atmos",
   "target": "r-turbulence",
   "type": "related",
   "soft": false,
   "notes": [
    "大气湍流"
   ]
  },
  {
   "source": "c-mechanics",
   "target": "r-geophy",
   "type": "prereq",
   "soft": false,
   "notes": [
    "弹性波与应力场的基础"
   ]
  },
  {
   "source": "c-electromagnetism",
   "target": "r-geophy",
   "type": "prereq",
   "soft": false,
   "notes": [
    "重磁电勘探的物理基础"
   ]
  },
  {
   "source": "r-geophy",
   "target": "r-ocean",
   "type": "related",
   "soft": false,
   "notes": [
    "同属地球系统"
   ]
  },
  {
   "source": "c-fluid",
   "target": "r-ocean",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "c-thermo",
   "target": "r-ocean",
   "type": "prereq",
   "soft": false,
   "notes": [
    "温盐结构与混合"
   ]
  },
  {
   "source": "c-fluid",
   "target": "r-fluid-dyn",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "c-theoretical-mechanics",
   "target": "r-nonlinear",
   "type": "prereq",
   "soft": false,
   "notes": [
    "混沌理论根植于动力学系统"
   ]
  },
  {
   "source": "r-nonlinear",
   "target": "r-pattern",
   "type": "related",
   "soft": false,
   "notes": [
    "斑图形成是非线性行为的空间表现"
   ]
  },
  {
   "source": "c-fluid",
   "target": "r-pattern",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-pattern",
   "target": "r-soft",
   "type": "related",
   "soft": false,
   "notes": [
    "软物质是斑图的典型载体"
   ]
  },
  {
   "source": "c-fluid",
   "target": "r-turbulence",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-nonlinear",
   "target": "r-turbulence",
   "type": "related",
   "soft": false,
   "notes": [
    "湍流是非线性系统的代表"
   ]
  },
  {
   "source": "c-gr",
   "target": "r-black-hole",
   "type": "prereq",
   "soft": false,
   "notes": [
    "黑洞是场方程的精确解"
   ]
  },
  {
   "source": "r-black-hole",
   "target": "r-he-astro",
   "type": "related",
   "soft": false,
   "notes": [
    "吸积黑洞是高能天体的中心引擎"
   ]
  },
  {
   "source": "r-black-hole",
   "target": "r-qg",
   "type": "related",
   "soft": false,
   "notes": [
    "信息佯谬指向量子引力"
   ]
  },
  {
   "source": "c-gr",
   "target": "r-grav-wave",
   "type": "prereq",
   "soft": false,
   "notes": [
    "引力波是爱因斯坦方程的波动解"
   ]
  },
  {
   "source": "r-grav-wave",
   "target": "r-numerical-rel",
   "type": "related",
   "soft": false,
   "notes": [
    "波形模板依赖数值模拟"
   ]
  },
  {
   "source": "c-gr",
   "target": "r-numerical-rel",
   "type": "prereq",
   "soft": false,
   "notes": [
    "模拟对象是爱因斯坦方程"
   ]
  },
  {
   "source": "c-computational",
   "target": "r-numerical-rel",
   "type": "prereq",
   "soft": false,
   "notes": [
    "大规模数值方法"
   ]
  },
  {
   "source": "c-gr",
   "target": "r-qg",
   "type": "prereq",
   "soft": false,
   "notes": [
    "被量子化的对象是时空几何"
   ]
  },
  {
   "source": "c-qft",
   "target": "r-qg",
   "type": "prereq",
   "soft": false,
   "notes": [
    "量子化方法是场论方法"
   ]
  },
  {
   "source": "r-hep-th",
   "target": "r-qg",
   "type": "related",
   "soft": false,
   "notes": [
    "弦论是主要途径之一",
    "弦论是量子引力的候选"
   ]
  },
  {
   "source": "c-particle-nuclear",
   "target": "r-hep-ex",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-hep-ex",
   "target": "r-hep-ph",
   "type": "related",
   "soft": false,
   "notes": [
    "实验检验唯象预言"
   ]
  },
  {
   "source": "c-particle-nuclear",
   "target": "r-hep-ph",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "c-qft",
   "target": "r-hep-ph",
   "type": "prereq",
   "soft": false,
   "notes": [
    "计算工具是量子场论"
   ]
  },
  {
   "source": "c-qft",
   "target": "r-hep-th",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "c-qft",
   "target": "r-lattice",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "c-computational",
   "target": "r-lattice",
   "type": "prereq",
   "soft": false,
   "notes": [
    "格点计算是大规模数值模拟"
   ]
  },
  {
   "source": "r-hic",
   "target": "r-lattice",
   "type": "related",
   "soft": false,
   "notes": [
    "QCD 相图与状态方程",
    "QCD 相图的格点结果"
   ]
  },
  {
   "source": "c-particle-nuclear",
   "target": "r-hic",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-hep-ex",
   "target": "r-hic",
   "type": "related",
   "soft": false,
   "notes": [
    "共享对撞机实验技术"
   ]
  },
  {
   "source": "c-particle-nuclear",
   "target": "r-nucl-astro",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "c-particle-nuclear",
   "target": "r-nucl-reaction",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-medphy",
   "target": "r-nucl-reaction",
   "type": "related",
   "soft": false,
   "notes": [
    "核数据支撑放射治疗与成像"
   ]
  },
  {
   "source": "c-particle-nuclear",
   "target": "r-nucl-structure",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "c-plasma-intro",
   "target": "r-icf",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-icf",
   "target": "r-laser-plasma",
   "type": "related",
   "soft": false,
   "notes": [
    "激光是主要驱动源"
   ]
  },
  {
   "source": "c-plasma-intro",
   "target": "r-laser-plasma",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "c-plasma-intro",
   "target": "r-mcf",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-icf",
   "target": "r-mcf",
   "type": "related",
   "soft": false,
   "notes": [
    "另一条聚变路线"
   ]
  },
  {
   "source": "c-plasma-intro",
   "target": "r-space-plasma",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-space-plasma",
   "target": "r-turbulence",
   "type": "related",
   "soft": false,
   "notes": [
    "太阳风是天然湍流实验室"
   ]
  },
  {
   "source": "r-atmos",
   "target": "r-space-plasma",
   "type": "related",
   "soft": false,
   "notes": [
    "空间天气影响高层大气"
   ]
  },
  {
   "source": "c-amo-course",
   "target": "r-cold-atom",
   "type": "prereq",
   "soft": false,
   "notes": [
    "激光冷却与囚禁是 AMO 技术"
   ]
  },
  {
   "source": "r-cold-atom",
   "target": "r-qoptics",
   "type": "related",
   "soft": false,
   "notes": [
    "光与原子相互作用"
   ]
  },
  {
   "source": "c-quantum-info-intro",
   "target": "r-qc",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-qc",
   "target": "r-qsim",
   "type": "related",
   "soft": false,
   "notes": [
    "模拟是计算的重要应用"
   ]
  },
  {
   "source": "c-quantum-info-intro",
   "target": "r-qcomm",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-qc",
   "target": "r-qcomm",
   "type": "related",
   "soft": false,
   "notes": [
    "共享纠缠资源与量子网络"
   ]
  },
  {
   "source": "c-quantum-info-intro",
   "target": "r-qmetro",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-qmetro",
   "target": "r-spectroscopy",
   "type": "related",
   "soft": false,
   "notes": [
    "原子钟与频率测量"
   ]
  },
  {
   "source": "c-frontier-lab",
   "target": "r-qmetro",
   "type": "related",
   "soft": false,
   "notes": [
    "精密测量实验训练"
   ]
  },
  {
   "source": "c-quantum-info-intro",
   "target": "r-qsim",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-cold-atom",
   "target": "r-qsim",
   "type": "related",
   "soft": false,
   "notes": [
    "冷原子是主要模拟平台"
   ]
  },
  {
   "source": "r-qsim",
   "target": "r-strong-corr",
   "type": "related",
   "soft": false,
   "notes": [
    "模拟目标是强关联模型"
   ]
  },
  {
   "source": "c-statistical-mechanics",
   "target": "r-biophy",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "c-atomic",
   "target": "r-medphy",
   "type": "prereq",
   "soft": false,
   "notes": [
    "电离辐射与成像的物理基础"
   ]
  },
  {
   "source": "c-statistical-mechanics",
   "target": "r-soft",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-biophy",
   "target": "r-soft",
   "type": "related",
   "soft": false,
   "notes": [
    "生物体系多为软物质"
   ]
  },
  {
   "source": "c-statistical-mechanics",
   "target": "r-complex",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "c-statistical-mechanics",
   "target": "r-noneq",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "r-noneq",
   "target": "r-soft",
   "type": "related",
   "soft": false,
   "notes": [
    "软物质是典型的驱动耗散体系"
   ]
  },
  {
   "source": "r-complex",
   "target": "r-noneq",
   "type": "related",
   "soft": false,
   "notes": [
    "复杂系统多为非平衡"
   ]
  },
  {
   "source": "c-statistical-mechanics",
   "target": "r-phase",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "c-probability",
   "target": "r-stochastic",
   "type": "prereq",
   "soft": false,
   "notes": [
    "课程基础"
   ]
  },
  {
   "source": "c-statistical-mechanics",
   "target": "r-stochastic",
   "type": "prereq",
   "soft": false,
   "notes": [
    "物理应用背景"
   ]
  },
  {
   "source": "r-noneq",
   "target": "r-stochastic",
   "type": "related",
   "soft": false,
   "notes": [
    "随机热力学是共同语言"
   ]
  }
 ],
 "search": [
  {
   "id": "c-electrodynamics",
   "name": "电动力学",
   "nameEn": "Classical Electrodynamics",
   "aliases": [
    "经典电动力学"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "四大力学（课程）"
  },
  {
   "id": "c-quantum-mechanics",
   "name": "量子力学",
   "nameEn": "Quantum Mechanics",
   "aliases": [
    "量子力学(I)"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "四大力学（课程）"
  },
  {
   "id": "c-statistical-mechanics",
   "name": "热力学与统计物理",
   "nameEn": "Thermodynamics and Statistical Mechanics",
   "aliases": [
    "统计力学",
    "热统"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "四大力学（课程）"
  },
  {
   "id": "c-theoretical-mechanics",
   "name": "理论力学",
   "nameEn": "Theoretical (Analytical) Mechanics",
   "aliases": [
    "分析力学"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "四大力学（课程）"
  },
  {
   "id": "c-advanced-qm",
   "name": "高等量子力学",
   "nameEn": "Advanced Quantum Mechanics",
   "aliases": [
    "量子力学(II)",
    "高量"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "专业选修（课程）"
  },
  {
   "id": "c-amo-course",
   "name": "原子分子与光物理",
   "nameEn": "Atomic, Molecular and Optical Physics",
   "aliases": [
    "AMO物理"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "专业选修（课程）"
  },
  {
   "id": "c-astro-intro",
   "name": "天体物理导论",
   "nameEn": "Introduction to Astrophysics",
   "aliases": [
    "天体物理基础"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "专业选修（课程）"
  },
  {
   "id": "c-computational-adv",
   "name": "计算物理进阶",
   "nameEn": "Advanced Computational Physics",
   "aliases": [
    "高等计算物理"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "专业选修（课程）"
  },
  {
   "id": "c-fluid",
   "name": "流体力学",
   "nameEn": "Fluid Mechanics",
   "aliases": [
    "流体力学基础"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "专业选修（课程）"
  },
  {
   "id": "c-gr",
   "name": "广义相对论",
   "nameEn": "General Relativity",
   "aliases": [
    "广相"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "专业选修（课程）"
  },
  {
   "id": "c-group-theory",
   "name": "群论",
   "nameEn": "Group Theory for Physicists",
   "aliases": [
    "群论(物理)"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "专业选修（课程）"
  },
  {
   "id": "c-particle-nuclear",
   "name": "粒子与核物理",
   "nameEn": "Particle and Nuclear Physics",
   "aliases": [
    "粒子物理与核物理"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "专业选修（课程）"
  },
  {
   "id": "c-plasma-intro",
   "name": "等离子体物理基础",
   "nameEn": "Fundamentals of Plasma Physics",
   "aliases": [
    "等离子体物理导论"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "专业选修（课程）"
  },
  {
   "id": "c-qft",
   "name": "量子场论",
   "nameEn": "Quantum Field Theory",
   "aliases": [
    "QFT"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "专业选修（课程）"
  },
  {
   "id": "c-quantum-info-intro",
   "name": "量子信息导论",
   "nameEn": "Introduction to Quantum Information",
   "aliases": [
    "量子信息基础"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "专业选修（课程）"
  },
  {
   "id": "c-solid-state",
   "name": "固体物理",
   "nameEn": "Solid State Physics",
   "aliases": [
    "固体物理学"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "专业选修（课程）"
  },
  {
   "id": "c-atomic",
   "name": "原子物理（近代物理）",
   "nameEn": "Atomic Physics (Modern Physics)",
   "aliases": [
    "近代物理",
    "原子物理学"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "普通物理（课程）"
  },
  {
   "id": "c-electromagnetism",
   "name": "电磁学",
   "nameEn": "Electromagnetism",
   "aliases": [
    "电磁学基础"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "普通物理（课程）"
  },
  {
   "id": "c-mechanics",
   "name": "力学",
   "nameEn": "Mechanics",
   "aliases": [
    "普通物理力学"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "普通物理（课程）"
  },
  {
   "id": "c-optics",
   "name": "光学",
   "nameEn": "Optics",
   "aliases": [
    "波动光学"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "普通物理（课程）"
  },
  {
   "id": "c-thermo",
   "name": "热学",
   "nameEn": "Thermal Physics",
   "aliases": [
    "热力学基础"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "普通物理（课程）"
  },
  {
   "id": "c-computational",
   "name": "计算物理",
   "nameEn": "Computational Physics",
   "aliases": [
    "计算物理基础"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "实验与计算（课程）"
  },
  {
   "id": "c-frontier-lab",
   "name": "前沿物理实验（精密测量）",
   "nameEn": "Frontier Physics Experiments (Precision Measurement)",
   "aliases": [
    "精密测量实验",
    "综合物理实验"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "实验与计算（课程）"
  },
  {
   "id": "c-general-lab",
   "name": "普通物理实验",
   "nameEn": "General Physics Laboratory",
   "aliases": [
    "普物实验"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "实验与计算（课程）"
  },
  {
   "id": "c-modern-lab",
   "name": "近代物理实验",
   "nameEn": "Modern Physics Laboratory",
   "aliases": [
    "近物实验"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "实验与计算（课程）"
  },
  {
   "id": "c-calculus",
   "name": "高等数学（微积分）",
   "nameEn": "Calculus",
   "aliases": [
    "微积分",
    "数学分析"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "数学基础（课程）"
  },
  {
   "id": "c-linear-algebra",
   "name": "线性代数",
   "nameEn": "Linear Algebra",
   "aliases": [
    "高等代数"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "数学基础（课程）"
  },
  {
   "id": "c-math-methods",
   "name": "数学物理方法",
   "nameEn": "Methods of Mathematical Physics",
   "aliases": [
    "数理方法",
    "数理方程"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "数学基础（课程）"
  },
  {
   "id": "c-probability",
   "name": "概率论与数理统计",
   "nameEn": "Probability and Statistics",
   "aliases": [
    "概率统计"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "数学基础（课程）"
  },
  {
   "id": "r-atommol",
   "name": "原子分子物理",
   "nameEn": "Atomic and Molecular Physics",
   "aliases": [
    "原子分子"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "原子分子与光物理"
  },
  {
   "id": "r-laser",
   "name": "激光物理",
   "nameEn": "Laser Physics",
   "aliases": [
    "激光技术"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "原子分子与光物理"
  },
  {
   "id": "r-qoptics",
   "name": "量子光学",
   "nameEn": "Quantum Optics",
   "aliases": [
    "量子光学"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "原子分子与光物理"
  },
  {
   "id": "r-spectroscopy",
   "name": "精密光谱",
   "nameEn": "Precision Spectroscopy",
   "aliases": [
    "精密测量物理"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "原子分子与光物理"
  },
  {
   "id": "r-ultrafast",
   "name": "超快与强场物理",
   "nameEn": "Ultrafast and Strong-Field Physics",
   "aliases": [
    "阿秒物理",
    "强场物理"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "原子分子与光物理"
  },
  {
   "id": "r-astro-instrument",
   "name": "天文仪器与观测方法",
   "nameEn": "Astronomical Instrumentation and Methods",
   "aliases": [
    "天文技术与方法"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "天体物理与宇宙学"
  },
  {
   "id": "r-cosmology",
   "name": "宇宙学",
   "nameEn": "Cosmology",
   "aliases": [
    "物理宇宙学"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "天体物理与宇宙学"
  },
  {
   "id": "r-exoplanet",
   "name": "行星科学与系外行星",
   "nameEn": "Planetary Science and Exoplanets",
   "aliases": [
    "系外行星"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "天体物理与宇宙学"
  },
  {
   "id": "r-galaxy",
   "name": "星系物理",
   "nameEn": "Galaxy Astrophysics",
   "aliases": [
    "星系天文学"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "天体物理与宇宙学"
  },
  {
   "id": "r-he-astro",
   "name": "高能天体物理",
   "nameEn": "High-Energy Astrophysics",
   "aliases": [
    "高能天体"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "天体物理与宇宙学"
  },
  {
   "id": "r-stellar",
   "name": "恒星物理",
   "nameEn": "Stellar Physics",
   "aliases": [
    "恒星结构与演化"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "天体物理与宇宙学"
  },
  {
   "id": "r-materials",
   "name": "材料科学（计算材料）",
   "nameEn": "Materials Science",
   "aliases": [
    "计算材料学"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "凝聚态物理"
  },
  {
   "id": "r-meso",
   "name": "介观与纳米物理",
   "nameEn": "Mesoscopic and Nanoscale Physics",
   "aliases": [
    "介观物理"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "凝聚态物理"
  },
  {
   "id": "r-semiconductor",
   "name": "半导体物理",
   "nameEn": "Semiconductor Physics",
   "aliases": [
    "半导体"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "凝聚态物理"
  },
  {
   "id": "r-spintronics",
   "name": "磁学与自旋电子学",
   "nameEn": "Magnetism and Spintronics",
   "aliases": [
    "自旋电子学"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "凝聚态物理"
  },
  {
   "id": "r-strong-corr",
   "name": "强关联电子",
   "nameEn": "Strongly Correlated Electrons",
   "aliases": [
    "强关联体系"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "凝聚态物理"
  },
  {
   "id": "r-superconduct",
   "name": "超导物理",
   "nameEn": "Superconductivity",
   "aliases": [
    "超导"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "凝聚态物理"
  },
  {
   "id": "r-atmos",
   "name": "大气物理",
   "nameEn": "Atmospheric Physics",
   "aliases": [
    "大气科学物理"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "地球、大气与空间物理"
  },
  {
   "id": "r-geophy",
   "name": "固体地球物理",
   "nameEn": "Solid Earth Geophysics",
   "aliases": [
    "地球内部物理"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "地球、大气与空间物理"
  },
  {
   "id": "r-ocean",
   "name": "海洋物理",
   "nameEn": "Physical Oceanography",
   "aliases": [
    "物理海洋学"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "地球、大气与空间物理"
  },
  {
   "id": "r-fluid-dyn",
   "name": "流体动力学",
   "nameEn": "Fluid Dynamics",
   "aliases": [
    "流体力学研究"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "流体与非线性科学"
  },
  {
   "id": "r-nonlinear",
   "name": "非线性动力学与混沌",
   "nameEn": "Nonlinear Dynamics and Chaos",
   "aliases": [
    "混沌"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "流体与非线性科学"
  },
  {
   "id": "r-pattern",
   "name": "图案形成",
   "nameEn": "Pattern Formation",
   "aliases": [
    "斑图动力学"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "流体与非线性科学"
  },
  {
   "id": "r-turbulence",
   "name": "湍流",
   "nameEn": "Turbulence",
   "aliases": [
    "湍流研究"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "流体与非线性科学"
  },
  {
   "id": "r-black-hole",
   "name": "黑洞物理",
   "nameEn": "Black Hole Physics",
   "aliases": [
    "黑洞"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "引力与量子引力"
  },
  {
   "id": "r-grav-wave",
   "name": "引力波",
   "nameEn": "Gravitational Waves",
   "aliases": [
    "引力波物理"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "引力与量子引力"
  },
  {
   "id": "r-numerical-rel",
   "name": "数值相对论",
   "nameEn": "Numerical Relativity",
   "aliases": [
    "数值相对论模拟"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "引力与量子引力"
  },
  {
   "id": "r-qg",
   "name": "量子引力",
   "nameEn": "Quantum Gravity",
   "aliases": [
    "量子引力理论"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "引力与量子引力"
  },
  {
   "id": "r-hep-ex",
   "name": "粒子物理实验",
   "nameEn": "Experimental Particle Physics",
   "aliases": [
    "高能实验"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "高能物理"
  },
  {
   "id": "r-hep-ph",
   "name": "粒子唯象学",
   "nameEn": "Particle Phenomenology",
   "aliases": [
    "粒子唯象"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "高能物理"
  },
  {
   "id": "r-hep-th",
   "name": "形式理论（弦论与超对称）",
   "nameEn": "Formal High-Energy Theory",
   "aliases": [
    "弦论",
    "形式高能理论"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "高能物理"
  },
  {
   "id": "r-lattice",
   "name": "格点场论",
   "nameEn": "Lattice Field Theory",
   "aliases": [
    "格点QCD"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "高能物理"
  },
  {
   "id": "r-hic",
   "name": "重离子物理",
   "nameEn": "Heavy-Ion Physics",
   "aliases": [
    "相对论重离子碰撞"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "核物理"
  },
  {
   "id": "r-nucl-astro",
   "name": "核天体物理",
   "nameEn": "Nuclear Astrophysics",
   "aliases": [
    "核天体"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "核物理"
  },
  {
   "id": "r-nucl-reaction",
   "name": "核反应",
   "nameEn": "Nuclear Reactions",
   "aliases": [
    "原子核反应"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "核物理"
  },
  {
   "id": "r-nucl-structure",
   "name": "核结构",
   "nameEn": "Nuclear Structure",
   "aliases": [
    "原子核结构"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "核物理"
  },
  {
   "id": "r-icf",
   "name": "惯性约束与高能量密度物理",
   "nameEn": "Inertial Confinement Fusion & HEDP",
   "aliases": [
    "惯性约束聚变",
    "高能量密度物理"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "等离子体物理"
  },
  {
   "id": "r-laser-plasma",
   "name": "激光等离子体",
   "nameEn": "Laser-Plasma Physics",
   "aliases": [
    "激光等离子体相互作用"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "等离子体物理"
  },
  {
   "id": "r-mcf",
   "name": "磁约束聚变",
   "nameEn": "Magnetic Confinement Fusion",
   "aliases": [
    "托卡马克"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "等离子体物理"
  },
  {
   "id": "r-space-plasma",
   "name": "空间等离子体",
   "nameEn": "Space Plasma Physics",
   "aliases": [
    "空间物理"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "等离子体物理"
  },
  {
   "id": "r-cold-atom",
   "name": "冷原子与量子气体",
   "nameEn": "Cold Atoms and Quantum Gases",
   "aliases": [
    "超冷原子"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "量子物理与量子信息"
  },
  {
   "id": "r-qc",
   "name": "量子计算",
   "nameEn": "Quantum Computing",
   "aliases": [
    "量子计算机"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "量子物理与量子信息"
  },
  {
   "id": "r-qcomm",
   "name": "量子通信",
   "nameEn": "Quantum Communication",
   "aliases": [
    "量子保密通信"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "量子物理与量子信息"
  },
  {
   "id": "r-qmetro",
   "name": "量子精密测量",
   "nameEn": "Quantum Metrology and Sensing",
   "aliases": [
    "量子传感"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "量子物理与量子信息"
  },
  {
   "id": "r-qsim",
   "name": "量子模拟",
   "nameEn": "Quantum Simulation",
   "aliases": [
    "量子模拟器"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "量子物理与量子信息"
  },
  {
   "id": "r-biophy",
   "name": "生物物理",
   "nameEn": "Biological Physics",
   "aliases": [
    "生物物理学"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "软物质与生物物理"
  },
  {
   "id": "r-medphy",
   "name": "医学物理",
   "nameEn": "Medical Physics",
   "aliases": [
    "医学物理学"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "软物质与生物物理"
  },
  {
   "id": "r-soft",
   "name": "软物质物理",
   "nameEn": "Soft Matter Physics",
   "aliases": [
    "软凝聚态"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "软物质与生物物理"
  },
  {
   "id": "r-complex",
   "name": "复杂系统与交叉科学",
   "nameEn": "Complex Systems",
   "aliases": [
    "交叉科学"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "统计物理与复杂系统"
  },
  {
   "id": "r-noneq",
   "name": "非平衡统计物理",
   "nameEn": "Non-Equilibrium Statistical Mechanics",
   "aliases": [
    "非平衡态"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "统计物理与复杂系统"
  },
  {
   "id": "r-phase",
   "name": "相变与临界现象",
   "nameEn": "Phase Transitions and Critical Phenomena",
   "aliases": [
    "临界现象"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "统计物理与复杂系统"
  },
  {
   "id": "r-stochastic",
   "name": "随机过程",
   "nameEn": "Stochastic Processes",
   "aliases": [
    "随机动力学"
   ],
   "tags": [],
   "keywords": [],
   "domainName": "统计物理与复杂系统"
  }
 ]
};
