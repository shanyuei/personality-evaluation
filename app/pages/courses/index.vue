<template>
    <main class="uno-py-64px">
        <section class="uno-py-10 page-container ">
            <div class="uno-flex uno-justify-start uno-items-center uno-flex-col uno-gap-[15px]">
                <div class="uno-w-full ">
                    <p class="uno-text-[var(--ui-muted-foreground)] uno-font-['Outfit'] uno-font-medium">{{
                        $t('pages.course.recommendedForYou') }}</p>
                </div>
                <div
                    class="uno-w-full uno-flex uno-justify-between uno-items-start uno-flex-row uno-p-[32px] uno-bg-white uno-rounded-3xl uno-shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]">
                    <div class="uno-flex uno-flex-row uno-gap-[56px] uno-w-642px">
                        <div class="uno-flex uno-flex-col uno-gap-6">
                            <div class="uno-flex uno-flex-col uno-gap-4">
                                <p
                                    class="uno-text-[var(--ui-foreground)] uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">
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
                            <div class="uno-flex uno-items-center uno-flex-row uno-gap-6 uno-mt-2">
                                <div
                                    class="uno-h-[56px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-3 uno-py-1.5 uno-pr-1.5 uno-pl-[20px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-transition-all uno-rounded-[100px]">
                                    <span class="uno-text-white uno-font-['Outfit'] uno-font-medium">{{
                                        $t('common.getStarted') }}</span>
                                    <NuxtImg width="44" height="44" src="/images/common/go-arrow-1.png" />
                                </div>
                                <div
                                    class="uno-flex uno-items-center uno-flex-row uno-gap-2 uno-rounded-xl uno-shadow-[10px_30px_50px_0px_rgba(0,157,119,0.08)]">
                                    <div class="uno-flex uno-items-center uno-flex-row">
                                        <div v-for="(a, idx) in recommended.avatars" :key="idx"
                                            :class="['uno-w-[24px] uno-h-[24px] uno-bg-white uno-border-solid uno-border-white uno-border uno-rounded-full uno-overflow-hidden', idx > 0 ? 'uno--ml-2' : '']">
                                            <NuxtImg :src="a" alt="avatar"
                                                class="uno-w-full uno-h-full uno-object-cover" />
                                        </div>
                                    </div>
                                    <p
                                        class="uno-text-[var(--ui-muted-foreground)] uno-text-xs uno-font-['Outfit'] uno-text-center">
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
                    <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-2 lg:uno-grid-cols-2 xl:uno-grid-cols-3 uno-gap-6">
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
    duration: string
    progress?: string
    resultLabel?: string
    points?: number
    percent?: number
    ctaTheme?: 'dark' | 'green'
    instructor: { name: string, avatar: string }
    lessons?: number
    certificate?: boolean
    avatars?: string[]
    finishedText?: string
    footerType?: 'completed_with_points' | 'lessons_with_percent' | 'completed_with_check' | 'cta_with_people'
}

const courses = ref<Course[]>([
    {
        id: 1,
        title: 'People Leadership vs. Management',
        description: 'Learn the difference between leadership and management to inspire teams and drive outcomes.',
        image: '/images/home/3.png',
        duration: '20 min',
        progress: "You've completed this test.",
        resultLabel: 'View test results',
        points: 20,
        ctaTheme: 'dark',
        footerType: 'completed_with_points',
        instructor: { name: 'Alex', avatar: '/images/home/8.png' }
    },
    {
        id: 2,
        title: 'HR Management',
        description: 'Build practical HR skills covering recruitment, onboarding, and performance frameworks.',
        image: '/images/home/11.png',
        duration: '1h',
        progress: '1 of 10 lessons',
        percent: 10,
        ctaTheme: 'green',
        footerType: 'lessons_with_percent',
        instructor: { name: 'Sofia', avatar: '/images/home/1.png' }
    },
    {
        id: 3,
        title: 'People Leadership vs. Management',
        description: 'Leadership and management are two distinctive and complementary systems of actions in the business environment. Both are necessary for success in an increasingly complex and volatile business environment.',
        image: '/images/home/9.png',
        duration: '30 min',
        progress: '✓',
        resultLabel: 'View test results',
        ctaTheme: 'green',
        footerType: 'completed_with_check',
        instructor: { name: 'Max', avatar: '/images/home/8.png' }
    },
    {
        id: 4,
        title: 'Email Marketing',
        description: 'Master lifecycle email strategies with segmentation, copy, and analytics.',
        image: '/images/home/2.png',
        duration: '2 weeks',
        lessons: 10,
        certificate: true,
        avatars: ['/images/home/8.png', '/images/home/11.png', '/images/about/3.png'],
        finishedText: '3067 people already finished it',
        ctaTheme: 'dark',
        footerType: 'cta_with_people',
        instructor: { name: 'Sara', avatar: '/images/about/3.png' }
    }
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
