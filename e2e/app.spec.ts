import { expect, test } from '@playwright/test'

test('should navigate to the dashboard page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')
  // Find an element with the text 'About' and click on it
  await page.click('text=dashboard')
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('/dashboard')
  // The new page should contain an h1 with "About"
  await expect(page.locator('h2')).toContainText('Dashboard')
})

test('app journey', async ({ page }) => {
  await page.goto('/')
  const footerText = page.locator('footer p')
  await expect(footerText).toBeVisible()

  const navLinks = page.locator('nav a')
  const expectedLinks = [
    { text: 'streaming ui', url: '/loading-and-streaming' },
    { text: 'dashboard', url: '/dashboard' },
    { text: 'line chart', url: '/line-chart' },
    { text: 'pagination', url: '/pagination-demo' },
    { text: 'Todo demo', url: '/todo' },
    { text: 'Sequence Progress', url: '/task-sequence-progress' },
    { text: 'GitHub', url: 'https://github.com' },
  ] as const

  // @ts-expect-error right
  for (const [index, link] of expectedLinks.entries()) {
    const navLink = navLinks.nth(index)
    await expect(navLink).toContainText(link.text)

    if (link.text !== 'GitHub') {
      await navLink.click()
      await expect(page).toHaveURL(link.url)
      await page.goBack()
    }
  }

  // 测试 Todo 页面
  await navLinks.filter({ hasText: 'Todo demo' }).click()
  await expect(page).toHaveURL('/todo')
  await expect(
    page.getByRole('heading', { name: 'Todo demo with RCC' }),
  ).toBeVisible()

  // 测试 Loading and Streaming 页面
  await navLinks.filter({ hasText: 'streaming ui' }).click()
  await expect(page).toHaveURL('/loading-and-streaming')
  await expect(
    page.getByRole('heading', { name: 'Show loading UI and streaming' }),
  ).toBeVisible()

  // todo test submit
})
