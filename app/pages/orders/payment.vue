<template>
  <div class="uno-py-12 md:uno-py-16">
    <div
      class="page-container uno-grid uno-grid-cols-1 lg:uno-grid-cols-12 uno-gap-8 lg:uno-gap-16 uno-mb-56px uno-items-start">

      <div class="md:uno-col-span-12 lg:uno-col-span-6">
        <h1
          class="uno-text-4xl md:uno-text-5xl uno-font-600 uno-text-[#011813] uno-mb-4 uno-font-Outfit uno-whitespace-nowrap">
          {{ $t('pages.orders.create.title') }}
        </h1>
        <p class="uno-text-[#4E5255] uno-text-lg uno-mb-48px uno-font-Outfit">
          {{ $t('pages.orders.create.subtitle') }}
        </p>

        <div class="uno-bg-[#EAFBF6] uno-rounded-[24px] uno-p-6 md:uno-p-8">
          <div class="uno-flex uno-justify-between uno-items-baseline uno-mb-6">
            <h3 v-if="!planName" class="uno-text-2xl uno-font-bold uno-text-[#009D77]">{{
              $t('pages.orders.create.summary.trial', { day: 7 }) }}</h3>
            <h3 v-else class="uno-text-2xl uno-font-bold uno-text-[#009D77]">{{ planName }}</h3>
            <span class="uno-text-2xl uno-font-bold uno-text-[#009D77]">{{ $t("common.price") }} {{ planPrice }}</span>
          </div>

          <ul class="uno-space-y-4 uno-mb-8">
            <li class="uno-flex uno-items-center uno-gap-3">
              <AppCheckIcon class="uno-text-white uno-w-4 uno-h-4" />
              <span class="uno-text-[18px] uno-text-[#323233] uno-font-[400]">{{
                $t('pages.orders.create.summary.benefit1') }}</span>
            </li>
            <li class="uno-flex uno-items-center uno-gap-3">
              <AppCheckIcon class="uno-text-white uno-w-4 uno-h-4" />
              <span class="uno-text-[18px] uno-text-[#323233] uno-font-[400]">{{
                $t('pages.orders.create.summary.benefit2') }}</span>
            </li>
            <li class="uno-flex uno-items-center uno-gap-3">
              <AppCheckIcon class="uno-text-white uno-w-4 uno-h-4" />
              <span class="uno-text-[18px] uno-text-[#323233] uno-font-[400]">{{
                $t('pages.orders.create.summary.benefit3') }}</span>
            </li>
          </ul>
        </div>

        <p class="uno-text-xs uno-text-[#8D8E8F] uno-leading-relaxed uno-mt-12px">
          {{ $t('pages.orders.create.summary.terms', {
            price1: $t("common.price") + "1.99", price2: $t("common.price") +
              "27.88", day: 7
          }) }}
          <a href="mailto:support@personalitytest101.com">support@personalitytest101.com</a>
        </p>
      </div>

      <div class="md:uno-col-span-12 lg:uno-col-span-6">
        <div class="uno-bg-white uno-rounded-[24px] uno-p-6 md:uno-p-8 uno-shadow-lg uno-border uno-border-[#E7E7E8]">
          <form class="uno-space-y-6" @submit.prevent="handleSubmit">
            <!-- <div class="uno-space-y-2">
              <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{
                $t('pages.orders.create.form.email') }}</label>
              <UInput v-model="form.email" :placeholder="$t('pages.orders.create.form.emailPlaceholder')" size="xl"
                :ui="{ rounded: 'rounded-[12px]' }" class="uno-w-full" />
            </div>

            <div class="uno-space-y-2">
              <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{
                $t('pages.orders.create.form.name') }}</label>
              <UInput v-model="form.name" :placeholder="$t('pages.orders.create.form.namePlaceholder')" size="xl"
                :ui="{ rounded: 'rounded-[12px]' }" class="uno-w-full" />
            </div> -->

            <div id="checkout-container" class="checkout-container uno-mb-4" />

            <!-- <div class="uno-flex uno-items-start uno-gap-3">
              <UCheckbox v-model="form.consent"
                :ui="{ base: 'uno-w-5 uno-h-5 uno-border uno-border-[#4E5255]', rounded: 'rounded' }" />
              <div class="uno-text-xs uno-text-[#4E5255] uno-leading-tight uno-mt-0.5">
                <span>{{ $t('pages.orders.create.form.consentPart1') }}</span>
                <span class="uno-text-[#009D77]">{{ $t('pages.orders.create.form.terms') }}</span>
                <span>{{ $t('pages.orders.create.form.consentPart2') }}</span>
                <span class="uno-text-[#009D77]">{{ $t('pages.orders.create.form.privacy') }}</span>
                <span>{{ $t('common.period') }}</span>
              </div>
            </div> -->

            <!-- <div v-if="message.text" :class="message.type === 'error' ? 'error-message' : 'success-message'"
              class="uno-text-sm uno-mt-2">
              {{ message.text }}
            </div> -->

            <!-- <PrimaryButton height="56px" :disabled="isLoading || initializing" @click="handleSubmit">
              <span v-if="initializing" class="uno-flex uno-items-center uno-gap-2 uno-justify-center">
                <svg class="uno-w-5 uno-h-5 uno-animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24">
                  <circle class="uno-opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="uno-opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                {{ $t('pages.orders.create.form.initializing') }}
              </span>
              <span v-else-if="isLoading" class="uno-flex uno-items-center uno-gap-2 uno-justify-center">
                <svg class="uno-w-5 uno-h-5 uno-animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24">
                  <circle class="uno-opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="uno-opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                {{ $t('pages.orders.create.form.processing') }}
              </span>
              <span v-else>
                {{ $t('pages.orders.create.form.subscribeBtn', { price: $t("common.price") + planPrice }) }}
              </span>
            </PrimaryButton> -->

            <div class="uno-flex uno-items-center uno-justify-between uno-mt-6 ">
              <div class="uno-flex uno-items-center uno-gap-3">
                <NuxtImg src="/images/orders/create/1.png" height="24" class="uno-h-6 uno-w-auto" />
                <NuxtImg src="/images/orders/create/2.png" height="24" class="uno-h-6 uno-w-auto" />
                <NuxtImg src="/images/orders/create/3.png" height="24" class="uno-h-6 uno-w-auto" />
              </div>
              <div class="uno-flex uno-items-center">
                <NuxtImg src="/images/orders/create/4.png" height="24" class="uno-h-6 uno-w-auto" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="page-container uno-flex uno-flex-wrap uno-justify-between uno-gap-8 uno-mb-24 uno-mx-auto">
      <div v-for="(item, index) in trustItems" :key="index"
        class="uno-flex uno-flex-col uno-items-center uno-text-center">
        <NuxtImg :src="item.image" width="64" height="64" class="uno-w-16 uno-h-16 uno-mb-4" />
        <h4 class="uno-text-[#4E5255] uno-font-[500] uno-font-Outfit">{{ item.text }}</h4>
      </div>
    </div>

    <TestimonialsSection :title="$t('pages.orders.create.testimonials.title')"
      :description="$t('pages.orders.create.testimonials.subtitle')" :rating="5" :reviews="reviews" />

    <FAQSection :title="$t('common.faq.title')" :description="$t('common.faq.desc')" :items="faqItems" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import AppCheckIcon from '~/components/AppCheckIcon.vue';
