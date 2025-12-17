<template>
  <div class="page-container uno-py-6 md:uno-py-8 uno-px-6 md:uno-px-10">
    <div class="uno-w-full md:uno-w-[520px] uno-mx-auto">
      <div class="uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-6 md:uno-gap-8">
        <div class="uno-w-14 md:uno-w-20 uno-h-14 md:uno-h-20 uno-rounded-full uno-bg-[var(--color-green-3)] uno-flex uno-items-center uno-justify-center">
          <NuxtImg
            src="/images/user-course/1.png"
            class="uno-w-full uno-h-full uno-object-cover"
            alt="Chapter complete icon"
          />
        </div>

        <h1 class="uno-text-[var(--ui-foreground)] uno-text-base md:uno-text-xl lg:uno-text-3xl uno-font-['Outfit'] uno-text-center uno-font-semibold uno-leading-[1.2]">{{ $t('pages.userCourseChapterComplete.title') }}</h1>
        <p class="uno-text-[12px] md:uno-text-sm uno-text-[var(--ui-muted-foreground)] uno-font-['Outfit'] uno-text-center uno-w-full uno-mx-auto uno-leading-relaxed">{{ $t('pages.userCourseChapterComplete.desc1', { courseName }) }}</p>
        <p class="uno-text-[12px] md:uno-text-sm uno-text-[var(--ui-muted-foreground)] uno-font-['Outfit'] uno-text-center uno-w-full uno-mx-auto uno-leading-relaxed">{{ $t('pages.userCourseChapterComplete.desc2') }}</p>

        <div class="uno-space-y-4 uno-mt-2 uno-w-full uno-mx-auto uno-px-2">
          <div class="uno-flex uno-items-start uno-gap-3">
            <span class="uno-inline-flex uno-items-center uno-justify-center uno-w-5 uno-h-5 md:uno-w-6 md:uno-h-6 uno-aspect-square uno-rounded-full uno-bg-white uno-border-2 uno-border-[var(--ui-primary)]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" class="md:uno-w-16 md:uno-h-16"><path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            <p class="uno-text-[var(--ui-muted-foreground)] uno-text-[12px] md:uno-text-sm uno-font-['Outfit'] uno-leading-relaxed uno-text-left"><span class="uno-text-[var(--ui-muted-foreground)] uno-text-[12px] md:uno-text-sm uno-font-['Outfit'] uno-font-bold uno-leading-relaxed">{{ $t('pages.userCourseChapterComplete.format.title') }}</span>: {{ $t('pages.userCourseChapterComplete.format.body') }}</p>
          </div>
          <div class="uno-flex uno-items-start uno-gap-3">
            <span class="uno-inline-flex uno-items-center uno-justify-center uno-w-5 uno-h-5 md:uno-w-6 md:uno-h-6 uno-aspect-square uno-rounded-full uno-bg-white uno-border-2 uno-border-[var(--ui-primary)]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" class="md:uno-w-16 md:uno-h-16"><path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            <p class="uno-text-[var(--ui-muted-foreground)] uno-text-[12px] md:uno-text-sm uno-font-['Outfit'] uno-leading-relaxed uno-text-left"><span class="uno-text-[var(--ui-muted-foreground)] uno-text-[12px] md:uno-text-sm uno-font-['Outfit'] uno-font-bold uno-leading-relaxed">{{ $t('pages.userCourseChapterComplete.scoring.title') }}</span>: {{ $t('pages.userCourseChapterComplete.scoring.body') }}</p>
          </div>
        </div>

        <NuxtLink to="/user-course/test" class="uno-w-full">
          <UButton :ui="UButtonTheme" class="uno-w-full uno-font-['Outfit']">{{ $t('pages.userCourseChapterComplete.cta') }}</UButton>
        </NuxtLink>
        <NuxtLink to="/user-course" class="uno-text-[var(--ui-muted-foreground)] uno-font-['Outfit'] uno-text-center hover:uno-text-[var(--ui-foreground)]">{{ $t('pages.userCourseChapterComplete.later') }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UButtonTheme from '~/theme/UButton'

const courseName = 'People Leadership vs. Management'
</script>

<style scoped></style>
