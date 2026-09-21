<script lang="ts">
  interface Props {
    id: string
    eyebrow?: string
    title: string
    description?: string
  }

  let { id, eyebrow, title, description }: Props = $props()
</script>

<header class="section-heading">
  {#if eyebrow}<p class="eyebrow">{eyebrow}</p>{/if}
  <h2 {id}>{title}</h2>
  {#if description}
    <p class="section-description">{description}</p>
  {/if}
</header>
