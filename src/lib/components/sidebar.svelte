<script lang="ts">
  import { resolve } from '$app/paths'
  import { onMount } from 'svelte'

  const navigation = [
    { id: 'accueil', label: 'Accueil', href: resolve('/#accueil') },
    { id: 'a-propos', label: 'À propos', href: resolve('/#a-propos') },
    { id: 'parcours', label: 'Parcours', href: resolve('/#parcours') },
    { id: 'competences', label: 'Compétences', href: resolve('/#competences') },
    { id: 'experience', label: 'Expériences', href: resolve('/#experience') },
    { id: 'veille', label: 'Veille technologique', href: resolve('/#veille') },
    {
      id: 'tableau-synthese',
      label: 'Tableau de synthèse',
      href: resolve('/#tableau-synthese'),
    },
    { id: 'contact', label: 'Contact', href: resolve('/#contact') },
  ] as const

  let activeSection = $state('accueil')
  let menuOpen = $state(false)
  let drawer: HTMLDialogElement
  let menuButton: HTMLButtonElement

  function setActiveSection(sectionId: string): void {
    activeSection = sectionId
  }

  function openMenu(): void {
    drawer.showModal()
    menuOpen = true
    drawer.querySelector<HTMLAnchorElement>('nav a')?.focus()
  }

  function closeMenu(): void {
    if (drawer.open) drawer.close()
  }

  function handleDrawerClose(): void {
    menuOpen = false
    menuButton.focus()
  }

  function followMobileLink(sectionId: string): void {
    setActiveSection(sectionId)
    closeMenu()
  }

  onMount(() => {
    const hash = window.location.hash.slice(1)
    if (navigation.some((item) => item.id === hash)) activeSection = hash

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) activeSection = entry.target.id
        }
      },
      { rootMargin: '-18% 0px -70% 0px' },
    )

    for (const item of navigation) {
      const section = document.getElementById(item.id)
      if (section) observer.observe(section)
    }

    const desktopQuery = window.matchMedia('(min-width: 1025px)')
    const handleDesktopChange = (): void => {
      if (desktopQuery.matches) closeMenu()
    }
    desktopQuery.addEventListener('change', handleDesktopChange)

    return () => {
      observer.disconnect()
      desktopQuery.removeEventListener('change', handleDesktopChange)
    }
  })
</script>

{#snippet identity()}
  <a class="site-identity" href={resolve('/#accueil')} aria-label="Accueil du portfolio de Paul Muller">
    <span class="identity-mark" aria-hidden="true">PM</span>
    <span>
      <strong>Paul Muller</strong>
      <small>BTS SIO · SLAM</small>
    </span>
  </a>
{/snippet}

{#snippet navigationLinks(mobile = false)}
  <nav class="side-navigation" aria-label="Navigation principale">
    {#each navigation as item (item.id)}
      <a
        href={item.href}
        aria-current={activeSection === item.id ? 'location' : undefined}
        onclick={() => (mobile ? followMobileLink(item.id) : setActiveSection(item.id))}
      >
        <span class="nav-marker" aria-hidden="true"></span>
        {item.label}
      </a>
    {/each}
  </nav>
{/snippet}

<aside class="site-sidebar" aria-label="Navigation du portfolio">
  <div class="sidebar-identity">{@render identity()}</div>
  {@render navigationLinks()}
  <div class="sidebar-projects">
    <p>Projets et réalisations</p>
    <a href="https://bts.paulmuller.dev/" target="_blank" rel="external noopener noreferrer">
      Réalisations BTS <span aria-hidden="true">↗</span>
    </a>
  </div>
  <div class="sidebar-footer">
    <p>Portfolio · 2025 — 2027</p>
  </div>
</aside>

<header class="mobile-header">
  {@render identity()}
  <button
    bind:this={menuButton}
    class="menu-button"
    type="button"
    aria-haspopup="dialog"
    aria-controls="mobile-navigation"
    aria-expanded={menuOpen}
    onclick={openMenu}
  >
    <span class="visually-hidden">Ouvrir la navigation</span>
    <span class="menu-icon" aria-hidden="true"><span></span><span></span><span></span></span>
  </button>
</header>

<dialog
  id="mobile-navigation"
  bind:this={drawer}
  class="mobile-drawer"
  aria-labelledby="mobile-menu-title"
  onclose={handleDrawerClose}
>
  <header class="drawer-header">
    <div>
      <p class="eyebrow">Navigation</p>
      <h2 id="mobile-menu-title">Portfolio</h2>
    </div>
    <button class="close-button" type="button" aria-label="Fermer la navigation" onclick={closeMenu}>×</button
    >
  </header>
  {@render navigationLinks(true)}
  <a
    class="drawer-project-link"
    href="https://bts.paulmuller.dev/"
    target="_blank"
    rel="external noopener noreferrer"
  >
    Réalisations BTS <span aria-hidden="true">↗</span>
  </a>
</dialog>
