<template>
    <main class="">

        <section class="uno-py-10 uno-px-6 md:uno-px-12 lg:uno-px-24">
            <div class="uno-max-w-[80%] uno-mx-auto">
                <div class="uno-flex uno-justify-start uno-items-center uno-flex-col uno-gap-[15px]">
                    <div class="uno-w-full md:uno-w-[1000px]">
                        <p class="uno-text-[var(--ui-muted-foreground)] uno-font-['Outfit'] uno-font-medium">{{
                            $t('pages.course.recommendedForYou') }}</p>
                    </div>
                    <div
                        class="uno-w-full md:uno-w-[1000px] uno-flex uno-justify-between uno-items-start uno-flex-row uno-p-[32px] uno-bg-white uno-rounded-3xl uno-shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]">
                        <div class="uno-flex uno-flex-row uno-gap-[56px]">
                            <div class="uno-flex uno-flex-col uno-gap-6">
                                <div class="uno-flex uno-flex-col uno-gap-4">
                                    <p
                                        class="uno-text-[#011813] uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">
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
                                <div class="uno-flex uno-items-center uno-flex-row uno-gap-4">
                                    <div
                                        class="uno-h-[56px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-3 uno-py-1.5 uno-pr-1.5 uno-pl-[20px] uno-bg-[var(--ui-primary)] uno-rounded-[100px]">
                                        <span class="uno-text-white uno-font-['Outfit'] uno-font-medium">{{
                                            $t('common.getStarted') }}</span>
                                        <div
                                            class="uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-2.5 uno-p-2.5 uno-bg-white uno-rounded-[100px] uno-overflow-hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                width="24" height="24">
                                                <path d="M5 12h9m0 0l-4-4m4 4l-4 4" stroke="#000" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        class="uno-flex uno-items-center uno-flex-row uno-gap-2 uno-rounded-xl uno-shadow-[10px_30px_50px_0px_rgba(0,157,119,0.08)]">
                                        <div class="uno-flex uno-items-center uno-flex-row">
                                            <div v-for="(a, idx) in recommended.avatars" :key="idx"
                                                class="uno-w-[24px] uno-h-[24px] uno-bg-white uno-border-solid uno-border-white uno-border uno-rounded-full uno-overflow-hidden">
                                                <NuxtImg :src="a" alt="avatar"
                                                    class="uno-w-full uno-h-full uno-object-cover" />
                                            </div>
                                        </div>
                                        <p
                                            class="uno-text-[var(--ui-muted-foreground)] uno-text-xs uno-font-['Outfit'] uno-text-center">
                                            3067
                                            people already finished it</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="uno-w-[425px] uno-h-[270px] uno-rounded-3xl uno-overflow-hidden uno-relative uno-hidden md:uno-block">
                            <NuxtImg src="/images/home/1.png" alt="image"
                                class="uno-rounded-xl uno-absolute uno-left-[65px] uno-top-0 uno-w-[360px] uno-h-[270px] uno-object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="uno-pt-[32px] uno-pb-[120px] uno-px-[24px] md:uno-px-[120px] ">
            <div class="uno-mx-auto md:uno-w-[1200px]">
                <p class="uno-text-[var(--ui-muted-foreground)] uno-text-xl uno-font-['Outfit'] uno-font-medium">{{
                    $t('pages.course.allCourses') }}</p>

                <div class="uno-mt-4 uno-flex uno-flex-col uno-gap-10">
                    <div class="uno-flex uno-flex-col md:uno-flex-row uno-gap-6">
                        <div v-for="course in sortedCourses.slice(0, 2)" :key="course.id"
                            class="uno-w-full md:uno-w-[588px] uno-h-auto md:uno-h-[535px] uno-flex uno-items-center uno-flex-col uno-gap-5 uno-pt-3 uno-pb-[24px] uno-px-3 uno-bg-white uno-rounded-2xl">
                            <div
                                class="uno-w-full md:uno-w-[564px] uno-h-[200px] md:uno-h-[270px] uno-rounded-xl uno-overflow-hidden uno-relative">
                                <NuxtImg :src="course.image" :alt="course.title"
                                    class="uno-rounded-xl uno-absolute uno-left-0 uno-top-0 uno-w-full md:uno-w-[564px] uno-h-[200px] md:uno-h-[270px] uno-object-cover" />
                            </div>
                            <div class="uno-self-stretch uno-flex uno-flex-col uno-gap-3 uno-px-2">
                                <div class="uno-flex uno-flex-col uno-gap-4">
                                    <p class="uno-text-[#011813] uno-text-2xl uno-font-['Outfit'] uno-font-medium">{{
                                        course.title }}</p>
                                    <p class="uno-text-[var(--ui-muted-foreground)] uno-text-sm uno-font-['Outfit']">{{
                                        course.description }}</p>
                                    <div class="uno-flex uno-justify-between uno-items-end uno-relative">
                                        <div class="uno-flex uno-items-center uno-gap-2">
                                            <span
                                                class="uno-text-[var(--ui-foreground)] uno-text-sm uno-font-['Outfit'] uno-font-medium">{{
                                                    course.progress === '✓' ? "You've completed this test." :
                                                (course.progress || '') }}</span>
                                            <span v-if="course.resultLabel"
                                                class="uno-text-[var(--ui-foreground)] uno-text-sm uno-font-['Outfit']">{{
                                                course.resultLabel }}</span>
                                        </div>
                                        <div class="uno-h-[48px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-3 uno-py-1 uno-pr-1 uno-pl-[20px] uno-rounded-[100px]"
                                            :class="course.ctaTheme === 'dark' ? 'uno-bg-[#011813]' : 'uno-bg-[var(--ui-primary)]'">
                                            <span class="uno-text-white uno-font-['Outfit'] uno-font-medium">{{
                                                $t('pages.course.cta.start') }}</span>
                                            <div
                                                class="uno-w-[40px] uno-h-[40px] uno-flex uno-justify-center uno-items-center uno-rounded-[100px] uno-bg-white uno-overflow-hidden">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    width="24" height="24">
                                                    <path d="M5 12h9m0 0l-4-4m4 4l-4 4" stroke="#000" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div v-if="course.points"
                                            class="uno-w-[64px] uno-h-[64px] uno-flex uno-justify-center uno-items-center uno-rounded-full uno-overflow-hidden uno-bg-[rgba(255,211,204,0.5)] uno-border-solid uno-border-[var(--color-pink-2)] uno-border">
                                            <div class="uno-flex uno-items-center uno-flex-col">
                                                <span
                                                    class="uno-text-[var(--color-pink-1)] uno-text-xl uno-font-['Outfit'] uno-font-semibold">{{
                                                    course.points }}</span>
                                                <span
                                                    class="uno-text-[var(--color-pink-1)] uno-text-xs uno-font-['Outfit']">points</span>
                                            </div>
                                        </div>
                                        <div v-else-if="course.percent !== undefined"
                                            class="uno-w-[64px] uno-h-[64px] uno-flex uno-justify-center uno-items-center uno-rounded-full uno-overflow-hidden uno-border-solid uno-border-[var(--ui-border)] uno-border-4">
                                            <div class="uno-flex uno-items-center uno-flex-col">
                                                <span
                                                    class="uno-text-[var(--ui-muted-foreground)] uno-text-lg uno-font-['Outfit'] uno-font-medium">{{
                                                    course.percent }}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="uno-flex uno-flex-col md:uno-flex-row uno-gap-6">
                        <div v-for="course in sortedCourses.slice(2, 4)" :key="course.id"
                            class="uno-w-full md:uno-w-[588px] uno-h-auto md:uno-h-[535px] uno-flex uno-items-center uno-flex-col uno-gap-5 uno-pt-3 uno-pb-[24px] uno-px-3 uno-bg-white uno-rounded-2xl">
                            <div
                                class="uno-w-full md:uno-w-[564px] uno-h-[200px] md:uno-h-[270px] uno-rounded-xl uno-overflow-hidden uno-relative">
                                <NuxtImg :src="course.image" :alt="course.title"
                                    class="uno-rounded-xl uno-absolute uno-left-0 uno-top-0 uno-w-full md:uno-w-[564px] uno-h-[200px] md:uno-h-[270px] uno-object-cover" />
                            </div>
                            <div class="uno-self-stretch uno-flex uno-flex-col uno-gap-3 uno-px-2">
                                <div class="uno-flex uno-flex-col uno-gap-4">
                                    <p class="uno-text-[#011813] uno-text-2xl uno-font-['Outfit'] uno-font-medium">{{
                                        course.title }}</p>
                                    <p class="uno-text-[var(--ui-muted-foreground)] uno-text-sm uno-font-['Outfit']">{{
                                        course.description }}</p>
                                    <div class="uno-flex uno-justify-between uno-items-end uno-relative">
                                        <div class="uno-flex uno-items-center uno-gap-2">
                                            <span
                                                class="uno-text-[var(--ui-foreground)] uno-text-sm uno-font-['Outfit'] uno-font-medium">{{
                                                    course.progress === '✓' ? "You've completed this test." :
                                                (course.progress || '') }}</span>
                                            <span v-if="course.resultLabel"
                                                class="uno-text-[var(--ui-foreground)] uno-text-sm uno-font-['Outfit']">{{
                                                course.resultLabel }}</span>
                                        </div>
                                        <div class="uno-h-[48px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-3 uno-py-1 uno-pr-1 uno-pl-[20px] uno-rounded-[100px]"
                                            :class="course.ctaTheme === 'dark' ? 'uno-bg-[#011813]' : 'uno-bg-[var(--ui-primary)]'">
                                            <span class="uno-text-white uno-font-['Outfit'] uno-font-medium">{{
                                                $t('pages.course.cta.start') }}</span>
                                            <div
                                                class="uno-w-[40px] uno-h-[40px] uno-flex uno-justify-center uno-items-center uno-rounded-[100px] uno-bg-white uno-overflow-hidden">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    width="24" height="24">
                                                    <path d="M5 12h9m0 0l-4-4m4 4l-4 4" stroke="#000" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div v-if="course.points"
                                            class="uno-w-[64px] uno-h-[64px] uno-flex uno-justify-center uno-items-center uno-rounded-full uno-overflow-hidden uno-bg-[rgba(255,211,204,0.5)] uno-border-solid uno-border-[var(--color-pink-2)] uno-border">
                                            <div class="uno-flex uno-items-center uno-flex-col">
                                                <span
                                                    class="uno-text-[var(--color-pink-1)] uno-text-xl uno-font-['Outfit'] uno-font-semibold">{{
                                                    course.points }}</span>
                                                <span
                                                    class="uno-text-[var(--color-pink-1)] uno-text-xs uno-font-['Outfit']">points</span>
                                            </div>
                                        </div>
                                        <div v-else-if="course.percent !== undefined"
                                            class="uno-w-[64px] uno-h-[64px] uno-flex uno-justify-center uno-items-center uno-rounded-full uno-overflow-hidden uno-border-solid uno-border-[var(--ui-border)] uno-border-4">
                                            <div class="uno-flex uno-items-center uno-flex-col">
                                                <span
                                                    class="uno-text-[var(--ui-muted-foreground)] uno-text-lg uno-font-['Outfit'] uno-font-medium">{{
                                                    course.percent }}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
    description: 'Craft better budgeting habits to optimize spending, build a sustainable plan, and reach your financial goals with confidence.',
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
}

