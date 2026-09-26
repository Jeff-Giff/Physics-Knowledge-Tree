CREATE TABLE IF NOT EXISTS admins (github_login TEXT PRIMARY KEY,granted_by TEXT NOT NULL,granted_at DATETIME DEFAULT CURRENT_TIMESTAMP,role TEXT DEFAULT 'admin');
CREATE TABLE IF NOT EXISTS admin_applications (id INTEGER PRIMARY KEY AUTOINCREMENT,github_login TEXT NOT NULL UNIQUE,reason TEXT,status TEXT DEFAULT 'pending',created_at DATETIME DEFAULT CURRENT_TIMESTAMP,updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,handled_by TEXT,handle_note TEXT);
CREATE TABLE IF NOT EXISTS feedback (id INTEGER PRIMARY KEY AUTOINCREMENT,github_login TEXT NOT NULL,category TEXT NOT NULL,title TEXT NOT NULL,detail TEXT,status TEXT DEFAULT 'open',created_at DATETIME DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS audit_log (id INTEGER PRIMARY KEY AUTOINCREMENT,actor TEXT NOT NULL,action TEXT NOT NULL,target TEXT NOT NULL,detail TEXT,created_at DATETIME DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS domains (id TEXT PRIMARY KEY,name TEXT NOT NULL,name_en TEXT,color TEXT DEFAULT '#888888',cloud_alpha REAL DEFAULT 0.08,cloud_r REAL DEFAULT 1.0);
CREATE TABLE IF NOT EXISTS nodes (id TEXT PRIMARY KEY,domain TEXT NOT NULL,title TEXT NOT NULL,title_en TEXT,description TEXT,body TEXT,aliases TEXT,tags TEXT,keywords TEXT,pos TEXT,fixed INTEGER DEFAULT 0,size_override REAL,updated TEXT,resources TEXT,links TEXT,wiki_refs TEXT,created_at DATETIME DEFAULT CURRENT_TIMESTAMP,updated_at DATETIME DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS meta (key TEXT PRIMARY KEY,value TEXT);
DELETE FROM nodes;
DELETE FROM domains;
DELETE FROM meta;
DELETE FROM admins;
DELETE FROM admin_applications;
DELETE FROM feedback;
DELETE FROM audit_log;
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('c-math', '数学基础（课程）', 'Mathematical Foundations (Courses)', '#9374aa', 0.1, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('c-general', '普通物理（课程）', 'General Physics (Courses)', '#75789f', 0.1, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('c-core', '四大力学（课程）', 'Theoretical Physics Core (Courses)', '#667b99', 0.11, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('c-lab', '实验与计算（课程）', 'Experiments & Computation (Courses)', '#748f9a', 0.09, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('c-elective', '专业选修（课程）', 'Specialized Electives (Courses)', '#608a8a', 0.1, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-astro', '天体物理与宇宙学', 'Astrophysics & Cosmology', '#593cec', 0.09, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-gravity', '引力与量子引力', 'Gravity & Quantum Gravity', '#1f16da', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-hep', '高能物理', 'High Energy Physics', '#3c49ec', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-nuclear', '核物理', 'Nuclear Physics', '#163bda', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-condmat', '凝聚态物理', 'Condensed Matter Physics', '#166ada', 0.09, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-quantum', '量子物理与量子信息', 'Quantum Physics & Quantum Information', '#3c73ec', 0.09, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-amo', '原子分子与光物理', 'Atomic, Molecular & Optical Physics', '#3c9dec', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-plasma', '等离子体物理', 'Plasma Physics', '#169ada', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-fluid', '流体与非线性科学', 'Fluids & Nonlinear Science', '#16c9da', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-statphys', '统计物理与复杂系统', 'Statistical Physics & Complex Systems', '#3cc7ec', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-softbio', '软物质与生物物理', 'Soft Matter & Biological Physics', '#16dabd', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-earth', '地球、大气与空间物理', 'Earth, Atmospheric & Space Physics', '#3cece6', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('c-math-adv', '数学专业核心（课程）', 'Advanced Mathematics (Courses)', '#7a5b8f', 0.1, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('c-chem', '化学（课程）', 'Chemistry (Courses)', '#6a9064', 0.1, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('c-bio', '生命科学（课程）', 'Life Sciences (Courses)', '#858d5e', 0.1, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-math-pure', '基础数学', 'Pure Mathematics', '#b040e7', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-math-applied', '应用与计算数学', 'Applied & Computational Mathematics', '#6e1fd6', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-chem-core', '基础化学研究', 'Core Chemistry Research', '#1eb823', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-chem-applied', '交叉与应用化学', 'Interdisciplinary & Applied Chemistry', '#6bd61f', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-bio-mol', '分子、细胞与基因组', 'Molecular, Cell & Genome Biology', '#a8e619', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-bio-org', '个体、神经与生态', 'Organismal, Neural & Ecological Biology', '#e6d80f', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('c-cs', '计算机科学（课程）', 'Computer Science (Courses)', '#9b6f88', 0.1, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('c-info', '信息科学（课程）', 'Information Science (Courses)', '#966990', 0.1, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('c-eng', '工程科学（课程）', 'Engineering (Courses)', '#946b79', 0.1, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-cs-theory', '理论与算法', 'Theory & Algorithms', '#e6379d', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-cs-systems', '系统、网络与安全', 'Systems, Networks & Security', '#da1ba1', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-cs-ai', '人工智能', 'Artificial Intelligence', '#ea3e8e', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-info-eng', '信息与电子', 'Information & Electronics', '#e029ce', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-eng-core', '机械、电气与控制', 'Mechanical, Electrical & Control Engineering', '#dd2c61', 0.08, 1.0);
INSERT INTO domains (id, name, name_en, color, cloud_alpha, cloud_r) VALUES ('r-eng-applied', '材料、能源与土建', 'Materials, Energy & Civil Engineering', '#e33b57', 0.08, 1.0);
INSERT INTO meta (key, value) VALUES ('max_visual_degree', '8');
INSERT INTO meta (key, value) VALUES ('site', '{"title": "中文物理知识树", "subtitle": "Physics Knowledge Graph", "description": "从本科课程到研究方向的科学知识导航网络（物理 · 数学 · 化学 · 生命科学 · 信息 · 计算机 · 工程）"}');
INSERT INTO meta (key, value) VALUES ('relation_semantics', '{"prereq": "先修：学习本节点之前应先掌握目标节点（有方向，图上渲染为带箭头的连线）", "related": "相关：共享概念或方法、可相互参照（无方向，图上渲染为普通连线）"}');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-biochemistry','c-bio','生物化学','Biochemistry','','# 生物化学

## 课程概述
在分子层面理解生命：蛋白质、核酸、糖与脂的结构功能，以及代谢的化学逻辑。

## 主要内容
- 蛋白质结构与功能、酶动力学
- 核酸结构、糖与脂类
- 代谢：糖酵解、三羧酸循环、氧化磷酸化、光合磷酸化
- 代谢调控与信号转导初步

## 先修与后续
通向 [[c-molecular-bio]]、[[c-microbiology]] 与研究方向 [[r-biomolecules]]。','["生化"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-organic", "type": "prereq", "note": "生物分子的有机化学"}, {"id": "c-gen-bio", "type": "prereq", "note": "细胞与代谢概览"}, {"id": "r-biophy", "type": "related", "note": "生物分子的物理研究（折叠动力学、单分子）"}]','["c-molecular-bio", "r-biomolecules", "c-microbiology"]');
INSERT INTO nodes (id, domain, title, title_en, description, body, aliases, tags, keywords, pos, fixed, size_override, updated, resources, links, wiki_refs) VALUES ('c-bioinfo','c-bio','生物信息学','Bioinformatics','','# 生物信息学

## 课程概述
用计算与统计方法处理生命数据：序列比对、基因组注释与组学数据分析。

## 主要内容
- 序列比对（BLAST、动态规划）与进化树构建
- 基因组组装与注释、变异检测
- 转录组/蛋白组数据分析流程
- 机器学习在生物数据中的应用

## 先修与后续
通向 [[r-genomics]]、[[r-mol-networks]]、[[r-quant-bio]]。','["计算生物学"]','[]','[]','null',0,NULL,'2026-08-14','[]','[{"id": "c-molecular-bio", "type": "prereq", "note": "序列与分子数据"}, {"id": "c-probability", "type": "prereq", "note": "统计推断基础"}, {"id": "c-computational", "type": "related", "note": "算法与编程训练"}]','["r-genomics", "r-quant-bio", "r-mol-networks"]');