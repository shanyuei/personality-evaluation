<template>
  <div
    class="uno-p-6 md:uno-p-8 uno-flex uno-flex-col-reverse md:uno-flex-row uno-items-start md:uno-items-center uno-gap-10 md:uno-gap-16">
    <div class="uno-flex-1 uno-space-y-3">
      <h3 class="uno-text-[24px] uno-font-Outfit uno-font-[600] uno-text-[var(--ui-foreground)]">{{ title
      }}</h3>
      <p class="uno-text-sm uno-text-[#4E5255]">{{ description }}</p>
      <div class="uno-flex uno-gap-3 uno-pt-2 uno-justify-between md:uno-justify-start uno-flex-wrap">
        <div class="uno-w-full md:uno-w-[153px]">
          <PrimaryButton height="48px">
            {{ $t('pages.ebooks.primary.download') }}</PrimaryButton>
        </div>
        <div class="uno-w-full md:uno-w-[153px]">
          <AppLink :to="'/ebooks/detail'">
            <OutlineButton height="48px">
              {{ $t('pages.ebooks.primary.readOnline') }}</OutlineButton>
          </AppLink>
        </div>
      </div>
    </div>
    <NuxtImg :src="image" alt="ebook" width="268" height="209" class="uno-rounded-[24px] uno-m-auto" />
  </div>
</template>

<script setup lang="ts">
import PrimaryButton from '~/components/ui/PrimaryButton.vue';
import OutlineButton from '~/components/ui/OutlineButton.vue';

interface Props {
  title: string
  description: string
  image: string
}

defineProps<Props>()
</script>
