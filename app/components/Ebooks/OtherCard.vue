<template>
  <div class="uno-p-6 md:uno-p-8 uno-flex uno-flex-col uno-gap-8 md:uno-gap-12">

    <NuxtImg :src="image" :alt="title"  width="320" height="209" class="uno-rounded-[16px] " />

    <div class="uno-flex-1 uno-flex uno-flex-col uno-gap-2">
      <h3 class="uno-text-[24px] uno-font-Outfit uno-font-[600] uno-text-[var(--ui-foreground)]">
        {{ title }}
      </h3>
      <div class="uno-flex uno-items-center uno-gap-3 uno-flex-wrap uno-justify-between">
        <span v-if="originalPrice" class="uno-w-full uno-text-sm uno-text-[#4E5255] uno-line-through">{{ originalPrice }}</span>
        <span class="uno-text-sm uno-font-bold uno-text-[var(--ui-primary)]">{{ price }}</span>
        <span class="uno-text-sm uno-text-[#4E5255]">{{ $t('pages.ebooks.oneTime') }}</span>
      </div>
      <div class="uno-flex uno-gap-3 uno-pt-2">
        <UButton
          :ui="{ base: `flex-1 h-[48px] flex justify-center items-center flex-row gap-1 py-1 px-[20px]  rounded-lg text-[#FFFFFF] text-[18px] font-['Outfit'] font-bold leading-normal` }">
          {{ $t('pages.ebooks.buyNow') }}
        </UButton>
        <UButton variant="ghost"
          :ui="{ base: `h-[48px] flex justify-center items-center flex-row gap-1 py-1 px-[20px] border-solid  border-2 rounded-lg  text-[18px] font-['Outfit'] font-bold leading-normal` }">
          {{ $t('pages.ebooks.readMore') }}
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  title: string;
  price: string;
  originalPrice?: string;
  sale?: boolean;
  image: string;
}

defineProps<Props>();
</script>
