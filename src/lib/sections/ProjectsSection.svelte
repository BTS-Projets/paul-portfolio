<script lang="ts">
  import { replaceState } from '$app/navigation'
  import { resolve } from '$app/paths'
  import ProjectCard from '$lib/components/ProjectCard.svelte'
  import ProjectDialog from '$lib/components/ProjectDialog.svelte'
  import SectionHeading from '$lib/components/SectionHeading.svelte'
  import { competencies } from '$lib/data/competencies'
  import { projects } from '$lib/data/projects'
  import type { E5CompetencyId, Project, ProjectCategory } from '$lib/types'
  import { onMount } from 'svelte'

  interface Props {
    technology: string
    onTechnologyChange: (technology: string) => void
  }

  let { technology, onTechnologyChange }: Props = $props()

  let category = $state<'all' | ProjectCategory>('all')
  let competency = $state<'all' | E5CompetencyId>('all')
  let selectedProject = $state<Project | null>(null)
  let projectTrigger: HTMLButtonElement | null = null

  const categories: ReadonlyArray<{ value: 'all' | ProjectCategory; label: string }> = [
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

  const filteredProjects = $derived.by(() =>
    projects.filter((project) => {
      const categoryMatches = category === 'all' || project.category === category
      const technologyMatches = technology === 'all' || project.technologies.includes(technology)
      const competencyMatches = competency === 'all' || project.competencyIds.includes(competency)
      return categoryMatches && technologyMatches && competencyMatches
    }),
  )

  const resultLabel = $derived(
    `${filteredProjects.length} réalisation${filteredProjects.length > 1 ? 's' : ''}`,
  )

  function isCompetencyId(value: string): value is E5CompetencyId {
    return competencies.some((item) => item.id === value)
  }

  function updateCompetency(event: Event): void {
    const value = (event.currentTarget as HTMLSelectElement).value
    competency = isCompetencyId(value) ? value : 'all'
  }

  function updateTechnology(event: Event): void {
    onTechnologyChange((event.currentTarget as HTMLSelectElement).value)
  }

  function resetFilters(): void {
    category = 'all'
    onTechnologyChange('all')
    competency = 'all'
  }

  function setProjectInUrl(projectId: string | null): void {
    const url = new URL(window.location.href)
    if (projectId) url.searchParams.set('projet', projectId)
    else url.searchParams.delete('projet')
    if (url.search) replaceState(resolve(`/?${url.search.slice(1)}${url.hash}`), {})
    else if (url.hash) replaceState(resolve(`/#${url.hash.slice(1)}`), {})
    else replaceState(resolve('/'), {})
  }

  function openProject(project: Project, trigger: HTMLButtonElement): void {
    projectTrigger = trigger
    selectedProject = project
    setProjectInUrl(project.id)
  }

  function closeProject(): void {
    selectedProject = null
    setProjectInUrl(null)

    const trigger = projectTrigger
    projectTrigger = null
    if (trigger?.isConnected) requestAnimationFrame(() => trigger.focus())
  }

  onMount(() => {
    const projectId = new URL(window.location.href).searchParams.get('projet')
    selectedProject = projects.find((project) => project.id === projectId) ?? null
  })
</script>

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
    <div class="filter-tabs" role="group" aria-label="Filtrer les réalisations par catégorie">
      {#each categories as item (item.value)}
        <button
          type="button"
          class:is-active={category === item.value}
          aria-pressed={category === item.value}
          onclick={() => (category = item.value)}
        >
          {item.label}
        </button>
      {/each}
    </div>
    <div class="select-filters">
      <label>
        <span>Technologie</span>
        <select value={technology} aria-label="Technologie" onchange={updateTechnology}>
          <option value="all">Toutes</option>
          {#each technologies as item (item)}
            <option value={item}>{item}</option>
          {/each}
        </select>
      </label>
      <label>
        <span>Compétence E5</span>
        <select value={competency} aria-label="Compétence E5" onchange={updateCompetency}>
          <option value="all">Toutes</option>
          {#each competencies as item (item.id)}
            <option value={item.id}>{item.id} — {item.title}</option>
          {/each}
        </select>
      </label>
    </div>
  </div>

  <div class="results-heading">
    <p aria-live="polite">{resultLabel}</p>
    {#if category !== 'all' || technology !== 'all' || competency !== 'all'}
      <button class="text-button" type="button" onclick={resetFilters}>Réinitialiser les filtres</button>
    {/if}
  </div>

  {#if filteredProjects.length}
    <div class="projects-grid">
      {#each filteredProjects as project (project.id)}
        <ProjectCard {project} onOpen={openProject} />
      {/each}
    </div>
  {:else}
    <div class="empty-state">
      {#if category === 'bts2'}
        <p>Les réalisations de deuxième année seront ajoutées progressivement.</p>
      {:else}
        <p>Aucune réalisation ne correspond à ces filtres.</p>
      {/if}
      <button class="button button-secondary" type="button" onclick={resetFilters}>
        Afficher toutes les réalisations
      </button>
    </div>
  {/if}

  <aside class="contribution-callout">
    <div>
      <p class="eyebrow">Open source</p>
      <h3>Contributions externes</h3>
    </div>
    <p>
      Cette zone est prête à documenter des contributions précises en distinguant clairement le projet
      d’origine, le rôle de contributeur et le travail effectivement réalisé.
    </p>
  </aside>

  <ProjectDialog project={selectedProject} onClose={closeProject} />
</section>
