<script lang="ts">
  import SectionHeading from '$lib/components/SectionHeading.svelte'
  import { profile } from '$lib/data/profile'
</script>

<section id="contact" class="content-section section-shell" aria-labelledby="contact-title">
  <div class="contact-panel">
    <SectionHeading
      id="contact-title"
      eyebrow="Échange"
      title="Contact"
      description="Pour consulter mon travail ou me contacter dans un cadre professionnel."
    />
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
    {#if !profile.professionalGoal}
      <p class="contact-note">Projet professionnel après le BTS : <span>à définir.</span></p>
    {/if}
  </div>
</section>
