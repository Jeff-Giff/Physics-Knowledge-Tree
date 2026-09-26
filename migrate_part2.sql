INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-qft','c-elective','量子场论','Quantum Field Theory','','# 量子场论

## 课程概述
量子力学与狭义相对论的结合：场作为基本对象，粒子是场的激发。

## 主要内容
- 正则量子化、自由场与传播子
- 微扰论与费曼图、量子电动力学
- 重整化初步、规范场论与非阿贝尔规范理论导论

## 先修与后续
先修 [[c-advanced-qm]]、[[c-electrodynamics]]；与 [[c-group-theory]]（对称性语言）相互支撑。是 [[r-hep-ph]]、[[r-hep-th]]、[[r-lattice]] 的入口，并与 [[c-gr]] 共同支撑 [[r-qg]]。','["QFT"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-advanced-qm", "type": "prereq", "note": "二次量子化与相对论量子力学是直接基础"}, {"id": "c-electrodynamics", "type": "prereq", "note": "规范场与协变形式的经典范本"}]','["r-hep-ph", "c-advanced-qm", "c-group-theory", "r-qg", "c-electrodynamics", "r-lattice", "r-hep-th", "c-gr"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-quantum-info-intro','c-elective','量子信息导论','Introduction to Quantum Information','','# 量子信息导论

## 课程概述
以信息科学的视角重新审视量子力学：量子比特、纠缠与量子算法。

## 主要内容
- 量子比特、量子门与量子线路
- 纠缠、贝尔不等式、量子隐形传态
- 量子算法（Shor、Grover）、量子纠错、量子通信

## 先修与后续
先修 [[c-quantum-mechanics]]、[[c-linear-algebra]]。是 [[r-qc]]、[[r-qcomm]]、[[r-qmetro]]、[[r-qsim]] 的入口。','["量子信息基础"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-quantum-mechanics", "type": "prereq", "note": "量子比特与纠缠是量子力学概念"}, {"id": "c-linear-algebra", "type": "prereq", "note": "量子门即酉矩阵"}]','["r-qmetro", "r-qcomm", "r-qc", "c-linear-algebra", "c-quantum-mechanics", "r-qsim"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-solid-state','c-elective','固体物理','Solid State Physics','','# 固体物理

## 课程概述
研究周期结构中电子、声子的行为，是凝聚态物理各研究方向的共同基础课。

## 主要内容
- 晶体结构、倒格子与衍射
- 晶格振动与声子、固体热性质
- 自由电子论、能带理论、半导体初步

## 先修与后续
先修 [[c-quantum-mechanics]]、[[c-statistical-mechanics]]。是凝聚态研究方向（[[r-strong-corr]]、[[r-superconduct]]、[[r-meso]]、[[r-materials]]、[[r-spintronics]]、[[r-semiconductor]]）的入口。','["固体物理学"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-quantum-mechanics", "type": "prereq", "note": "能带论建立在量子力学之上"}, {"id": "c-statistical-mechanics", "type": "prereq", "note": "声子与电子统计需要统计物理"}]','["r-superconduct", "r-meso", "r-spintronics", "c-statistical-mechanics", "r-materials", "c-quantum-mechanics", "r-strong-corr", "r-semiconductor"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-circuits','c-eng','电路原理','Fundamentals of Electric Circuits','','# 电路原理

## 课程概述
电类工程的入门课：集总电路的基本定律与分析方法。

## 主要内容
- 基尔霍夫定律、等效变换与网络定理
- 一阶/二阶动态电路时域分析
- 正弦稳态分析与相量法、三相电路
- 二端口网络

## 先修与后续
通向 [[c-electronics]] 与 [[r-electrical-eng]]。','["电路分析"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-calculus", "type": "prereq", "note": "微分方程求解"}, {"id": "c-electromagnetism", "type": "related", "note": "电路是电磁场的集总近似"}]','["r-electrical-eng", "c-electronics"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-control-principles','c-eng','自动控制原理','Principles of Automatic Control','','# 自动控制原理

## 课程概述
研究动态系统的反馈控制：经典控制（频域）与现代控制（状态空间）。

## 主要内容
- 传递函数与方框图、时域分析
- 根轨迹与频域稳定判据（奈奎斯特/波特）
- PID 与校正设计
- 状态空间、能控能观与极点配置

## 先修与后续
通向 [[r-control]] 与 [[r-robotics]]。','["控制理论"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-signals", "type": "prereq", "note": "系统与变换方法"}, {"id": "c-ode", "type": "related", "note": "微分方程建模"}]','["r-control", "r-robotics"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-electronics','c-eng','电子技术基础','Analog & Digital Electronics','','# 电子技术基础

## 课程概述
研究半导体器件及其电路：从晶体管到数字逻辑门。

## 主要内容
- 二极管、晶体管（BJT/MOS）与放大电路
- 负反馈、运算放大器与信号调理
- 组合逻辑与时序逻辑、触发器
- A/D 与 D/A 转换

## 先修与后续
通向 [[r-microelectronics]] 与嵌入式/硬件工程。','["模拟电子", "数字电子"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-circuits", "type": "prereq", "note": "电路分析"}]','["r-microelectronics"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-eng-mechanics','c-eng','工程力学','Engineering Mechanics','','# 工程力学

## 课程概述
面向工程的力学：静力学与材料力学（杆件的强度、刚度与稳定性）。

## 主要内容
- 静力学：力系简化与平衡
- 材料力学：拉压弯扭的应力与变形
- 强度理论、压杆稳定
- 疲劳与断裂初步

## 先修与后续
通向 [[r-mechanical-eng]]、[[r-civil-env-eng]]、[[r-aerospace]]。','["理论力学与材料力学"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-mechanics", "type": "prereq", "note": "普通物理力学"}]','["r-mechanical-eng", "r-civil-env-eng", "r-aerospace"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-eng-thermo','c-eng','工程热力学','Engineering Thermodynamics','','# 工程热力学

## 课程概述
能量转换的工程科学：热机、制冷与动力循环的效率分析。

## 主要内容
- 热力学定律的工程表述、㶲分析
- 气体与蒸汽动力循环（朗肯、布雷顿）
- 制冷循环与热泵
- 传热学初步（导热/对流/辐射）

## 先修与后续
通向 [[r-energy-eng]]；与 [[r-energy-env-chem]] 在能源转化上衔接。','[]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-thermo", "type": "prereq", "note": "热学基础"}]','["r-energy-env-chem", "r-energy-eng"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-materials-fund','c-eng','材料科学基础','Fundamentals of Materials Science','','# 材料科学基础

## 课程概述
材料的成分-结构-工艺-性能四面体：工程材料的共同语言。

## 主要内容
- 晶体结构与缺陷（位错）
- 相图与相变、扩散
- 金属/陶瓷/高分子的性能与加工
- 材料表征方法初步

## 先修与后续
通向 [[r-materials-eng]]；与 [[r-materials]]、[[r-materials-chem]] 构成材料研究的三个侧面。','["材科基"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-gen-chem", "type": "prereq", "note": "化学键与相平衡"}, {"id": "c-solid-state", "type": "related", "note": "固体物理提供微观理论（能带、缺陷）"}]','["r-materials-chem", "r-materials-eng", "r-materials"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-atomic','c-general','原子物理（近代物理）','Atomic Physics (Modern Physics)','','# 原子物理（近代物理）

## 课程概述
普通物理的收官课程，经原子光谱与黑体辐射等实验事实引向量子概念，并概览核与粒子物理。

## 主要内容
- 玻尔模型、波粒二象性、薛定谔方程初步
- 单电子与多电子原子、元素周期表、分子结构简介
- 原子核与粒子初步、狭义相对论动力学

## 先修与后续
先修 [[c-optics]]、[[c-electromagnetism]]。后续为 [[c-quantum-mechanics]]；也是 [[c-particle-nuclear]]、[[r-medphy]] 等的基础。','["近代物理", "原子物理学"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-optics", "type": "prereq", "note": "光谱学事实是原子理论的实验依据"}, {"id": "c-electromagnetism", "type": "prereq", "note": "原子结构的库仑相互作用图景"}]','["c-electromagnetism", "c-optics", "c-quantum-mechanics", "r-medphy", "c-particle-nuclear"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-electromagnetism','c-general','电磁学','Electromagnetism','','# 电磁学

## 课程概述
系统建立电磁场的实验定律与麦克斯韦方程组的积分形式，是电动力学的唯象基础。

## 主要内容
- 静电场、导体与电介质、稳恒电流与电路
- 稳恒磁场、磁介质、电磁感应
- 麦克斯韦方程组（积分形式）与电磁波概念

## 先修与后续
先修 [[c-mechanics]]。后续为 [[c-optics]]（光是电磁波）与 [[c-electrodynamics]]（系统的场论表述）。','["电磁学基础"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-mechanics", "type": "prereq", "note": "受力分析与能量观念来自力学"}]','["c-optics", "c-mechanics", "c-electrodynamics"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-mechanics','c-general','力学','Mechanics','','# 力学

## 课程概述
普通物理第一门，建立质点与刚体机械运动的完整经典框架，并初步接触狭义相对论。

## 主要内容
- 质点运动学、牛顿运动定律、非惯性系
- 动量、能量、角动量及其守恒律
- 刚体力学、振动与波动、流体力学初步、狭义相对论简介

## 先修与后续
先修 [[c-calculus]]。后续为 [[c-theoretical-mechanics]]（分析力学重写）与 [[c-thermo]]、[[c-electromagnetism]] 等普通物理课程。','["普通物理力学"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-calculus", "type": "prereq", "note": "运动学与动力学用微积分表述"}]','["c-theoretical-mechanics", "c-thermo", "c-calculus", "c-electromagnetism"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-optics','c-general','光学','Optics','','# 光学

## 课程概述
以电磁波理论为基础研究光的传播、干涉、衍射与偏振，并引出光的量子性。

## 主要内容
- 几何光学：成像、光学仪器
- 波动光学：干涉、衍射、偏振
- 光与物质相互作用初步、光的量子性引论

## 先修与后续
先修 [[c-electromagnetism]]。后续为 [[c-atomic]]（量子性的深入）与 [[c-amo-course]]；实验上衔接 [[c-general-lab]]。','["波动光学"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-electromagnetism", "type": "prereq", "note": "光的电磁理论是波动光学的基础"}]','["c-electromagnetism", "c-general-lab", "c-atomic", "c-amo-course"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-thermo','c-general','热学','Thermal Physics','','# 热学

## 课程概述
研究热现象的宏观规律（热力学）与微观图像（分子动理论），是统计物理的直观前导。

## 主要内容
- 温度、物态方程、热力学第零/第一/第二定律
- 熵与热力学过程、热机与制冷循环
- 分子动理论：麦克斯韦分布、输运现象、相变初步

## 先修与后续
先修 [[c-mechanics]]。后续为 [[c-statistical-mechanics]]；在应用上通向 [[r-atmos]]（大气热力学）等方向。','["热力学基础"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-mechanics", "type": "prereq", "note": "分子动理论以力学为基础"}]','["c-mechanics", "c-statistical-mechanics", "r-atmos"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-comm-principles','c-info','通信原理','Principles of Communications','','# 通信原理

## 课程概述
研究信息可靠传输的基本原理：调制解调、信道与最佳接收。

## 主要内容
- 模拟与数字调制（AM/FM、ASK/PSK/QAM）
- 信源与信道模型、噪声中的最佳接收
- 信道编码初步（分组码、卷积码）
- 同步与复用

## 先修与后续
通向 [[r-comm-systems]]；理论上限由 [[c-info-theory-course]] 给出。','[]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-signals", "type": "prereq", "note": "频谱与调制分析"}, {"id": "c-probability", "type": "prereq", "note": "随机噪声分析"}]','["r-comm-systems", "c-info-theory-course"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-dsp','c-info','数字信号处理','Digital Signal Processing','','# 数字信号处理

## 课程概述
研究离散时间信号的数字处理算法：滤波器设计与快速变换是两大支柱。

## 主要内容
- 离散傅里叶变换与 FFT
- 数字滤波器设计（FIR/IIR）
- 多采样率处理与小波初步
- 谱估计初步

## 先修与后续
通向 [[c-image-processing]] 与 [[r-signal-processing]]。','["DSP"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-signals", "type": "prereq", "note": "信号与系统"}]','["r-signal-processing", "c-image-processing"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-image-processing','c-info','数字图像处理','Digital Image Processing','','# 数字图像处理

## 课程概述
研究图像的数字化处理：增强、复原、分割与压缩，是计算机视觉的经典底层。

## 主要内容
- 空域增强（直方图、滤波）与频域处理
- 图像复原（去噪、去模糊）与重建
- 边缘检测、分割与形态学
- 图像压缩标准（JPEG）初步

## 先修与后续
通向 [[r-image-speech]]；与学习驱动的 [[r-cv]] 衔接。','[]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-dsp", "type": "prereq", "note": "二维信号处理"}]','["r-image-speech", "r-cv"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-info-theory-course','c-info','信息论基础','Elements of Information Theory','','# 信息论基础

## 课程概述
香农创立的信息度量理论：熵、信道容量与编码定理划定通信与压缩的极限。

## 主要内容
- 熵、联合熵与互信息
- 信源编码定理与典型序列
- 信道容量（高斯信道）与信道编码定理
- 率失真理论初步

## 先修与后续
通向 [[r-comm-systems]] 与 [[r-security]]（密码学的信息论基础）。','["香农信息论"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-probability", "type": "prereq", "note": "随机变量与极限定理"}, {"id": "r-info-theory", "type": "related", "note": "数学方向的信息论研究（容量证明与编码构造）"}]','["r-comm-systems", "r-security"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-signals','c-info','信号与系统','Signals and Systems','','# 信号与系统

## 课程概述
信息与电子类专业的核心基础课：用变换方法统一描述信号与线性时不变系统。

## 主要内容
- 连续/离散信号与 LTI 系统、卷积
- 傅里叶级数与傅里叶变换、频谱分析
- 拉普拉斯变换与 z 变换、系统函数
- 采样定理

## 先修与后续
通向 [[c-dsp]]、[[c-comm-principles]]、[[c-control-principles]]。','[]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-calculus", "type": "prereq", "note": "积分与级数"}, {"id": "c-ode", "type": "related", "note": "微分方程刻画线性时不变系统"}, {"id": "c-complex-analysis", "type": "related", "note": "傅里叶/拉普拉斯变换的复分析背景"}]','["c-comm-principles", "c-control-principles", "c-dsp"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-computational','c-lab','计算物理','Computational Physics','','# 计算物理

## 课程概述
用数值方法研究物理问题的入门课程：当解析解不可得时，计算是理论物理的第三条腿。

## 主要内容
- 数值分析基础：插值、积分、微分方程数值解
- 蒙特卡洛方法、分子动力学模拟
- 矩阵计算与编程实践（Python/C++）

## 先修与后续
先修 [[c-math-methods]]，与 [[c-theoretical-mechanics]] 内容相配合。后续为 [[c-computational-adv]]；支撑 [[r-lattice]]、[[r-numerical-rel]] 等计算密集型研究方向。','["计算物理基础"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-math-methods", "type": "prereq", "note": "数值求解的对象是数理方程"}]','["c-math-methods", "r-numerical-rel", "c-computational-adv", "r-lattice", "c-theoretical-mechanics"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-frontier-lab','c-lab','前沿物理实验（精密测量）','Frontier Physics Experiments (Precision Measurement)','','# 前沿物理实验（精密测量）

## 课程概述
对接科研前沿的高阶实验课程，围绕精密测量与现代实验技术组织课题式训练。

## 主要内容
- 精密测量原理（锁相放大、频率稳定、低噪声探测）
- 课题式前沿实验（依实验室条件开设）
- 实验设计、数据采集与不确定度分析的综合训练

## 先修与后续
先修 [[c-modern-lab]]。与研究方向 [[r-qmetro]] 直接相关。','["精密测量实验", "综合物理实验"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-modern-lab", "type": "prereq", "note": "以近代物理实验的训练为基础"}]','["r-qmetro", "c-modern-lab"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-general-lab','c-lab','普通物理实验','General Physics Laboratory','','# 普通物理实验

## 课程概述
物理实验训练的起点：力、热、电、光基础实验，建立实验规范与误差意识。

## 主要内容
- 基本量测量与仪器使用（示波器、分光计等）
- 误差理论、不确定度评定、数据记录规范
- 力、热、电磁、光学基础实验

## 先修与后续
配合 [[c-mechanics]] 等普通物理课程，与 [[c-electromagnetism]]、[[c-optics]] 内容呼应。后续为 [[c-modern-lab]]。','["普物实验"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-mechanics", "type": "prereq", "note": "力热实验与理论课同步或稍后开设"}]','["c-electromagnetism", "c-optics", "c-mechanics", "c-modern-lab"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-modern-lab','c-lab','近代物理实验','Modern Physics Laboratory','','# 近代物理实验

## 课程概述
重现近代物理关键实验，训练谱学、核探测与真空等技术，是进入科研前的核心实验训练。

## 主要内容
- 原子与分子光谱实验（氢光谱、塞曼效应等）
- 核探测技术（盖革计数器、能谱测量）
- 磁共振、微波、真空与低温技术入门

## 先修与后续
先修 [[c-general-lab]]、[[c-atomic]]、[[c-probability]]。后续为 [[c-frontier-lab]]。','["近物实验"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-general-lab", "type": "prereq", "note": "需要先修完基础实验训练"}, {"id": "c-atomic", "type": "prereq", "note": "多数实验基于原子与核物理现象"}, {"id": "c-probability", "type": "prereq", "note": "计数统计与误差分析需要概率论"}]','["c-general-lab", "c-frontier-lab", "c-atomic", "c-probability"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-abstract-algebra','c-math-adv','抽象代数','Abstract Algebra','','# 抽象代数

## 课程概述
研究代数结构本身：群、环、域与模，伽罗瓦理论是古典高潮。

## 主要内容
- 群论：同态、商群、群作用、西罗定理
- 环与理想、多项式环、唯一分解
- 域扩张与伽罗瓦理论初步

## 先修与后续
通向 [[r-algebra]]、[[r-number-theory]]、[[r-algebraic-geometry]]。','["近世代数"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-advanced-algebra", "type": "prereq", "note": "线性代数与多项式"}, {"id": "c-group-theory", "type": "related", "note": "物理系的群论课程聚焦其在对称性中的应用"}]','["r-algebra", "r-number-theory", "r-algebraic-geometry"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-advanced-algebra','c-math-adv','高等代数','Advanced Algebra','','# 高等代数

## 课程概述
数学专业的代数基础课：多项式理论与线性空间的抽象理论，为抽象代数与泛函分析奠基。

## 主要内容
- 多项式代数、行列式
- 线性空间与线性变换、特征值理论
- 二次型、欧氏空间与酉空间、Jordan 标准形

## 先修与后续
通向 [[c-abstract-algebra]]、[[c-functional-analysis]]、[[c-differential-geometry]]。','["线性代数（数学专业）"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-linear-algebra", "type": "related", "note": "工科线性代数的深化（多项式理论与抽象线性空间）"}]','["c-differential-geometry", "c-abstract-algebra", "c-functional-analysis"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-analytic-geometry','c-math-adv','解析几何','Analytic Geometry','','# 解析几何

## 课程概述
用坐标与代数方法研究几何：向量代数、空间曲面曲线与二次曲面分类，是几何思维的入门。

## 主要内容
- 向量代数与坐标变换
- 空间直线、平面、曲面与曲线
- 二次曲线与二次曲面的分类

## 先修与后续
为 [[c-differential-geometry]] 与 [[c-math-analysis]] 的多元部分提供几何直观。','["空间解析几何"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-differential-geometry", "type": "related", "note": "为古典微分几何提供曲线曲面的几何直观"}]','["c-math-analysis", "c-differential-geometry"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-complex-analysis','c-math-adv','复变函数','Complex Analysis','','# 复变函数

## 课程概述
研究复变量解析函数：柯西积分理论、留数与保形映射，以简洁深刻著称。

## 主要内容
- 解析函数与柯西-黎曼方程、复积分
- 柯西积分公式、泰勒与洛朗展开、留数定理
- 保形映射、解析延拓初步

## 先修与后续
通向 [[r-analysis]]；在物理中用于积分计算、色散关系与二维场论。','["复分析"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-math-analysis", "type": "prereq", "note": "级数与极限工具"}, {"id": "c-math-methods", "type": "related", "note": "物理系的数理方法课程包含其应用部分"}]','["r-analysis"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-differential-geometry','c-math-adv','微分几何','Differential Geometry','','# 微分几何

## 课程概述
用微积分研究曲线、曲面与流形：从古典曲面论到黎曼几何。

## 主要内容
- 曲线论与曲面论：曲率、第一/第二基本形式
- 高斯绝妙定理、测地线
- 流形、切丛与黎曼度量初步

## 先修与后续
通向 [[r-geometry-topology]] 与 [[r-mathematical-physics]]；物理上支撑 [[c-gr]]。','[]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-math-analysis", "type": "prereq", "note": "多元微积分"}, {"id": "c-advanced-algebra", "type": "prereq", "note": "线性代数"}, {"id": "c-gr", "type": "related", "note": "广义相对论的数学语言（黎曼几何）"}]','["r-mathematical-physics", "r-geometry-topology", "c-gr"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-functional-analysis','c-math-adv','泛函分析','Functional Analysis','','# 泛函分析

## 课程概述
研究无穷维线性空间上的算子：巴拿赫空间、希尔伯特空间与算子理论。

## 主要内容
- 赋范空间与巴拿赫空间、三大基本原理
- 希尔伯特空间几何、正交投影
- 有界线性算子与谱理论初步

## 先修与后续
通向 [[r-analysis]]、[[r-pde-research]]、[[r-mathematical-physics]]。','[]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-real-analysis", "type": "prereq", "note": "Lᵖ 空间与测度论"}, {"id": "c-advanced-algebra", "type": "prereq", "note": "线性空间理论"}, {"id": "c-quantum-mechanics", "type": "related", "note": "量子力学的数学框架（希尔伯特空间与算子谱理论）"}]','["r-mathematical-physics", "r-pde-research", "r-analysis"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-math-analysis','c-math-adv','数学分析','Mathematical Analysis','','# 数学分析

## 课程概述
数学专业的第一门基础课，以严格的极限理论重建微积分：从实数完备性出发，建立分析学的严密语言。

## 主要内容
- 实数理论与极限、连续函数
- 一元/多元微分学与积分学（含一致收敛）
- 级数理论、含参变量积分

## 先修与后续
数学专业一切后续课程的基础：[[c-ode]]、[[c-complex-analysis]]、[[c-real-analysis]]、[[c-topology]]、[[c-differential-geometry]] 等。','["数学专业微积分"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-calculus", "type": "related", "note": "工科高等数学的严格化与深化（极限的 ε-δ 理论）"}]','["c-differential-geometry", "c-complex-analysis", "c-ode", "c-topology", "c-real-analysis"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-numerical-analysis','c-math-adv','数值分析','Numerical Analysis','','# 数值分析

## 课程概述
研究连续数学问题的离散近似算法：误差、收敛性与稳定性分析。

## 主要内容
- 插值与逼近、数值积分与微分
- 线性方程组直接法与迭代法、特征值计算
- 非线性方程求根、常微分方程数值解

## 先修与后续
通向 [[r-scientific-computing]]，支撑一切计算密集型研究。','["计算方法"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-calculus", "type": "prereq", "note": "微积分"}, {"id": "c-linear-algebra", "type": "prereq", "note": "线性代数"}, {"id": "c-computational", "type": "related", "note": "物理系的计算物理课程侧重物理问题建模"}]','["r-scientific-computing"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-ode','c-math-adv','常微分方程','Ordinary Differential Equations','','# 常微分方程

## 课程概述
研究含一元未知函数及其导数的方程：从初等解法到定性与稳定性理论。

## 主要内容
- 一阶方程初等解法、线性方程（组）理论
- 存在唯一性定理、解对参数的依赖性
- 定性理论初步：平衡点、极限环与稳定性

## 先修与后续
通向 [[c-pde]] 与研究方向 [[r-dynamical-systems]]；物理中对应 [[c-theoretical-mechanics]] 的运动方程。','["ODE"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-math-analysis", "type": "prereq", "note": "解的存在唯一性与级数解法"}, {"id": "c-advanced-algebra", "type": "prereq", "note": "线性方程组的代数理论"}]','["c-theoretical-mechanics", "c-pde", "r-dynamical-systems"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-pde','c-math-adv','偏微分方程','Partial Differential Equations','','# 偏微分方程

## 课程概述
研究含多元未知函数偏导数的方程：波动、热传导与位势三大经典方程及其现代理论。

## 主要内容
- 一阶方程与特征线法、分离变量法
- 波动方程、热方程、拉普拉斯方程
- 格林函数、极值原理、弱解初步

## 先修与后续
通向 [[r-pde-research]]；物理中对应 [[c-electrodynamics]]、[[c-fluid]] 的基本方程。','["PDE", "数学物理方程"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-ode", "type": "prereq", "note": "常微分方程理论"}, {"id": "c-math-analysis", "type": "prereq", "note": "级数与积分"}, {"id": "c-math-methods", "type": "related", "note": "物理系数理方法覆盖三类经典方程的解法"}]','["c-fluid", "r-pde-research", "c-electrodynamics"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-real-analysis','c-math-adv','实变函数','Real Analysis','','# 实变函数

## 课程概述
以勒贝格测度与积分重建分析学，是现代概率论与泛函分析的共同基础。

## 主要内容
- 集合与点集拓扑、勒贝格测度
- 可测函数、勒贝格积分及三大收敛定理
- Lᵖ 空间初步

## 先修与后续
通向 [[c-functional-analysis]] 与 [[r-probability]]。','["实分析", "测度论"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-math-analysis", "type": "prereq", "note": "点集拓扑与极限理论"}]','["r-probability", "c-functional-analysis"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-topology','c-math-adv','拓扑学','Topology','','# 拓扑学

## 课程概述
研究连续变形下不变的几何性质：拓扑空间、连通性、紧性与基本群。

## 主要内容
- 拓扑空间、连续映射、同胚
- 连通性、紧性、分离公理
- 基本群与覆叠空间初步

## 先修与后续
通向 [[r-geometry-topology]]；代数拓扑工具也进入 [[c-differential-geometry]]。','["点集拓扑"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-math-analysis", "type": "prereq", "note": "连续性与极限的严格训练"}]','["r-geometry-topology", "c-differential-geometry"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-calculus','c-math','高等数学（微积分）','Calculus','','# 高等数学（微积分）

## 课程概述
理工科数学的起点，为全部物理课程提供微积分语言：极限、导数、积分与级数是书写物理规律的基本工具。

## 主要内容
- 极限与连续、一元函数微分与积分
- 多元函数微积分、重积分、曲线曲面积分
- 无穷级数、常微分方程初步、矢量分析初步

## 先修与后续
无先修（入学即修）。是 [[c-mechanics]]、[[c-math-methods]] 等几乎所有后续课程的数学基础。','["微积分", "数学分析"]','[]','[]','null',0,NULL,'2026-08-13','[]','[]','["c-math-methods", "c-mechanics"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-linear-algebra','c-math','线性代数','Linear Algebra','','# 线性代数

## 课程概述
研究向量空间与线性变换，是量子力学态空间、数值计算与数据科学的公共语言。

## 主要内容
- 矩阵运算与行列式、线性方程组
- 向量空间、基与维数、线性变换
- 特征值与特征向量、内积空间、正交对角化

## 先修与后续
无先修。后续支撑 [[c-quantum-mechanics]]（态矢量与算符）、[[c-group-theory]]、[[c-quantum-info-intro]]（量子比特的矩阵表述）。','["高等代数"]','[]','[]','null',0,NULL,'2026-08-13','[]','[]','["c-quantum-info-intro", "c-quantum-mechanics", "c-group-theory"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-math-methods','c-math','数学物理方法','Methods of Mathematical Physics','','# 数学物理方法

## 课程概述
连接基础数学与四大力学的桥梁课程，提供求解物理边值问题所需的分析工具。

## 主要内容
- 复变函数与留数定理、积分变换（傅里叶、拉普拉斯）
- 数学物理方程：波动方程、热传导方程、拉普拉斯方程
- 特殊函数（勒让德、贝塞尔等）、变分法初步、格林函数

## 先修与后续
先修 [[c-calculus]]、[[c-linear-algebra]]。是四大力学——[[c-theoretical-mechanics]]、[[c-electrodynamics]]、[[c-quantum-mechanics]]、[[c-statistical-mechanics]]——共同的数学先修。','["数理方法", "数理方程"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-calculus", "type": "prereq", "note": "微积分是全部内容的出发点"}, {"id": "c-linear-algebra", "type": "prereq", "note": "函数空间与本征展开需要线性代数语言"}]','["c-electrodynamics", "c-linear-algebra", "c-statistical-mechanics", "c-quantum-mechanics", "c-calculus", "c-theoretical-mechanics"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-probability','c-math','概率论与数理统计','Probability and Statistics','','# 概率论与数理统计

## 课程概述
研究随机现象的数学理论，是统计物理、实验数据处理与量子测量概率解释的基础。

## 主要内容
- 随机事件与概率、随机变量及其分布
- 大数定律与中心极限定理
- 参数估计、假设检验、最小二乘拟合

## 先修与后续
先修 [[c-calculus]]。后续支撑 [[c-statistical-mechanics]]（统计系综的概率框架）与 [[c-modern-lab]]（实验误差与数据分析），研究层面通向 [[r-stochastic]]。','["概率统计"]','[]','[]','null',0,NULL,'2026-08-13','[{"title": "The Probability and Statistics Cookbook", "type": "笔记", "url": "https://statistics.zone/", "note": "这是一个公式集。"}]','[{"id": "c-calculus", "type": "prereq", "note": "微积分是概率密度与期望计算的基础"}]','["r-stochastic", "c-calculus", "c-statistical-mechanics", "c-modern-lab"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('r-atommol','r-amo','原子分子物理','Atomic and Molecular Physics','','# 原子分子物理

## 方向概述
arXiv: physics.atom-ph。研究原子分子的结构、碰撞与外场响应。

## 核心问题
- 精密结构计算（多电子关联、QED 修正）
- 原子分子碰撞与冷碰撞
- 强外场中的原子分子

## 代表方法与设施
电子束离子阱、离子阱谱学、符合测量。

## 与其他方向的联系
与 [[r-spectroscopy]]、[[r-cold-atom]]、[[r-ultrafast]] 交叉。','["原子分子"]','[]','[]','null',0,NULL,'2026-08-13','[]','[{"id": "c-amo-course", "type": "prereq", "note": "课程基础"}, {"id": "r-spectroscopy", "type": "related", "note": "精密测量原子分子结构"}]','["r-ultrafast", "r-cold-atom", "r-spectroscopy"]');