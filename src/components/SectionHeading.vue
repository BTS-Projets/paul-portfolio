<script setup lang="ts">
defineProps<{
  id: string
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<template>
  <header class="section-heading">
    <p class="eyebrow">
      {{ eyebrow }}
    </p>
    <h2 :id="id">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="section-description"
    >
      {{ description }}
    </p>
  </header>
</template>
