<template>
  <div class="page-container uno-py-6">
    <div class=" uno-flex uno-flex-col uno-items-center uno-justify-center uno-py-6 md:uno-py-12 uno-px-4 md:uno-px-6">
      <NuxtImg src="/images/test/4.png" alt="test image" width="450" height="450" />
      <!-- 底部进度条和提示文本 -->
      <div class="uno-w-full uno-max-w-md md:uno-max-w-lg uno-px-2">
        <div class="uno-w-full uno-h-2 uno-bg-gray-100 uno-rounded-full uno-overflow-hidden uno-shadow-sm">
          <div
            class="uno-h-full uno-bg-green-500 uno-rounded-full uno-w-[70%] uno-transition-all uno-duration-1000 uno-ease-in-out uno-animate-pulse">
          </div>
        </div>
        <p
          class="uno-text-center uno-text-[#8D8E8F] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2] uno-mt-3 md:uno-mt-4 uno-text-[10px] md:uno-text-xs uno-max-w-[70%] md:uno-max-w-[60%] uno-mx-auto">
          We are analyzing your answers and preparing your personality type report...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'


const { t } = useI18n()
definePageMeta({
  title: () => 'seo.test.analyzing.title'
})
useSeoMeta({
  title: () => t('seo.test.analyzing.title'),
  description: () => t('seo.test.analyzing.description')
})
const router = useRouter()

onMounted(() => {
  // 模拟分析过程，5秒后跳转到结果页面
  // const timer = setTimeout(() => {
  //   router.push('/test/result')
  // }, 5000)

  // 清理定时器
  return () => clearTimeout(timer)
})
</script>

<style scoped>
/* 样式将在后续步骤中完善 */
</style>
