<script lang="ts">
  import { resolve } from '$app/paths'
  import SectionHeader from '$lib/components/sectionHeader.svelte'
  import { experiences } from '$lib/data/experiences'
</script>

<section id="experience" class="content-section section-shell" aria-labelledby="experience-title">
  <SectionHeader id="experience-title" title="Expériences" />
  <div class="experience-list">
    {#each experiences as experience (experience.id)}
      <article class="experience-card">
        <header class="experience-header">
          <div>
            <p class="eyebrow">{experience.period}{experience.duration ? ` · ${experience.duration}` : ''}</p>
            <h3>{experience.title}</h3>
            <p class="experience-organization">
              {experience.organization}{experience.location ? ` · ${experience.location}` : ''}
            </p>
          </div>
        </header>
        {#if experience.context}<p class="experience-context">{experience.context}</p>{/if}
        <p class="experience-summary">{experience.summary}</p>
        <div class="experience-details">
          <ul class="focus-list" aria-label="Domaines abordés">
            {#each experience.focusAreas as focus (focus)}
              <li>{focus}</li>
            {/each}
          </ul>
          <div>
            <p class="detail-label">Technologies et domaines</p>
            <ul class="tag-list">
              {#each experience.technologies as technology (technology)}
                <li>{technology}</li>
              {/each}
            </ul>
          </div>
        </div>
        {#if experience.detailPath}
          <footer class="experience-footer">
            <a class="text-link" href={resolve(experience.detailPath as '/')}
              >Voir l’expérience <span aria-hidden="true">→</span></a
            >
          </footer>
        {/if}
      </article>
    {/each}
  </div>
</section>
