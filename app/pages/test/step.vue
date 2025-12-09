<template>
  <div class="uno-min-h-screen uno-bg-gradient-to-b uno-from-blue-50 uno-to-purple-50 uno-flex uno-flex-col">
    <!-- 顶部导航栏 -->
    <div class="uno-pt-6 uno-px-6 md:uno-px-10 uno-flex uno-justify-between uno-items-center">
      <!-- 品牌Logo -->
      <div class="uno-w-12 uno-h-12 uno-bg-gradient-to-br uno-from-green-500 uno-to-teal-500 uno-rounded-full uno-flex uno-items-center uno-justify-center">
        <span class="uno-text-white uno-font-bold uno-text-xl">P</span>
      </div>
      
      <!-- 进度指示器 - 步骤版本 -->
      <div class="uno-flex uno-items-center uno-space-x-2">
        <div class="uno-h-1.5 md:uno-h-2 uno-bg-gray-200 uno-rounded-full uno-overflow-hidden uno-w-24 md:uno-w-32">
          <div class="uno-h-full uno-bg-green-500 uno-rounded-full uno-transition-all uno-duration-300 uno-ease-out" :style="{ width: `${progressPercentage}%` }"></div>
        </div>
        <span class="uno-text-xs md:uno-text-sm uno-text-gray-500 uno-font-medium">Step 1 of 5</span>
      </div>
    </div>

    <!-- 主要内容区 -->
    <main class="uno-px-6 md:uno-px-10 uno-py-6 uno-flex-grow">
      <div class="page-container uno-w-full">
        <!-- 测评标题和描述 -->
        <div class="uno-text-center uno-mb-8 md:uno-mb-12">
          <h1 class="uno-text-2xl md:uno-text-4xl uno-font-bold uno-text-gray-900 uno-mb-4 uno-font-['Outfit']">Conscientiousness</h1>
          <p class="uno-text-gray-600 uno-max-w-2xl uno-mx-auto">Rate how well each statement describes you. Be honest and go with your first instinct.</p>
        </div>

        <!-- 评分指南 - PC版本 -->
        <div class="uno-hidden md:uno-flex uno-justify-between uno-mb-8 uno-px-4 uno-max-w-2xl uno-mx-auto">
          <div class="uno-text-center">
            <div class="uno-w-10 uno-h-10 uno-rounded-full uno-bg-pink-100 uno-mx-auto uno-flex uno-items-center uno-justify-center uno-mb-1">
              <span class="uno-text-pink-600 uno-text-sm">1</span>
            </div>
            <span class="uno-text-xs uno-text-gray-600">Strongly Disagree</span>
          </div>
          
          <div class="uno-text-center">
            <div class="uno-w-10 uno-h-10 uno-rounded-full uno-bg-pink-50 uno-mx-auto uno-flex uno-items-center uno-justify-center uno-mb-1">
              <span class="uno-text-pink-500 uno-text-sm">2</span>
            </div>
            <span class="uno-text-xs uno-text-gray-600">Disagree</span>
          </div>
          
          <div class="uno-text-center">
            <div class="uno-w-10 uno-h-10 uno-rounded-full uno-bg-gray-100 uno-mx-auto uno-flex uno-items-center uno-justify-center uno-mb-1">
              <span class="uno-text-gray-600 uno-text-sm">3</span>
            </div>
            <span class="uno-text-xs uno-text-gray-600">Neutral</span>
          </div>
          
          <div class="uno-text-center">
            <div class="uno-w-10 uno-h-10 uno-rounded-full uno-bg-green-50 uno-mx-auto uno-flex uno-items-center uno-justify-center uno-mb-1">
              <span class="uno-text-green-500 uno-text-sm">4</span>
            </div>
            <span class="uno-text-xs uno-text-gray-600">Agree</span>
          </div>
          
          <div class="uno-text-center">
            <div class="uno-w-10 uno-h-10 uno-rounded-full uno-bg-green-100 uno-mx-auto uno-flex uno-items-center uno-justify-center uno-mb-1">
              <span class="uno-text-green-600 uno-text-sm">5</span>
            </div>
            <span class="uno-text-xs uno-text-gray-600">Strongly Agree</span>
          </div>
        </div>
        
        <!-- 评分指南 - 移动端简化版本 -->
        <div class="uno-block md:uno-hidden uno-mb-6 uno-px-4">
          <div class="uno-flex uno-justify-between uno-items-center">
            <span class="uno-text-sm uno-text-pink-600">Disagree</span>
            <span class="uno-text-sm uno-text-gray-600">Neutral</span>
            <span class="uno-text-sm uno-text-green-600">Agree</span>
          </div>
        </div>

        <!-- 测评问题列表 -->
        <div class="uno-max-w-2xl uno-mx-auto">
          <div class="uno-space-y-6 md:uno-space-y-8">
            <!-- 问题1 -->
            <div class="uno-bg-white uno-rounded-xl uno-border uno-border-gray-100 uno-p-4 md:uno-p-6 uno-shadow-sm uno-transition-all hover:uno-shadow-md">
              <div class="uno-flex uno-items-start uno-mb-4">
                <div class="uno-flex-shrink-0 uno-w-8 uno-h-8 uno-bg-green-100 uno-rounded-full uno-flex uno-items-center uno-justify-center uno-mr-3 uno-mt-1">
                  <span class="uno-text-green-600 uno-text-sm uno-font-medium">1</span>
                </div>
                <p class="uno-text-base md:uno-text-lg uno-text-gray-800 uno-font-['Outfit']">I strive for accuracy and precision in all my tasks.</p>
              </div>
              
              <!-- 评分选项 -->
              <div class="uno-flex uno-justify-between uno-px-1">
                <button 
                  v-for="rating in 5" 
                  :key="rating"
                  class="uno-flex uno-flex-col uno-items-center uno-flex-1 uno-mx-1"
                  :class="{ 'uno-border-2 uno-border-gray-200 uno-text-gray-500 hover:uno-border-gray-300 hover:uno-bg-gray-50': selectedRatings[0] !== rating, 'uno-border-2 uno-border-pink-300 uno-bg-pink-50 uno-text-pink-600': selectedRatings[0] === rating && rating <= 2, 'uno-border-2 uno-border-gray-300 uno-bg-gray-50 uno-text-gray-600': selectedRatings[0] === rating && rating === 3, 'uno-border-2 uno-border-green-300 uno-bg-green-50 uno-text-green-600': selectedRatings[0] === rating && rating >= 4 }"
                  @click="selectRating(0, rating)"
                  @touchstart="selectRating(0, rating)"
                >
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-transition-all uno-duration-200 uno-ease-in-out uno-transform hover:uno-scale-105 active:uno-scale-95">
                    {{ selectedRatings[0] === rating ? '✓' : rating }}
                  </div>
                  
                  <!-- 移动端评分标签 -->
                  <span v-if="selectedRatings[0] === rating" class="uno-mt-1 uno-text-[10px] uno-text-center uno-truncate uno-max-w-[80px]">
                    {{ getRatingLabel(rating) }}
                  </span>
                </button>
              </div>
            </div>

            <!-- 问题2 -->
            <div class="uno-bg-white uno-rounded-xl uno-border uno-border-gray-100 uno-p-4 md:uno-p-6 uno-shadow-sm uno-transition-all hover:uno-shadow-md">
              <div class="uno-flex uno-items-start uno-mb-4">
                <div class="uno-flex-shrink-0 uno-w-8 uno-h-8 uno-bg-green-100 uno-rounded-full uno-flex uno-items-center uno-justify-center uno-mr-3 uno-mt-1">
                  <span class="uno-text-green-600 uno-text-sm uno-font-medium">2</span>
                </div>
                <p class="uno-text-base md:uno-text-lg uno-text-gray-800 uno-font-['Outfit']">I notice even the smallest inconsistencies and errors in my work.</p>
              </div>
              
              <!-- 评分选项 -->
              <div class="uno-flex uno-justify-between uno-px-1">
                <button 
                  v-for="rating in 5" 
                  :key="rating"
                  class="uno-flex uno-flex-col uno-items-center uno-flex-1 uno-mx-1"
                  :class="{ 'uno-border-2 uno-border-gray-200 uno-text-gray-500 hover:uno-border-gray-300 hover:uno-bg-gray-50': selectedRatings[1] !== rating, 'uno-border-2 uno-border-pink-300 uno-bg-pink-50 uno-text-pink-600': selectedRatings[1] === rating && rating <= 2, 'uno-border-2 uno-border-gray-300 uno-bg-gray-50 uno-text-gray-600': selectedRatings[1] === rating && rating === 3, 'uno-border-2 uno-border-green-300 uno-bg-green-50 uno-text-green-600': selectedRatings[1] === rating && rating >= 4 }"
                  @click="selectRating(1, rating)"
                  @touchstart="selectRating(1, rating)"
                >
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-transition-all uno-duration-200 uno-ease-in-out uno-transform hover:uno-scale-105 active:uno-scale-95">
                    {{ selectedRatings[1] === rating ? '✓' : rating }}
                  </div>
                  
                  <!-- 移动端评分标签 -->
                  <span v-if="selectedRatings[1] === rating" class="uno-mt-1 uno-text-[10px] uno-text-center uno-truncate uno-max-w-[80px]">
                    {{ getRatingLabel(rating) }}
                  </span>
                </button>
              </div>
            </div>

            <!-- 问题3 -->
            <div class="uno-bg-white uno-rounded-xl uno-border uno-border-gray-100 uno-p-4 md:uno-p-6 uno-shadow-sm uno-transition-all hover:uno-shadow-md">
              <div class="uno-flex uno-items-start uno-mb-4">
                <div class="uno-flex-shrink-0 uno-w-8 uno-h-8 uno-bg-green-100 uno-rounded-full uno-flex uno-items-center uno-justify-center uno-mr-3 uno-mt-1">
                  <span class="uno-text-green-600 uno-text-sm uno-font-medium">3</span>
                </div>
                <p class="uno-text-base md:uno-text-lg uno-text-gray-800 uno-font-['Outfit']">I am able to maintain high standards even under tight deadlines.</p>
              </div>
              
              <!-- 评分选项 -->
              <div class="uno-flex uno-justify-between uno-px-1">
                <button 
                  v-for="rating in 5" 
                  :key="rating"
                  class="uno-flex uno-flex-col uno-items-center uno-flex-1 uno-mx-1"
                  :class="{ 'uno-border-2 uno-border-gray-200 uno-text-gray-500 hover:uno-border-gray-300 hover:uno-bg-gray-50': selectedRatings[2] !== rating, 'uno-border-2 uno-border-pink-300 uno-bg-pink-50 uno-text-pink-600': selectedRatings[2] === rating && rating <= 2, 'uno-border-2 uno-border-gray-300 uno-bg-gray-50 uno-text-gray-600': selectedRatings[2] === rating && rating === 3, 'uno-border-2 uno-border-green-300 uno-bg-green-50 uno-text-green-600': selectedRatings[2] === rating && rating >= 4 }"
                  @click="selectRating(2, rating)"
                  @touchstart="selectRating(2, rating)"
                >
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-transition-all uno-duration-200 uno-ease-in-out uno-transform hover:uno-scale-105 active:uno-scale-95">
                    {{ selectedRatings[2] === rating ? '✓' : rating }}
                  </div>
                  
                  <!-- 移动端评分标签 -->
                  <span v-if="selectedRatings[2] === rating" class="uno-mt-1 uno-text-[10px] uno-text-center uno-truncate uno-max-w-[80px]">
                    {{ getRatingLabel(rating) }}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <!-- 提示文本 -->
          <p class="uno-text-center uno-text-sm uno-text-gray-500 uno-mt-8 uno-mb-6">All questions must be answered before continuing.</p>
          
          <!-- 步骤进度指示器 - 底部版本 -->
          <div class="uno-mt-8 uno-mb-4">
            <div class="uno-flex uno-justify-between uno-items-center">
              <div class="uno-flex-1 uno-h-1 uno-bg-gray-200 uno-rounded-full uno-relative">
                <div class="uno-absolute uno-left-0 uno-top-0 uno-h-full uno-bg-green-500 uno-w-[20%] uno-rounded-full uno-transition-all uno-duration-300"></div>
              </div>
              <div class="uno-ml-4">
                <div class="uno-flex uno-space-x-1">
                  <span v-for="i in 5" :key="i" class="uno-w-2 uno-h-2 uno-rounded-full" :class="i <= 1 ? 'uno-bg-green-500' : 'uno-bg-gray-300'"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 底部导航按钮 -->
      <div class="uno-px-6 md:uno-px-10 uno-py-4 md:uno-py-8 uno-mt-auto">
        <div class="uno-max-w-2xl uno-mx-auto uno-flex uno-space-x-4">
          <button class="uno-w-1/3 uno-h-[48px] md:uno-h-[52px] uno-bg-white uno-text-gray-600 uno-font-medium uno-rounded-xl uno-border uno-border-gray-200 hover:uno-bg-gray-50 uno-transition-colors uno-duration-300 uno-font-['Outfit']" @click="goBack">
            Back
          </button>
          <button 
            class="uno-w-2/3 uno-h-[48px] md:uno-h-[52px] uno-font-medium uno-rounded-xl uno-font-['Outfit'] uno-transition-all uno-duration-300 md:uno-shadow-md"
            :class="{ 'uno-bg-green-600 uno-text-white hover:uno-bg-green-700 hover:uno-shadow-lg uno-transform hover:uno-translate-y-[-2px]': allQuestionsAnswered, 'uno-bg-gray-300 uno-text-gray-500 uno-cursor-not-allowed': !allQuestionsAnswered }"
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
//   title: t('test.step.title') as string
// })
// useSeoMeta({
//   title: () => t('test.step.title') as string,
//   description: () => t('test.step.description') as string,
//   ogTitle: () => t('test.step.title') as string,
//   ogDescription: () => t('test.step.description') as string
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
