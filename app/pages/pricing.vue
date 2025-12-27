<template>
  <div class="uno-bg-[#F8F9FC] uno-min-h-screen uno-font-['Outfit']">
    
    <!-- Pricing Section -->
    <section class="page-container uno-pt-12 sm:uno-pt-16 md:uno-pt-20 uno-pb-12 sm:uno-pb-16 md:uno-pb-24">
      <div class="uno-text-center uno-mb-12 sm:uno-mb-16">
        <h1 class="uno-text-[#011813] uno-text-3xl sm:uno-text-4xl md:uno-text-5xl uno-font-bold uno-mb-4 sm:uno-mb-6">
          {{ $t('pricing.title') }}
        </h1>
        <p class="uno-text-[#4E5255] uno-text-sm sm:uno-text-base md:uno-text-lg uno-max-w-3xl uno-mx-auto uno-px-4">
          {{ $t('pricing.subtitle') }}
        </p>
      </div>

      <div class="uno-grid uno-grid-cols-1 lg:uno-grid-cols-3 uno-gap-6 md:uno-gap-8 uno-items-start">
        <!-- Card 1: 7-Day Access -->
        <div class="uno-bg-white uno-rounded-[24px] uno-p-6 sm:uno-p-8 uno-border uno-border-[#E7E7E8] uno-shadow-sm hover:uno-shadow-md uno-transition-shadow">
          <h3 class="uno-text-xl uno-font-bold uno-text-[#011813] uno-mb-2">{{ $t('pricing.plans.weekly.title') }}</h3>
          <p class="uno-text-[#4E5255] uno-text-sm uno-mb-6 uno-min-h-[40px]">{{ $t('pricing.plans.weekly.description') }}</p>
          
          <div class="uno-flex uno-items-baseline uno-gap-1 uno-mb-1">
            <span class="uno-text-4xl uno-font-bold uno-text-[#011813]">{{ $t('pricing.plans.weekly.price') }}</span>
            <span class="uno-text-[#4E5255] uno-text-sm">{{ $t('pricing.plans.weekly.unit') }}</span>
          </div>
          <div class="uno-text-xs uno-text-[#4E5255] uno-mb-6 uno-h-[20px]">
            {{ $t('pages.ebooks.oneTime') || 'Auto-renews after 7 Days' }}
          </div>

          <button class="uno-w-full uno-h-[48px] uno-bg-[#009D77] hover:uno-bg-[var(--color-green-2)] uno-text-white uno-rounded-[12px] uno-font-bold uno-mb-8 uno-transition-colors">
            {{ $t('pricing.plans.weekly.button') }}
          </button>

          <div class="uno-space-y-4">
            <div class="uno-text-xs uno-font-bold uno-text-[#011813] uno-tracking-wider uno-uppercase">PUBLISHING</div>
            <ul class="uno-space-y-3">
              <li v-for="(feat, i) in features" :key="i" class="uno-flex uno-items-center uno-gap-3">
                <div class="uno-w-5 uno-h-5 uno-rounded-full uno-border uno-border-[#E7E7E8] uno-flex uno-items-center uno-justify-center">
                   <IconCheck class="uno-w-3 uno-h-3 uno-text-[#009D77]" />
                </div>
                <span class="uno-text-[#4E5255] uno-text-sm">{{ feat }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Card 2: Monthly -->
        <div class="uno-bg-white uno-rounded-[24px] uno-p-6 sm:uno-p-8 uno-border uno-border-[#E7E7E8] uno-shadow-sm hover:uno-shadow-md uno-transition-shadow">
          <h3 class="uno-text-xl uno-font-bold uno-text-[#011813] uno-mb-2">{{ $t('pricing.plans.monthly.title') }}</h3>
          <p class="uno-text-[#4E5255] uno-text-sm uno-mb-6 uno-min-h-[40px]">{{ $t('pricing.plans.monthly.description') }}</p>
          
          <div class="uno-flex uno-items-baseline uno-gap-1 uno-mb-1">
            <span class="uno-text-4xl uno-font-bold uno-text-[#011813]">{{ $t('pricing.plans.monthly.price') }}</span>
            <span class="uno-text-[#4E5255] uno-text-sm">{{ $t('pricing.plans.monthly.unit') }}</span>
          </div>
          <div class="uno-text-xs uno-text-[#4E5255] uno-mb-6 uno-h-[20px]">
             {{ $t('pricing.plans.monthly.billing') }}
          </div>

          <button class="uno-w-full uno-h-[48px] uno-bg-[#009D77] hover:uno-bg-[var(--color-green-2)] uno-text-white uno-rounded-[12px] uno-font-bold uno-mb-8 uno-transition-colors">
            {{ $t('pricing.plans.monthly.button') }}
          </button>

          <div class="uno-space-y-4">
            <div class="uno-text-xs uno-font-bold uno-text-[#011813] uno-tracking-wider uno-uppercase">PUBLISHING</div>
            <ul class="uno-space-y-3">
              <li v-for="(feat, i) in features" :key="i" class="uno-flex uno-items-center uno-gap-3">
                <div class="uno-w-5 uno-h-5 uno-rounded-full uno-border uno-border-[#E7E7E8] uno-flex uno-items-center uno-justify-center">
                   <IconCheck class="uno-w-3 uno-h-3 uno-text-[#009D77]" />
                </div>
                <span class="uno-text-[#4E5255] uno-text-sm">{{ feat }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Card 3: Yearly (Popular) -->
        <div class="uno-bg-[#E8FAF5] uno-rounded-[24px] uno-p-6 sm:uno-p-8 uno-border uno-border-[#009D77] uno-shadow-lg uno-relative uno-overflow-hidden">
          <div class="uno-absolute uno-top-6 uno-right-6 uno-bg-[#009D77] uno-text-white uno-text-xs uno-font-bold uno-px-3 uno-py-1 uno-rounded-full">
            {{ $t('pricing.plans.yearly.badge') }}
          </div>
          
          <h3 class="uno-text-xl uno-font-bold uno-text-[#011813] uno-mb-2">{{ $t('pricing.plans.yearly.title') }}</h3>
          <p class="uno-text-[#4E5255] uno-text-sm uno-mb-6 uno-min-h-[40px]">{{ $t('pricing.plans.yearly.description') }}</p>
          
          <div class="uno-flex uno-items-baseline uno-gap-1 uno-mb-1">
            <span class="uno-text-4xl uno-font-bold uno-text-[#011813]">{{ $t('pricing.plans.yearly.price') }}</span>
            <span class="uno-text-[#4E5255] uno-text-sm">{{ $t('pricing.plans.yearly.unit') }}</span>
          </div>
          <div class="uno-text-xs uno-text-[#4E5255] uno-mb-6 uno-h-[20px]">
             {{ $t('pricing.plans.yearly.billing') }}
          </div>

          <button class="uno-w-full uno-h-[48px] uno-bg-[#009D77] hover:uno-bg-[var(--color-green-2)] uno-text-white uno-rounded-[12px] uno-font-bold uno-mb-8 uno-transition-colors">
            {{ $t('pricing.plans.yearly.button') }}
          </button>

          <div class="uno-space-y-4">
            <div class="uno-text-xs uno-font-bold uno-text-[#011813] uno-tracking-wider uno-uppercase">PUBLISHING</div>
            <ul class="uno-space-y-3">
              <li v-for="(feat, i) in features" :key="i" class="uno-flex uno-items-center uno-gap-3">
                <div class="uno-w-5 uno-h-5 uno-rounded-full uno-bg-[#009D77] uno-flex uno-items-center uno-justify-center">
                   <IconCheck class="uno-w-3 uno-h-3 uno-text-white" />
                </div>
                <span class="uno-text-[#011813] uno-text-sm">{{ feat }}</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>

    <!-- Why Our Test Stands Out -->
    <section class="page-container uno-py-12 sm:uno-py-16">
      <div class="uno-text-center uno-mb-12">
        <h2 class="uno-text-[#011813] uno-text-2xl sm:uno-text-3xl md:uno-text-4xl uno-font-bold uno-mb-4">
          {{ $t('pricing.why.title') }}
        </h2>
        <p class="uno-text-[#4E5255] uno-text-sm sm:uno-text-base uno-max-w-2xl uno-mx-auto">
          {{ $t('pricing.why.subtitle') }}
        </p>
      </div>

      <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-2 lg:uno-grid-cols-3 uno-gap-6">
        <div v-for="(item, idx) in whyItems" :key="idx" class="uno-bg-white uno-rounded-[24px] uno-p-8 uno-text-center uno-border uno-border-[#E7E7E8] uno-shadow-sm hover:uno-shadow-md uno-transition-shadow">
          <div class="uno-w-16 uno-h-16 uno-mx-auto uno-mb-6 uno-rounded-full uno-bg-[#F5F8FF] uno-flex uno-items-center uno-justify-center">
            <!-- Icon Placeholder: Using dynamic icons or generic SVGs -->
             <component :is="item.icon" class="uno-w-8 uno-h-8" :class="item.iconColor" />
          </div>
          <h3 class="uno-text-lg uno-font-bold uno-text-[#011813] uno-mb-3">{{ item.title }}</h3>
          <p class="uno-text-[#4E5255] uno-text-sm">{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <FAQSection 
      :title="$t('pricing.faq.title')" 
      :description="$t('pricing.faq.subtitle')"
      :items="faqItems" 
    />

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import FAQSection from '~/components/FAQSection.vue';

// Inline Icon Components
const IconCheck = {
  template: `<svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6667 1.33334L4.00001 8.00001L1.33334 5.33334" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
}

const IconReport = { template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>` }
const IconCourse = { template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>` }
const IconSkill = { template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>` }
const IconDaily = { template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>` }
const IconLibrary = { template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l9 4.9V17L12 22l-9-4.9V7z"></path></svg>` }
const IconValue = { template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>` }

const { t } = useI18n();

const features = computed(() => [
  t('pricing.features.publishing'),
  t('pricing.features.webflow'),
  t('pricing.features.pages'),
  t('pricing.features.cms'),
  t('pricing.features.ai'),
]);

const whyItems = computed(() => [
  {
    title: t('pages.home.receive.card1.title'),
    desc: t('pages.home.receive.card1.desc'),
    icon: IconReport,
    iconColor: 'uno-text-amber-500'
  },
  {
    title: t('pages.home.receive.card3.title'),
    desc: t('pages.home.receive.card3.desc'),
    icon: IconCourse,
    iconColor: 'uno-text-pink-500'
  },
  {
    title: t('pages.home.receive.card5.title'),
    desc: t('pages.home.receive.card5.desc'),
    icon: IconSkill,
    iconColor: 'uno-text-emerald-500'
  },
  {
    title: t('pages.home.receive.card2.title'),
    desc: t('pages.home.receive.card2.desc'),
    icon: IconDaily,
    iconColor: 'uno-text-rose-500'
  },
  {
    title: t('pages.home.receive.card4.title'),
    desc: t('pages.home.receive.card4.desc'),
    icon: IconLibrary,
    iconColor: 'uno-text-indigo-500'
  },
  {
    title: t('pages.home.receive.card6.title') || 'Transparency and Value',
    desc: t('pages.home.receive.card6.desc'),
    icon: IconValue,
    iconColor: 'uno-text-yellow-500'
  },
]);

const faqItems = computed(() => [
  {
    question: t('pricing.faq.items.0.q'),
    answer: t('pricing.faq.items.0.a')
  },
  {
    question: t('pricing.faq.items.1.q'),
    answer: t('pricing.faq.items.1.a')
  },
  {
    question: t('pricing.faq.items.2.q'),
    answer: t('pricing.faq.items.2.a')
  },
  {
    question: t('pricing.faq.items.3.q'),
    answer: t('pricing.faq.items.3.a')
  },
  {
    question: t('pricing.faq.items.4.q'),
    answer: t('pricing.faq.items.4.a')
  }
]);

useHead({
  title: t('pricing.title'),
  meta: [
    { name: 'description', content: t('pricing.subtitle') }
  ]
})
</script>

<style scoped>
/* Custom shadows or tweaks if needed */
</style>
