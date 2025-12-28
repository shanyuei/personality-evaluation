<template>
  <section class="uno-mt-8">
    <h2
      class="uno-text-2xl md:uno-text-[32px] uno-text-[#011813] uno-font-['Outfit'] uno-font-bold uno-leading-normal uno-mt-12 uno-mb-6">
      {{ $t('pages.profile.continueLearning') }}</h2>
    <div class="uno-grid uno-gap-6 md:uno-grid-cols-3">
      <div v-for="(course, index) in courseCards" :key="course.id"
        class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)] uno-overflow-hidden">
        <div class="uno-p-4 md:uno-p-8 uno-space-y-3">
          <h3 class="uno-text-lg uno-font-bold uno-text-[var(--ui-foreground)] uno-mb-3">{{ course.title }}</h3>
          <p class="uno-text-sm uno-text-[var(--ui-muted-foreground)] uno-mb-4 line-clamp-3">{{ course.desc }}</p>
          <div class="uno-mt-2">
            <div class="uno-flex uno-items-center uno-justify-between">
              <div>
                <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">1/10 {{ $t('pages.profile.lessons')
                }}</span>
              </div>
            </div>
            <div class="uno-flex uno-items-center uno-justify-between uno-mt-3">
              <UButton :ui="UButtonTheme" size="sm" class="uno-w-[180px] md:uno-w-[120px]">{{
                $t('pages.profile.continueCourse.cta') }}</UButton>
              <div class="uno-relative uno-w-14 uno-h-14">
                <div class="uno-absolute uno-inset-0 uno-flex uno-items-center uno-justify-center">
                  <span class="uno-text-sm uno-font-medium uno-text-[var(--ui-primary)]">10%</span>
                </div>
                <svg class="uno-w-full uno-h-full" viewBox="0 0 100 100">
                  <circle class="uno-fill-none uno-stroke-[#E0E0E0] uno-stroke-w-6" cx="50" cy="50" r="45" />
                  <circle class="uno-fill-none uno-stroke-[#009D77] uno-stroke-w-6 uno-stroke-linecap-round" cx="50"
                    cy="50" r="45" stroke-dasharray="283" stroke-dashoffset="254.7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UButtonTheme from '~/theme/UButton'

defineProps<{
  courseCards: Array<{
    id: number
    title: string
    desc: string
    image: string
  }>
}>()
</script>
