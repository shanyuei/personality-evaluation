<template>
  <div class="uno-min-h-screen uno-flex uno-flex-col uno-items-center uno-justify-center uno-bg-gradient-to-b uno-from-white uno-to-gray-50 uno-px-6 uno-py-10 md:uno-py-16">
    <!-- 主内容区 -->
    <div class="uno-max-w-md uno-w-full uno-flex uno-flex-col uno-items-center uno-text-center">
      <!-- 成功图标 - 响应式大小 -->
      <div class="uno-w-16 uno-h-16 md:uno-w-20 md:uno-h-20 uno-rounded-full uno-bg-green-100 uno-flex uno-items-center uno-justify-center uno-mb-6 md:uno-mb-8">
        <svg class="uno-w-8 uno-h-8 md:uno-w-10 md:uno-h-10 uno-text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <!-- 标题和提示信息 - 响应式文本大小 -->
      <h1 class="uno-text-3xl md:uno-text-4xl uno-font-bold uno-text-gray-900 uno-mb-3 md:uno-mb-4 uno-font-['Outfit']">Congratulations!</h1>
      <p class="uno-text-gray-600 uno-mb-10 md:uno-mb-12 uno-font-['Outfit'] uno-text-base md:uno-text-lg">You've completed the personality test.</p>
      
      <!-- 主按钮 - 响应式样式 -->
      <button 
        class="uno-w-full uno-h-[48px] md:uno-h-[56px] uno-bg-green-500 hover:uno-bg-green-600 uno-text-white uno-font-medium uno-rounded-xl uno-transition-all uno-duration-300 uno-font-['Outfit'] uno-shadow-md hover:uno-shadow-lg hover:uno--translate-y-1"
        @click="handleGetStarted"
      >
        Get Started
      </button>
      
      <!-- 编辑答案链接 - 响应式样式 -->
      <a 
        href="#" 
        class="uno-mt-6 uno-text-gray-500 hover:uno-text-gray-700 uno-transition-colors uno-duration-300 uno-font-['Outfit'] uno-text-sm md:uno-text-base"
        @click.prevent="handleEditAnswers"
      >
        Edit my answers
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
// const { t } = useI18n()
// definePageMeta({
//   title: t('test.result.title') as string
// })
// useSeoMeta({
//   title: () => t('test.result.title') as string,
//   description: () => t('test.result.description') as string,
//   ogTitle: () => t('test.result.title') as string,
//   ogDescription: () => t('test.result.description') as string
// })

const router = useRouter()

// 处理Get Started按钮点击
const handleGetStarted = () => {
  // 清除本地存储的测试答案（可选，根据需求决定是否保留）
  // localStorage.removeItem('testAnswers')
  
  // 导航到首页
  router.push('/')
}

// 处理编辑答案链接点击
const handleEditAnswers = () => {
  // 导航到测试第一步
  router.push({ path: '/test/step', query: { step: 1 } })
}

// 页面加载时可以检查是否存在测试答案
onMounted(() => {
  // 实际项目中可以在这里添加检查逻辑
  // 确保用户是完成了测试才进入这个页面
  const hasTestAnswers = localStorage.getItem('testAnswers')
  if (!hasTestAnswers) {
    console.warn('用户可能未完成测试直接访问此页面')
    // 可以选择重定向用户或显示提示信息
  }
})
</script>

<style scoped>
/* 页面特定样式可以在这里添加 */
</style>
