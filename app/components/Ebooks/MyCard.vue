<template>
  <div class="uno-p-6 md:uno-p-8 uno-flex uno-items-center uno-gap-10 md:uno-gap-16">
    <div class="uno-flex-1 uno-space-y-3">
      <h3 class="uno-text-xl md:uno-text-2xl uno-font-['Outfit'] uno-font-bold uno-text-[var(--ui-foreground)]">{{ title
        }}</h3>
      <p class="uno-text-sm md:uno-text-base uno-text-[var(--ui-muted-foreground)]">{{ description }}</p>
      <div class="uno-flex uno-gap-3 uno-pt-2">
        <UButton
          :ui="{ base: `w-[151px] h-[48px] flex justify-center items-center flex-row gap-1 py-1 px-[20px]  rounded-lg text-[#FFFFFF] text-lg font-['Outfit'] font-bold leading-normal` }">
          {{ downloadText }}</UButton>
        <UButton variant="ghost"
          :ui="{ base: `w-[153px] h-[48px] flex justify-center items-center flex-row gap-1 py-1 px-[20px] border-solid  border-2 rounded-lg  text-lg font-['Outfit'] font-bold leading-normal` }">
          {{ readOnlineText }}</UButton>
      </div>
    </div>
    <NuxtImg :src="image" alt="ebook"  width="268" height="209" class="uno-rounded-[24px] overflow-hidden" />
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