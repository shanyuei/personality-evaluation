<template>
  <div class="uno-font-['Outfit']">

    <!-- Pricing Section -->
    <section class="page-container uno-pt-12 sm:uno-pt-16 md:uno-pt-20 uno-pb-12 sm:uno-pb-16 md:uno-pb-24">
      <div class="uno-text-center uno-mb-12 sm:uno-mb-23px">
        <h1 class="uno-text-[#011813] uno-text-[40px] uno-font-Outfit uno-font-[600] uno-mb-12px">
          {{ $t('pages.pricing.title') }}
        </h1>
        <p class="uno-text-[#4E5255] uno-text-sm uno-font-Outfit uno-max-w-3xl uno-mx-auto uno-px-4">
          {{ $t('pages.pricing.subtitle') }}
        </p>
      </div>

      <div class="uno-grid uno-grid-cols-1 lg:uno-grid-cols-3 uno-gap-6 md:uno-gap-8 uno-items-start">
        <div v-for="plan in plans" :key="plan.key"
          class="uno-rounded-[16px] uno-p-24px  uno-border uno-shadow-sm hover:uno-shadow-md uno-transition-all uno-cursor-pointer uno-relative uno-overflow-hidden"
          :class="[
            selectedPlan === plan.key
              ? 'uno-bg-[#E8FAF5] uno-border-1 uno-border-solid uno-border-[#E7E7E8] uno-shadow-lg'
              : 'uno-bg-white uno-border-1 uno-border-solid uno-border-[#E7E7E8]'
          ]" @click="selectedPlan = plan.key">
          <div v-if="plan.badge"
            class="uno-absolute uno-top-24px uno-right-24px uno-w-[96px] uno-h-[33px] uno-px-[16px] uno-py-[6px] uno-gap-8px uno-bg-[#39EDC1] uno-text-[#011813] uno-text-[14px] uno-font-Outfit uno-font-[500] uno-leading-[1.5] uno-rounded-[8px]">
            {{ $t(plan.badge) }}
          </div>

          <h3 class="uno-text-[24px] uno-font-Outfit uno-font-[600] uno-text-[#011813] uno-mb-2">{{ plan.name }}</h3>
          <p class="uno-text-[#4E5255] uno-text-sm uno-mb-6 uno-min-h-[40px]"></p>

          <div class="uno-flex uno-items-baseline uno-gap-1 uno-mb-1">
            <span class="uno-text-[40px] uno-font-Outfit uno-font-bold uno-text-[#011813]">{{ plan.unit }}{{ plan.price
              }}</span>
            <span class="uno-text-[#4E5255] uno-text-[28px] uno-font-Outfit uno-font-[500] uno-leading-[1.5] uno-text-center">/{{ plan.currency }}</span>
          </div>
          <!-- <div class="uno-text-xs uno-text-[#4E5255] uno-mb-6 uno-h-[20px]">
            {{ plan.billingFallback ? ($t('pages.ebooks.oneTime') || 'Auto-renews after 7 Days') : $t(`pages.pricing.plans.${plan.key}.billing`) }}
          </div> -->

          <button :class="[
            selectedPlan === plan.key
              ? 'uno-bg-[#009D77] hover:uno-bg-[var(--color-green-2)] uno-text-white'
              : 'uno-bg-[#009D77] hover:uno-bg-[var(--color-green-2)] uno-text-white'
          ]"
            class="uno-w-full uno-mt-6 uno-h-[48px] uno-rounded-[12px] uno-font-Outfit uno-font-bold uno-text-[18px]  uno-transition-colors"
            @click.stop="handleCreateOrder(plan)">
            {{ $t(`pages.pricing.plans.${plan.key}.button`) }}
          </button>
          <!-- 分割线 -->
          <div class="uno-w-full uno-h-[1px] uno-bg-[#E7E7E8] uno-mt-24px uno-mb-12px"></div>
          <div class="uno-space-y-4">
            <div
              class="uno-text-[14px] uno-font-Outfit uno-font-normal uno-text-[#8D8E8F] uno-tracking-wider uno-uppercase">
              PUBLISHING</div>
            <ul class="uno-space-y-3">
              <li v-for="(feat, i) in features" :key="i"
                class="uno-flex uno-items-center uno-justify-between uno-gap-3">
                <span class="uno-text-[#4E5255] uno-text-sm uno-font-Outfit"
                  :class="{ 'uno-text-[#011813]': selectedPlan === plan.key }">{{ feat }}</span>
                <NuxtImg src="/images/pricing/1.png" alt="Feature Included" class="uno-w-5 uno-h-5 uno-object-contain"
                  loading="lazy" format="webp" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- What You Will Receive -->
    <div class="uno-receive-section  uno-bg-gray-5 uno-relative">
        <NuxtImg src="/theme/home/receive-box-bg-h5.png" alt="" aria-hidden="true" width="375" height="1920"
            class="uno-absolute uno-inset-0 uno--z-10 uno-pointer-events-none uno-object-cover uno-object-center uno-block md:uno-hidden"
            uno-preload />
        <NuxtImg src="/theme/home/receive-box-bg-pc.png" alt="" aria-hidden="true" width="100vw" height="100%"
            class="uno-w-full uno-h-[100%]  uno-absolute uno-top-0 uno-left-0 uno--z-10 uno-pointer-events-none uno-hidden md:uno-block"
            uno-preload />
        <div
            class="page-container uno-px-4 uno-py-8 sm:uno-py-12 md:uno-py-16 lg:uno-py-20 xl:uno-py-24 relative z-10">
            <h2
                class="uno-text-xl sm:uno-text-2xl md:uno-text-[48px] uno-font-Outfit uno-font-bold uno-text-center uno-mb-2 sm:uno-mb-3 md:uno-mb-4">
                {{ $t('pages.home.receive.title') }}
            </h2>
            <p
                class="uno-text-center uno-text-gray-600 uno-text-xs sm:uno-text-sm md:uno-text-base uno-mb-6 sm:uno-mb-8 md:uno-mb-16 uno-max-w-3xl uno-mx-auto">
                {{ $t('pages.home.receive.desc') }}
            </p>

            <!-- 六个卡片布局 -->
            <!-- 循环展示 receiveCards -->
            <div
                class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-[24px] sm:uno-gap-[24px] md:uno-gap-[24px]">
                <div v-for="(card, index) in receiveCards" :key="index"
                    class="uno-bg-white uno-rounded-[32px] uno-shadow-[0_2px_8px_rgba(0,0,0,0.04)] uno-p-[32px] uno-border uno-border-solid uno-border-[#E7E7E8] uno-flex uno-flex-col uno-items-center uno-justify-between uno-text-center uno-min-h-[256px]">
                    <div
                        class="uno-w-64px uno-h-64px sm:uno-w-64px sm:uno-h-64px uno-flex uno-items-center uno-justify-center uno-bg-gray-50 uno-rounded-full uno-mb-8px">
                        <NuxtImg :src="card.icon" :alt="card.alt" width="64" height="64" />
                    </div>
                    <h3
                        class="uno-text-lg sm:uno-text-xl md:uno-text-[20px] uno-font-Outfit uno-font-[500] uno-leading-tight uno-px-2 uno-mb-12px">
                        {{ $t(card.titleKey) }}
                    </h3>
                    <p
                        class="uno-text-gray-500 uno-text-sm sm:uno-text-base uno-font-Outfit uno-leading-relaxed">
                        {{ $t(card.descKey) }}
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- FAQ Section -->
    <FAQSection :title="$t('pages.pricing.faq.title')" :description="$t('pages.pricing.faq.subtitle')"
      :items="faqItems" />

  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import FAQSection from '~/components/FAQSection.vue';
