<template>
  <div class="relative min-h-screen uno-overflow-hidden uno-pt-12 md:uno-pt-20">
    <!-- Background Gradient -->


    <div class="page-container">
      <!-- Header Section -->
      <h1 class="uno-font-Outfit uno-font-semibold uno-text-[40px] uno-leading-[120%] uno-mb-12px uno-text-[#011813] uno-text-center">
        {{ $t('pages.test.report.title') }}
      </h1>
      <p
        class="uno-font-Outfit uno-text-[14px] uno-leading-[150%] uno-text-[#4E5255] uno-max-w-3xl uno-mx-auto uno-mb-16px uno-text-center">
        {{ $t('pages.test.report.subtitle') }}
      </p>
      <!-- Features Grid -->
      <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-x-8 uno-gap-y-12 uno-mb-24px">
        <div v-for="feature in features" :key="feature.id" class="uno-flex uno-flex-col uno-items-center">
          <NuxtImg :src="feature.icon" class="uno-w-[64px] uno-h-[64px] uno-rounded-[88px] uno-mb-6 uno-object-contain" />
          <h3 class="uno-font-Outfit uno-font-semibold uno-text-[16px] uno-leading-[136%] uno-mb-3 uno-text-[#323233] uno-text-center">{{
            feature.titleKey}}</h3>
          <p class="uno-font-Outfit uno-text-[12px] uno-leading-[136%] uno-text-[#4E5255] uno-px-4 uno-text-center">{{
            feature.descKey }}</p>
        </div>
      </div>
      <!-- Pricing & CTA Section with Counter -->
      <ReportPricingSection :digits="digits" :access-text="$t('pages.test.report.pricing.access')"
        :price-text="$t('pages.test.report.pricing.price')" :cta-text="$t('pages.test.report.pricing.cta')"
        :trial-text="$t('pages.test.report.pricing.trial')" :ordered-text="$t('pages.test.report.pricing.ordered')" />
      <div class="uno-h-56px"/>
    </div>


    <!--What You Will Receive 区域 -->
    <div class="uno-receive-section  uno-bg-gray-5 uno-relative">
      <NuxtImg src="/theme/home/receive-box-bg-h5.png" alt="" aria-hidden="true" width="375" height="1920"
        class="uno-absolute uno-inset-0 uno--z-10 uno-pointer-events-none uno-object-cover uno-object-center uno-block md:uno-hidden"
        uno-preload />
      <NuxtImg src="/theme/home/receive-box-bg-pc.png" alt="" aria-hidden="true" width="100vw" height="100%"
        class="uno-w-full uno-h-[100%]  uno-absolute uno-top-0 uno-left-0 uno--z-10 uno-pointer-events-none uno-hidden md:uno-block"
        uno-preload />
      <div class="page-container uno-px-4 !uno-py-8 sm:uno-py-12 md:uno-py-16 lg:uno-py-20 xl:uno-py-24 relative z-10">
        <h2
          class="uno-text-[32px] sm:uno-text-2xl md:uno-text-[48px] uno-font-Outfit uno-font-semibold uno-text-center uno-mb-2 sm:uno-mb-3 md:uno-mb-4">
          {{ $t('pages.test.report.receive.title') }}</h2>
        <p
          class="uno-text-center uno-text-gray-600 uno-text-[16px] sm:uno-text-sm md:uno-text-base uno-mb-6 sm:uno-mb-8 md:uno-mb-16 uno-max-w-3xl uno-mx-auto">
          {{ $t('pages.test.report.receive.desc') }}</p>

        <!-- 六个卡片布局 -->
        <!-- 循环展示 receiveCards -->
        <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-[24px] sm:uno-gap-[24px] md:uno-gap-[24px]">
          <div v-for="(card, index) in receiveCards" :key="index"
            class="uno-bg-white sm:uno-w-full md:uno-w-full uno-rounded-[32px] uno-shadow-[0_2px_8px_rgba(0,0,0,0.04)] uno-p-[32px] uno-border uno-border-solid uno-border-[#E7E7E8] uno-flex uno-flex-col uno-items-center uno-justify-between uno-text-center uno-min-h-[256px]">
            <div
              class="uno-w-64px uno-h-64px sm:uno-w-64px sm:uno-h-64px uno-flex uno-items-center uno-justify-center uno-bg-gray-50 uno-rounded-full uno-mb-8px">
              <NuxtImg :src="card.icon" :alt="card.alt" width="64" height="64" />
            </div>
            <h3
              class=" uno-w-[250px]  uno-text-[20px] sm:uno-text-xl md:uno-text-[20px] uno-font-Outfit uno-font-medium uno-leading-tight uno-px-2 uno-mb-12px">
              {{ $t(card.titleKey) }}
            </h3>
            <p
              class=" uno-w-[250px]  uno-text-gray-500 uno-text-[16px] sm:uno-text-base uno-font-Outfit uno-leading-relaxed">
              {{ $t(card.descKey) }}
            </p>
          </div>
        </div>
      </div>
    </div>


    <!-- Pricing & CTA Card Section (Bottom) -->
    <div
      class="uno-w-[719px] uno-h-[316px] uno-bg-[#F0FDF9] uno-rounded-[32px] uno-mx-auto uno-flex uno-flex-col uno-justify-center uno-my-32px">
      <ReportPricingSection :digits="digits" :access-text="$t('pages.test.report.pricing.access')"
        :price-text="$t('pages.test.report.pricing.price')" :cta-text="$t('pages.test.report.pricing.cta')"
        :trial-text="$t('pages.test.report.pricing.trial')" :ordered-text="$t('pages.test.report.pricing.ordered')" />
    </div>

    <div
      class="uno-w-[100vw] uno-h-[692px] uno-gap-[10px] uno-opacity-100 uno-pt-[64px] uno-pr-[120px] uno-pb-[64px] uno-pl-[120px] uno-bg-[#F8F8F8]">
      <!-- Trusted Section -->
      <div class="uno-mb-24 uno-text-center">
        <h2
          class="uno-font-Outfit uno-font-semibold uno-text-[32px] uno-leading-[120%] uno-mb-4 uno-text-[#011813] uno-text-center">
          {{ $t('pages.test.report.trusted.title') }}
        </h2>
        <p
          class="uno-font-Outfit uno-text-[14px] uno-leading-[150%] uno-text-[#4E5255] uno-max-w-2xl uno-mx-auto uno-mb-12 uno-text-center">
          {{ $t('pages.test.report.trusted.subtitle') }}
        </p>
        <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-[24px] uno-mb-56px">
          <div v-for="testimonial in testimonials" :key="testimonial.id"
            class="uno-w-[384px] uno-h-[232px] uno-bg-white uno-p-[32px] uno-rounded-[16px] uno-border uno-border-[#F0F0F0] uno-text-left">
            <div class="uno-flex uno-gap-1 uno-mb-4">
              <svg v-for="s in 5" :key="s" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.2827 3.45307C11.5131 2.98613 11.6284 2.75266 11.7848 2.67807C11.9209 2.61317 12.0791 2.61317 12.2152 2.67807C12.3717 2.75266 12.4869 2.98613 12.7174 3.45307L14.9041 7.88304C14.9721 8.02089 15.0061 8.08982 15.0558 8.14333C15.0999 8.19071 15.1527 8.2291 15.1527 8.2291C15.2113 8.25638 15.2776 8.28718 15.3536 8.2983L15.3536 8.2983C15.5057 8.32053 15.5057 8.32053 15.5057 8.32053L20.397 9.03546C20.9121 9.11075 21.1696 9.14839 21.2888 9.27419C21.3925 9.38365 21.4412 9.53405 21.4215 9.68353C21.3988 9.85533 21.2124 10.0369 20.8395 10.4001L17.3014 13.8462C17.1912 13.9536 17.136 14.0073 17.1004 14.0712C17.0689 14.1278 17.0487 14.19 17.0409 14.2543C17.0321 14.3269 17.0451 14.4028 17.0711 14.5545L17.9289 19.4219C18.017 19.9352 18.061 20.1919 17.9782 20.3443C17.9063 20.4768 17.7783 20.5797 17.63 20.6072C17.4595 20.6388 17.229 20.5176 16.768 20.2752L12.3953 17.9756C12.259 17.9039 12.1909 17.8681 12.1191 17.854C12.0556 17.8416 11.9902 17.8416 11.9267 17.854C11.8549 17.8681 11.7868 17.9039 11.6506 17.9756L7.27783 20.2752C6.81683 20.5176 6.58632 20.6388 6.41588 20.6072C6.26759 20.5797 6.13963 20.4768 6.06765 20.3443C5.98492 20.1919 6.02895 19.9352 6.117 19.4219L6.97481 14.5545C6.99215 14.4028 7.01659 14.3269 7.00778 14.2543C6.99998 14.19 6.97977 14.1278 6.94827 14.0712C6.91268 14.0073 6.85754 13.9536 6.74725 13.8462L3.20922 10.4001C2.83632 10.0369 2.64987 9.85533 2.6272 9.68353C2.60745 9.53405 2.65621 9.38365 2.75991 9.27419C2.8791 9.14839 3.13663 9.11075 3.6517 9.03546L8.54297 8.32053C8.69508 8.2983 8.77114 8.28718 8.83738 8.25638C8.89602 8.2291 8.94882 8.19071 8.99285 8.14333C9.04257 8.08982 9.07659 8.02089 9.14463 7.88304L11.3314 3.45307Z"
                  fill="#FFA200" />
              </svg>
            </div>
            <p class="uno-font-Outfit uno-text-[16px] uno-leading-[150%] uno-text-[#323233]">
              {{ testimonial.text }}
            </p>
          </div>
        </div>

        <!-- Worldwide Section -->
        <h2
          class="uno-font-Outfit uno-font-semibold uno-text-[32px] uno-leading-[120%] uno-mb-12px uno-text-[#011813] uno-text-center">
          {{ $t('pages.test.report.worldwide.title') }}
        </h2>
        <p class="uno-font-Outfit uno-text-[14px] uno-leading-[150%] uno-text-[#4E5255] uno-mb-24px uno-text-center">{{
          $t('pages.test.report.worldwide.subtitle') }}</p>
        <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-[24px]">
          <div v-for="order in orders" :key="order.id"
            class="uno-w-[384px] uno-h-[65px] uno-bg-white uno-p-[10px] uno-rounded-[4px] uno-border uno-border-[#F0F0F0] uno-flex uno-items-center uno-gap-[10px] uno-text-left">
            <NuxtImg :src="order.icon" class="uno-w-[32px] uno-h-[32px] uno-object-contain" />
            <div>
              <span class="uno-font-Outfit uno-text-[14px] uno-leading-[150%] uno-text-[#323233]">{{ $t(order.orderKey)
              }}</span>
              <span
                class="uno-font-Outfit uno-font-bold uno-text-[16px] uno-leading-[150%] uno-block uno-text-[#323233]">{{
                  $t(order.typeKey) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Final CTA Section -->
    <div
      class="uno-w-[1200px] uno-h-[418px] uno-bg-[#E8FAF5] uno-rounded-[32px] uno-p-[32px] uno-flex uno-flex-col lg:uno-flex-row uno-gap-[32px] uno-items-center uno-mt-32px uno-mx-auto">
      <NuxtImg src="/images/report/14.png" class="uno-w-[400px] uno-h-[331px] uno-object-cover uno-rounded-[32px]" />
      <div class="uno-flex-1">
        <h2 class="uno-font-Outfit uno-font-semibold uno-text-[32px] uno-leading-[124%] uno-mb-16px uno-text-[#011813]">
          {{ $t('pages.test.report.cta_full.title') }}
        </h2>
        <ul class="uno-space-y-8px uno-mb-16px">
          <li v-for="item in ctaList" :key="item.id" class="uno-flex uno-items-start uno-gap-3 uno-text-left">
            <NuxtImg src="/images/report/13.png" class="uno-w-5 uno-h-5 uno-mt-1 uno-shrink-0 uno-object-contain" />
            <span class="uno-font-Outfit uno-text-[18px] uno-leading-[150%] uno-text-[#323233]">{{
              item.text }}</span>
          </li>
        </ul>
        <div class="uno-flex uno-items-center uno-justify-between ">
          <span class="uno-font-Outfit uno-font-semibold uno-text-[16px] uno-leading-[150%] uno-text-[#4E5255]">{{
            $t('pages.test.report.cta_full.access') }}</span>
          <span class="uno-font-Outfit uno-font-semibold uno-text-[#009D77] uno-text-[28px] uno-leading-[150%]">{{
            $t('pages.test.report.cta_full.price') }}</span>
        </div>
        <button
          class="uno-w-full uno-h-[56px] uno-gap-4 uno-pt-6 uno-pr-6 uno-pb-6 uno-pl-20 uno-bg-[#009D77] hover:uno-bg-[#0AA17F] uno-text-white uno-font-Outfit uno-font-bold uno-text-[18px] uno-leading-[150%] uno-rounded-[8px] uno-shadow-lg hover:uno-shadow-xl uno-transition-all uno-mb-8px active:uno-scale-[0.98]">
          {{ $t('pages.test.report.cta_full.btn') }}
        </button>
        <p
          class="uno-flex uno-items-center uno-justify-center uno-font-Outfit uno-text-[12px] uno-leading-[150%] uno-text-[#4E5255] uno-underline uno-underline-solid">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="uno-mr-1">
            <path d="M7.37542 10.7502L9.44798 12.2499L13.0497 7.37509" stroke="#8D8E8F" stroke-width="1.05"
              stroke-linecap="round" stroke-linejoin="round" />
            <rect x="4.525" y="4.525" width="10.95" height="10.95" rx="5.475" stroke="#8D8E8F" stroke-width="1.05" />
          </svg>
          {{ $t('pages.test.report.cta_full.note') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
  title: 'pages.test.report.title',
  layout: 'default',
  layoutShowPageTopIcons: false,
  path: '/unlock-report'
})

useSeoMeta({
  title: () => t('seo.test.report.title', {separator: "|"}),
  description: () => t('seo.test.report.description'),
})
// Mock counter data
const count = ref(103267)
const digits = computed(() => count.value.toString().split(''))

// Features data
const features = [
  {
    id: 'identity',
    icon: '/images/report/1.png',
    titleKey: t('pages.test.report.features.identity.title'),
    descKey: t('pages.test.report.features.identity.desc')
  },
  {
    id: 'strengths',
    icon: '/images/report/2.png',
    titleKey: t('pages.test.report.features.strengths.title'),
    descKey: t('pages.test.report.features.strengths.desc')
  },
  {
    id: 'relationships',
    icon: '/images/report/3.png',
    titleKey: t('pages.test.report.features.relationships.title'),
    descKey: t('pages.test.report.features.relationships.desc')
  }
]

const receiveCards = [
  {
    icon: '/images/home/7.png',
    alt: 'Comprehensive Personality Report',
    titleKey: t('pages.test.report.receive.card1.title'),
    descKey: t('pages.test.report.receive.card1.desc')
  },
  {
    icon: '/images/home/8.png',
    alt: 'Personalized Course Recommendations',
    titleKey: t('pages.test.report.receive.card3.title'),
    descKey: t('pages.test.report.receive.card3.desc')
  },
  {
    icon: '/images/home/9.png',
    alt: 'Skill Assessment Tests',
    titleKey: t('pages.test.report.receive.card5.title'),
    descKey: t('pages.test.report.receive.card5.desc')
  },
  {
    icon: '/images/home/10.png',
    alt: 'Practical Daily Challenges',
    titleKey: t('pages.test.report.receive.card2.title'),
    descKey: t('pages.test.report.receive.card2.desc')
  },
  {
    icon: '/images/home/11.png',
    alt: 'Learning and Development Library',
    titleKey: t('pages.test.report.receive.card4.title'),
    descKey: t('pages.test.report.receive.card4.desc')
  },
  {
    icon: '/images/home/12.png',
    alt: 'Certificates of Achievement',
    titleKey: t('pages.test.report.receive.card6.title'),
    descKey: t('pages.test.report.receive.card6.desc')
  }
]
// CTA list data for final CTA section
const ctaList = [
  {
    id: 1,
    text: t('pages.test.report.cta_full.list.1')
  },
  {
    id: 2,
    text: t('pages.test.report.cta_full.list.2')
  },
  {
    id: 3,
    text: t('pages.test.report.cta_full.list.3')
  },
  {
    id: 4,
    text: t('pages.test.report.cta_full.list.4')
  }
]

// Testimonials data for trusted section
const testimonials = [
  {
    id: 1,
    text: t('pages.test.report.trusted.card_text1')
  },
  {
    id: 2,
    text: t('pages.test.report.trusted.card_text2')
  },
  {
    id: 3,
    text: t('pages.test.report.trusted.card_text3')
  }
]

// Orders data for worldwide section
const orders = [
  {
    id: 1,
    icon: '/images/report/10.png',
    orderKey: t('pages.test.report.worldwide.orders.amelia'),
    typeKey: t('pages.test.report.worldwide.types.peacemaker')
  },
  {
    id: 2,
    icon: '/images/report/11.png',
    orderKey: t('pages.test.report.worldwide.orders.diego'),
    typeKey: t('pages.test.report.worldwide.types.loyalist')
  },
  {
    id: 3,
    icon: '/images/report/12.png',
    orderKey: t('pages.test.report.worldwide.orders.mia'),
    typeKey: t('pages.test.report.worldwide.types.loyalist')
  }
]

// Auto increment effect for liveliness (optional)
onMounted(() => {
  const interval = setInterval(() => {
    if (Math.random() > 0.7) {
      count.value++
    }
  }, 3000)

  onUnmounted(() => clearInterval(interval))
})
</script>

<style scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif;
}
</style>
