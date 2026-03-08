<template>
  <div class="page-container my-10">
    <div class="uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-8">
      <!-- 顶部圆形图标 -->
      <div
        class="uno-w-16 uno-h-16 md:uno-w-20 md:uno-h-20 uno-rounded-full uno-bg-[var(--color-green-3)] uno-flex uno-items-center uno-justify-center">
        <!-- <NuxtImg src="/images/user-course/1.png" class="uno-w-full uno-h-full uno-object-cover"
          alt="Lesson complete icon" /> -->
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

      </div>

      <!-- 标题与说明 -->
      <h1
        class="uno-text-3xl md:uno-text-[48px] uno-text-center uno-font-Outfit uno-font-semibold uno-leading-[1.2] uno-text-[#011813]">
        {{ $t('pages.userCourseLessonComplete.title') }}</h1>
      <p class="uno-text-[16px] uno-text-[#4E5255] uno-font-Outfit uno-text-center uno-max-w-[520px] uno-mx-auto">
        {{ $t('pages.userCourseLessonComplete.desc', { current, courseName }) }}
      </p>

      <!-- 主按钮 -->
      <AppLink :to="'/user-course/chapters'" class="uno-w-full md:uno-w-[520px]">
        <PrimaryButton>
          {{ $t('pages.userCourseLessonComplete.cta') }}
        </PrimaryButton>
      </AppLink>

      <!-- 次链接 -->
      <AppLink :to="'/'"
        class="uno-text-[#4E5255] uno-font-Outfit uno-text-center hover:uno-text-[var(--ui-foreground)] uno-underline">
        {{ $t('pages.userCourseLessonComplete.toDashboard') }}</AppLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'


import PrimaryButton from '@/components/ui/PrimaryButton.vue'

const { t } = useI18n()
const current = ref(3)
const courseName = 'People Leadership vs. Management'

definePageMeta({
  title: () => 'seo.userCourse.lessonComplete.title',
  layoutShowPageTopIcons: false,
})

useSeoMeta({
  title: () => t('seo.userCourse.lessonComplete.title', { separator: '|' }),
  description: () => t('seo.userCourse.lessonComplete.description')
})
</script>

<style scoped></style>
