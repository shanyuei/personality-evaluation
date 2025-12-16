<template>
    <div class="page-container my-10">
      <div class="uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-8">
        <!-- 顶部圆形图标 -->
        <div class="uno-w-16 uno-h-16 md:uno-w-20 md:uno-h-20 uno-rounded-full uno-bg-[var(--color-green-3)] uno-flex uno-items-center uno-justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
            <rect x="4" y="5" width="16" height="14" rx="2" ry="2" fill="none" stroke="var(--ui-primary)" stroke-width="2"/>
            <line x1="8" y1="9" x2="16" y2="9" stroke="var(--ui-primary)" stroke-width="2"/>
            <line x1="8" y1="13" x2="14" y2="13" stroke="var(--ui-primary)" stroke-width="2"/>
          </svg>
        </div>

        <!-- 标题与说明 -->
        <h1 class="uno-text-3xl md:uno-text-5xl uno-text-center uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2] uno-text-[var(--ui-foreground)]">{{ $t('pages.userCourseLessonComplete.title') }}</h1>
        <p class="uno-text-sm md:uno-text-base uno-text-[var(--ui-muted-foreground)] uno-font-['Outfit'] uno-text-center uno-max-w-[520px] uno-mx-auto">
          {{ $t('pages.userCourseLessonComplete.desc', { current, courseName }) }}
        </p>

        <!-- 主按钮 -->
        <NuxtLink to="/user-course/chapters" class="uno-w-full md:uno-w-[520px]">
          <UButton :ui="UButtonTheme" class="uno-font-['Outfit']">{{ $t('pages.userCourseLessonComplete.cta') }}</UButton>
        </NuxtLink>

        <!-- 次链接 -->
        <NuxtLink to="/" class="uno-text-[var(--ui-muted-foreground)] uno-font-['Outfit'] uno-text-center hover:uno-text-[var(--ui-foreground)]">{{ $t('pages.userCourseLessonComplete.toDashboard') }}</NuxtLink>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UButtonTheme from '~/theme/UButton'
const current = ref(3)
const courseName = 'People Leadership vs. Management'
</script>

<style scoped></style>
