<template>
  <div class="uno-font-Outfit">

    <!-- Pricing Section -->
    <section class="page-container uno-pt-12 sm:uno-pt-16 md:uno-pt-20 uno-pb-12 sm:uno-pb-16 md:uno-pb-24">
      <div class="uno-text-center uno-mb-12 sm:uno-mb-32px">
        <h1 class="uno-text-[#011813] uno-text-[40px] uno-font-Outfit uno-font-[600] uno-mb-12px">
          {{ $t('pages.pricing.title') }}
        </h1>
        <p class="uno-text-[#4E5255] uno-text-sm uno-font-Outfit uno-max-w-3xl uno-mx-auto uno-px-4">
          {{ $t('pages.pricing.subtitle') }}
        </p>
      </div>

      <div class="uno-grid uno-grid-cols-1 lg:uno-grid-cols-3 uno-gap-6 md:uno-gap-8 uno-items-start">
        <div v-for="plan in plans" :key="plan.key"
          class="uno-rounded-[16px] uno-p-24px uno-border uno-shadow-none hover:uno-shadow-[0_4px_12px_0px_#E7E7E8] uno-transition-all uno-cursor-pointer uno-relative uno-overflow-hidden"
          :class="[
            selectedPlan === plan.key
              ? 'uno-bg-[#E8FAF5] uno-border-1 uno-border-solid uno-border-[#E7E7E8] '
              : 'uno-bg-white uno-border-1 uno-border-solid uno-border-[#E7E7E8]'
          ]" @click="selectedPlan = plan.key">
          <div v-if="plan.badge"
            class="uno-absolute uno-top-24px uno-right-24px uno-w-[96px] uno-h-[33px] uno-px-[16px] uno-py-[6px] uno-gap-8px uno-bg-[#39EDC1] uno-text-[#011813] uno-text-[14px] uno-font-Outfit uno-font-[500] uno-leading-[1.5] uno-rounded-[8px]">
            {{ $t(plan.badge) }}
          </div>

          <h3 class="uno-text-[20px] md:uno-text-[24px] uno-font-Outfit uno-font-[600] uno-text-[#011813] uno-mb-2">{{
            plan.name }}</h3>
          <p class="uno-text-[#4E5255] uno-text-sm uno-mb-6 uno-min-h-[40px] uno-hidden md:uno-block"></p>

          <div class="uno-flex uno-items-baseline uno-gap-1 uno-mb-1">
            <span class="uno-text-[32px] md:uno-text-[40px] uno-font-Outfit uno-font-bold uno-text-[#011813]">{{
              plan.unit }}{{ plan.price
              }}</span>
            <span
              class="uno-text-[#4E5255] uno-text-[20px] md:uno-text-[28px] uno-font-Outfit uno-font-[500] uno-leading-[1.5] uno-text-center">/{{
                plan.currency }}</span>
          </div>
          <div class="uno-text-xs uno-text-[#4E5255] uno-mb-6 uno-h-[20px]">
            <!-- {{ plan.billingFallback ? ($t('pages.ebooks.oneTime') || 'Auto-renews after 7 Days') : $t(`pages.pricing.plans.${plan.key}.billing`) }} -->
          </div>

          <PrimaryButton
            class="uno-w-full uno-mt-6"
            height="48px"
            @click="handleCreateOrder(plan)">
            {{ $t(`pages.pricing.plans.${plan.key}.button`) }}
          </PrimaryButton>
          <!-- 分割线 -->
          <div class="uno-w-full uno-h-[1px] uno-bg-[#E7E7E8] uno-mt-24px uno-mb-12px"></div>
          <div class="uno-space-y-4">
            <div
              class="uno-text-[14px] uno-font-Outfit uno-font-normal uno-text-[#8D8E8F] uno-tracking-wider uno-uppercase">
              {{ $t('pages.pricing.includedFeatures') }}
            </div>
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
      <img src="/theme/home/receive-box-bg-h5.png" alt="" aria-hidden="true"
        class="uno-absolute uno-inset-0 uno--z-10 uno-pointer-events-none uno-object-cover uno-object-center uno-block md:uno-hidden uno-w-full">
      <NuxtImg src="/theme/home/receive-box-bg-pc.png" alt="" aria-hidden="true" width="100vw" height="100%"
        class="uno-w-full uno-h-[100%]  uno-absolute uno-top-0 uno-left-0 uno--z-10 uno-pointer-events-none uno-hidden md:uno-block"
        uno-preload />
      <div
        class="page-container lg:uno-px-4 uno-py-8 sm:uno-py-12 md:uno-py-120px lg:uno-py-120px xl:uno-py-120px relative z-10">
        <h2
          class="uno-text-[32px] sm:uno-text-2xl md:uno-text-[48px] uno-font-Outfit uno-font-semibold uno-text-center uno-mb-2 sm:uno-mb-3 md:uno-mb-4">
          {{ $t('common.receive.title') }}
        </h2>
        <p
          class="uno-text-center uno-text-gray-600 uno-text-[16px] sm:uno-text-sm md:uno-text-base uno-mb-6 sm:uno-mb-8 md:uno-mb-16 uno-max-w-3xl uno-mx-auto">
          {{ $t('common.receive.desc') }}
        </p>

        <!-- 六个卡片布局 -->
        <!-- 循环展示 receiveCards -->
        <div
          class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-[24px] sm:uno-gap-[24px] md:uno-gap-[12px] lg:uno-gap-[24px]">
          <div v-for="(card, index) in receiveCards" :key="index"
            class="uno-bg-white sm:uno-w-full md:uno-w-full uno-rounded-[32px] uno-shadow-[0_2px_8px_rgba(0,0,0,0.04)] uno-p-[32px_8px] lg:uno-p-[32px] uno-border uno-border-solid uno-border-[#E7E7E8] uno-flex uno-flex-col uno-items-center uno-justify-start uno-text-center uno-min-h-[256px]">
            <div
              class="uno-w-64px uno-h-64px sm:uno-w-64px sm:uno-h-64px uno-flex uno-items-center uno-justify-center uno-bg-gray-50 uno-rounded-full uno-mb-8px">
              <NuxtImg :src="card.icon" :alt="card.alt" width="64" height="64" />
            </div>
            <h3
              class=" uno-max-[250px]  uno-text-[20px] sm:uno-text-xl md:uno-text-[20px] uno-font-Outfit uno-font-medium uno-leading-tight uno-px-2 uno-mb-12px">
              {{ $t(card.titleKey) }}
            </h3>
            <p
              class=" uno-max-[250px]  uno-text-[#4E5255] uno-text-[16px] sm:uno-text-base uno-font-Outfit uno-leading-relaxed uno-mt-auto">
              {{ $t(card.descKey) }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="uno-relative uno-z-10 uno-bg-#FFF">
      <FAQSection :title="$t('common.faq.title')" :description="$t('common.faq.desc')"
      :items="faqItems" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import FAQSection from '~/components/FAQSection.vue';
import PrimaryButton from '~/components/ui/PrimaryButton.vue';
import { getPlanList, createOrder } from '~/api/tests';

const { t } = useI18n();

definePageMeta({
  title: () => 'seo.pricing.title',
  layoutShowPageTopIcons: false,
  layoutShowCurious: true,
})
useSeoMeta({
  title: () => t('seo.pricing.title', { separator: '|' }) as string,
  description: () => t('seo.pricing.description') as string
})
// Base config to preserve UI logic (keys for i18n, badges)
const planConfig: Record<number, { key: string; badge?: string; billingFallback?: boolean }> = {
  1: { key: 'weekly', },
  2: { key: 'monthly' },
  3: { key: 'yearly', badge: t("pages.pricing.badge") }
};

const { data: plansData } = await getPlanList();
const { $device } = useNuxtApp();
const plans = computed(() => {
  const list = plansData.value?.data || [];
  const processedList = list.map((item: any) => {
    const config = planConfig[item.id] || { key: 'monthly' };
    return {
      ...item,
      ...config
    };
  });

  // 在移动端和pad端，将携带 badge 的计划排在前面
  if ($device.isMobile || $device.isTablet) {
    return processedList.sort((a: any, b: any) => {
      if (a.badge && !b.badge) return -1;
      if (!a.badge && b.badge) return 1;
      return 0;
    });
  }

  return processedList;
});

const selectedPlan = ref('yearly');

watch(plans, () => {
  if (plans.value.length > 0 && ($device.isMobile || $device.isTablet)) {
    const firstPlan = plans.value[0];
    selectedPlan.value = firstPlan.key;
  }
}, { immediate: true });

const handleCreateOrder = async (plan: any) => {
  const reportId = route.query.report_id as string || '';
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
        path: '/checkout',
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

const localePath = useLocalePath()
const route = useRoute();

const features = computed(() => [
  t('pages.pricing.features.archetypeAnalysis'),
  t('pages.pricing.features.careerMapping'),
  t('pages.pricing.features.interpersonalGuide'),
  t('pages.pricing.features.aiGrowthCoach'),
  t('pages.pricing.features.selfEsteemBlueprint'),
  t('pages.pricing.features.priorityAccess'),
]);

const receiveCards = [
  {
    icon: '/images/home/7.png',
    alt: t('datas.pricingCards.personalityReport.title'),
    titleKey: t('datas.pricingCards.personalityReport.title'),
    descKey: t('datas.pricingCards.personalityReport.desc')
  },
  {
    icon: '/images/home/8.png',
    alt: t('datas.pricingCards.courseRecommendations.title'),
    titleKey: t('datas.pricingCards.courseRecommendations.title'),
    descKey: t('datas.pricingCards.courseRecommendations.desc')
  },
  {
    icon: '/images/home/9.png',
    alt: t('datas.pricingCards.skillAssessment.title'),
    titleKey: t('datas.pricingCards.skillAssessment.title'),
    descKey: t('datas.pricingCards.skillAssessment.desc')
  },
  {
    icon: '/images/home/10.png',
    alt: t('datas.pricingCards.dailyChallenges.title'),
    titleKey: t('datas.pricingCards.dailyChallenges.title'),
    descKey: t('datas.pricingCards.dailyChallenges.desc')
  },
  {
    icon: '/images/home/11.png',
    alt: t('datas.pricingCards.learningLibrary.title'),
    titleKey: t('datas.pricingCards.learningLibrary.title'),
    descKey: t('datas.pricingCards.learningLibrary.desc')
  },
  {
    icon: '/images/home/12.png',
    alt: t('datas.pricingCards.transparency.title'),
    titleKey: t('datas.pricingCards.transparency.title'),
    descKey: t('datas.pricingCards.transparency.desc')
  }
]


const faqItems = computed(() => [
  {
    question: t('datas.faq.question1'),
    answer: t('datas.faq.answer1')
  },
  {
    question: t('datas.faq.question2'),
    answer: t('datas.faq.answer2')
  },
  {
    question: t('datas.faq.question3'),
    answer: t('datas.faq.answer3')
  },
  {
    question: t('datas.faq.question4'),
    answer: t('datas.faq.answer4')
  },
  {
    question: t('datas.faq.question5'),
    answer: t('datas.faq.answer5')
  },
  {
    question: t('datas.faq.question6'),
    answer: t('datas.faq.answer6')
  },
  {
    question: t('datas.faq.question7'),
    answer: t('datas.faq.answer7')
  },
  {
    question: t('datas.faq.question8'),
    answer: t('datas.faq.answer8')
  }
])


</script>

<style scoped>
/* Custom shadows or tweaks if needed */
</style>
