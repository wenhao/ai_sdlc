# e2e

端到端测试，基于 [Playwright](https://playwright.dev/)。

## 运行

```bash
cd e2e
npm install
npx playwright install chromium   # 首次需要下载浏览器
npm test                          # 自动拉起 frontend(5173) 和 backend(8000)
```

## 说明

- `playwright.config.ts` 中配置了两个 `webServer`，测试时会自动启动前端和后端；本地已有服务在跑则直接复用（CI 中强制重新启动）。
- 后端 `/api/health` 不依赖 MySQL，冒烟测试无需数据库；涉及数据的用例请先执行 `database/schema.sql` 并配置 `backend/.env`。
- 测试报告：`npm run report` 查看最近一次 HTML 报告；失败用例自动截图并录制 trace。
