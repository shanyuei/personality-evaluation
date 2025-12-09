<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-gray-50 uno-to-gray-100 uno-py-12 uno-px-6 md:uno-px-10">
    <div class="page-container">
      <div class="uno-text-center uno-mb-8">
        <h1 class="uno-text-3xl md:uno-text-4xl uno-font-['Outfit'] uno-font-bold uno-text-gray-900">{{ $t('pages.faq.title') }}</h1>
        <p class="uno-text-gray-600 uno-max-w-2xl uno-mx-auto uno-mt-3">{{ $t('pages.faq.description') }}</p>
      </div>

      <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-8">
        <aside class="md:uno-col-span-1">
          <div class="uno-bg-white uno-rounded-2xl uno-shadow-sm uno-border uno-p-6">
            <ul class="uno-space-y-3">
              <li><a href="#general" class="uno-text-gray-800 hover:uno-text-green-600 uno-font-medium">{{ $t('pages.faq.nav.general') }}</a></li>
              <li><a href="#integration" class="uno-text-gray-800 hover:uno-text-green-600 uno-font-medium">{{ $t('pages.faq.nav.integration') }}</a></li>
              <li><a href="#account" class="uno-text-gray-800 hover:uno-text-green-600 uno-font-medium">{{ $t('pages.faq.nav.account') }}</a></li>
              <li><a href="#billing" class="uno-text-gray-800 hover:uno-text-green-600 uno-font-medium">{{ $t('pages.faq.nav.billing') }}</a></li>
            </ul>
          </div>
        </aside>

        <section class="md:uno-col-span-2 uno-space-y-10">
          <!-- <FAQSection
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
          /> -->

          <!-- <FAQSection
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
          /> -->
        </section>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// const { t } = useI18n()
// definePageMeta({
//   title: () => t('pages.faq.title') as string
// })
// useSeoMeta({
//   title: () => t('seo.faq.title') as string,
//   description: () => t('seo.faq.description') as string,
//   ogTitle: () => t('seo.faq.title') as string,
//   ogDescription: () => t('seo.faq.description') as string
// })

// const generalItems = [
//   { question: t('faq.sections.general.q1'), answer: t('faq.sections.general.a1') },
//   { question: t('faq.sections.general.q2'), answer: t('faq.sections.general.a2') },
//   { question: t('faq.sections.general.q3'), answer: t('faq.sections.general.a3') }
// ]

// const integrationItems = [
//   { question: t('faq.sections.integration.q1'), answer: t('faq.sections.integration.a1') },
//   { question: t('faq.sections.integration.q2'), answer: t('faq.sections.integration.a2') },
//   { question: t('faq.sections.integration.q3'), answer: t('faq.sections.integration.a3') }
// ]

// const accountItems = [
//   { question: t('faq.sections.account.q1'), answer: t('faq.sections.account.a1') },
//   { question: t('faq.sections.account.q2'), answer: t('faq.sections.account.a2') },
//   { question: t('faq.sections.account.q3'), answer: t('faq.sections.account.a3') }
// ]

// const billingItems = [
//   { question: t('faq.sections.billing.q1'), answer: t('faq.sections.billing.a1') },
//   { question: t('faq.sections.billing.q2'), answer: t('faq.sections.billing.a2') },
//   { question: t('faq.sections.billing.q3'), answer: t('faq.sections.billing.a3') }
// ]
</script>

<style scoped>
</style>
