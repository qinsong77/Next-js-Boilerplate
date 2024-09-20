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
  const expectedLinksText = [
    'Loading',
    'dashboard',
    'line chart',
    'todo demos',
    'GitHub',
  ]

  for (let i = 0; i < expectedLinksText.length; i++) {
    const linkText = await navLinks.nth(i).textContent()
    expect(linkText).toContain(expectedLinksText[i])
  }

  await navLinks.nth(0).click()
  await expect(page).toHaveURL('/loading-and-streaming')

  await expect(
    page.getByRole('heading', { name: 'Show loading UI and streaming' }),
  ).toBeVisible()

  await navLinks.nth(3).click()
  await expect(page).toHaveURL('/todo')
  await expect(
    page.getByRole('heading', { name: 'Todo demo with RCC' }),
  ).toBeVisible()
  // todo test submit
})
