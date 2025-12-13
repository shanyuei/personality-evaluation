<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-[var(--color-green-4)] uno-to-[var(--color-pink-4)] uno-py-20 uno-px-6 md:uno-px-10">
    <div class="uno-max-w-[80%] uno-mx-auto">
      <div class="uno-w-full md:uno-w-[860px] uno-mx-auto uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-8 md:uno-p-10 uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-6">
          <div class="uno-w-20 uno-h-20 uno-aspect-square uno-rounded-full uno-border-2 uno-border-[var(--color-pink-2)] uno-flex uno-items-center uno-justify-center">
            <div class="uno-flex uno-items-center uno-flex-col">
              <span class="uno-text-[var(--color-pink-1)] uno-text-xl uno-font-['Outfit'] uno-font-semibold">{{ $t('pages.userCourseTestComplete.scoreLabel', { score, total }) }}</span>
            </div>
          </div>

          <h1 class="uno-text-[32px] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2] uno-text-[#011813]">{{ courseName }}</h1>
          <p class="uno-w-[672px] uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.userCourseTestComplete.description') }}</p>

          <NuxtLink to="/user-course" class="uno-w-full md:uno-w-[520px]">
            <UButton class="uno-w-full uno-h-[48px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white uno-text-lg uno-font-['Outfit'] uno-font-bold uno-leading-normal uno-flex uno-items-center uno-justify-center uno-text-center">{{ $t('pages.userCourseTestComplete.cta') }}</UButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const score = 0
const total = 10
const courseName = 'People Leadership vs. Management'
</script>

<style scoped></style>
