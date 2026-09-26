INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-robotics','r-cs-ai','机器人学','Robotics','','# 机器人学

## 方向概述
arXiv: cs.RO。研究感知-决策-行动的物理闭环：操作、移动与人形机器人。

## 核心问题
- 运动规划与全身控制
- 操作学习与灵巧手（模仿/强化学习）
- 视觉-语言-动作模型（VLA）与具身大模型
- Sim2Real 与硬件本体

## 代表方法与设施
硬件平台 + 大规模仿真 + 真实数据飞轮；RSS/ICRA/CoRL 社区。','["具身智能"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-ml", "type": "prereq", "note": "学习控制"}, {"id": "r-control", "type": "related", "note": "经典控制理论"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-database-res','r-cs-systems','数据系统与数据管理','Data Systems & Data Management','','# 数据系统与数据管理

## 方向概述
arXiv: cs.DB。研究海量数据的存储、查询与分析系统。

## 核心问题
- 分布式数据库与 NewSQL、云原生架构
- 流处理与实时分析
- 向量数据库与 AI 原生数据系统
- 数据密集型科学计算（e-Science）

## 代表方法与设施
系统工程 + 查询优化理论；VLDB/SIGMOD 社区。','["数据库研究"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-database", "type": "prereq", "note": "课程基础"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-networks-res','r-cs-systems','计算机网络研究','Computer Networking Research','','# 计算机网络研究

## 方向概述
arXiv: cs.NI。研究互联网的传输、路由与新型网络架构。

## 核心问题
- 拥塞控制与传输协议演进（QUIC、BBR）
- 数据中心网络与 RDMA
- 软件定义网络（SDN）与可编程数据面
- 卫星互联网与天地一体化组网

## 代表方法与设施
测量驱动 + 系统设计；SIGCOMM/NSDI 社区。','["网络系统"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-networks-course", "type": "prereq", "note": "课程基础"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-os-systems','r-cs-systems','操作系统与计算机体系结构','Operating Systems & Architecture','','# 操作系统与计算机体系结构

## 方向概述
arXiv: cs.OS / cs.AR / cs.DC。研究计算系统的组织：处理器、操作系统、分布式与云基础设施。

## 核心问题
- 新硬件（GPU/NPU/存算一体）驱动的体系结构
- 内核、虚拟化与容器、Serverless
- 分布式一致性（Paxos/Raft）与容错
- 大模型训推系统（并行策略、显存管理）

## 代表方法与设施
软硬件协同设计；顶会 SOSP/OSDI/ISCA/ASPLOS。','["计算机系统", "分布式系统"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-os", "type": "prereq", "note": "课程基础"}, {"id": "c-computer-arch", "type": "prereq", "note": "硬件基础"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-security','r-cs-systems','密码学与网络安全','Cryptography & Security','','# 密码学与网络安全

## 方向概述
arXiv: cs.CR。研究信息的机密性、完整性与可用性：密码学、系统安全与隐私。

## 核心问题
- 后量子密码（格密码）标准化与迁移
- 隐私计算：同态加密、安全多方计算、联邦学习
- 系统与软件安全（漏洞挖掘、供应链安全）
- 区块链与去中心化协议

## 代表方法与设施
形式化安全证明 + 攻防实践；数学上依托 [[r-number-theory]] 与 [[r-algebra]]。','["信息安全"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-networks-course", "type": "prereq", "note": "协议基础"}, {"id": "r-number-theory", "type": "related", "note": "公钥密码的数论基础（RSA、椭圆曲线）"}, {"id": "r-qcomm", "type": "related", "note": "量子密钥分发与后量子迁移"}]','["r-algebra", "r-number-theory"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-algorithms','r-cs-theory','算法与计算理论','Algorithms & Computational Theory','','# 算法与计算理论

## 方向概述
arXiv: cs.DS / cs.CC。研究计算问题的内在难度与最优算法：P vs NP 是中心难题。

## 核心问题
- P vs NP 与复杂性类（近似、参数化、在线）
- 图算法与数据结构前沿（动态图、流算法）
- 随机化与去随机化、伪随机性
- 量子计算理论（与 [[r-qc]] 交叉）

## 代表方法与设施
下界证明、归约与组合/代数方法；理论深度连接数学的 [[r-math-logic]] 与 [[r-combinatorics]]。','["理论计算机科学", "计算复杂性"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-algorithms", "type": "prereq", "note": "课程基础"}, {"id": "r-combinatorics", "type": "related", "note": "极值组合与概率方法"}]','["r-combinatorics", "r-math-logic", "r-qc"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-formal-methods','r-cs-theory','程序语言与形式方法','Programming Languages & Formal Methods','','# 程序语言与形式方法

## 方向概述
arXiv: cs.PL / cs.FL / cs.LO。研究编程语言的设计、语义与程序正确性的数学证明。

## 核心问题
- 类型系统与类型论、语言语义
- 模型检测与定理证明（Coq/Lean）
- 程序分析与验证、自动化推理（SMT）

## 代表方法与设施
高可信软件（航天、密码协议）的基石；AI 数学证明（Lean）是新热点。','["形式化验证"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-compilers", "type": "prereq", "note": "语言实现"}, {"id": "c-discrete-math", "type": "prereq", "note": "逻辑基础"}, {"id": "r-math-logic", "type": "related", "note": "类型论与数理逻辑（柯里-霍华德对应）"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-atmos','r-earth','大气物理','Atmospheric Physics','','# 大气物理

## 方向概述
arXiv: physics.ao-ph。研究大气的物理过程与气候。

## 核心问题
- 大气辐射与遥感
- 云与降水微物理
- 大气动力学与气候变率

## 代表方法与设施
气象卫星与雷达、气候模式。

## 与其他方向的联系
与 [[r-ocean]]、[[r-turbulence]]、[[r-space-plasma]]（空间天气）交叉。','["大气科学物理"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-thermo", "type": "prereq", "note": "大气热力学基础"}, {"id": "c-fluid", "type": "prereq", "note": "大气动力学基础"}, {"id": "r-ocean", "type": "related", "note": "海气耦合"}, {"id": "r-turbulence", "type": "related", "note": "大气湍流"}]','["r-space-plasma", "r-turbulence", "r-ocean"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-geophy','r-earth','固体地球物理','Solid Earth Geophysics','','# 固体地球物理

## 方向概述
arXiv: physics.geo-ph。用物理场探测地球内部结构与过程。

## 核心问题
- 地震学与地球内部成像
- 重力、地磁与电磁勘探
- 地球动力学（地幔对流、板块运动）

## 代表方法与设施
地震台网、重力卫星（GRACE）、数值地球动力学模拟。

## 与其他方向的联系
与 [[r-ocean]]、[[r-fluid-dyn]]（地幔对流）交叉。','["地球内部物理"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-mechanics", "type": "prereq", "note": "弹性波与应力场的基础"}, {"id": "c-electromagnetism", "type": "prereq", "note": "重磁电勘探的物理基础"}, {"id": "r-ocean", "type": "related", "note": "同属地球系统"}]','["r-fluid-dyn", "r-ocean"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-ocean','r-earth','海洋物理','Physical Oceanography','','# 海洋物理

## 方向概述
研究海洋中的运动：环流、波动与混合。

## 核心问题
- 大洋环流与温盐环流
- 海洋内波与湍流混合
- 海气相互作用

## 代表方法与设施
潜标与浮标阵（Argo）、海洋模式。

## 与其他方向的联系
与 [[r-atmos]]、[[r-fluid-dyn]] 交叉。','["物理海洋学"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-fluid", "type": "prereq", "note": "课程基础"}, {"id": "c-thermo", "type": "prereq", "note": "温盐结构与混合"}]','["r-fluid-dyn", "r-atmos"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-aerospace','r-eng-applied','航空宇航科学与技术','Aeronautics & Astronautics','','# 航空宇航科学与技术

## 方向概述
教育部 0825。研究飞行器的设计、推进与制导控制。

## 核心问题
- 空气动力学：高超声速与气动布局
- 航空发动机与火箭推进
- 飞行器制导导航与控制（GNC）
- 航天器总体设计与深空探测

## 代表方法与设施
风洞/试车台/飞行试验 + 多学科设计优化（MDO）；国家重大工程牵引。','["航空航天"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-eng-mechanics", "type": "prereq", "note": "结构力学"}, {"id": "c-fluid", "type": "prereq", "note": "空气动力学"}, {"id": "r-fluid-dyn", "type": "related", "note": "湍流与高超声速流动"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-civil-env-eng','r-eng-applied','土木与环境工程','Civil & Environmental Engineering','','# 土木与环境工程

## 方向概述
教育部 0814 / 0830。研究建筑、桥梁、基础设施与水/土/气环境治理。

## 核心问题
- 结构工程：抗震、抗风与韧性城市
- 岩土与地下工程、智能建造
- 水处理与资源化、大气污染控制
- 固废处置与土壤修复

## 代表方法与设施
大型结构试验、环境过程模拟与工程标准体系；与 [[r-energy-env-chem]] 在污染治理上交叉。','["土木工程", "环境工程"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-eng-mechanics", "type": "prereq", "note": "结构力学"}]','["r-energy-env-chem"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-energy-eng','r-eng-applied','能源与动力工程','Energy & Power Engineering','','# 能源与动力工程

## 方向概述
教育部 0807（动力工程及工程热物理）。研究能量高效清洁转换的装备与系统。

## 核心问题
- 燃气轮机与航空发动机热端技术
- 高效低污染燃烧与新型动力循环（超临界 CO₂）
- 储能系统与综合能源系统
- 核能热工水力与反应堆热工

## 代表方法与设施
实验台架 + CFD + 系统集成；能源安全与"双碳"的核心工科。','["动力工程"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-eng-thermo", "type": "prereq", "note": "工程热力学"}, {"id": "c-fluid", "type": "prereq", "note": "流体力学（叶轮机械）"}, {"id": "r-mcf", "type": "related", "note": "磁约束聚变发电的工程化"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-materials-eng','r-eng-applied','材料科学与工程','Materials Science & Engineering','','# 材料科学与工程

## 方向概述
教育部 0805。研究工程材料的制备、加工、服役行为与应用。

## 核心问题
- 结构材料：高温合金、轻量化合金、复合材料
- 功能材料：半导体、磁性、光电与储能材料
- 材料基因工程与计算材料学
- 材料服役行为（腐蚀、疲劳、辐照）

## 代表方法与设施
制备工艺 + 多尺度表征 + 计算模拟三位一体；物理（[[r-materials]]）与化学（[[r-inorganic-res]]）的工程出口。','["材料工程"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-materials-fund", "type": "prereq", "note": "课程基础"}, {"id": "r-materials", "type": "related", "note": "凝聚态物理的功能材料"}, {"id": "r-materials-chem", "type": "related", "note": "化学合成的材料路线"}]','["r-inorganic-res", "r-materials"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-control','r-eng-core','控制科学与工程','Control Science & Engineering','','# 控制科学与工程

## 方向概述
教育部 0811。研究动态系统的建模、估计与控制：从经典反馈到智能自主系统。

## 核心问题
- 鲁棒与最优控制（H∞、MPC）
- 非线性与混杂系统控制
- 多智能体协同与无人系统
- 学习与控制融合（数据驱动控制）

## 代表方法与设施
李雅普诺夫方法、频域/状态空间工具；eess.SY；支撑工业自动化与 [[r-robotics]]。','["控制理论"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-control-principles", "type": "prereq", "note": "课程基础"}, {"id": "r-dynamical-systems", "type": "related", "note": "非线性系统的数学理论"}]','["r-robotics"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-electrical-eng','r-eng-core','电气工程','Electrical Engineering','','# 电气工程

## 方向概述
教育部 0808。研究电能的生产、传输、变换与利用。

## 核心问题
- 新型电力系统：新能源并网与稳定分析
- 电力电子变换器与宽禁带器件（SiC/GaN）
- 电机与电气传动
- 超导电工与脉冲功率（[[r-mcf]] 的电源支撑）

## 代表方法与设施
电磁场-电路耦合建模与大电网仿真；"双碳"目标下的主干学科。','["电力系统", "电力电子"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-circuits", "type": "prereq", "note": "电路原理"}, {"id": "c-electronics", "type": "prereq", "note": "电力电子器件"}]','["r-mcf"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-mechanical-eng','r-eng-core','机械工程','Mechanical Engineering','','# 机械工程

## 方向概述
教育部 0802。研究机械系统的设计、制造与运行。

## 核心问题
- 机构学与机器人机构（与 [[r-robotics]] 交叉）
- 精密/超精密加工与增材制造
- 摩擦学、振动与故障诊断
- 微纳机电系统（MEMS）

## 代表方法与设施
CAD/CAE/CAM 数字化链条 + 实验力学；高端装备的国家战略方向。','["机械制造"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-eng-mechanics", "type": "prereq", "note": "力学基础"}]','["r-robotics"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-fluid-dyn','r-fluid','流体动力学','Fluid Dynamics','','# 流体动力学

## 方向概述
arXiv: physics.flu-dyn。研究各类流动现象：稳定性、涡结构与复杂介质流动。

## 核心问题
- 流动失稳与转捩
- 涡动力学、波流相互作用
- 多相流、微流与生物流体

## 代表方法与设施
水洞风洞实验、直接数值模拟、PIV 测量。

## 与其他方向的联系
与 [[r-turbulence]]、[[r-atmos]]、[[r-ocean]]、[[r-hic]]（QGP 流体）交叉。','["流体力学研究"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-fluid", "type": "prereq", "note": "课程基础"}]','["r-hic", "r-ocean", "r-turbulence", "r-atmos"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-nonlinear','r-fluid','非线性动力学与混沌','Nonlinear Dynamics and Chaos','','# 非线性动力学与混沌

## 方向概述
arXiv: nlin.CD。研究确定性系统中的分岔、混沌与复杂时间行为。

## 核心问题
- 分岔理论、奇怪吸引子
- 混沌的控制与同步
- 时间序列分析与复杂网络动力学

## 代表方法与设施
动力系统理论、数值分岔分析。

## 与其他方向的联系
与 [[r-turbulence]]、[[r-pattern]]、[[r-complex]] 交叉。','["混沌"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-theoretical-mechanics", "type": "prereq", "note": "混沌理论根植于动力学系统"}, {"id": "r-pattern", "type": "related", "note": "斑图形成是非线性行为的空间表现"}]','["r-pattern", "r-turbulence", "r-complex"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-pattern','r-fluid','图案形成','Pattern Formation','','# 图案形成

## 方向概述
arXiv: nlin.PS。研究远离平衡系统中自发形成的空间结构：斑图、孤波与耗散结构。

## 核心问题
- 反应-扩散系统与图灵斑图
- 孤波与可积系统
- 界面生长与枝晶

## 代表方法与设施
振幅方程、数值模拟、对流实验。

## 与其他方向的联系
与 [[r-nonlinear]]、[[r-soft]] 交叉。','["斑图动力学"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-fluid", "type": "prereq", "note": "课程基础"}, {"id": "r-soft", "type": "related", "note": "软物质是斑图的典型载体"}]','["r-soft", "r-nonlinear"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-turbulence','r-fluid','湍流','Turbulence','','# 湍流

## 方向概述
经典物理最著名的未解问题：多尺度强非线性运动的统计规律。

## 核心问题
- 能级串与惯性区标度律
- 间歇性与相干结构
- 湍流封闭模型与机器学习建模

## 代表方法与设施
超算直接数值模拟、高雷诺数实验。

## 与其他方向的联系
与 [[r-nonlinear]]、[[r-atmos]]、[[r-space-plasma]]（等离子体湍流）交叉。','["湍流研究"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-fluid", "type": "prereq", "note": "课程基础"}, {"id": "r-nonlinear", "type": "related", "note": "湍流是非线性系统的代表"}]','["r-space-plasma", "r-atmos", "r-nonlinear"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-black-hole','r-gravity','黑洞物理','Black Hole Physics','','# 黑洞物理

## 方向概述
研究黑洞的解、热力学与观测：从史瓦西几何到事件视界成像。

## 核心问题
- 黑洞解与扰动、准正规模
- 黑洞热力学与霍金辐射、信息佯谬
- 阴影成像与强场检验

## 代表方法与设施
事件视界望远镜（EHT）、引力波观测、半经典与全息方法。

## 与其他方向的联系
与 [[r-he-astro]]、[[r-qg]]、[[r-grav-wave]] 交叉。','["黑洞"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-gr", "type": "prereq", "note": "黑洞是场方程的精确解"}, {"id": "r-he-astro", "type": "related", "note": "吸积黑洞是高能天体的中心引擎"}, {"id": "r-qg", "type": "related", "note": "信息佯谬指向量子引力"}]','["r-grav-wave", "r-he-astro", "r-qg"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-grav-wave','r-gravity','引力波','Gravitational Waves','','# 引力波

## 方向概述
arXiv: gr-qc 的核心实验领域。研究引力波的产生、探测与天体物理应用。

## 核心问题
- 波源建模：双黑洞、双中子星并合
- 探测器：激光干涉仪、脉冲星计时阵、空间探测
- 用引力波检验广义相对论与测量宇宙学参数

## 代表方法与设施
LIGO/Virgo/KAGRA、LISA、太极/天琴计划。

## 与其他方向的联系
与 [[r-he-astro]]（多信使）、[[r-numerical-rel]]（波形）、[[r-qmetro]]（量子噪声抑制）交叉。','["引力波物理"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-gr", "type": "prereq", "note": "引力波是爱因斯坦方程的波动解"}, {"id": "r-numerical-rel", "type": "related", "note": "波形模板依赖数值模拟"}]','["r-qmetro", "r-numerical-rel", "r-he-astro"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-numerical-rel','r-gravity','数值相对论','Numerical Relativity','','# 数值相对论

## 方向概述
在计算机上求解强场、动态时空的爱因斯坦方程。

## 核心问题
- 3+1 分解与演化格式（BSSN 等）
- 双黑洞/双中子星并合模拟
- 引力波模板与临界现象

## 代表方法与设施
高性能计算集群、开源码（Einstein Toolkit）。

## 与其他方向的联系
直接服务 [[r-grav-wave]]；与 [[r-he-astro]]（并合电磁对应体）交叉。','["数值相对论模拟"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-gr", "type": "prereq", "note": "模拟对象是爱因斯坦方程"}, {"id": "c-computational", "type": "prereq", "note": "大规模数值方法"}]','["r-grav-wave", "r-he-astro"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-qg','r-gravity','量子引力','Quantum Gravity','','# 量子引力

## 方向概述
arXiv: gr-qc / hep-th 交叉。寻求量子力学与广义相对论统一的理论框架。

## 核心问题
- 微扰不可重整性的出路：弦论、圈量子引力、渐近安全
- 全息原理与 AdS/CFT
- 黑洞信息、时空的涌现

## 代表方法与设施
形式理论方法为主；观测上寄望原初引力波与黑洞物理。

## 与其他方向的联系
与 [[r-hep-th]]、[[r-cosmology]]（极早期宇宙）、[[r-black-hole]] 交叉。','["量子引力理论"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-gr", "type": "prereq", "note": "被量子化的对象是时空几何"}, {"id": "c-qft", "type": "prereq", "note": "量子化方法是场论方法"}, {"id": "r-hep-th", "type": "related", "note": "弦论是主要途径之一"}]','["r-cosmology", "r-black-hole", "r-hep-th"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-hep-ex','r-hep','粒子物理实验','Experimental Particle Physics','','# 粒子物理实验

## 方向概述
arXiv: hep-ex。在对撞机与非对撞机实验上检验标准模型、寻找新物理。

## 核心问题
- 希格斯性质精确测量、顶夸克与味物理
- 中微子振荡实验
- 暗物质直接探测、新粒子寻找

## 代表方法与设施
LHC（ATLAS/CMS）、BESIII、江门中微子实验（JUNO）。

## 与其他方向的联系
与 [[r-hep-ph]]（理论解释）、[[r-hic]]（重离子对撞）交叉。','["高能实验"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-particle-nuclear", "type": "prereq", "note": "课程基础"}, {"id": "r-hep-ph", "type": "related", "note": "实验检验唯象预言"}]','["r-hep-ph", "r-hic"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-hep-ph','r-hep','粒子唯象学','Particle Phenomenology','','# 粒子唯象学

## 方向概述
arXiv: hep-ph。连接形式理论与实验：从标准模型精确计算到新物理模型的可观测预言。

## 核心问题
- 标准模型的高阶修正与精确检验
- 超出标准模型的新物理（超对称、额外维等）
- 味物理与 CP 破坏、中微子质量模型

## 代表方法与设施
微扰 QFT 计算、有效场论、蒙特卡洛事例生成。

## 与其他方向的联系
与 [[r-hep-ex]]、[[r-cosmology]]、[[r-lattice]]（强子矩阵元）交叉。','["粒子唯象"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-particle-nuclear", "type": "prereq", "note": "课程基础"}, {"id": "c-qft", "type": "prereq", "note": "计算工具是量子场论"}, {"id": "r-cosmology", "type": "related", "note": "粒子宇宙学交叉"}]','["r-cosmology", "r-lattice", "r-hep-ex"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-hep-th','r-hep','形式理论（弦论与超对称）','Formal High-Energy Theory','','# 形式理论（弦论与超对称）

## 方向概述
arXiv: hep-th。研究量子场论与引力的深层结构：弦论、超对称、全息对偶与散射振幅。

## 核心问题
- 弦论与 M 理论、紧化与现象学
- 超对称场论、超引力
- AdS/CFT 对应、现代振幅方法

## 代表方法与设施
解析方法为主（共形场论、可积性、振幅 Bootstrap）。

## 与其他方向的联系
与 [[r-qg]]、[[r-phase]]（全息凝聚态应用）交叉。','["弦论", "形式高能理论"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-qft", "type": "prereq", "note": "课程基础"}, {"id": "r-qg", "type": "related", "note": "弦论是量子引力的候选"}]','["r-phase", "r-qg"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-lattice','r-hep','格点场论','Lattice Field Theory','','# 格点场论

## 方向概述
arXiv: hep-lat。把时空离散化为格点，用蒙特卡洛方法非微扰求解 QCD 等规范理论。

## 核心问题
- 强子谱与强子结构
- QCD 相变与有限温度密度
- 味物理所需的强子矩阵元

## 代表方法与设施
超级计算机、格点 QCD 国际合作组。

## 与其他方向的联系
与 [[r-hic]]、[[r-hep-ph]]、[[r-nucl-structure]]（核力的格点研究）交叉。','["格点QCD"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-qft", "type": "prereq", "note": "课程基础"}, {"id": "c-computational", "type": "prereq", "note": "格点计算是大规模数值模拟"}, {"id": "r-hic", "type": "related", "note": "QCD 相图与状态方程"}]','["r-hep-ph", "r-nucl-structure", "r-hic"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-comm-systems','r-info-eng','通信与信息系统','Communication & Information Systems','','# 通信与信息系统

## 方向概述
教育部 0810 二级学科（通信与信息系统）。研究信息传输系统：5G/6G、卫星互联网与光通信。

## 核心问题
- 6G：太赫兹、通感一体化、智能超表面
- 大规模 MIMO 与空口波形
- 卫星互联网与深空通信
- 光纤通信与量子通信（[[r-qcomm]]）

## 代表方法与设施
信息论 + 信号处理 + 组网协议的系统工程；标准组织（3GPP/ITU）驱动演进。','["无线通信", "移动通信"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-comm-principles", "type": "prereq", "note": "课程基础"}, {"id": "r-info-theory", "type": "related", "note": "容量理论指导系统设计"}]','["r-qcomm"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-image-speech','r-info-eng','图像、语音与媒体处理','Image, Speech & Media Processing','','# 图像、语音与媒体处理

## 方向概述
arXiv: eess.IV / eess.AS。研究图像、语音与音视频媒体的采集、处理与传输。

## 核心问题
- 医学影像重建与分析（CT/MRI/超声）
- 语音识别、合成与音频理解
- 视频编码与流媒体（H.266/AV1）
- 计算成像与新型传感器

## 代表方法与设施
信号处理经典方法与深度学习混合；与临床、广电产业紧密联动。','["多媒体技术"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-image-processing", "type": "prereq", "note": "图像处理"}, {"id": "r-cv", "type": "related", "note": "视觉理解的高层任务"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-microelectronics','r-info-eng','微电子与集成电路','Microelectronics & Integrated Circuits','','# 微电子与集成电路

## 方向概述
教育部 0809 电子科学与技术方向之一。研究芯片的器件、设计与制造。

## 核心问题
- 先进制程器件（FinFET/GAA）与新型存储
- 模拟/射频/数字集成电路设计
- EDA 工具与设计自动化
- 先进封装与芯粒（Chiplet）

## 代表方法与设施
工艺线 + EDA 软件 + 架构设计的重资产协同；算力时代的物理底座。','["集成电路", "芯片"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-electronics", "type": "prereq", "note": "器件与电路"}, {"id": "r-semiconductor", "type": "related", "note": "半导体物理（能带、输运）"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-signal-processing','r-info-eng','信号与信息处理','Signal & Information Processing','','# 信号与信息处理

## 方向概述
arXiv: eess.SP。研究从信号中提取信息的理论与算法：估计、滤波与稀疏恢复。

## 核心问题
- 统计信号处理：检测、估计与自适应滤波
- 稀疏表示与压缩感知
- 阵列信号处理与雷达/声呐
- 机器学习与信号处理的融合

## 代表方法与设施
优化理论与统计推断；是雷达、通信与医学成像的算法内核。','["信号处理"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-dsp", "type": "prereq", "note": "课程基础"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-info-theory','r-math-applied','信息论与编码','Information Theory & Coding','','# 信息论与编码

## 方向概述
arXiv: math.IT。香农开创的信息量化理论：信道容量、信源编码与纠错码。

## 核心问题
- 熵、互信息与信道容量定理
- 纠错码（LDPC、极化码）
- 率失真理论与网络信息论

## 代表方法与设施
现代通信（5G 极化码）与密码学的理论基础。','["编码理论"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-probability", "type": "prereq", "note": "熵与随机变量"}, {"id": "c-linear-algebra", "type": "prereq", "note": "有限域上的线性代数"}, {"id": "r-qc", "type": "related", "note": "量子信息论（量子信道容量、量子纠错码）"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-mathematical-physics','r-math-applied','数学物理','Mathematical Physics','','# 数学物理

## 方向概述
arXiv: math.MP。用严格数学研究物理理论：量子力学、统计力学与场论的数学基础。

## 核心问题
- 量子力学的算子理论表述
- 统计力学的严格结果（相变存在性）
- 可积系统与公理化/构造性量子场论

## 代表方法与设施
泛函分析、表示论与概率论的交叉地带。','[]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-math-methods", "type": "prereq", "note": "物理中的数学方法"}, {"id": "c-functional-analysis", "type": "prereq", "note": "算子谱理论"}, {"id": "r-hep-th", "type": "related", "note": "量子场论的严格化（公理化场论）"}, {"id": "r-qg", "type": "related", "note": "量子引力的数学表述"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-optimization','r-math-applied','最优化与运筹控制','Optimization & Control','','# 最优化与运筹控制

## 方向概述
arXiv: math.OC。研究约束下的最优决策：凸优化、最优控制与博弈论。

## 核心问题
- 线性规划与凸优化（内点法、一阶算法）
- 最优控制（庞特里亚金极大值原理）
- 博弈论与均衡计算

## 代表方法与设施
机器学习训练、运筹调度与工程控制的数学引擎。','["运筹学"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-math-analysis", "type": "prereq", "note": "多元微分学"}, {"id": "c-advanced-algebra", "type": "prereq", "note": "线性代数"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-pde-research','r-math-applied','偏微分方程理论','PDE Theory','','# 偏微分方程理论

## 方向概述
arXiv: math.AP。现代 PDE 研究解的存在性、正则性与奇性形成：纳维-斯托克斯正则性是千禧年问题。

## 核心问题
- 椭圆/抛物/双曲方程的弱解理论
- 流体方程（N-S、欧拉）正则性与湍流数学
- 几何 PDE（里奇流、极小曲面）

## 代表方法与设施
能量估计、调和分析、变分法；直接服务 [[r-fluid-dyn]] 与 [[r-geometry-topology]]。','["应用分析"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-pde", "type": "prereq", "note": "经典方程理论"}, {"id": "c-functional-analysis", "type": "prereq", "note": "索伯列夫空间与弱解"}]','["r-geometry-topology", "r-fluid-dyn"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-probability','r-math-applied','概率论与随机过程','Probability & Stochastic Processes','','# 概率论与随机过程

## 方向概述
arXiv: math.PR。测度论框架下研究随机现象：极限定理、随机过程与随机矩阵。

## 核心问题
- 大数定律、中心极限定理与大偏差
- 马尔可夫过程、鞅、布朗运动与随机微分方程
- 随机矩阵、渗流与相互作用粒子系统

## 代表方法与设施
为金融数学、统计物理与机器学习理论提供工具。','["随机分析"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-probability", "type": "prereq", "note": "概率论基础"}, {"id": "c-real-analysis", "type": "prereq", "note": "测度论框架"}, {"id": "c-statistical-mechanics", "type": "related", "note": "统计力学的概率模型（伊辛模型、渗流）"}]','[]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-scientific-computing','r-math-applied','数值分析与科学计算','Numerical Analysis & Scientific Computing','','# 数值分析与科学计算

## 方向概述
arXiv: math.NA。为连续问题设计高效稳定的离散算法：有限元、谱方法与高性能计算。

## 核心问题
- 有限元与有限体积法的误差理论
- 快速算法（FFT、多重网格、快速多极子）
- 反问题与不确定性量化

## 代表方法与设施
与超算硬件协同设计；支撑计算物理（[[c-computational-adv]]）与工程仿真。','["计算数学"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-numerical-analysis", "type": "prereq", "note": "数值算法与误差分析"}, {"id": "r-numerical-rel", "type": "related", "note": "数值相对论是科学计算的典型应用"}]','["c-computational-adv"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-statistics','r-math-applied','统计学','Statistics','','# 统计学

## 方向概述
arXiv: math.ST。从数据中推断规律：参数估计、假设检验、回归与高维统计。

## 核心问题
- 估计理论（极大似然、贝叶斯）与假设检验
- 回归分析、时间序列与实验设计
- 高维统计、统计学习与 MCMC 计算

## 代表方法与设施
支撑实验物理（[[r-hep-ex]] 的显著性分析）、生物信息与数据科学。','["数理统计"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-probability", "type": "prereq", "note": "概率论基础"}, {"id": "r-quant-bio", "type": "related", "note": "生物统计与高维组学数据分析"}]','["r-hep-ex"]');