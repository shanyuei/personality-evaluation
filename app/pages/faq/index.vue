<template>
  <main class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6 md:px-10">
    <div class="max-w-[1200px] mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-3xl md:text-4xl font-['Outfit'] font-bold text-gray-900">{{ $t('pages.faq.title') }}</h1>
        <p class="text-gray-600 max-w-2xl mx-auto mt-3">{{ $t('pages.faq.description') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <aside class="md:col-span-1">
          <div class="bg-white rounded-2xl shadow-sm border p-6">
            <ul class="space-y-3">
              <li><a href="#general" class="text-gray-800 hover:text-green-600 font-medium">{{ $t('pages.faq.nav.general') }}</a></li>
              <li><a href="#integration" class="text-gray-800 hover:text-green-600 font-medium">{{ $t('pages.faq.nav.integration') }}</a></li>
              <li><a href="#account" class="text-gray-800 hover:text-green-600 font-medium">{{ $t('pages.faq.nav.account') }}</a></li>
              <li><a href="#billing" class="text-gray-800 hover:text-green-600 font-medium">{{ $t('pages.faq.nav.billing') }}</a></li>
            </ul>
          </div>
        </aside>

        <section class="md:col-span-2 space-y-10">
          <FAQSection
            id="general"
            :title="$t('pages.faq.sections.general.title')"
            :description="$t('pages.faq.sections.general.desc')"
            :items="generalItems"
            :accordion="true"
            :default-expanded-index="0"
          />

          <FAQSection
            id="integration"
            :title="$t('pages.faq.sections.integration.title')"
            :description="$t('pages.faq.sections.integration.desc')"
            :items="integrationItems"
            :accordion="true"
            :default-expanded-index="null"
          />

          <FAQSection
            id="account"
            :title="$t('pages.faq.sections.account.title')"
            :description="$t('pages.faq.sections.account.desc')"
            :items="accountItems"
            :accordion="true"
            :default-expanded-index="null"
          />

          <FAQSection
            id="billing"
            :title="$t('pages.faq.sections.billing.title')"
            :description="$t('pages.faq.sections.billing.desc')"
            :items="billingItems"
            :accordion="true"
            :default-expanded-index="null"
          />
        </section>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import FAQSection from '@/components/FAQSection.vue'
const { t } = useI18n()
definePageMeta({
  title: () => t('pages.faq.title') as string
})
useSeoMeta({
  title: () => t('pages.faq.title') as string,
  description: () => t('pages.faq.description') as string,
  ogTitle: () => t('pages.faq.title') as string,
  ogDescription: () => t('pages.faq.description') as string
})

const generalItems = [
  { question: t('pages.faq.sections.general.q1'), answer: t('pages.faq.sections.general.a1') },
  { question: t('pages.faq.sections.general.q2'), answer: t('pages.faq.sections.general.a2') },
  { question: t('pages.faq.sections.general.q3'), answer: t('pages.faq.sections.general.a3') }
]

const integrationItems = [
  { question: t('pages.faq.sections.integration.q1'), answer: t('pages.faq.sections.integration.a1') },
  { question: t('pages.faq.sections.integration.q2'), answer: t('pages.faq.sections.integration.a2') },
  { question: t('pages.faq.sections.integration.q3'), answer: t('pages.faq.sections.integration.a3') }
]

const accountItems = [
  { question: t('pages.faq.sections.account.q1'), answer: t('pages.faq.sections.account.a1') },
  { question: t('pages.faq.sections.account.q2'), answer: t('pages.faq.sections.account.a2') },
  { question: t('pages.faq.sections.account.q3'), answer: t('pages.faq.sections.account.a3') }
]

const billingItems = [
  { question: t('pages.faq.sections.billing.q1'), answer: t('pages.faq.sections.billing.a1') },
  { question: t('pages.faq.sections.billing.q2'), answer: t('pages.faq.sections.billing.a2') },
  { question: t('pages.faq.sections.billing.q3'), answer: t('pages.faq.sections.billing.a3') }
]
</script>

<style scoped>
</style>

