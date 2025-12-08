<template>
    <!-- 首页 -->
    <main class="uno-mx-auto uno-pt-16 sm:uno-pt-24 md:uno-pt-32">
        <!-- 第一块区域 -->
        <div class="uno-relative uno-rounded-xl uno-mx-auto uno-max-w-[80%] uno-border uno-border-transparent uno-px-4 sm:uno-px-6 md:uno-px-8">
            <!-- 内容区域 -->
            <div class="uno-flex uno-justify-start uno-items-center uno-flex-col">
                <div class="uno-flex uno-justify-start uno-items-center uno-flex-col uno-gap-16px">
                    <h1
                        class="uno-text-[#011813] uno-text-3xl sm:uno-text-5xl lg:uno-text-7xl uno-font-['Outfit'] uno-text-center uno-font-semibold">
                        {{ $t('home.title') }}
                    </h1>
                    <h2 class="uno-text-[#4E5255] uno-text-base sm:uno-text-lg uno-font-['Outfit'] uno-text-center">
                        {{ $t('home.description') }}
                    </h2>
                </div>



                <!-- 测试按钮 -->
                <button
                  class="uno-m-t-72px uno-inline-flex uno-items-center uno-justify-center uno-h-[56px] uno-px-6 uno-rounded-[24px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-[var(--ui-primary-foreground)] uno-font-['Outfit'] uno-transition uno-duration-200 disabled:uno-opacity-50 disabled:uno-cursor-not-allowed"
                  type="button"
                >
                  {{ $t('common.getStarted') }}
                </button>
            </div>
        </div>
        <!-- 第二块区域 hero -->
        <div class="uno-hero-section uno-w-full uno-py-10 sm:uno-py-16 md:uno-py-20 uno-mx-auto uno-max-w-[80%] uno-px-4">
            <div class="uno-container uno-mx-auto">
                <div class="uno-flex uno-justify-center uno-items-center uno-flex-wrap uno-gap-4 sm:uno-gap-6 md:uno-gap-8">
                    <!-- 六个卡通人物头像 -->
                    <div
                        class="uno-hero-avatar uno-relative uno-w-10 uno-h-20 sm:uno-w-32 sm:uno-h-48 md:uno-w-40 md:uno-h-64 uno-overflow-hidden uno-flex uno-items-center uno-justify-center">
                        <!-- 卡通人物1 -->
                        <NuxtImg src="/images/home/hero/hero-1.png" alt="卡通人物1" class="uno-w-full uno-h-full uno-object-contain" />
                    </div>
                    <div
                        class="uno-hero-avatar uno-relative uno-w-10 uno-h-20 sm:uno-w-32 sm:uno-h-48 md:uno-w-40 md:uno-h-64 uno-overflow-hidden uno-flex uno-items-center uno-justify-center">
                        <!-- 卡通人物2 -->
                        <NuxtImg src="/images/home/hero/hero-2.png" alt="卡通人物2" class="uno-w-full uno-h-full uno-object-contain" />
                    </div>
                    <div
                        class="uno-hero-avatar uno-relative uno-w-10 uno-h-20 sm:uno-w-32 sm:uno-h-48 md:uno-w-40 md:uno-h-64 uno-overflow-hidden uno-flex uno-items-center uno-justify-center">
                        <!-- 卡通人物3 -->
                        <NuxtImg src="/images/home/hero/hero-3.png" alt="卡通人物3" class="uno-w-full uno-h-full uno-object-contain" />
                    </div>
                    <div
                        class="uno-hero-avatar uno-relative uno-w-10 uno-h-20 sm:uno-w-32 sm:uno-h-48 md:uno-w-40 md:uno-h-64 uno-overflow-hidden uno-flex uno-items-center uno-justify-center">
                        <!-- 卡通人物4 -->
                        <NuxtImg src="/images/home/hero/hero-4.png" alt="卡通人物4" class="uno-w-full uno-h-full uno-object-contain" />
                    </div>
                    <div
                        class="uno-hero-avatar uno-relative uno-w-10 uno-h-20 sm:uno-w-32 sm:uno-h-48 md:uno-w-40 md:uno-h-64 uno-overflow-hidden uno-flex uno-items-center uno-justify-center">
                        <!-- 卡通人物5 -->
                        <NuxtImg src="/images/home/hero/hero-5.png" alt="卡通人物5" class="uno-w-full uno-h-full uno-object-contain" />
                    </div>
                    <div
                        class="uno-hero-avatar uno-relative uno-w-10 uno-h-20 sm:uno-w-32 sm:uno-h-48 md:uno-w-40 md:uno-h-64 uno-overflow-hidden uno-flex uno-items-center uno-justify-center">
                        <!-- 卡通人物6 -->
                        <NuxtImg src="/images/home/hero/hero-6.png" alt="卡通人物6" class="uno-w-full uno-h-full uno-object-contain" />
                    </div>
                </div>
            </div>
        </div>
        <!-- 第三块 数据统计区域 -->
        <div class="uno-data-stats uno-bg-[#F5F8FF] uno-py-10 sm:uno-py-12">
            <div class="uno-container uno-mx-auto uno-max-w-[80%] uno-px-4">
                <div class="uno-grid uno-grid-cols-2 md:uno-grid-cols-4 uno-gap-6">
                    <!-- 统计项1 -->
                    <div class="uno-text-center uno-p-6">

                        <div
                            class="uno-text-[#009D77] uno-text-3xl sm:uno-text-4xl md:uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-m-b-4px">
                            241K+</div>
                        <div class="uno-text-[#4E5255] uno-text-sm sm:uno-text-base md:uno-text-lg uno-font-['Outfit']">{{
                            $t('home.stats.testsToday') }}</div>
                    </div>
                    <!-- 统计项2 -->
                    <div class="uno-text-center uno-p-6">
                        <div
                            class="uno-text-[#EA4C89] uno-text-3xl sm:uno-text-4xl md:uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-m-b-4px">
                            172M+</div>
                        <div class="uno-text-[#4E5255] uno-text-sm sm:uno-text-base md:uno-text-lg uno-font-['Outfit']">{{
                            $t('home.stats.testsUS') }}</div>
                    </div>
                    <!-- 统计项3 -->
                    <div class="uno-text-center uno-p-6">
                        <div
                            class="uno-text-[#FD9AC0] uno-text-3xl sm:uno-text-4xl md:uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-m-b-4px">
                            1460M+</div>
                        <div class="uno-text-[#4E5255] uno-text-sm sm:uno-text-base md:uno-text-lg uno-font-['Outfit']">{{
                            $t('home.stats.totalTests') }}</div>
                    </div>
                    <!-- 统计项4 -->
                    <div class="uno-text-center uno-p-6">
                        <div
                            class="uno-text-[#B273F2] uno-text-3xl sm:uno-text-4xl md:uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-m-b-4px">
                            91.2%</div>
                        <div class="uno-text-[#4E5255] uno-text-sm sm:uno-text-base md:uno-text-lg uno-font-['Outfit']">{{
                            $t('home.stats.accurateRate') }}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 第四块 介绍区域 -->
        <div class="uno-intro-section uno-py-16 sm:uno-py-20 md:uno-py-24">
            <div class="uno-container uno-mx-auto uno-max-w-[80%] uno-px-4">
                <!-- Why You Should Take the Test 部分 -->
                <div class="uno-mb-24">
                    <h2 class="uno-text-[#011813] uno-text-5xl uno-font-['Outfit'] uno-text-center uno-font-semibold uno-m-b-12px">{{
                        $t('home.why.title') }}</h2>
                    <p class="uno-text-[#4E5255] uno-font-['Outfit'] uno-text-center">
                        {{ $t('home.why.desc') }}
                    </p>

                    <!-- 主要介绍卡片 -->
                    <div
                        class="uno-shadow-lg uno-mb-10 sm:uno-mb-12 uno-w-full md:uno-w-[70%] uno-bg-[#F8F8F8] uno-border-solid uno-border-[#E7E7E8] uno-border uno-rounded-3xl uno-p-16px sm:uno-p-24px uno-relative">
                        <!-- 装饰图片 -->
                        <NuxtImg src="/images/home/2.png" alt="decor" width="56" height="56"
                            class="uno-hidden md:uno-block uno-relative uno-top-[0] md:uno-left-246px" />

                        <div class="uno-flex uno-flex-col md:uno-flex-row uno-gap-6 md:uno-gap-10">
                            <div class="uno-w-full md:uno-w-[24%] uno-pt-24px">
                                <h3 class="uno-text-2xl uno-font-['Outfit'] uno-font-bold uno-mb-4">{{ $t('home.why.main.title') }}</h3>
                                <p class="uno-text-gray-600 uno-mb-6">{{ $t('home.why.main.desc') }}</p>
                                <!-- 分割线 -->
                                <div class="uno-w-full uno-h-[1px] uno-bg-[#E7E7E8] uno-my-6" />
                                <button
                                  class="uno-inline-flex uno-items-center uno-justify-center uno-h-[40px] uno-px-3 uno-rounded-[16px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-[var(--ui-primary-foreground)] uno-font-['Outfit'] uno-transition uno-duration-200 disabled:uno-opacity-50 disabled:uno-cursor-not-allowed"
                                  type="button"
                                >
                                  {{ $t('common.getStarted') }}
                                </button>
                            </div>
                            <div class="uno-w-full md:uno-w-[76%] uno-relative md:uno-top-[-6px]">
                                <!-- 图片 -->
                                <NuxtImg src="/images/home/1.png" alt="Self-awareness illustration" width="564"
                                    height="376" class="uno-rounded-lg uno-w-100%" />

                            </div>
                        </div>
                    </div>

                    <!-- 三个小介绍卡片 -->
                    <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-6 sm:uno-gap-8 uno-px-2 sm:uno-px-0">
                        <!-- 卡片1 -->
                        <div
                            class="uno-bg-[#F8F8F8] uno-border-solid uno-border-[#E7E7E8] uno-border uno-rounded-3xl uno-p-24px uno-shadow-lg uno-relative">
                            <div class="uno-mb-4 uno-text-amber-500">
                                <!-- 图标 -->
                                <NuxtImg src="/images/home/3.png" alt="Better decision-making icon" width="56"
                                    height="56" class="" />
                            </div>
                            <h3 class="uno-text-xl uno-font-['Outfit'] uno-font-bold uno-mb-3">{{ $t('home.why.small1.title') }}</h3>
                            <p class="uno-text-gray-600">{{ $t('home.why.small1.desc') }}</p>
                        </div>

                        <!-- 卡片2 -->
                        <div
                            class="uno-bg-[#F8F8F8] uno-border-solid uno-border-[#E7E7E8] uno-border uno-rounded-3xl uno-p-24px uno-shadow-lg uno-relative">
                            <div class="uno-mb-4 uno-text-pink-500">
                                <!-- 图标 -->
                                <NuxtImg src="/images/home/4.png" alt="Enhanced relationships icon" width="56"
                                    height="56" />
                            </div>
                            <h3 class="uno-text-xl uno-font-['Outfit'] uno-font-bold uno-mb-3">{{ $t('home.why.small2.title') }}</h3>
                            <p class="uno-text-gray-600">{{ $t('home.why.small2.desc') }}</p>
                        </div>

                        <!-- 卡片3 -->
                        <div
                            class="uno-bg-[#F8F8F8] uno-border-solid uno-border-[#E7E7E8] uno-border uno-rounded-3xl uno-p-24px uno-shadow-lg uno-relative">
                            <div class="uno-mb-4 uno-text-indigo-500">
                                <!-- 图标 -->
                                <NuxtImg src="/images/home/5.png" alt="Career satisfaction icon" width="56"
                                    height="56" />
                            </div>
                            <h3 class="uno-text-xl uno-font-['Outfit'] uno-font-bold uno-mb-3">{{ $t('home.why.small3.title') }}</h3>
                            <p class="uno-text-gray-600">{{ $t('home.why.small3.desc') }}</p>
                        </div>
                    </div>
                </div>

                <!-- How Does It Work 部分 -->
                <div class="uno-flex uno-flex-col md:uno-flex-row uno-gap-12 uno-items-center">
                    <!-- 左侧：标题、描述和按钮 -->
                    <div class="uno-w-full md:uno-w-1/2">
                        <h2 class="uno-text-4xl uno-font-['Outfit'] uno-font-bold uno-mb-8">{{ $t('home.how.title') }}</h2>
                        <p class="uno-text-gray-600 uno-mb-12">{{ $t('home.how.desc') }}</p>

                        <button
                          class="uno-inline-flex uno-items-center uno-justify-center uno-h-[40px] uno-px-3 uno-rounded-[999px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-[var(--ui-primary-foreground)] uno-font-['Outfit'] uno-transition uno-duration-200"
                          type="button"
                        >
                          {{ $t('common.getStarted') }}
                        </button>
                    </div>

                    <!-- 右侧：三个步骤卡片 -->
                    <div class="uno-w-full md:uno-w-1/2">
                        <div class="uno-flex uno-justify-start uno-items-start uno-flex-col uno-gap-6">
                            <div style="flex-shrink: 0"
                                class="uno-flex uno-justify-start uno-items-center uno-flex-row uno-gap-6 uno-py-24px uno-px-24px uno-bg-[#FFFFFF] uno-rounded-2xl uno-shadow-[0_20px_40px_0_rgba(0,157,119,0.08)]">
                                <div style="flex: none"
                                    class="uno-w-[56px] uno-h-[56px] uno-flex uno-justify-center uno-items-center uno-p-4 uno-bg-[#E8FAF5] uno-rounded-[28px]">
                                    <span
                                        class="uno-text-[#009D77] uno-text-4xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.36]">1</span>
                                </div>
                                <div class="uno-flex uno-justify-start uno-items-start uno-flex-col uno-gap-2">
                                    <p class="uno-text-[#011813] uno-text-2xl uno-font-['Outfit'] uno-font-semibold">{{
                                        $t('home.how.step1.title') }}</p>
                                    <p class="uno-w-[370px] max-sm:uno-w-full uno-text-[#4E5255] uno-font-['Outfit']">{{
                                        $t('home.how.step1.desc') }}</p>
                                </div>
                            </div>

                            <div style="flex-shrink: 0"
                                class="uno-flex uno-justify-start uno-items-center uno-flex-row uno-gap-6 uno-py-24px uno-px-24px uno-bg-[#FFFFFF] uno-rounded-2xl uno-shadow-[0_20px_40px_0_rgba(0,157,119,0.08)]">
                                <div style="flex: none"
                                    class="uno-w-[56px] uno-h-[56px] uno-flex uno-justify-center uno-items-center uno-p-4 uno-bg-[#FFF5F9] uno-rounded-[28px]">
                                    <span
                                        class="uno-text-[#EA4C89] uno-text-4xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.36]">2</span>
                                </div>
                                <div class="uno-flex uno-justify-start uno-items-start uno-flex-col uno-gap-2">
                                    <span class="uno-text-[#011813] uno-text-2xl uno-font-['Outfit'] uno-font-semibold">{{
                                        $t('home.how.step2.title') }}</span>
                                    <p class="uno-w-[370px] max-sm:uno-w-full uno-text-[#4E5255] uno-font-['Outfit']">{{
                                        $t('home.how.step2.desc') }}</p>
                                </div>
                            </div>

                            <div style="flex-shrink: 0"
                                class="uno-flex uno-justify-start uno-items-center uno-flex-row uno-gap-6 uno-py-24px uno-px-24px uno-bg-[#FFFFFF] uno-rounded-2xl uno-shadow-[0_20px_40px_0_rgba(0,157,119,0.08)]">
                                <div style="flex: none"
                                    class="uno-w-[56px] uno-h-[56px] uno-flex uno-justify-center uno-items-center uno-p-4 uno-bg-[#F5EFFC] uno-rounded-[28px]">
                                    <span
                                        class="uno-text-[#932EFA] uno-text-4xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.36]">3</span>
                                </div>
                                <div class="uno-flex uno-justify-start uno-items-start uno-flex-col uno-gap-2">
                                    <span class="uno-text-[#011813] uno-text-2xl uno-font-['Outfit'] uno-font-semibold">{{
                                        $t('home.how.step3.title') }}</span>
                                    <p class="uno-w-[370px] max-sm:uno-w-full uno-text-[#4E5255] uno-font-['Outfit']">{{
                                        $t('home.how.step3.desc') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 第五块 What You Will Receive 区域 -->
        <div class="uno-receive-section uno-py-16 sm:uno-py-20 md:uno-py-24 uno-bg-gray-50">
            <div class="uno-container uno-mx-auto uno-max-w-[80%] uno-px-4">
                <h2 class="uno-text-4xl uno-font-['Outfit'] uno-font-bold uno-text-center uno-mb-4">{{ $t('home.receive.title') }}</h2>
                <p class="uno-text-center uno-text-gray-600 uno-mb-16 uno-max-w-3xl uno-mx-auto">{{ $t('home.receive.desc') }}</p>

                <!-- 六个卡片布局 -->
                <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-6 sm:uno-gap-8">
                    <div class="uno-relative">
                        <div
                            class="uno-bg-white uno-rounded-2xl uno-shadow-lg uno-p-24px uno-border uno-border-[#E7E7E8] uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-12px uno-relative uno-z-[1] uno-w-full uno-min-h-[220px]">
                            <NuxtImg src="/images/home/7.png" alt="Comprehensive Personality Report" width="72"
                                height="72" />
                            <h3 class="uno-text-xl uno-font-['Outfit'] uno-font-bold">{{ $t('home.receive.card1.title') }}</h3>
                            <p class="uno-text-gray-600">{{ $t('home.receive.card1.desc') }}</p>
                        </div>
                        <div
                            class="uno-bg-white uno-rounded-2xl uno-shadow-lg uno-p-24px uno-border uno-border-[#E7E7E8] uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-12px uno-relative uno-z-[3] uno-w-full uno-min-h-[220px] uno-m-t-16px md:uno-m-t-[-20px] uno-ml-0">
                            <NuxtImg src="/images/home/10.png" alt="Practical Daily Challenges" width="72"
                                height="72" />
                            <h3 class="uno-text-xl uno-font-['Outfit'] uno-font-bold">{{ $t('home.receive.card2.title') }}</h3>
                            <p class="uno-text-gray-600">{{ $t('home.receive.card2.desc') }}</p>
                        </div>
                    </div>

                    <div class="uno-relative">
                        <div
                            class="uno-bg-white uno-rounded-2xl uno-shadow-lg uno-p-24px uno-border uno-border-[#E7E7E8] uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-12px uno-relative uno-z-[1] uno-w-full uno-min-h-[220px]">
                            <NuxtImg src="/images/home/8.png" alt="Personalized Course Recommendations" width="72"
                                height="72" />
                            <h3 class="uno-text-xl uno-font-['Outfit'] uno-font-bold">{{ $t('home.receive.card3.title') }}</h3>
                            <p class="uno-text-gray-600">{{ $t('home.receive.card3.desc') }}</p>
                        </div>
                        <div
                            class="uno-bg-white uno-rounded-2xl uno-shadow-lg uno-p-24px uno-border uno-border-[#E7E7E8] uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-12px uno-relative uno-z-[3] uno-w-full uno-min-h-[220px] uno-m-t-16px md:uno-m-t-[-20px] uno-ml-0">
                            <NuxtImg src="/images/home/11.png" alt="Learning and Development Library" width="72"
                                height="72" />
                            <h3 class="uno-text-xl uno-font-['Outfit'] uno-font-bold">{{ $t('home.receive.card4.title') }}</h3>
                            <p class="uno-text-gray-600">{{ $t('home.receive.card4.desc') }}</p>
                        </div>
                    </div>

                    <div class="uno-relative uno-hidden md:uno-block">
                        <div
                            class="uno-bg-white uno-rounded-2xl uno-shadow-lg uno-p-24px uno-border uno-border-[#E7E7E8] uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-12px uno-relative uno-z-[1] uno-w-full uno-min-h-[220px]">
                            <NuxtImg src="/images/home/9.png" alt="Skill Assessment Tests" width="72" height="72" />
                            <h3 class="uno-text-xl uno-font-['Outfit'] uno-font-bold">{{ $t('home.receive.card5.title') }}</h3>
                            <p class="uno-text-gray-600">{{ $t('home.receive.card5.desc') }}</p>
                        </div>
                        <div
                            class="uno-bg-white uno-rounded-2xl uno-shadow-lg uno-p-24px uno-border uno-border-[#E7E7E8] uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-12px uno-relative uno-z-[3] uno-w-full uno-min-h-[220px] uno-m-t-16px md:uno-m-t-[-20px] uno-ml-0">
                            <NuxtImg src="/images/home/12.png" alt="Certificates of Achievement" width="72"
                                height="72" />
                            <h3 class="uno-text-xl uno-font-['Outfit'] uno-font-bold">{{ $t('home.receive.card6.title') }}</h3>
                            <p class="uno-text-gray-600">{{ $t('home.receive.card6.desc') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 第六块 客户评价模块 -->
        <TestimonialsSection :title="'Trusted by 20,000+ customers'"
            :description="'Be always were in form of volunteers range time is mediatingappositive the in our affidavit how solitary saw more in his not'"
            :rating="5" :reviews="reviews" />

        <FAQSection :title="'Frequently Asked Questions'"
            :description="'Frequently Asked Questions offers a quick answers to common queries, guiding users through features and functionalities efficiently.'"
            :items="faqItems" />

        <GradientCTASection @button-click="handleCTAClick" />
    </main>
</template>

<script setup lang="ts">
import GradientCTASection from '../../components/GradientCTASection.vue';
import TestimonialsSection from '../../components/TestimonialsSection.vue';
import FAQSection from '../../components/FAQSection.vue';
// const { t } = useI18n()
// definePageMeta({
//   title: t('home.title') as string
// })
// useSeoMeta({
//   title: () => t('home.title') as string,
//   description: () => t('home.description') as string,
//   ogTitle: () => t('home.title') as string,
//   ogDescription: () => t('home.description') as string
// })

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
        question: 'Are there interactive features for students?',
        answer: 'Quizzes, assignments, polls, and peer discussions are available to enhance engagement.'
    }
]
</script>

<style scoped>
/* Home page specific styles */
</style>
