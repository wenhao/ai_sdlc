import { expect, test } from '@playwright/test'

test('首页正常加载并展示标题', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/AI SDLC/)
  await expect(page.getByRole('heading', { level: 2, name: 'AI SDLC' })).toBeVisible()
})

test('前后端链路连通：健康检查显示后端状态', async ({ page }) => {
  await page.goto('/')
  const card = page.locator('.ant-card')
  await expect(card).toBeVisible()
  // 后端 /api/health 返回 status=ok，经 vite 代理渲染到首页
  await expect(card).toContainText('状态：ok')
})
