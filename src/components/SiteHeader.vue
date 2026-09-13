<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ThemeControl from './ThemeControl.vue'

const menuOpen = ref(false)

const navigation = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Parcours E5', href: '#parcours-e5' },
  { label: 'Veille', href: '#veille' },
  { label: 'Documents', href: '#documents' },
  { label: 'Contact', href: '#contact' },
]

function closeMenu(): void {
  menuOpen.value = false
}

function handleEscape(event: KeyboardEvent): void {
  if (event.key === 'Escape' && menuOpen.value) closeMenu()
}

onMounted(() => document.addEventListener('keydown', handleEscape))
onBeforeUnmount(() => document.removeEventListener('keydown', handleEscape))
</script>

<template>
  <header
    class="site-header"
    @keydown.esc="closeMenu"
  >
    <div class="header-shell">
      <a
        class="site-identity"
        :href="'#accueil'"
        aria-label="Accueil du portfolio de Paul Muller"
      >
        <span
          class="identity-mark"
          aria-hidden="true"
        >PM</span>
        <span>
          <strong>Paul Muller</strong>
          <small>BTS SIO · SLAM</small>
        </span>
      </a>

      <button
        class="menu-button"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="main-navigation"
        @click="menuOpen = !menuOpen"
      >
        <span class="visually-hidden">{{ menuOpen ? 'Fermer' : 'Ouvrir' }} la navigation</span>
        <span aria-hidden="true">{{ menuOpen ? '×' : '☰' }}</span>
      </button>

      <nav
        id="main-navigation"
        class="main-navigation"
        :class="{ 'is-open': menuOpen }"
        aria-label="Navigation principale"
      >
        <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
      </nav>

      <ThemeControl />
    </div>
  </header>
</template>
