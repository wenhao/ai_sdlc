# ai_sdlc

Agentic SDLC — 前后端分离的 Web 项目，采用 [BMAD-METHOD](https://bmadcode.com/)（v6）驱动开发。

## 目录结构

```
ai_sdlc/
├── _bmad/            # BMAD 框架安装目录（agents/workflows/tools）
├── .claude/skills/   # BMAD 技能（Claude Code 用）
├── .zcode/skills/    # BMAD 技能（ZCode IDE 用，29 个）
├── _bmad-output/     # BMAD 工作流产出的文档目录
├── frontend/         # 前端：React 18 + Vite + TypeScript + Ant Design
├── backend/          # 后端：Python + FastAPI + SQLAlchemy 2 + MySQL
└── database/         # MySQL 建库/建表/种子数据脚本
```

## 技术栈

- **前端**：React 18、Vite、TypeScript、Ant Design 5、React Router 6、TanStack Query 5、Axios、Zustand
- **后端**：FastAPI、SQLAlchemy 2（ORM）、PyMySQL、Alembic（迁移）、Pydantic v2
- **数据库**：MySQL 8（utf8mb4）

## 快速启动

### 1. 数据库

```bash
mysql -u root -p < database/schema.sql
mysql -u root -p < database/seed.sql   # 可选
```

### 2. 后端（端口 8000）

```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # 修改数据库密码
uvicorn app.main:app --reload
```

### 3. 前端（端口 5173，已代理 /api → 8000）

```bash
cd frontend
npm install
npm run dev
```

## BMAD 使用

在 ZCode IDE 中打开本仓库即可直接调用 BMAD 技能（位于 `.zcode/skills/`，已在会话中自动发现）：
输入 `/bmad-help` 查看下一步该做什么，或直接描述需求（如"帮我头脑风暴"、"创建 PRD"），会自动匹配对应技能。
BMAD 工作流产出的文档写入 `_bmad-output/`。
