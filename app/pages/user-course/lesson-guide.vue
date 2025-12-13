<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-[var(--color-green-4)] uno-to-[var(--color-pink-4)] uno-py-6 uno-px-4 md:uno-px-10">
    <div class="uno-w-full md:uno-w-[860px] uno-mx-auto">
      <div class="uno-flex uno-items-center uno-justify-between uno-text-[var(--ui-muted-foreground)] uno-mb-2">
        <NuxtLink to="/user-course/chapters" class="uno-inline-flex uno-items-center uno-gap-2 hover:uno-text-[var(--ui-foreground)]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </NuxtLink>
        <div class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.userCourseLearn.lessonCount', { current, total }) }}</div>
        <div class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ progress }}%</div>
      </div>

      <div class="uno-w-full uno-h-[6px] uno-rounded-full uno-bg-[var(--ui-input)]">
        <div class="uno-h-full uno-rounded-full uno-bg-[var(--ui-primary)]" :style="{ width: progress + '%' }"></div>
      </div>

      <div class="uno-mt-4 uno-w-full md:uno-w-[860px] uno-mx-auto uno-bg-white uno-rounded-[20px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8">
          <h1 class="uno-text-[32px] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2] uno-text-[#011813] uno-mb-8">{{ $t('pages.userCourseLearn.title') }}</h1>

          <div class="uno-space-y-6 uno-tracking-[0.8px]">
            <div class="uno-space-y-3">
              <p class="uno-text-[#323233] uno-text-lg uno-font-['Outfit'] uno-font-semibold uno-leading-normal">{{ $t('pages.userCourseLearn.objective.title') }}</p>
              <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.userCourseLearn.objective.body') }}</p>
            </div>
            <div class="uno-space-y-3">
              <p class="uno-text-[#323233] uno-text-lg uno-font-['Outfit'] uno-font-semibold uno-leading-normal">{{ $t('pages.userCourseLearn.intro.title') }}</p>
              <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.userCourseLearn.intro.body') }}</p>
            </div>
          </div>

          <div class="uno-mt-8">
            <NuxtLink to="/user-course/lesson" class="uno-block">
              <UButton class="uno-w-full uno-h-[48px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white uno-text-lg uno-font-['Outfit'] uno-font-bold uno-leading-normal uno-flex uno-items-center uno-justify-center uno-text-center">{{ $t('pages.userCourseLearn.cta') }}</UButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const current = ref(3)
const total = ref(10)
const progress = ref(0)
</script>

<style scoped></style>
