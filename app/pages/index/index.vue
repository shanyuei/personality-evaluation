<template>
    <!-- 首页 -->
    <main class="mx-auto pt-16 sm:pt-24 md:pt-32">
        <!-- 第一块区域 -->
        <div class="relative rounded-xl mx-auto max-w-[1200px] border border-transparent px-4 sm:px-6 md:px-8">
            <!-- 内容区域 -->
            <div class="flex justify-start items-center flex-col   ">
                <div class="flex justify-start items-center flex-col gap-16px">
                    <h1
                        class=" text-[#011813] text-3xl sm:text-5xl lg:text-7xl font-['Outfit'] text-center font-semibold">
                        {{ $t('home.title') }}
                    </h1>
                    <h2 class="text-[#4E5255] text-base sm:text-lg font-['Outfit'] text-center">
                        {{ $t('home.description') }}
                    </h2>
                </div>



                <!-- 测试按钮 -->
                <CTAButton :text="$t('common.getStarted')" btn-class="m-t-72px" size="lg" rounded="pill"
                    bg-color="#009D77" hover-bg-color="#008A68" active-bg-color="#007759" />
            </div>
        </div>
        <!-- 第二块区域 hero -->
        <div class="hero-section w-full py-10 sm:py-16 md:py-20 mx-auto max-w-[1200px] px-4">
            <div class="container mx-auto ">
                <div class="flex justify-center items-center flex-wrap gap-4 sm:gap-6 md:gap-8">
                    <!-- 六个卡通人物头像 -->
                    <div
                        class="hero-avatar relative w-10 h-20 sm:w-32 sm:h-48 md:w-40 md:h-64 overflow-hidden flex items-center justify-center">
                        <!-- 卡通人物1 -->
                        <NuxtImg src="/images/home/hero/hero-1.png" alt="卡通人物1" class="w-full h-full object-contain" />
                    </div>
                    <div
                        class="hero-avatar relative w-10 h-20 sm:w-32 sm:h-48 md:w-40 md:h-64 overflow-hidden flex items-center justify-center">
                        <!-- 卡通人物2 -->
                        <NuxtImg src="/images/home/hero/hero-2.png" alt="卡通人物2" class="w-full h-full object-contain" />
                    </div>
                    <div
                        class="hero-avatar relative w-10 h-20 sm:w-32 sm:h-48 md:w-40 md:h-64 overflow-hidden flex items-center justify-center">
                        <!-- 卡通人物3 -->
                        <NuxtImg src="/images/home/hero/hero-3.png" alt="卡通人物3" class="w-full h-full object-contain" />
                    </div>
                    <div
                        class="hero-avatar relative w-10 h-20 sm:w-32 sm:h-48 md:w-40 md:h-64 overflow-hidden flex items-center justify-center">
                        <!-- 卡通人物4 -->
                        <NuxtImg src="/images/home/hero/hero-4.png" alt="卡通人物4" class="w-full h-full object-contain" />
                    </div>
                    <div
                        class="hero-avatar relative w-10 h-20 sm:w-32 sm:h-48 md:w-40 md:h-64 overflow-hidden flex items-center justify-center">
                        <!-- 卡通人物5 -->
                        <NuxtImg src="/images/home/hero/hero-5.png" alt="卡通人物5" class="w-full h-full object-contain" />
                    </div>
                    <div
                        class="hero-avatar relative w-10 h-20 sm:w-32 sm:h-48 md:w-40 md:h-64 overflow-hidden flex items-center justify-center">
                        <!-- 卡通人物6 -->
                        <NuxtImg src="/images/home/hero/hero-6.png" alt="卡通人物6" class="w-full h-full object-contain" />
                    </div>
                </div>
            </div>
        </div>
        <!-- 第三块 数据统计区域 -->
        <div class="data-stats bg-[#F5F8FF] py-10 sm:py-12">
            <div class="container mx-auto max-w-[1200px] px-4">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <!-- 统计项1 -->
                    <div class="text-center p-6">

                        <div
                            class="text-[#009D77] text-3xl sm:text-4xl md:text-5xl font-['Outfit'] font-semibold m-b-4px">
                            241K+</div>
                        <div class="text-[#4E5255] text-sm sm:text-base md:text-lg font-['Outfit']">{{
                            $t('home.stats.testsToday') }}</div>
                    </div>
                    <!-- 统计项2 -->
                    <div class="text-center p-6">
                        <div
                            class="text-[#EA4C89] text-3xl sm:text-4xl md:text-5xl font-['Outfit'] font-semibold m-b-4px">
                            172M+</div>
                        <div class="text-[#4E5255] text-sm sm:text-base md:text-lg font-['Outfit']">{{
                            $t('home.stats.testsUS') }}</div>
                    </div>
                    <!-- 统计项3 -->
                    <div class="text-center p-6">
                        <div
                            class="text-[#FD9AC0] text-3xl sm:text-4xl md:text-5xl font-['Outfit'] font-semibold m-b-4px">
                            1460M+</div>
                        <div class="text-[#4E5255] text-sm sm:text-base md:text-lg font-['Outfit']">{{
                            $t('home.stats.totalTests') }}</div>
                    </div>
                    <!-- 统计项4 -->
                    <div class="text-center p-6">
                        <div
                            class="text-[#B273F2] text-3xl sm:text-4xl md:text-5xl font-['Outfit'] font-semibold m-b-4px">
                            91.2%</div>
                        <div class="text-[#4E5255] text-sm sm:text-base md:text-lg font-['Outfit']">{{
                            $t('home.stats.accurateRate') }}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 第四块 介绍区域 -->
        <div class="intro-section py-16 sm:py-20 md:py-24">
            <div class="container mx-auto max-w-[1200px] px-4">
                <!-- Why You Should Take the Test 部分 -->
                <div class="mb-24">
                    <h2 class="text-[#011813] text-5xl font-['Outfit'] text-center font-semibold m-b-12px">{{
                        $t('home.why.title') }}</h2>
                    <p class="text-[#4E5255] font-['Outfit'] text-center">
                        {{ $t('home.why.desc') }}
                    </p>

                    <!-- 主要介绍卡片 -->
                    <div
                        class="shadow-lg mb-10 sm:mb-12 w-full md:w-[70%] bg-[#F8F8F8] border-solid border-[#E7E7E8] border rounded-3xl p-16px sm:p-24px relative">
                        <!-- 装饰图片 -->
                        <NuxtImg src="/images/home/2.png" alt="decor" width="56" height="56"
                            class="hidden md:block relative top-[0] md:left-246px" />

                        <div class="flex flex-col md:flex-row gap-6 md:gap-10">
                            <div class="w-full md:w-[24%] pt-24px">
                                <h3 class="text-2xl font-['Outfit'] font-bold mb-4">{{ $t('home.why.main.title') }}</h3>
                                <p class="text-gray-600 mb-6">{{ $t('home.why.main.desc') }}</p>
                                <!-- 分割线 -->
                                <div class="w-full h-[1px] bg-[#E7E7E8] my-6" />
                                <CTAButton :text="$t('common.getStarted')" size="sm" rounded="full" bg-color="#009D77"
                                    hover-bg-color="#008A68" active-bg-color="#007759" />
                            </div>
                            <div class="w-full md:w-[76%]  relative md:top-[-6px]">
                                <!-- 图片 -->
                                <NuxtImg src="/images/home/1.png" alt="Self-awareness illustration" width="564"
                                    height="376" class=" rounded-lg w-100%" />

                            </div>
                        </div>
                    </div>

                    <!-- 三个小介绍卡片 -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-0">
                        <!-- 卡片1 -->
                        <div
                            class="bg-[#F8F8F8] border-solid border-[#E7E7E8] border rounded-3xl p-24px shadow-lg relative">
                            <div class="mb-4 text-amber-500">
                                <!-- 图标 -->
                                <NuxtImg src="/images/home/3.png" alt="Better decision-making icon" width="56"
                                    height="56" class="" />
                            </div>
                            <h3 class="text-xl font-['Outfit'] font-bold mb-3">{{ $t('home.why.small1.title') }}</h3>
                            <p class="text-gray-600">{{ $t('home.why.small1.desc') }}</p>
                        </div>

                        <!-- 卡片2 -->
                        <div
                            class="bg-[#F8F8F8] border-solid border-[#E7E7E8] border rounded-3xl p-24px shadow-lg relative">
                            <div class="mb-4 text-pink-500">
                                <!-- 图标 -->
                                <NuxtImg src="/images/home/4.png" alt="Enhanced relationships icon" width="56"
                                    height="56" />
                            </div>
                            <h3 class="text-xl font-['Outfit'] font-bold mb-3">{{ $t('home.why.small2.title') }}</h3>
                            <p class="text-gray-600">{{ $t('home.why.small2.desc') }}</p>
                        </div>

                        <!-- 卡片3 -->
                        <div
                            class="bg-[#F8F8F8] border-solid border-[#E7E7E8] border rounded-3xl p-24px shadow-lg relative">
                            <div class="mb-4 text-indigo-500">
                                <!-- 图标 -->
                                <NuxtImg src="/images/home/5.png" alt="Career satisfaction icon" width="56"
                                    height="56" />
                            </div>
                            <h3 class="text-xl font-['Outfit'] font-bold mb-3">{{ $t('home.why.small3.title') }}</h3>
                            <p class="text-gray-600">{{ $t('home.why.small3.desc') }}</p>
                        </div>
                    </div>
                </div>

                <!-- How Does It Work 部分 -->
                <div class="flex flex-col md:flex-row gap-12 items-center">
                    <!-- 左侧：标题、描述和按钮 -->
                    <div class="w-full md:w-1/2">
                        <h2 class="text-4xl font-['Outfit'] font-bold mb-8">{{ $t('home.how.title') }}</h2>
                        <p class="text-gray-600 mb-12">{{ $t('home.how.desc') }}</p>

                        <CTAButton :text="$t('common.getStarted')" size="sm" rounded="full" bg-color="#009D77"
                            hover-bg-color="#008A68" active-bg-color="#007759" />
                    </div>

                    <!-- 右侧：三个步骤卡片 -->
                    <div class="w-full md:w-1/2">
                        <div class="flex justify-start items-start flex-col gap-6">
                            <div style="flex-shrink: 0"
                                class="flex justify-start items-center flex-row gap-6 py-24px px-24px bg-[#FFFFFF] rounded-2xl shadow-[0_20px_40px_0_rgba(0,157,119,0.08)]">
                                <div style="flex: none"
                                    class="w-[56px] h-[56px] flex justify-center items-center p-4 bg-[#E8FAF5] rounded-[28px]">
                                    <span
                                        class="text-[#009D77] text-4xl font-['Outfit'] font-semibold leading-[1.36]">1</span>
                                </div>
                                <div class="flex justify-start items-start flex-col gap-2">
                                    <p class="text-[#011813] text-2xl font-['Outfit'] font-semibold">{{
                                        $t('home.how.step1.title') }}</p>
                                    <p class="w-[370px] max-sm:w-full text-[#4E5255] font-['Outfit']">{{
                                        $t('home.how.step1.desc') }}</p>
                                </div>
                            </div>

                            <div style="flex-shrink: 0"
                                class="flex justify-start items-center flex-row gap-6 py-24px px-24px bg-[#FFFFFF] rounded-2xl shadow-[0_20px_40px_0_rgba(0,157,119,0.08)]">
                                <div style="flex: none"
                                    class="w-[56px] h-[56px] flex justify-center items-center p-4 bg-[#FFF5F9] rounded-[28px]">
                                    <span
                                        class="text-[#EA4C89] text-4xl font-['Outfit'] font-semibold leading-[1.36]">2</span>
                                </div>
                                <div class="flex justify-start items-start flex-col gap-2">
                                    <span class="text-[#011813] text-2xl font-['Outfit'] font-semibold">{{
                                        $t('home.how.step2.title') }}</span>
                                    <p class="w-[370px] max-sm:w-full text-[#4E5255] font-['Outfit']">{{
                                        $t('home.how.step2.desc') }}</p>
                                </div>
                            </div>

                            <div style="flex-shrink: 0"
                                class="flex justify-start items-center flex-row gap-6 py-24px px-24px bg-[#FFFFFF] rounded-2xl shadow-[0_20px_40px_0_rgba(0,157,119,0.08)]">
                                <div style="flex: none"
                                    class="w-[56px] h-[56px] flex justify-center items-center p-4 bg-[#F5EFFC] rounded-[28px]">
                                    <span
                                        class="text-[#932EFA] text-4xl font-['Outfit'] font-semibold leading-[1.36]">3</span>
                                </div>
                                <div class="flex justify-start items-start flex-col gap-2">
                                    <span class="text-[#011813] text-2xl font-['Outfit'] font-semibold">{{
                                        $t('home.how.step3.title') }}</span>
                                    <p class="w-[370px] max-sm:w-full text-[#4E5255] font-['Outfit']">{{
                                        $t('home.how.step3.desc') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 第五块 What You Will Receive 区域 -->
        <div class="receive-section py-16 sm:py-20 md:py-24 bg-gray-50">
            <div class="container mx-auto max-w-[1200px] px-4">
                <h2 class="text-4xl font-['Outfit'] font-bold text-center mb-4">{{ $t('home.receive.title') }}</h2>
                <p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto">{{ $t('home.receive.desc') }}</p>

                <!-- 六个卡片布局 -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    <div class="relative ">
                        <div
                            class="bg-white rounded-2xl shadow-lg p-24px border border-[#E7E7E8] flex flex-col items-center text-center gap-12px relative z-[1] w-full min-h-[220px]">
                            <NuxtImg src="/images/home/7.png" alt="Comprehensive Personality Report" width="72"
                                height="72" />
                            <h3 class="text-xl font-['Outfit'] font-bold">{{ $t('home.receive.card1.title') }}</h3>
                            <p class="text-gray-600">{{ $t('home.receive.card1.desc') }}</p>
                        </div>
                        <div
                            class="bg-white rounded-2xl shadow-lg p-24px border border-[#E7E7E8] flex flex-col items-center text-center gap-12px relative z-[3] w-full min-h-[220px] m-t-16px md:m-t-[-20px] ml-0">
                            <NuxtImg src="/images/home/10.png" alt="Practical Daily Challenges" width="72"
                                height="72" />
                            <h3 class="text-xl font-['Outfit'] font-bold">{{ $t('home.receive.card2.title') }}</h3>
                            <p class="text-gray-600">{{ $t('home.receive.card2.desc') }}</p>
                        </div>
                    </div>

                    <div class="relative">
                        <div
                            class="bg-white rounded-2xl shadow-lg p-24px border border-[#E7E7E8] flex flex-col items-center text-center gap-12px relative z-[1] w-full min-h-[220px]">
                            <NuxtImg src="/images/home/8.png" alt="Personalized Course Recommendations" width="72"
                                height="72" />
                            <h3 class="text-xl font-['Outfit'] font-bold">{{ $t('home.receive.card3.title') }}</h3>
                            <p class="text-gray-600">{{ $t('home.receive.card3.desc') }}</p>
                        </div>
                        <div
                            class="bg-white rounded-2xl shadow-lg p-24px border border-[#E7E7E8] flex flex-col items-center text-center gap-12px relative z-[3] w-full min-h-[220px] m-t-16px md:m-t-[-20px] ml-0">
                            <NuxtImg src="/images/home/11.png" alt="Learning and Development Library" width="72"
                                height="72" />
                            <h3 class="text-xl font-['Outfit'] font-bold">{{ $t('home.receive.card4.title') }}</h3>
                            <p class="text-gray-600">{{ $t('home.receive.card4.desc') }}</p>
                        </div>
                    </div>

                    <div class="relative hidden md:block">
                        <div
                            class="bg-white rounded-2xl shadow-lg p-24px border border-[#E7E7E8] flex flex-col items-center text-center gap-12px relative z-[1] w-full min-h-[220px]">
                            <NuxtImg src="/images/home/9.png" alt="Skill Assessment Tests" width="72" height="72" />
                            <h3 class="text-xl font-['Outfit'] font-bold">{{ $t('home.receive.card5.title') }}</h3>
                            <p class="text-gray-600">{{ $t('home.receive.card5.desc') }}</p>
                        </div>
                        <div
                            class="bg-white rounded-2xl shadow-lg p-24px border border-[#E7E7E8] flex flex-col items-center text-center gap-12px relative z-[3] w-full min-h-[220px] m-t-16px md:m-t-[-20px] ml-0">
                            <NuxtImg src="/images/home/12.png" alt="Certificates of Achievement" width="72"
                                height="72" />
                            <h3 class="text-xl font-['Outfit'] font-bold">{{ $t('home.receive.card6.title') }}</h3>
                            <p class="text-gray-600">{{ $t('home.receive.card6.desc') }}</p>
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
import CTAButton from '../../components/CTAButton.vue'
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
