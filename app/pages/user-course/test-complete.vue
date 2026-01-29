<template>
  <main class="page-container uno-py-6">
      <div class="uno-w-full uno-max-w-860px  uno-mx-auto uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)]">
        <div class="uno-p-8 md:uno-p-10 uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-6">
          <div class="uno-w-96px uno-h-96px uno-aspect-square uno-rounded-full uno-border-2 uno-border-[var(--color-pink-2)] uno-flex uno-items-center uno-justify-center uno-bg-[#F9F0F4]">
            <div class="uno-flex uno-items-center uno-flex-col">
              <span class="uno-text-[var(--color-pink-1)] uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-semibold">{{ score }}/{{ total }}</span>
              <span class="uno-text-[var(--color-pink-1)] uno-text-sm uno-font-['Outfit'] uno-font-normal">points</span>
            </div>
          </div>

          <h1 class="uno-text-2xl md:uno-text-[32px] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2] uno-text-[#011813]">{{ courseName }}</h1>
          <p class="uno-w-full uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.userCourseTestComplete.description') }}</p>

          <AppLink :is-link="false" class="uno-w-full md:uno-w-[520px]">
            <UButton :ui="UButtonTheme"  class="uno-font-['Outfit']">{{ $t('pages.userCourseTestComplete.cta') }}</UButton>
          </AppLink>
        </div>
    </div>
  </main>
</template>

<script setup lang="ts">


import UButtonTheme from '~/theme/UButton'

const { t } = useI18n()
const score = 0
const total = 10
const courseName = 'People Leadership vs. Management'

definePageMeta({
  title: () => 'seo.userCourse.testComplete.title',
      layoutShowPageTopIcons: false,
})

useSeoMeta({
  title: () => t('seo.userCourse.testComplete.title'),
  description: () => t('seo.userCourse.testComplete.description')
})
</script>

<style scoped></style>
