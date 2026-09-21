<script lang="ts">
  import SectionHeader from '$lib/components/sectionHeader.svelte'
  import { profile } from '$lib/data/profil'
</script>

<section id="contact" class="content-section section-shell" aria-labelledby="contact-title">
  <div class="contact-panel">
    <SectionHeader id="contact-title" title="Contact" />
    <div class="contact-links">
      {#if profile.email}
        <a class="button button-primary" href={`mailto:${profile.email}`} rel="external">{profile.email}</a>
      {/if}
      {#each profile.socialLinks as link (link.url)}
        <a class="button button-secondary" href={link.url} target="_blank" rel="external noopener noreferrer">
          {link.label} <span aria-hidden="true">↗</span>
        </a>
      {/each}
    </div>
    {#if profile.professionalGoal}
      <p class="contact-note">Après le BTS : {profile.professionalGoal}</p>
    {/if}
  </div>
</section>
