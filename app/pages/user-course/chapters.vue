<template>
  <div class="page-container my-10">
    <div
      class="uno-w-full md:uno-w-[720px] uno-mx-auto uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
      <div class="uno-w-full uno-h-[220px] md:uno-h-[260px] uno-overflow-hidden uno-rounded-t-[24px]">
        <NuxtImg src="/images/home/1.png" alt="cover" class="uno-w-full uno-h-full uno-object-cover" />
      </div>
      <div class="uno-p-6 md:uno-p-8">
        <h1
          class="uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-bold uno-text-[var(--ui-foreground)] uno-mb-3">
          {{ $t('pages.userCourseChapters.title') }}</h1>
        <p class="uno-text-sm md:uno-text-base uno-text-[var(--ui-muted-foreground)] uno-mb-6">{{
          $t('pages.userCourseChapters.description') }}</p>

        <div class="uno-mb-4">
          <p class="uno-text-[var(--ui-foreground)] uno-font-semibold">{{ $t('pages.userCourseChapters.coverQuestion')
            }}</p>
        </div>

        <div class="uno-space-y-3 uno-mb-8">
          <div v-for="(item, idx) in chapters" :key="idx" class="uno-flex uno-items-center uno-gap-4">
            <span
              class="uno-inline-flex uno-items-center uno-justify-center uno-w-8 uno-h-8 uno-aspect-square uno-rounded-full uno-bg-[var(--ui-input)] uno-text-[var(--ui-muted-foreground)] uno-text-sm uno-font-['Outfit'] uno-font-medium uno-leading-normal">{{
              idx + 1 }}</span>
            <span class="uno-text-[var(--ui-muted-foreground)] uno-font-['Outfit'] uno-leading-normal">{{ item }}</span>
          </div>
        </div>

        <AppLink :to="'/user-course/lesson-guide'" class="uno-block">
          <UButton :ui="UButtonTheme" class="uno-font-['Outfit']">{{ $t('pages.userCourseChapters.cta') }}</UButton>
        </AppLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UButtonTheme from '~/theme/UButton'



const { t } = useI18n()

// 设置页面SEO元数据
definePageMeta({
  title: () => 'seo.userCourse.chapters.title'
})

useSeoMeta({
  title: () => t('seo.userCourse.chapters.title'),
  description: () => t('seo.userCourse.chapters.description')
})

const chapters = [
  'Foundations of Leadership',
  'Emotional Intelligence in Leadership',
  'Communication Skills for Leaders',
  'Building and Leading Teams',
  'Foundations of Leadership',
  'Conflict Resolution Strategies',
  'Ethical Leadership and Corporate Responsibility',
  'Change Management',
  'Strategic Planning and Decision Making',
  'Developing Your Leadership Style'
]
</script>

<style scoped></style>
