<script lang="ts">
  import SectionHeading from '$lib/components/SectionHeading.svelte'
  import { profile } from '$lib/data/profile'
</script>

<section id="a-propos" class="content-section section-shell" aria-labelledby="about-title">
  <SectionHeading id="about-title" eyebrow="Profil" title="À propos" />
  <div class="about-layout">
    <div class="about-copy">
      {#each profile.about as paragraph (paragraph)}
        <p>{paragraph}</p>
      {/each}
    </div>
    <aside class="note-card">
      <p class="note-label">Ce portfolio présente</p>
      <ul class="plain-list">
        <li>mon parcours de formation ;</li>
        <li>mes réalisations scolaires et personnelles ;</li>
        <li>mon expérience professionnelle ;</li>
        <li>le suivi manuel de mes compétences E5.</li>
      </ul>
    </aside>
  </div>
</section>
