<template>
  <div class="uno-py-12 md:uno-py-16">
    <!-- Top Section: Summary & Form -->
    <div
      class="page-container uno-grid uno-grid-cols-1 lg:uno-grid-cols-12 uno-gap-8 lg:uno-gap-16 uno-mb-56px uno-items-start">

      <!-- Left Column: Summary -->
      <div class="md:uno-col-span-12 lg:uno-col-span-6">
        <h1
          class="uno-text-4xl md:uno-text-5xl uno-font-600 uno-text-[#011813] uno-mb-4 uno-font-Outfit uno-whitespace-nowrap">
          {{ $t('pages.orders.create.title') }}
        </h1>
        <p class="uno-text-[#4E5255] uno-text-lg uno-mb-48px uno-font-Outfit">
          {{ $t('pages.orders.create.subtitle') }}
        </p>

        <!-- Summary Card -->
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

      <!-- Right Column: Payment Form -->
      <div class="md:uno-col-span-12 lg:uno-col-span-6">
        <div class="uno-bg-white uno-rounded-[24px] uno-p-6 md:uno-p-8 uno-shadow-lg uno-border uno-border-[#E7E7E8]">
          <form class="uno-space-y-6" @submit.prevent="handleSubmit">
            <!-- Email -->
            <div class="uno-space-y-2">
              <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{
                $t('pages.orders.create.form.email') }}</label>

              <UInput v-model="form.email" :placeholder="$t('pages.orders.create.form.emailPlaceholder')" size="xl"
                :ui="{ rounded: 'rounded-[12px]' }" class="uno-w-full" />
            </div>

            <!-- Cardholder Name -->
            <div class="uno-space-y-2">
              <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{
                $t('pages.orders.create.form.name') }}</label>
              <UInput v-model="form.name" :placeholder="$t('pages.orders.create.form.namePlaceholder')" size="xl"
                :ui="{ rounded: 'rounded-[12px]' }" class="uno-w-full" />
            </div>

            <!-- Card Number -->
            <!-- <div class="uno-space-y-2">
              <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{
                $t('pages.orders.create.form.cardNumber') }}</label>
              <UInput v-model="form.cardNumber" :placeholder="$t('pages.orders.create.form.cardNumberPlaceholder')"
                size="xl" icon="i-lucide-credit-card" :ui="{ rounded: 'rounded-[12px]' }" class="uno-w-full" />
            </div> -->

            <!-- Expires, CVV, Zip -->
            <!-- <div class="uno-grid uno-grid-cols-3 uno-gap-4">
              <div class="uno-space-y-2">
                <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{
                  $t('pages.orders.create.form.expires') }}</label>
                <UInput v-model="form.expires" :placeholder="$t('pages.orders.create.form.expiresPlaceholder')"
                  size="xl" :ui="{ rounded: 'rounded-[12px]' }" class="uno-w-full" />
              </div>
              <div class="uno-space-y-2">
                <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{
                  $t('pages.orders.create.form.cvv') }}</label>
                <UInput v-model="form.cvv" :placeholder="$t('pages.orders.create.form.cvvPlaceholder')" size="xl"
                  :ui="{ rounded: 'rounded-[12px]' }" class="uno-w-full" />
              </div>
              <div class="uno-space-y-2">
                <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{
                  $t('pages.orders.create.form.zip') }}</label>
                <UInput v-model="form.zip" :placeholder="$t('pages.orders.create.form.zipPlaceholder')" size="xl"
                  :ui="{ rounded: 'rounded-[12px]' }" class="uno-w-full" />
              </div>
            </div> -->
            <div id="payment-element">
              <!--Stripe.js injects the Payment Element-->
            </div>
            <!-- Consent Checkbox -->
            <div class="uno-flex uno-items-start uno-gap-3">
              <UCheckbox v-model="form.consent"
                :ui="{ base: 'uno-w-5 uno-h-5 uno-border uno-border-[#4E5255]', rounded: 'rounded' }" />
              <div class="uno-text-xs uno-text-[#4E5255] uno-leading-tight uno-mt-0.5">
                <span>{{ $t('pages.orders.create.form.consentPart1') }}</span>
                <span class="uno-text-[#009D77]">{{ $t('pages.orders.create.form.terms') }}</span>
                <span>{{ $t('pages.orders.create.form.consentPart2') }}</span>
                <span class="uno-text-[#009D77]">{{ $t('pages.orders.create.form.privacy') }}</span>
                <span>{{ $t('common.period') }}</span>
              </div>
            </div>

            <!-- Buttons -->
            <div class="uno-space-y-3">
              <PrimaryButton height="56px" @click="handleSubmit">
                {{ $t('pages.orders.create.form.subscribeBtn', { price: $t("common.price") + planPrice }) }}
              </PrimaryButton>

              <CustomButton height="43px" variant="dark">
                {{ $t('pages.orders.create.form.paypalBtn') }}
                <svg width="78" height="21" viewBox="0 0 78 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M33.2518 20.2653L42.8401 6.3224C42.9239 6.23866 42.9239 6.15491 42.9239 6.07117C42.9239 5.81995 42.7145 5.52686 42.4633 5.52686H39.5742C39.323 5.52686 39.0299 5.69434 38.9043 5.90369L34.9266 11.7656L33.2518 6.11304C33.1261 5.77808 32.7912 5.52686 32.4143 5.52686H29.609C29.3578 5.52686 29.1484 5.77808 29.1484 6.07117C29.1484 6.23866 32.0794 14.6128 32.3306 15.4083C31.9119 15.9945 29.2322 19.721 29.2322 20.1816C29.2322 20.4328 29.4415 20.6421 29.6928 20.6421H32.5818C32.8331 20.6421 33.0843 20.4747 33.2518 20.2653Z"
                    fill="white" />
                  <path
                    d="M77.0065 0.544318C77.0065 0.251224 76.7972 0 76.546 0H73.7825C73.5732 0 73.3219 0.167482 73.3219 0.418706L70.8934 16.0783L70.8516 16.162C70.8516 16.4133 71.0609 16.7064 71.3959 16.7064H73.8662C74.2431 16.7064 74.6199 16.2877 74.6618 15.869L77.0903 0.628059V0.544318H77.0065Z"
                    fill="white" />
                  <path
                    d="M9.25873 0H3.27124C2.89441 0 2.51757 0.293094 2.4757 0.7118L0.00533502 16.0783C-0.0365356 16.3714 0.172817 16.6645 0.465911 16.6645H3.35498C3.77369 16.6645 4.15052 16.2458 4.19239 15.8271L4.86232 11.8075C5.02981 10.7189 6.83024 11.0957 7.58391 11.0957C11.8966 11.0957 14.5344 8.5416 14.5344 4.18706C14.4926 1.04676 12.0641 0 9.25873 0ZM6.70463 7.74606L5.49038 7.78793L6.11844 3.76835C6.16031 3.51713 6.36966 3.34965 6.62089 3.34965H7.33269C9.04938 3.34965 10.3055 3.559 9.97053 5.61066C9.63557 7.49483 8.37945 7.74606 6.70463 7.74606Z"
                    fill="white" />
                  <path
                    d="M27.1794 5.52698H24.2903C23.7041 5.52698 23.7041 6.36439 23.6622 6.74123C22.7829 5.44324 21.5268 5.23389 20.1032 5.23389C16.4186 5.23389 13.6133 8.45792 13.6133 12.0169C13.6133 14.9479 15.4556 16.8739 18.3865 16.8739C19.7264 16.8739 21.4431 16.1202 22.3642 15.0735C22.2805 15.2828 22.1968 15.7853 22.1968 15.9946C22.1968 16.3296 22.3642 16.5808 22.6992 16.5808H25.2952C25.7139 16.5808 26.0488 16.1621 26.1326 15.7434L27.6399 6.11317C27.6818 5.82008 27.4724 5.52698 27.1794 5.52698ZM19.8939 13.9011C18.5121 13.9011 17.5072 13.1056 17.5072 11.6401C17.5072 9.79778 18.9308 8.33231 20.7732 8.33231C22.1549 8.33231 23.2435 9.16972 23.2435 10.6771C23.2016 12.4775 21.778 13.9011 19.8939 13.9011Z"
                    fill="white" />
                  <path
                    d="M52.008 0H46.0205C45.6018 0 45.2249 0.293094 45.1831 0.7118L42.7546 16.0364C42.7127 16.3295 42.9639 16.6226 43.257 16.6226H46.3555C46.6485 16.6226 46.8998 16.4133 46.9416 16.162L47.6116 11.8075C47.7791 10.7189 49.5795 11.0957 50.3332 11.0957C54.604 11.0957 57.2418 8.5416 57.2418 4.18706C57.1999 1.04676 54.7714 0 52.008 0ZM49.4539 7.74606L48.2396 7.78793L48.8677 3.76835C48.9096 3.51713 49.077 3.34965 49.3283 3.34965H49.9982C51.2962 3.34965 52.7198 3.43339 52.7198 5.02447C52.7617 7.28548 51.3799 7.74606 49.4539 7.74606Z"
                    fill="white" />
                  <path
                    d="M69.8875 5.52698H67.0403C66.4541 5.52698 66.4541 6.36439 66.4122 6.74123C65.5748 5.44324 64.3187 5.23389 62.8532 5.23389C59.1686 5.23389 56.3633 8.45792 56.3633 12.0169C56.3633 14.9479 58.2056 16.8739 61.1365 16.8739C62.5183 16.8739 64.2349 16.1202 65.1142 15.0735C65.0724 15.2828 64.9468 15.7853 64.9468 15.9946C64.9468 16.3296 65.1142 16.5808 65.4073 16.5808H68.0033C68.422 16.5808 68.757 16.1621 68.8407 15.7434L70.3899 6.0713C70.3899 5.82007 70.1806 5.52698 69.8875 5.52698ZM62.6439 13.9011C61.2621 13.9011 60.2154 13.1056 60.2154 11.6401C60.2154 9.79778 61.639 8.33231 63.4813 8.33231C64.863 8.33231 65.9516 9.16972 65.9098 10.6771C65.9098 12.5194 64.4443 13.9011 62.6439 13.9011Z"
                    fill="white" />
                </svg>

              </CustomButton>

              <CustomButton height="43px" variant="dark">
                {{ $t('pages.orders.create.form.gpayBtn') }}
                <svg width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M35.4409 5.37703C36.8154 5.37703 37.8776 5.75186 38.6898 6.50164C39.502 7.25142 39.8769 8.25108 39.8769 9.50064V15.4987H38.1275V14.1241H38.065C37.3152 15.2488 36.2531 15.8111 35.0035 15.8111C33.9414 15.8111 33.0041 15.4987 32.2544 14.8739C31.5671 14.2491 31.1298 13.3744 31.1298 12.4372C31.1298 11.4375 31.5046 10.6253 32.2544 10.0005C33.0041 9.37569 34.0663 9.1258 35.3159 9.1258C36.4405 9.1258 37.3152 9.31319 38.0025 9.75058V9.31325C38.0025 8.73006 37.7848 8.14693 37.3494 7.76699L37.2527 7.68875C36.7529 7.25142 36.1281 7.00147 35.4409 7.00147C34.3787 7.00147 33.5665 7.43886 33.0041 8.31353L31.3797 7.31386C32.3794 6.0018 33.6914 5.37703 35.4409 5.37703ZM26.6313 1.12842C27.7524 1.12842 28.8178 1.51852 29.6696 2.24611L29.8177 2.37797C30.6924 3.12775 31.1298 4.25236 31.1298 5.43947C31.1298 6.62658 30.6924 7.68875 29.8177 8.50097C28.943 9.31324 27.8808 9.75058 26.6313 9.75058L23.6322 9.68808V15.4987H21.7578V1.12842H26.6313ZM35.6907 10.6253C34.941 10.6253 34.3162 10.8127 33.8164 11.1876C33.3165 11.5 33.0666 11.9374 33.0666 12.4997C33.0666 12.9995 33.3165 13.4369 33.6914 13.6868C34.1288 13.9992 34.6286 14.1866 35.1285 14.1866C35.8282 14.1866 36.528 13.9145 37.0754 13.421L37.1903 13.3119C37.8151 12.7496 38.1275 12.0623 38.1275 11.3126C37.5652 10.8752 36.7529 10.6253 35.6907 10.6253ZM26.7562 2.87781H23.6322V7.87619H26.7562C27.4435 7.87619 28.1308 7.62625 28.5681 7.12642C29.5678 6.18925 29.5678 4.62725 28.6306 3.69008L28.5681 3.62758C28.0683 3.12775 27.4435 2.81536 26.7562 2.87781ZM49.9986 5.68942L43.8131 19.8722H41.9387L44.2505 14.9364L40.1893 5.75186H42.1886L45.1252 12.8121H45.1877L48.0617 5.75186H49.9986V5.68942Z"
                    fill="white" />
                  <path
                    d="M16.2005 8.43773C16.2005 7.8754 16.138 7.31306 16.0756 6.75073H8.26562V9.93723H12.7017C12.5142 10.9369 11.9519 11.8741 11.0772 12.4364V14.4982H13.7638C15.3258 13.0612 16.2005 10.9369 16.2005 8.43773Z"
                    fill="#4285F4" />
                  <path
                    d="M8.25931 16.4976C10.5086 16.4976 12.383 15.7479 13.7575 14.4983L11.0709 12.4364C10.3211 12.9363 9.38393 13.2486 8.25931 13.2486C6.13498 13.2486 4.26061 11.8116 3.63582 9.81226H0.886719V11.9366C2.32375 14.7481 5.13532 16.4976 8.25931 16.4976Z"
                    fill="#34A853" />
                  <path
                    d="M3.63944 9.81248C3.26456 8.81282 3.26456 7.68821 3.63944 6.62604V4.50171H0.890333C-0.296778 6.81348 -0.296778 9.56259 0.890333 11.9368L3.63944 9.81248Z"
                    fill="#FBBC04" />
                  <path
                    d="M8.25933 3.25231C9.44644 3.25231 10.571 3.68964 11.4458 4.50192L13.82 2.1277C12.3205 0.75314 10.3212 -0.0591357 8.32183 0.00336336C5.19783 0.00336336 2.32377 1.75281 0.949219 4.56436L3.69832 6.68869C4.26064 4.68936 6.13505 3.25231 8.25933 3.25231Z"
                    fill="#EA4335" />
                </svg>

              </CustomButton>
            </div>

            <!-- Payment Icons -->
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

    <!-- Trust Badges Section -->
    <div class="page-container uno-flex uno-flex-wrap uno-justify-between uno-gap-8 uno-mb-24 uno-mx-auto">
      <div v-for="(item, index) in trustItems" :key="index"
        class="uno-flex uno-flex-col uno-items-center uno-text-center">
        <NuxtImg :src="item.image" width="64" height="64" class="uno-w-16 uno-h-16 uno-mb-4" />
        <h4 class="uno-text-[#4E5255] uno-font-[500] uno-font-Outfit">{{ item.text }}</h4>
      </div>
    </div>

    <!-- Testimonials Section -->
    <TestimonialsSection :title="$t('pages.orders.create.testimonials.title')"
      :description="$t('pages.orders.create.testimonials.subtitle')" :rating="5" :reviews="reviews" />

    <!-- FAQ Section -->
    <FAQSection :title="$t('common.faq.title')" :description="$t('common.faq.desc')" :items="faqItems" />
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { payOrder } from '~/api/tests';
import AppCheckIcon from '~/components/AppCheckIcon.vue';
import PrimaryButton from '~/components/ui/PrimaryButton.vue'
import CustomButton from '~/components/ui/CustomButton.vue'

