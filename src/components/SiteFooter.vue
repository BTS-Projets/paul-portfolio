<script setup lang="ts">
import { profile } from '../data/profile'
</script>

<template>
  <footer class="site-footer">
    <div class="footer-shell">
      <div>
        <strong>{{ profile.name }}</strong>
        <p>Portfolio BTS SIO option SLAM · 2025 — 2027</p>
      </div>
      <div class="footer-links">
        <a :href="'#accueil'">Retour en haut</a>
        <a
          href="https://github.com/NoltoxGit"
          target="_blank"
          rel="noopener noreferrer"
        >GitHub</a>
      </div>
    </div>
  </footer>
</template>
