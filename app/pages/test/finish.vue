<template>
  <div class=" uno-flex uno-flex-col uno-items-center uno-justify-center uno-px-4 uno-py-30 ">
    <div class="uno-flex uno-flex-col uno-items-center uno-justify-center uno-max-w-md uno-text-center">
      <!-- 图标 -->

      <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="96" height="96" rx="48" fill="#E8FAF5" />
        <path
          d="M63.3156 26.5H31.8596C30.2803 26.5 29 27.7803 29 29.3596V66.5C29 68.0794 30.2803 69.3596 31.8596 69.3596H63.3156C64.8949 69.3596 66.1752 68.0794 66.1752 66.5V29.3596C66.1752 27.7803 64.8949 26.5 63.3156 26.5Z"
          stroke="#009D77" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M35 33H43" stroke="#009D77" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M35 38H58.5" stroke="#009D77" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M47.4017 62.8034C52.5941 62.8034 56.8034 58.5941 56.8034 53.4017C56.8034 48.2093 52.5941 44 47.4017 44C42.2093 44 38 48.2093 38 53.4017C38 58.5941 42.2093 62.8034 47.4017 62.8034Z"
          fill="#009D77" />
        <path d="M43.4553 54.53L46.573 56.7861L51.9909 49.453" stroke="white" stroke-width="1.69231"
          stroke-linecap="round" stroke-linejoin="round" />
      </svg>

      <!-- 标题 -->
      <h1 class="uno-font-Outfit uno-font-semibold uno-text-[48px] uno-leading-[120%] uno-my-12px uno-text-center">
        {{ t('pages.test.finish.title') }}
      </h1>

      <!-- 副标题 -->
      <p class="uno-font-Outfit uno-text-[16px] uno-leading-[150%] uno-text-[#4E5255] uno-mb-24px uno-text-center">
        {{ t('pages.test.finish.subtitle') }}
      </p>

      <!-- 主按钮 -->
      <PrimaryButton class="uno-w-full uno-mb-24px" @click="getResults">
        {{ t('pages.test.finish.button') }}
      </PrimaryButton>

      <!-- 编辑答案链接 -->
      <a href="#"
        class="uno-font-Outfit uno-text-[16px] uno-leading-[150%] uno-text-[#4E5255] uno-underline uno-underline-solid hover:uno-text-[#009D77] uno-text-center"
        @click.prevent="editAnswers">
        {{ t('pages.test.finish.reviewAnswers') }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">

import PrimaryButton from '~/components/ui/PrimaryButton.vue'

const { t } = useI18n()

definePageMeta({
  title: () => 'seo.test.finish.title',
  layoutShowPageTopIcons: false,
  path: '/my-results'
})

useSeoMeta({
  title: () => t('seo.test.finish.title', { separator: '|' }),
  description: () => t('seo.test.finish.description')
})

const route = useRoute()
const router = useRouter()
const localePath = useLocalePath()

const getResults = () => {
  // 获取路由上的 reportId 参数
  const reportId = route.query.reportId

  // 构建跳转路径，包含 reportId 参数和国际化地址
  if (reportId) {
    router.push(localePath({
      path: '/unlock-report',
      query: { reportId }
    }))

  } else {
    router.push(localePath({
      path: '/unlock-report',
    }))
  }
}

const editAnswers = () => {
  // 跳转到测试步骤页面，允许用户编辑答案
}
</script>

<style scoped>
/* Add any additional styles here */
</style>
