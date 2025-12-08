<template>
  <div class="uno-min-h-screen uno-bg-gradient-to-b uno-from-blue-50 uno-to-purple-50 uno-flex uno-flex-col">
    <!-- 顶部品牌Logo -->
    <div class="uno-pt-6 uno-px-6 md:uno-px-10 uno-flex uno-justify-center md:uno-justify-start">
      <div class="uno-w-12 uno-h-12 uno-bg-gradient-to-br uno-from-green-500 uno-to-teal-500 uno-rounded-full uno-flex uno-items-center uno-justify-center">
        <span class="uno-text-white uno-font-bold uno-text-xl">P</span>
      </div>
    </div>

    <!-- 主要内容区 -->
    <main class="uno-px-6 md:uno-px-10 uno-py-6 uno-flex-grow">
      <!-- 中心容器 -->
      <div class="uno-max-w-[80%] uno-mx-auto uno-w-full">
        <!-- 测评标题 -->
        <h1 class="uno-text-2xl md:uno-text-4xl uno-font-bold uno-text-gray-900 uno-mb-4 md:uno-mb-8 uno-text-center uno-font-['Outfit']">Free Personality Test</h1>
        
        <!-- H5步骤图标显示 -->
        <div class="uno-block md:uno-hidden uno-mb-6">
          <div class="uno-space-y-4">
            <div class="uno-flex uno-items-start uno-space-x-3">
              <div class="uno-mt-1 uno-w-8 uno-h-8 uno-flex-shrink-0">
                <!-- <img src="/theme/test/step1.png" alt="Step 1" class="uno-w-full uno-h-full uno-object-contain" /> -->
              </div>
              <p class="uno-text-sm uno-text-gray-600">Be yourself and answer honestly to find your personality type.</p>
            </div>
            
            <div class="uno-flex uno-items-start uno-space-x-3">
              <div class="uno-mt-1 uno-w-8 uno-h-8 uno-flex-shrink-0">
                <!-- <img src="/theme/test/step2.png" alt="Step 2" class="uno-w-full uno-h-full uno-object-contain" /> -->
              </div>
              <p class="uno-text-sm uno-text-gray-600">Learn how your personality type influences many areas of your life.</p>
            </div>
            
            <div class="uno-flex uno-items-start uno-space-x-3">
              <div class="uno-mt-1 uno-w-8 uno-h-8 uno-flex-shrink-0">
                <!-- <img src="/theme/test/step3.png" alt="Step 3" class="uno-w-full uno-h-full uno-object-contain" /> -->
              </div>
              <p class="uno-text-sm uno-text-gray-600">Find jobs that suit your personality and get career guidance that actually helps.</p>
            </div>
          </div>
        </div>
        
        <!-- PC三步骤流程卡片 -->
        <div class="uno-hidden md:uno-grid md:uno-grid-cols-3 uno-gap-6 uno-mb-12">
          <!-- 步骤1 -->
          <div class="uno-bg-gradient-to-br uno-from-pink-50 uno-to-rose-50 uno-rounded-2xl uno-p-6 uno-border uno-border-pink-100 uno-shadow-sm">
            <div class="uno-flex uno-items-center uno-justify-center uno-mb-4">
              <div class="uno-w-16 uno-h-16 uno-bg-white uno-rounded-full uno-flex uno-items-center uno-justify-center uno-shadow-sm">
                <!-- <img src="/theme/test/step1.png" alt="Step 1" class="uno-w-10 uno-h-10 uno-object-contain" /> -->
              </div>
            </div>
            <h3 class="uno-text-xl uno-font-bold uno-text-gray-900 uno-mb-2 uno-text-center uno-font-['Outfit']">Complete the Test</h3>
            <p class="uno-text-gray-600 uno-text-center">Be yourself and answer honestly to find your personality type.</p>
          </div>
          
          <!-- 步骤2 -->
          <div class="uno-bg-gradient-to-br uno-from-purple-50 uno-to-violet-50 uno-rounded-2xl uno-p-6 uno-border uno-border-purple-100 uno-shadow-sm">
            <div class="uno-flex uno-items-center uno-justify-center uno-mb-4">
              <div class="uno-w-16 uno-h-16 uno-bg-white uno-rounded-full uno-flex uno-items-center uno-justify-center uno-shadow-sm">
                <!-- <img src="/theme/test/step2.png" alt="Step 2" class="uno-w-10 uno-h-10 uno-object-contain" /> -->
              </div>
            </div>
            <h3 class="uno-text-xl uno-font-bold uno-text-gray-900 uno-mb-2 uno-text-center uno-font-['Outfit']">View Detailed Results</h3>
            <p class="uno-text-gray-600 uno-text-center">Learn how your personality type influences many areas of your life.</p>
          </div>
          
          <!-- 步骤3 -->
          <div class="uno-bg-gradient-to-br uno-from-green-50 uno-to-emerald-50 uno-rounded-2xl uno-p-6 uno-border uno-border-green-100 uno-shadow-sm">
            <div class="uno-flex uno-items-center uno-justify-center uno-mb-4">
              <div class="uno-w-16 uno-h-16 uno-bg-white uno-rounded-full uno-flex uno-items-center uno-justify-center uno-shadow-sm">
                <!-- <img src="/theme/test/step3.png" alt="Step 3" class="uno-w-10 uno-h-10 uno-object-contain" /> -->
              </div>
            </div>
            <h3 class="uno-text-xl uno-font-bold uno-text-gray-900 uno-mb-2 uno-text-center uno-font-['Outfit']">Unlock Your Potential</h3>
            <p class="uno-text-gray-600 uno-text-center">Find jobs that suit your personality and get career guidance that actually helps.</p>
          </div>
        </div>

        <!-- 进度指示器 -->
        <div class="uno-mb-6 md:uno-mb-8 uno-max-w-2xl uno-mx-auto">
          <div class="uno-flex uno-justify-between uno-items-center uno-mb-2">
            <span class="uno-text-xs md:uno-text-sm uno-text-gray-500">0/5</span>
            <span class="uno-text-xs md:uno-text-sm uno-text-gray-500">Step 1 of 20</span>
          </div>
          <div class="uno-w-full uno-h-1.5 md:uno-h-2 uno-bg-gray-200 uno-rounded-full uno-overflow-hidden">
            <div class="uno-h-full uno-bg-green-500 uno-w-0 uno-rounded-full"></div>
          </div>
        </div>

        <!-- 测评问题区域 -->
        <div class="uno-max-w-3xl uno-mx-auto">
          <h2 class="uno-text-lg md:uno-text-xl uno-font-semibold uno-text-gray-800 uno-mb-6 md:uno-mb-8 uno-text-center uno-font-['Outfit']">Choose how accurately each statement reflects you.</h2>
          
          <!-- 评分指南 -->
          <div class="uno-flex uno-justify-between uno-mb-6 md:uno-mb-8 uno-px-4">
            <div class="uno-text-center">
              <div class="uno-w-8 uno-h-8 md:uno-w-10 md:uno-h-10 uno-rounded-full uno-bg-pink-100 uno-mx-auto uno-flex uno-items-center uno-justify-center uno-mb-1">
                <span class="uno-text-pink-600 uno-text-sm">1</span>
              </div>
              <span class="uno-text-[10px] md:uno-text-xs uno-text-gray-600">Strongly Disagree</span>
            </div>
            
            <div class="uno-text-center">
              <div class="uno-w-8 uno-h-8 md:uno-w-10 md:uno-h-10 uno-rounded-full uno-bg-pink-50 uno-mx-auto uno-flex uno-items-center uno-justify-center uno-mb-1">
                <span class="uno-text-pink-500 uno-text-sm">2</span>
              </div>
              <span class="uno-text-[10px] md:uno-text-xs uno-text-gray-600">Disagree</span>
            </div>
            
            <div class="uno-text-center">
              <div class="uno-w-8 uno-h-8 md:uno-w-10 md:uno-h-10 uno-rounded-full uno-bg-gray-100 uno-mx-auto uno-flex uno-items-center uno-justify-center uno-mb-1">
                <span class="uno-text-gray-600 uno-text-sm">3</span>
              </div>
              <span class="uno-text-[10px] md:uno-text-xs uno-text-gray-600">Neutral</span>
            </div>
            
            <div class="uno-text-center">
              <div class="uno-w-8 uno-h-8 md:uno-w-10 md:uno-h-10 uno-rounded-full uno-bg-green-50 uno-mx-auto uno-flex uno-items-center uno-justify-center uno-mb-1">
                <span class="uno-text-green-500 uno-text-sm">4</span>
              </div>
              <span class="uno-text-[10px] md:uno-text-xs uno-text-gray-600">Agree</span>
            </div>
            
            <div class="uno-text-center">
              <div class="uno-w-8 uno-h-8 md:uno-w-10 md:uno-h-10 uno-rounded-full uno-bg-green-100 uno-mx-auto uno-flex uno-items-center uno-justify-center uno-mb-1">
                <span class="uno-text-green-600 uno-text-sm">5</span>
              </div>
              <span class="uno-text-[10px] md:uno-text-xs uno-text-gray-600">Strongly Agree</span>
            </div>
          </div>

          <!-- 测评问题 -->
          <div class="uno-space-y-4 md:uno-space-y-6">
            <!-- 问题1 -->
            <div class="uno-bg-white uno-rounded-xl uno-border uno-border-gray-100 uno-p-4 md:uno-p-6 uno-shadow-sm">
              <p class="uno-text-base uno-text-gray-800 uno-mb-4 md:uno-mb-6 uno-font-['Outfit']">I strive for accuracy and precision in all my tasks.</p>
              <div class="uno-flex uno-justify-between">
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-pink-300 hover:uno-bg-pink-50 uno-transition-colors uno-cursor-pointer">
                    <span>1</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-pink-200 hover:uno-bg-pink-50 uno-transition-colors uno-cursor-pointer">
                    <span>2</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-gray-300 hover:uno-bg-gray-50 uno-transition-colors uno-cursor-pointer">
                    <span>3</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-green-200 hover:uno-bg-green-50 uno-transition-colors uno-cursor-pointer">
                    <span>4</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-green-300 hover:uno-bg-green-50 uno-transition-colors uno-cursor-pointer">
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 问题2 -->
            <div class="uno-bg-white uno-rounded-xl uno-border uno-border-gray-100 uno-p-4 md:uno-p-6 uno-shadow-sm">
              <p class="uno-text-base uno-text-gray-800 uno-mb-4 md:uno-mb-6 uno-font-['Outfit']">I notice even the smallest inconsistencies and errors in my work.</p>
              <div class="uno-flex uno-justify-between">
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-pink-300 hover:uno-bg-pink-50 uno-transition-colors uno-cursor-pointer">
                    <span>1</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-pink-200 hover:uno-bg-pink-50 uno-transition-colors uno-cursor-pointer">
                    <span>2</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-gray-300 hover:uno-bg-gray-50 uno-transition-colors uno-cursor-pointer">
                    <span>3</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-green-200 hover:uno-bg-green-50 uno-transition-colors uno-cursor-pointer">
                    <span>4</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-green-300 hover:uno-bg-green-50 uno-transition-colors uno-cursor-pointer">
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 问题3 (特殊样式) -->
            <div class="uno-bg-white uno-rounded-xl uno-border uno-border-gray-100 uno-p-4 md:uno-p-6 uno-shadow-sm">
              <p class="uno-text-base uno-text-gray-800 uno-mb-4 md:uno-mb-6 uno-font-['Outfit']">I am able to maintain high standards even under tight deadlines.</p>
              <div class="uno-flex uno-justify-between">
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-pink-300 uno-bg-pink-50 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-pink-600">
                    <span>✓</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-pink-300 uno-bg-pink-50 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-pink-600">
                    <span>✓</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-300 uno-bg-gray-50 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-600">
                    <span>✓</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-green-300 uno-bg-green-50 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-green-600">
                    <span>✓</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-green-300 uno-bg-green-50 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-green-600">
                    <span>✓</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 问题4 -->
            <div class="uno-bg-white uno-rounded-xl uno-border uno-border-gray-100 uno-p-4 md:uno-p-6 uno-shadow-sm">
              <p class="uno-text-base uno-text-gray-800 uno-mb-4 md:uno-mb-6 uno-font-['Outfit']">I frequently check my work to ensure it meets the required standards.</p>
              <div class="uno-flex uno-justify-between">
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-pink-300 hover:uno-bg-pink-50 uno-transition-colors uno-cursor-pointer">
                    <span>1</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-pink-200 hover:uno-bg-pink-50 uno-transition-colors uno-cursor-pointer">
                    <span>2</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-gray-300 hover:uno-bg-gray-50 uno-transition-colors uno-cursor-pointer">
                    <span>3</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-green-200 hover:uno-bg-green-50 uno-transition-colors uno-cursor-pointer">
                    <span>4</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-green-300 hover:uno-bg-green-50 uno-transition-colors uno-cursor-pointer">
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 问题5 -->
            <div class="uno-bg-white uno-rounded-xl uno-border uno-border-gray-100 uno-p-4 md:uno-p-6 uno-shadow-sm">
              <p class="uno-text-base uno-text-gray-800 uno-mb-4 md:uno-mb-6 uno-font-['Outfit']">Improving and refining systems or processes is a priority for me.</p>
              <div class="uno-flex uno-justify-between">
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-pink-300 hover:uno-bg-pink-50 uno-transition-colors uno-cursor-pointer">
                    <span>1</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-pink-200 hover:uno-bg-pink-50 uno-transition-colors uno-cursor-pointer">
                    <span>2</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-gray-300 hover:uno-bg-gray-50 uno-transition-colors uno-cursor-pointer">
                    <span>3</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-green-200 hover:uno-bg-green-50 uno-transition-colors uno-cursor-pointer">
                    <span>4</span>
                  </div>
                </div>
                
                <div class="uno-flex uno-flex-col uno-items-center">
                  <div class="uno-w-10 uno-h-10 md:uno-w-12 md:uno-h-12 uno-rounded-full uno-border-2 uno-border-gray-200 uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 hover:uno-border-green-300 hover:uno-bg-green-50 uno-transition-colors uno-cursor-pointer">
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 提示文本 -->
          <p class="uno-text-center uno-text-sm uno-text-gray-500 uno-mt-6 uno-mb-6">All questions must be answered before you continue.</p>
        </div>
      </div>
    </main>

    <!-- 底部按钮 -->
    <div class="uno-px-6 md:uno-px-10 uno-py-4 md:uno-py-8 uno-mt-auto">
      <div class="uno-max-w-3xl uno-mx-auto">
        <button class="uno-w-full uno-h-[48px] md:uno-h-[52px] uno-bg-green-600 uno-text-white uno-font-medium uno-rounded-xl hover:uno-bg-green-700 uno-transition-colors uno-duration-300 uno-font-['Outfit'] md:uno-shadow-md md:hover:uno-shadow-lg">
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