import PrimaryButton from '~/components/ui/PrimaryButton.vue'
import CustomButton from '~/components/ui/CustomButton.vue'
import { payOrder } from '~/api/tests';



const { t } = useI18n()
const route = useRoute()
const { toast } = useToast()

definePageMeta({
  title: () => 'pages.orders.create.title',
  layoutShowPageTopIcons: false,
  path: '/payment'
})
useSeoMeta({
  title: () => t('seo.orders.create.title', { separator: '|' }),
  description: () => t('seo.orders.create.description')
})

useHead({
  script: [
    {
      src: 'https://cdn.paddle.com/paddle/v2/paddle.js',
    }
  ]
})

const form = ref({
  order_id: '',
  email: '',
  name: '',
  consent: false
})
const planName = ref('')
const planPrice = ref('')
const isLoading = ref(false)
const initializing = ref(true)

const message = ref({
  text: '',
  type: 'error'
})

const paddleData = ref<{ environment: string; token: string; transaction_id: string } | null>(null)
const orderInfo = ref({
  order_id: null as number | null,
  order_sn: null as string | null
})

const trustItems = computed(() => [
  { text: t('pages.orders.create.trust.us'), image: '/images/orders/create/5.png' },
  { text: t('pages.orders.create.trust.noCharge'), image: '/images/orders/create/6.png' },
  { text: t('pages.orders.create.trust.refund'), image: '/images/orders/create/7.png' },
  { text: t('pages.orders.create.trust.cancel'), image: '/images/orders/create/8.png' },
])

