<template>
  <main class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6 md:px-10">
    <div class="max-w-[1200px] mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-3xl md:text-4xl font-['Outfit'] font-bold text-gray-900">{{ $t('pages.legal.privacy.title') }}</h1>
        <p class="text-gray-600 max-w-2xl mx-auto mt-3">{{ $t('pages.legal.privacy.description') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <aside class="md:col-span-1">
          <div class="bg-white rounded-2xl shadow-sm border p-6">
            <ul class="space-y-3">
              <li><a href="#general" class="text-gray-800 hover:text-green-600 font-medium">{{ $t('pages.legal.privacy.nav.general') }}</a></li>
              <li><a href="#usage" class="text-gray-800 hover:text-green-600 font-medium">{{ $t('pages.legal.privacy.nav.usage') }}</a></li>
              <li><a href="#sharing" class="text-gray-800 hover:text-green-600 font-medium">{{ $t('pages.legal.privacy.nav.sharing') }}</a></li>
              <li><a href="#cookies" class="text-gray-800 hover:text-green-600 font-medium">{{ $t('pages.legal.privacy.nav.cookies') }}</a></li>
              <li><a href="#changes" class="text-gray-800 hover:text-green-600 font-medium">{{ $t('pages.legal.privacy.nav.changes') }}</a></li>
              <li><a href="#contact" class="text-gray-800 hover:text-green-600 font-medium">{{ $t('pages.legal.privacy.nav.contact') }}</a></li>
            </ul>
          </div>
        </aside>

        <section class="md:col-span-2 space-y-10">
          <div id="general" class="bg-white rounded-2xl shadow-sm border p-6">
            <h2 class="text-xl md:text-2xl font-['Outfit'] font-semibold text-gray-900 mb-4">{{ $t('pages.legal.privacy.sections.general.title') }}</h2>
            <p class="text-gray-700">{{ $t('pages.legal.privacy.sections.general.body') }}</p>
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

          <div id="cookies" class="bg-white rounded-2xl shadow-sm border p-6">
            <h2 class="text-xl md:text-2xl font-['Outfit'] font-semibold text-gray-900 mb-4">{{ $t('pages.legal.privacy.sections.cookies.title') }}</h2>
            <p class="text-gray-700">{{ $t('pages.legal.privacy.sections.cookies.body') }}</p>
          </div>

          <div id="changes" class="bg-white rounded-2xl shadow-sm border p-6">
            <h2 class="text-xl md:text-2xl font-['Outfit'] font-semibold text-gray-900 mb-4">{{ $t('pages.legal.privacy.sections.changes.title') }}</h2>
            <p class="text-gray-700">{{ $t('pages.legal.privacy.sections.changes.body') }}</p>
          </div>

          <div id="contact" class="bg-white rounded-2xl shadow-sm border p-6">
            <h2 class="text-xl md:text-2xl font-['Outfit'] font-semibold text-gray-900 mb-4">{{ $t('pages.legal.privacy.sections.contact.title') }}</h2>
            <p class="text-gray-700">{{ $t('pages.legal.privacy.sections.contact.body') }}</p>
          </div>
        </section>
      </div>
    </div>
  </main>
 </template>

 <script setup lang="ts">
 import FAQSection from '@/components/FAQSection.vue'
 const { t } = useI18n()
 definePageMeta({
  title: () => t('pages.legal.privacy.title') as string
 })
 useSeoMeta({
  title: () => t('pages.legal.privacy.title') as string,
  description: () => t('pages.legal.privacy.description') as string,
  ogTitle: () => t('pages.legal.privacy.title') as string,
  ogDescription: () => t('pages.legal.privacy.description') as string
 })

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