const courses = ref<Course[]>([
    {
        id: 1,
        title: 'People Leadership vs. Management',
        description: 'Learn the difference between leadership and management to inspire teams and drive outcomes.',
        image: '/images/about/3.png',
        duration: '20 min',
        progress: "You've completed this test.",
        resultLabel: 'View test results',
        points: 20,
        ctaTheme: 'dark',
        instructor: { name: 'Alex', avatar: '/images/home/8.png' }
    },
    {
        id: 2,
        title: 'HR Management',
        description: 'Build practical HR skills covering recruitment, onboarding, and performance frameworks.',
        image: '/images/home/11.png',
        duration: '1h',
        percent: 10,
        ctaTheme: 'green',
        instructor: { name: 'Sofia', avatar: '/images/home/1.png' }
    },
    {
        id: 3,
        title: 'Email Marketing',
        description: 'Master lifecycle email strategies with segmentation, copy, and analytics.',
        image: '/images/home/2.png',
        duration: '45 min',
        progress: '✓',
        ctaTheme: 'green',
        instructor: { name: 'Max', avatar: '/images/home/8.png' }
    },
    {
        id: 4,
        title: 'Brand Management',
        description: 'Develop coherent brand systems and campaigns across channels.',
        image: '/images/home/1.png',
        duration: '1.5h',
        ctaTheme: 'dark',
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
