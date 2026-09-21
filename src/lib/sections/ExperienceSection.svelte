<script lang="ts">
  import SectionHeading from '$lib/components/SectionHeading.svelte'
  import { experiences } from '$lib/data/experiences'
</script>

<section id="experience" class="content-section section-shell" aria-labelledby="experience-title">
  <SectionHeading
    id="experience-title"
    eyebrow="Professionnalisation"
    title="Expérience professionnelle"
    description="Une synthèse publique centrée sur mon apprentissage et ma contribution, sans donnée interne."
  />
  {#each experiences as experience (experience.id)}
    <article class="experience-card">
      <header class="experience-header">
        <div>
          <p class="eyebrow">{experience.period} · {experience.duration}</p>
          <h3>{experience.title}</h3>
          <p class="experience-organization">{experience.organization} · {experience.location}</p>
        </div>
        <span class="badge">Stage</span>
      </header>
      {#if experience.context}<p class="meta-line">{experience.context}</p>{/if}
      <p class="experience-summary">{experience.summary}</p>
      <div class="experience-layout">
        <div>
          <h4>Activités et découvertes</h4>
          <ul class="check-list">
            {#each experience.activities as activity (activity)}
              <li>{activity}</li>
            {/each}
          </ul>
        </div>
        <aside>
          <h4>Technologies et outils rencontrés</h4>
          <ul class="tag-list">
            {#each experience.technologies as technology (technology)}
              <li>{technology}</li>
            {/each}
          </ul>
          {#if experience.confidentialityNote}
            <p class="confidentiality-note">
              <strong>Confidentialité</strong><br />{experience.confidentialityNote}
            </p>
          {/if}
        </aside>
      </div>
    </article>
  {/each}
</section>
