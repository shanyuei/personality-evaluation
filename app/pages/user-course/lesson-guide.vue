<template>
  <div class="page-container uno-py-6">
    <!-- 顶部导航与进度 -->
    <div class="course-header uno-mx-auto">
      <div class="course-nav">
        <AppLink :is-link="false" class="back-link" @click="onBack">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </AppLink>
        <div class="progress-percent">{{ $t('pages.userCourseLearn.lessonCount', { current, total }) }}</div>
        <div class="question-count">{{ progress }}%</div>
      </div>

      <div class="course-progress">
        <div class="progress-bar" :style="{ width: progress + '%' }" />
      </div>
    </div>

    <!-- 内容卡片 -->
    <div
      class="uno-mt-4 uno-w-full lg:uno-w-[860px] uno-mx-auto uno-bg-white uno-rounded-[20px] ">
      <div class="uno-p-6 md:uno-p-8">
        <h1
          class="uno-text-2xl md:uno-text-[32px] uno-font-Outfit uno-font-semibold uno-leading-[1.2] uno-text-[#011813] uno-mb-8">
          {{ course.lesson_titles[Number(positionValue) - 1] }}</h1>

        <div class="uno-space-y-6 uno-tracking-[0.8px]">
          <div v-for="content in lesson.content" :key="content.title" class="uno-space-y-3">
            <p class="uno-text-[18px] uno-font-Outfit uno-font-semibold uno-leading-[150%] uno-tracking-[0%]">
              {{
                content.title
              }}</p>
            <p class="uno-text-sm uno-font-Outfit uno-font-normal uno-leading-[150%] uno-tracking-[0%] uno-vertical-align-middle"
              v-html="content.text" />
          </div>

        </div>

        <div class="uno-mt-8 uno-grid uno-grid-cols-1 md:uno-grid-cols-2 uno-gap-4">
          <AppLink v-if="!isFirst" :is-link="false" class="uno-block" @click="onPrevStep">
            <OutlineButton>
              {{ $t('pages.userCourseLesson.ctaPrimary') }}
            </OutlineButton>
          </AppLink>
          <AppLink :is-link="false" class="uno-block" :class="isFirst ? 'md:uno-col-span-2' : ''"
            @click="onPrimaryAction">
            <PrimaryButton>
              {{ isLast ? $t('common.finish') : $t('pages.userCourseLesson.ctaSecondary') }}
            </PrimaryButton>
          </AppLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getCourseLessons, getNextLesson } from '@/api/courses'

import PrimaryButton from '@/components/ui/PrimaryButton.vue'
import OutlineButton from '@/components/ui/OutlineButton.vue'
import { useCourseChaptersStore } from '~/stores/modules/course-chapters'
import { storeToRefs } from 'pinia'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const courseChaptersStore = useCourseChaptersStore()

const { course } = storeToRefs(courseChaptersStore)

const getQueryString = (v: unknown) => {
  if (Array.isArray(v)) return String(v[0] ?? '')
  return v == null ? '' : String(v)
}

const courseId = computed(() => getQueryString(route.query.course_id))
const position = computed(() => getQueryString(route.query.position))
const positionValue = computed(() => position.value || '1')
const total = computed(() => {
  const raw = Number(getQueryString(route.query.total))
  return Number.isFinite(raw) && raw > 0 ? raw : 10
})

const { data, refresh } = getCourseLessons({
  course_id: courseId as any,
  position: positionValue as any,
} as any)

const lesson = computed(() => data.value?.data ?? { content: [] })
const current = computed(() => {
  const raw = Number(positionValue.value)
  return Number.isFinite(raw) && raw > 0 ? raw : 1
})
const progress = computed(() => Math.round((current.value / total.value) * 100))

const isFirst = computed(() => current.value <= 1)
const isLast = computed(() => current.value >= total.value)

const onBack = async () => {
  if (import.meta.client && window.history.length > 1) {
    router.back()
    return
  }
  const cid = courseId.value || courseChaptersStore.courseId
  await navigateTo({
    path: '/user-course/chapters',
    query: cid ? { course_id: cid } : undefined,
  })
}

const onPrevStep = async () => {
  if (!courseId.value) return
  if (isFirst.value) {
    await onBack()
    return
  }
  const prev = Math.max(current.value - 1, 1)
  courseChaptersStore.setProgressContext({
    course_id: courseId.value,
    position: String(prev),
    total: String(total.value),
  })
  await navigateTo({
    path: route.path,
    query: {
      ...route.query,
      course_id: courseId.value,
      position: String(prev),
      total: String(total.value),
    }
  }, { replace: true })
  await refresh()
}



const onPrimaryAction = async () => {
  if (isLast.value) {
    await navigateTo({
      path: '/user-course/chapter-complete',
      query: {
        course_id: courseId.value,
      }
    })
    return
  }
  const { error } = await getNextLesson({ course_id: Number(courseId.value), position: current.value })
  if (error.value) return
  await navigateTo({
    path: '/user-course/lesson-complete',
    query: {
      course_id: courseId.value,
      position: positionValue.value,
      total: String(total.value),
    }
  })
}

definePageMeta({
  title: () => 'seo.userCourse.lessonGuide.title',
  layoutShowPageTopIcons: false,
})

useSeoMeta({
  title: () => t('seo.userCourse.lessonGuide.title'),
  description: () => t('seo.userCourse.lessonGuide.description')
})
</script>

<style scoped></style>
