<template>
    <main class="uno-pt-64px">
        <!-- <NuxtLink :to="{
      name: 'test'
    }">111</NuxtLink> -->
        <section class="uno-pt-0 uno-pb-10 md:uno-py-10 page-container ">
            <div class="uno-flex uno-justify-start uno-items-center uno-flex-col uno-gap-[15px]">
                <div class="uno-w-full ">
                    <p class="uno-text-[var(--ui-muted-foreground)] uno-font-Outfit uno-font-medium">{{
                        $t('pages.course.recommendedForYou') }}</p>
                </div>
                <div
                    class="uno-w-full uno-flex uno-justify-between uno-items-start md:uno-items-stretch uno-flex-col lg:uno-flex-row uno-gap-6 lg:uno-gap-[56px] uno-p-6 lg:uno-p-[32px] uno-bg-white uno-rounded-3xl uno-shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]">
                    <div
                        class="uno-flex uno-flex-col  uno-gap-6  uno-w-full lg:uno-w-642px uno-h-auto lg:uno-h-270px">
                        <div class=" uno-flex uno-flex-col uno-gap-4">
                            <p
                                class="uno-text-[var(--ui-foreground)] uno-text-2xl md:uno-text-5xl uno-font-Outfit uno-font-semibold uno-leading-[1.2]">
                                {{ recommended.title }}</p>
                            <p class="uno-text-[var(--ui-muted-foreground)] uno-text-sm uno-font-Outfit">{{
                                recommended.description }}</p>
                        </div>
                        <div class="uno-flex uno-flex-row uno-gap-6 uno-mt-auto">
                            <span class="uno-text-[var(--ui-foreground)] uno-font-Outfit uno-font-medium">{{
                                recommended.lessons }} {{ $t('pages.course.lessons') }}</span>
                            <span class="uno-text-[var(--ui-foreground)] uno-font-Outfit uno-font-medium">{{
                                recommended.duration }}</span>
                            <span class="uno-text-[var(--ui-foreground)] uno-font-Outfit uno-font-medium">{{
                                $t('pages.course.certificate') }}</span>
                        </div>
                        <div
                            class="uno-flex uno-items-center uno-flex-row uno-flex-wrap md:uno-flex-nowrap uno-gap-4 md:uno-gap-6 uno-mt-2">
                            <AppArrowButton
                                class="uno-h-[48px] md:uno-h-[56px] uno-gap-3 uno-py-1.5 uno-pr-1.5 uno-pl-[16px] md:uno-pl-[20px] uno-font-Outfit uno-font-medium"
                                hover-class="" :icon-size="$device.isMobile ? 32 : 40" :to="recommendedCourseTo">
                                {{ $t('common.getStarted') }}
                            </AppArrowButton>
                            <div
                                class="uno-flex uno-items-center uno-flex-row uno-gap-1 md:uno-gap-2 uno-rounded-xl  uno-mt-3 md:uno-mt-0">
                                <div class="uno-flex uno-items-center uno-flex-row">
                                    <div v-for="(a, idx) in recommended.avatars" :key="idx"
                                        :class="['uno-w-[20px] uno-h-[20px] md:uno-w-[24px] md:uno-h-[24px] uno-bg-white uno-border-solid uno-border-white uno-border uno-rounded-full uno-overflow-hidden', idx > 0 ? 'uno--ml-1 md:uno--ml-2' : '']">
                                        <NuxtImg :src="a" alt="avatar" class="uno-w-full uno-h-full uno-object-cover" />
                                    </div>
                                </div>
                                <p
                                    class="uno-text-[var(--ui-muted-foreground)] uno-text-[12px] md:uno-text-[12px] uno-font-Outfit uno-text-center md:uno-text-left">
                                    3067 people already finished it</p>
                            </div>
                        </div>
                    </div>
                    <NuxtImg src="/images/courses/1.png" alt="image" width="425" height="270" class="md:uno-w-full md:uno-h-270px uno-rounded-[16px] lg:uno-w-425px lg:uno-h-270px uno-object-cover uno-flex-shrink-0" />
                </div>
            </div>
        </section>


        <section class="uno-pt-[32px] uno-pb-[120px] uno-bg-[var(--color-gray-9)]">
            <div class="uno-mx-auto page-container ">
                <p class="uno-text-[var(--ui-muted-foreground)] uno-text-xl uno-font-Outfit uno-font-medium">{{
                    $t('pages.course.allCourses') }}</p>

                <div class="uno-mt-4">
                    <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-2 uno-gap-[40px_24px]">
                        <CourseCard v-for="course in sortedCourses" :key="course.id" :course="course" />
                    </div>
                </div>
            </div>
        </section>
    </main>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import { getCourseList } from '~/api/courses'
