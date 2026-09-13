<script setup lang="ts">
import { projectCategoryLabels } from '../data/projects'
import type { Project } from '../types'

defineProps<{ project: Project }>()
defineEmits<{ open: [project: Project] }>()
</script>

<template>
  <article
    :id="`carte-${project.id}`"
    class="project-card"
    :class="{ 'is-learning': project.isLearningExercise }"
  >
    <div class="card-meta">
      <span class="badge badge-accent">{{ projectCategoryLabels[project.category] }}</span>
      <span>{{ project.type }}</span>
    </div>
    <h3>{{ project.title }}</h3>
    <p
      v-if="project.repositoryName"
      class="repository-name"
    >
      {{ project.repositoryName }}
    </p>
    <p>{{ project.summary }}</p>
    <p
      v-if="project.isLearningExercise"
      class="learning-note"
    >
      Exercice / TP d’apprentissage
    </p>
    <ul
      class="tag-list"
      aria-label="Technologies"
    >
      <li
        v-for="technology in project.technologies"
        :key="technology"
      >
        {{ technology }}
      </li>
    </ul>
    <div class="card-footer">
      <span class="card-period">{{ project.period }}</span>
      <button
        class="button-link"
        type="button"
        :data-project-trigger="project.id"
        @click="$emit('open', project)"
      >
        Voir le projet <span aria-hidden="true">→</span>
      </button>
    </div>
  </article>
</template>
