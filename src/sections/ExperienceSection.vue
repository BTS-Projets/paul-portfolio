<script setup lang="ts">
import SectionHeading from '../components/SectionHeading.vue'
import { experiences } from '../data/experiences'
</script>

<template>
  <section
    id="experience"
    class="content-section section-shell"
    aria-labelledby="experience-title"
  >
    <SectionHeading
      id="experience-title"
      eyebrow="Professionnalisation"
      title="Expérience professionnelle"
      description="Une synthèse publique centrée sur mon apprentissage et ma contribution, sans donnée interne."
    />
    <article
      v-for="experience in experiences"
      :key="experience.id"
      class="experience-card"
    >
      <header class="experience-header">
        <div>
          <p class="eyebrow">
            {{ experience.period }} · {{ experience.duration }}
          </p>
          <h3>{{ experience.title }}</h3>
          <p class="experience-organization">
            {{ experience.organization }} · {{ experience.location }}
          </p>
        </div>
        <span class="badge">Stage</span>
      </header>
      <p
        v-if="experience.context"
        class="meta-line"
      >
        {{ experience.context }}
      </p>
      <p class="experience-summary">
        {{ experience.summary }}
      </p>
      <div class="experience-layout">
        <div>
          <h4>Activités et découvertes</h4>
          <ul class="check-list">
            <li
              v-for="activity in experience.activities"
              :key="activity"
            >
              {{ activity }}
            </li>
          </ul>
        </div>
        <aside>
          <h4>Technologies et outils rencontrés</h4>
          <ul class="tag-list">
            <li
              v-for="technology in experience.technologies"
              :key="technology"
            >
              {{ technology }}
            </li>
          </ul>
          <p
            v-if="experience.confidentialityNote"
            class="confidentiality-note"
          >
            <strong>Confidentialité</strong><br>{{ experience.confidentialityNote }}
          </p>
        </aside>
      </div>
    </article>
  </section>
</template>
