<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import ProjectDialog from '../components/ProjectDialog.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { competencies } from '../data/competencies'
import { projects } from '../data/projects'
import type { E5CompetencyId, Project, ProjectCategory } from '../types'

const technology = defineModel<string>('technology', { default: 'all' })
const category = ref<'all' | ProjectCategory>('all')
const competency = ref<'all' | E5CompetencyId>('all')
const selectedProject = ref<Project | null>(null)

const categories: Array<{ value: 'all' | ProjectCategory; label: string }> = [
  { value: 'all', label: 'Tous' },
  { value: 'bts1', label: 'BTS 1' },
  { value: 'bts2', label: 'BTS 2' },
  { value: 'stage', label: 'Stage' },
  { value: 'personal', label: 'Personnel' },
  { value: 'prior', label: 'Projet antérieur' },
]

const technologies = [...new Set(projects.flatMap((project) => project.technologies))].sort((a, b) =>
  a.localeCompare(b, 'fr'),
)

const filteredProjects = computed(() =>
  projects.filter((project) => {
    const categoryMatches = category.value === 'all' || project.category === category.value
    const technologyMatches = technology.value === 'all' || project.technologies.includes(technology.value)
    const competencyMatches = competency.value === 'all' || project.competencyIds.includes(competency.value)
    return categoryMatches && technologyMatches && competencyMatches
  }),
)

const resultLabel = computed(() => {
  const count = filteredProjects.value.length
  return `${count} réalisation${count > 1 ? 's' : ''}`
})

function resetFilters(): void {
  category.value = 'all'
  technology.value = 'all'
  competency.value = 'all'
}

function openProject(project: Project): void {
  selectedProject.value = project
  const url = new URL(window.location.href)
  url.searchParams.set('projet', project.id)
  window.history.replaceState({}, '', url)
}

function closeProject(): void {
  selectedProject.value = null
  const url = new URL(window.location.href)
  url.searchParams.delete('projet')
  window.history.replaceState({}, '', url)
}

onMounted(() => {
  const projectId = new URL(window.location.href).searchParams.get('projet')
  selectedProject.value = projects.find((project) => project.id === projectId) ?? null
})
</script>

<template>
  <section
    id="realisations"
    class="content-section section-shell section-wide"
    aria-labelledby="projects-title"
  >
    <SectionHeading
      id="projects-title"
      eyebrow="Sélection"
      title="Réalisations"
      description="Projets de formation, expérience professionnelle et projets personnels sélectionnés."
    />

    <div class="project-toolbar">
      <div
        class="filter-tabs"
        role="group"
        aria-label="Filtrer les réalisations par catégorie"
      >
        <button
          v-for="item in categories"
          :key="item.value"
          type="button"
          :class="{ 'is-active': category === item.value }"
          :aria-pressed="category === item.value"
          @click="category = item.value"
        >
          {{ item.label }}
        </button>
      </div>
      <div class="select-filters">
        <label>
          <span>Technologie</span>
          <select v-model="technology">
            <option value="all">Toutes</option>
            <option
              v-for="item in technologies"
              :key="item"
              :value="item"
            >{{ item }}</option>
          </select>
        </label>
        <label>
          <span>Compétence E5</span>
          <select v-model="competency">
            <option value="all">Toutes</option>
            <option
              v-for="item in competencies"
              :key="item.id"
              :value="item.id"
            >
              {{ item.id }} — {{ item.title }}
            </option>
          </select>
        </label>
      </div>
    </div>

    <div class="results-heading">
      <p aria-live="polite">
        {{ resultLabel }}
      </p>
      <button
        v-if="category !== 'all' || technology !== 'all' || competency !== 'all'"
        class="text-button"
        type="button"
        @click="resetFilters"
      >
        Réinitialiser les filtres
      </button>
    </div>

    <div
      v-if="filteredProjects.length"
      class="projects-grid"
    >
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
        @open="openProject"
      />
    </div>
    <div
      v-else
      class="empty-state"
    >
      <p v-if="category === 'bts2'">
        Les réalisations de deuxième année seront ajoutées progressivement.
      </p>
      <p v-else>
        Aucune réalisation ne correspond à ces filtres.
      </p>
      <button
        class="button button-secondary"
        type="button"
        @click="resetFilters"
      >
        Afficher toutes les réalisations
      </button>
    </div>

    <aside class="contribution-callout">
      <div>
        <p class="eyebrow">
          Open source
        </p>
        <h3>Contributions externes</h3>
      </div>
      <p>
        Cette zone est prête à documenter des contributions précises en distinguant clairement le projet d’origine, le rôle de contributeur et le travail effectivement réalisé.
      </p>
    </aside>

    <ProjectDialog
      :project="selectedProject"
      @close="closeProject"
    />
  </section>
</template>
