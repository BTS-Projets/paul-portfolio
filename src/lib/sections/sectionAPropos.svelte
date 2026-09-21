<script lang="ts">
  import SectionHeader from '$lib/components/sectionHeader.svelte'
  import { profile } from '$lib/data/profil'
</script>

<section id="a-propos" class="content-section section-shell" aria-labelledby="about-title">
  <SectionHeader id="about-title" title="À propos" />
  <div class="about-copy">
    {#each profile.about as paragraph (paragraph)}
      <p>{paragraph}</p>
    {/each}
  </div>
</section>
