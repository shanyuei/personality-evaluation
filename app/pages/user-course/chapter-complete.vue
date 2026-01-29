<template>
  <div class="page-container uno-py-6 md:uno-py-8 uno-px-6 md:uno-px-10">
    <div class="uno-w-full md:uno-w-[520px] uno-mx-auto">
      <div class="uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-4 md:uno-gap-4">
        <div
          class="uno-w-14 md:uno-w-20 uno-h-14 md:uno-h-20 uno-rounded-full uno-bg-[var(--color-green-3)] uno-flex uno-items-center uno-justify-center">
          <!-- <NuxtImg
            src="/images/user-course/1.png"
            class="uno-w-full uno-h-full uno-object-cover"
            alt="Chapter complete icon"
          /> -->
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

        <h1
          class="uno-text-[var(--ui-foreground)] uno-text-[48px] uno-font-['Outfit'] uno-text-center uno-font-semibold uno-leading-[1.2]">
          {{ $t('pages.userCourseChapterComplete.title') }}</h1>
        <p
          class="uno-text-[16px] uno-text-[var(--ui-muted-foreground)] uno-font-['Outfit'] uno-text-center uno-w-full uno-mx-auto uno-leading-relaxed uno-mb-2">
          {{ $t('pages.userCourseChapterComplete.desc1', { courseName }) }}</p>
        <p
          class="uno-text-[16px] uno-text-[var(--ui-muted-foreground)] uno-font-['Outfit'] uno-text-center uno-w-full uno-mx-auto uno-leading-relaxed">
          {{ $t('pages.userCourseChapterComplete.desc2') }}</p>

        <div class="uno-space-y-2 uno-mt-2 uno-w-full uno-mx-auto uno-px-2">
          <div class="uno-flex uno-items-start uno-gap-3">
            <span
              class="uno-inline-flex uno-items-center uno-justify-center uno-w-5 uno-h-5 md:uno-w-6 md:uno-h-6 uno-aspect-square uno-rounded-full uno-bg-white uno-border-2 uno-border-[var(--ui-primary)]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"
                class="md:uno-w-16 md:uno-h-16">
                <path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" fill="none" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </span>
            <p
              class="uno-text-[var(--ui-muted-foreground)] uno-text-[12px] md:uno-text-sm uno-font-['Outfit'] uno-leading-relaxed uno-text-left">
              <span
                class="uno-text-[var(--ui-muted-foreground)] uno-text-[12px] md:uno-text-sm uno-font-['Outfit'] uno-font-bold uno-leading-relaxed">{{
                  $t('pages.userCourseChapterComplete.format.title') }}</span>: {{
                  $t('pages.userCourseChapterComplete.format.body') }}
            </p>
          </div>
          <div class="uno-flex uno-items-start uno-gap-3">
            <span
              class="uno-inline-flex uno-items-center uno-justify-center uno-w-5 uno-h-5 md:uno-w-6 md:uno-h-6 uno-aspect-square uno-rounded-full uno-bg-white uno-border-2 uno-border-[var(--ui-primary)]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"
                class="md:uno-w-16 md:uno-h-16">
                <path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" fill="none" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </span>
            <p
              class="uno-text-[var(--ui-muted-foreground)] uno-text-[12px] md:uno-text-sm uno-font-['Outfit'] uno-leading-relaxed uno-text-left">
              <span
                class="uno-text-[var(--ui-muted-foreground)] uno-text-[12px] md:uno-text-sm uno-font-['Outfit'] uno-font-bold uno-leading-relaxed">{{
                  $t('pages.userCourseChapterComplete.scoring.title') }}</span>: {{
                  $t('pages.userCourseChapterComplete.scoring.body') }}
            </p>
          </div>
        </div>

        <AppLink :to="'/user-course/test'" class="uno-w-full">
          <PrimaryButton class="uno-w-full">
            {{ $t('pages.userCourseChapterComplete.cta') }}
          </PrimaryButton>
        </AppLink>
        <AppLink :to="'/user-course'"
          class="uno-text-[var(--ui-muted-foreground)] uno-font-['Outfit'] uno-text-center hover:uno-text-[var(--ui-foreground)]">
          {{ $t('pages.userCourseChapterComplete.later') }}</AppLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


import PrimaryButton from '@/components/ui/PrimaryButton.vue'

const { t } = useI18n()
const courseName = 'People Leadership vs. Management'

definePageMeta({
  title: () => 'seo.userCourse.chapterComplete.title',
  layoutShowPageTopIcons: false,
})

useSeoMeta({
  title: () => t('seo.userCourse.chapterComplete.title'),
  description: () => t('seo.userCourse.chapterComplete.description')
})
</script>

<style scoped></style>
