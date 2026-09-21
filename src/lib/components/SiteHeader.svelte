<script lang="ts">
  import { resolve } from '$app/paths'
  import ThemeControl from './ThemeControl.svelte'

  const navigation = [
    { label: 'Accueil', href: resolve('/#accueil') },
    { label: 'À propos', href: resolve('/#a-propos') },
    { label: 'Parcours', href: resolve('/#parcours') },
    { label: 'Compétences', href: resolve('/#competences') },
    { label: 'Réalisations', href: resolve('/#realisations') },
    { label: 'Expérience', href: resolve('/#experience') },
    { label: 'Parcours E5', href: resolve('/#parcours-e5') },
    { label: 'Veille', href: resolve('/#veille') },
    { label: 'Documents', href: resolve('/#documents') },
    { label: 'Contact', href: resolve('/#contact') },
  ] as const

  let menuOpen = $state(false)
  let menuButton: HTMLButtonElement

  function closeMenu({ restoreFocus = false } = {}): void {
    if (!menuOpen) return
    menuOpen = false
    if (restoreFocus) requestAnimationFrame(() => menuButton.focus())
  }

  function handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && menuOpen) closeMenu({ restoreFocus: true })
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<header class="site-header">
  <div class="header-shell">
    <a class="site-identity" href="#accueil" aria-label="Accueil du portfolio de Paul Muller">
      <span class="identity-mark" aria-hidden="true">PM</span>
      <span>
        <strong>Paul Muller</strong>
        <small>BTS SIO · SLAM</small>
      </span>
    </a>

    <button
      bind:this={menuButton}
      class="menu-button"
      type="button"
      aria-expanded={menuOpen}
      aria-controls="main-navigation"
      onclick={() => (menuOpen = !menuOpen)}
    >
      <span class="visually-hidden">{menuOpen ? 'Fermer' : 'Ouvrir'} la navigation</span>
      <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
    </button>

    <nav
      id="main-navigation"
      class:main-navigation={true}
      class:is-open={menuOpen}
      aria-label="Navigation principale"
    >
      {#each navigation as item (item.href)}
        <a href={item.href} onclick={() => closeMenu()}>{item.label}</a>
      {/each}
    </nav>

    <ThemeControl />
  </div>
</header>