import { getPlanList, createOrder } from '~/api/tests';

const { t } = useI18n();

definePageMeta({
  title: () => 'seo.pricing.title',
  layoutShowPageTopIcons: false,
  layoutShowCurious: true,
})
useSeoMeta({
  title: () => t('seo.pricing.title') as string,
  description: () => t('seo.pricing.description') as string
})
// Base config to preserve UI logic (keys for i18n, badges)
const planConfig: Record<number, { key: string; badge?: string; billingFallback?: boolean }> = {
  1: { key: 'weekly', billingFallback: true },
  2: { key: 'monthly' },
  3: { key: 'yearly', badge: 'pages.pricing.plans.yearly.badge' }
};

const { data: plansData } = await getPlanList();

const plans = computed(() => {
  const list = plansData.value?.data || [];
  return list.map((item: any) => {
    const config = planConfig[item.id] || { key: 'monthly' }; // Fallback to monthly key if unknown
    return {
      ...item,
      ...config
    };
  });
});

const selectedPlan = ref('yearly');

const handleCreateOrder = async (plan: any) => {
  const reportId = route.query.reportId as string || '';
  console.log('reportId', reportId, route);

  try {
    const { data, error } = await createOrder({
      plan_id: String(plan.id),
      report_id: reportId
    });

    if (error.value) {
      // TODO: Show error notification
      return;
    }

    const order_id = data.value?.data?.order_id;
    if (order_id) {
      navigateTo(localePath({
        path: '/orders/create',
        query: {
          order_id: order_id,
          plan_id: plan.id,
          plan_name: plan.name,
          plan_price: plan.price
        }
      }));
    }
  } catch (err) {
  }
};

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

