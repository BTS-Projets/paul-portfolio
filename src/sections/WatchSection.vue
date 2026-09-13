<script setup lang="ts">
import { computed, ref } from 'vue'
import SectionHeading from '../components/SectionHeading.vue'
import { watchConfig, watchEntries } from '../data/watch'

const category = ref('all')
const categories = computed(() => [...new Set(watchEntries.map((entry) => entry.category))])
const filteredEntries = computed(() =>
  category.value === 'all' ? watchEntries : watchEntries.filter((entry) => entry.category === category.value),
)
</script>

<template>
  <section
    id="veille"
    class="content-section section-shell"
    aria-labelledby="watch-title"
  >
    <SectionHeading
      id="watch-title"
      eyebrow="Suivi informationnel"
      title="Veille technologique"
      description="Une structure prête à accueillir une veille sourcée, datée et synthétisée."
    />

    <div class="watch-overview">
      <article class="watch-topic">
        <p class="eyebrow">
          Sujet
        </p>
        <h3>{{ watchConfig.topic ?? 'TODO : thème de veille à définir' }}</h3>
        <p v-if="watchConfig.question">
          <strong>Problématique :</strong> {{ watchConfig.question }}
        </p>
        <p
          v-else
          class="empty-inline"
        >
          La problématique et la justification seront ajoutées après validation du thème.
        </p>
      </article>
      <dl class="watch-method">
        <div>
          <dt>Méthode</dt>
          <dd>{{ watchConfig.method ?? 'À renseigner' }}</dd>
        </div>
        <div>
          <dt>Sources et outils</dt>
          <dd>{{ watchConfig.toolsAndSources.length ? watchConfig.toolsAndSources.join(', ') : 'À renseigner' }}</dd>
        </div>
        <div>
          <dt>Mots-clés</dt>
          <dd>{{ watchConfig.keywords.length ? watchConfig.keywords.join(', ') : 'À renseigner' }}</dd>
        </div>
      </dl>
    </div>

    <div
      v-if="watchEntries.length"
      class="watch-entries"
    >
      <label
        v-if="categories.length > 1"
        class="inline-filter"
      >
        Catégorie
        <select v-model="category">
          <option value="all">Toutes</option>
          <option
            v-for="item in categories"
            :key="item"
            :value="item"
          >{{ item }}</option>
        </select>
      </label>
      <ol class="watch-timeline">
        <li
          v-for="entry in filteredEntries"
          :key="entry.id"
        >
          <time :datetime="entry.date">{{ entry.date }}</time>
          <article>
            <p class="eyebrow">
              {{ entry.category }}
            </p>
            <h3>{{ entry.title }}</h3>
            <p>{{ entry.summary }}</p>
            <p v-if="entry.impact">
              <strong>Impact :</strong> {{ entry.impact }}
            </p>
            <a
              :href="entry.sourceUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source : {{ entry.sourceName }} <span aria-hidden="true">↗</span>
            </a>
          </article>
        </li>
      </ol>
    </div>
    <div
      v-else
      class="empty-state compact"
    >
      <p>Aucune entrée n’est publiée tant qu’un sujet, une date et une source vérifiable ne sont pas renseignés.</p>
    </div>
  </section>
</template>
