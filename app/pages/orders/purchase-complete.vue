<template>
  <div class=" uno-flex uno-flex-col uno-items-center uno-justify-center uno-px-6 uno-py-10 md:uno-py-16">
    <div class="uno-max-w-md uno-w-full uno-flex uno-flex-col uno-items-center uno-text-center">
      <div
        class="uno-w-16 uno-h-16 md:uno-w-20 md:uno-h-20 uno-rounded-full  uno-flex uno-items-center uno-justify-center uno-mb-6 md:uno-mb-8">
        <nuxt-img src="/images/common/pay-card-1.png" alt="pay-card-1" width="96" height="96" />
      </div>

      <h1 class="uno-text-3xl md:uno-text-5xl uno-font-600 uno-text-gray-900 uno-mb-3 md:uno-mb-4 uno-font-['Outfit']">
        {{ $t('pages.orders.purchaseComplete.title') }}</h1>
      <p class="uno-text-gray-600 uno-mb-6 md:uno-mb-8 uno-font-['Outfit'] uno-text-sm md:uno-text-lg">
        {{ $t('pages.orders.purchaseComplete.description') }}
      </p>

      <PrimaryButton @click="goToReport" class="uno-w-full">
        Download my Report
      </PrimaryButton>

      <p class="uno-text-gray-500 uno-mt-3 uno-mb-6 uno-font-['Outfit'] uno-text-sm md:uno-text-base">
        {{ $t('pages.orders.purchaseComplete.accessNote') }}
      </p>

      <OutlineButton @click="downloadGuidebook" class="uno-w-full">
        Self-Esteem
      </OutlineButton>

    </div>
  </div>
</template>

<script setup lang="ts">


import PrimaryButton from '@/components/ui/PrimaryButton.vue'
import OutlineButton from '@/components/ui/OutlineButton.vue'
const { t } = useI18n()
const localePath = useLocalePath()
definePageMeta({
  title: () => 'pages.orders.purchaseComplete.title',
  layoutShowMenu: false,
  layoutShowPageTopIcons: false,
})
useSeoMeta({
  title: () => t('seo.orders.purchaseComplete.title') as string,
  description: () => t('seo.orders.purchaseComplete.description') as string
})
const goToReport = () => {
  navigateTo(localePath('/test/result'))
}

const downloadGuidebook = () => {
}
</script>

<style scoped></style>
