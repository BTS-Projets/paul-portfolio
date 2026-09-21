<script lang="ts">
  import SiteFooter from '$lib/components/SiteFooter.svelte'
  import SiteHeader from '$lib/components/SiteHeader.svelte'
  import AboutSection from '$lib/sections/AboutSection.svelte'
  import ContactSection from '$lib/sections/ContactSection.svelte'
  import DocumentsSection from '$lib/sections/DocumentsSection.svelte'
  import E5Section from '$lib/sections/E5Section.svelte'
  import ExperienceSection from '$lib/sections/ExperienceSection.svelte'
  import HeroSection from '$lib/sections/HeroSection.svelte'
  import JourneySection from '$lib/sections/JourneySection.svelte'
  import ProjectsSection from '$lib/sections/ProjectsSection.svelte'
  import SkillsSection from '$lib/sections/SkillsSection.svelte'
  import WatchSection from '$lib/sections/WatchSection.svelte'

  let selectedTechnology = $state('all')

  function filterProjectsByTechnology(technology: string): void {
    selectedTechnology = technology
    window.location.hash = 'realisations'
  }
</script>

<svelte:head>
  <title>Paul Muller — Portfolio | BTS SIO SLAM</title>
  <meta
    name="description"
    content="Portfolio professionnel de Paul Muller, étudiant en BTS SIO option SLAM : parcours, réalisations, compétences E5 et veille technologique."
  />
  <meta property="og:title" content="Paul Muller — Portfolio | BTS SIO SLAM" />
  <meta
    property="og:description"
    content="Parcours, réalisations et professionnalisation en BTS SIO option SLAM."
  />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:url" content="https://paulmuller.dev/" />
  <link rel="canonical" href="https://paulmuller.dev/" />
</svelte:head>

<a class="skip-link" href="#contenu">Aller au contenu</a>
<SiteHeader />
<main id="contenu" tabindex="-1">
  <HeroSection />
  <AboutSection />
  <JourneySection />
  <SkillsSection onFilter={filterProjectsByTechnology} />
  <ProjectsSection
    technology={selectedTechnology}
    onTechnologyChange={(technology) => (selectedTechnology = technology)}
  />
  <ExperienceSection />
  <E5Section />
  <WatchSection />
  <DocumentsSection />
  <ContactSection />
</main>
<SiteFooter />
