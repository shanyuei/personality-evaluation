<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-gray-50 uno-to-gray-100 uno-py-12 uno-px-6 md:uno-px-10">
    <div class="uno-max-w-[80%] uno-mx-auto">
      <div class="uno-text-center uno-mb-8">
        <h1 class="uno-text-3xl md:uno-text-4xl uno-font-['Outfit'] uno-font-bold uno-text-gray-900">{{ $t('pages.legal.terms.title') }}</h1>
        <p class="uno-text-gray-600 uno-max-w-2xl uno-mx-auto uno-mt-3">{{ $t('pages.legal.terms.description') }}</p>
      </div>

      <div class="uno-space-y-8">
        <section v-for="(sec, idx) in sections" :key="idx" class="uno-bg-white uno-rounded-2xl uno-shadow-sm uno-border uno-p-6">
          <h2 class="uno-text-xl md:uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-text-gray-900 uno-mb-3">{{ sec.title }}</h2>
          <p class="uno-text-gray-700">{{ sec.body }}</p>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()
// definePageMeta({
//   title: () => t('pages.legal.terms.title') as string
// })
// useSeoMeta({
//   title: () => t('seo.legal.terms.title') as string,
//   description: () => t('seo.legal.terms.description') as string,
//   ogTitle: () => t('seo.legal.terms.title') as string,
//   ogDescription: () => t('seo.legal.terms.description') as string
// })

const sections = [
  { title: t('pages.legal.terms.sections.accept.title'), body: t('pages.legal.terms.sections.accept.body') },
  { title: t('pages.legal.terms.sections.use.title'), body: t('pages.legal.terms.sections.use.body') },
  { title: t('pages.legal.terms.sections.account.title'), body: t('pages.legal.terms.sections.account.body') },
  { title: t('pages.legal.terms.sections.payments.title'), body: t('pages.legal.terms.sections.payments.body') },
  { title: t('pages.legal.terms.sections.content.title'), body: t('pages.legal.terms.sections.content.body') },
  { title: t('pages.legal.terms.sections.prohibited.title'), body: t('pages.legal.terms.sections.prohibited.body') },
  { title: t('pages.legal.terms.sections.termination.title'), body: t('pages.legal.terms.sections.termination.body') },
  { title: t('pages.legal.terms.sections.disclaimer.title'), body: t('pages.legal.terms.sections.disclaimer.body') }
]
</script>

<style scoped>
</style>
