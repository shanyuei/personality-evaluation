<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-[var(--color-green-4)] uno-to-[var(--color-pink-4)] uno-py-10 uno-px-6 md:uno-px-12">
    <div class="uno-max-w-[80%] uno-mx-auto">
      <div class="uno-w-full md:uno-w-[720px] uno-mx-auto uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-w-full uno-h-[220px] md:uno-h-[260px] uno-overflow-hidden uno-rounded-t-[24px]">
          <NuxtImg src="/images/home/1.png" alt="cover" class="uno-w-full uno-h-full uno-object-cover" />
        </div>
        <div class="uno-p-6 md:uno-p-8">
          <h1 class="uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-bold uno-text-[var(--ui-foreground)] uno-mb-3">{{ $t('pages.userCourseChapters.title') }}</h1>
          <p class="uno-text-sm md:uno-text-base uno-text-[var(--ui-muted-foreground)] uno-mb-6">{{ $t('pages.userCourseChapters.description') }}</p>

          <div class="uno-mb-4">
            <p class="uno-text-[var(--ui-foreground)] uno-font-semibold">{{ $t('pages.userCourseChapters.coverQuestion') }}</p>
          </div>

          <div class="uno-space-y-3">
            <div v-for="(item, idx) in chapters" :key="idx" class="uno-flex uno-items-center uno-gap-4">
              <span class="uno-inline-flex uno-items-center uno-justify-center uno-w-8 uno-h-8 uno-rounded-full uno-bg-[var(--ui-input)] uno-text-[var(--ui-foreground)] uno-text-sm uno-font-medium">{{ idx + 1 }}</span>
              <span class="uno-text-[var(--ui-foreground)]">{{ item }}</span>
            </div>
          </div>

          <div class="uno-mt-8">
            <NuxtLink to="/user-course/lesson-guide" class="uno-block">
              <UButton class="uno-w-full uno-h-[48px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white uno-flex uno-items-center uno-justify-center uno-text-center">{{ $t('pages.userCourseChapters.cta') }}</UButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
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
