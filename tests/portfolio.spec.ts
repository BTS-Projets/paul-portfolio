import { expect, test, type Page } from '@playwright/test'

function monitorBrowserErrors(page: Page): () => void {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })

  return () => expect(errors).toEqual([])
}

test('prérend le contenu et les métadonnées principales', async ({ page, request }) => {
  const response = await request.get('/')
  expect(response.ok()).toBe(true)
  const html = await response.text()
  expect(html).toContain('Développement logiciel')
  expect(html).toContain('Portfolio professionnel de Paul Muller')

  const expectNoBrowserErrors = monitorBrowserErrors(page)
  await page.goto('/')
  await expect(page).toHaveTitle('Paul Muller — Portfolio | BTS SIO SLAM')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Développement logiciel')
  await page.getByRole('link', { name: 'Voir mes réalisations' }).click()
  await expect(page).toHaveURL(/#realisations$/)
  expectNoBrowserErrors()
})

test('filtre les réalisations depuis les compétences et réinitialise les filtres', async ({ page }) => {
  const expectNoBrowserErrors = monitorBrowserErrors(page)
  await page.goto('/')

  await page.getByTitle('Afficher les projets utilisant JavaScript').click()
  await expect(page).toHaveURL(/#realisations$/)
  await expect(page.getByLabel('Technologie', { exact: true })).toHaveValue('JavaScript')
  await expect(page.getByText('7 réalisations', { exact: true })).toBeVisible()
  await expect(page.locator('.project-card')).toHaveCount(7)

  await page.getByRole('button', { name: 'Personnel', exact: true }).click()
  await expect(page.getByText('Aucune réalisation ne correspond à ces filtres.')).toBeVisible()
  await page.getByRole('button', { name: 'Afficher toutes les réalisations' }).click()
  await expect(page.getByText('12 réalisations', { exact: true })).toBeVisible()

  await page.getByLabel('Compétence E5', { exact: true }).selectOption('B1.1')
  await expect(page.getByText('Aucune réalisation ne correspond à ces filtres.')).toBeVisible()
  await page.getByRole('button', { name: 'Afficher toutes les réalisations' }).click()
  await expect(page.getByText('12 réalisations', { exact: true })).toBeVisible()
  expectNoBrowserErrors()
})

test('synchronise le dialogue avec l’URL et restitue le focus', async ({ page }) => {
  const expectNoBrowserErrors = monitorBrowserErrors(page)
  await page.goto('/')

  const trigger = page.locator('[data-project-trigger="cpascher"]')
  await trigger.click()
  await expect(page).toHaveURL(/\?projet=cpascher/)
  await expect(page.getByRole('dialog')).toBeVisible()
  await expect(page.getByRole('dialog').getByRole('heading', { name: 'CPasCher' })).toBeVisible()

  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).not.toBeVisible()
  await expect(page).not.toHaveURL(/projet=/)
  await expect(trigger).toBeFocused()

  await page.goto('/?projet=heavencube')
  await expect(page.getByRole('dialog').getByRole('heading', { name: 'HeavenCube' })).toBeVisible()
  await page.getByRole('button', { name: 'Fermer la fiche du projet' }).click()
  await expect(page).not.toHaveURL(/projet=/)
  expectNoBrowserErrors()
})

test('respecte et mémorise le thème, puis gère le menu mobile au clavier', async ({ page }) => {
  const expectNoBrowserErrors = monitorBrowserErrors(page)
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await page.evaluate(() => window.localStorage.clear())
  await page.reload()

  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.emulateMedia({ colorScheme: 'light' })
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await page.emulateMedia({ colorScheme: 'dark' })
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.getByLabel('Choisir le thème').selectOption('light')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await page.reload()
  await expect(page.getByLabel('Choisir le thème')).toHaveValue('light')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')

  const menuButton = page.locator('.menu-button')
  await menuButton.click()
  await expect(menuButton).toHaveAttribute('aria-expanded', 'true')
  await expect(page.getByRole('navigation', { name: 'Navigation principale' })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  await expect(menuButton).toBeFocused()
  expectNoBrowserErrors()
})
