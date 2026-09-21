<script lang="ts">
  import SectionHeading from '$lib/components/SectionHeading.svelte'
  import { projects } from '$lib/data/projects'
  import { skills } from '$lib/data/skills'
  import type { Skill } from '$lib/types'

  interface Props {
    onFilter: (technology: string) => void
  }

  let { onFilter }: Props = $props()

  const skillsByCategory: Record<string, Skill[]> = {}
  for (const skill of skills) {
    const categorySkills = skillsByCategory[skill.category] ?? []
    categorySkills.push(skill)
    skillsByCategory[skill.category] = categorySkills
  }
  const groupedSkills = Object.entries(skillsByCategory)

  const linkedTechnologies = new Set(projects.flatMap((project) => project.technologies))
</script>

<section id="competences" class="content-section section-shell" aria-labelledby="skills-title">
  <SectionHeading
    id="skills-title"
    eyebrow="Technologies"
    title="Compétences techniques"
    description="Des technologies utilisées dans différents contextes, sans niveau ni pourcentage de maîtrise artificiel."
  />
  <div class="skills-grid">
    {#each groupedSkills as [category, categorySkills] (category)}
      <article class="skill-group">
        <h3>{category}</h3>
        <ul class="skill-list">
          {#each categorySkills as skill (skill.name)}
            <li>
              {#if linkedTechnologies.has(skill.name)}
                <button
                  type="button"
                  title={`Afficher les projets utilisant ${skill.name}`}
                  onclick={() => onFilter(skill.name)}
                >
                  {skill.name}
                </button>
              {:else}
                <span>{skill.name}</span>
              {/if}
            </li>
          {/each}
        </ul>
      </article>
    {/each}
  </div>
  <p class="section-note">
    Les technologies cliquables renvoient vers les réalisations actuellement documentées.
  </p>
</section>
