<script setup lang="ts">
import { computed } from 'vue'
import SectionHeading from '../components/SectionHeading.vue'
import { competencies } from '../data/competencies'
import { projects } from '../data/projects'
import type { E5CompetencyId } from '../types'

const e5Projects = projects.filter((project) => project.e5Candidate)
const associatedProjects = computed(() =>
  Object.fromEntries(
    competencies.map((competency) => [
      competency.id,
      e5Projects.filter((project) => project.competencyIds.includes(competency.id)),
    ]),
  ) as Record<E5CompetencyId, typeof e5Projects>,
)
</script>

<template>
  <section
    id="parcours-e5"
    class="content-section section-shell section-wide"
    aria-labelledby="e5-title"
  >
    <SectionHeading
      id="e5-title"
      eyebrow="Épreuve E5 · U5"
      title="Parcours de professionnalisation"
      description="Support et mise à disposition de services informatiques — suivi des réalisations et des compétences du bloc 1."
    />

    <div class="e5-notice">
      <strong>À propos de ce suivi</strong>
      <p>
        Les associations sont renseignées manuellement dans les données du portfolio. Une case vide ne signifie pas qu’une compétence est absente ou non acquise : elle indique seulement qu’aucune association n’a encore été validée.
      </p>
    </div>

    <div class="competency-grid">
      <article
        v-for="competency in competencies"
        :id="`competence-${competency.id.replace('.', '-')}`"
        :key="competency.id"
        class="competency-card"
      >
        <div class="competency-title">
          <span>{{ competency.id }}</span>
          <h3>{{ competency.title }}</h3>
        </div>
        <p>{{ competency.description }}</p>
        <details>
          <summary>Voir les composantes</summary>
          <ul>
            <li
              v-for="criterion in competency.criteria"
              :key="criterion"
            >
              {{ criterion }}
            </li>
          </ul>
        </details>
        <div class="associated-projects">
          <h4>Réalisations associées</h4>
          <ul v-if="associatedProjects[competency.id].length">
            <li
              v-for="project in associatedProjects[competency.id]"
              :key="project.id"
            >
              <a :href="`#carte-${project.id}`">{{ project.title }}</a>
            </li>
          </ul>
          <p v-else>
            Aucune association validée à ce jour.
          </p>
        </div>
      </article>
    </div>

    <section
      class="matrix-section"
      aria-labelledby="matrix-title"
    >
      <div class="matrix-heading">
        <div>
          <p class="eyebrow">
            Lecture croisée
          </p>
          <h3 id="matrix-title">
            Matrice réalisations × compétences
          </h3>
        </div>
        <span class="matrix-legend"><span aria-hidden="true">✓</span> Association validée dans les données</span>
      </div>
      <div
        class="table-scroll"
        tabindex="0"
        role="region"
        aria-label="Matrice E5, faire défiler horizontalement si nécessaire"
      >
        <table class="competency-matrix">
          <caption>
            Cette représentation web facilite la navigation et ne remplace pas le tableau de synthèse officiel de l’Éducation nationale.
          </caption>
          <thead>
            <tr>
              <th scope="col">
                Réalisation
              </th>
              <th
                v-for="competency in competencies"
                :key="competency.id"
                scope="col"
                :title="competency.title"
              >
                {{ competency.id }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="project in e5Projects"
              :key="project.id"
            >
              <th scope="row">
                <a :href="`#carte-${project.id}`">{{ project.title }}</a>
              </th>
              <td
                v-for="competency in competencies"
                :key="competency.id"
              >
                <span
                  v-if="project.competencyIds.includes(competency.id)"
                  class="matrix-check"
                  role="img"
                  :aria-label="`${competency.id} associée à ${project.title}`"
                >✓</span>
                <span
                  v-else
                  class="matrix-empty"
                  :aria-label="`${competency.id} non associée à ${project.title}`"
                >—</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </section>
</template>
