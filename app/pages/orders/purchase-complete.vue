<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6 py-10 md:py-16">
    <div class="max-w-md w-full flex flex-col items-center text-center">
      <div class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-100 flex items-center justify-center mb-6 md:mb-8">
        <svg class="w-8 h-8 md:w-10 md:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 font-['Outfit']">{{ $t('pages.orders.purchaseComplete.title') }}</h1>
      <p class="text-gray-600 mb-6 md:mb-8 font-['Outfit'] text-base md:text-lg">{{ $t('pages.orders.purchaseComplete.description') }}</p>

      <CTAButton 
        :text="$t('pages.orders.purchaseComplete.accessReport')"
        size="md"
        rounded="pill"
        bg-color="#009D77"
        hover-bg-color="#0AA17F"
        active-bg-color="#008A68"
        class="w-full"
        @click="goToReport"
      />

      <p class="text-gray-500 mt-3 mb-6 font-['Outfit'] text-sm">{{ $t('pages.orders.purchaseComplete.accessNote') }}</p>

      <CTAButton 
        :text="$t('pages.orders.purchaseComplete.downloadGuidebook')"
        size="md"
        rounded="pill"
        bg-color="#0F172A"
        hover-bg-color="#1F2937"
        active-bg-color="#111827"
        class="w-full"
        @click="downloadGuidebook"
      />

      <p class="text-gray-500 mt-3 font-['Outfit'] text-sm">{{ $t('pages.orders.purchaseComplete.downloadNote') }}</p>

      <NuxtLink to="/" class="mt-8 text-green-600 hover:text-green-700 font-medium">{{ $t('pages.orders.purchaseComplete.goHome') }}</NuxtLink>
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
