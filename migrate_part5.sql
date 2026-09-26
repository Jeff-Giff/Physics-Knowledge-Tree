INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-algebra','r-math-pure','代数与表示论','Algebra & Representation Theory','','# 代数与表示论

## 方向概述
arXiv: math.RA / math.RT / math.GR / math.QA / math.AC。研究代数结构及其线性实现：群表示、李理论、交换代数与量子群。

## 核心问题
- 有限群与李群的表示、特征标理论
- 李代数与根系分类、量子群
- 交换代数：诺特环、局部化与谱

## 代表方法与设施
同调代数与范畴论语言；与几何（[[r-algebraic-geometry]]）、物理对称性（[[c-group-theory]]）深度交叉。','["表示论"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-abstract-algebra", "type": "prereq", "note": "群环域的基本理论"}, {"id": "r-algebraic-geometry", "type": "related", "note": "交换代数是代数几何的语言"}]','["r-algebraic-geometry", "c-group-theory"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-algebraic-geometry','r-math-pure','代数几何','Algebraic Geometry','','# 代数几何

## 方向概述
arXiv: math.AG。研究多项式方程组的解集（代数簇）：概形理论是现代标准语言。

## 核心问题
- 代数簇的分类、双有理几何
- 层上同调、黎曼-罗赫定理
- 模空间与枚举几何

## 代表方法与设施
概形与导出范畴；与数论（算术几何）、弦论（镜像对称，[[r-hep-th]] 相关）交叉。','[]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-abstract-algebra", "type": "prereq", "note": "交换代数基础"}, {"id": "c-topology", "type": "prereq", "note": "层与上同调的拓扑直觉"}]','["r-hep-th"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-analysis','r-math-pure','分析学','Analysis','','# 分析学

## 方向概述
arXiv: math.CA / math.CV / math.FA / math.OA / math.SP。研究函数、算子与积分变换：调和分析、复分析、算子代数与谱理论。

## 核心问题
- 调和分析：傅里叶变换、奇异积分算子
- 多复变与复几何分析
- C* 代数、冯·诺依曼代数与非交换几何
- 薛定谔算子谱理论

## 代表方法与设施
硬分析估计与泛函演算；为量子力学数学基础（[[r-mathematical-physics]]）服务。','["调和分析", "算子代数"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-functional-analysis", "type": "prereq", "note": "算子与函数空间"}, {"id": "r-pde-research", "type": "related", "note": "调和分析是现代 PDE 的核心工具"}]','["r-mathematical-physics"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-combinatorics','r-math-pure','组合数学','Combinatorics','','# 组合数学

## 方向概述
arXiv: math.CO。研究离散结构的计数、存在性与极值性质：图论、组合设计与代数组合。

## 核心问题
- 极值组合（图兰问题、拉姆齐理论）
- 代数组合与对称函数
- 概率方法（洛夫莱斯局部引理）

## 代表方法与设施
生成函数、概率方法与线性代数方法；计算机科学（算法与复杂性）的主要数学基础。','["图论"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-advanced-algebra", "type": "prereq", "note": "代数组合工具"}, {"id": "r-info-theory", "type": "related", "note": "纠错码与图论/设计理论交叉"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-dynamical-systems','r-math-pure','动力系统','Dynamical Systems','','# 动力系统

## 方向概述
arXiv: math.DS。研究映射与流随时间的渐近行为：混沌、遍历性与分形几何。

## 核心问题
- 混沌与奇异吸引子、符号动力学
- 遍历定理、熵与混合性
- 复动力系统（朱利亚集、芒德博集）

## 代表方法与设施
拓扑与共轭方法、测度论；与统计物理（[[c-statistical-mechanics]]）的遍历假设呼应。','["遍历论"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-ode", "type": "prereq", "note": "微分方程定性理论"}, {"id": "c-real-analysis", "type": "prereq", "note": "测度论（遍历论）"}, {"id": "r-nonlinear", "type": "related", "note": "物理中的非线性动力学与混沌"}]','["c-statistical-mechanics"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-geometry-topology','r-math-pure','几何与拓扑','Geometry & Topology','','# 几何与拓扑

## 方向概述
arXiv: math.DG / math.GT / math.AT / math.SG / math.MG。研究流形的几何与整体拓扑：曲率、示性类、规范理论与辛几何。

## 核心问题
- 黎曼几何：曲率与拓扑（球面定理、里奇流）
- 低维流形与纽结理论
- 辛几何与数学规范理论（唐纳森/塞伯格-威滕）

## 代表方法与设施
几何分析（佩雷尔曼证明庞加莱猜想）、规范理论；与 [[c-gr]]、[[r-hep-th]]（拓扑场论）交叉。','["低维拓扑", "黎曼几何"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-differential-geometry", "type": "prereq", "note": "流形与黎曼度量"}, {"id": "c-topology", "type": "prereq", "note": "基本群与同调"}]','["c-gr", "r-hep-th"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-math-logic','r-math-pure','数理逻辑','Mathematical Logic','','# 数理逻辑

## 方向概述
arXiv: math.LO。研究数学推理本身的形式化：可判定性、证明论、模型论与集合论。

## 核心问题
- 哥德尔不完备定理与可计算性
- 模型论：紧致性、稳定性理论
- 集合论：连续统假设与力迫法

## 代表方法与设施
形式系统与递归论方法；为数学基础与理论计算机科学提供根基。','["集合论", "模型论"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-math-analysis", "type": "prereq", "note": "严格数学推理训练"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-number-theory','r-math-pure','数论','Number Theory','','# 数论

## 方向概述
arXiv: math.NT。研究整数与算术结构：素数分布、丢番图方程、模形式与算术几何。

## 核心问题
- 素数分布与黎曼 ζ 函数（黎曼猜想）
- 代数数论：类群、L 函数、朗兰兹纲领
- 椭圆曲线与模形式（费马大定理）

## 代表方法与设施
解析方法（筛法、圆法）、代数几何与表示论工具；密码学应用（RSA、椭圆曲线密码）。','["算术几何"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-abstract-algebra", "type": "prereq", "note": "代数数论的代数工具"}, {"id": "r-algebraic-geometry", "type": "related", "note": "算术几何是两者的交叉"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-hic','r-nuclear','重离子物理','Heavy-Ion Physics','','# 重离子物理

## 方向概述
arXiv: nucl-ex/th 与 hep-ex 交叉。用相对论性重离子碰撞产生并研究夸克-胶子等离子体（QGP）。

## 核心问题
- QGP 的性质：近理想流体行为、喷注淬火
- QCD 相图与临界点寻找
- 小系统中的集体性

## 代表方法与设施
RHIC、LHC-ALICE；流体动力学模拟。

## 与其他方向的联系
与 [[r-lattice]]、[[r-hep-ex]]、[[r-fluid-dyn]]（流体描述）交叉。','["相对论重离子碰撞"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-particle-nuclear", "type": "prereq", "note": "课程基础"}, {"id": "r-lattice", "type": "related", "note": "QCD 相图的格点结果"}, {"id": "r-hep-ex", "type": "related", "note": "共享对撞机实验技术"}]','["r-fluid-dyn", "r-lattice", "r-hep-ex"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-nucl-astro','r-nuclear','核天体物理','Nuclear Astrophysics','','# 核天体物理

## 方向概述
研究天体环境中的核过程：元素如何被合成、恒星如何燃烧。

## 核心问题
- 大爆炸与恒星核合成
- 快/慢中子俘获过程（r 过程、s 过程）的核数据与场所
- 中子星物态方程

## 代表方法与设施
深地实验室（JUNA）、放射性束装置、引力波/电磁多信使观测。

## 与其他方向的联系
与 [[r-stellar]]（恒星演化）、[[r-he-astro]]（超新星与中子星）交叉。','["核天体"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-particle-nuclear", "type": "prereq", "note": "课程基础"}]','["r-stellar", "r-he-astro"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-nucl-reaction','r-nuclear','核反应','Nuclear Reactions','','# 核反应

## 方向概述
arXiv: nucl-ex。研究核反应机制与截面，及其在能源、核技术与天体中的应用。

## 核心问题
- 直接反应与复合核反应机制
- 熔合与裂变动力学
- 核数据测量与评价、核能物理

## 代表方法与设施
加速器束流实验、反应堆与散裂中子源。

## 与其他方向的联系
与 [[r-nucl-structure]]、[[r-nucl-astro]]（天体截面）、[[r-medphy]] 交叉。','["原子核反应"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-particle-nuclear", "type": "prereq", "note": "课程基础"}, {"id": "r-medphy", "type": "related", "note": "核数据支撑放射治疗与成像"}]','["r-nucl-astro", "r-nucl-structure", "r-medphy"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-nucl-structure','r-nuclear','核结构','Nuclear Structure','','# 核结构

## 方向概述
arXiv: nucl-th/ex。研究原子核作为量子多体系统的结构与性质。

## 核心问题
- 壳模型与集体模型、从头算方法
- 奇特核（晕核、滴线核）
- 核对称能与超重元素

## 代表方法与设施
放射性束装置（HIRFL、HIAF）、伽马谱学。

## 与其他方向的联系
与 [[r-nucl-reaction]]、[[r-lattice]]（核力来源）交叉。','["原子核结构"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-particle-nuclear", "type": "prereq", "note": "课程基础"}]','["r-nucl-reaction", "r-lattice"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-icf','r-plasma','惯性约束与高能量密度物理','Inertial Confinement Fusion & HEDP','','# 惯性约束与高能量密度物理

## 方向概述
用强驱动（激光、Z 箍缩）把燃料压缩到极端密度温度，研究点火与极端物态。

## 核心问题
- 内爆流体稳定性（RT/RM 不稳定性）
- 点火与燃烧物理
- 温稠密物质与状态方程

## 代表方法与设施
NIF、神光系列装置；辐射流体模拟。

## 与其他方向的联系
与 [[r-mcf]]、[[r-laser-plasma]]、[[r-materials]]（状态方程）交叉。','["惯性约束聚变", "高能量密度物理"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-plasma-intro", "type": "prereq", "note": "课程基础"}, {"id": "r-laser-plasma", "type": "related", "note": "激光是主要驱动源"}]','["r-laser-plasma", "r-mcf", "r-materials"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-laser-plasma','r-plasma','激光等离子体','Laser-Plasma Physics','','# 激光等离子体

## 方向概述
研究强激光与等离子体相互作用及其加速与辐射应用。

## 核心问题
- 激光尾场加速电子/离子
- 快点火与冲击点火
- 实验室天体物理（喷流、激波类比）

## 代表方法与设施
拍瓦激光装置、粒子与辐射诊断。

## 与其他方向的联系
与 [[r-laser]]、[[r-icf]]、[[r-he-astro]] 交叉。','["激光等离子体相互作用"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-plasma-intro", "type": "prereq", "note": "课程基础"}]','["r-laser", "r-he-astro", "r-icf"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-mcf','r-plasma','磁约束聚变','Magnetic Confinement Fusion','','# 磁约束聚变

## 方向概述
arXiv: physics.plasm-ph 核心。用强磁场约束高温等离子体以实现受控聚变。

## 核心问题
- 托卡马克平衡与稳定性
- 湍流与反常输运
- 边界物理（偏滤器）与燃烧等离子体

## 代表方法与设施
EAST、ITER、CFETR；平衡与不稳定性数值程序。

## 与其他方向的联系
与 [[r-icf]]、[[r-fluid-dyn]]（MHD）、[[r-materials]]（面向等离子体材料）交叉。','["托卡马克"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-plasma-intro", "type": "prereq", "note": "课程基础"}, {"id": "r-icf", "type": "related", "note": "另一条聚变路线"}]','["r-materials", "r-fluid-dyn", "r-icf"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-space-plasma','r-plasma','空间等离子体','Space Plasma Physics','','# 空间等离子体

## 方向概述
arXiv: physics.space-ph。研究日地空间与天体环境中的等离子体过程。

## 核心问题
- 磁层动力学与磁重联
- 太阳风加速与加热
- 空间天气、辐射带

## 代表方法与设施
卫星就位探测（MMS、帕克探针）、全球 MHD 模拟。

## 与其他方向的联系
与 [[r-atmos]]、[[r-turbulence]]、[[r-he-astro]]（天体等离子体）交叉。','["空间物理"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-plasma-intro", "type": "prereq", "note": "课程基础"}, {"id": "r-turbulence", "type": "related", "note": "太阳风是天然湍流实验室"}, {"id": "r-atmos", "type": "related", "note": "空间天气影响高层大气"}]','["r-he-astro", "r-turbulence", "r-atmos"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-cold-atom','r-quantum','冷原子与量子气体','Cold Atoms and Quantum Gases','','# 冷原子与量子气体

## 方向概述
arXiv: cond-mat.quant-gas / quant-ph 交叉。研究激光冷却原子形成的量子简并气体。

## 核心问题
- 玻色-爱因斯坦凝聚与简并费米气体
- 光晶格中的强关联物理
- 少体问题（Efimov 效应）与极化子

## 代表方法与设施
激光冷却、磁光阱、蒸发冷却、Feshbach 共振。

## 与其他方向的联系
与 [[r-qoptics]]、[[r-qsim]]、[[r-strong-corr]] 交叉。','["超冷原子"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-amo-course", "type": "prereq", "note": "激光冷却与囚禁是 AMO 技术"}, {"id": "r-qoptics", "type": "related", "note": "光与原子相互作用"}]','["r-strong-corr", "r-qsim", "r-qoptics"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-qc','r-quantum','量子计算','Quantum Computing','','# 量子计算

## 方向概述
arXiv: quant-ph 核心。建造利用量子叠加与纠缠进行计算的设备与算法。

## 核心问题
- 硬件平台：超导、离子阱、中性原子、光量子
- 量子算法与量子优势
- 量子纠错与容错计算

## 代表方法与设施
超导/离子阱处理器、量子云平台。

## 与其他方向的联系
与 [[r-qsim]]、[[r-meso]]（拓扑比特）、[[r-superconduct]]（超导电路）交叉。','["量子计算机"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-quantum-info-intro", "type": "prereq", "note": "课程基础"}, {"id": "r-qsim", "type": "related", "note": "模拟是计算的重要应用"}]','["r-meso", "r-superconduct", "r-qsim"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-qcomm','r-quantum','量子通信','Quantum Communication','','# 量子通信

## 方向概述
利用量子态传输信息：量子密钥分发与量子网络。

## 核心问题
- 量子密钥分发（QKD）协议与安全性
- 量子中继与量子存储
- 星地量子通信与量子互联网

## 代表方法与设施
光纤与自由空间链路、墨子号卫星。

## 与其他方向的联系
与 [[r-qc]]、[[r-qmetro]]（单光子探测）交叉。','["量子保密通信"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-quantum-info-intro", "type": "prereq", "note": "课程基础"}, {"id": "r-qc", "type": "related", "note": "共享纠缠资源与量子网络"}]','["r-qmetro", "r-qc"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-qmetro','r-quantum','量子精密测量','Quantum Metrology and Sensing','','# 量子精密测量

## 方向概述
利用量子资源（压缩、纠缠）突破经典测量极限。

## 核心问题
- 量子增强干涉与压缩态
- 原子钟与光钟
- 量子传感：磁场、惯性、引力测量

## 代表方法与设施
光晶格钟、原子干涉仪、金刚石 NV 色心。

## 与其他方向的联系
与 [[r-spectroscopy]]、[[r-grav-wave]]（量子噪声）、[[r-he-astro]]（基本常数检验）交叉。','["量子传感"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-quantum-info-intro", "type": "prereq", "note": "课程基础"}, {"id": "r-spectroscopy", "type": "related", "note": "原子钟与频率测量"}, {"id": "c-frontier-lab", "type": "related", "note": "精密测量实验训练"}]','["r-spectroscopy", "r-grav-wave", "r-he-astro"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-qsim','r-quantum','量子模拟','Quantum Simulation','','# 量子模拟

## 方向概述
用可控量子系统模拟难以计算的量子多体问题。

## 核心问题
- 哈伯德模型的冷原子模拟
- 量子磁性、规范场模拟
- 变分量子算法与近期（NISQ）模拟

## 代表方法与设施
光晶格、里德伯原子阵列、离子链。

## 与其他方向的联系
与 [[r-cold-atom]]、[[r-strong-corr]]、[[r-qc]] 交叉。','["量子模拟器"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-quantum-info-intro", "type": "prereq", "note": "课程基础"}, {"id": "r-cold-atom", "type": "related", "note": "冷原子是主要模拟平台"}, {"id": "r-strong-corr", "type": "related", "note": "模拟目标是强关联模型"}]','["r-qc", "r-cold-atom", "r-strong-corr"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-biophy','r-softbio','生物物理','Biological Physics','','# 生物物理

## 方向概述
arXiv: physics.bio-ph。用物理的概念与定量方法研究生命体系。

## 核心问题
- 单分子生物物理（蛋白质折叠、分子马达）
- 膜与细胞力学
- 神经与系统生物的物理建模

## 代表方法与设施
单分子操纵（光镊、磁镊）、荧光成像、理论建模。

## 与其他方向的联系
与 [[r-soft]]、[[r-noneq]]、[[r-stochastic]] 交叉。','["生物物理学"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-statistical-mechanics", "type": "prereq", "note": "课程基础"}]','["r-soft", "r-stochastic", "r-noneq"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-medphy','r-softbio','医学物理','Medical Physics','','# 医学物理

## 方向概述
arXiv: physics.med-ph。把核物理与成像物理应用于诊断与治疗。

## 核心问题
- 放射治疗物理与剂量学
- 医学成像（CT、MRI、PET）
- 质子/重离子治疗

## 代表方法与设施
医用加速器、成像系统、蒙特卡洛剂量计算。

## 与其他方向的联系
与 [[r-biophy]]、[[r-nucl-reaction]]（核数据）交叉。','["医学物理学"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-atomic", "type": "prereq", "note": "电离辐射与成像的物理基础"}]','["r-nucl-reaction", "r-biophy"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-soft','r-softbio','软物质物理','Soft Matter Physics','','# 软物质物理

## 方向概述
arXiv: cond-mat.soft。研究热涨落与弱相互作用主导的凝聚体系。

## 核心问题
- 聚合物、胶体、液晶的统计物理
- 自组装与凝胶
- 活性物质（自驱动粒子体系）

## 代表方法与设施
光镊、共聚焦显微镜、粗粒化模拟。

## 与其他方向的联系
与 [[r-biophy]]、[[r-noneq]]、[[r-pattern]] 交叉。','["软凝聚态"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-statistical-mechanics", "type": "prereq", "note": "课程基础"}, {"id": "r-biophy", "type": "related", "note": "生物体系多为软物质"}]','["r-pattern", "r-biophy", "r-noneq"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-complex','r-statphys','复杂系统与交叉科学','Complex Systems','','# 复杂系统与交叉科学

## 方向概述
arXiv: physics.soc-ph 等。把统计物理思想推广到由大量个体组成的复杂系统。

## 核心问题
- 复杂网络的结构与动力学
- 集体行为（蜂拥、意见动力学）
- 经济物理与社会物理

## 代表方法与设施
基于主体的模拟、大数据实证分析。

## 与其他方向的联系
与 [[r-noneq]]、[[r-stochastic]]、[[r-nonlinear]] 交叉。','["交叉科学"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-statistical-mechanics", "type": "prereq", "note": "课程基础"}]','["r-stochastic", "r-noneq", "r-nonlinear"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-noneq','r-statphys','非平衡统计物理','Non-Equilibrium Statistical Mechanics','','# 非平衡统计物理

## 方向概述
研究远离平衡态的涨落与输运规律，是统计物理当前最活跃的前沿之一。

## 核心问题
- 涨落定理与随机热力学
- 输运理论与反常输运
- 驱动-耗散系统的稳态

## 代表方法与设施
解析理论（大偏差）、胶体实验验证。

## 与其他方向的联系
与 [[r-soft]]、[[r-biophy]]（分子马达）、[[r-complex]] 交叉。','["非平衡态"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-statistical-mechanics", "type": "prereq", "note": "课程基础"}, {"id": "r-soft", "type": "related", "note": "软物质是典型的驱动耗散体系"}, {"id": "r-complex", "type": "related", "note": "复杂系统多为非平衡"}]','["r-soft", "r-biophy", "r-complex"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-phase','r-statphys','相变与临界现象','Phase Transitions and Critical Phenomena','','# 相变与临界现象

## 方向概述
arXiv: cond-mat.stat-mech 核心。研究物质状态突变附近的普适规律。

## 核心问题
- 普适性与标度律、重整化群
- 量子相变
- 阻挫与无序系统的相变

## 代表方法与设施
场论方法、蒙特卡洛模拟、张量网络。

## 与其他方向的联系
与 [[r-strong-corr]]、[[r-hep-th]]（全息与场论方法互通）交叉。','["临界现象"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-statistical-mechanics", "type": "prereq", "note": "课程基础"}]','["r-strong-corr", "r-hep-th"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-stochastic','r-statphys','随机过程','Stochastic Processes','','# 随机过程

## 方向概述
研究随机动力学本身：从布朗运动到反常扩散的数学与物理。

## 核心问题
- 朗之万与福克-普朗克方程
- 首达时间与搜索过程
- 反常扩散与非高斯涨落

## 代表方法与设施
随机分析、单粒子追踪实验。

## 与其他方向的联系
与 [[r-noneq]]、[[r-biophy]]、[[r-complex]]（金融与社交网络建模）交叉。','["随机动力学"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-probability", "type": "prereq", "note": "课程基础"}, {"id": "c-statistical-mechanics", "type": "prereq", "note": "物理应用背景"}, {"id": "r-noneq", "type": "related", "note": "随机热力学是共同语言"}]','["r-biophy", "r-complex", "r-noneq"]');
INSERT INTO admins (github_login, granted_by) VALUES ('jeff-giff', 'system');
INSERT INTO admins (github_login, granted_by) VALUES ('jeff-giff-2', 'system');