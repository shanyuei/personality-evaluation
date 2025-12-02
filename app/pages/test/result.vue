<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6 py-10 md:py-16">
    <!-- 主内容区 -->
    <div class="max-w-md w-full flex flex-col items-center text-center">
      <!-- 成功图标 - 响应式大小 -->
      <div class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-100 flex items-center justify-center mb-6 md:mb-8">
        <svg class="w-8 h-8 md:w-10 md:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <!-- 标题和提示信息 - 响应式文本大小 -->
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 font-['Outfit']">Congratulations!</h1>
      <p class="text-gray-600 mb-10 md:mb-12 font-['Outfit'] text-base md:text-lg">You've completed the personality test.</p>
      
      <!-- 主按钮 - 响应式样式 -->
      <button 
        class="w-full h-[48px] md:h-[56px] bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition-all duration-300 font-['Outfit'] shadow-md hover:shadow-lg hover:-translate-y-1"
        @click="handleGetStarted"
      >
        Get Started
      </button>
      
      <!-- 编辑答案链接 - 响应式样式 -->
      <a 
        href="#" 
        class="mt-6 text-gray-500 hover:text-gray-700 transition-colors duration-300 font-['Outfit'] text-sm md:text-base"
        @click.prevent="handleEditAnswers"
      >
        Edit my answers
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

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