const { toast } = useToast()

const { t } = useI18n()
const route = useRoute()



definePageMeta({
  title: () => 'pages.orders.create.title',
  layoutShowPageTopIcons: false,
  path: '/checkout'
})
useSeoMeta({
  title: () => t('seo.orders.create.title', { separator: '|' }),
  description: () => t('seo.orders.create.description')
})
useHead({
  script: [
    {
      src: 'https://js.stripe.com/dahlia/stripe.js',
      defer: true,           // 可选：延迟加载
      // 或 async: true      // 可选：异步加载
    }
  ]
})



// Form State
const form = ref({
  order_id: '',
  email: '',
  name: '',
  cardNumber: '',
  expires: '',
  cvv: '',
  zip: '',
  consent: false
})
const planName = ref('')
const planPrice = ref('')

const isLoading = ref(false)
const emailError = ref(false)
const Stripe = ref(null)
const actions = ref(null)

const client_secret = ref('')
const pk = ref('')
// Initialize form data from route query
onMounted(() => {
  if (route.query.order_id) {
    form.value.order_id = route.query.order_id
  } else if (route.query.order_sn) {
    form.value.order_id = route.query.order_sn
  }

  // Get plan_name and plan_price from query params
  planName.value = route.query.plan_name || ""
  planPrice.value = route.query.plan_price || "1.99"

  // You can use these values as needed
  if (form.value.order_id && import.meta.client) {
    nextTick(async () => {
      const { data, error } = await payOrder({
        order_id: form.value.order_id,
      })
      client_secret.value = data.value.data?.client_secret || ''
      pk.value = data.value.data?.pk || ''
      Stripe.value = window.Stripe(pk.value)
      console.log(Stripe.value)
      const appearance = {
        theme: 'stripe',
        variables: {
          // 全局颜色
          colorPrimary: '#009D77', // 你的主题色
          colorBackground: '#ffffff',
          colorText: '#011813',
          colorDanger: '#dc2626',

          // 字体
          fontFamily: 'Outfit, sans-serif',
          fontSizeBase: '16px',

          // 边框、圆角
          borderRadius: '12px',
          borderWidth: '1px',
          borderColor: '#E7E7E8',
        },
      };
      const checkout = Stripe.value.initCheckoutElementsSdk({
        clientSecret: client_secret.value,
        elementsOptions: { appearance },
      });
      const loadActionsResult = await checkout.loadActions();
      if (loadActionsResult.type === 'success') {
        actions.value = loadActionsResult.actions;
      }
      const paymentElement = checkout.createPaymentElement();
      paymentElement.mount("#payment-element");
    })

  }
  // 
})

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (form.value.email && !emailRegex.test(form.value.email)) {
    emailError.value = true
  } else {
    emailError.value = false
  }
}

