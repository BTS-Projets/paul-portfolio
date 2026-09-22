<script lang="ts">
  import Footer from '$lib/components/footer.svelte'
  import Sidebar from '$lib/components/sidebar.svelte'
  import SectionAccueil from '$lib/sections/sectionAccueil.svelte'
  import SectionAPropos from '$lib/sections/sectionAPropos.svelte'
  import SectionCompetences from '$lib/sections/sectionCompetences.svelte'
  import SectionContact from '$lib/sections/sectionContact.svelte'
  import SectionExperiences from '$lib/sections/sectionExperiences.svelte'
  import SectionParcours from '$lib/sections/sectionParcours.svelte'
  import SectionTableauSynthese from '$lib/sections/sectionTableauSynthese.svelte'
  import SectionVeille from '$lib/sections/sectionVeille.svelte'
</script>

<svelte:head>
  <meta
    name="description"
    content="Portfolio professionnel de Paul Muller, étudiant en BTS SIO option SLAM : parcours, compétences, expérience et veille technologique."
  />
  <meta property="og:title" content="Paul Muller - Portfolio | BTS SIO SLAM" />
  <meta
    property="og:description"
    content="Parcours, compétences et professionnalisation en BTS SIO option SLAM."
  />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:url" content="https://paulmuller.dev/" />
  <link rel="canonical" href="https://paulmuller.dev/" />
</svelte:head>

<a class="skip-link" href="#contenu">Aller au contenu principal</a>
<Sidebar />
<div class="page-shell">
  <main id="contenu" tabindex="-1">
    <SectionAccueil />
    <SectionAPropos />
    <SectionParcours />
    <SectionCompetences />
    <SectionExperiences />
    <SectionVeille />
    <SectionTableauSynthese />
    <SectionContact />
  </main>
  <Footer />
</div>
