# Challenges

记录项目开发过程中遇到的问题与解决过程。

---

## 问题 1：如何快速生成项目结构？

**状态**：✅ 已解决（2026-09-21）

**背景**：项目从零开始，需要搭建前后端分离的完整结构（frontend / backend / database），并且采用 BMAD 方法驱动开发，手动逐个建目录、写配置效率低且容易遗漏。

**解决过程**：

1. **BMAD 框架**：用官方安装器非交互安装，一行命令完成 agent/workflow/skill 的落地：
   ```bash
   npx bmad-method install --directory . --yes --modules bmm --tools zcode,claude-code \
     --communication-language Chinese --document-output-language Chinese
   ```
   自动生成 `_bmad/`（框架本体）、`.zcode/skills/`（IDE 技能）、`_bmad-output/`（产出目录）。
2. **前后端骨架**：由 AI 代理按约定生成——React+Vite+TS 前端、FastAPI 分层后端（api/models/schemas/services）、MySQL 脚本目录，随后用 `npm run build` 和 `python3 -m compileall` 立即验证骨架可用。
3. **E2E 脚手架**：Playwright 的 `webServer` 配置让测试自动拉起前后端，不需要手工编排启动脚本。

**经验**：脚手架三件套——官方 CLI 生成框架部分、AI 代理生成业务骨架、构建命令即时验证。生成完立刻跑一次构建，比写完所有代码再排错快得多。

---

## 问题 2：如何判断项目结构和技术栈使用了最佳实践？

**状态**：⏳ 待解决

**背景**：当前骨架是凭经验快速搭出来的（React 18 + Vite + AntD / FastAPI + SQLAlchemy 2 / MySQL），但"搭起来了"不等于"符合最佳实践"。需要一套可操作的评判标准，而不是每次靠感觉。

**待回答的子问题**：

- 结构层面：前后端的目录分层（如 backend 的 api/models/schemas/services 划分）是否符合社区主流约定？职责边界是否清晰？
- 技术选型层面：React 18 vs 19、Vite vs Rspack、FastAPI vs Flask/Django 等选择，针对本项目（AI SDLC）是否合理？
- 工程化层面：lint/format/类型检查/测试/CI 是否齐备且相互打通？
- 安全与配置层面：密钥管理、CORS、数据库连接配置是否符合规范？

**候选方案**（待讨论）：

1. 对照各技术栈官方风格指南与社区成熟项目模板逐项核对；
2. 用 BMAD 的架构师（architect）工作流生成正式架构文档，让评审有依据；
3. 引入自动化检查（ruff/mypy/eslint/tsc + CI）把"最佳实践"中可机检的部分固化下来。
