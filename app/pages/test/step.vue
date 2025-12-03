<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col">
    <!-- 顶部导航栏 -->
    <div class="pt-6 px-6 md:px-10 flex justify-between items-center">
      <!-- 品牌Logo -->
      <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
        <span class="text-white font-bold text-xl">P</span>
      </div>
      
      <!-- 进度指示器 - 步骤版本 -->
      <div class="flex items-center space-x-2">
        <div class="h-1.5 md:h-2 bg-gray-200 rounded-full overflow-hidden w-24 md:w-32">
          <div class="h-full bg-green-500 rounded-full transition-all duration-300 ease-out" :style="{ width: `${progressPercentage}%` }"></div>
        </div>
        <span class="text-xs md:text-sm text-gray-500 font-medium">Step 1 of 5</span>
      </div>
    </div>

    <!-- 主要内容区 -->
    <main class="px-6 md:px-10 py-6 flex-grow">
      <div class="max-w-[1200px] mx-auto w-full">
        <!-- 测评标题和描述 -->
        <div class="text-center mb-8 md:mb-12">
          <h1 class="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-['Outfit']">Conscientiousness</h1>
          <p class="text-gray-600 max-w-2xl mx-auto">Rate how well each statement describes you. Be honest and go with your first instinct.</p>
        </div>

        <!-- 评分指南 - PC版本 -->
        <div class="hidden md:flex justify-between mb-8 px-4 max-w-2xl mx-auto">
          <div class="text-center">
            <div class="w-10 h-10 rounded-full bg-pink-100 mx-auto flex items-center justify-center mb-1">
              <span class="text-pink-600 text-sm">1</span>
            </div>
            <span class="text-xs text-gray-600">Strongly Disagree</span>
          </div>
          
          <div class="text-center">
            <div class="w-10 h-10 rounded-full bg-pink-50 mx-auto flex items-center justify-center mb-1">
              <span class="text-pink-500 text-sm">2</span>
            </div>
            <span class="text-xs text-gray-600">Disagree</span>
          </div>
          
          <div class="text-center">
            <div class="w-10 h-10 rounded-full bg-gray-100 mx-auto flex items-center justify-center mb-1">
              <span class="text-gray-600 text-sm">3</span>
            </div>
            <span class="text-xs text-gray-600">Neutral</span>
          </div>
          
          <div class="text-center">
            <div class="w-10 h-10 rounded-full bg-green-50 mx-auto flex items-center justify-center mb-1">
              <span class="text-green-500 text-sm">4</span>
            </div>
            <span class="text-xs text-gray-600">Agree</span>
          </div>
          
          <div class="text-center">
            <div class="w-10 h-10 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-1">
              <span class="text-green-600 text-sm">5</span>
            </div>
            <span class="text-xs text-gray-600">Strongly Agree</span>
          </div>
        </div>
        
        <!-- 评分指南 - 移动端简化版本 -->
        <div class="block md:hidden mb-6 px-4">
          <div class="flex justify-between items-center">
            <span class="text-sm text-pink-600">Disagree</span>
            <span class="text-sm text-gray-600">Neutral</span>
            <span class="text-sm text-green-600">Agree</span>
          </div>
        </div>

        <!-- 测评问题列表 -->
        <div class="max-w-2xl mx-auto">
          <div class="space-y-6 md:space-y-8">
            <!-- 问题1 -->
            <div class="bg-white rounded-xl border border-gray-100 p-4 md:p-6 shadow-sm transition-all hover:shadow-md">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span class="text-green-600 text-sm font-medium">1</span>
                </div>
                <p class="text-base md:text-lg text-gray-800 font-['Outfit']">I strive for accuracy and precision in all my tasks.</p>
              </div>
              
              <!-- 评分选项 -->
              <div class="flex justify-between px-1">
                <button 
                  v-for="rating in 5" 
                  :key="rating"
                  class="flex flex-col items-center flex-1 mx-1"
                  :class="{
                    'border-2 border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50': selectedRatings[0] !== rating,
                    'border-2 border-pink-300 bg-pink-50 text-pink-600': selectedRatings[0] === rating && rating <= 2,
                    'border-2 border-gray-300 bg-gray-50 text-gray-600': selectedRatings[0] === rating && rating === 3,
                    'border-2 border-green-300 bg-green-50 text-green-600': selectedRatings[0] === rating && rating >= 4
                  }"
                  @click="selectRating(0, rating)"
                  @touchstart="selectRating(0, rating)"
                >
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xs md:text-sm transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95">
                    {{ selectedRatings[0] === rating ? '✓' : rating }}
                  </div>
                  
                  <!-- 移动端评分标签 -->
                  <span v-if="selectedRatings[0] === rating" class="mt-1 text-[10px] text-center truncate max-w-[80px]">
                    {{ getRatingLabel(rating) }}
                  </span>
                </button>
              </div>
            </div>

            <!-- 问题2 -->
            <div class="bg-white rounded-xl border border-gray-100 p-4 md:p-6 shadow-sm transition-all hover:shadow-md">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span class="text-green-600 text-sm font-medium">2</span>
                </div>
                <p class="text-base md:text-lg text-gray-800 font-['Outfit']">I notice even the smallest inconsistencies and errors in my work.</p>
              </div>
              
              <!-- 评分选项 -->
              <div class="flex justify-between px-1">
                <button 
                  v-for="rating in 5" 
                  :key="rating"
                  class="flex flex-col items-center flex-1 mx-1"
                  :class="{
                    'border-2 border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50': selectedRatings[1] !== rating,
                    'border-2 border-pink-300 bg-pink-50 text-pink-600': selectedRatings[1] === rating && rating <= 2,
                    'border-2 border-gray-300 bg-gray-50 text-gray-600': selectedRatings[1] === rating && rating === 3,
                    'border-2 border-green-300 bg-green-50 text-green-600': selectedRatings[1] === rating && rating >= 4
                  }"
                  @click="selectRating(1, rating)"
                  @touchstart="selectRating(1, rating)"
                >
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xs md:text-sm transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95">
                    {{ selectedRatings[1] === rating ? '✓' : rating }}
                  </div>
                  
                  <!-- 移动端评分标签 -->
                  <span v-if="selectedRatings[1] === rating" class="mt-1 text-[10px] text-center truncate max-w-[80px]">
                    {{ getRatingLabel(rating) }}
                  </span>
                </button>
              </div>
            </div>

            <!-- 问题3 -->
            <div class="bg-white rounded-xl border border-gray-100 p-4 md:p-6 shadow-sm transition-all hover:shadow-md">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span class="text-green-600 text-sm font-medium">3</span>
                </div>
                <p class="text-base md:text-lg text-gray-800 font-['Outfit']">I am able to maintain high standards even under tight deadlines.</p>
              </div>
              
              <!-- 评分选项 -->
              <div class="flex justify-between px-1">
                <button 
                  v-for="rating in 5" 
                  :key="rating"
                  class="flex flex-col items-center flex-1 mx-1"
                  :class="{
                    'border-2 border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50': selectedRatings[2] !== rating,
                    'border-2 border-pink-300 bg-pink-50 text-pink-600': selectedRatings[2] === rating && rating <= 2,
                    'border-2 border-gray-300 bg-gray-50 text-gray-600': selectedRatings[2] === rating && rating === 3,
                    'border-2 border-green-300 bg-green-50 text-green-600': selectedRatings[2] === rating && rating >= 4
                  }"
                  @click="selectRating(2, rating)"
                  @touchstart="selectRating(2, rating)"
                >
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xs md:text-sm transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95">
                    {{ selectedRatings[2] === rating ? '✓' : rating }}
                  </div>
                  
                  <!-- 移动端评分标签 -->
                  <span v-if="selectedRatings[2] === rating" class="mt-1 text-[10px] text-center truncate max-w-[80px]">
                    {{ getRatingLabel(rating) }}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <!-- 提示文本 -->
          <p class="text-center text-sm text-gray-500 mt-8 mb-6">All questions must be answered before continuing.</p>
          
          <!-- 步骤进度指示器 - 底部版本 -->
          <div class="mt-8 mb-4">
            <div class="flex justify-between items-center">
              <div class="flex-1 h-1 bg-gray-200 rounded-full relative">
                <div class="absolute left-0 top-0 h-full bg-green-500 w-[20%] rounded-full transition-all duration-300"></div>
              </div>
              <div class="ml-4">
                <div class="flex space-x-1">
                  <span v-for="i in 5" :key="i" class="w-2 h-2 rounded-full" :class="i <= 1 ? 'bg-green-500' : 'bg-gray-300'"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部导航按钮 -->
      <div class="px-6 md:px-10 py-4 md:py-8 mt-auto">
        <div class="max-w-2xl mx-auto flex space-x-4">
          <button class="w-1/3 h-[48px] md:h-[52px] bg-white text-gray-600 font-medium rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors duration-300 font-['Outfit']" @click="goBack">
            Back
          </button>
          <button 
            class="w-2/3 h-[48px] md:h-[52px] font-medium rounded-xl font-['Outfit'] transition-all duration-300 md:shadow-md"
            :class="{
              'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg transform hover:translate-y-[-2px]': allQuestionsAnswered,
              'bg-gray-300 text-gray-500 cursor-not-allowed': !allQuestionsAnswered
            }"
            :disabled="!allQuestionsAnswered"
            @click="nextStep"
          >
            {{ currentStep < 5 ? 'Next Step' : 'View Results' }}
          </button>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// const { t } = useI18n()