const isFormValid = computed(() => {
  const emailValid = !!form.value.email && !emailError.value
  const orderIdValid = !!form.value.order_id
  const consentValid = form.value.consent
  return emailValid && orderIdValid && consentValid
})

const handleSubmit = async () => {

  const { error } = await actions.value.confirm({
    email: form.value.email,
    billingAddress:{
      name: form.value.name,
    }
  });
}

// Trust Badges Data
const trustItems = computed(() => [
  { text: t('pages.orders.create.trust.us'), image: '/images/orders/create/5.png' },
  { text: t('pages.orders.create.trust.noCharge'), image: '/images/orders/create/6.png' },
  { text: t('pages.orders.create.trust.refund'), image: '/images/orders/create/7.png' },
  { text: t('pages.orders.create.trust.cancel'), image: '/images/orders/create/8.png' },
])
// Testimonials Data
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
    {
      text: t('pages.orders.create.testimonials.reviews.review7.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/women/89.jpg',
      name: t('pages.orders.create.testimonials.reviews.review7.name'),
      role: t('pages.orders.create.testimonials.reviews.review7.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review8.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/men/92.jpg',
      name: t('pages.orders.create.testimonials.reviews.review8.name'),
      role: t('pages.orders.create.testimonials.reviews.review8.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review9.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: t('pages.orders.create.testimonials.reviews.review9.name'),
      role: t('pages.orders.create.testimonials.reviews.review9.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review10.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/men/63.jpg',
      name: t('pages.orders.create.testimonials.reviews.review10.name'),
      role: t('pages.orders.create.testimonials.reviews.review10.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review11.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/women/75.jpg',
      name: t('pages.orders.create.testimonials.reviews.review11.name'),
      role: t('pages.orders.create.testimonials.reviews.review11.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review12.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/men/87.jpg',
      name: t('pages.orders.create.testimonials.reviews.review12.name'),
      role: t('pages.orders.create.testimonials.reviews.review12.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review13.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/women/51.jpg',
      name: t('pages.orders.create.testimonials.reviews.review13.name'),
      role: t('pages.orders.create.testimonials.reviews.review13.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review14.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/men/39.jpg',
      name: t('pages.orders.create.testimonials.reviews.review14.name'),
      role: t('pages.orders.create.testimonials.reviews.review14.role')
    }
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
</script>
<style lang="less">
.payment-element {
  :deep(.TermsText) {
    display: none;
  }
}
</style>
