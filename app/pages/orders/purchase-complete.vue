<template>
  <div class="uno-min-h-screen uno-flex uno-flex-col uno-items-center uno-justify-center uno-bg-gradient-to-b uno-from-white uno-to-gray-50 uno-px-6 uno-py-10 md:uno-py-16">
    <div class="uno-max-w-md uno-w-full uno-flex uno-flex-col uno-items-center uno-text-center">
      <div class="uno-w-16 uno-h-16 md:uno-w-20 md:uno-h-20 uno-rounded-full uno-bg-green-100 uno-flex uno-items-center uno-justify-center uno-mb-6 md:uno-mb-8">
        <svg class="uno-w-8 uno-h-8 md:uno-w-10 md:uno-h-10 uno-text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 class="uno-text-3xl md:uno-text-4xl uno-font-bold uno-text-gray-900 uno-mb-3 md:uno-mb-4 uno-font-['Outfit']">{{ $t('pages.orders.purchaseComplete.title') }}</h1>
      <p class="uno-text-gray-600 uno-mb-6 md:uno-mb-8 uno-font-['Outfit'] uno-text-base md:uno-text-lg">{{ $t('pages.orders.purchaseComplete.description') }}</p>

      <CTAButton 
        :text="$t('pages.orders.purchaseComplete.accessReport')"
        uno-size="md"
        uno-rounded="pill"
        uno-bg-color="#009D77"
        uno-hover-bg-color="#0AA17F"
        uno-active-bg-color="#008A68"
        class="uno-w-full"
        @click="goToReport"
      />

      <p class="uno-text-gray-500 uno-mt-3 uno-mb-6 uno-font-['Outfit'] uno-text-sm">{{ $t('pages.orders.purchaseComplete.accessNote') }}</p>

      <CTAButton 
        :text="$t('pages.orders.purchaseComplete.downloadGuidebook')"
        uno-size="md"
        uno-rounded="pill"
        uno-bg-color="#0F172A"
        uno-hover-bg-color="#1F2937"
        uno-active-bg-color="#111827"
        class="uno-w-full"
        @click="downloadGuidebook"
      />

      <p class="uno-text-gray-500 uno-mt-3 uno-font-['Outfit'] uno-text-sm">{{ $t('pages.orders.purchaseComplete.downloadNote') }}</p>

      <NuxtLink to="/" class="uno-mt-8 uno-text-green-600 hover:uno-text-green-700 uno-font-medium">{{ $t('pages.orders.purchaseComplete.goHome') }}</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import CTAButton from '@/components/CTAButton.vue'
// const { t } = useI18n()
// definePageMeta({
//   title: () => t('pages.orders.purchaseComplete.title') as string
// })
// useSeoMeta({
//   title: () => t('pages.orders.purchaseComplete.title') as string,
//   description: () => t('pages.orders.purchaseComplete.description') as string,
//   ogTitle: () => t('pages.orders.purchaseComplete.title') as string,
//   ogDescription: () => t('pages.orders.purchaseComplete.description') as string
// })

const goToReport = () => {
  navigateTo('/test/result')
}

const downloadGuidebook = () => {
  console.log('Download guidebook triggered')
}
</script>

<style scoped>
</style>
