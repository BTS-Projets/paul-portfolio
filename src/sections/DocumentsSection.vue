<script setup lang="ts">
import SectionHeading from '../components/SectionHeading.vue'
import { documents } from '../data/documents'
</script>

<template>
  <section
    id="documents"
    class="content-section section-shell"
    aria-labelledby="documents-title"
  >
    <SectionHeading
      id="documents-title"
      eyebrow="Ressources"
      title="Documents"
      description="Emplacement des documents explicitement destinés à une publication sur le portfolio."
    />
    <div
      v-if="documents.length"
      class="documents-grid"
    >
      <article
        v-for="document in documents"
        :key="document.id"
        class="document-card"
      >
        <span class="badge">{{ document.type }}</span>
        <h3>{{ document.title }}</h3>
        <p v-if="document.description">
          {{ document.description }}
        </p>
        <a
          class="button button-secondary"
          :href="document.path"
          target="_blank"
        >Ouvrir le document</a>
      </article>
    </div>
    <div
      v-else
      class="empty-state documents-empty"
    >
      <p>
        Aucun document public n’est disponible pour le moment. Le CV, le tableau de synthèse officiel E5 et l’attestation de stage pourront être ajoutés ici.
      </p>
      <small>La matrice web du portfolio ne constitue pas le tableau de synthèse officiel.</small>
    </div>
  </section>
</template>
