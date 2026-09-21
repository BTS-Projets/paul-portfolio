<script lang="ts">
  import SectionHeading from '$lib/components/SectionHeading.svelte'
  import { documents } from '$lib/data/documents'
</script>

<section id="documents" class="content-section section-shell" aria-labelledby="documents-title">
  <SectionHeading
    id="documents-title"
    eyebrow="Ressources"
    title="Documents"
    description="Emplacement des documents explicitement destinés à une publication sur le portfolio."
  />
  {#if documents.length}
    <div class="documents-grid">
      {#each documents as document (document.id)}
        <article class="document-card">
          <span class="badge">{document.type}</span>
          <h3>{document.title}</h3>
          {#if document.description}<p>{document.description}</p>{/if}
          <a
            class="button button-secondary"
            href={document.path}
            target="_blank"
            rel="external noopener noreferrer"
          >
            Ouvrir le document
          </a>
        </article>
      {/each}
    </div>
  {:else}
    <div class="empty-state documents-empty">
      <p>
        Aucun document public n’est disponible pour le moment. Le CV, le tableau de synthèse officiel E5 et
        l’attestation de stage pourront être ajoutés ici.
      </p>
      <small>La matrice web du portfolio ne constitue pas le tableau de synthèse officiel.</small>
    </div>
  {/if}
</section>
