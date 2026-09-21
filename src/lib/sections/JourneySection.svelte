<script lang="ts">
  import SectionHeading from '$lib/components/SectionHeading.svelte'
  import { education } from '$lib/data/education'
</script>

<section id="parcours" class="content-section section-shell" aria-labelledby="journey-title">
  <SectionHeading
    id="journey-title"
    eyebrow="Formation"
    title="Parcours"
    description="Une chronologie factuelle de ma formation, prévue pour accueillir les diplômes et certifications futurs."
  />
  <ol class="timeline">
    {#each education as item (item.id)}
      <li class="timeline-item">
        <div class="timeline-period">{item.period}</div>
        <div class="timeline-card">
          <h3>{item.title}</h3>
          {#if item.institution}<p class="meta-line">{item.institution}</p>{/if}
          {#if item.description}<p>{item.description}</p>{/if}
          {#if item.relatedProjectId}
            <a href={`#carte-${item.relatedProjectId}`} class="text-link">Voir le projet associé</a>
          {/if}
        </div>
      </li>
    {/each}
  </ol>
</section>
