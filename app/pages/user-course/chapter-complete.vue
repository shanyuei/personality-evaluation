<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-[var(--color-green-4)] uno-to-[var(--color-pink-4)] uno-py-20 uno-px-6 md:uno-px-10">
    <div class="uno-max-w-[80%] uno-mx-auto">
      <div class="uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-6">
        <div class="uno-w-16 uno-h-16 md:uno-w-20 md:uno-h-20 uno-rounded-full uno-bg-[var(--color-green-3)] uno-flex uno-items-center uno-justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
            <rect x="4" y="5" width="16" height="14" rx="2" ry="2" fill="none" stroke="var(--ui-primary)" stroke-width="2"/>
            <line x1="8" y1="9" x2="16" y2="9" stroke="var(--ui-primary)" stroke-width="2"/>
            <line x1="8" y1="13" x2="14" y2="13" stroke="var(--ui-primary)" stroke-width="2"/>
          </svg>
        </div>

        <h1 class="uno-text-3xl md:uno-text-4xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)]">{{ $t('pages.userCourseChapterComplete.title') }}</h1>
        <p class="uno-text-sm md:uno-text-base uno-text-[var(--ui-muted-foreground)] uno-max-w-[640px] uno-mx-auto">{{ $t('pages.userCourseChapterComplete.desc1', { courseName }) }}</p>
        <p class="uno-text-sm md:uno-text-base uno-text-[var(--ui-muted-foreground)] uno-max-w-[640px] uno-mx-auto">{{ $t('pages.userCourseChapterComplete.desc2') }}</p>

        <div class="uno-space-y-3 uno-mt-2 uno-max-w-[640px] uno-w-full">
          <div class="uno-flex uno-items-start uno-gap-3">
            <span class="uno-inline-flex uno-items-center uno-justify-center uno-w-6 uno-h-6 uno-aspect-square uno-rounded-full uno-bg-white uno-border-2 uno-border-[var(--ui-primary)]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            <p class="uno-text-sm md:uno-text-base uno-text-[var(--ui-muted-foreground)]"><span class="uno-text-[var(--ui-foreground)] uno-font-medium">{{ $t('pages.userCourseChapterComplete.format.title') }}</span>: {{ $t('pages.userCourseChapterComplete.format.body') }}</p>
          </div>
          <div class="uno-flex uno-items-start uno-gap-3">
            <span class="uno-inline-flex uno-items-center uno-justify-center uno-w-6 uno-h-6 uno-aspect-square uno-rounded-full uno-bg-white uno-border-2 uno-border-[var(--ui-primary)]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            <p class="uno-text-sm md:uno-text-base uno-text-[var(--ui-muted-foreground)]"><span class="uno-text-[var(--ui-foreground)] uno-font-medium">{{ $t('pages.userCourseChapterComplete.scoring.title') }}</span>: {{ $t('pages.userCourseChapterComplete.scoring.body') }}</p>
          </div>
        </div>

        <NuxtLink to="/user-course/test" class="uno-w-full md:uno-w-[520px]">
          <UButton class="uno-w-full uno-h-[48px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white uno-flex uno-items-center uno-justify-center uno-text-center">{{ $t('pages.userCourseChapterComplete.cta') }}</UButton>
        </NuxtLink>
        <NuxtLink to="/user-course" class="uno-text-[var(--ui-muted-foreground)] hover:uno-text-[var(--ui-foreground)]">{{ $t('pages.userCourseChapterComplete.later') }}</NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const courseName = 'People Leadership vs. Management'
</script>

<style scoped></style>