const localePath = useLocalePath()
const route = useRoute();

const features = computed(() => [
  t('pages.pricing.features.publishing'),
  t('pages.pricing.features.webflow'),
  t('pages.pricing.features.pages'),
  t('pages.pricing.features.cms'),
  t('pages.pricing.features.ai'),
]);

const receiveCards = [
  {
    icon: '/images/home/7.png',
    alt: 'Comprehensive Personality Report',
    titleKey: 'pages.home.receive.card1.title',
    descKey: 'pages.home.receive.card1.desc'
  },
  {
    icon: '/images/home/8.png',
    alt: 'Personalized Course Recommendations',
    titleKey: 'pages.home.receive.card3.title',
    descKey: 'pages.home.receive.card3.desc'
  },
  {
    icon: '/images/home/9.png',
    alt: 'Skill Assessment Tests',
    titleKey: 'pages.home.receive.card5.title',
    descKey: 'pages.home.receive.card5.desc'
  },
  {
    icon: '/images/home/10.png',
    alt: 'Practical Daily Challenges',
    titleKey: 'pages.home.receive.card2.title',
    descKey: 'pages.home.receive.card2.desc'
  },
  {
    icon: '/images/home/11.png',
    alt: 'Learning and Development Library',
    titleKey: 'pages.home.receive.card4.title',
    descKey: 'pages.home.receive.card4.desc'
  },
  {
    icon: '/images/home/12.png',
    alt: 'Certificates of Achievement',
    titleKey: 'pages.home.receive.card6.title',
    descKey: 'pages.home.receive.card6.desc'
  }
]

const whyItems = computed(() => [
  {
    title: t('pages.home.receive.card1.title'),
    desc: t('pages.home.receive.card1.desc'),
    image: '/images/pricing/2.png',
  },
  {
    title: t('pages.home.receive.card3.title'),
    desc: t('pages.home.receive.card3.desc'),
    image: '/images/pricing/3.png',
  },
  {
    title: t('pages.home.receive.card5.title'),
    desc: t('pages.home.receive.card5.desc'),
    image: '/images/pricing/4.png',
  },
  {
    title: t('pages.home.receive.card2.title'),
    desc: t('pages.home.receive.card2.desc'),
    image: '/images/pricing/5.png',
  },
  {
    title: t('pages.home.receive.card4.title'),
    desc: t('pages.home.receive.card4.desc'),
    image: '/images/pricing/6.png',
  },
  {
    title: t('pages.home.receive.card6.title') || 'Transparency and Value',
    desc: t('pages.home.receive.card6.desc'),
    image: '/images/pricing/7.png',
  },
]);

const faqItems = computed(() => [
  {
    question: t('pages.pricing.faq.items.0.q'),
    answer: t('pages.pricing.faq.items.0.a')
  },
  {
    question: t('pages.pricing.faq.items.1.q'),
    answer: t('pages.pricing.faq.items.1.a')
  },
  {
    question: t('pages.pricing.faq.items.2.q'),
    answer: t('pages.pricing.faq.items.2.a')
  },
  {
    question: t('pages.pricing.faq.items.3.q'),
    answer: t('pages.pricing.faq.items.3.a')
  },
  {
    question: t('pages.pricing.faq.items.4.q'),
    answer: t('pages.pricing.faq.items.4.a')
  }
]);



</script>

<style scoped>
/* Custom shadows or tweaks if needed */
</style>
