import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

export type ThemePreference = 'system' | 'light' | 'dark'

const STORAGE_KEY = 'paul-portfolio-theme'
const preference = ref<ThemePreference>('system')
let mediaQuery: MediaQueryList | undefined

function isThemePreference(value: string | null): value is ThemePreference {
  return value === 'system' || value === 'light' || value === 'dark'
}

function applyTheme(): void {
  const systemTheme = mediaQuery?.matches ? 'dark' : 'light'
  document.documentElement.dataset.theme = preference.value === 'system' ? systemTheme : preference.value
  document.documentElement.style.colorScheme = document.documentElement.dataset.theme
}

function handleSystemThemeChange(): void {
  if (preference.value === 'system') applyTheme()
}

export function useTheme() {
  onMounted(() => {
    const savedPreference = window.localStorage.getItem(STORAGE_KEY)
    preference.value = isThemePreference(savedPreference) ? savedPreference : 'system'
    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', handleSystemThemeChange)
    applyTheme()
  })

  onBeforeUnmount(() => mediaQuery?.removeEventListener('change', handleSystemThemeChange))

  watch(preference, (value) => {
    window.localStorage.setItem(STORAGE_KEY, value)
    applyTheme()
  })

  return { preference }
}
