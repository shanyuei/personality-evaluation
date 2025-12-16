<template>
    <div class="page-container uno-py-6">
      <!-- 顶部导航与进度 -->
      <div class="course-header">
        <div class="course-nav">
          <NuxtLink to="/user-course/chapters" class="back-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </NuxtLink>
          <div class="question-count">{{ $t('pages.userCourseLesson.lessonCount', { current, total }) }}</div>
          <div class="progress-percent">{{ progress }}%</div>
        </div>

        <div class="course-progress">
          <div class="progress-bar" :style="{ width: progress + '%' }"></div>
        </div>
      </div>

      <!-- 内容卡片 -->
      <div class="uno-mt-4 uno-w-full md:uno-w-[1000px] uno-mx-auto uno-bg-white uno-rounded-[20px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8">
          <h1 class="uno-text-[#011813] uno-text-2xl md:uno-text-[32px] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2] uno-mb-4">{{ $t('pages.userCourseLesson.title') }}</h1>

          <!-- Active Listening -->
          <section class="uno-space-y-2 uno-mb-6">
            <p class="uno-text-[#323233] uno-text-lg uno-font-['Outfit'] uno-font-semibold uno-leading-normal">{{ $t('pages.userCourseLesson.sections.activeListening.title') }}:</p>
            <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-font-bold uno-leading-normal">{{ $t('pages.userCourseLesson.sections.activeListening.descriptionTitle') }}:</p>
            <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.userCourseLesson.sections.activeListening.descriptionBody') }}</p>
            <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-font-bold uno-leading-normal">{{ $t('pages.userCourseLesson.sections.activeListening.applicationTitle') }}:</p>
            <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.userCourseLesson.sections.activeListening.applicationBody') }}</p>
          </section>

          <!-- Effective Speaking -->
          <section class="uno-space-y-2 uno-mb-6">
            <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-font-bold uno-leading-normal">{{ $t('pages.userCourseLesson.sections.effectiveSpeaking.title') }}:</p>
          </section>

          <!-- Key Takeaways -->
          <section>
            <p class="uno-text-[#323233] uno-text-2xl md:uno-text-[32px] uno-font-['Outfit'] uno-font-semibold uno-leading-normal uno-mb-3">{{ $t('pages.userCourseLesson.sections.takeaways.title') }}</p>
            <div class="uno-space-y-3">
              <div class="uno-flex uno-items-start uno-gap-3">
                <span class="uno-inline-flex uno-items-center uno-justify-center uno-w-6 uno-h-6 uno-aspect-square uno-rounded-full uno-bg-white uno-border-2 uno-border-[var(--ui-primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
                <span class="uno-w-full uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.userCourseLesson.sections.takeaways.i1') }}</span>
              </div>
              <div class="uno-flex uno-items-start uno-gap-3">
                <span class="uno-inline-flex uno-items-center uno-justify-center uno-w-6 uno-h-6 uno-aspect-square uno-rounded-full uno-bg-white uno-border-2 uno-border-[var(--ui-primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
                <span class="uno-w-full uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.userCourseLesson.sections.takeaways.i2') }}</span>
              </div>
              <div class="uno-flex uno-items-start uno-gap-3">
                <span class="uno-inline-flex uno-items-center uno-justify-center uno-w-6 uno-h-6 uno-aspect-square uno-rounded-full uno-bg-white uno-border-2 uno-border-[var(--ui-primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
                <span class="uno-w-full uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.userCourseLesson.sections.takeaways.i3') }}</span>
              </div>
            </div>
          </section>

          <!-- 底部按钮 -->
          <div class="uno-mt-8 uno-grid uno-grid-cols-1 md:uno-grid-cols-2 uno-gap-4">
            <NuxtLink to="/user-course/lesson-complete" class="uno-block">
              <UButton :ui="UButtonTheme" class="uno-w-full uno-font-['Outfit']">{{ $t('pages.userCourseLesson.ctaPrimary') }}</UButton>
            </NuxtLink>
            <UButton :ui="UButtonThemeDark" class="uno-font-['Outfit']">{{ $t('pages.userCourseLesson.ctaSecondary') }}</UButton>
          </div>
        </div>
      </div>
    </div>
  
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import UButtonTheme, { UButtonThemeDark } from '~/theme/UButton'
const current = ref(3)
const total = ref(10)
const progress = computed(() => Math.round((current.value / total.value) * 100))
</script>

<style scoped></style>
