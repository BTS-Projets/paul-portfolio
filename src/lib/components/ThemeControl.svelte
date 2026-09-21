<script lang="ts">
  import { onMount } from 'svelte'

  type Theme = 'light' | 'dark'
  type ThemePreference = 'system' | Theme

  const storageKey = 'paul-portfolio-theme'

  let preference = $state<ThemePreference>('system')
  let mediaQuery: MediaQueryList | undefined

  function isThemePreference(value: string | null): value is ThemePreference {
    return value === 'system' || value === 'light' || value === 'dark'
  }

  function applyTheme(): void {
    const systemTheme: Theme = mediaQuery?.matches ? 'dark' : 'light'
    const theme = preference === 'system' ? systemTheme : preference
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
  }

  function updatePreference(event: Event): void {
    const value = (event.currentTarget as HTMLSelectElement).value
    if (!isThemePreference(value)) return

    preference = value
    try {
      window.localStorage.setItem(storageKey, value)
    } catch {
      // Applying the theme does not depend on storage availability.
    }
    applyTheme()
  }

  function handleSystemThemeChange(): void {
    if (preference === 'system') applyTheme()
  }

  onMount(() => {
    try {
      const savedPreference = window.localStorage.getItem(storageKey)
      preference = isThemePreference(savedPreference) ? savedPreference : 'system'
    } catch {
      preference = 'system'
    }

    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', handleSystemThemeChange)
    applyTheme()

    return () => mediaQuery?.removeEventListener('change', handleSystemThemeChange)
  })
</script>

<label class="theme-control">
  <span class="visually-hidden">Thème d’affichage</span>
  <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
    <path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4m0-12.8L17 7M7 17l-1.4 1.4" />
    <circle cx="12" cy="12" r="4" />
  </svg>
  <select value={preference} aria-label="Choisir le thème" onchange={updatePreference}>
    <option value="system">Système</option>
    <option value="light">Clair</option>
    <option value="dark">Sombre</option>
  </select>
</label>
