import { expect, test } from '@playwright/test'

test.describe('Authentication Flow', () => {
  test('should redirect to login when accessing protected route without authentication', async ({
    page,
  }) => {
    // Try to access dashboard without login
    await page.goto('/dashboard')

    // Should be redirected to login page
    await expect(page).toHaveURL('/login')
    await expect(
      page.getByRole('heading', { name: 'Welcome back' }),
    ).toBeVisible()
  })

  test('should login from home page and access protected route', async ({
    page,
  }) => {
    // Start from home page
    await page.goto('/')

    // Header should show "Sign in" button when not logged in
    await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible()

    // Click Sign in button
    await page.getByRole('link', { name: 'Sign in' }).click()
    await expect(page).toHaveURL('/login')

    // Fill in login form
    await page.getByLabel('Email Address').fill('demo@example.com')
    await page.getByLabel('Password').fill('password123')

    // Submit login - use exact match to avoid matching "Sign in with GitHub/Google"
    await page.getByRole('button', { name: 'Sign in', exact: true }).click()

    // Should redirect to home page after login
    await page.waitForURL('/')

    // Header should show user menu (avatar) instead of Sign in button
    await expect(
      page.locator('header [data-slot="dropdown-menu-trigger"]').last(),
    ).toBeVisible()

    // Now can access protected dashboard route
    await page.click('text=dashboard')
    await expect(page).toHaveURL('/dashboard')
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
  })

  test('should logout and redirect back to login', async ({ page }) => {
    // Login first
    await page.goto('/login')
    await page.getByLabel('Email Address').fill('demo@example.com')
    await page.getByLabel('Password').fill('password123')
    await page.getByRole('button', { name: 'Sign in', exact: true }).click()
    await page.waitForURL('/')

    // Click user avatar to open menu
    // Target the specific dropdown trigger in the header that contains the avatar
    await page
      .locator('header [data-slot="dropdown-menu-trigger"]')
      .last()
      .click()

    // Wait for menu to open and click Sign out
    await page
      .locator('[data-slot="dropdown-menu-item"]')
      .filter({ hasText: 'Sign out' })
      .click()

    // Should redirect to login page
    await expect(page).toHaveURL('/login')

    // Try to access dashboard again - should redirect to login
    await page.goto('/dashboard')
    await expect(page).toHaveURL('/login')
  })

  test('complete auth flow: register → dashboard → logout', async ({
    page,
  }) => {
    const testEmail = `test-${Date.now()}@example.com`

    // Register new account
    await page.goto('/register')
    await page.getByLabel('Username').fill('testuser')
    await page.getByLabel('Email Address').fill(testEmail)
    await page.getByLabel('Password', { exact: true }).fill('password123')
    await page.getByLabel('Confirm Password').fill('password123')
    await page.getByRole('button', { name: 'Create account' }).click()

    // Should redirect to home after registration
    await page.waitForURL('/')

    // Should be able to access protected route
    await page.goto('/dashboard')
    await expect(page).toHaveURL('/dashboard')
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()

    // Logout
    // Dashboard page uses a different UserNav component without a header tag
    // Click the dropdown trigger that contains the avatar
    await page
      .locator('[data-slot="dropdown-menu-trigger"]:has([data-slot="avatar"])')
      .click()
    // Wait for menu to open and click Log out (dashboard uses "Log out" not "Sign out")
    await page
      .locator('[data-slot="dropdown-menu-item"]')
      .filter({ hasText: 'Log out' })
      .click()

    // Should be logged out
    await expect(page).toHaveURL('/login')
  })
})
