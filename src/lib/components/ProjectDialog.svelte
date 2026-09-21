<script lang="ts">
  import { competencies } from '$lib/data/competencies'
  import type { Project } from '$lib/types'

  interface Props {
    project: Project | null
    onClose: () => void
  }

  let { project, onClose }: Props = $props()
  let dialog: HTMLDialogElement | undefined

  const associatedCompetencies = $derived(
    competencies.filter((competency) => project?.competencyIds.includes(competency.id)),
  )

  $effect(() => {
    if (project && dialog && !dialog.open) dialog.showModal()
  })

  function closeDialog(): void {
    dialog?.close()
  }
</script>

<dialog bind:this={dialog} class="project-dialog" aria-labelledby="project-dialog-title" onclose={onClose}>
  {#if project}
    <article class="dialog-content">
      <header class="dialog-header">
        <div>
          <p class="eyebrow">{project.origin} · {project.period}</p>
          <h2 id="project-dialog-title">{project.title}</h2>
          <p class="dialog-summary">{project.summary}</p>
        </div>
        <button
          class="icon-button"
          type="button"
          aria-label="Fermer la fiche du projet"
          onclick={closeDialog}
        >
          ×
        </button>
      </header>

      <div class="dialog-grid">
        {#if project.details?.context}
          <section>
            <h3>Contexte</h3>
            <p>{project.details.context}</p>
          </section>
        {/if}
        {#if project.details?.objective}
          <section>
            <h3>Objectif</h3>
            <p>{project.details.objective}</p>
          </section>
        {/if}
        {#if project.details?.need}
          <section>
            <h3>Besoin traité</h3>
            <p>{project.details.need}</p>
          </section>
        {/if}
        {#if project.details?.work?.length}
          <section>
            <h3>Travail réalisé</h3>
            <ul>
              {#each project.details.work as item (item)}
                <li>{item}</li>
              {/each}
            </ul>
          </section>
        {/if}
        {#if project.details?.contribution?.length}
          <section>
            <h3>Contribution personnelle</h3>
            <ul>
              {#each project.details.contribution as item (item)}
                <li>{item}</li>
              {/each}
            </ul>
          </section>
        {/if}
        {#if project.details?.methods?.length}
          <section>
            <h3>Méthodes et outils</h3>
            <ul>
              {#each project.details.methods as item (item)}
                <li>{item}</li>
              {/each}
            </ul>
          </section>
        {/if}
        {#if project.details?.constraints?.length}
          <section>
            <h3>Contraintes</h3>
            <ul>
              {#each project.details.constraints as item (item)}
                <li>{item}</li>
              {/each}
            </ul>
          </section>
        {/if}
        {#if project.details?.result}
          <section>
            <h3>Résultat</h3>
            <p>{project.details.result}</p>
          </section>
        {/if}
        {#if project.details?.lessons?.length}
          <section>
            <h3>Retour d’expérience</h3>
            <ul>
              {#each project.details.lessons as item (item)}
                <li>{item}</li>
              {/each}
            </ul>
          </section>
        {/if}
      </div>

      <section class="dialog-section">
        <h3>Technologies</h3>
        <ul class="tag-list">
          {#each project.technologies as technology (technology)}
            <li>{technology}</li>
          {/each}
        </ul>
      </section>

      <section class="dialog-section">
        <h3>Compétences E5 associées</h3>
        {#if associatedCompetencies.length}
          <ul class="competency-links">
            {#each associatedCompetencies as competency (competency.id)}
              <li>
                <a href={`#competence-${competency.id.replace('.', '-')}`} onclick={closeDialog}>
                  {competency.id} — {competency.title}
                </a>
              </li>
            {/each}
          </ul>
        {:else}
          <p class="empty-inline">Aucune association E5 n’a encore été validée pour cette réalisation.</p>
        {/if}
      </section>

      {#if !project.media?.length && project.id === 'distributeur-couverts'}
        <section class="media-placeholder">
          <h3>Galerie</h3>
          <p>Les captures autorisées pourront être ajoutées ici après sélection des fichiers à publier.</p>
        </section>
      {/if}

      <footer class="dialog-actions">
        {#each project.links as link (link.url)}
          <a
            class="button button-secondary"
            href={link.url}
            target="_blank"
            rel="external noopener noreferrer"
          >
            {link.label} <span aria-hidden="true">↗</span>
          </a>
        {/each}
        <button class="button button-primary" type="button" onclick={closeDialog}>Fermer</button>
      </footer>
    </article>
  {/if}
</dialog>
