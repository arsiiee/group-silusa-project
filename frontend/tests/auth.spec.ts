import { expect, test } from '@playwright/test'

const user = { id: 1, name: 'Juan Dela Cruz', email: 'juan@example.com' }

test('redirects the root route to login', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveURL(/\/login$/)
  await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible()
})

test('shows required login fields', async ({ page }) => {
  await page.goto('/login')
  await expect(page.getByLabel('EMAIL ADDRESS')).toBeVisible()
  await expect(page.getByLabel('PASSWORD')).toBeVisible()
})

test('toggles the login password visibility', async ({ page }) => {
  await page.goto('/login')
  const password = page.getByLabel('PASSWORD')
  await password.fill('secret')
  await page.getByTitle('Show password').click()
  await expect(password).toHaveAttribute('type', 'text')
  await page.getByTitle('Hide password').click()
  await expect(password).toHaveAttribute('type', 'password')
})

test('navigates from login to registration', async ({ page }) => {
  await page.goto('/login')
  await page.getByRole('link', { name: 'Create one' }).click()
  await expect(page).toHaveURL(/\/register$/)
  await expect(page.getByRole('button', { name: 'Create Account' })).toBeVisible()
})

test('shows a validation error when registration passwords differ', async ({ page }) => {
  await page.goto('/register')
  await page.getByLabel('FIRST NAME').fill('Juan')
  await page.getByLabel('LAST NAME').fill('Dela Cruz')
  await page.getByLabel('EMAIL ADDRESS').fill('juan@example.com')
  await page.getByLabel('PASSWORD', { exact: true }).fill('secret123')
  await page.getByLabel('CONFIRM PASSWORD').fill('different')
  await page.getByRole('button', { name: 'Create Account' }).click()
  await expect(page.getByRole('alert')).toHaveText('Passwords do not match.')
})

test('logs in and navigates to the dashboard', async ({ page }) => {
  await page.route('**/api/login', async (route) => {
    await route.fulfill({ json: { user } })
  })
  await page.route('**/api/me', async (route) => {
    await route.fulfill({ json: { user } })
  })
  await page.goto('/login')
  await page.getByLabel('EMAIL ADDRESS').fill(user.email)
  await page.getByLabel('PASSWORD').fill('secret123')
  await page.getByRole('button', { name: 'Log In' }).click()
  await expect(page).toHaveURL(/\/dashboard$/)
  await expect(page.getByRole('heading', { name: user.name })).toBeVisible()
})

test('shows the login API error', async ({ page }) => {
  await page.route('**/api/login', async (route) => {
    await route.fulfill({ status: 422, json: { message: 'The provided credentials are incorrect.' } })
  })
  await page.goto('/login')
  await page.getByLabel('EMAIL ADDRESS').fill(user.email)
  await page.getByLabel('PASSWORD').fill('wrong-password')
  await page.getByRole('button', { name: 'Log In' }).click()
  await expect(page.getByRole('alert')).toHaveText('The provided credentials are incorrect.')
  await expect(page).toHaveURL(/\/login$/)
})

test('registers and navigates to the dashboard', async ({ page }) => {
  await page.route('**/api/register', async (route) => {
    await route.fulfill({ status: 201, json: { user } })
  })
  await page.route('**/api/me', async (route) => {
    await route.fulfill({ json: { user } })
  })
  await page.goto('/register')
  await page.getByLabel('FIRST NAME').fill('Juan')
  await page.getByLabel('LAST NAME').fill('Dela Cruz')
  await page.getByLabel('EMAIL ADDRESS').fill(user.email)
  await page.getByLabel('PASSWORD', { exact: true }).fill('secret123')
  await page.getByLabel('CONFIRM PASSWORD').fill('secret123')
  await page.getByRole('button', { name: 'Create Account' }).click()
  await expect(page).toHaveURL(/\/dashboard$/)
})

test('shows a registration API error', async ({ page }) => {
  await page.route('**/api/register', async (route) => {
    await route.fulfill({ status: 422, json: { message: 'The email has already been taken.' } })
  })
  await page.goto('/register')
  await page.getByLabel('FIRST NAME').fill('Juan')
  await page.getByLabel('LAST NAME').fill('Dela Cruz')
  await page.getByLabel('EMAIL ADDRESS').fill(user.email)
  await page.getByLabel('PASSWORD', { exact: true }).fill('secret123')
  await page.getByLabel('CONFIRM PASSWORD').fill('secret123')
  await page.getByRole('button', { name: 'Create Account' }).click()
  await expect(page.getByRole('alert')).toHaveText('The email has already been taken.')
})

test('logs out from the authenticated dashboard', async ({ page }) => {
  await page.route('**/api/me', async (route) => {
    await route.fulfill({ json: { user } })
  })
  await page.route('**/api/logout', async (route) => {
    await route.fulfill({ json: { message: 'Logged out successfully.' } })
  })
  await page.goto('/dashboard')
  await expect(page.getByRole('heading', { name: user.name })).toBeVisible()
  await page.getByRole('button', { name: 'Log out' }).click()
  await expect(page).toHaveURL(/\/login$/)
})