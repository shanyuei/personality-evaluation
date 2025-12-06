<template>
  <main class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6 md:px-10">
    <div class="max-w-[1200px] mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-3xl md:text-4xl font-['Outfit'] font-bold text-gray-900">{{ $t('pages.legal.terms.title') }}</h1>
        <p class="text-gray-600 max-w-2xl mx-auto mt-3">{{ $t('pages.legal.terms.description') }}</p>
      </div>

      <div class="space-y-8">
        <section v-for="(sec, idx) in sections" :key="idx" class="bg-white rounded-2xl shadow-sm border p-6">
          <h2 class="text-xl md:text-2xl font-['Outfit'] font-semibold text-gray-900 mb-3">{{ sec.title }}</h2>
          <p class="text-gray-700">{{ sec.body }}</p>
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
//   title: () => t('pages.legal.terms.title') as string,
//   description: () => t('pages.legal.terms.description') as string,
//   ogTitle: () => t('pages.legal.terms.title') as string,
//   ogDescription: () => t('pages.legal.terms.description') as string
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

