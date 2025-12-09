<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-[var(--color-green-4)] uno-to-[var(--color-pink-4)] uno-py-6 uno-px-4 md:uno-px-10">
    <div class="uno-max-w-[80%] uno-mx-auto">
      <div class="uno-flex uno-items-center uno-justify-between uno-text-[var(--ui-muted-foreground)] uno-mb-2">
        <NuxtLink to="/user-course/chapters" class="uno-inline-flex uno-items-center uno-gap-2 hover:uno-text-[var(--ui-foreground)]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </NuxtLink>
        <div class="uno-text-sm md:uno-text-base">{{ $t('pages.userCourseLearn.lessonCount', { current, total }) }}</div>
        <div class="uno-text-sm">{{ progress }}%</div>
      </div>

      <div class="uno-w-full uno-h-[6px] uno-rounded-full uno-bg-[var(--ui-input)]">
        <div class="uno-h-full uno-rounded-full uno-bg-[var(--ui-primary)]" :style="{ width: progress + '%' }"></div>
      </div>

      <div class="uno-mt-4 uno-w-full md:uno-w-[860px] uno-mx-auto uno-bg-white uno-rounded-[20px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8">
          <h1 class="uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-4">{{ $t('pages.userCourseLearn.title') }}</h1>

          <div class="uno-space-y-5">
            <div>
              <p class="uno-text-[var(--ui-foreground)] uno-font-semibold">{{ $t('pages.userCourseLearn.objective.title') }}</p>
              <p class="uno-text-sm md:uno-text-base uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.userCourseLearn.objective.body') }}</p>
            </div>
            <div>
              <p class="uno-text-[var(--ui-foreground)] uno-font-semibold">{{ $t('pages.userCourseLearn.intro.title') }}</p>
              <p class="uno-text-sm md:uno-text-base uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.userCourseLearn.intro.body') }}</p>
            </div>
          </div>

          <div class="uno-mt-8">
            <UButton class="uno-w-full uno-h-[48px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white uno-flex uno-items-center uno-justify-center uno-text-center">{{ $t('pages.userCourseLearn.cta') }}</UButton>
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

