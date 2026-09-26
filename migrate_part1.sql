INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-cell-bio','c-bio','细胞生物学','Cell Biology','','# 细胞生物学

## 课程概述
研究生命的基本单位：细胞器的结构与协作、物质运输、信号转导与细胞周期。

## 主要内容
- 细胞膜与跨膜运输、内膜系统
- 线粒体与能量转换、细胞骨架
- 细胞信号转导、细胞周期与凋亡
- 细胞连接与细胞外基质

## 先修与后续
通向 [[c-dev-bio]]、[[c-physiology]] 与 [[r-subcellular]]、[[r-cell-behavior]]。','[]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-gen-bio", "type": "prereq", "note": "细胞概览"}, {"id": "c-biochemistry", "type": "related", "note": "细胞过程的分子基础"}]','["c-dev-bio", "c-physiology", "r-cell-behavior", "r-subcellular"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-dev-bio','c-bio','发育生物学','Developmental Biology','','# 发育生物学

## 课程概述
研究受精卵如何建成复杂的生物体：细胞命运决定、图式形成与形态发生。

## 主要内容
- 受精与早期胚胎发育、细胞命运与分化
- 图式形成与体轴建立、形态发生素
- 器官发生、干细胞与再生
- 演化发育生物学（Evo-Devo）初步

## 先修与后续
通向 [[r-cell-behavior]] 与 [[r-tissues-organs]]。','[]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-cell-bio", "type": "prereq", "note": "细胞行为"}, {"id": "c-genetics", "type": "prereq", "note": "基因调控"}]','["r-tissues-organs", "r-cell-behavior"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-ecology','c-bio','生态学','Ecology','','# 生态学

## 课程概述
研究生物与环境的关系：个体、种群、群落与生态系统四个组织层次。

## 主要内容
- 种群生态（增长模型、种间关系）
- 群落结构与演替、生物多样性
- 生态系统物质循环与能量流动
- 全球变化生态学与保护生物学

## 先修与后续
通向 [[r-pop-evolution]]；与地球科学（[[r-atmos]]、[[r-ocean]]）在碳循环上交汇。','[]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-gen-bio", "type": "prereq", "note": "生物多样性"}, {"id": "c-probability", "type": "related", "note": "种群统计与数据分析"}]','["r-ocean", "r-atmos", "r-pop-evolution"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-gen-bio','c-bio','普通生物学','General Biology','','# 普通生物学

## 课程概述
生命科学的入门全景课：从细胞到生态系统的生命图景，建立"结构-功能-演化"的统一视角。

## 主要内容
- 生命的化学基础、细胞结构与功能
- 遗传与繁殖、演化理论
- 生物多样性（动植物与微生物类群）
- 生态学初步