import type { CourseSummary } from '~/types/Course'

const { t } = useI18n()

definePageMeta({
    title: () => 'seo.courses.title',
    layoutShowPageTopIcons: false
})

useSeoMeta({
    title: () => t('seo.courses.title') as string,
    description: () => t('seo.courses.description') as string
})

const defaultRecommended = {
    title: 'Budgeting',
    description: 'Budgeting is a foundational aspect of financial planning, bboth for individuals and organizations. In this lesson, we will explore the basics of budgeting, its role in setting finarcial goals, and how it helps in managing income and expenses effectively',
    lessons: 10,
    duration: '2 weeks',
    certificate: true,
    image: '/images/home/1.png',
    avatars: ['/images/home/8.png', '/images/home/11.png', '/images/about/3.png']
}

type Course = {
    id: number | string
    title: string
    description: string
    image: string
    duration?: string
    progress?: string
    resultLabel?: string
    points?: number
    percent?: number
    completedLessons?: number
    ctaTheme: 'dark' | 'green'
    instructor?: { name: string, avatar: string }
    lessons?: number
    certificate?: boolean
    avatars?: string[]
    finishedText?: string
    footerType: 1 | 2 | 3 | 4
}

const fallbackCourses: Course[] = [
    {
        id: 1,
        title: 'People Leadership vs. Management',
        description: 'Learn the difference between leadership and management to inspire teams and drive outcomes.',
        image: '/images/courses/1.png',
        lessons: 10,
        duration: '2 weeks',
        certificate: true,
        avatars: ['/images/home/8.png', '/images/home/11.png', '/images/about/3.png'],
        finishedText: '3067 people already finished it',
        ctaTheme: 'dark',
        footerType: 4,
    },
]

const { data: courseListRes } = await getCourseList()

const toCourseCardModel = (item: CourseSummary, index: number): Course => {
    const id = item.id ?? (index + 1)
    const title = item.title || `Course ${index + 1}`
    const description = item.summary || item.description || ''
    const image = item.cover_img || item.cover || '/images/courses/1.png'
    const duration = item.duration
    const lessons = item.lesson_count ?? item.lessons
    const certificate = item.certificate
    return {
        id,
        title,
        description,
        image,
        duration,
        lessons,
        certificate,
        percent: typeof item.lesson_progress === 'number' && typeof lessons === 'number' && lessons > 0
            ? Math.round((item.lesson_progress / lessons) * 100)
            : (typeof item.lesson_progress === 'number' ? item.lesson_progress : undefined),
        completedLessons: typeof item.lesson_progress === 'number' ? item.lesson_progress : undefined,
        avatars: defaultRecommended.avatars,
        finishedText: '3067 people already finished it',
        ctaTheme: 'dark',
        footerType: 4,
    }
}

const courses = computed<Course[]>(() => {
    const list = courseListRes.value?.data?.list
    if (!Array.isArray(list) || list.length === 0) return fallbackCourses
    return list.map(toCourseCardModel)
})

const recommendedCourseTo = computed(() => {
    const first = courses.value[0]
    if (!first) return '/user-course/chapters'
    return `/user-course/chapters?course_id=${first.id}`
})

const recommended = computed(() => {
    const first = courses.value[0]
    if (!first) return defaultRecommended
    return {
        title: first.title,
        description: first.description,
        lessons: first.lessons ?? defaultRecommended.lessons,
        duration: first.duration ?? defaultRecommended.duration,
        certificate: first.certificate ?? defaultRecommended.certificate,
        image: first.image,
        avatars: defaultRecommended.avatars
    }
})

const sortOrder = ref<'popular' | 'recent' | 'duration'>('popular')

const parseDurationDays = (duration?: string) => {
    if (!duration) return Number.POSITIVE_INFINITY
    const m = duration.toLowerCase().match(/(\d+)\s*(day|days|week|weeks|month|months|year|years)/)
    if (!m) return Number.POSITIVE_INFINITY
    const n = Number(m[1])
    const unit = m[2]
    if (!Number.isFinite(n)) return Number.POSITIVE_INFINITY
    if (unit.startsWith('day')) return n
    if (unit.startsWith('week')) return n * 7
    if (unit.startsWith('month')) return n * 30
    if (unit.startsWith('year')) return n * 365
    return Number.POSITIVE_INFINITY
}

const sortedCourses = computed(() => {
    const list = [...courses.value]
    if (sortOrder.value === 'duration') {
        return list.sort((a, b) => parseDurationDays(a.duration) - parseDurationDays(b.duration))
    }
    return list
})

</script>

<style scoped></style>
