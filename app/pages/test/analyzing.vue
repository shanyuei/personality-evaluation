<template>
  <div class="page-container uno-py-6">
    <div class="uno-bg-gradient-to-b uno-from-blue-50 uno-to-purple-50 uno-flex uno-flex-col uno-items-center uno-justify-center uno-py-6 md:uno-py-12 uno-px-4 md:uno-px-6">
    <!-- 圆形图表和特征点区域 -->
    <div class="uno-relative uno-w-full uno-max-w-md md:uno-max-w-lg uno-h-[450px] md:uno-h-[550px] uno-mb-10 md:uno-mb-16">
      <!-- 圆形连接线 -->
      <div class="uno-absolute uno-inset-0 uno-flex uno-items-center uno-justify-center">
        <svg class="uno-w-[240px] uno-h-[240px] md:uno-w-[350px] md:uno-h-[350px]" viewBox="0 0 100 100">
          <!-- 外圆 -->
          <circle uno-cx="50" uno-cy="50" uno-r="40" fill="none" stroke="#E5E7EB" stroke-width="1" />
          <!-- 连接线 -->
          <line uno-x1="50" uno-y1="10" uno-x2="50" uno-y2="25" stroke="#E5E7EB" stroke-width="1" />
          <line uno-x1="78" uno-y1="22" uno-x2="66" uno-y2="34" stroke="#E5E7EB" stroke-width="1" />
          <line uno-x1="85" uno-y1="50" uno-x2="70" uno-y2="50" stroke="#E5E7EB" stroke-width="1" />
          <line uno-x1="78" uno-y1="78" uno-x2="66" uno-y2="66" stroke="#E5E7EB" stroke-width="1" />
          <line uno-x1="50" uno-y1="90" uno-x2="50" uno-y2="75" stroke="#E5E7EB" stroke-width="1" />
          <line uno-x1="22" uno-y1="78" uno-x2="34" uno-y2="66" stroke="#E5E7EB" stroke-width="1" />
          <line uno-x1="15" uno-y1="50" uno-x2="30" uno-y2="50" stroke="#E5E7EB" stroke-width="1" />
          <line uno-x1="22" uno-y1="22" uno-x2="34" uno-y2="34" stroke="#E5E7EB" stroke-width="1" />
          <line uno-x1="50" uno-y1="10" uno-x2="34" uno-y2="34" stroke="#E5E7EB" stroke-width="1" />
        </svg>
      </div>
      
      <!-- 9个特征点 -->
      <!-- 顶部 -->

      
      <!-- 中间特性卡片 -->
      <div class="uno-absolute uno-inset-0 uno-flex uno-items-center uno-justify-center">
        <NuxtImg src="/images/test/4.png" alt="test image" class="uno-w-[400px] uno-h-[400px] md:uno-w-[500px] md:uno-h-[500px] uno-rounded-[16px] uno-object-cover" />
      </div>
    </div>
    
    <!-- 底部进度条和提示文本 -->
    <div class="uno-w-full uno-max-w-md md:uno-max-w-lg uno-px-2">
      <div class="uno-w-full uno-h-2 uno-bg-gray-100 uno-rounded-full uno-overflow-hidden uno-shadow-sm">
        <div class="uno-h-full uno-bg-green-500 uno-rounded-full uno-w-[70%] uno-transition-all uno-duration-1000 uno-ease-in-out uno-animate-pulse"></div>
      </div>
      <p class="uno-text-center uno-text-[#8D8E8F] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2] uno-mt-3 md:uno-mt-4 uno-text-[10px] md:uno-text-xs uno-max-w-[70%] md:uno-max-w-[60%] uno-mx-auto">We are analyzing your answers and preparing your personality type report...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
// const { t } = useI18n()
// definePageMeta({
//   title: t('test.analyzing.title') as string
// })
// useSeoMeta({
//   title: () => t('test.analyzing.title') as string,
//   description: () => t('test.analyzing.description') as string,
//   ogTitle: () => t('test.analyzing.title') as string,
//   ogDescription: () => t('test.analyzing.description') as string
// })
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
