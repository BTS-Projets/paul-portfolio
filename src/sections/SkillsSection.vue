<script setup lang="ts">
import { computed } from 'vue'
import SectionHeading from '../components/SectionHeading.vue'
import { projects } from '../data/projects'
import { skills } from '../data/skills'

defineEmits<{ filter: [technology: string] }>()

const groupedSkills = computed(() => {
  const groups = new Map<string, typeof skills>()
  for (const skill of skills) {
    const group = groups.get(skill.category) ?? []
    group.push(skill)
    groups.set(skill.category, group)
  }
  return groups
})

const linkedTechnologies = new Set(projects.flatMap((project) => project.technologies))
</script>

<template>
  <section
    id="competences"
    class="content-section section-shell"
    aria-labelledby="skills-title"
  >
    <SectionHeading
      id="skills-title"
      eyebrow="Technologies"
      title="Compétences techniques"
      description="Des technologies utilisées dans différents contextes, sans niveau ni pourcentage de maîtrise artificiel."
    />
    <div class="skills-grid">
      <article
        v-for="[category, categorySkills] in groupedSkills"
        :key="category"
        class="skill-group"
      >
        <h3>{{ category }}</h3>
        <ul class="skill-list">
          <li
            v-for="skill in categorySkills"
            :key="skill.name"
          >
            <button
              v-if="linkedTechnologies.has(skill.name)"
              type="button"
              :title="`Afficher les projets utilisant ${skill.name}`"
              @click="$emit('filter', skill.name)"
            >
              {{ skill.name }}
            </button>
            <span v-else>{{ skill.name }}</span>
          </li>
        </ul>
      </article>
    </div>
    <p class="section-note">
      Les technologies cliquables renvoient vers les réalisations actuellement documentées.
    </p>
  </section>
</template>
