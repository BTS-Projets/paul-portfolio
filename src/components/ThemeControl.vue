<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

const { preference } = useTheme()
</script>

<template>
  <label class="theme-control">
    <span class="visually-hidden">Thème d’affichage</span>
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="18"
      height="18"
    >
      <path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4m0-12.8L17 7M7 17l-1.4 1.4" />
      <circle
        cx="12"
        cy="12"
        r="4"
      />
    </svg>
    <select
      v-model="preference"
      aria-label="Choisir le thème"
    >
      <option value="system">Système</option>
      <option value="light">Clair</option>
      <option value="dark">Sombre</option>
    </select>
  </label>
</template>
