<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { competencies } from '../data/competencies'
import type { Project } from '../types'

const props = defineProps<{ project: Project | null }>()
const emit = defineEmits<{ close: [] }>()
const dialog = ref<HTMLDialogElement | null>(null)

const associatedCompetencies = computed(() =>
  competencies.filter((competency) => props.project?.competencyIds.includes(competency.id)),
)

watch(
  () => props.project,
  async (project) => {
    await nextTick()
    if (project && dialog.value && !dialog.value.open) dialog.value.showModal()
  },
)

function closeDialog(): void {
  dialog.value?.close()
}

function handleClose(): void {
  const projectId = props.project?.id
  emit('close')
  if (projectId) {
    requestAnimationFrame(() => {
      document.querySelector<HTMLElement>(`[data-project-trigger="${projectId}"]`)?.focus()
    })
  }
}
</script>

<template>
  <dialog
    ref="dialog"
    class="project-dialog"
    aria-labelledby="project-dialog-title"
    @close="handleClose"
  >
    <article
      v-if="project"
      class="dialog-content"
    >
      <header class="dialog-header">
        <div>
          <p class="eyebrow">
            {{ project.origin }} · {{ project.period }}
          </p>
          <h2 id="project-dialog-title">
            {{ project.title }}
          </h2>
          <p class="dialog-summary">
            {{ project.summary }}
          </p>
        </div>
        <button
          class="icon-button"
          type="button"
          aria-label="Fermer la fiche du projet"
          @click="closeDialog"
        >
          ×
        </button>
      </header>

      <div class="dialog-grid">
        <section v-if="project.details?.context">
          <h3>Contexte</h3>
          <p>{{ project.details.context }}</p>
        </section>
        <section v-if="project.details?.objective">
          <h3>Objectif</h3>
          <p>{{ project.details.objective }}</p>
        </section>
        <section v-if="project.details?.need">
          <h3>Besoin traité</h3>
          <p>{{ project.details.need }}</p>
        </section>
        <section v-if="project.details?.work?.length">
          <h3>Travail réalisé</h3>
          <ul>
            <li
              v-for="item in project.details.work"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </section>
        <section v-if="project.details?.contribution?.length">
          <h3>Contribution personnelle</h3>
          <ul>
            <li
              v-for="item in project.details.contribution"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </section>
        <section v-if="project.details?.methods?.length">
          <h3>Méthodes et outils</h3>
          <ul>
            <li
              v-for="item in project.details.methods"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </section>
        <section v-if="project.details?.constraints?.length">
          <h3>Contraintes</h3>
          <ul>
            <li
              v-for="item in project.details.constraints"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </section>
        <section v-if="project.details?.result">
          <h3>Résultat</h3>
          <p>{{ project.details.result }}</p>
        </section>
        <section v-if="project.details?.lessons?.length">
          <h3>Retour d’expérience</h3>
          <ul>
            <li
              v-for="item in project.details.lessons"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </section>
      </div>

      <section class="dialog-section">
        <h3>Technologies</h3>
        <ul class="tag-list">
          <li
            v-for="technology in project.technologies"
            :key="technology"
          >
            {{ technology }}
          </li>
        </ul>
      </section>

      <section class="dialog-section">
        <h3>Compétences E5 associées</h3>
        <ul
          v-if="associatedCompetencies.length"
          class="competency-links"
        >
          <li
            v-for="competency in associatedCompetencies"
            :key="competency.id"
          >
            <a
              :href="`#competence-${competency.id.replace('.', '-')}`"
              @click="closeDialog"
            >
              {{ competency.id }} — {{ competency.title }}
            </a>
          </li>
        </ul>
        <p
          v-else
          class="empty-inline"
        >
          Aucune association E5 n’a encore été validée pour cette réalisation.
        </p>
      </section>

      <section
        v-if="!project.media?.length && project.id === 'distributeur-couverts'"
        class="media-placeholder"
      >
        <h3>Galerie</h3>
        <p>Les captures autorisées pourront être ajoutées ici après sélection des fichiers à publier.</p>
      </section>

      <footer class="dialog-actions">
        <a
          v-for="link in project.links"
          :key="link.url"
          class="button button-secondary"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.label }} <span aria-hidden="true">↗</span>
        </a>
        <button
          class="button button-primary"
          type="button"
          @click="closeDialog"
        >
          Fermer
        </button>
      </footer>
    </article>
  </dialog>
</template>
