<script lang="ts">
  import SectionHeader from '$lib/components/sectionHeader.svelte'
  import { watchConfig, watchEntries } from '$lib/data/veille'
</script>

<section id="veille" class="content-section section-shell" aria-labelledby="watch-title">
  <SectionHeader id="watch-title" title="Veille technologique" />

  {#if watchConfig.topic}
    <div class="watch-overview">
      <article class="watch-topic">
        <p class="eyebrow">Sujet</p>
        <h3>{watchConfig.topic}</h3>
        {#if watchConfig.rationale}
          <p><strong>Objectif :</strong> {watchConfig.rationale}</p>
        {/if}
      </article>
      {#if watchConfig.method || watchConfig.toolsAndSources.length || watchConfig.keywords.length}
        <dl class="watch-method">
          {#if watchConfig.method}<div>
              <dt>Méthode</dt>
              <dd>{watchConfig.method}</dd>
            </div>{/if}
          {#if watchConfig.toolsAndSources.length}<div>
              <dt>Sources et outils</dt>
              <dd>
                {watchConfig.toolsAndSources.join(', ')}
              </dd>
            </div>
          {/if}
          {#if watchConfig.keywords.length}<div>
              <dt>Mots-clés</dt>
              <dd>{watchConfig.keywords.join(', ')}</dd>
            </div>
          {/if}
        </dl>
      {/if}
    </div>
  {:else}
    <p class="empty-inline">Sujet de veille à définir.</p>
  {/if}

  {#if watchEntries.length}
    <div class="watch-entries">
      <ol class="watch-timeline">
        {#each watchEntries as entry (entry.id)}
          <li>
            <time datetime={entry.date}>{entry.date}</time>
            <article>
              <p class="eyebrow">{entry.category}</p>
              <h3>{entry.title}</h3>
              <p>{entry.summary}</p>
              {#if entry.impact}<p><strong>Impact :</strong> {entry.impact}</p>{/if}
              <a href={entry.sourceUrl} target="_blank" rel="external noopener noreferrer">
                Source : {entry.sourceName} <span aria-hidden="true">↗</span>
              </a>
            </article>
          </li>
        {/each}
      </ol>
    </div>
  {/if}
</section>