// definePageMeta({
//   title: t('pages.test.step.title') as string
// })
// useSeoMeta({
//   title: () => t('pages.test.step.title') as string,
//   description: () => t('pages.test.step.description') as string,
//   ogTitle: () => t('pages.test.step.title') as string,
//   ogDescription: () => t('pages.test.step.description') as string
// })

// 路由
const router = useRouter()
const route = useRoute()

// 问题答案状态
const selectedRatings = ref<number[]>([0, 0, 0])

// 获取当前步骤（默认为1）
const currentStep = ref(parseInt(route.query.step as string) || 1)

// 计算当前进度百分比
const progressPercentage = computed(() => {
  const answeredCount = selectedRatings.value.filter(rating => rating > 0).length
  return Math.round((answeredCount / selectedRatings.value.length) * 100)
})

// 检查是否所有问题都已回答
const allQuestionsAnswered = computed(() => {
  return selectedRatings.value.every(rating => rating > 0)
})

// 选择评分
const selectRating = (questionIndex: number, rating: number) => {
  selectedRatings.value[questionIndex] = rating
}

// 获取评分标签
const getRatingLabel = (rating: number): string => {
  switch (rating) {
    case 1: return 'Strongly Disagree'
    case 2: return 'Disagree'
    case 3: return 'Neutral'
    case 4: return 'Agree'
    case 5: return 'Strongly Agree'
    default: return ''
  }
}

// 下一步
const nextStep = () => {
  if (allQuestionsAnswered.value) {
    // 保存当前步骤的答案
    const answers = JSON.parse(localStorage.getItem('testAnswers') || '{}')
    answers[`step${currentStep.value}`] = selectedRatings.value
    localStorage.setItem('testAnswers', JSON.stringify(answers))
    
    // 保存答案，然后导航到下一步
    console.log('Navigating to next step with answers:', selectedRatings.value)
    
    // 根据当前步骤决定下一步导航
    if (currentStep.value < 5) {
      // 还有下一个步骤
      router.push({ path: '/test/step', query: { step: currentStep.value + 1 } })
    } else {
      // 所有步骤完成，跳转到结果页
      router.push('/test/result')
    }
  }
}

// 返回上一步
const goBack = () => {
  if (currentStep.value > 1) {
    // 返回上一个步骤
    router.push({ path: '/test/step', query: { step: currentStep.value - 1 } })
  } else {
    // 实际项目中这里会导航到上一个页面
    // router.back() 或 router.push('/test')
    console.log('Going back to previous step')
  }
}
</script>

<style scoped>
/* 可以添加自定义样式 */
</style>
