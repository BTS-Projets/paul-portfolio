import { expect, test, type Page } from '@playwright/test'

function monitorBrowserErrors(page: Page): () => void {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })

  return () => expect(errors).toEqual([])
}

test('charge le portfolio et permet la navigation depuis la sidebar', async ({ page, request }) => {
  const response = await request.get('/')
  expect(response.ok()).toBe(true)
  const html = await response.text()
  expect(html).toContain('Paul Muller')
  expect(html).toContain('Portfolio professionnel de Paul Muller')

  const expectNoBrowserErrors = monitorBrowserErrors(page)
  await page.goto('/')
  await expect(page).toHaveTitle('Paul Muller — Portfolio | BTS SIO SLAM')
  await expect(page.getByRole('heading', { level: 1, name: 'Paul Muller' })).toBeVisible()

  const sidebar = page.locator('.site-sidebar')
  await expect(sidebar).toBeVisible()
  await sidebar.getByRole('link', { name: 'Parcours', exact: true }).click()
  await expect(page).toHaveURL(/#parcours$/)
  await expect(page.getByRole('heading', { name: 'Parcours' })).toBeInViewport()
  await expect(sidebar.getByRole('link', { name: 'Parcours', exact: true })).toHaveAttribute(
    'aria-current',
    'location',
  )

  const projectsLink = sidebar.getByRole('link', { name: /Réalisations BTS/ })
  await expect(projectsLink).toHaveAttribute('href', 'https://bts.paulmuller.dev/')
  await expect(projectsLink).toHaveAttribute('target', '_blank')
  expectNoBrowserErrors()
})

test('expose le tableau de synthèse officiel avec ses actions', async ({ page }) => {
  await page.goto('/#tableau-synthese')

  const viewer = page.getByTitle('Tableau de synthèse officiel E5 de Paul Muller')
  await expect(viewer).toBeVisible()
  await expect(viewer).toHaveAttribute('data', '/documents/tableau-synthese-e5.pdf')

  const fullScreenLink = page.getByRole('link', { name: /Ouvrir en plein écran/ })
  await expect(fullScreenLink).toHaveAttribute('href', '/documents/tableau-synthese-e5.pdf')
  await expect(fullScreenLink).toHaveAttribute('target', '_blank')

  const downloadLink = page.getByRole('link', { name: 'Télécharger le PDF' })
  await expect(downloadLink).toHaveAttribute('href', '/documents/tableau-synthese-e5.pdf')
  await expect(downloadLink).toHaveAttribute('download', 'tableau-synthese-e5.pdf')
})

test('gère le menu mobile et la navigation critique au clavier', async ({ page }) => {
  const expectNoBrowserErrors = monitorBrowserErrors(page)
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  await page.keyboard.press('Tab')
  const skipLink = page.getByRole('link', { name: 'Aller au contenu principal' })
  await expect(skipLink).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('#contenu')).toBeFocused()

  const menuButton = page.getByRole('button', { name: 'Ouvrir la navigation' })
  await menuButton.focus()
  await page.keyboard.press('Enter')
  await expect(menuButton).toHaveAttribute('aria-expanded', 'true')

  const drawer = page.getByRole('dialog', { name: 'Portfolio' })
  await expect(drawer).toBeVisible()
  await expect(drawer.getByRole('link', { name: 'Accueil', exact: true })).toBeFocused()
  await expect(drawer.getByRole('link', { name: /Réalisations BTS/ })).toHaveAttribute(
    'href',
    'https://bts.paulmuller.dev/',
  )

  await page.keyboard.press('Escape')
  await expect(drawer).not.toBeVisible()
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  await expect(menuButton).toBeFocused()

  await page.keyboard.press('Enter')
  const parcoursLink = drawer.getByRole('link', { name: 'Parcours', exact: true })
  await parcoursLink.focus()
  await page.keyboard.press('Enter')
  await expect(drawer).not.toBeVisible()
  await expect(page).toHaveURL(/#parcours$/)
  expectNoBrowserErrors()
})
