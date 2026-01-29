<template>
  <div class="page-container my-10">
    <div class="uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-8">
      <!-- 顶部圆形图标 -->
      <div
        class="uno-w-16 uno-h-16 md:uno-w-20 md:uno-h-20 uno-rounded-full uno-bg-[var(--color-green-3)] uno-flex uno-items-center uno-justify-center">
        <NuxtImg src="/images/user-course/1.png" class="uno-w-full uno-h-full uno-object-cover"
          alt="Lesson complete icon" />
      </div>

      <!-- 标题与说明 -->
      <h1
        class="uno-text-[48px] uno-text-center uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2] uno-text-[var(--ui-foreground)]">
        {{ $t('pages.userCourseLessonComplete.title') }}</h1>
      <p
        class="uno-text-[16px] uno-text-[var(--ui-muted-foreground)] uno-font-['Outfit'] uno-text-center uno-max-w-[520px] uno-mx-auto">
        {{ $t('pages.userCourseLessonComplete.desc', { current, courseName }) }}
      </p>

      <!-- 主按钮 -->
      <AppLink :to="'/user-course/chapters'" class="uno-w-full md:uno-w-[520px]">
        <PrimaryButton>
          {{ $t('pages.userCourseLessonComplete.cta') }}
        </PrimaryButton>
      </AppLink>

      <!-- 次链接 -->
      <AppLink :to="'/'"
        class="uno-text-[var(--ui-muted-foreground)] uno-font-['Outfit'] uno-text-center hover:uno-text-[var(--ui-foreground)]">
        {{ $t('pages.userCourseLessonComplete.toDashboard') }}</AppLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'


import PrimaryButton from '@/components/ui/PrimaryButton.vue'

const { t } = useI18n()
const current = ref(3)
const courseName = 'People Leadership vs. Management'

definePageMeta({
  title: () => 'seo.userCourse.lessonComplete.title',
  layoutShowPageTopIcons: false,
})

useSeoMeta({
  title: () => t('seo.userCourse.lessonComplete.title'),
  description: () => t('seo.userCourse.lessonComplete.description')
})
</script>

<style scoped></style>
