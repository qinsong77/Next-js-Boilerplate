import { expect, test } from '@playwright/test'

test('should navigate to the line chart page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')
  // Find an element with the text 'line chart' and click on it
  await page.click('text=line chart')
  // The new URL should be "/line-chart"
  await expect(page).toHaveURL('/line-chart')
  // The new page should contain the chart heading
  await expect(page.getByText('Line Chart - Interactive')).toBeVisible()
})

test('app journey', async ({ page }) => {
  await page.goto('/')
  const footerText = page.locator('footer p')
  await expect(footerText).toBeVisible()

  const navLinks = page.locator('nav a')
  const expectedLinks = [
    { text: 'streaming ui', url: '/loading-and-streaming', protected: false },
    { text: 'dashboard', url: '/dashboard', protected: true },
    { text: 'line chart', url: '/line-chart', protected: false },
    { text: 'pagination', url: '/pagination-demo', protected: false },
    {
      text: 'Sequence Progress',
      url: '/task-sequence-progress',
      protected: false,
    },
    { text: 'GitHub', url: 'https://github.com', protected: false },
  ] as const

  for (const [index, link] of expectedLinks.entries()) {
    const navLink = navLinks.nth(index)
    await expect(navLink).toContainText(link.text)

    if (link.text !== 'GitHub') {
      await navLink.click()
      // If it's a protected route, expect redirect to login
      if (link.protected) {
        await expect(page).toHaveURL('/login')
      } else {
        await expect(page).toHaveURL(link.url)
      }
      await page.goBack()
    }
  }

  // Test Loading and Streaming page
  await navLinks.filter({ hasText: 'streaming ui' }).click()
  await expect(page).toHaveURL('/loading-and-streaming')
  await expect(page.getByText('Loading UI & Streaming Demo')).toBeVisible()
})
