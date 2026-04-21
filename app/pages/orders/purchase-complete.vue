<template>
  <div class=" uno-flex uno-flex-col uno-items-center uno-justify-center uno-px-6 uno-py-10 md:uno-py-16">
    <div v-if="loading" class="uno-max-w-md uno-w-full uno-flex uno-flex-col uno-items-center uno-text-center">
      <div class="uno-text-gray-600 uno-font-Outfit">{{ t('pages.orders.purchaseComplete.loading') }}</div>
    </div>
    <div v-else class="uno-max-w-md uno-w-full uno-flex uno-flex-col uno-items-center uno-text-center">
      <div
        class="uno-w-16 uno-h-16 md:uno-w-20 md:uno-h-20 uno-rounded-full  uno-flex uno-items-center uno-justify-center uno-mb-6 md:uno-mb-8">
        <nuxt-img src="/images/common/pay-card-1.png" alt="pay-card-1" width="96" height="96" />
      </div>

      <h1 class="uno-text-3xl md:uno-text-5xl uno-font-600 uno-text-gray-900 uno-mb-3 md:uno-mb-4 uno-font-Outfit">
        {{ $t('pages.orders.purchaseComplete.title') }}</h1>
      <p class="uno-text-gray-600 uno-mb-6 md:uno-mb-8 uno-font-Outfit uno-text-sm md:uno-text-lg">
        {{ $t('pages.orders.purchaseComplete.description') }}
      </p>

      <PrimaryButton @click="goToReport" class="uno-w-full">
        {{ $t('pages.orders.purchaseComplete.btn1') }}
      </PrimaryButton>

      <p class="uno-text-gray-500 uno-mt-3 uno-mb-6 uno-font-Outfit uno-text-sm md:uno-text-base">
        {{ $t('pages.orders.purchaseComplete.accessNote') }}
      </p>

      <OutlineButton @click="downloadGuidebook" class="uno-w-full">
        {{ $t('pages.orders.purchaseComplete.btn2') }}
      </OutlineButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import PrimaryButton from '@/components/ui/PrimaryButton.vue'
import OutlineButton from '@/components/ui/OutlineButton.vue'
import { getPaymentResult } from '~/api/payment'
import { useUserStore } from '@/stores/modules/user'
const token = useCookie('token')
const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const { toast } = useToast()

const userStore = useUserStore()

const loading = ref(true)
const paymentResult = ref<{
  order_sn: string
  status: string
  customer_email?: string
  customer_name?: string
  amount_total?: number
  currency?: string
  token?: string
} | null>(null)

definePageMeta({
  title: () => 'pages.orders.purchaseComplete.title',
  layoutShowMenu: false,
  layoutShowPageTopIcons: false,
  path: '/payment-success'
})

useSeoMeta({
  title: () => t('seo.orders.purchaseComplete.title', { separator: '|' }) as string,
  description: () => t('seo.orders.purchaseComplete.description') as string
})

const getPaymentResultAsync = async (order_sn: string) => {
  try {
    const { data } = await getPaymentResult({ order_sn })
    console.log(data)

    if (data.value?.code === 0 && data.value.data) {
      paymentResult.value = data.value.data
      if (paymentResult.value.user_token || paymentResult.value.token) {
        token.value = paymentResult.value.user_token || paymentResult.value.token
        await userStore.fetchUserInfo()
      }
    } else {
      toast?.add({
        title: t('common.api.error'),
        color: 'warning',
        description: data.value?.message || t('common.api.error')
      })
    }
  } catch (err: any) {
    toast?.add({
      title: t('common.api.error'),
      color: 'warning',
      description: err.message
    })
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  console.log(route.query)
  const order_sn = route.query.order_sn as string
  if (order_sn && import.meta.client) {
    getPaymentResultAsync(order_sn)
  } else {
    loading.value = false
    toast?.add({
      title: t('common.api.error'),
      color: 'warning',
      description: t('pages.orders.purchaseComplete.orderSnRequired') || 'Order number is required'
    })
  }
})

const goToReport = () => {
  navigateTo(localePath('/test/result'))
}

const downloadGuidebook = () => {
  if (paymentResult.value?.download_url) {
    window.open(paymentResult.value.download_url, '_blank')
  }
}
</script>

<style scoped></style>
