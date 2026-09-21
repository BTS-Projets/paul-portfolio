<script lang="ts">
  import SectionHeading from '$lib/components/SectionHeading.svelte'
  import { competencies } from '$lib/data/competencies'
  import { projects } from '$lib/data/projects'
  import type { E5CompetencyId, Project } from '$lib/types'

  const e5Projects = projects.filter((project) => project.e5Candidate)

  function getAssociatedProjects(competencyId: E5CompetencyId): Project[] {
    return e5Projects.filter((project) => project.competencyIds.includes(competencyId))
  }
</script>

<section id="parcours-e5" class="content-section section-shell section-wide" aria-labelledby="e5-title">
  <SectionHeading
    id="e5-title"
    eyebrow="Épreuve E5 · U5"
    title="Parcours de professionnalisation"
    description="Support et mise à disposition de services informatiques — suivi des réalisations et des compétences du bloc 1."
  />

  <div class="e5-notice">
    <strong>À propos de ce suivi</strong>
    <p>
      Les associations sont renseignées manuellement dans les données du portfolio. Une case vide ne signifie
      pas qu’une compétence est absente ou non acquise : elle indique seulement qu’aucune association n’a
      encore été validée.
    </p>
  </div>

  <div class="competency-grid">
    {#each competencies as competency (competency.id)}
      {@const associatedProjects = getAssociatedProjects(competency.id)}
      <article id={`competence-${competency.id.replace('.', '-')}`} class="competency-card">
        <div class="competency-title">
          <span>{competency.id}</span>
          <h3>{competency.title}</h3>
        </div>
        <p>{competency.description}</p>
        <details>
          <summary>Voir les composantes</summary>
          <ul>
            {#each competency.criteria as criterion (criterion)}
              <li>{criterion}</li>
            {/each}
          </ul>
        </details>
        <div class="associated-projects">
          <h4>Réalisations associées</h4>
          {#if associatedProjects.length}
            <ul>
              {#each associatedProjects as project (project.id)}
                <li><a href={`#carte-${project.id}`}>{project.title}</a></li>
              {/each}
            </ul>
          {:else}
            <p>Aucune association validée à ce jour.</p>
          {/if}
        </div>
      </article>
    {/each}
  </div>

  <section class="matrix-section" aria-labelledby="matrix-title">
    <div class="matrix-heading">
      <div>
        <p class="eyebrow">Lecture croisée</p>
        <h3 id="matrix-title">Matrice réalisations × compétences</h3>
      </div>
      <span class="matrix-legend"><span aria-hidden="true">✓</span> Association validée dans les données</span
      >
    </div>
    <div
      class="table-scroll"
      role="region"
      aria-label="Matrice E5, faire défiler horizontalement si nécessaire"
    >
      <table class="competency-matrix">
        <caption>
          Cette représentation web facilite la navigation et ne remplace pas le tableau de synthèse officiel
          de l’Éducation nationale.
        </caption>
        <thead>
          <tr>
            <th scope="col">Réalisation</th>
            {#each competencies as competency (competency.id)}
              <th scope="col" title={competency.title}>{competency.id}</th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each e5Projects as project (project.id)}
            <tr>
              <th scope="row"><a href={`#carte-${project.id}`}>{project.title}</a></th>
              {#each competencies as competency (competency.id)}
                <td>
                  {#if project.competencyIds.includes(competency.id)}
                    <span
                      class="matrix-check"
                      role="img"
                      aria-label={`${competency.id} associée à ${project.title}`}>✓</span
                    >
                  {:else}
                    <span class="matrix-empty" aria-label={`${competency.id} non associée à ${project.title}`}
                      >—</span
                    >
                  {/if}
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </section>
</section>
