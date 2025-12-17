<template>
    <div class="page-container uno-py-6">
      <div class="course-header">
        <!-- 顶部导航与进度 -->
        <div class="course-nav">
          <NuxtLink to="/user-course/chapter-complete" class="back-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </NuxtLink>
          <div class="progress-percent">{{ progress }}%</div>
          <div class="question-count">{{ $t('pages.userCourseTest.questionCount', { current, total }) }}</div>
        </div>

        <div class="course-progress">
          <div class="progress-bar" :style="{ width: progress + '%' }" />
        </div>
      </div>

      <!-- 题卡 -->
      <div
        class="uno-mt-4 uno-w-full uno-max-w-[860px] uno-mx-auto uno-bg-white uno-rounded-[20px] md:uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] md:uno-border md:uno-border-[var(--ui-border)]">
        <div class="uno-p-0 md:uno-p-8">
          <h1
            class="uno-text-[#011813] uno-text-[20px] md:uno-text-[32px] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2] uno-mb-6">
            {{ question }}</h1>

          <div class="uno-space-y-4  uno-mx-auto">
            <URadioGroup v-model="selected" :items="radioItems" :ui="URadioTheme" />
          </div>

          <div class="uno-mt-8">
            <NuxtLink to="/user-course/test-complete" class="uno-block">
              <UButton :ui="UButtonTheme" class="uno-font-['Outfit']">{{ $t('pages.userCourseTest.cta') }}</UButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'


import UButtonTheme from '~/theme/UButton'
import URadioTheme from '~/theme/URadio'

const { t } = useI18n()
const current = ref(4)
const total = ref(10)
const progress = computed(() => Math.round((current.value / total.value) * 100))
const selected = ref<any>("")
// 模拟查询出来的问题内容
const question = ref('这是一个测试问题的内容，应该从数据源查询获取')
const options = [
  '选项 A - 这是第一个选项',
  '选项 B - 这是第二个选项',
  '选项 C - 这是第三个选项',
  '选项 D - 这是第四个选项'
]

const radioItems = computed(() => {
  return options.map((opt, idx) => ({
    label: opt,
    value: idx
  }))
})

definePageMeta({
  title: () => 'seo.userCourse.test.title'
})

useSeoMeta({
  title: () => t('seo.userCourse.test.title'),
  description: () => t('seo.userCourse.test.description')
})
</script>

<style scoped></style>
