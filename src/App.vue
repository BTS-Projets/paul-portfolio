<script setup lang="ts">
import { ref } from 'vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
import AboutSection from './sections/AboutSection.vue'
import ContactSection from './sections/ContactSection.vue'
import DocumentsSection from './sections/DocumentsSection.vue'
import E5Section from './sections/E5Section.vue'
import ExperienceSection from './sections/ExperienceSection.vue'
import HeroSection from './sections/HeroSection.vue'
import JourneySection from './sections/JourneySection.vue'
import ProjectsSection from './sections/ProjectsSection.vue'
import SkillsSection from './sections/SkillsSection.vue'
import WatchSection from './sections/WatchSection.vue'

const selectedTechnology = ref('all')

function filterProjectsByTechnology(technology: string): void {
  selectedTechnology.value = technology
  window.location.hash = 'realisations'
}
</script>

<template>
  <a
    class="skip-link"
    href="#contenu"
  >Aller au contenu</a>
  <SiteHeader />
  <main id="contenu">
    <HeroSection />
    <AboutSection />
    <JourneySection />
    <SkillsSection @filter="filterProjectsByTechnology" />
    <ProjectsSection v-model:technology="selectedTechnology" />
    <ExperienceSection />
    <E5Section />
    <WatchSection />
    <DocumentsSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
