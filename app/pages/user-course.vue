<template>
    <main class="uno-min-h-screen uno-bg-[var(--ui-background)]">

        <section class="uno-py-10 uno-px-6 md:uno-px-12 lg:uno-px-24">
            <div class="page-container">
                <div class="uno-flex uno-justify-start uno-items-center uno-flex-col uno-gap-[15px]">
                    <div class="uno-w-full md:uno-w-[1200px]">
                        <p class="uno-text-[var(--ui-muted-foreground)] uno-font-['Outfit'] uno-font-medium">{{
                            $t('pages.userCourse.recommendedForYou') }}</p>
                    </div>
                    <div
                        class="uno-w-full md:uno-w-[1200px] uno-flex uno-justify-between uno-items-start uno-flex-row uno-p-[32px] uno-bg-white uno-rounded-3xl uno-shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]">
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
                                        recommended.lessons }} {{ $t('pages.userCourse.lessons') }}</span>
                                    <span class="uno-text-[var(--ui-foreground)] uno-font-['Outfit'] uno-font-medium">{{
                                        recommended.duration }}</span>
                                    <span class="uno-text-[var(--ui-foreground)] uno-font-['Outfit'] uno-font-medium">{{
                                        $t('pages.userCourse.certificate') }}</span>
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
                                            class="uno-text-[var(--ui-muted-foreground)] uno-text-xs uno-font-['Outfit'] uno-text-center">3067
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


        <section class="uno-py-6 uno-px-6 md:uno-px-12 lg:uno-px-24">
            <div class="uno-max-w-[80%] uno-mx-auto">
                <div class="uno-flex uno-justify-between uno-items-center uno-mb-4">
                    <h2 class="uno-text-xl md:uno-text-2xl uno-font-semibold uno-text-[var(--ui-foreground)]">{{
                        $t('pages.userCourse.allCourses') }}</h2>
                    <USelect v-model="sortOrder" :options="sortOptions" class="uno-w-[160px]" />
                </div>

                <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-2 uno-gap-6">
                    <div v-for="course in sortedCourses" :key="course.id"
                        class="uno-bg-white uno-rounded-[16px] uno-shadow-md uno-border uno-border-[var(--ui-border)] hover:uno-shadow-lg uno-transition">
                        <div class="uno-grid uno-grid-cols-1 sm:uno-grid-cols-3">
                            <div class="sm:uno-col-span-1">
                                <NuxtImg :src="course.image" :alt="course.title"
                                    class="uno-w-full uno-h-[180px] sm:uno-h-full uno-object-cover" />
                            </div>
                            <div class="sm:uno-col-span-2 uno-p-4 sm:uno-p-6">
                                <div class="uno-flex uno-justify-between uno-items-start">
                                    <h3
                                        class="uno-text-lg md:uno-text-xl uno-font-bold uno-text-[var(--ui-foreground)]">
                                        {{ course.title }}</h3>
                                    <span v-if="course.progress"
                                        class="uno-text-xs uno-bg-[var(--color-green-3)] uno-text-[var(--ui-foreground)] uno-rounded-full uno-px-2 uno-py-1">{{
                                        course.progress }}</span>
                                </div>
                                <p class="uno-text-sm uno-text-[var(--ui-muted-foreground)] uno-mt-2 uno-line-clamp-2">
                                    {{ course.description }}</p>

                                <div class="uno-flex uno-justify-between uno-items-center uno-mt-4">
                                    <div class="uno-flex uno-items-center uno-gap-2">
                                        <UButton size="sm"
                                            class="uno-rounded-full uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white">
                                            {{ $t('pages.userCourse.cta.start') }}</UButton>
                                        <UButton size="sm" variant="ghost" class="uno-rounded-full">{{
                                            $t('pages.userCourse.cta.notForMe') }}</UButton>
                                    </div>
                                    <div class="uno-flex uno-items-center uno-gap-3">
                                        <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{
                                            course.duration }}</span>
                                        <div
                                            class="uno-w-8 uno-h-8 uno-rounded-full uno-bg-[var(--color-gray-9)] uno-overflow-hidden">
                                            <NuxtImg :src="course.instructor.avatar" :alt="course.instructor.name"
                                                class="uno-w-full uno-h-full uno-object-cover" />
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
    instructor: { name: string, avatar: string }
}

const courses = ref<Course[]>([
    {
        id: 1,
        title: 'People Leadership vs. Management',
        description: 'Learn the difference between leadership and management to inspire teams and drive outcomes.',
        image: '/images/about/3.png',
        duration: '20 min',
        progress: '75%',
        instructor: { name: 'Alex', avatar: '/images/home/8.png' }
    },
    {
        id: 2,
        title: 'HR Management',
        description: 'Build practical HR skills covering recruitment, onboarding, and performance frameworks.',
        image: '/images/home/11.png',
        duration: '1h',
        instructor: { name: 'Sofia', avatar: '/images/home/1.png' }
    },
    {
        id: 3,
        title: 'Email Marketing',
        description: 'Master lifecycle email strategies with segmentation, copy, and analytics.',
        image: '/images/home/2.png',
        duration: '45 min',
        progress: '✓',
        instructor: { name: 'Max', avatar: '/images/home/8.png' }
    },
    {
        id: 4,
        title: 'Brand Management',
        description: 'Develop coherent brand systems and campaigns across channels.',
        image: '/images/home/1.png',
        duration: '1.5h',
        instructor: { name: 'Sara', avatar: '/images/about/3.png' }
    }
])

const sortOrder = ref<'popular' | 'recent' | 'duration'>('popular')
const sortOptions = [
    { label: 'Popular', value: 'popular' },
    { label: 'Recent', value: 'recent' },
    { label: 'Duration', value: 'duration' }
]

const sortedCourses = computed(() => {
    const list = [...courses.value]
    if (sortOrder.value === 'duration') {
        return list.sort((a, b) => (parseInt(a.duration) || 0) - (parseInt(b.duration) || 0))
    }
    return list
})

</script>

<style scoped></style>
