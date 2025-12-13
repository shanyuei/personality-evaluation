<template>
    <main class="uno-py-64px">
        <section class="uno-py-10 page-container ">
            <div class="uno-flex uno-justify-start uno-items-center uno-flex-col uno-gap-[15px]">
                <div class="uno-w-full ">
                    <p class="uno-text-[var(--ui-muted-foreground)] uno-font-['Outfit'] uno-font-medium">{{
                        $t('pages.course.recommendedForYou') }}</p>
                </div>
                <div
                    class="uno-w-full uno-flex uno-justify-between uno-items-start uno-flex-col md:uno-flex-row uno-gap-6 md:uno-gap-[56px] uno-p-6 md:uno-p-[32px] uno-bg-white uno-rounded-3xl uno-shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]">
                    <div
                        class="uno-flex uno-flex-col md:uno-flex-row uno-gap-6 md:uno-gap-[56px] uno-w-full md:uno-w-642px">
                        <div class="uno-flex uno-flex-col uno-gap-6">
                            <div class="uno-flex uno-flex-col uno-gap-4">
                                <p
                                    class="uno-text-[var(--ui-foreground)] uno-text-2xl md:uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">
                                    {{ recommended.title }}</p>
                                <p class="uno-text-[var(--ui-muted-foreground)] uno-text-sm uno-font-['Outfit']">{{
                                    recommended.description }}</p>
                            </div>
                            <div class="uno-flex uno-flex-row uno-gap-6">
                                <span class="uno-text-[var(--ui-foreground)] uno-font-['Outfit'] uno-font-medium">{{
                                    recommended.lessons }} {{ $t('pages.course.lessons') }}</span>
                                <span class="uno-text-[var(--ui-foreground)] uno-font-['Outfit'] uno-font-medium">{{
                                    recommended.duration }}</span>
                                <span class="uno-text-[var(--ui-foreground)] uno-font-['Outfit'] uno-font-medium">{{
                                    $t('pages.course.certificate') }}</span>
                            </div>
                            <div
                                class="uno-flex uno-items-center uno-flex-row uno-flex-wrap md:uno-flex-nowrap uno-gap-4 md:uno-gap-6 uno-mt-2">
                                <div
                                    class="uno-h-[48px] md:uno-h-[56px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-3 uno-py-1.5 uno-pr-1.5 uno-pl-[16px] md:uno-pl-[20px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-transition-all uno-rounded-[100px]">
                                    <span class="uno-text-white uno-font-['Outfit'] uno-font-medium">{{
                                        $t('common.getStarted') }}</span>
                                    <NuxtImg width="44" height="44" src="/images/common/go-arrow-1.png"
                                        class="uno-w-[36px] uno-h-[36px] md:uno-w-[44px] md:uno-h-[44px]" />
                                </div>
                                <div
                                    class="uno-flex uno-items-center uno-flex-row uno-gap-1 md:uno-gap-2 uno-rounded-xl  uno-mt-3 md:uno-mt-0">
                                    <div class="uno-flex uno-items-center uno-flex-row">
                                        <div v-for="(a, idx) in recommended.avatars" :key="idx"
                                            :class="['uno-w-[20px] uno-h-[20px] md:uno-w-[24px] md:uno-h-[24px] uno-bg-white uno-border-solid uno-border-white uno-border uno-rounded-full uno-overflow-hidden', idx > 0 ? 'uno--ml-1 md:uno--ml-2' : '']">
                                            <NuxtImg :src="a" alt="avatar"
                                                class="uno-w-full uno-h-full uno-object-cover" />
                                        </div>
                                    </div>
                                    <p
                                        class="uno-text-[var(--ui-muted-foreground)] uno-text-xs md:uno-text-sm uno-font-['Outfit'] uno-text-center md:uno-text-left">
                                        3067 people already finished it</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NuxtImg src="/images/courses/1.png" alt="image" width="425" height="270" />
                </div>
            </div>
        </section>


        <section class="uno-pt-[32px] uno-pb-[120px] uno-bg-[var(--color-gray-9)]">
            <div class="uno-mx-auto page-container ">
                <p class="uno-text-[var(--ui-muted-foreground)] uno-text-xl uno-font-['Outfit'] uno-font-medium">{{
                    $t('pages.course.allCourses') }}</p>

                <div class="uno-mt-4">
                    <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-2 uno-gap-6">
                        <CourseCard v-for="course in sortedCourses" :key="course.id" :course="course" />
                    </div>
                </div>
            </div>
        </section>
    </main>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const recommended = ref({
    title: 'Budgeting',
    description: 'Budgeting is a foundational aspect of financial planning, bboth for individuals and organizations. In this lesson, we will explore the basics of budgeting, its role in setting finarcial goals, and how it helps in managing income and expenses effectively',
    lessons: 10,
    duration: '2 weeks',
    certificate: true,
    image: '/images/home/1.png',
    avatars: ['/images/home/8.png', '/images/home/11.png', '/images/about/3.png']
})

type Course = {
    id: number
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

const courses = ref<Course[]>([
    {
        id: 1,
        title: 'People Leadership vs. Management',
        description: 'Learn the difference between leadership and management to inspire teams and drive outcomes.',
        image: '/images/courses/1.png',
        points: 20,
        ctaTheme: 'dark',
        footerType: 1,
    },
    {
        id: 1,
        title: 'People Leadership vs. Management',
        description: 'Learn the difference between leadership and management to inspire teams and drive outcomes.',
        image: '/images/courses/1.png',
        points: 20,
        percent: 10,
        completedLessons: 1,
        lessons: 10,
        ctaTheme: 'dark',
        footerType: 2,
    },
    {
        id: 1,
        title: 'People Leadership vs. Management',
        description: 'Learn the difference between leadership and management to inspire teams and drive outcomes.',
        image: '/images/courses/1.png',
        points: 20,
        ctaTheme: 'dark',
        footerType: 3,
    },
    {
        id: 1,
        title: 'People Leadership vs. Management',
        description: 'Learn the difference between leadership and management to inspire teams and drive outcomes.',
        image: '/images/courses/1.png',
        points: 20,
        ctaTheme: 'dark',
        footerType: 4,
        lessons: 10,
        duration: '2 weeks',
        certificate: true,
        avatars: ['/images/home/8.png', '/images/home/11.png', '/images/about/3.png'],
        finishedText: '3067 people already finished it',
    },
])

const sortOrder = ref<'popular' | 'recent' | 'duration'>('popular')

const sortedCourses = computed(() => {
    const list = [...courses.value]
    if (sortOrder.value === 'duration') {
        return list.sort((a, b) => (parseInt(a.duration) || 0) - (parseInt(b.duration) || 0))
    }
    return list
})

</script>

<style scoped></style>
