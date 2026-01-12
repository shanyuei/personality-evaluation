<template>
  <div class=" uno-flex uno-flex-col uno-items-center uno-justify-center uno-px-6 uno-py-10 md:uno-py-16">
    <div class="uno-max-w-md uno-w-full uno-flex uno-flex-col uno-items-center uno-text-center">
      <div
        class="uno-w-16 uno-h-16 md:uno-w-20 md:uno-h-20 uno-rounded-full  uno-flex uno-items-center uno-justify-center uno-mb-6 md:uno-mb-8">
        <nuxt-img src="/images/common/pay-card-1.png" alt="pay-card-1" width="96" height="96" />
      </div>

      <h1 class="uno-text-3xl md:uno-text-5xl uno-font-bold uno-text-gray-900 uno-mb-3 md:uno-mb-4 uno-font-['Outfit']">
        {{ $t('pages.orders.purchaseComplete.title') }}</h1>
      <p class="uno-text-gray-600 uno-mb-6 md:uno-mb-8 uno-font-['Outfit'] uno-text-sm md:uno-text-lg">
        {{ $t('pages.orders.purchaseComplete.description') }}
      </p>

      <UButton
        class="uno-w-full uno-h-[48px] uno-font-['Outfit']"
        :ui="UButtonTheme"
        @click="goToReport">
        {{ $t('pages.orders.purchaseComplete.accessReport') }}
      </UButton>

      <p class="uno-text-gray-500 uno-mt-3 uno-mb-6 uno-font-['Outfit'] uno-text-sm md:uno-text-base">
        {{ $t('pages.orders.purchaseComplete.accessNote') }}
      </p>

      <UButton
        :ui="UButtonThemeDark"
        class="uno-w-full uno-h-[48px] uno-font-['Outfit']"
        @click="downloadGuidebook">
        {{ $t('pages.orders.purchaseComplete.downloadGuidebook') }}
      </UButton>

    </div>
  </div>
</template>

<script setup lang="ts">
  
  
  import UButtonTheme, { UButtonThemeDark } from '~/theme/UButton'
const { t } = useI18n()
const localePath = useLocalePath()
definePageMeta({
  title: () => 'pages.orders.purchaseComplete.title',
  layoutShowMenu:false,
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
