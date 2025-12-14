<template>
  <div class="uno-p-6 md:uno-p-8 uno-flex uno-items-center uno-gap-10 md:uno-gap-16">
    <div class="uno-flex-1 uno-space-y-3">
      <h3 class="uno-text-xl md:uno-text-2xl uno-font-['Outfit'] uno-font-bold uno-text-[var(--ui-foreground)]">{{ title }}</h3>
      <p class="uno-text-sm md:uno-text-base uno-text-[var(--ui-muted-foreground)]">{{ description }}</p>
      <div class="uno-flex uno-gap-3 uno-pt-2">
        <UButton class="uno-h-[48px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white">{{ downloadText }}</UButton>
        <UButton variant="ghost" class="uno-h-[48px] uno-rounded-[12px] uno-border uno-border-[var(--ui-border)] hover:uno-border-[var(--ui-primary)] hover:uno-text-[var(--ui-primary)]">{{ readOnlineText }}</UButton>
      </div>
    </div>
    <div class="uno-w-[200px] uno-h-[200px] uno-rounded-[24px] uno-bg-[var(--color-purple-2)] uno-flex uno-items-center uno-justify-center uno-shrink-0 md:uno-w-[300px] md:uno-h-[300px]">
      <NuxtImg :src="image" alt="ebook" class="uno-w-[150px] uno-h-[200px] uno-object-contain" sizes="(min-width:768px) 250px, 150px" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  downloadText: string
  readOnlineText: string
  image: string
}

defineProps<Props>()
</script>