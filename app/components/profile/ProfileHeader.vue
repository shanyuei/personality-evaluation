<template>
  <h1
    class="uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-6">
    {{ $t('pages.profile.welcome', { name }) }}</h1>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>