const reviews = computed(() => {
  return [
    {
      text: t('pages.orders.create.testimonials.reviews.review1.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
      name: t('pages.orders.create.testimonials.reviews.review1.name'),
      role: t('pages.orders.create.testimonials.reviews.review1.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review2.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
      name: t('pages.orders.create.testimonials.reviews.review2.name'),
      role: t('pages.orders.create.testimonials.reviews.review2.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review3.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/women/67.jpg',
      name: t('pages.orders.create.testimonials.reviews.review3.name'),
      role: t('pages.orders.create.testimonials.reviews.review3.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review4.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/men/78.jpg',
      name: t('pages.orders.create.testimonials.reviews.review4.name'),
      role: t('pages.orders.create.testimonials.reviews.review4.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review5.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/women/23.jpg',
      name: t('pages.orders.create.testimonials.reviews.review5.name'),
      role: t('pages.orders.create.testimonials.reviews.review5.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review6.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/men/56.jpg',
      name: t('pages.orders.create.testimonials.reviews.review6.name'),
      role: t('pages.orders.create.testimonials.reviews.review6.role')
    },
  ]
})

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

async function initializePayment() {

  try {
    const { data: res } = await payOrder({
      order_id: Number(form.value.order_id)
    })
    console.log('res', res);
    

    paddleData.value = res.value.data
    orderInfo.value.order_id = Number(form.value.order_id)

    if (!window.Paddle) {
      initializing.value = false
      return
    }

    initPaddle(paddleData.value)
    initializing.value = false
  } catch (err) {
    console.error('Initialize payment error:', err)
    initializing.value = false
  }
}

async function handleSubmit() {
  if (!form.value.email || !form.value.consent) {
    message.value = { text: t('pages.orders.create.errors.fillRequired'), type: 'error' }
    return
  }

  if (!paddleData.value?.transaction_id) {
    message.value = { text: t('pages.orders.create.errors.waitInit'), type: 'error' }
    return
  }

  isLoading.value = true

  try {
    if (window.Paddle && paddleData.value.transaction_id) {
      window.Paddle.Checkout.open({ transactionId: paddleData.value.transaction_id })
    }
  } catch (err) {
    console.error('Open checkout error:', err)
    message.value = { text: t('pages.orders.create.errors.openCheckoutFailed'), type: 'error' }
    isLoading.value = false
  }
}

function initPaddle(data: { environment: string; token: string; transaction_id: string }) {
  console.log('data', data, window.Paddle);
  window.Paddle.Environment.set(data.environment)
  window.Paddle.Initialize({
    token: data.token,
    checkout: {
      settings: {
        displayMode: 'inline',
        theme: 'light',
        // locale: t('locale'),
        variant: 'one-page',
        frameTarget: 'checkout-container',
        frameInitialHeight: '450',
        frameStyle: 'width: 100%; min-width: 312px; background-color: transparent; border: none; border-radius: 12px;',
        // allowedPaymentMethods: ['card'],
        showAddDiscounts: false,
        showAddTaxId: false,
    
      }
    },
    eventCallback: function (eventData: { name: string; data: any }) {
      console.log('eventData', eventData);
      
      if (eventData.name === 'checkout.completed') {
        handleCheckoutComplete(eventData.data)
      }
    }
  })

  if (data.transaction_id) {
    window.Paddle.Checkout.open({ transactionId: data.transaction_id })
  }
}

function handleCheckoutComplete(checkoutData: any) {
  isLoading.value = false
  const orderSn = route.query.order_sn || String(orderInfo.value.order_id)
  setTimeout(() => {
    navigateTo(`/payment-success?order_sn=${orderSn}`)
  }, 2000)
}

onMounted(() => {
  if (route.query.order_id) {
    form.value.order_id = route.query.order_id as string
  } 
  planName.value = (route.query.plan_name as string) || ""
  planPrice.value = (route.query.plan_price as string) || "1.99"
  console.log('form.value', form.value);
  if (form.value.order_id) {
    initializing.value = true
    message.value = { text: '', type: 'error' }
    paddleData.value = null
    setTimeout(() => {
      initializePayment()
    }, 200)
  } else {
    initializing.value = false
  }
})

watch(() => route.query.order_id, () => {
  if (route.query.order_id) {
    form.value.order_id = route.query.order_id as string
    initializing.value = true
    message.value = { text: '', type: 'error' }
    paddleData.value = null
    initializePayment()
  }
})
</script>

<style scoped>
.checkout-container {
  margin-bottom: 20px;
  display: block;
}

.error-message {
  color: #ef4444;
  font-size: 14px;
  margin-top: 8px;
}

.success-message {
  color: #10b981;
  font-size: 14px;
  margin-top: 8px;
}
.paddle-frame {
}
</style>
