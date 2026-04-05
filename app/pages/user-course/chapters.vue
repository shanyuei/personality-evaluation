<template>
  <div class="page-container my-10">
    <div
      class="uno-w-full md:uno-w-[720px] uno-mx-auto uno-bg-white uno-rounded-[24px] uno-shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
      <div class="uno-w-full uno-h-[220px] md:uno-h-[260px] uno-overflow-hidden uno-rounded-t-[24px]">
        <NuxtImg :src="cover" alt="cover" class="uno-w-full uno-h-full uno-object-cover" />
      </div>
      <div class="uno-p-6 md:uno-p-8">
        <h1 class="uno-text-[32px] uno-font-Outfit uno-font-600 uno-text-[var(--ui-foreground)] uno-mb-3">
          {{ courseTitle }}</h1>
        <p class="uno-text-sm md:uno-text-base uno-text-[var(--ui-muted-foreground)] uno-mb-6">{{
          courseDescription }}</p>

        <div class="uno-mb-4">
          <p class="uno-text-[var(--ui-foreground)] uno-font-semibold">{{ $t('pages.userCourseChapters.coverQuestion')
          }}</p>
        </div>

        <div class="uno-space-y-3 uno-mb-8">
          <div v-for="(item, idx) in chapters" :key="idx" class="uno-flex uno-items-center uno-gap-4">
            <span
              class="uno-inline-flex uno-items-center uno-justify-center uno-w-8 uno-h-8 uno-aspect-square uno-rounded-full uno-bg-[var(--ui-input)] uno-text-[#4E5255] uno-text-sm uno-font-Outfit uno-font-medium uno-leading-normal">{{
                idx + 1 }}</span>
            <span class="uno-text-[#4E5255] uno-font-Outfit uno-leading-normal">{{ item }}</span>
          </div>
        </div>

        <AppLink :to="lessonGuideTo" class="uno-block" @click.prevent="onStartCourse">
          <PrimaryButton class="uno-font-Outfit" :disabled="starting">{{ $t('pages.userCourseChapters.cta') }}
          </PrimaryButton>
        </AppLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import PrimaryButton from '~/components/ui/PrimaryButton.vue'
import { getCourseDetail, startCourse } from '~/api/courses'
import type { CourseDetailData } from '~/types/Course'
import { useCourseChaptersStore } from '~/stores/modules/course-chapters'



const { t } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const courseChaptersStore = useCourseChaptersStore()
courseChaptersStore.clear();

// 设置页面SEO元数据
definePageMeta({
  title: () => 'seo.userCourse.chapters.title',
  layoutShowPageTopIcons: false
})

useSeoMeta({
  title: () => t('seo.userCourse.chapters.title'),
  description: () => t('seo.userCourse.chapters.description')
})

const getQueryString = (v: unknown) => {
  if (Array.isArray(v)) return String(v[0] ?? '')
  return v == null ? '' : String(v)
}

const courseId = computed(() => getQueryString(route.query.course_id))

const { data: detailReq } = courseId.value
  ? await getCourseDetail({ id: courseId.value })
  : { data: ref(null) }


const course = computed<CourseDetailData | null>(() => {
  return (detailReq.value?.data as CourseDetailData | undefined) || null
})
const cover = computed(() => course.value?.cover_img || '/images/user-course/2.png')
const courseTitle = computed(() => course.value?.title || (t('pages.userCourseChapters.title') as string))
const courseDescription = computed(() => course.value?.summary || (t('pages.userCourseChapters.description') as string))

const chapters = computed<string[]>(() => {
  const raw = course.value?.lesson_titles || []
  if (!Array.isArray(raw) || raw.length === 0) {
    return [
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
  }
  return raw.map((x) => String(x ?? '').trim()).filter(Boolean)
})

const lessonGuideTo = computed(() => {
  if (!courseId.value) return '/user-course/lesson-guide'
  return `/user-course/lesson-guide?course_id=${courseId.value}`
})

const starting = ref(false)
const onStartCourse = async () => {
  if (starting.value) return
  starting.value = true
  try {
    if (courseId.value && course.value.status === 1) {
      const { error } = await startCourse({ course_id: Number(courseId.value) })
      if (error.value) return
    }
    if (course.value) {
      courseChaptersStore.setCourse(course.value)
    }
    navigateTo({
      path: lessonGuideTo.value,
      query: {
        course_id: courseId.value,
        position: course.value?.lesson_progress ? String(Math.min(course.value.lesson_progress + 1, course.value?.lesson_count || 1)) : '1',
        total: course.value?.lesson_count ? String(course.value.lesson_count) : '10',
      }
    })
    courseChaptersStore.setProgressContext({
      course_id: String(courseId.value || ''),
      position: course.value?.lesson_progress ? String(Math.min(course.value.lesson_progress + 1, course.value?.lesson_count || 1)) : '1',
      total: course.value?.lesson_count ? String(course.value.lesson_count) : '10',
    })
  } finally {
    starting.value = false
  }
}
</script>

<style scoped></style>
