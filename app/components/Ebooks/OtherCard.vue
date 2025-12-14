<template>
  <div class="uno-p-6 md:uno-p-8 uno-flex uno-gap-8 md:uno-gap-12">
    <div
      class="uno-w-[160px] uno-h-[200px] uno-rounded-[16px] uno-bg-[var(--color-purple-2)] uno-relative uno-shrink-0 md:uno-w-[200px] md:uno-h-[250px]">
      <NuxtImg :src="image" :alt="title" class="uno-w-full uno-h-full uno-object-contain"
        sizes="(min-width:768px) 200px, 160px" />
      <span v-if="sale"
        class="uno-absolute uno-top-2 uno-right-2 uno-text-xs uno-bg-[var(--color-pink-1)] uno-text-white uno-rounded-full uno-px-3 uno-py-1">
        {{ $t('pages.ebooks.sale') }}
      </span>
    </div>
    <div class="uno-flex-1 uno-flex uno-flex-col uno-gap-2">
      <h3
        class="uno-text-lg md:uno-text-xl uno-font-['Outfit'] uno-font-bold uno-text-[var(--ui-foreground)]">
        {{ title }}
      </h3>
      <div class="uno-flex uno-items-center uno-gap-3">
        <span v-if="originalPrice" class="uno-text-[var(--ui-muted-foreground)] uno-line-through">{{ originalPrice }}</span>
        <span class="uno-text-[22px] uno-font-bold uno-text-[var(--ui-primary)]">{{ price }}</span>
        <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.ebooks.oneTime') }}</span>
      </div>
      <div class="uno-flex uno-gap-3 uno-pt-2">
        <UButton
          class="uno-h-[48px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white">
          {{ $t('pages.ebooks.buyNow') }}
        </UButton>
        <UButton variant="ghost"
          class="uno-h-[48px] uno-rounded-[12px] uno-border uno-border-[var(--ui-border)] hover:uno-border-[var(--ui-primary)] hover:uno-text-[var(--ui-primary)]">
          {{ $t('pages.ebooks.readMore') }}
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

interface Props {
  title: string;
  price: string;
  originalPrice?: string;
  sale?: boolean;
  image: string;
}

const props = defineProps<Props>();
</script>