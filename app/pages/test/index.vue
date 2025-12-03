<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col">
    <!-- 顶部品牌Logo -->
    <div class="pt-6 px-6 md:px-10 flex justify-center md:justify-start">
      <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
        <span class="text-white font-bold text-xl">P</span>
      </div>
    </div>

    <!-- 主要内容区 -->
    <main class="px-6 md:px-10 py-6 flex-grow">
      <!-- 中心容器 -->
      <div class="max-w-[1200px] mx-auto w-full">
        <!-- 测评标题 -->
        <h1 class="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-8 text-center font-['Outfit']">Free Personality Test</h1>
        
        <!-- H5步骤图标显示 -->
        <div class="block md:hidden mb-6">
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <div class="mt-1 w-8 h-8 flex-shrink-0">
                <!-- <img src="/theme/test/step1.png" alt="Step 1" class="w-full h-full object-contain" /> -->
              </div>
              <p class="text-sm text-gray-600">Be yourself and answer honestly to find your personality type.</p>
            </div>
            
            <div class="flex items-start space-x-3">
              <div class="mt-1 w-8 h-8 flex-shrink-0">
                <!-- <img src="/theme/test/step2.png" alt="Step 2" class="w-full h-full object-contain" /> -->
              </div>
              <p class="text-sm text-gray-600">Learn how your personality type influences many areas of your life.</p>
            </div>
            
            <div class="flex items-start space-x-3">
              <div class="mt-1 w-8 h-8 flex-shrink-0">
                <!-- <img src="/theme/test/step3.png" alt="Step 3" class="w-full h-full object-contain" /> -->
              </div>
              <p class="text-sm text-gray-600">Find jobs that suit your personality and get career guidance that actually helps.</p>
            </div>
          </div>
        </div>
        
        <!-- PC三步骤流程卡片 -->
        <div class="hidden md:grid md:grid-cols-3 gap-6 mb-12">
          <!-- 步骤1 -->
          <div class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100 shadow-sm">
            <div class="flex items-center justify-center mb-4">
              <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <!-- <img src="/theme/test/step1.png" alt="Step 1" class="w-10 h-10 object-contain" /> -->
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2 text-center font-['Outfit']">Complete the Test</h3>
            <p class="text-gray-600 text-center">Be yourself and answer honestly to find your personality type.</p>
          </div>
          
          <!-- 步骤2 -->
          <div class="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-100 shadow-sm">
            <div class="flex items-center justify-center mb-4">
              <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <!-- <img src="/theme/test/step2.png" alt="Step 2" class="w-10 h-10 object-contain" /> -->
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2 text-center font-['Outfit']">View Detailed Results</h3>
            <p class="text-gray-600 text-center">Learn how your personality type influences many areas of your life.</p>
          </div>
          
          <!-- 步骤3 -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 shadow-sm">
            <div class="flex items-center justify-center mb-4">
              <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <!-- <img src="/theme/test/step3.png" alt="Step 3" class="w-10 h-10 object-contain" /> -->
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2 text-center font-['Outfit']">Unlock Your Potential</h3>
            <p class="text-gray-600 text-center">Find jobs that suit your personality and get career guidance that actually helps.</p>
          </div>
        </div>

        <!-- 进度指示器 -->
        <div class="mb-6 md:mb-8 max-w-2xl mx-auto">
          <div class="flex justify-between items-center mb-2">
            <span class="text-xs md:text-sm text-gray-500">0/5</span>
            <span class="text-xs md:text-sm text-gray-500">Step 1 of 20</span>
          </div>
          <div class="w-full h-1.5 md:h-2 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full bg-green-500 w-0 rounded-full"></div>
          </div>
        </div>

        <!-- 测评问题区域 -->
        <div class="max-w-3xl mx-auto">
          <h2 class="text-lg md:text-xl font-semibold text-gray-800 mb-6 md:mb-8 text-center font-['Outfit']">Choose how accurately each statement reflects you.</h2>
          
          <!-- 评分指南 -->
          <div class="flex justify-between mb-6 md:mb-8 px-4">
            <div class="text-center">
              <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-pink-100 mx-auto flex items-center justify-center mb-1">
                <span class="text-pink-600 text-sm">1</span>
              </div>
              <span class="text-[10px] md:text-xs text-gray-600">Strongly Disagree</span>
            </div>
            
            <div class="text-center">
              <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-pink-50 mx-auto flex items-center justify-center mb-1">
                <span class="text-pink-500 text-sm">2</span>
              </div>
              <span class="text-[10px] md:text-xs text-gray-600">Disagree</span>
            </div>
            
            <div class="text-center">
              <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 mx-auto flex items-center justify-center mb-1">
                <span class="text-gray-600 text-sm">3</span>
              </div>
              <span class="text-[10px] md:text-xs text-gray-600">Neutral</span>
            </div>
            
            <div class="text-center">
              <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-50 mx-auto flex items-center justify-center mb-1">
                <span class="text-green-500 text-sm">4</span>
              </div>
              <span class="text-[10px] md:text-xs text-gray-600">Agree</span>
            </div>
            
            <div class="text-center">
              <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-1">
                <span class="text-green-600 text-sm">5</span>
              </div>
              <span class="text-[10px] md:text-xs text-gray-600">Strongly Agree</span>
            </div>
          </div>

          <!-- 测评问题 -->
          <div class="space-y-4 md:space-y-6">
            <!-- 问题1 -->
            <div class="bg-white rounded-xl border border-gray-100 p-4 md:p-6 shadow-sm">
              <p class="text-base text-gray-800 mb-4 md:mb-6 font-['Outfit']">I strive for accuracy and precision in all my tasks.</p>
              <div class="flex justify-between">
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-pink-300 hover:bg-pink-50 transition-colors cursor-pointer">
                    <span>1</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-pink-200 hover:bg-pink-50 transition-colors cursor-pointer">
                    <span>2</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer">
                    <span>3</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-green-200 hover:bg-green-50 transition-colors cursor-pointer">
                    <span>4</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-green-300 hover:bg-green-50 transition-colors cursor-pointer">
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 问题2 -->
            <div class="bg-white rounded-xl border border-gray-100 p-4 md:p-6 shadow-sm">
              <p class="text-base text-gray-800 mb-4 md:mb-6 font-['Outfit']">I notice even the smallest inconsistencies and errors in my work.</p>
              <div class="flex justify-between">
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-pink-300 hover:bg-pink-50 transition-colors cursor-pointer">
                    <span>1</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-pink-200 hover:bg-pink-50 transition-colors cursor-pointer">
                    <span>2</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer">
                    <span>3</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-green-200 hover:bg-green-50 transition-colors cursor-pointer">
                    <span>4</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-green-300 hover:bg-green-50 transition-colors cursor-pointer">
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 问题3 (特殊样式) -->
            <div class="bg-white rounded-xl border border-gray-100 p-4 md:p-6 shadow-sm">
              <p class="text-base text-gray-800 mb-4 md:mb-6 font-['Outfit']">I am able to maintain high standards even under tight deadlines.</p>
              <div class="flex justify-between">
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-pink-300 bg-pink-50 flex items-center justify-center text-xs md:text-sm text-pink-600">
                    <span>✓</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-pink-300 bg-pink-50 flex items-center justify-center text-xs md:text-sm text-pink-600">
                    <span>✓</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-300 bg-gray-50 flex items-center justify-center text-xs md:text-sm text-gray-600">
                    <span>✓</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-green-300 bg-green-50 flex items-center justify-center text-xs md:text-sm text-green-600">
                    <span>✓</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-green-300 bg-green-50 flex items-center justify-center text-xs md:text-sm text-green-600">
                    <span>✓</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 问题4 -->
            <div class="bg-white rounded-xl border border-gray-100 p-4 md:p-6 shadow-sm">
              <p class="text-base text-gray-800 mb-4 md:mb-6 font-['Outfit']">I frequently check my work to ensure it meets the required standards.</p>
              <div class="flex justify-between">
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-pink-300 hover:bg-pink-50 transition-colors cursor-pointer">
                    <span>1</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-pink-200 hover:bg-pink-50 transition-colors cursor-pointer">
                    <span>2</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer">
                    <span>3</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-green-200 hover:bg-green-50 transition-colors cursor-pointer">
                    <span>4</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-green-300 hover:bg-green-50 transition-colors cursor-pointer">
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 问题5 -->
            <div class="bg-white rounded-xl border border-gray-100 p-4 md:p-6 shadow-sm">
              <p class="text-base text-gray-800 mb-4 md:mb-6 font-['Outfit']">Improving and refining systems or processes is a priority for me.</p>
              <div class="flex justify-between">
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-pink-300 hover:bg-pink-50 transition-colors cursor-pointer">
                    <span>1</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-pink-200 hover:bg-pink-50 transition-colors cursor-pointer">
                    <span>2</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer">
                    <span>3</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-green-200 hover:bg-green-50 transition-colors cursor-pointer">
                    <span>4</span>
                  </div>
                </div>
                
                <div class="flex flex-col items-center">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs md:text-sm text-gray-500 hover:border-green-300 hover:bg-green-50 transition-colors cursor-pointer">
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 提示文本 -->
          <p class="text-center text-sm text-gray-500 mt-6 mb-6">All questions must be answered before you continue.</p>
        </div>
      </div>
    </main>

    <!-- 底部按钮 -->
    <div class="px-6 md:px-10 py-4 md:py-8 mt-auto">
      <div class="max-w-3xl mx-auto">
        <button class="w-full h-[48px] md:h-[52px] bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors duration-300 font-['Outfit'] md:shadow-md md:hover:shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// const { t } = useI18n()
// definePageMeta({
//   title: t('pages.test.title') as string
// })
// useSeoMeta({
//   title: () => t('pages.test.title') as string,
//   description: () => t('pages.test.description') as string,
//   ogTitle: () => t('pages.test.title') as string,
//   ogDescription: () => t('pages.test.description') as string
// })
// 测评相关逻辑可以在这里实现
// 例如：问题数据、用户答案管理、进度跟踪等
</script>

<style scoped>

</style>
