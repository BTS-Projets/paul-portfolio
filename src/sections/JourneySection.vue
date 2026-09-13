<script setup lang="ts">
import SectionHeading from '../components/SectionHeading.vue'
import { education } from '../data/education'
</script>

<template>
  <section
    id="parcours"
    class="content-section section-shell"
    aria-labelledby="journey-title"
  >
    <SectionHeading
      id="journey-title"
      eyebrow="Formation"
      title="Parcours"
      description="Une chronologie factuelle de ma formation, prévue pour accueillir les diplômes et certifications futurs."
    />
    <ol class="timeline">
      <li
        v-for="item in education"
        :key="item.id"
        class="timeline-item"
      >
        <div class="timeline-period">
          {{ item.period }}
        </div>
        <div class="timeline-card">
          <h3>{{ item.title }}</h3>
          <p
            v-if="item.institution"
            class="meta-line"
          >
            {{ item.institution }}
          </p>
          <p v-if="item.description">
            {{ item.description }}
          </p>
          <a
            v-if="item.relatedProjectId"
            :href="`#carte-${item.relatedProjectId}`"
            class="text-link"
          >
            Voir le projet associé
          </a>
        </div>
      </li>
    </ol>
  </section>
</template>
