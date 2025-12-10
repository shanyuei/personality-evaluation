<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-gray-50 uno-to-gray-100 uno-py-12 uno-px-6 md:uno-px-10">
    <div class="page-container">
      <div class="uno-text-center uno-mb-8">
        <h1 class="uno-text-3xl md:uno-text-4xl uno-font-['Outfit'] uno-font-bold uno-text-gray-900">{{ $t('pages.legal.privacy.title') }}</h1>
        <p class="uno-text-gray-600 uno-max-w-2xl uno-mx-auto uno-mt-3">{{ $t('pages.legal.privacy.description') }}</p>
      </div>

      <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-8">
        <aside class="md:uno-col-span-1">
          <div class="uno-bg-white uno-rounded-2xl uno-shadow-sm uno-border uno-p-6">
            <ul class="uno-space-y-3">
              <li><a href="#general" class="uno-text-gray-800 hover:uno-text-green-600 uno-font-medium">{{ $t('pages.legal.privacy.nav.general') }}</a></li>
              <li><a href="#usage" class="uno-text-gray-800 hover:uno-text-green-600 uno-font-medium">{{ $t('pages.legal.privacy.nav.usage') }}</a></li>
              <li><a href="#sharing" class="uno-text-gray-800 hover:uno-text-green-600 uno-font-medium">{{ $t('pages.legal.privacy.nav.sharing') }}</a></li>
              <li><a href="#cookies" class="uno-text-gray-800 hover:uno-text-green-600 uno-font-medium">{{ $t('pages.legal.privacy.nav.cookies') }}</a></li>
              <li><a href="#changes" class="uno-text-gray-800 hover:uno-text-green-600 uno-font-medium">{{ $t('pages.legal.privacy.nav.changes') }}</a></li>
              <li><a href="#contact" class="uno-text-gray-800 hover:uno-text-green-600 uno-font-medium">{{ $t('pages.legal.privacy.nav.contact') }}</a></li>
            </ul>
          </div>
        </aside>

        <section class="md:uno-col-span-2 uno-space-y-10">
          <div id="general" class="uno-bg-white uno-rounded-2xl uno-shadow-sm uno-border uno-p-6">
            <h2 class="uno-text-xl md:uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-text-gray-900 uno-mb-4">{{ $t('pages.legal.privacy.sections.general.title') }}</h2>
            <p class="uno-text-gray-700">{{ $t('pages.legal.privacy.sections.general.body') }}</p>
          </div>

          <FAQSection
            :title="$t('pages.legal.privacy.sections.usage.title')"
            :description="$t('pages.legal.privacy.sections.usage.desc')"
            :items="usageItems"
            :accordion="true"
            :default-expanded-index="0"
          />

          <FAQSection
            id="sharing"
            :title="$t('pages.legal.privacy.sections.sharing.title')"
            :description="$t('pages.legal.privacy.sections.sharing.desc')"
            :items="sharingItems"
            :accordion="true"
            :default-expanded-index="null"
          />

          <div id="cookies" class="uno-bg-white uno-rounded-2xl uno-shadow-sm uno-border uno-p-6">
            <h2 class="uno-text-xl md:uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-text-gray-900 uno-mb-4">{{ $t('pages.legal.privacy.sections.cookies.title') }}</h2>
            <p class="uno-text-gray-700">{{ $t('pages.legal.privacy.sections.cookies.body') }}</p>
          </div>

          <div id="changes" class="uno-bg-white uno-rounded-2xl uno-shadow-sm uno-border uno-p-6">
            <h2 class="uno-text-xl md:uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-text-gray-900 uno-mb-4">{{ $t('pages.legal.privacy.sections.changes.title') }}</h2>
            <p class="uno-text-gray-700">{{ $t('pages.legal.privacy.sections.changes.body') }}</p>
          </div>

          <div id="contact" class="uno-bg-white uno-rounded-2xl uno-shadow-sm uno-border uno-p-6">
            <h2 class="uno-text-xl md:uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-text-gray-900 uno-mb-4">{{ $t('pages.legal.privacy.sections.contact.title') }}</h2>
            <p class="uno-text-gray-700">{{ $t('pages.legal.privacy.sections.contact.body') }}</p>
          </div>
        </section>
      </div>
    </div>
  </main>
 </template>

 <script setup lang="ts">
 import FAQSection from '@/components/FAQSection.vue'
 const { t } = useI18n()
//  definePageMeta({
//   title: () => t('pages.legal.privacy.title') as string
//  })
//  useSeoMeta({
//   title: () => t('seo.legal.privacy.title') as string,
//   description: () => t('seo.legal.privacy.description') as string,
//   ogTitle: () => t('seo.legal.privacy.title') as string,
//   ogDescription: () => t('seo.legal.privacy.description') as string
//  })

 const usageItems = [
  { question: t('pages.legal.privacy.sections.usage.q1'), answer: t('pages.legal.privacy.sections.usage.a1') },
  { question: t('pages.legal.privacy.sections.usage.q2'), answer: t('pages.legal.privacy.sections.usage.a2') },
  { question: t('pages.legal.privacy.sections.usage.q3'), answer: t('pages.legal.privacy.sections.usage.a3') }
 ]

 const sharingItems = [
  { question: t('pages.legal.privacy.sections.sharing.q1'), answer: t('pages.legal.privacy.sections.sharing.a1') },
  { question: t('pages.legal.privacy.sections.sharing.q2'), answer: t('pages.legal.privacy.sections.sharing.a2') }
 ]
 </script>

 <style scoped>
 </style>
