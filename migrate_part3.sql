INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-laser','r-amo','激光物理','Laser Physics','','# 激光物理

## 方向概述
arXiv: physics.optics 核心。研究激光产生、调控与新型光源。

## 核心问题
- 激光原理与谐振腔设计
- 非线性光学与频率变换
- 新型激光器（光纤、碟片、自由电子激光）

## 代表方法与设施
超净光学平台、非线性晶体、光纤系统。

## 与其他方向的联系
与 [[r-ultrafast]]、[[r-laser-plasma]]、[[r-semiconductor]]（半导体激光器）交叉。','["激光技术"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-amo-course", "type": "prereq", "note": "课程基础"}, {"id": "r-ultrafast", "type": "related", "note": "超快激光是直接延伸"}, {"id": "r-laser-plasma", "type": "related", "note": "高功率激光驱动等离子体"}]','["r-ultrafast", "r-laser-plasma", "r-semiconductor"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-qoptics','r-amo','量子光学','Quantum Optics','','# 量子光学

## 方向概述
研究光的量子性质及光与原子的相干相互作用。

## 核心问题
- 光场量子化：压缩态、单光子源
- 腔量子电动力学
- 量子相干效应（电磁诱导透明等）

## 代表方法与设施
高品质光学腔、单光子探测、符合计数。

## 与其他方向的联系
与 [[r-qc]]、[[r-cold-atom]]、[[r-qmetro]] 交叉。','["量子光学"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-amo-course", "type": "prereq", "note": "课程基础"}, {"id": "r-qc", "type": "related", "note": "光子是量子计算的载体之一"}]','["r-qmetro", "r-cold-atom", "r-qc"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-spectroscopy','r-amo','精密光谱','Precision Spectroscopy','','# 精密光谱

## 方向概述
以极限精度测量原子分子跃迁频率，检验基本物理规律。

## 核心问题
- 光频梳与频率计量
- 原子钟跃迁与精细结构常数测量
- 检验局域洛伦兹不变性、寻找新相互作用

## 代表方法与设施
稳频激光、光钟、离子阱。

## 与其他方向的联系
与 [[r-qmetro]]、[[r-atommol]] 交叉。','["精密测量物理"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-amo-course", "type": "prereq", "note": "课程基础"}]','["r-qmetro", "r-atommol"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-ultrafast','r-amo','超快与强场物理','Ultrafast and Strong-Field Physics','','# 超快与强场物理

## 方向概述
在阿秒到飞秒尺度探测与控制电子动力学，并研究强激光场中的非微扰行为。

## 核心问题
- 阿秒脉冲产生与测量
- 高次谐波与强场电离（隧穿、再碰撞）
- 分子电影与电荷迁移

## 代表方法与设施
飞秒/阿秒激光系统、光电子符合成像。

## 与其他方向的联系
与 [[r-laser]]、[[r-atommol]] 交叉。','["阿秒物理", "强场物理"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-amo-course", "type": "prereq", "note": "课程基础"}]','["r-laser", "r-atommol"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-astro-instrument','r-astro','天文仪器与观测方法','Astronomical Instrumentation and Methods','','# 天文仪器与观测方法

## 方向概述
arXiv: astro-ph.IM。研究观测设备与数据方法本身：望远镜、探测器与巡天数据处理。

## 核心问题
- 新型探测器（CCD/CMOS、超导探测器）
- 自适应光学与干涉技术
- 巡天管线、机器学习辅助的数据挖掘

## 代表方法与设施
地基大望远镜、空间望远镜、射电阵（SKA）。

## 与其他方向的联系
服务全体天体物理方向；技术上与 [[r-qmetro]]（单光子探测）交叉。','["天文技术与方法"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-astro-intro", "type": "prereq", "note": "课程基础"}, {"id": "r-he-astro", "type": "related", "note": "高能探测器是主要应用对象"}]','["r-qmetro"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-cosmology','r-astro','宇宙学','Cosmology','','# 宇宙学

## 方向概述
arXiv: astro-ph.CO。研究宇宙整体的起源、组分与演化：从原初涨落到今天的暗能量主导。

## 核心问题
- 宇宙组分：暗物质、暗能量的本质
- 早期宇宙：暴胀、原初核合成、宇宙微波背景
- 大尺度结构形成与宇宙学参数测量

## 代表方法与设施
CMB 与巡天观测（Planck、Euclid、CSST）、数值模拟、统计推断。

## 与其他方向的联系
与 [[r-hep-ph]]（粒子宇宙学）、[[r-qg]]（极早期）、[[r-galaxy]]（结构形成末端）交叉。','["物理宇宙学"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-astro-intro", "type": "prereq", "note": "课程基础"}, {"id": "c-gr", "type": "prereq", "note": "宇宙学方程来自广义相对论"}, {"id": "r-hep-ph", "type": "related", "note": "早期宇宙与粒子物理交叉（暴胀、暗物质候选者）"}, {"id": "r-qg", "type": "related", "note": "普朗克时期需要量子引力"}]','["r-hep-ph", "r-galaxy", "r-qg"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-exoplanet','r-astro','行星科学与系外行星','Planetary Science and Exoplanets','','# 行星科学与系外行星

## 方向概述
arXiv: astro-ph.EP。研究行星系统的形成、探测与宜居性。

## 核心问题
- 行星形成理论（星子吸积、迁移）
- 系外行星探测：凌星、视向速度、直接成像
- 大气刻画与宜居性

## 代表方法与设施
Kepler/TESS/JWST 测光与光谱、高对比度成像。

## 与其他方向的联系
与 [[r-stellar]]（宿主星）、[[r-astro-instrument]]（探测技术）交叉。','["系外行星"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-astro-intro", "type": "prereq", "note": "课程基础"}]','["r-stellar", "r-astro-instrument"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-galaxy','r-astro','星系物理','Galaxy Astrophysics','','# 星系物理

## 方向概述
arXiv: astro-ph.GA。研究星系的结构、形成与演化，以及银河系考古。

## 核心问题
- 星系形成与演化、恒星形成历史
- 星系动力学、暗物质晕
- 活动星系核与星系际介质

## 代表方法与设施
多波段巡天（SDSS、LSST）、积分场光谱、星系数值模拟。

## 与其他方向的联系
与 [[r-cosmology]]（宇宙学初始条件）、[[r-stellar]]（恒星种群）交叉。','["星系天文学"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-astro-intro", "type": "prereq", "note": "课程基础"}, {"id": "r-cosmology", "type": "related", "note": "星系形成嵌在宇宙学框架中"}]','["r-stellar", "r-cosmology"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-he-astro','r-astro','高能天体物理','High-Energy Astrophysics','','# 高能天体物理

## 方向概述
arXiv: astro-ph.HE。研究宇宙中最剧烈的能量过程：黑洞吸积、喷流、伽马暴与宇宙线。

## 核心问题
- 黑洞吸积盘与喷流物理
- 伽马射线暴、活动星系核
- 宇宙线起源、多信使天文学

## 代表方法与设施
X 射线/伽马射线卫星（HXMT、Fermi）、甚高能观测（LHAASO）、切伦科夫望远镜。

## 与其他方向的联系
与 [[r-grav-wave]]、[[r-black-hole]]、[[r-laser-plasma]]（实验室类比）交叉。','["高能天体"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-astro-intro", "type": "prereq", "note": "课程基础"}, {"id": "r-grav-wave", "type": "related", "note": "多信使天文学（双中子星并合等）"}, {"id": "r-nucl-astro", "type": "related", "note": "核过程决定高能辐射机制"}]','["r-laser-plasma", "r-grav-wave", "r-black-hole"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-stellar','r-astro','恒星物理','Stellar Physics','','# 恒星物理

## 方向概述
arXiv: astro-ph.SR。研究恒星的结构、演化与死亡：从主序星到超新星与致密天体。

## 核心问题
- 恒星结构与演化模型
- 超新星爆发机制、白矮星与中子星
- 双星演化与变星

## 代表方法与设施
恒星演化程序、时域巡天、星震学。

## 与其他方向的联系
与 [[r-nucl-astro]]（核合成）、[[r-he-astro]]（致密星吸积）交叉。','["恒星结构与演化"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-astro-intro", "type": "prereq", "note": "课程基础"}, {"id": "r-nucl-astro", "type": "related", "note": "恒星核燃烧即核天体物理"}]','["r-nucl-astro", "r-he-astro"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-biomolecules','r-bio-mol','生物分子与结构生物学','Biomolecules & Structural Biology','','# 生物分子与结构生物学

## 方向概述
arXiv: q-bio.BM。研究 DNA、RNA、蛋白质等生物大分子的结构、折叠与相互作用。

## 核心问题
- 蛋白质/RNA 结构测定与预测（AlphaFold 之后）
- 折叠动力学与别构调控
- 分子互作网络的结构基础、单分子操纵

## 代表方法与设施
冷冻电镜、X 射线晶体学、核磁共振与 AI 结构预测；单分子光镊/磁镊。','["结构生物学"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-biochemistry", "type": "prereq", "note": "课程基础"}, {"id": "r-soft", "type": "related", "note": "蛋白质折叠与生物大分子的软物质物理"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-cell-behavior','r-bio-mol','细胞行为与信号','Cell Behavior & Signaling','','# 细胞行为与信号

## 方向概述
arXiv: q-bio.CB。研究细胞如何感知、交流并作出决策：信号通路、细胞互作与集体行为。

## 核心问题
- 信号通路的动力学与稳健性
- 细胞迁移、黏附与集体运动
- 细胞间通讯、肿瘤微环境与免疫互作
- 宿主-病原体相互作用

## 代表方法与设施
定量活细胞成像、微流控与数学建模结合。','["细胞信号转导"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-cell-bio", "type": "prereq", "note": "课程基础"}, {"id": "r-tissues-organs", "type": "related", "note": "细胞集体行为构成组织功能"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-genomics','r-bio-mol','基因组学','Genomics','','# 基因组学

## 方向概述
arXiv: q-bio.GN。在基因组整体尺度研究序列、结构与功能：从测序技术到泛基因组。

## 核心问题
- 测序技术迭代（长读长、单细胞）与组装
- 基因调控元件注释、表观基因组
- 比较基因组、群体基因组与泛基因组

## 代表方法与设施
高通量测序平台与大规模计算分析；为精准医学与演化研究提供数据底座。','["功能基因组学"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-genetics", "type": "prereq", "note": "遗传学"}, {"id": "c-bioinfo", "type": "prereq", "note": "序列分析"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-mol-networks','r-bio-mol','分子网络与组学','Molecular Networks & Omics','','# 分子网络与组学

## 方向概述
arXiv: q-bio.MN。把细胞看作网络：基因调控、信号转导、代谢与多组学整合。

## 核心问题
- 基因调控网络与网络模体
- 蛋白质组/代谢组的定量图谱
- 多组学整合与细胞状态建模（虚拟细胞）

## 代表方法与设施
高通量组学技术 + 网络推断与动力系统建模；系统生物学的核心路径。','["系统生物学"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-molecular-bio", "type": "prereq", "note": "分子生物学"}, {"id": "c-bioinfo", "type": "prereq", "note": "数据分析"}, {"id": "r-complex", "type": "related", "note": "复杂网络理论与生物网络"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-quant-bio','r-bio-mol','定量方法与计算生物学','Quantitative Methods & Computational Biology','','# 定量方法与计算生物学

## 方向概述
arXiv: q-bio.QM。为生物学开发生成数据与解释数据的实验、统计与算法方法。

## 核心问题
- 单细胞组学的计算分析
- 生物图像分析与深度学习（蛋白结构预测、细胞分割）
- 生物统计方法与因果推断

## 代表方法与设施
AI for Science 在生命科学的主战场；与 [[r-genomics]]、[[r-biomolecules]] 深度耦合。','["生物统计"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-bioinfo", "type": "prereq", "note": "生物数据基础"}, {"id": "c-probability", "type": "prereq", "note": "概率统计"}, {"id": "r-statistics", "type": "related", "note": "高维统计方法的主要来源"}]','["r-genomics", "r-biomolecules"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-subcellular','r-bio-mol','亚细胞过程','Subcellular Processes','','# 亚细胞过程

## 方向概述
arXiv: q-bio.SC。研究细胞内部的组织与运转：细胞器组装、分子马达与物质定向运输。

## 核心问题
- 细胞骨架动力学与细胞分裂
- 分子马达与囊泡运输
- 细胞器发生、定位与质量控制

## 代表方法与设施
活细胞超分辨成像、光遗传操控与体外重组体系。','["细胞器动力学"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-cell-bio", "type": "prereq", "note": "细胞结构"}, {"id": "c-biochemistry", "type": "prereq", "note": "分子机制"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-neuro','r-bio-org','神经科学与认知','Neurons & Cognition','','# 神经科学与认知

## 方向概述
arXiv: q-bio.NC。研究神经系统的信息处理：从离子通道到认知与行为。

## 核心问题
- 神经元与突触的电生理和动力学
- 神经环路的连接组与功能成像
- 感觉-运动控制、学习记忆与意识的神经基础
- 类脑计算接口

## 代表方法与设施
膜片钳、双光子成像、连接组学与计算建模；与人工智能双向启发。','["计算神经科学"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-physiology", "type": "prereq", "note": "神经生理"}, {"id": "c-cell-bio", "type": "prereq", "note": "突触与细胞机制"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-pop-evolution','r-bio-org','种群、进化与生态','Populations, Evolution & Ecology','','# 种群、进化与生态

## 方向概述
arXiv: q-bio.PE。研究种群动态、物种形成与协同演化：从分子进化到食物网与传染病动力学。

## 核心问题
- 分子进化与系统发育、定向演化
- 种群动态与空间模型、流行病传播（SIR 及其扩展）
- 生物多样性的形成与维持、生命起源

## 代表方法与设施
野外长期观测 + 基因组数据 + 数学模型；与统计物理（[[r-complex]]）共享工具。','["演化生物学", "理论生态"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-ecology", "type": "prereq", "note": "生态学"}, {"id": "c-genetics", "type": "prereq", "note": "群体遗传"}, {"id": "r-noneq", "type": "related", "note": "生态系统是远平衡态体系的典型"}]','["r-complex"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-synthetic-bio','r-bio-org','合成生物学与生物工程','Synthetic Biology & Bioengineering','','# 合成生物学与生物工程

## 方向概述
以工程化思维设计与重建生命系统：基因回路、合成基因组与细胞工厂。

## 核心问题
- 基因回路与逻辑门设计
- 合成基因组与底盘细胞、基因组编辑（CRISPR）
- 代谢工程与细胞工厂、无细胞体系

## 代表方法与设施
设计-构建-测试-学习（DBTL）循环；通向生物制造与基因治疗。','["合成生物学"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-molecular-bio", "type": "prereq", "note": "基因操作"}, {"id": "c-genetics", "type": "prereq", "note": "基因调控"}, {"id": "r-chem-bio", "type": "related", "note": "化学工具（非天然氨基酸、生物正交）的供给方"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-tissues-organs','r-bio-org','组织、器官与生理系统','Tissues, Organs & Physiological Systems','','# 组织、器官与生理系统

## 方向概述
arXiv: q-bio.TO。研究组织与器官层面的功能与力学：血流、生物力学、电活动与肿瘤生长。

## 核心问题
- 心血管与血流的生物力学
- 组织形态发生的力-化学耦合
- 肿瘤生长的多尺度模型、器官芯片

## 代表方法与设施
类器官与器官芯片、医学影像与计算建模结合。','["器官芯片", "生理建模"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-physiology", "type": "prereq", "note": "课程基础"}, {"id": "r-medphy", "type": "related", "note": "医学物理（成像、放疗）的生物学端点"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-chem-bio','r-chem-applied','化学生物学','Chemical Biology','','# 化学生物学

## 方向概述
GB/T 13745: 15060。用化学工具干预与解析生命过程：小分子探针、蛋白修饰与药物发现。

## 核心问题
- 活性小分子探针与靶点发现
- 蛋白质化学修饰与非天然氨基酸
- 核酸化学、生物正交反应与活体标记

## 代表方法与设施
位于化学与生命科学的界面：上游是 [[r-organic-res]]，下游通向 [[r-biomolecules]] 与药物化学。','[]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-organic", "type": "prereq", "note": "有机合成"}, {"id": "c-biochemistry", "type": "prereq", "note": "生物分子的化学"}]','["r-biomolecules", "r-organic-res"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-energy-env-chem','r-chem-applied','能源与环境化学','Energy & Environmental Chemistry','','# 能源与环境化学

## 方向概述
应用化学的重要分支：面向"双碳"与污染治理的化学过程研究。

## 核心问题
- 人工光合作用：光/电催化分解水与 CO₂ 还原
- 储能与转化化学（电池、氢能、燃料电池）
- 环境污染物的迁移转化与治理化学

## 代表方法与设施
原位/工况表征与工程放大；与 [[r-materials-chem]]、[[r-physchem-res]] 深度交叉。','["环境化学", "能源化学"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-phys-chem", "type": "prereq", "note": "热力学与动力学"}, {"id": "r-atmos", "type": "related", "note": "大气化学与气候物理的接口"}]','["r-physchem-res", "r-materials-chem"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-materials-chem','r-chem-applied','材料化学','Materials Chemistry','','# 材料化学

## 方向概述
GB/T 13745: 15065。以化学合成创制功能材料：能源材料、纳米材料与低维材料。

## 核心问题
- 电池与催化材料（锂电、固态电解质、光催化）
- 低维材料：二维材料、量子点、钙钛矿
- 纳米化学合成与表界面调控

## 代表方法与设施
材料基因组与高通量筛选；与凝聚态物理的 [[r-materials]]共享研究对象。','["纳米化学"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-inorganic", "type": "prereq", "note": "固体无机化学"}, {"id": "c-phys-chem", "type": "prereq", "note": "界面与热力学"}, {"id": "r-materials", "type": "related", "note": "凝聚态物理的材料研究（能带、输运）"}]','["r-materials"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-quantum-chem','r-chem-applied','量子化学与计算化学','Quantum & Computational Chemistry','','# 量子化学与计算化学

## 方向概述
GB/T 13745: 15030（量子化学、计算化学）。用量子力学第一性原理计算分子与材料的电子结构。

## 核心问题
- 电子结构方法：HF、DFT、耦合簇
- 分子动力学模拟与自由能计算
- 机器学习势函数与 AI for Chemistry

## 代表方法与设施
从 Gaussian 类软件到 GPU/超算；与 [[r-scientific-computing]] 共享算法基础设施。','["理论化学", "计算化学"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-struct-chem", "type": "prereq", "note": "量子力学基础"}, {"id": "c-computational", "type": "prereq", "note": "数值计算能力"}, {"id": "r-qsim", "type": "related", "note": "量子化学是量子计算最有前景的早期应用"}]','["r-scientific-computing"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-analytical-res','r-chem-core','分析化学研究','Analytical Chemistry Research','','# 分析化学研究

## 方向概述
教育部二级学科 070302。发展更快、更灵敏、更小尺度的测量方法：从单分子检测到活体成像。

## 核心问题
- 质谱新技术（组学分析、单细胞质谱）
- 光谱与成像：拉曼、荧光超分辨联用
- 微流控芯片与生物传感器、化学计量学

## 代表方法与设施
大科学装置（同步辐射、自由电子激光）联用；服务环境、生命与材料科学。','["谱学分析", "质谱分析"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-analytical", "type": "prereq", "note": "定量分析基础"}, {"id": "c-instrumental", "type": "prereq", "note": "仪器方法"}, {"id": "r-spectroscopy", "type": "related", "note": "光谱技术的物理前沿"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-inorganic-res','r-chem-core','无机化学研究','Inorganic Chemistry Research','','# 无机化学研究

## 方向概述
教育部二级学科 070301。研究无机化合物的合成、结构与功能：配位化学、金属有机与无机固体。

## 核心问题
- 功能配合物（光/磁/催化）与金属酶模拟
- 金属有机框架（MOF）等多孔材料
- 稀土功能材料与固体无机化学

## 代表方法与设施
X 射线单晶衍射、谱学表征与理论计算；合成在惰性气氛与高温高压条件下进行。','["配位化学", "固体无机化学"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-inorganic", "type": "prereq", "note": "课程基础"}, {"id": "r-materials-chem", "type": "related", "note": "无机固体的功能材料化"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-organic-res','r-chem-core','有机化学研究','Organic Chemistry Research','','# 有机化学研究

## 方向概述
教育部二级学科 070303。研究有机分子的构建：新反应、新试剂与复杂天然产物全合成。

## 核心问题
- 不对称催化与手性合成
- 过渡金属催化偶联反应、C-H 键活化
- 天然产物全合成与药物分子工艺

## 代表方法与设施
核磁共振与质谱确证结构；计算辅助机理研究日益普及（[[r-quantum-chem]]）。','["有机合成", "金属有机"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-organic", "type": "prereq", "note": "课程基础"}, {"id": "r-chem-bio", "type": "related", "note": "生物活性分子合成与化学生物学交叉"}]','["r-quantum-chem"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-physchem-res','r-chem-core','物理化学与化学物理','Physical Chemistry & Chemical Physics','','# 物理化学与化学物理

## 方向概述
教育部二级学科 070304（含化学物理）。在分子层面定量研究化学过程：反应动力学、催化、电化学与表界面。

## 核心问题
- 基元反应动力学的态-态分辨测量
- 多相/电催化机理与单原子催化
- 表面科学、胶体与界面物理化学
- 光化学与超快过程

## 代表方法与设施
分子束、超快激光光谱、原位表征与理论计算结合；GB/T 13745 将其细分为化学热力学、动力学、量子化学、电化学等。','["化学动力学", "催化化学"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-phys-chem", "type": "prereq", "note": "课程基础"}, {"id": "c-struct-chem", "type": "prereq", "note": "结构与量子基础"}, {"id": "r-atommol", "type": "related", "note": "化学物理与原子分子物理同根（分子束、光谱）"}, {"id": "r-soft", "type": "related", "note": "胶体与界面即软物质"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-polymer-res','r-chem-core','高分子化学与物理','Polymer Chemistry & Physics','','# 高分子化学与物理

## 方向概述
教育部二级学科 070305。研究大分子的合成方法、链结构与凝聚态行为。

## 核心问题
- 活性/可控聚合与精密高分子合成
- 嵌段共聚物自组装、高分子结晶
- 功能与智能高分子（响应性、可降解）

## 代表方法与设施
散射（SAXS/SANS）、流变学与分子模拟；连接材料与生物医学应用。','["高分子科学"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-polymer-chem", "type": "prereq", "note": "课程基础"}, {"id": "r-soft", "type": "related", "note": "高分子是软物质物理的核心体系"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-materials','r-condmat','材料科学（计算材料）','Materials Science','','# 材料科学（计算材料）

## 方向概述
arXiv: cond-mat.mtrl-sci。以物理原理（常与计算结合）设计与理解功能材料。

## 核心问题
- 第一性原理计算与材料数据库
- 能源材料（电池、催化、光伏）
- 低维与量子材料设计

## 代表方法与设施
DFT 高通量计算、材料基因组、同步辐射表征。

## 与其他方向的联系
与 [[r-semiconductor]]、[[r-strong-corr]] 交叉；方法上依托 [[c-computational-adv]]。','["计算材料学"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-solid-state", "type": "prereq", "note": "课程基础"}, {"id": "r-semiconductor", "type": "related", "note": "功能材料的重要类别"}]','["c-computational-adv", "r-strong-corr", "r-semiconductor"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-meso','r-condmat','介观与纳米物理','Mesoscopic and Nanoscale Physics','','# 介观与纳米物理

## 方向概述
arXiv: cond-mat.mes-hall。研究介于宏观与微观之间尺度的量子输运现象。

## 核心问题
- 量子输运：量子霍尔效应、弹道输运、库仑阻塞
- 量子点与量子线器件
- 二维材料（石墨烯、TMD）新奇物性

## 代表方法与设施
微纳加工、稀释制冷输运测量、扫描探针。

## 与其他方向的联系
与 [[r-qc]]、[[r-semiconductor]]、[[r-strong-corr]] 交叉。','["介观物理"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-solid-state", "type": "prereq", "note": "课程基础"}, {"id": "r-qc", "type": "related", "note": "量子点与拓扑器件是量子计算平台"}, {"id": "r-semiconductor", "type": "related", "note": "纳米器件的半导体基础"}]','["r-strong-corr", "r-qc", "r-semiconductor"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-semiconductor','r-condmat','半导体物理','Semiconductor Physics','','# 半导体物理

## 方向概述
研究半导体的载流子行为与器件物理，是微电子与光电子的科学基础。

## 核心问题
- 载流子统计与输运、p-n 结
- 低维与宽禁带半导体
- 半导体光电子器件（激光器、探测器）

## 代表方法与设施
外延生长（MBE）、器件制备与电学/光学表征。

## 与其他方向的联系
与 [[r-meso]]、[[r-materials]]、[[r-laser]]（半导体激光器）交叉。','["半导体"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-solid-state", "type": "prereq", "note": "课程基础"}]','["r-meso", "r-laser", "r-materials"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-spintronics','r-condmat','磁学与自旋电子学','Magnetism and Spintronics','','# 磁学与自旋电子学

## 方向概述
研究磁有序与自旋自由度在信息器件中的应用。

## 核心问题
- 磁有序与磁激发（自旋波、斯格明子）
- 自旋输运：自旋霍尔效应、自旋矩转移
- 磁性存储与自旋器件

## 代表方法与设施
磁光测量、铁磁共振、微磁模拟。

## 与其他方向的联系
与 [[r-strong-corr]]、[[r-meso]] 交叉。','["自旋电子学"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-solid-state", "type": "prereq", "note": "课程基础"}, {"id": "r-strong-corr", "type": "related", "note": "磁性多源于关联效应"}]','["r-meso", "r-strong-corr"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-strong-corr','r-condmat','强关联电子','Strongly Correlated Electrons','','# 强关联电子

## 方向概述
arXiv: cond-mat.str-el。研究电子间相互作用主导的多体物理：能带图像失效之处。

## 核心问题
- 莫特绝缘体、重费米子
- 量子磁性与自旋液体
- 拓扑物态（拓扑绝缘体、外尔半金属）

## 代表方法与设施
量子多体数值方法（DMRG、张量网络）、ARPES、中子散射。

## 与其他方向的联系
与 [[r-superconduct]]、[[r-phase]]、[[r-qsim]]（量子模拟平台）交叉。','["强关联体系"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-solid-state", "type": "prereq", "note": "课程基础"}, {"id": "r-phase", "type": "related", "note": "量子相变是核心议题"}, {"id": "r-superconduct", "type": "related", "note": "非常规超导多出于强关联体系"}]','["r-superconduct", "r-phase", "r-qsim"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-superconduct','r-condmat','超导物理','Superconductivity','','# 超导物理

## 方向概述
arXiv: cond-mat.supr-con。研究超导与超流的机制、材料与应用。

## 核心问题
- BCS 与非常规配对（高温超导、铁基超导）
- 拓扑超导与马约拉纳零能模
- 超导应用：磁体、量子比特、单光子探测

## 代表方法与设施
极低温输运、缪子自旋弛豫、薄膜生长。

## 与其他方向的联系
与 [[r-strong-corr]]、[[r-qc]]（超导量子比特）、[[r-meso]] 交叉。','["超导"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-solid-state", "type": "prereq", "note": "课程基础"}]','["r-qc", "r-meso", "r-strong-corr"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-ai-reasoning','r-cs-ai','人工智能：推理与智能体','AI: Reasoning name_en: AI: Reasoning & Agents Agents','','# 人工智能：推理与智能体

## 方向概述
arXiv: cs.AI / cs.MA。研究机器的知识、推理、规划与多智能体协作。

## 核心问题
- 知识表示与神经-符号推理
- 规划与决策（强化学习智能体）
- 大模型智能体（Agent）与工具调用
- 多智能体系统与博弈

## 代表方法与设施
符号方法与统计学习的融合是长期主线；与 [[r-ml-res]] 互为表里。','["通用人工智能"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-ai-intro", "type": "prereq", "note": "课程基础"}]','["r-ml-res"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-cv','r-cs-ai','计算机视觉','Computer Vision','','# 计算机视觉

## 方向概述
arXiv: cs.CV。研究让机器理解图像与视频：识别、重建与生成。

## 核心问题
- 视觉基础模型与开放词汇识别
- 三维视觉与神经渲染（NeRF/3DGS）
- 视频理解与世界模型
- 图像与视频生成

## 代表方法与设施
从卷积网络到视觉 Transformer；自动驾驶、医学影像的主要支撑技术。','["视觉计算"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-ml", "type": "prereq", "note": "深度学习"}, {"id": "c-image-processing", "type": "related", "note": "底层图像处理基础"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-graphics-hci','r-cs-ai','计算机图形学与人机交互','Graphics & HCI','','# 计算机图形学与人机交互

## 方向概述
arXiv: cs.GR / cs.HC。研究图像的合成与人的计算交互：渲染、几何处理与交互界面。

## 核心问题
- 实时渲染与光线追踪、神经渲染
- 几何处理与动画仿真
- 交互范式、可用性与普适计算
- 数据可视化

## 代表方法与设施
GPU 编程与感知实验；SIGGRAPH/CHI 社区，与 [[r-cv]] 在三维重建上合流。','["可视化"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-data-structures", "type": "prereq", "note": "编程与几何数据结构"}]','["r-cv"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-ml-res','r-cs-ai','机器学习研究','Machine Learning Research','','# 机器学习研究

## 方向概述
arXiv: cs.LG。研究从数据中学习规律：深度网络、表征学习与学习理论。

## 核心问题
- 大模型与 Transformer 架构演进
- 预训练、微调与对齐（RLHF）
- 生成模型（扩散模型）与多模态学习
- 学习理论：泛化、优化与隐式正则

## 代表方法与设施
算力 + 数据 + 算法三要素驱动；NeurIPS/ICML/ICLR 社区，AI for Science 的引擎。','["深度学习"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-ml", "type": "prereq", "note": "课程基础"}, {"id": "r-statistics", "type": "related", "note": "统计学习理论与高维统计"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-nlp','r-cs-ai','自然语言处理','Natural Language Processing','','# 自然语言处理

## 方向概述
arXiv: cs.CL。研究人类语言的理解与生成：大语言模型是当前范式。

## 核心问题
- 大语言模型：预训练、指令微调与推理能力
- 检索增强（RAG）与长上下文
- 多语言与低资源 NLP、机器翻译
- 语言模型的可解释性与安全

## 代表方法与设施
Scaling law 驱动的工程化研究；ACL/EMNLP 社区，与语言学交叉。','["计算语言学"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-ml", "type": "prereq", "note": "深度学习"}]','[]');