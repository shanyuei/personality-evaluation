<template>
    <!-- 首页 -->
    <div class="uno-py-12 sm:uno-py-16 md:uno-py-24 lg:uno-py-32">
        <!-- 第一块区域 -->
        <div
            class="page-container uno-relative uno-rounded-xl uno-border uno-border-transparent uno-px-4 sm:uno-px-6 md:uno-px-8">
            <!-- 内容区域 -->
            <div class="uno-flex uno-justify-start uno-items-center uno-flex-col">
                <div
                    class="uno-flex uno-justify-start uno-items-center uno-flex-col uno-gap-12px sm:uno-gap-16px md:uno-gap-24px">
                    <h1
                        class="uno-text-[#011813] uno-text-xl sm:uno-text-2xl md:uno-text-5xl lg:uno-text-7xl uno-font-['Outfit'] uno-text-center uno-font-semibold">
                        {{ $t('pages.home.title') }}
                    </h1>
                    <h2
                        class="uno-text-[#4E5255] uno-font-[400] uno-text-xs sm:uno-text-sm md:uno-text-lg uno-font-['Outfit'] uno-text-center">
                        {{ $t('pages.home.description') }}
                    </h2>
                </div>

                <!-- 测试按钮 -->
                <AppArrowButton
                    class="uno-m-t-32px sm:uno-m-t-48px md:uno-m-t-72px uno-gap-[8px] sm:uno-gap-[12px] md:uno-gap-[18px] uno-py-2 sm:uno-py-3 md:uno-py-4 uno-pr-2 sm:uno-pr-3 md:uno-pr-3 uno-pl-[20px] sm:uno-pl-[24px] md:uno-pl-[48px] uno-text-[14px] sm:uno-text-[18px] md:uno-text-[32px] uno-font-['Outfit'] uno-font-medium"
                    :icon-size="72"
                    :to="localePath('/test')"
                >
                    Take the Test
                </AppArrowButton>
            </div>
        </div>
        <!-- 第二块区域 hero -->
        <div class="page-container uno-hero-section uno-w-full uno-my-12 ">
            <div
                class="uno-flex uno-justify-center uno-items-center uno-gap-2 sm:uno-gap-3 md:uno-gap-4 lg:uno-gap-6 xl:uno-gap-6">
                <!-- 六个卡通人物头像 -->
                <div v-for="(hero, index) in heroAvatars" :key="index"
                    class="uno-hero-avatar uno-relative uno-w-26 uno-h-34  md:uno-w-32 md:uno-h-48 lg:uno-w-32 lg:uno-h-48 xl:uno-w-40 xl:uno-h-64 uno-overflow-hidden uno-flex uno-items-center uno-justify-center">
                    <NuxtImg :src="hero.src" :alt="hero.alt" class="uno-w-full uno-h-full uno-object-contain" />
                </div>
            </div>
        </div>
        <!-- 第三块 数据统计区域 -->
        <div class="uno-data-stats uno-bg-[#F5F8FF] uno-my-12">
            <div class="page-container uno-px-4">
                <div class="uno-grid uno-grid-cols-2 md:uno-grid-cols-4 uno-gap-3 sm:uno-gap-4 md:uno-gap-6">
                    <!-- 统计项循环 -->
                    <div v-for="(item, index) in statsItems" :key="index"
                        class="uno-text-center uno-p-3 sm:uno-p-4 md:uno-p-6 uno-flex uno-flex-col uno-justify-center uno-items-center">
                        <div :style="{ color: item.color }"
                            class="uno-text-lg sm:uno-text-2xl md:uno-text-4xl lg:uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-m-b-1px sm:uno-m-b-2px md:uno-m-b-4px">
                            {{ item.value }}
                        </div>
                        <div
                            class="uno-text-[#4E5255] uno-text-xs sm:uno-text-sm md:uno-text-base lg:uno-text-lg uno-font-['Outfit']">
                            {{ $t(item.labelKey) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 第四块 介绍区域 -->
        <div class="page-container uno-intro-section uno-py-12 sm:uno-py-16 md:uno-py-20 lg:uno-py-24">
            <div class="uno-px-4">
                <!-- Why You Should Take the Test 部分 -->
                <div class="uno-mb-12 sm:uno-mb-16 md:uno-mb-20 lg:uno-mb-24">
                    <div class="uno-max-w-[800px] uno-mx-auto">
                        <h2
                            class="uno-text-[#011813] uno-text-2xl sm:uno-text-3xl md:uno-text-4xl lg:uno-text-5xl uno-font-['Outfit'] uno-text-center uno-font-semibold uno-m-b-6px sm:uno-m-b-8px md:uno-m-b-12px">
                            {{
                                $t('pages.home.why.title') }}</h2>
                        <p
                            class="uno-text-[#4E5255] uno-font-['Outfit'] uno-text-center uno-text-sm sm:uno-text-base uno-mb-[56px] sm:uno-mb-[80px] " style="white-space: pre-line;">
                            {{ $t('pages.home.why.desc') }}
                        </p>
                    </div>

                    <!-- 主要介绍卡片 -->
                    <div
                        class="uno-shadow-lg uno-mb-6 sm:uno-mb-8 md:uno-mb-10 lg:uno-mb-12 uno-w-full uno-bg-[#F8F8F8] uno-border-solid uno-border-[#E7E7E8] uno-border uno-rounded-[32px] uno-p-[24px]  uno-relative uno-overflow-hidden">

                        <div class="uno-flex uno-flex-col md:uno-flex-row uno-items-center uno-gap-8 md:uno-gap-12">
                            <!-- Left Content -->
                            <div
                                class="uno-w-full md:uno-w-[45%] uno-flex uno-flex-col uno-justify-center uno-relative">
                                <!-- Top Icon -->
                                <div
                                    class="uno-w-12 uno-h-12 uno-bg-[#E0F2EF] uno-rounded-xl uno-flex uno-items-center uno-justify-center uno-mb-6">
                                    <NuxtImg src="/images/home/2.png" alt="decor" width="48" height="48"
                                        class="uno-w-10 uno-h-10 md:uno-w-14 md:uno-h-14 uno-object-contain" />
                                </div>

                                <h3
                                    class="uno-text-[24px] sm:uno-text-[28px] md:uno-text-[32px] uno-font-['Outfit'] uno-font-bold uno-mb-4 uno-text-[#011813] uno-leading-tight">
                                    {{ $t('pages.home.why.main.title') }}
                                </h3>
                                <p class="uno-text-[#4E5255] uno-text-base sm:uno-text-lg uno-mb-6 uno-leading-relaxed">
                                    {{ $t('pages.home.why.main.desc') }}
                                </p>

                                <!-- Divider -->
                                <div class="uno-w-full uno-h-[1px] uno-bg-[#E7E7E8] uno-mb-6" />

                                <div class="uno-relative uno-inline-flex">
                                    <AppArrowButton
                                    class="uno-pl-6 uno-pr-2 uno-py-2 uno-gap-3"
                                    :icon-size="44"
                                    :to="localePath('/test')"
                                >
                                    <span class="uno-font-['Outfit'] uno-font-medium uno-text-[16px]">{{
                                        $t('common.getStarted') }}</span>
                                </AppArrowButton>


                                </div>
                            </div>

                            <!-- Right Image -->
                            <NuxtImg src="/images/home/1.png" alt="Self-awareness illustration" width="564" height="376"
                                class="uno-object-contain uno-rounded-2xl" />
                        </div>
                    </div>

                    <!-- 三个小介绍卡片 -->
                    <div
                        class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-3 sm:uno-gap-4 md:uno-gap-6 lg:uno-gap-8 uno-px-2 sm:uno-px-0">
                        <!-- 卡片循环 -->
                        <div v-for="(card, index) in whyCards" :key="index"
                            class="uno-bg-[#F8F8F8] uno-border-solid uno-border-[#E7E7E8] uno-border uno-rounded-3xl uno-p-12px sm:uno-p-16px md:uno-p-24px uno-shadow-lg uno-relative">
                            <div class="uno-mb-2 sm:uno-mb-3 md:uno-mb-4" :class="card.iconColor">
                                <!-- 图标 -->
                                <NuxtImg :src="card.icon" :alt="card.alt" width="32" height="32"
                                    class="sm:uno-w-[40px] sm:uno-h-[40px] md:uno-w-[56px] md:uno-h-[56px]" />
                            </div>
                            <h3
                                class="uno-text-base sm:uno-text-lg md:uno-text-[32px] uno-font-['Outfit'] uno-font-bold uno-mb-2 sm:uno-mb-3">
                                {{ $t(card.titleKey) }}</h3>
                            <p class="uno-text-gray-600 uno-text-xs sm:uno-text-sm md:uno-text-base">{{
                                $t(card.descKey) }}</p>
                        </div>
                    </div>
                </div>

                <!-- How Does It Work 部分 -->
                <div class="uno-flex uno-flex-col md:uno-flex-row uno-gap-8 sm:uno-gap-12 uno-items-center">
                    <!-- 左侧：标题、描述和按钮 -->
                    <div class="uno-w-full md:uno-w-1/2">
                        <h2
                            class="uno-text-[32px] sm:uno-text-[48px] md:uno-text-[48px] uno-font-['Outfit'] uno-font-bold uno-mb-6 sm:uno-mb-8">
                            {{
                                $t('pages.home.how.title') }}
                        </h2>
                        <p class="uno-text-gray-600 uno-mb-8 sm:uno-mb-12">{{ $t('pages.home.how.desc') }}</p>

                        <AppArrowButton
                            class="uno-m-t-12px sm:uno-m-t-16px md:uno-m-t-24px uno-gap-[6px] sm:uno-gap-[8px] md:uno-gap-[12px] uno-py-2 sm:uno-py-2 uno-pr-[3px] sm:uno-pr-[4px] md:uno-pr-[6px] uno-pl-[12px] sm:uno-pl-[16px] md:uno-pl-[24px] uno-text-[12px] sm:uno-text-[14px] md:uno-text-[16px] uno-font-['Outfit'] uno-font-medium"
                            :to="localePath('/test')"
                            :icon-size="44"
                        >
                            {{ $t('common.getStarted') }}
                        </AppArrowButton>
                    </div>

                    <!-- 右侧：三个步骤卡片 -->
                    <div class="uno-w-full md:uno-w-1/2">
                        <div class="uno-flex uno-justify-start uno-items-end uno-flex-col uno-gap-4 sm:uno-gap-6">
                            <!-- 步骤循环 -->
                            <div v-for="(item, index) in howSteps" :key="index" style="flex-shrink: 0"
                                class="uno-w-full uno-flex uno-justify-start uno-items-center uno-flex-row uno-gap-[12px] sm:uno-gap-[12px] uno-py-16px sm:uno-py-24px uno-px-16px sm:uno-px-24px uno-bg-[#FFFFFF] uno-rounded-2xl uno-shadow-[0_20px_40px_0_rgba(0,157,119,0.08)] uno-border uno-border-solid uno-border-[#F0F0F0]">
                                <div style="flex: none"
                                    class="uno-w-[48px] uno-h-[48px] sm:uno-w-[64px] sm:uno-h-[64px] uno-flex uno-justify-center uno-items-center  uno-rounded-[24px] sm:uno-rounded-[50px] uno-flex uno-items-center uno-justify-center"
                                    :class="item.bgClass">
                                    <span
                                        class="uno-text-3xl sm:uno-text-[36px] uno-font-['Outfit'] uno-font-semibold uno-mb-[6px]"
                                        :class="item.textClass">{{ item.step }}</span>
                                </div>
                                <div
                                    class="uno-flex uno-justify-start uno-items-start uno-flex-col uno-gap-1 sm:uno-gap-2">
                                    <p
                                        class="uno-text-[#011813] uno-text-xl sm:uno-text-2xl uno-font-['Outfit'] uno-font-semibold">
                                        {{ $t(item.titleKey) }}</p>
                                    <p class="uno-w-full uno-text-[#4E5255] uno-font-['Outfit']">{{
                                        $t(item.descKey) }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 第五块 What You Will Receive 区域 -->
        <div class="uno-receive-section  uno-bg-gray-5 uno-relative">
            <NuxtImg src="/theme/home/receive-box-bg-h5.png" alt="" aria-hidden="true" width="375" height="1920"
                class="uno-absolute uno-inset-0 uno--z-10 uno-pointer-events-none uno-object-cover uno-object-center uno-block md:uno-hidden"
                uno-preload />
            <NuxtImg src="/theme/home/receive-box-bg-pc.png" alt="" aria-hidden="true" width="100vw" height="100%"
                class="uno-w-full uno-h-[100%]  uno-absolute uno-top-0 uno-left-0 uno--z-10 uno-pointer-events-none uno-hidden md:uno-block"
                uno-preload />
            <div
                class="page-container uno-px-4 uno-py-8 sm:uno-py-12 md:uno-py-16 lg:uno-py-20 xl:uno-py-24 relative z-10">
                <h2
                    class="uno-text-xl sm:uno-text-2xl md:uno-text-[48px] uno-font-['Outfit'] uno-font-bold uno-text-center uno-mb-2 sm:uno-mb-3 md:uno-mb-4">
                    {{
                        $t('pages.home.receive.title') }}</h2>
                <p
                    class="uno-text-center uno-text-gray-600 uno-text-xs sm:uno-text-sm md:uno-text-base uno-mb-6 sm:uno-mb-8 md:uno-mb-16 uno-max-w-3xl uno-mx-auto">
                    {{
                        $t('pages.home.receive.desc') }}</p>

                <!-- 六个卡片布局 -->
                <!-- 循环展示 receiveCards -->
                <div
                    class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-[24px] sm:uno-gap-[24px] md:uno-gap-[24px]">
                    <div v-for="(card, index) in receiveCards" :key="index"
                        class="uno-bg-white uno-rounded-[32px] uno-shadow-[0_2px_8px_rgba(0,0,0,0.04)] uno-p-[32px] uno-border uno-border-solid uno-border-[#E7E7E8] uno-flex uno-flex-col uno-items-center uno-justify-between uno-text-center uno-min-h-[256px]">
                        <div
                            class="uno-w-64px uno-h-64px sm:uno-w-64px sm:uno-h-64px uno-flex uno-items-center uno-justify-center uno-bg-gray-50 uno-rounded-full uno-mb-8px">
                            <NuxtImg :src="card.icon" :alt="card.alt" width="64" height="64" />
                        </div>
                        <h3
                            class="uno-text-lg sm:uno-text-xl md:uno-text-[20px] uno-font-['Outfit'] uno-font-500 uno-leading-tight uno-px-2 uno-mb-12px">
                            {{ $t(card.titleKey) }}
                        </h3>
                        <p
                            class="uno-text-gray-500 uno-text-sm sm:uno-text-base uno-font-['Outfit'] uno-leading-relaxed">
                            {{ $t(card.descKey) }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 第六块 客户评价模块 -->
        <TestimonialsSection :title="$t('pages.home.testimonials.title')"
            :description="$t('pages.home.testimonials.description')" :rating="5" :reviews="reviews" />

        <FAQSection :title="$t('pages.home.faq.title')" :description="$t('pages.home.faq.description')"
            :items="faqItems" />

        <!-- <GradientCTASection @button-click="handleCTAClick" /> -->
    </div>
</template>

<script setup lang="ts">
import GradientCTASection from '../../components/AppCurious.vue';
import TestimonialsSection from '../../components/TestimonialsSection.vue';
import FAQSection from '../../components/FAQSection.vue';
const { t } = useI18n()
const localePath = useLocalePath()

definePageMeta({
    title: "seo.home.title",
    layoutShowCurious: true,
})
useSeoMeta({
    title: () => t('seo.home.title') as string,
    description: () => t('seo.home.description') as string,
})

const baseText = 'An exceptional platform for career development. The current curriculum, skilled instructors, and hands-on learning are truly rewarding.'

const reviews: Array<{ text: string; avatarUrl: string; name: string; role: string }> = Array.from({ length: 30 }, (_, i) => ({
    text: baseText,
    avatarUrl: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${(i % 99) + 1}.jpg`,
    name: 'Brandon Michael',
    role: 'UX/UI Designer'
}))

const handleCTAClick = () => {
    console.log('CTA button clicked')
}

const heroAvatars = Array.from({ length: 6 }, (_, i) => ({
    src: `/images/home/hero/hero-${i + 1}.png`,
    alt: `卡通人物${i + 1}`
}))

const statsItems = [
    {
        value: '241K+',
        color: '#009D77',
        labelKey: 'pages.home.stats.testsToday'
    },
    {
        value: '172M+',
        color: '#EA4C89',
        labelKey: 'pages.home.stats.testsUS'
    },
    {
        value: '1460M+',
        color: '#FD9AC0',
        labelKey: 'pages.home.stats.totalTests'
    },
    {
        value: '91.2%',
        color: '#B273F2',
        labelKey: 'pages.home.stats.accurateRate'
    }
]

const whyCards = [
    {
        icon: '/images/home/3.png',
        alt: 'Better decision-making icon',
        iconColor: 'uno-text-amber-500',
        titleKey: 'pages.home.why.small1.title',
        descKey: 'pages.home.why.small1.desc'
    },
    {
        icon: '/images/home/4.png',
        alt: 'Enhanced relationships icon',
        iconColor: 'uno-text-pink-500',
        titleKey: 'pages.home.why.small2.title',
        descKey: 'pages.home.why.small2.desc'
    },
    {
        icon: '/images/home/5.png',
        alt: 'Career satisfaction icon',
        iconColor: 'uno-text-indigo-500',
        titleKey: 'pages.home.why.small3.title',
        descKey: 'pages.home.why.small3.desc'
    }
]

const howSteps = [
    {
        step: 1,
        bgClass: 'uno-bg-[#E8FAF5]',
        textClass: 'uno-text-[#009D77]',
        titleKey: 'pages.home.how.step1.title',
        descKey: 'pages.home.how.step1.desc'
    },
    {
        step: 2,
        bgClass: 'uno-bg-[#FFF5F9]',
        textClass: 'uno-text-[#EA4C89]',
        titleKey: 'pages.home.how.step2.title',
        descKey: 'pages.home.how.step2.desc'
    },
    {
        step: 3,
        bgClass: 'uno-bg-[#F5EFFC]',
        textClass: 'uno-text-[#932EFA]',
        titleKey: 'pages.home.how.step3.title',
        descKey: 'pages.home.how.step3.desc'
    }
]

const receiveCards = [
    {
        icon: '/images/home/7.png',
        alt: 'Comprehensive Personality Report',
        titleKey: 'pages.home.receive.card1.title',
        descKey: 'pages.home.receive.card1.desc'
    },
    {
        icon: '/images/home/8.png',
        alt: 'Personalized Course Recommendations',
        titleKey: 'pages.home.receive.card3.title',
        descKey: 'pages.home.receive.card3.desc'
    },
    {
        icon: '/images/home/9.png',
        alt: 'Skill Assessment Tests',
        titleKey: 'pages.home.receive.card5.title',
        descKey: 'pages.home.receive.card5.desc'
    },
    {
        icon: '/images/home/10.png',
        alt: 'Practical Daily Challenges',
        titleKey: 'pages.home.receive.card2.title',
        descKey: 'pages.home.receive.card2.desc'
    },
    {
        icon: '/images/home/11.png',
        alt: 'Learning and Development Library',
        titleKey: 'pages.home.receive.card4.title',
        descKey: 'pages.home.receive.card4.desc'
    },
    {
        icon: '/images/home/12.png',
        alt: 'Certificates of Achievement',
        titleKey: 'pages.home.receive.card6.title',
        descKey: 'pages.home.receive.card6.desc'
    }
]

const faqItems: Array<{ question: string; answer: string }> = [
    {
        question: 'Can I Track My Assignments and Grades?',
        answer:
            'Yes, the LMS offers a "Gradebook" where students can view their grades, mentor feedback on assignments, and class attendance data. You can view your grade and comments for each submission.'
    },
    {
        question: 'Does the LMS support video lessons and live classes?',
        answer: 'Yes, it supports both pre-recorded video lessons and live classes with interactive features.'
    },
    {
        question: 'How can I communicate with my instructor?',
        answer: 'You can use messaging tools, discussion boards, and scheduled office hours to communicate.'
    },
    {
        question: 'What support is available for students and instructors?',
        answer: 'Help center articles, email support, and live chat are available for both students and instructors.'
    },
    {
        question: 'Are there interactive features for students?Are there interactive features for students?Are there interactive features for students?Are there interactive features for students?Are there interactive features for students?',
        answer: 'Quizzes, assignments, polls, and peer discussions are available to enhance engagement.Quizzes, assignments, polls, and peer discussions are available to enhance engagement.Quizzes, assignments, polls, and peer discussions are available to enhance engagement.Quizzes, assignments, polls, and peer discussions are available to enhance engagement.Quizzes, assignments, polls, and peer discussions are available to enhance engagement.Quizzes, assignments, polls, and peer discussions are available to enhance engagement.Quizzes, assignments, polls, and peer discussions are available to enhance engagement.'
    }
]
</script>

<style scoped>
/* Home page specific styles */
</style>
