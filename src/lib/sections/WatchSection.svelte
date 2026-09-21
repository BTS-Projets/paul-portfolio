<script lang="ts">
  import SectionHeading from '$lib/components/SectionHeading.svelte'
  import { watchConfig, watchEntries } from '$lib/data/watch'

  let category = $state('all')
  const categories = [...new Set(watchEntries.map((entry) => entry.category))]
  const filteredEntries = $derived(
    category === 'all' ? watchEntries : watchEntries.filter((entry) => entry.category === category),
  )
</script>

<section id="veille" class="content-section section-shell" aria-labelledby="watch-title">
  <SectionHeading
    id="watch-title"
    eyebrow="Suivi informationnel"
    title="Veille technologique"
    description="Une structure prête à accueillir une veille sourcée, datée et synthétisée."
  />

  <div class="watch-overview">
    <article class="watch-topic">
      <p class="eyebrow">Sujet</p>
      <h3>{watchConfig.topic ?? 'TODO : thème de veille à définir'}</h3>
      {#if watchConfig.question}
        <p><strong>Problématique :</strong> {watchConfig.question}</p>
      {:else}
        <p class="empty-inline">
          La problématique et la justification seront ajoutées après validation du thème.
        </p>
      {/if}
    </article>
    <dl class="watch-method">
      <div>
        <dt>Méthode</dt>
        <dd>{watchConfig.method ?? 'À renseigner'}</dd>
      </div>
      <div>
        <dt>Sources et outils</dt>
        <dd>
          {watchConfig.toolsAndSources.length ? watchConfig.toolsAndSources.join(', ') : 'À renseigner'}
        </dd>
      </div>
      <div>
        <dt>Mots-clés</dt>
        <dd>{watchConfig.keywords.length ? watchConfig.keywords.join(', ') : 'À renseigner'}</dd>
      </div>
    </dl>
  </div>

  {#if watchEntries.length}
    <div class="watch-entries">
      {#if categories.length > 1}
        <label class="inline-filter">
          Catégorie
          <select bind:value={category}>
            <option value="all">Toutes</option>
            {#each categories as item (item)}
              <option value={item}>{item}</option>
            {/each}
          </select>
        </label>
      {/if}
      <ol class="watch-timeline">
        {#each filteredEntries as entry (entry.id)}
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
  {:else}
    <div class="empty-state compact">
      <p>
        Aucune entrée n’est publiée tant qu’un sujet, une date et une source vérifiable ne sont pas
        renseignés.
      </p>
    </div>
  {/if}
</section>
