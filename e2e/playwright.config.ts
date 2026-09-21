import { defineConfig, devices } from '@playwright/test'

// E2E 测试：Playwright 会自动拉起前端(vite)和后端(uvicorn)，
// 无需手动启动服务。若服务已在运行则复用（reuseExistingServer）。
export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',

  use: {
    baseURL: 'http://127.0.0.1:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],

  // 前端：vite dev server（5173，已代理 /api → 后端）
  webServer: [
    {
      command: 'npm run dev -- --port 5173 --strictPort',
      cwd: '../frontend',
      url: 'http://127.0.0.1:5173',
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
    },
    // 后端：uvicorn（/health 无需数据库即可访问）
    {
      command: '.venv/bin/uvicorn app.main:app --host 127.0.0.1 --port 8000',
      cwd: '../backend',
      url: 'http://127.0.0.1:8000/api/health',
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
    },
  ],
})
