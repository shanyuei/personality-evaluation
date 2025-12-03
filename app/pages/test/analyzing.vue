<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col items-center justify-center py-8 px-4 md:py-12 md:px-6">
    <!-- 圆形图表和特征点区域 -->
    <div class="relative w-full max-w-md md:max-w-lg h-[350px] md:h-[450px] mb-10 md:mb-16">
      <!-- 圆形连接线 -->
      <div class="absolute inset-0 flex items-center justify-center">
        <svg class="w-[280px] h-[280px] md:w-[350px] md:h-[350px]" viewBox="0 0 100 100">
          <!-- 外圆 -->
          <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E7EB" stroke-width="1" />
          <!-- 连接线 -->
          <line x1="50" y1="10" x2="50" y2="25" stroke="#E5E7EB" stroke-width="1" />
          <line x1="78" y1="22" x2="66" y2="34" stroke="#E5E7EB" stroke-width="1" />
          <line x1="85" y1="50" x2="70" y2="50" stroke="#E5E7EB" stroke-width="1" />
          <line x1="78" y1="78" x2="66" y2="66" stroke="#E5E7EB" stroke-width="1" />
          <line x1="50" y1="90" x2="50" y2="75" stroke="#E5E7EB" stroke-width="1" />
          <line x1="22" y1="78" x2="34" y2="66" stroke="#E5E7EB" stroke-width="1" />
          <line x1="15" y1="50" x2="30" y2="50" stroke="#E5E7EB" stroke-width="1" />
          <line x1="22" y1="22" x2="34" y2="34" stroke="#E5E7EB" stroke-width="1" />
          <line x1="50" y1="10" x2="34" y2="34" stroke="#E5E7EB" stroke-width="1" />
        </svg>
      </div>
      
      <!-- 9个特征点 -->
      <!-- 顶部 -->
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-medium shadow-sm text-sm md:text-base">9</div>
      </div>
      <!-- 右上 -->
      <div class="absolute top-1/6 right-1/6 transform -translate-y-1/2 translate-x-1/2">
        <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-medium shadow-sm text-sm md:text-base">8</div>
      </div>
      <!-- 右侧 -->
      <div class="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
        <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-medium shadow-sm text-sm md:text-base">1</div>
      </div>
      <!-- 右下 -->
      <div class="absolute bottom-1/6 right-1/6 transform translate-y-1/2 translate-x-1/2">
        <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-medium shadow-sm text-sm md:text-base">2</div>
      </div>
      <!-- 底部 -->
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-medium shadow-sm text-sm md:text-base">3</div>
      </div>
      <!-- 左下 -->
      <div class="absolute bottom-1/6 left-1/6 transform translate-y-1/2 -translate-x-1/2">
        <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-medium shadow-sm text-sm md:text-base">4</div>
      </div>
      <!-- 左侧 -->
      <div class="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
        <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-medium shadow-sm text-sm md:text-base">5</div>
      </div>
      <!-- 左上 -->
      <div class="absolute top-1/6 left-1/6 transform -translate-y-1/2 -translate-x-1/2">
        <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium shadow-sm text-sm md:text-base">6</div>
      </div>
      <!-- 中上 -->
      <div class="absolute top-1/4 left-1/3 transform -translate-y-1/2 -translate-x-1/2">
        <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium shadow-sm text-sm md:text-base">7</div>
      </div>
      
      <!-- 中间特性卡片 -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-[160px] h-[160px] md:w-[200px] md:h-[200px] bg-white rounded-[16px] shadow-lg p-4 md:p-6 flex flex-col items-center justify-center">
          <div class="flex items-center mb-3 md:mb-4">
            <div class="w-7 h-7 md:w-9 md:h-9 rounded-full bg-yellow-100 flex items-center justify-center mr-2">
              <svg class="w-3.5 h-3.5 md:w-4.5 md:h-4.5 text-yellow-500" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L10 5.2H16L11.5 8.5L13 14L8 10.8L3 14L4.5 8.5L0 5.2H6L8 0Z"/>
              </svg>
            </div>
            <h3 class="text-base md:text-lg font-bold font-['Outfit'] text-gray-800">Characteristics</h3>
          </div>
          <div class="w-full space-y-2 md:space-y-2.5">
            <div class="h-1.5 md:h-2 bg-gray-100 rounded-full w-[90%]"></div>
            <div class="h-1.5 md:h-2 bg-gray-100 rounded-full w-[95%]"></div>
            <div class="h-1.5 md:h-2 bg-gray-100 rounded-full w-[85%]"></div>
            <div class="h-1.5 md:h-2 bg-gray-100 rounded-full w-[92%]"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 底部进度条和提示文本 -->
    <div class="w-full max-w-md md:max-w-lg px-2">
      <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden shadow-sm">
        <div class="h-full bg-green-500 rounded-full w-[70%] transition-all duration-1000 ease-in-out animate-pulse"></div>
      </div>
      <p class="text-center text-gray-600 mt-3 md:mt-4 text-sm md:text-base font-['Outfit']">We are analyzing your answers and preparing your personality type report...</p>
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
