<template>
  <div class="uno-w-full">
    <!-- Pricing & CTA Section -->
    <div class="uno-max-w-479px uno-mx-auto uno-relative">
      <div class="uno-flex uno-items-center uno-justify-between uno-mb-8px uno-px-2">
        <span class="uno-font-Outfit uno-font-semibold uno-text-[16px] uno-leading-[150%] uno-text-[#4E5255]">{{
          $t('pages.test.report.pricing.access') }}</span>
        <span class="uno-font-Outfit uno-font-semibold uno-text-[24px] uno-leading-[150%] uno-text-[#009D77]">{{
          $t('pages.test.report.pricing.price') }}</span>
      </div>

      <PrimaryButton class="uno-w-full uno-mb-8px" @click="handleCTAClick">
        {{ $t('pages.test.report.pricing.cta') }}
      </PrimaryButton>

      <div
        class="uno-flex uno-items-center uno-justify-center uno-text-[12px] uno-leading-[150%] uno-text-gray-500 uno-gap-1.5 uno-font-Outfit uno-mb-8px">
        <div class="i-lucide-check-circle uno-text-gray-400 uno-font-Outfit uno-text-[12px] uno-leading-[150%]" />
        <span
          class="uno-underline uno-underline-solid uno-text-[12px] uno-leading-[150%] uno-font-Outfit uno-text-[#4E5255]">{{
            $t('pages.test.report.pricing.trial') }}</span>
      </div>

      <!-- Counter Section -->
      <div class="uno-flex uno-items-center uno-justify-center uno-gap-3 ">
        <div
          class="uno-h-[52px] uno-gap-[10px] uno-p-[10px] uno-rounded-[4px] uno-flex uno-items-center uno-bg-[#F8F8F8]">
          <div v-for="(digit, index) in digits" :key="index"
            class="uno-w-[26px] uno-h-[32px] uno-gap-[10px] uno-p-[4px] uno-bg-white uno-shadow-sm uno-border uno-border-gray-100 uno-rounded-[2px] uno-flex uno-items-center uno-justify-center uno-font-Outfit uno-font-bold uno-text-[16px] uno-leading-[150%] uno-text-[#011813]">
            {{ digit }}
          </div>
          <span class="uno-font-Outfit uno-text-[16px] uno-leading-[150%] uno-ml-3 uno-text-[#323233]">{{
            $t('pages.test.report.pricing.ordered') }}</span>
        </div>


      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PrimaryButton from '~/components/ui/PrimaryButton.vue'

const props = defineProps<{
  digits: string[]
  reportId?: string
}>()
const localePath = useLocalePath()

const handleCTAClick = () => {
  // 构建跳转路径，包含 report_id 参数
  if (props.reportId) {
    navigateTo(localePath({
      path: '/checkout',
      query: {
        report_id: props.reportId
      }
    }))
  } else {
    navigateTo(localePath('/checkout'))
  }
}
</script>

<style scoped>
.font-outfit {
  font-family: 'Outfit', sans-serif;
}
</style>