## 先修与后续
后续分流：[[c-biochemistry]]、[[c-cell-bio]]、[[c-genetics]]、[[c-microbiology]]、[[c-physiology]]、[[c-ecology]]。','["基础生物学"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-gen-chem", "type": "related", "note": "生命的化学基础（生物分子、能量与酶）"}]','["c-ecology", "c-genetics", "c-cell-bio", "c-physiology", "c-biochemistry", "c-microbiology"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-genetics','c-bio','遗传学','Genetics','','# 遗传学

## 课程概述
研究遗传与变异的规律：从孟德尔定律到基因组时代的连锁分析与群体遗传。

## 主要内容
- 孟德尔遗传与连锁互换、染色体遗传
- 基因突变与 DNA 多态性
- 数量遗传与群体遗传初步
- 表观遗传学

## 先修与后续
通向 [[c-dev-bio]] 与 [[r-genomics]]、[[r-pop-evolution]]。','[]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-gen-bio", "type": "prereq", "note": "遗传与繁殖"}, {"id": "c-molecular-bio", "type": "prereq", "note": "中心法则"}]','["c-dev-bio", "r-genomics", "r-pop-evolution"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-microbiology','c-bio','微生物学','Microbiology','','# 微生物学

## 课程概述
研究细菌、古菌、真菌与病毒：微生物的生理、遗传、生态与应用。

## 主要内容
- 微生物的形态结构与分类鉴定
- 微生物生长与代谢的多样性
- 病毒学基础、微生物遗传
- 微生物生态与工业/医学微生物

## 先修与后续
通向 [[r-cell-behavior]]（宿主-病原体互作）与合成生物学 [[r-synthetic-bio]] 的底盘细胞工程。','[]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-gen-bio", "type": "prereq", "note": "微生物类群"}, {"id": "c-biochemistry", "type": "prereq", "note": "代谢与酶"}]','["r-synthetic-bio", "r-cell-behavior"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-molecular-bio','c-bio','分子生物学','Molecular Biology','','# 分子生物学

## 课程概述
研究遗传信息的存储、复制与表达：中心法则是其纲领。

## 主要内容
- DNA 复制、修复与重组
- 转录与转录调控（操纵子、表观遗传）
- 翻译与翻译后加工
- 基因工程基本技术（克隆、PCR、测序原理）

## 先修与后续
通向 [[c-genetics]]、[[c-bioinfo]] 与 [[r-genomics]]、[[r-synthetic-bio]]。','[]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-biochemistry", "type": "prereq", "note": "核酸与蛋白质的化学"}]','["r-genomics", "r-synthetic-bio", "c-bioinfo", "c-genetics"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-physiology','c-bio','生理学','Physiology','','# 生理学

## 课程概述
研究生物体各系统的功能及其调节：以人和动物生理为主干的整合性课程。

## 主要内容
- 神经与肌肉生理、感觉系统
- 循环、呼吸、消化与排泄
- 内分泌与生殖、体温与内环境稳态
- 植物生理概要

## 先修与后续
通向 [[r-tissues-organs]]、[[r-neuro]]；与医学（[[r-medphy]] 相关应用）衔接。','[]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-gen-bio", "type": "prereq", "note": "生物体概览"}, {"id": "c-cell-bio", "type": "prereq", "note": "细胞功能"}]','["r-medphy", "r-tissues-organs", "r-neuro"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-analytical','c-chem','分析化学','Analytical Chemistry','','# 分析化学

## 课程概述
研究物质组成与含量的测定：以四大滴定平衡（酸碱/配位/氧化还原/沉淀）为理论核心的定量分析。

## 主要内容
- 误差与数据处理、分析质量控制
- 酸碱、配位、氧化还原、沉淀滴定
- 重量分析法、吸光光度法初步

## 先修与后续
通向 [[c-instrumental]] 与 [[r-analytical-res]]。','["定量分析"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-gen-chem", "type": "prereq", "note": "化学平衡理论"}]','["c-instrumental", "r-analytical-res"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-gen-chem','c-chem','普通化学','General Chemistry','','# 普通化学

## 课程概述
化学专业的入门课：从原子结构、化学键到化学热力学与动力学的全景式概览，连接中学化学与专业化学。

## 主要内容
- 原子结构与元素周期律、化学键与分子结构
- 化学热力学初步：焓、熵、吉布斯自由能
- 化学平衡、酸碱与配位化学初步、电化学初步

## 先修与后续
后续分为四大化学：[[c-inorganic]]、[[c-organic]]、[[c-analytical]]、[[c-phys-chem]]。','["大学化学", "基础化学"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-calculus", "type": "prereq", "note": "化学计算中的微积分工具"}]','["c-analytical", "c-phys-chem", "c-organic", "c-inorganic"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-inorganic','c-chem','无机化学','Inorganic Chemistry','','# 无机化学

## 课程概述
研究元素及其无机化合物的组成、结构、性质与反应：配位化学是其理论核心。

## 主要内容
- 酸碱理论与非水溶剂、配位化学（晶体场/配位场理论）
- 主族元素化学分区讨论
- 过渡金属与稀土元素化学、无机固体化学初步

## 先修与后续
通向 [[r-inorganic-res]]；与材料、催化（[[r-materials-chem]]、[[r-physchem-res]]）衔接。','[]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-gen-chem", "type": "prereq", "note": "原子结构与化学平衡基础"}]','["r-inorganic-res", "r-materials-chem", "r-physchem-res"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-instrumental','c-chem','仪器分析','Instrumental Analysis','','# 仪器分析

## 课程概述
基于物理仪器的现代分析方法：光谱、色谱、质谱与电化学分析的仪器原理与应用。

## 主要内容
- 紫外-可见/红外/原子吸收与发射光谱
- 气相/液相色谱、毛细管电泳
- 质谱、核磁共振波谱初步、电化学分析

## 先修与后续
通向 [[r-analytical-res]]；谱学物理原理对应 [[r-spectroscopy]]。','["现代仪器分析"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-analytical", "type": "prereq", "note": "定量分析基础"}, {"id": "c-optics", "type": "related", "note": "光谱仪器的物理原理"}]','["r-spectroscopy", "r-analytical-res"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-organic','c-chem','有机化学','Organic Chemistry','','# 有机化学

## 课程概述
研究碳氢化合物及其衍生物：结构、命名、反应机理与合成设计，以"官能团 + 机理"为骨架。

## 主要内容
- 立体化学、烷烯炔与芳香烃
- 亲核/亲电取代与加成、消除反应机理
- 醇醛酮羧酸及其衍生物、含氮化合物
- 有机合成设计初步（逆合成分析）

## 先修与后续
通向 [[c-polymer-chem]]、[[c-biochemistry]] 与 [[r-organic-res]]。','[]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-gen-chem", "type": "prereq", "note": "化学键与热力学基础"}]','["c-polymer-chem", "c-biochemistry", "r-organic-res"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-phys-chem','c-chem','物理化学','Physical Chemistry','','# 物理化学

## 课程概述
化学的理论主干：用物理学原理定量描述化学体系——热力学、动力学、电化学与界面胶体。

## 主要内容
- 热力学三定律、化学势与相平衡
- 化学动力学：速率理论、链反应、催化
- 电化学：电极电势、电解与电池
- 界面现象与胶体化学

## 先修与后续
通向 [[c-struct-chem]]、[[c-polymer-chem]] 与 [[r-physchem-res]]。','["理论化学基础"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-gen-chem", "type": "prereq", "note": "化学平衡初步"}, {"id": "c-calculus", "type": "prereq", "note": "热力学数学推导"}, {"id": "c-thermo", "type": "related", "note": "物理系热学/热力学与化学热力学同源"}]','["r-physchem-res", "c-polymer-chem", "c-struct-chem"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-polymer-chem','c-chem','高分子化学','Polymer Chemistry','','# 高分子化学

## 课程概述
研究大分子的合成、结构与性能：聚合反应机理与高分子链统计。

## 主要内容
- 逐步聚合与链式聚合（自由基/离子/配位）
- 共聚合、聚合物化学反应
- 高分子链构象、聚集态结构与性能初步

## 先修与后续
通向 [[r-polymer-res]]；与软物质物理（[[r-soft]]）紧密交叉。','["高分子化学与物理"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-organic", "type": "prereq", "note": "聚合反应的有机化学基础"}, {"id": "c-phys-chem", "type": "prereq", "note": "高分子物理的热力学基础"}]','["r-soft", "r-polymer-res"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-struct-chem','c-chem','结构化学','Structural Chemistry','','# 结构化学

## 课程概述
从量子力学出发理解原子与分子的结构：轨道理论、分子对称性与晶体结构。

## 主要内容
- 氢原子与多电子原子的量子力学处理
- 分子轨道理论、价键理论、配位场理论
- 分子对称性与点群、晶体学基础（点阵与空间群）

## 先修与后续
通向 [[r-quantum-chem]]、[[r-physchem-res]]；群论语言见 [[c-group-theory]]。','["量子化学基础"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-phys-chem", "type": "prereq", "note": "热力学与动力学"}, {"id": "c-quantum-mechanics", "type": "related", "note": "量子力学是结构化学的理论框架（薛定谔方程、轨道）"}]','["r-physchem-res", "r-quantum-chem", "c-group-theory"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-electrodynamics','c-core','电动力学','Classical Electrodynamics','','# 电动力学

## 课程概述
电磁现象的完整经典场论：从麦克斯韦方程组出发处理静态场、辐射与相对论性表述。

## 主要内容
- 静电与静磁边值问题、多极展开
- 电磁波的传播、导行波与谐振腔
- 电磁辐射、狭义相对论与电动力学的协变形式

## 先修与后续
先修 [[c-electromagnetism]]、[[c-math-methods]]、[[c-theoretical-mechanics]]。后续为 [[c-qft]]、[[c-gr]]、[[c-plasma-intro]] 与 [[c-amo-course]]。','["经典电动力学"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-electromagnetism", "type": "prereq", "note": "电磁学定律是本课程的系统化对象"}, {"id": "c-math-methods", "type": "prereq", "note": "边值问题需要数理方程与特殊函数"}, {"id": "c-theoretical-mechanics", "type": "prereq", "note": "相对论性表述需要分析力学语言"}]','["c-math-methods", "c-qft", "c-electromagnetism", "c-amo-course", "c-gr", "c-theoretical-mechanics", "c-plasma-intro"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-quantum-mechanics','c-core','量子力学','Quantum Mechanics','','# 量子力学

## 课程概述
微观世界的基本理论框架：态、算符、测量与演化，是现代物理几乎所有分支的语言。

## 主要内容
- 波函数与薛定谔方程、一维定态问题
- 算符、表象与测量公设、角动量理论
- 定态微扰论与变分法、自旋与全同粒子、散射初步

## 先修与后续
先修 [[c-atomic]]、[[c-math-methods]]、[[c-theoretical-mechanics]]。后续几乎覆盖全部专业选修：[[c-advanced-qm]]、[[c-solid-state]]、[[c-amo-course]]、[[c-quantum-info-intro]]、[[c-group-theory]]、[[c-particle-nuclear]] 等。','["量子力学(I)"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-atomic", "type": "prereq", "note": "原子物理的实验事实与本课程衔接"}, {"id": "c-math-methods", "type": "prereq", "note": "薛定谔方程求解依赖数理方法"}, {"id": "c-theoretical-mechanics", "type": "prereq", "note": "哈密顿形式是量子化的出发点"}]','["c-math-methods", "c-advanced-qm", "c-solid-state", "c-group-theory", "c-amo-course", "c-quantum-info-intro", "c-theoretical-mechanics", "c-particle-nuclear", "c-atomic"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-statistical-mechanics','c-core','热力学与统计物理','Thermodynamics and Statistical Mechanics','','# 热力学与统计物理

## 课程概述
从微观态的概率假设导出宏观热性质，建立平衡态统计力学的系综理论并初步讨论相变。

## 主要内容
- 微正则、正则与巨正则系综
- 经典理想气体、量子统计（玻色、费米）
- 玻色-爱因斯坦凝聚与费米气体、相变与临界现象初步、涨落理论

## 先修与后续
先修 [[c-thermo]]、[[c-math-methods]]；与 [[c-quantum-mechanics]] 相互支撑（量子统计）。后续为 [[c-solid-state]]、[[c-plasma-intro]]，并通向 [[r-phase]]、[[r-noneq]]、[[r-soft]]、[[r-biophy]]、[[r-complex]] 等研究方向。','["统计力学", "热统"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-thermo", "type": "prereq", "note": "宏观热力学是本课程的微观化对象"}, {"id": "c-math-methods", "type": "prereq", "note": "系综计算需要积分与级数工具"}]','["c-thermo", "c-math-methods", "c-solid-state", "r-phase", "r-soft", "c-quantum-mechanics", "r-biophy", "r-complex", "r-noneq", "c-plasma-intro"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-theoretical-mechanics','c-core','理论力学','Theoretical (Analytical) Mechanics','','# 理论力学

## 课程概述
以分析力学（拉格朗日、哈密顿形式）重写经典力学，建立贯穿整个理论物理的"作用量—对称性—守恒律"框架。

## 主要内容
- 约束与广义坐标、拉格朗日方程
- 哈密顿正则方程、正则变换、哈密顿-雅可比理论
- 小振动、刚体定点转动、非线性动力学初步

## 先修与后续
先修 [[c-mechanics]]、[[c-math-methods]]。后续为 [[c-electrodynamics]]、[[c-quantum-mechanics]]，并支撑 [[c-gr]]、[[c-fluid]] 与 [[r-nonlinear]]。','["分析力学"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-mechanics", "type": "prereq", "note": "牛顿力学是本课程重写与深化的对象"}, {"id": "c-math-methods", "type": "prereq", "note": "变分法与偏微分方程工具"}]','["c-math-methods", "c-electrodynamics", "c-fluid", "c-mechanics", "c-quantum-mechanics", "c-gr", "r-nonlinear"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-ai-intro','c-cs','人工智能导论','Introduction to Artificial Intelligence','','# 人工智能导论

## 课程概述
AI 的全景导论：从符号主义的搜索与推理到统计学习的基本范式。

## 主要内容
- 搜索（A*、对抗搜索）与约束满足
- 知识表示与逻辑推理
- 概率图模型初步
- 机器学习与智能体概览

## 先修与后续
通向 [[c-ml]] 与 [[r-ai-reasoning]]。','["AI 导论"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-data-structures", "type": "prereq", "note": "搜索与图"}, {"id": "c-probability", "type": "prereq", "note": "不确定性推理"}]','["r-ai-reasoning", "c-ml"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-algorithms','c-cs','算法设计与分析','Algorithm Design & Analysis','','# 算法设计与分析

## 课程概述
系统化的算法方法论：分治、动态规划、贪心与 NP 完全性。

## 主要内容
- 渐近分析与递推式
- 分治、动态规划、贪心
- 图算法（最短路、匹配、网络流）
- NP 完全性与近似/随机算法初步

## 先修与后续
通向 [[r-algorithms]]，是 CS 研究与大厂面试的共同核心。','["算法"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-data-structures", "type": "prereq", "note": "数据结构"}, {"id": "c-discrete-math", "type": "prereq", "note": "证明与计数"}, {"id": "r-optimization", "type": "related", "note": "连续优化与组合优化的交汇"}]','["r-algorithms"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-compilers','c-cs','编译原理','Compiler Principles','','# 编译原理

## 课程概述
研究如何把高级语言翻译成机器代码：词法/语法/语义分析、优化与代码生成。

## 主要内容
- 词法分析（正则式与有穷自动机）
- 语法分析（LL/LR）、语法制导翻译
- 中间表示、数据流与优化
- 目标代码生成与运行时

## 先修与后续
通向 [[r-formal-methods]]；自动机理论见 [[r-algorithms]] 的计算理论部分。','["编译器"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-data-structures", "type": "prereq", "note": "语法树与符号表"}, {"id": "c-discrete-math", "type": "prereq", "note": "形式语言与自动机"}]','["r-algorithms", "r-formal-methods"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-computer-arch','c-cs','计算机组成原理','Computer Organization & Architecture','','# 计算机组成原理

## 课程概述
从逻辑门到处理器：理解程序如何在真实硬件上运行。

## 主要内容
- 数的机器表示与运算器
- 指令系统、数据通路与控制器
- 存储层次（cache、虚拟存储）
- 总线、I/O 与流水线初步

## 先修与后续
通向 [[c-os]] 与 [[r-os-systems]]。','["体系结构基础"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-programming", "type": "prereq", "note": "机器级程序概念"}]','["r-os-systems", "c-os"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-data-structures','c-cs','数据结构','Data Structures','','# 数据结构

## 课程概述
研究数据的组织方式及其操作效率：表、树、图与散列是全部软件系统的骨架。

## 主要内容
- 线性表、栈与队列
- 树与二叉树、堆、平衡树
- 图结构与遍历、散列表
- 排序与查找、复杂度分析初步

## 先修与后续
通向 [[c-algorithms]]、[[c-os]]、[[c-database]]、[[c-compilers]]。','[]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-programming", "type": "prereq", "note": "编程基础"}]','["c-database", "c-compilers", "c-algorithms", "c-os"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-database','c-cs','数据库系统','Database Systems','','# 数据库系统

## 课程概述
研究数据的持久化组织与高效查询：关系模型、SQL、事务与存储引擎。

## 主要内容
- 关系模型与规范化、SQL
- 存储与索引（B+ 树、LSM 树）
- 查询处理与优化
- 事务、并发控制与恢复（ACID）

## 先修与后续
通向 [[r-database-res]]。','["数据库原理"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-data-structures", "type": "prereq", "note": "索引结构"}]','["r-database-res"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-discrete-math','c-cs','离散数学','Discrete Mathematics','','# 离散数学

## 课程概述
计算机科学的数学基础：逻辑、集合、关系、图论与初等数论，支撑算法与形式化方法。

## 主要内容
- 命题逻辑与谓词逻辑
- 集合、关系与函数
- 图论基础、树
- 初等数论与组合计数

## 先修与后续
通向 [[c-algorithms]]、[[c-compilers]]、[[r-formal-methods]]。','["离散结构"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-advanced-algebra", "type": "related", "note": "代数结构部分与抽象代数衔接"}, {"id": "r-combinatorics", "type": "related", "note": "组合计数方法的深化"}]','["c-compilers", "c-algorithms", "r-formal-methods"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-ml','c-cs','机器学习','Machine Learning','','# 机器学习

## 课程概述
数据驱动的学习范式：从线性模型到深度网络，经验风险最小化是统一视角。

## 主要内容
- 监督学习：线性模型、SVM、树与集成
- 神经网络与反向传播、深度学习初步
- 无监督学习：聚类、降维
- 泛化理论、正则化与模型评估

## 先修与后续
通向 [[r-ml-res]]、[[r-cv]]、[[r-nlp]]、[[r-robotics]]。','["ML"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-ai-intro", "type": "prereq", "note": "学习问题框架"}, {"id": "c-probability", "type": "prereq", "note": "统计学习理论"}, {"id": "c-linear-algebra", "type": "prereq", "note": "矩阵运算"}]','["r-ml-res", "r-nlp", "r-robotics", "r-cv"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-networks-course','c-cs','计算机网络','Computer Networks','','# 计算机网络

## 课程概述
以分层体系（TCP/IP）为主线的网络原理课：从物理层到应用层。

## 主要内容
- 分层模型与协议概念、物理与链路层
- 网络层：IP、路由算法
- 传输层：TCP/UDP、拥塞控制
- 应用层协议与网络安全初步

## 先修与后续
通向 [[r-networks-res]] 与 [[r-security]]。','["网络原理"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-data-structures", "type": "prereq", "note": "协议实现基础"}, {"id": "c-os", "type": "related", "note": "网络栈与 socket 编程"}]','["r-networks-res", "r-security"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-os','c-cs','操作系统','Operating Systems','','# 操作系统

## 课程概述
研究管理硬件资源、抽象执行环境的系统软件：进程、内存、文件与设备。

## 主要内容
- 进程与线程、调度、同步与死锁
- 内存管理与虚拟存储
- 文件系统、设备管理
- 安全与虚拟化初步

## 先修与后续
通向 [[c-networks-course]]（网络栈）与 [[r-os-systems]]。','["OS"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-data-structures", "type": "prereq", "note": "内核数据结构"}, {"id": "c-computer-arch", "type": "prereq", "note": "硬件接口与中断"}]','["c-networks-course", "r-os-systems"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-programming','c-cs','程序设计基础','Introduction to Programming','','# 程序设计基础

## 课程概述
计算机科学的第一课：用一门语言（C/C++/Python）学会把问题变成程序，建立计算思维。

## 主要内容
- 基本语法、数据类型与控制结构
- 函数、数组、指针/引用与内存初步
- 结构化程序设计、调试与测试
- 简单算法与复杂度直觉

## 先修与后续
一切 CS 课程的前置：[[c-data-structures]]、[[c-computer-arch]] 等。','["编程入门", "C/Python 程序设计"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-calculus", "type": "related", "note": "计算思维与数学基础相互促进"}]','["c-data-structures", "c-computer-arch"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-advanced-qm','c-elective','高等量子力学','Advanced Quantum Mechanics','','# 高等量子力学

## 课程概述
量子力学的进阶形式与多体推广，是进入量子场论与理论研究的直接预备。

## 主要内容
- 路径积分、密度矩阵
- 二次量子化与多体方法初步
- 相对论量子力学（狄拉克方程）、对称性与角动量深化

## 先修与后续
先修 [[c-quantum-mechanics]]。后续为 [[c-qft]]，并支撑 [[r-cold-atom]] 等量子多体方向。','["量子力学(II)", "高量"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-quantum-mechanics", "type": "prereq", "note": "本课程是量子力学的深化"}]','["c-qft", "r-cold-atom", "c-quantum-mechanics"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-amo-course','c-elective','原子分子与光物理','Atomic, Molecular and Optical Physics','','# 原子分子与光物理

## 课程概述
用量子力学与电动力学系统处理原子、分子结构及光与物质的相互作用，是 AMO 研究的基础课。

## 主要内容
- 原子结构：精细与超精细结构、外场中的原子
- 分子光谱与分子结构
- 光与物质相互作用、激光原理

## 先修与后续
先修 [[c-quantum-mechanics]]、[[c-electrodynamics]]。是 [[r-atommol]]、[[r-qoptics]]、[[r-laser]]、[[r-ultrafast]]、[[r-spectroscopy]]、[[r-cold-atom]] 等方向的入口。','["AMO物理"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-quantum-mechanics", "type": "prereq", "note": "原子分子结构的定量理论"}, {"id": "c-electrodynamics", "type": "prereq", "note": "光与物质相互作用的经典电磁基础"}]','["c-electrodynamics", "r-cold-atom", "r-laser", "c-quantum-mechanics", "r-spectroscopy", "r-ultrafast", "r-atommol", "r-qoptics"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-astro-intro','c-elective','天体物理导论','Introduction to Astrophysics','','# 天体物理导论

## 课程概述
把普通物理应用于天体：从恒星到星系到宇宙，给出天体物理的整体图景。

## 主要内容
- 天文观测基础、恒星结构与演化
- 星际介质、星系结构与银河系
- 宇宙学初步、高能天体现象概览

## 先修与后续
先修 [[c-mechanics]]、[[c-atomic]]。是天体物理各研究方向（[[r-cosmology]]、[[r-galaxy]]、[[r-stellar]]、[[r-he-astro]]、[[r-exoplanet]]、[[r-astro-instrument]]）的入口。','["天体物理基础"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-mechanics", "type": "prereq", "note": "天体力学与结构平衡的基础"}, {"id": "c-atomic", "type": "prereq", "note": "恒星光谱与核过程的物理基础"}]','["r-stellar", "r-galaxy", "r-astro-instrument", "r-exoplanet", "c-mechanics", "c-atomic", "r-cosmology", "r-he-astro"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-computational-adv','c-elective','计算物理进阶','Advanced Computational Physics','','# 计算物理进阶

## 课程概述
面向研究的大规模数值模拟与现代计算方法（本研衔接）。

## 主要内容
- 偏微分方程的高性能求解、并行计算
- 蒙特卡洛与分子动力学进阶
- 机器学习在物理问题中的应用

## 先修与后续
先修 [[c-computational]]。支撑 [[r-materials]]、[[r-lattice]]、[[r-numerical-rel]] 等计算密集型方向。','["高等计算物理"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-computational", "type": "prereq", "note": "本课程是计算物理的深化"}]','["r-numerical-rel", "c-computational", "r-lattice", "r-materials"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-fluid','c-elective','流体力学','Fluid Mechanics','','# 流体力学

## 课程概述
把质点系力学推广到连续介质，建立流体运动的控制方程与典型流动分析。

## 主要内容
- 连续介质假设、欧拉与纳维-斯托克斯方程
- 理想流体、涡量动力学、势流
- 粘性流动与边界层、湍流现象引论

## 先修与后续
先修 [[c-theoretical-mechanics]]。后续通向 [[r-fluid-dyn]]、[[r-turbulence]]、[[r-pattern]]，并支撑 [[r-atmos]]、[[r-ocean]]。','["流体力学基础"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-theoretical-mechanics", "type": "prereq", "note": "连续介质力学是分析力学的延伸"}]','["r-turbulence", "r-ocean", "r-fluid-dyn", "c-theoretical-mechanics", "r-pattern", "r-atmos"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-gr','c-elective','广义相对论','General Relativity','','# 广义相对论

## 课程概述
引力即时空几何：介绍微分几何语言与爱因斯坦场方程及其经典解。

## 主要内容
- 张量分析与黎曼几何初步
- 爱因斯坦场方程、史瓦西时空、黑洞初步
- 引力波、宇宙学初步

## 先修与后续
先修 [[c-theoretical-mechanics]]、[[c-electrodynamics]]。是 [[r-grav-wave]]、[[r-black-hole]]、[[r-numerical-rel]] 的入口，并与 [[c-qft]] 一起支撑 [[r-qg]]；宇宙学方向见 [[r-cosmology]]。','["广相"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-theoretical-mechanics", "type": "prereq", "note": "变分原理与时空几何表述"}, {"id": "c-electrodynamics", "type": "prereq", "note": "协变形式与张量运算的预备"}]','["c-qft", "r-numerical-rel", "r-qg", "c-electrodynamics", "r-black-hole", "c-theoretical-mechanics", "r-cosmology", "r-grav-wave"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-group-theory','c-elective','群论','Group Theory for Physicists','','# 群论

## 课程概述
对称性的数学理论，是现代理论物理（从角动量到规范场论）的通用语言。

## 主要内容
- 有限群与群表示论
- 李群与李代数、转动群与洛伦兹群
- 对称性与守恒律、在原子分子与粒子物理中的应用

## 先修与后续
先修 [[c-linear-algebra]]、[[c-quantum-mechanics]]。支撑 [[c-qft]] 与 [[r-hep-th]] 等理论方向。','["群论(物理)"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-linear-algebra", "type": "prereq", "note": "表示论建立在线性代数之上"}, {"id": "c-quantum-mechanics", "type": "prereq", "note": "对称性与角动量理论是主要应用"}]','["c-qft", "c-quantum-mechanics", "c-linear-algebra", "r-hep-th"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-particle-nuclear','c-elective','粒子与核物理','Particle and Nuclear Physics','','# 粒子与核物理

## 课程概述
研究物质在最小尺度上的组成：原子核的性质与反应，以及基本粒子的标准模型。

## 主要内容
- 原子核性质、核模型（液滴、壳层、集体）
- 放射性衰变与核反应、核能与核技术
- 粒子物理：对称性、夸克模型、标准模型导论、探测器

## 先修与后续
先修 [[c-quantum-mechanics]]、[[c-atomic]]。是核物理方向（[[r-nucl-structure]]、[[r-nucl-reaction]]、[[r-hic]]、[[r-nucl-astro]]）与粒子实验 [[r-hep-ex]] 的入口；理论深造需 [[c-qft]]。','["粒子物理与核物理"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-quantum-mechanics", "type": "prereq", "note": "衰变、散射与壳模型都是量子理论"}, {"id": "c-atomic", "type": "prereq", "note": "原子核知识承接原子物理"}]','["c-qft", "r-nucl-reaction", "r-nucl-astro", "r-nucl-structure", "c-quantum-mechanics", "r-hic", "r-hep-ex", "c-atomic"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-plasma-intro','c-elective','等离子体物理基础','Fundamentals of Plasma Physics','','# 等离子体物理基础

## 课程概述
研究电离气体的集体行为：单粒子轨道、流体描述与动理论三个层次。

## 主要内容
- 等离子体参量与德拜屏蔽
- 单粒子轨道理论、磁流体力学
- 等离子体波与不稳定性、动理论初步

## 先修与后续
先修 [[c-electrodynamics]]、[[c-statistical-mechanics]]。是 [[r-mcf]]、[[r-icf]]、[[r-space-plasma]]、[[r-laser-plasma]] 的入口。','["等离子体物理导论"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-electrodynamics", "type": "prereq", "note": "等离子体是电磁场中的带电粒子体系"}, {"id": "c-statistical-mechanics", "type": "prereq", "note": "等离子体的统计描述"}]','["r-laser-plasma", "r-space-plasma", "c-electrodynamics", "c-statistical-mechanics", "r-icf", "r-mcf"]');