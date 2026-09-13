<script setup lang="ts">
import SectionHeading from '../components/SectionHeading.vue'
import { profile } from '../data/profile'
</script>

<template>
  <section
    id="contact"
    class="content-section section-shell"
    aria-labelledby="contact-title"
  >
    <div class="contact-panel">
      <SectionHeading
        id="contact-title"
        eyebrow="Échange"
        title="Contact"
        description="Pour consulter mon travail ou me contacter dans un cadre professionnel."
      />
      <div class="contact-links">
        <a
          v-if="profile.email"
          class="button button-primary"
          :href="`mailto:${profile.email}`"
        >
          {{ profile.email }}
        </a>
        <a
          v-for="link in profile.socialLinks"
          :key="link.url"
          class="button button-secondary"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.label }} <span aria-hidden="true">↗</span>
        </a>
      </div>
      <p
        v-if="!profile.professionalGoal"
        class="contact-note"
      >
        Projet professionnel après le BTS : <span>à définir.</span>
      </p>
    </div>
  </section>
</template>
