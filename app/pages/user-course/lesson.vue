<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-[var(--color-green-4)] uno-to-[var(--color-pink-4)] uno-py-6 uno-px-4 md:uno-px-10">
    <div class="uno-w-full md:uno-w-[1000px] uno-mx-auto">
      <!-- 顶部导航与进度 -->
      <div class="uno-flex uno-items-center uno-justify-between uno-text-[var(--ui-muted-foreground)] uno-mb-2">
        <NuxtLink to="/user-course/chapters" class="uno-inline-flex uno-items-center uno-gap-2 hover:uno-text-[var(--ui-foreground)]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </NuxtLink>
        <div class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.userCourseLesson.lessonCount', { current, total }) }}</div>
        <div class="uno-text-[#4E5255] uno-text-xs uno-font-['Outfit'] uno-leading-normal">{{ progress }}%</div>
      </div>

      <div class="uno-w-full uno-h-[6px] uno-rounded-full uno-bg-[var(--ui-input)]">
        <div class="uno-h-full uno-rounded-full uno-bg-[var(--ui-primary)]" :style="{ width: progress + '%' }"></div>
      </div>

      <!-- 内容卡片 -->
      <div class="uno-mt-4 uno-w-full md:uno-w-[1000px] uno-mx-auto uno-bg-white uno-rounded-[20px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8">
          <h1 class="uno-text-[#011813] uno-text-[32px] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2] uno-mb-4">{{ $t('pages.userCourseLesson.title') }}</h1>

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
            <p class="uno-text-[#323233] uno-text-[32px] uno-font-['Outfit'] uno-font-semibold uno-leading-normal uno-mb-3">{{ $t('pages.userCourseLesson.sections.takeaways.title') }}</p>
            <div class="uno-space-y-3">
              <div class="uno-flex uno-items-start uno-gap-3">
                <span class="uno-inline-flex uno-items-center uno-justify-center uno-w-6 uno-h-6 uno-aspect-square uno-rounded-full uno-bg-white uno-border-2 uno-border-[var(--ui-primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
                <span class="uno-w-[644px] uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.userCourseLesson.sections.takeaways.i1') }}</span>
              </div>
              <div class="uno-flex uno-items-start uno-gap-3">
                <span class="uno-inline-flex uno-items-center uno-justify-center uno-w-6 uno-h-6 uno-aspect-square uno-rounded-full uno-bg-white uno-border-2 uno-border-[var(--ui-primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
                <span class="uno-w-[644px] uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.userCourseLesson.sections.takeaways.i2') }}</span>
              </div>
              <div class="uno-flex uno-items-start uno-gap-3">
                <span class="uno-inline-flex uno-items-center uno-justify-center uno-w-6 uno-h-6 uno-aspect-square uno-rounded-full uno-bg-white uno-border-2 uno-border-[var(--ui-primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
                <span class="uno-w-[644px] uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.userCourseLesson.sections.takeaways.i3') }}</span>
              </div>
            </div>
          </section>

          <!-- 底部按钮 -->
          <div class="uno-mt-8 uno-grid uno-grid-cols-1 md:uno-grid-cols-2 uno-gap-4">
            <NuxtLink to="/user-course/lesson-complete" class="uno-block">
              <UButton class="uno-w-full uno-h-[48px] uno-rounded-[12px] uno-bg-[#011813] hover:uno-opacity-90 uno-text-[var(--ui-primary)] uno-text-lg uno-font-['Outfit'] uno-font-bold uno-leading-normal uno-flex uno-items-center uno-justify-center uno-text-center">{{ $t('pages.userCourseLesson.ctaPrimary') }}</UButton>
            </NuxtLink>
            <UButton class="uno-h-[48px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white uno-text-lg uno-font-['Outfit'] uno-font-bold uno-leading-normal uno-flex uno-items-center uno-justify-center uno-text-center">{{ $t('pages.userCourseLesson.ctaSecondary') }}</UButton>
          </div>
        </div>
      </div>
    </div>
  </main>
  
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const current = ref(3)
const total = ref(10)
const progress = computed(() => Math.round((current.value / total.value) * 100))
</script>

<style scoped></style>
