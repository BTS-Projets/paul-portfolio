<script lang="ts">
  import { projectCategoryLabels } from '$lib/data/projects'
  import type { Project } from '$lib/types'

  interface Props {
    project: Project
    onOpen: (project: Project, trigger: HTMLButtonElement) => void
  }

  let { project, onOpen }: Props = $props()
</script>

<article id={`carte-${project.id}`} class:project-card={true} class:is-learning={project.isLearningExercise}>
  <div class="card-meta">
    <span class="badge badge-accent">{projectCategoryLabels[project.category]}</span>
    <span>{project.type}</span>
  </div>
  <h3>{project.title}</h3>
  {#if project.repositoryName}
    <p class="repository-name">{project.repositoryName}</p>
  {/if}
  <p>{project.summary}</p>
  {#if project.isLearningExercise}
    <p class="learning-note">Exercice / TP d’apprentissage</p>
  {/if}
  <ul class="tag-list" aria-label="Technologies">
    {#each project.technologies as technology (technology)}
      <li>{technology}</li>
    {/each}
  </ul>
  <div class="card-footer">
    <span class="card-period">{project.period}</span>
    <button
      class="button-link"
      type="button"
      data-project-trigger={project.id}
      onclick={(event) => onOpen(project, event.currentTarget)}
    >
      Voir le projet <span aria-hidden="true">→</span>
    </button>
  </div>
</article>
