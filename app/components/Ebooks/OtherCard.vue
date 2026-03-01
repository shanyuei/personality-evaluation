<template>
  <div class="uno-p-6 md:uno-p-8 uno-flex uno-flex-col uno-gap-8 md:uno-gap-24px">

    <NuxtImg :src="image" :alt="title" width="320" height="209" class="uno-rounded-[16px] " />

    <div class="uno-flex-1 uno-flex uno-flex-col uno-gap-3">
      <h3 class="uno-text-[24px] uno-font-Outfit uno-font-[600] uno-text-[var(--ui-foreground)]">
        {{ title }}
      </h3>
      <div class="uno-flex uno-items-center  uno-flex-wrap uno-justify-between uno-mt-auto">
        <span v-if="originalPrice" class="uno-w-full uno-text-sm uno-text-[#4E5255] uno-line-through">{{ originalPrice
        }}</span>
        <span
          class="uno-text-[24px] uno-font-Outfit uno-font-[700] uno-leading-[1.5] uno-align-middle uno-text-[var(--ui-primary)]">{{
            price }}</span>
        <span class="uno-text-sm uno-text-[#4E5255]">{{ $t('pages.ebooks.oneTime') }}</span>
      </div>
      <div class="uno-flex uno-gap-3 uno-pt-2 uno-flex-wrap">
        <div class="uno-flex-1 uno-min-w-120px">
          <PrimaryButton width="full" height="48px">
            {{ $t('pages.ebooks.buyNow') }}
          </PrimaryButton>
        </div>
        <div class="uno-flex-1 uno-min-w-120px">
          <OutlineButton width="full" height="48px">
            {{ $t('pages.ebooks.readMore') }}
          </OutlineButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PrimaryButton from '~/components/ui/PrimaryButton.vue';
import OutlineButton from '~/components/ui/OutlineButton.vue';

interface Props {
  title: string;
  price: string;
  originalPrice?: string;
  sale?: boolean;
  image: string;
}

defineProps<Props>();
</script>
