<script lang="ts">
  import SectionHeader from '$lib/components/sectionHeader.svelte'
  import { education } from '$lib/data/formations'
</script>

<section id="parcours" class="content-section section-shell" aria-labelledby="journey-title">
  <SectionHeader id="journey-title" title="Parcours" />
  <ol class="timeline">
    {#each education as item (item.id)}
      <li class="timeline-item">
        <div class="timeline-period">{item.period}</div>
        <div class="timeline-card">
          <h3>{item.title}</h3>
          {#if item.institution}<p class="meta-line">{item.institution}</p>{/if}
          {#if item.description}<p>{item.description}</p>{/if}
        </div>
      </li>
    {/each}
  </ol>
</section>
