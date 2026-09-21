<script lang="ts">
  import { asset } from '$app/paths'
  import SectionHeader from '$lib/components/sectionHeader.svelte'

  const pdfUrl = asset('/documents/tableau-synthese-e5.pdf')
</script>

<section
  id="tableau-synthese"
  class="content-section section-shell section-wide"
  aria-labelledby="summary-title"
>
  <div class="summary-section-header">
    <SectionHeader
      id="summary-title"
      eyebrow="Épreuve E5 · U5"
      title="Tableau de synthèse"
      description="Le document officiel réunit les réalisations professionnelles et les compétences mobilisées pendant la formation."
    />
    <div class="pdf-actions" aria-label="Actions du tableau de synthèse">
      <a class="button button-secondary" href={pdfUrl} target="_blank" rel="external noopener noreferrer">
        Ouvrir en plein écran <span aria-hidden="true">↗</span>
      </a>
      <a class="text-link" href={pdfUrl} rel="external" download="tableau-synthese-e5.pdf"
        >Télécharger le PDF</a
      >
    </div>
  </div>

  <div class="pdf-viewer">
    <object
      data={pdfUrl}
      type="application/pdf"
      title="Tableau de synthèse officiel E5 de Paul Muller"
      aria-label="Tableau de synthèse officiel E5 de Paul Muller"
    >
      <p>
        Le PDF ne peut pas être affiché dans ce navigateur.
        <a href={pdfUrl} rel="external">Ouvrir le tableau de synthèse</a>.
      </p>
    </object>
  </div>
</section>
