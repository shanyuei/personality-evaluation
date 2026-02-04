<template>
  <div class="uno-min-h-screen uno-flex uno-flex-col uno-items-center uno-justify-center uno-px-4 uno-py-12 uno-bg-gradient-to-br uno-from-[#F5F5F5] uno-to-[#E8F4F8]">
    <div class="uno-flex uno-flex-col uno-items-center uno-justify-center uno-max-w-md uno-text-center">
      <!-- 图标 -->
      <div class="uno-w-24 uno-h-24 uno-bg-[#E8F8F0] uno-rounded-full uno-flex uno-items-center uno-justify-center uno-mb-8">
        <div class="uno-w-16 uno-h-16 uno-flex uno-items-center uno-justify-center">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="16" width="40" height="32" rx="4" stroke="#009D77" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="20" y1="24" x2="44" y2="24" stroke="#009D77" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="20" y1="32" x2="44" y2="32" stroke="#009D77" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="20" y1="40" x2="44" y2="40" stroke="#009D77" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M40 48L32 40L24 48" stroke="#009D77" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <!-- 标题 -->
      <h1 class="uno-text-4xl sm:uno-text-5xl uno-font-Outfit uno-font-bold uno-text-[#0F172A] uno-mb-4">
        Congratulations!
      </h1>

      <!-- 副标题 -->
      <p class="uno-text-lg uno-text-[#4E5255] uno-font-Outfit uno-mb-10">
        You've completed the personality test.
      </p>

      <!-- 主按钮 -->
      <button 
        class="uno-w-full uno-h-16 uno-bg-[#009D77] uno-text-white uno-font-Outfit uno-font-semibold uno-text-lg uno-rounded-[16px] uno-transition-colors hover:uno-bg-[#0AA17F] hover:uno-shadow-md uno-mb-6"
        @click="getResults"
      >
        Get My Results
      </button>

      <!-- 编辑答案链接 -->
      <a 
        href="#" 
        class="uno-text-[#4E5255] uno-font-Outfit uno-text-sm uno-underline hover:uno-text-[#009D77]"
        @click.prevent="editAnswers"
      >
        Edit my answers
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useLocalePath } from 'nuxt/i18n'

const { t } = useI18n()
const router = useRouter()
const localePath = useLocalePath()

definePageMeta({
  title: () => 'seo.test.finish.title'
})

useSeoMeta({
  title: () => t('seo.test.finish.title'),
  description: () => t('seo.test.finish.description')
})

const getResults = () => {
  // 跳转到结果页面
  router.push(localePath({ name: 'test-result' }))
}

const editAnswers = () => {
  // 跳转到测试步骤页面，允许用户编辑答案
  router.push(localePath({ name: 'test-step', query: { step: 1 } }))
}
</script>

<style scoped>
/* Add any additional styles here */
</style>
