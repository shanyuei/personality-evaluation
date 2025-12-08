<template>
  <div class="uno-min-h-screen uno-bg-gradient-to-b uno-from-blue-50 uno-to-purple-50 uno-flex uno-flex-col uno-items-center uno-justify-center uno-py-8 uno-px-4 md:uno-py-12 md:uno-px-6">
    <!-- 圆形图表和特征点区域 -->
    <div class="uno-relative uno-w-full uno-max-w-md md:uno-max-w-lg uno-h-[350px] md:uno-h-[450px] uno-mb-10 md:uno-mb-16">
      <!-- 圆形连接线 -->
      <div class="uno-absolute uno-inset-0 uno-flex uno-items-center uno-justify-center">
        <svg class="uno-w-[280px] uno-h-[280px] md:uno-w-[350px] md:uno-h-[350px]" viewBox="0 0 100 100">
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
      <div class="uno-absolute uno-top-0 uno-left-1/2 uno-transform uno--translate-x-1/2 uno--translate-y-1/2">
        <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-bg-pink-100 uno-flex uno-items-center uno-justify-center uno-text-pink-600 uno-font-medium uno-shadow-sm uno-text-sm md:uno-text-base">9</div>
      </div>
      <!-- 右上 -->
      <div class="uno-absolute uno-top-1/6 uno-right-1/6 uno-transform uno--translate-y-1/2 uno-translate-x-1/2">
        <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-bg-green-100 uno-flex uno-items-center uno-justify-center uno-text-green-600 uno-font-medium uno-shadow-sm uno-text-sm md:uno-text-base">8</div>
      </div>
      <!-- 右侧 -->
      <div class="uno-absolute uno-top-1/2 uno-right-0 uno-transform uno--translate-y-1/2 uno-translate-x-1/2">
        <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-bg-green-100 uno-flex uno-items-center uno-justify-center uno-text-green-600 uno-font-medium uno-shadow-sm uno-text-sm md:uno-text-base">1</div>
      </div>
      <!-- 右下 -->
      <div class="uno-absolute uno-bottom-1/6 uno-right-1/6 uno-transform uno-translate-y-1/2 uno-translate-x-1/2">
        <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-bg-pink-100 uno-flex uno-items-center uno-justify-center uno-text-pink-600 uno-font-medium uno-shadow-sm uno-text-sm md:uno-text-base">2</div>
      </div>
      <!-- 底部 -->
      <div class="uno-absolute uno-bottom-0 uno-left-1/2 uno-transform uno--translate-x-1/2 uno-translate-y-1/2">
        <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-bg-pink-100 uno-flex uno-items-center uno-justify-center uno-text-pink-600 uno-font-medium uno-shadow-sm uno-text-sm md:uno-text-base">3</div>
      </div>
      <!-- 左下 -->
      <div class="uno-absolute uno-bottom-1/6 uno-left-1/6 uno-transform uno-translate-y-1/2 uno--translate-x-1/2">
        <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-bg-yellow-100 uno-flex uno-items-center uno-justify-center uno-text-yellow-600 uno-font-medium uno-shadow-sm uno-text-sm md:uno-text-base">4</div>
      </div>
      <!-- 左侧 -->
      <div class="uno-absolute uno-top-1/2 uno-left-0 uno-transform uno--translate-y-1/2 uno--translate-x-1/2">
        <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-bg-yellow-100 uno-flex uno-items-center uno-justify-center uno-text-yellow-600 uno-font-medium uno-shadow-sm uno-text-sm md:uno-text-base">5</div>
      </div>
      <!-- 左上 -->
      <div class="uno-absolute uno-top-1/6 uno-left-1/6 uno-transform uno--translate-y-1/2 uno--translate-x-1/2">
        <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-bg-purple-100 uno-flex uno-items-center uno-justify-center uno-text-purple-600 uno-font-medium uno-shadow-sm uno-text-sm md:uno-text-base">6</div>
      </div>
      <!-- 中上 -->
      <div class="uno-absolute uno-top-1/4 uno-left-1/3 uno-transform uno--translate-y-1/2 uno--translate-x-1/2">
        <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-bg-purple-100 uno-flex uno-items-center uno-justify-center uno-text-purple-600 uno-font-medium uno-shadow-sm uno-text-sm md:uno-text-base">7</div>
      </div>
      
      <!-- 中间特性卡片 -->
      <div class="uno-absolute uno-inset-0 uno-flex uno-items-center uno-justify-center">
        <div class="uno-w-[160px] uno-h-[160px] md:uno-w-[200px] md:uno-h-[200px] uno-bg-white uno-rounded-[16px] uno-shadow-lg uno-p-4 md:uno-p-6 uno-flex uno-flex-col uno-items-center uno-justify-center">
          <div class="uno-flex uno-items-center uno-mb-3 md:uno-mb-4">
            <div class="uno-w-7 uno-h-7 md:uno-w-9 md:uno-h-9 uno-rounded-full uno-bg-yellow-100 uno-flex uno-items-center uno-justify-center uno-mr-2">
              <svg class="uno-w-3.5 uno-h-3.5 md:uno-w-4.5 md:uno-h-4.5 uno-text-yellow-500" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L10 5.2H16L11.5 8.5L13 14L8 10.8L3 14L4.5 8.5L0 5.2H6L8 0Z"/>
              </svg>
            </div>
            <h3 class="uno-text-base md:uno-text-lg uno-font-bold uno-font-['Outfit'] uno-text-gray-800">Characteristics</h3>
          </div>
          <div class="uno-w-full uno-space-y-2 md:uno-space-y-2.5">
            <div class="uno-h-1.5 md:uno-h-2 uno-bg-gray-100 uno-rounded-full uno-w-[90%]"></div>
            <div class="uno-h-1.5 md:uno-h-2 uno-bg-gray-100 uno-rounded-full uno-w-[95%]"></div>
            <div class="uno-h-1.5 md:uno-h-2 uno-bg-gray-100 uno-rounded-full uno-w-[85%]"></div>
            <div class="uno-h-1.5 md:uno-h-2 uno-bg-gray-100 uno-rounded-full uno-w-[92%]"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 底部进度条和提示文本 -->
    <div class="uno-w-full uno-max-w-md md:uno-max-w-lg uno-px-2">
      <div class="uno-w-full uno-h-2 uno-bg-gray-100 uno-rounded-full uno-overflow-hidden uno-shadow-sm">
        <div class="uno-h-full uno-bg-green-500 uno-rounded-full uno-w-[70%] uno-transition-all uno-duration-1000 uno-ease-in-out uno-animate-pulse"></div>
      </div>
      <p class="uno-text-center uno-text-gray-600 uno-mt-3 md:uno-mt-4 uno-text-sm md:uno-text-base uno-font-['Outfit']">We are analyzing your answers and preparing your personality type report...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
// const { t } = useI18n()
// definePageMeta({
//   title: t('pages.test.analyzing.title') as string
// })
// useSeoMeta({
//   title: () => t('pages.test.analyzing.title') as string,
//   description: () => t('pages.test.analyzing.description') as string,
//   ogTitle: () => t('pages.test.analyzing.title') as string,
//   ogDescription: () => t('pages.test.analyzing.description') as string
// })
const router = useRouter()

onMounted(() => {
  // 模拟分析过程，5秒后跳转到结果页面
  const timer = setTimeout(() => {
    router.push('/test/result')
  }, 5000)
  
  // 清理定时器
  return () => clearTimeout(timer)
})
</script>

<style scoped>
/* 样式将在后续步骤中完善 */
</style>
