<script lang="ts">
  import SectionHeader from '$lib/components/sectionHeader.svelte'
  import { skills } from '$lib/data/competences'
  import type { Skill } from '$lib/types/models'

  const skillsByCategory: Record<string, Skill[]> = {}
  for (const skill of skills) {
    const categorySkills = skillsByCategory[skill.category] ?? []
    categorySkills.push(skill)
    skillsByCategory[skill.category] = categorySkills
  }
  const groupedSkills = Object.entries(skillsByCategory)
</script>

<section id="competences" class="content-section section-shell" aria-labelledby="skills-title">
  <SectionHeader id="skills-title" title="Compétences techniques" />
  <div class="skills-grid">
    {#each groupedSkills as [category, categorySkills] (category)}
      <article class="skill-group">
        <h3>{category}</h3>
        <ul class="skill-list">
          {#each categorySkills as skill (skill.name)}
            <li>{skill.name}</li>
          {/each}
        </ul>
      </article>
    {/each}
  </div>
</section>
