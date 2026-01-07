<template>
    <div class="page-container uno-py-6">
      <div class="course-header">
        <div class="course-nav">
          <AppLink :to="'/user-course/chapters'" class="back-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </AppLink>
          <div class="progress-percent">{{ progress }}%</div>
          <div class="question-count">{{ $t('pages.userCourseLearn.lessonCount', { current, total }) }}</div>
        </div>

        <div class="course-progress">
          <div class="progress-bar" :style="{ width: progress + '%' }"></div>
        </div>
      </div>

      <div class="uno-mt-4 uno-bg-white uno-rounded-[20px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8">
          <h1 class="uno-text-2xl md:uno-text-[32px] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2] uno-text-[#011813] uno-mb-8">{{ $t('pages.userCourseLearn.title') }}</h1>

          <div class="uno-space-y-6 uno-tracking-[0.8px]">
            <div class="uno-space-y-3">
              <p class="uno-text-base md:uno-text-lg uno-font-['Outfit'] uno-font-semibold uno-leading-normal">{{ $t('pages.userCourseLearn.objective.title') }}</p>
              <p class="uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.userCourseLearn.objective.body') }}</p>
            </div>
            <div class="uno-space-y-3">
              <p class="uno-text-base md:uno-text-lg uno-font-['Outfit'] uno-font-semibold uno-leading-normal">{{ $t('pages.userCourseLearn.intro.title') }}</p>
              <p class="uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.userCourseLearn.intro.body') }}</p>
            </div>
          </div>

          <div class="uno-mt-8">
            <AppLink :to="'/user-course/lesson'" class="uno-block">
              <UButton :ui="UButtonTheme"  class="uno-font-['Outfit']">{{ $t('pages.userCourseLearn.cta') }}</UButton>
            </AppLink>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'


import UButtonTheme from '~/theme/UButton'

const { t } = useI18n()
const current = ref(3)
const total = ref(10)
const progress = ref(0)

definePageMeta({
  title: () => 'seo.userCourse.lessonGuide.title'
})

useSeoMeta({
  title: () => t('seo.userCourse.lessonGuide.title'),
  description: () => t('seo.userCourse.lessonGuide.description')
})
</script>

<style scoped></style>
