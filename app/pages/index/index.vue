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
                        class="uno-text-[#4E5255] uno-text-xs sm:uno-text-sm md:uno-text-lg uno-font-['Outfit'] uno-text-center">
                        {{ $t('pages.home.description') }}
                    </h2>
                </div>

                <!-- 测试按钮 -->
                <button
                    class="uno-m-t-32px sm:uno-m-t-48px md:uno-m-t-72px uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[8px] sm:uno-gap-[12px] md:uno-gap-[18px] uno-py-2 sm:uno-py-3 md:uno-py-4 uno-pr-2 sm:uno-pr-3 md:uno-pr-3 uno-pl-[20px] sm:uno-pl-[24px] md:uno-pl-[48px] uno-bg-[#009D77] hover:uno-bg-[var(--color-green-2)] uno-text-[#FFFFFF] uno-text-[14px] sm:uno-text-[18px] md:uno-text-[28px] uno-font-['Outfit'] uno-font-medium uno-rounded-[149.99px] uno-transition uno-duration-200 disabled:uno-opacity-50 disabled:uno-cursor-not-allowed"
                    type="button"
                    @click="navigateTo('/test')"
                >
                    Take the Test
                    <NuxtImg src="/images/common/go-arrow-1.png" alt="arrow-right" width="24" height="24"
                        class="sm:uno-w-[32px] sm:uno-h-[32px] md:uno-w-[51px] md:uno-h-[51px]" />
                </button>
            </div>
        </div>
        <!-- 第二块区域 hero -->
        <div class="page-container uno-hero-section uno-w-full uno-my-12 ">
            <div
                class="uno-flex uno-justify-center uno-items-center uno-gap-2 sm:uno-gap-3 md:uno-gap-4 lg:uno-gap-6 xl:uno-gap-6">
                <!-- 六个卡通人物头像 -->
                <!-- <NuxtImg src="/images/home/hero/hero-1.png" alt="卡通人物1" width="180" height="300" />
                <NuxtImg src="/images/home/hero/hero-2.png" alt="卡通人物2" width="180" height="300" />
                <NuxtImg src="/images/home/hero/hero-3.png" alt="卡通人物3" width="180" height="300" />
                <NuxtImg src="/images/home/hero/hero-4.png" alt="卡通人物4" width="180" height="300" />
                <NuxtImg src="/images/home/hero/hero-5.png" alt="卡通人物5" width="180" height="300" />
                <NuxtImg src="/images/home/hero/hero-6.png" alt="卡通人物6" width="180" height="300" /> -->
                <div
                    class="uno-hero-avatar uno-relative uno-w-26 uno-h-34  md:uno-w-32 md:uno-h-48 lg:uno-w-32 lg:uno-h-48 xl:uno-w-40 xl:uno-h-64 uno-overflow-hidden uno-flex uno-items-center uno-justify-center">
                    <NuxtImg src="/images/home/hero/hero-1.png" alt="卡通人物1"
                        class="uno-w-full uno-h-full uno-object-contain" />
                </div>
                <div
                    class="uno-hero-avatar uno-relative uno-w-26 uno-h-34  md:uno-w-32 md:uno-h-48 lg:uno-w-32 lg:uno-h-48 xl:uno-w-40 xl:uno-h-64 uno-overflow-hidden uno-flex uno-items-center uno-justify-center">

                    <NuxtImg src="/images/home/hero/hero-2.png" alt="卡通人物2"
                        class="uno-w-full uno-h-full uno-object-contain" />
                </div>
                <div
                    class="uno-hero-avatar uno-relative uno-w-26 uno-h-34  md:uno-w-32 md:uno-h-48 lg:uno-w-32 lg:uno-h-48 xl:uno-w-40 xl:uno-h-64 uno-overflow-hidden uno-flex uno-items-center uno-justify-center">

                    <NuxtImg src="/images/home/hero/hero-3.png" alt="卡通人物3"
                        class="uno-w-full uno-h-full uno-object-contain" />
                </div>
                <div
                    class="uno-hero-avatar uno-relative uno-w-26 uno-h-34  md:uno-w-32 md:uno-h-48 lg:uno-w-32 lg:uno-h-48 xl:uno-w-40 xl:uno-h-64 uno-overflow-hidden uno-flex uno-items-center uno-justify-center">

                    <NuxtImg src="/images/home/hero/hero-4.png" alt="卡通人物4"
                        class="uno-w-full uno-h-full uno-object-contain" />
                </div>
                <div
                    class="uno-hero-avatar uno-relative uno-w-26 uno-h-34  md:uno-w-32 md:uno-h-48 lg:uno-w-32 lg:uno-h-48 xl:uno-w-40 xl:uno-h-64 uno-overflow-hidden uno-flex uno-items-center uno-justify-center">

                    <NuxtImg src="/images/home/hero/hero-5.png" alt="卡通人物5"
                        class="uno-w-full uno-h-full uno-object-contain" />
                </div>
                <div
                    class="uno-hero-avatar uno-relative uno-w-26 uno-h-34  md:uno-w-32 md:uno-h-48 lg:uno-w-32 lg:uno-h-48 xl:uno-w-40 xl:uno-h-64 uno-overflow-hidden uno-flex uno-items-center uno-justify-center">

                    <NuxtImg src="/images/home/hero/hero-6.png" alt="卡通人物6"
                        class="uno-w-full uno-h-full uno-object-contain" />
                </div>
            </div>
        </div>
        <!-- 第三块 数据统计区域 -->
        <div class="uno-data-stats uno-bg-[#F5F8FF] uno-my-12">
            <div class="page-container uno-px-4">
                <div class="uno-grid uno-grid-cols-2 md:uno-grid-cols-4 uno-gap-3 sm:uno-gap-4 md:uno-gap-6">
                    <!-- 统计项1 -->
                    <div class="uno-text-center uno-p-3 sm:uno-p-4 md:uno-p-6">
                        <div
                            class="uno-text-[#009D77] uno-text-lg sm:uno-text-2xl md:uno-text-4xl lg:uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-m-b-1px sm:uno-m-b-2px md:uno-m-b-4px">
                            241K+</div>
                        <div
                            class="uno-text-[#4E5255] uno-text-xs sm:uno-text-sm md:uno-text-base lg:uno-text-lg uno-font-['Outfit']">
                            {{
                                $t('pages.home.stats.testsToday') }}</div>
                    </div>
                    <!-- 统计项2 -->
                    <div class="uno-text-center uno-p-3 sm:uno-p-4 md:uno-p-6">
                        <div
                            class="uno-text-[#EA4C89] uno-text-lg sm:uno-text-2xl md:uno-text-4xl lg:uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-m-b-1px sm:uno-m-b-2px md:uno-m-b-4px">
                            172M+</div>
                        <div
                            class="uno-text-[#4E5255] uno-text-xs sm:uno-text-sm md:uno-text-base lg:uno-text-lg uno-font-['Outfit']">
                            {{
                                $t('pages.home.stats.testsUS') }}</div>
                    </div>
                    <!-- 统计项3 -->
                    <div class="uno-text-center uno-p-3 sm:uno-p-4 md:uno-p-6">
                        <div
                            class="uno-text-[#FD9AC0] uno-text-lg sm:uno-text-2xl md:uno-text-4xl lg:uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-m-b-1px sm:uno-m-b-2px md:uno-m-b-4px">
                            1460M+</div>
                        <div
                            class="uno-text-[#4E5255] uno-text-xs sm:uno-text-sm md:uno-text-base lg:uno-text-lg uno-font-['Outfit']">
                            {{
                                $t('pages.home.stats.totalTests') }}</div>
                    </div>
                    <!-- 统计项4 -->
                    <div class="uno-text-center uno-p-3 sm:uno-p-4 md:uno-p-6">
                        <div
                            class="uno-text-[#B273F2] uno-text-lg sm:uno-text-2xl md:uno-text-4xl lg:uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-m-b-1px sm:uno-m-b-2px md:uno-m-b-4px">
                            91.2%</div>
                        <div
                            class="uno-text-[#4E5255] uno-text-xs sm:uno-text-sm md:uno-text-base lg:uno-text-lg uno-font-['Outfit']">
                            {{
                                $t('pages.home.stats.accurateRate') }}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 第四块 介绍区域 -->
        <div class="page-container uno-intro-section uno-py-12 sm:uno-py-16 md:uno-py-20 lg:uno-py-24">
            <div class="uno-px-4">
                <!-- Why You Should Take the Test 部分 -->
                <div class="uno-mb-12 sm:uno-mb-16 md:uno-mb-20 lg:uno-mb-24">
                    <h2
                        class="uno-text-[#011813] uno-text-2xl sm:uno-text-3xl md:uno-text-4xl lg:uno-text-5xl uno-font-['Outfit'] uno-text-center uno-font-semibold uno-m-b-6px sm:uno-m-b-8px md:uno-m-b-12px">
                        {{
                            $t('pages.home.why.title') }}</h2>
                    <p
                        class="uno-text-[#4E5255] uno-font-['Outfit'] uno-text-center uno-text-sm sm:uno-text-base uno-mb-3 sm:uno-mb-4">
                        {{ $t('pages.home.why.desc') }}
                    </p>

                    <!-- 主要介绍卡片 -->
                    <div
                        class="uno-shadow-lg uno-mb-6 sm:uno-mb-8 md:uno-mb-10 lg:uno-mb-12 uno-w-full md:uno-w-[78%] uno-bg-[#F8F8F8] uno-border-solid uno-border-[#E7E7E8] uno-border uno-rounded-3xl uno-p-8px sm:uno-p-12px md:uno-p-16px lg:uno-p-24px uno-relative">
                        <!-- 装饰图片 -->
                        <NuxtImg src="/images/home/2.png" alt="decor" width="32" height="32"
                            class="uno-hidden md:uno-block uno-relative uno-top-[0] md:uno-left-246px sm:uno-w-[40px] sm:uno-h-[40px] md:uno-w-[56px] md:uno-h-[56px]" />

                        <div
                            class="uno-flex uno-flex-col md:uno-flex-row uno-gap-3 sm:uno-gap-4 md:uno-gap-6 lg:uno-gap-10">
                            <div class="uno-w-full md:uno-w-[24%] uno-pt-12px sm:uno-pt-16px md:uno-pt-24px">
                                <h3
                                    class="uno-text-lg sm:uno-text-xl md:uno-text-2xl uno-font-['Outfit'] uno-font-bold uno-mb-2 sm:uno-mb-3 md:uno-mb-4">
                                    {{
                                        $t('pages.home.why.main.title') }}</h3>
                                <p
                                    class="uno-text-gray-600 uno-text-sm sm:uno-text-base uno-mb-3 sm:uno-mb-4 md:uno-mb-6">
                                    {{ $t('pages.home.why.main.desc') }}</p>
                                <!-- 分割线 -->
                                <div class="uno-w-full uno-h-[1px] uno-bg-[#E7E7E8] uno-my-3 sm:uno-my-4 md:uno-my-6" />
                                <button
                                    class="uno-m-t-12px sm:uno-m-t-16px md:uno-m-t-24px uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[6px] sm:uno-gap-[8px] md:uno-gap-[12px] uno-py-2 sm:uno-py-2 uno-pr-[3px] sm:uno-pr-[4px] md:uno-pr-[6px] uno-pl-[12px] sm:uno-pl-[16px] md:uno-pl-[24px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-[#FFFFFF] uno-text-[12px] sm:uno-text-[14px] md:uno-text-[18px] uno-font-['Outfit'] uno-font-medium uno-rounded-[149.99px] uno-transition uno-duration-200 disabled:uno-opacity-50 disabled:uno-cursor-not-allowed"
                                    type="button"
                                    @click="navigateTo('/test')"
                                >
                                    {{ $t('common.getStarted') }}
                                    <NuxtImg src="/images/common/go-arrow-1.png" alt="arrow-right" width="20"
                                        height="20"
                                        class="sm:uno-w-[24px] sm:uno-h-[24px] md:uno-w-[50px] md:uno-h-[50px]" />
                                </button>
                            </div>
                            <div class="uno-w-full md:uno-w-[76%] uno-relative md:uno-top-[-6px]">
                                <!-- 图片 -->
                                <NuxtImg src="/images/home/1.png" alt="Self-awareness illustration" width="300"
                                    height="200"
                                    class="uno-rounded-lg uno-w-full sm:uno-w-100% md:uno-w-[564px] md:uno-h-[376px]" />

                            </div>
                        </div>
                    </div>

                    <!-- 三个小介绍卡片 -->
                    <div
                        class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-3 sm:uno-gap-4 md:uno-gap-6 lg:uno-gap-8 uno-px-2 sm:uno-px-0">
                        <!-- 卡片1 -->
                        <div
                            class="uno-bg-[#F8F8F8] uno-border-solid uno-border-[#E7E7E8] uno-border uno-rounded-3xl uno-p-12px sm:uno-p-16px md:uno-p-24px uno-shadow-lg uno-relative">
                            <div class="uno-mb-2 sm:uno-mb-3 md:uno-mb-4 uno-text-amber-500">
                                <!-- 图标 -->
                                <NuxtImg src="/images/home/3.png" alt="Better decision-making icon" width="32"
                                    height="32"
                                    class="sm:uno-w-[40px] sm:uno-h-[40px] md:uno-w-[56px] md:uno-h-[56px]" />
                            </div>
                            <h3
                                class="uno-text-base sm:uno-text-lg md:uno-text-xl uno-font-['Outfit'] uno-font-bold uno-mb-2 sm:uno-mb-3">
                                {{
                                    $t('pages.home.why.small1.title') }}</h3>
                            <p class="uno-text-gray-600 uno-text-xs sm:uno-text-sm md:uno-text-base">{{
                                $t('pages.home.why.small1.desc') }}</p>
                        </div>

                        <!-- 卡片2 -->
                        <div
                            class="uno-bg-[#F8F8F8] uno-border-solid uno-border-[#E7E7E8] uno-border uno-rounded-3xl uno-p-12px sm:uno-p-16px md:uno-p-24px uno-shadow-lg uno-relative">
                            <div class="uno-mb-2 sm:uno-mb-3 md:uno-mb-4 uno-text-pink-500">
                                <!-- 图标 -->
                                <NuxtImg src="/images/home/4.png" alt="Enhanced relationships icon" width="32"
                                    height="32"
                                    class="sm:uno-w-[40px] sm:uno-h-[40px] md:uno-w-[56px] md:uno-h-[56px]" />
                            </div>
                            <h3
                                class="uno-text-base sm:uno-text-lg md:uno-text-xl uno-font-['Outfit'] uno-font-bold uno-mb-2 sm:uno-mb-3">
                                {{
                                    $t('pages.home.why.small2.title') }}</h3>
                            <p class="uno-text-gray-600 uno-text-xs sm:uno-text-sm md:uno-text-base">{{
                                $t('pages.home.why.small2.desc') }}</p>
                        </div>

                        <!-- 卡片3 -->
                        <div
                            class="uno-bg-[#F8F8F8] uno-border-solid uno-border-[#E7E7E8] uno-border uno-rounded-3xl uno-p-12px sm:uno-p-16px md:uno-p-24px uno-shadow-lg uno-relative">
                            <div class="uno-mb-2 sm:uno-mb-3 md:uno-mb-4 uno-text-indigo-500">
                                <!-- 图标 -->
                                <NuxtImg src="/images/home/5.png" alt="Career satisfaction icon" width="32" height="32"
                                    class="sm:uno-w-[40px] sm:uno-h-[40px] md:uno-w-[56px] md:uno-h-[56px]" />
                            </div>
                            <h3
                                class="uno-text-base sm:uno-text-lg md:uno-text-xl uno-font-['Outfit'] uno-font-bold uno-mb-2 sm:uno-mb-3">
                                {{
                                    $t('pages.home.why.small3.title') }}</h3>
                            <p class="uno-text-gray-600 uno-text-xs sm:uno-text-sm md:uno-text-base">{{
                                $t('pages.home.why.small3.desc') }}</p>
                        </div>
                    </div>
                </div>

                <!-- How Does It Work 部分 -->
                <div class="uno-flex uno-flex-col md:uno-flex-row uno-gap-8 sm:uno-gap-12 uno-items-center">
                    <!-- 左侧：标题、描述和按钮 -->
                    <div class="uno-w-full md:uno-w-1/2">
                        <h2 class="uno-text-2xl sm:uno-text-4xl uno-font-['Outfit'] uno-font-bold uno-mb-6 sm:uno-mb-8">
                            {{
                                $t('pages.home.how.title') }}
                        </h2>
                        <p class="uno-text-gray-600 uno-mb-8 sm:uno-mb-12">{{ $t('pages.home.how.desc') }}</p>

                        <button
                            class="uno-m-t-12px sm:uno-m-t-16px md:uno-m-t-24px uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[6px] sm:uno-gap-[8px] md:uno-gap-[12px] uno-py-2 sm:uno-py-2 uno-pr-[3px] sm:uno-pr-[4px] md:uno-pr-[6px] uno-pl-[12px] sm:uno-pl-[16px] md:uno-pl-[24px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-[#FFFFFF] uno-text-[12px] sm:uno-text-[14px] md:uno-text-[18px] uno-font-['Outfit'] uno-font-medium uno-rounded-[149.99px] uno-transition uno-duration-200 disabled:uno-opacity-50 disabled:uno-cursor-not-allowed"
                            type="button"
                            @click="navigateTo('/test')"
                        >
                            {{ $t('common.getStarted') }}
                            <NuxtImg src="/images/common/go-arrow-1.png" alt="arrow-right" width="20" height="20"
                                class="sm:uno-w-[24px] sm:uno-h-[24px] md:uno-w-[50px] md:uno-h-[50px]" />
                        </button>
                    </div>

                    <!-- 右侧：三个步骤卡片 -->
                    <div class="uno-w-full md:uno-w-1/2">
                        <div class="uno-flex uno-justify-start uno-items-end uno-flex-col uno-gap-4 sm:uno-gap-6">
                            <div style="flex-shrink: 0"
                                class="uno-w-full uno-flex uno-justify-start uno-items-center uno-flex-row uno-gap-4 sm:uno-gap-6 uno-py-16px sm:uno-py-24px uno-px-16px sm:uno-px-24px uno-bg-[#FFFFFF] uno-rounded-2xl uno-shadow-[0_20px_40px_0_rgba(0,157,119,0.08)]">
                                <div style="flex: none"
                                    class="uno-w-[48px] uno-h-[48px] sm:uno-w-[56px] sm:uno-h-[56px] uno-flex uno-justify-center uno-items-center uno-p-3 sm:uno-p-4 uno-bg-[#E8FAF5] uno-rounded-[24px] sm:uno-rounded-[28px]">
                                    <span
                                        class="uno-text-[#009D77] uno-text-3xl sm:uno-text-4xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.36]">1</span>
                                </div>
                                <div
                                    class="uno-flex uno-justify-start uno-items-start uno-flex-col uno-gap-1 sm:uno-gap-2">
                                    <p
                                        class="uno-text-[#011813] uno-text-xl sm:uno-text-2xl uno-font-['Outfit'] uno-font-semibold">
                                        {{
                                            $t('pages.home.how.step1.title') }}</p>
                                    <p class="uno-w-full uno-text-[#4E5255] uno-font-['Outfit']">{{
                                        $t('pages.home.how.step1.desc') }}</p>
                                </div>
                            </div>

                            <div style="flex-shrink: 0"
                                class="uno-w-full uno-flex uno-justify-start uno-items-center uno-flex-row uno-gap-4 sm:uno-gap-6 uno-py-16px sm:uno-py-24px uno-px-16px sm:uno-px-24px uno-bg-[#FFFFFF] uno-rounded-2xl uno-shadow-[0_20px_40px_0_rgba(0,157,119,0.08)]">
                                <div style="flex: none"
                                    class="uno-w-[48px] uno-h-[48px] sm:uno-w-[56px] sm:uno-h-[56px] uno-flex uno-justify-center uno-items-center uno-p-3 sm:uno-p-4 uno-bg-[#FFF5F9] uno-rounded-[24px] sm:uno-rounded-[28px]">
                                    <span
                                        class="uno-text-[#EA4C89] uno-text-3xl sm:uno-text-4xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.36]">2</span>
                                </div>
                                <div
                                    class="uno-flex uno-justify-start uno-items-start uno-flex-col uno-gap-1 sm:uno-gap-2">
                                    <span
                                        class="uno-text-[#011813] uno-text-xl sm:uno-text-2xl uno-font-['Outfit'] uno-font-semibold">{{
                                            $t('pages.home.how.step2.title') }}</span>
                                    <p class="uno-w-full uno-text-[#4E5255] uno-font-['Outfit']">{{
                                        $t('pages.home.how.step2.desc') }}</p>
                                </div>
                            </div>

                            <div style="flex-shrink: 0"
                                class="uno-w-full uno-flex uno-justify-start uno-items-center uno-flex-row uno-gap-4 sm:uno-gap-6 uno-py-16px sm:uno-py-24px uno-px-16px sm:uno-px-24px uno-bg-[#FFFFFF] uno-rounded-2xl uno-shadow-[0_20px_40px_0_rgba(0,157,119,0.08)]">
                                <div style="flex: none"
                                    class="uno-w-[48px] uno-h-[48px] sm:uno-w-[56px] sm:uno-h-[56px] uno-flex uno-justify-center uno-items-center uno-p-3 sm:uno-p-4 uno-bg-[#F5EFFC] uno-rounded-[24px] sm:uno-rounded-[28px]">
                                    <span
                                        class="uno-text-[#932EFA] uno-text-3xl sm:uno-text-4xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.36]">3</span>
                                </div>
                                <div
                                    class="uno-flex uno-justify-start uno-items-start uno-flex-col uno-gap-1 sm:uno-gap-2">
                                    <span
                                        class="uno-text-[#011813] uno-text-xl sm:uno-text-2xl uno-font-['Outfit'] uno-font-semibold">{{
                                            $t('pages.home.how.step3.title') }}</span>
                                    <p class="uno-w-full uno-text-[#4E5255] uno-font-['Outfit']">{{
                                        $t('pages.home.how.step3.desc') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 第五块 What You Will Receive 区域 -->
        <div class="uno-receive-section uno-py-8 sm:uno-py-12 md:uno-py-16 lg:uno-py-20 xl:uno-py-24 uno-bg-gray-50">
            <div class="page-container uno-px-4">
                <h2
                    class="uno-text-xl sm:uno-text-2xl md:uno-text-4xl uno-font-['Outfit'] uno-font-bold uno-text-center uno-mb-2 sm:uno-mb-3 md:uno-mb-4">
                    {{
                        $t('pages.home.receive.title') }}</h2>
                <p
                    class="uno-text-center uno-text-gray-600 uno-text-xs sm:uno-text-sm md:uno-text-base uno-mb-6 sm:uno-mb-8 md:uno-mb-16 uno-max-w-3xl uno-mx-auto">
                    {{
                        $t('pages.home.receive.desc') }}</p>

                <!-- 六个卡片布局 -->
                <div
                    class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-3 sm:uno-gap-4 md:uno-gap-6 lg:uno-gap-8">
                    <div class="uno-relative">
                        <div
                            class="uno-bg-white uno-rounded-2xl uno-shadow-lg uno-p-12px sm:uno-p-16px md:uno-p-24px uno-border uno-border-[#E7E7E8] uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-6px sm:uno-gap-8px md:uno-gap-12px uno-relative uno-z-[1] uno-w-full uno-min-h-[160px] sm:uno-min-h-[180px] md:uno-min-h-[220px]">
                            <NuxtImg src="/images/home/7.png" alt="Comprehensive Personality Report" width="48"
                                height="48" class="sm:uno-w-[56px] sm:uno-h-[56px] md:uno-w-[72px] md:uno-h-[72px]" />
                            <h3 class="uno-text-base sm:uno-text-lg md:uno-text-xl uno-font-['Outfit'] uno-font-bold">{{
                                $t('pages.home.receive.card1.title') }}</h3>
                            <p class="uno-text-gray-600 uno-text-xs sm:uno-text-sm md:uno-text-base">{{
                                $t('pages.home.receive.card1.desc') }}</p>
                        </div>
                        <div
                            class="uno-bg-white uno-rounded-2xl uno-shadow-lg uno-p-12px sm:uno-p-16px md:uno-p-24px uno-border uno-border-[#E7E7E8] uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-6px sm:uno-gap-8px md:uno-gap-12px uno-relative uno-z-[3] uno-w-full uno-min-h-[160px] sm:uno-min-h-[180px] md:uno-min-h-[220px] uno-m-t-8px sm:uno-m-t-12px md:uno-m-t-16px lg:uno-m-t-[-20px] uno-ml-0">
                            <NuxtImg src="/images/home/10.png" alt="Practical Daily Challenges" width="48" height="48"
                                class="sm:uno-w-[56px] sm:uno-h-[56px] md:uno-w-[72px] md:uno-h-[72px]" />
                            <h3 class="uno-text-base sm:uno-text-lg md:uno-text-xl uno-font-['Outfit'] uno-font-bold">{{
                                $t('pages.home.receive.card2.title') }}</h3>
                            <p class="uno-text-gray-600 uno-text-xs sm:uno-text-sm md:uno-text-base">{{
                                $t('pages.home.receive.card2.desc') }}</p>
                        </div>
                    </div>

                    <div class="uno-relative">
                        <div
                            class="uno-bg-white uno-rounded-2xl uno-shadow-lg uno-p-12px sm:uno-p-16px md:uno-p-24px uno-border uno-border-[#E7E7E8] uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-6px sm:uno-gap-8px md:uno-gap-12px uno-relative uno-z-[1] uno-w-full uno-min-h-[160px] sm:uno-min-h-[180px] md:uno-min-h-[220px]">
                            <NuxtImg src="/images/home/8.png" alt="Personalized Course Recommendations" width="48"
                                height="48" class="sm:uno-w-[56px] sm:uno-h-[56px] md:uno-w-[72px] md:uno-h-[72px]" />
                            <h3 class="uno-text-base sm:uno-text-lg md:uno-text-xl uno-font-['Outfit'] uno-font-bold">{{
                                $t('pages.home.receive.card3.title') }}</h3>
                            <p class="uno-text-gray-600 uno-text-xs sm:uno-text-sm md:uno-text-base">{{
                                $t('pages.home.receive.card3.desc') }}</p>
                        </div>
                        <div
                            class="uno-bg-white uno-rounded-2xl uno-shadow-lg uno-p-12px sm:uno-p-16px md:uno-p-24px uno-border uno-border-[#E7E7E8] uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-6px sm:uno-gap-8px md:uno-gap-12px uno-relative uno-z-[3] uno-w-full uno-min-h-[160px] sm:uno-min-h-[180px] md:uno-min-h-[220px] uno-m-t-8px sm:uno-m-t-12px md:uno-m-t-16px lg:uno-m-t-[-20px] uno-ml-0">
                            <NuxtImg src="/images/home/11.png" alt="Learning and Development Library" width="48"
                                height="48" class="sm:uno-w-[56px] sm:uno-h-[56px] md:uno-w-[72px] md:uno-h-[72px]" />
                            <h3 class="uno-text-base sm:uno-text-lg md:uno-text-xl uno-font-['Outfit'] uno-font-bold">{{
                                $t('pages.home.receive.card4.title') }}</h3>
                            <p class="uno-text-gray-600 uno-text-xs sm:uno-text-sm md:uno-text-base">{{
                                $t('pages.home.receive.card4.desc') }}</p>
                        </div>
                    </div>

                    <div class="uno-relative md:uno-block">
                        <div
                            class="uno-bg-white uno-rounded-2xl uno-shadow-lg uno-p-12px sm:uno-p-16px md:uno-p-24px uno-border uno-border-[#E7E7E8] uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-6px sm:uno-gap-8px md:uno-gap-12px uno-relative uno-z-[1] uno-w-full uno-min-h-[160px] sm:uno-min-h-[180px] md:uno-min-h-[220px]">
                            <NuxtImg src="/images/home/9.png" alt="Skill Assessment Tests" width="48" height="48"
                                class="sm:uno-w-[56px] sm:uno-h-[56px] md:uno-w-[72px] md:uno-h-[72px]" />
                            <h3 class="uno-text-base sm:uno-text-lg md:uno-text-xl uno-font-['Outfit'] uno-font-bold">{{
                                $t('pages.home.receive.card5.title') }}</h3>
                            <p class="uno-text-gray-600 uno-text-xs sm:uno-text-sm md:uno-text-base">{{
                                $t('pages.home.receive.card5.desc') }}</p>
                        </div>
                        <div
                            class="uno-bg-white uno-rounded-2xl uno-shadow-lg uno-p-12px sm:uno-p-16px md:uno-p-24px uno-border uno-border-[#E7E7E8] uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-6px sm:uno-gap-8px md:uno-gap-12px uno-relative uno-z-[3] uno-w-full uno-min-h-[160px] sm:uno-min-h-[180px] md:uno-min-h-[220px] uno-m-t-8px sm:uno-m-t-12px md:uno-m-t-16px lg:uno-m-t-[-20px] uno-ml-0">
                            <NuxtImg src="/images/home/12.png" alt="Certificates of Achievement" width="48" height="48"
                                class="sm:uno-w-[56px] sm:uno-h-[56px] md:uno-w-[72px] md:uno-h-[72px]" />
                            <h3 class="uno-text-base sm:uno-text-lg md:uno-text-xl uno-font-['Outfit'] uno-font-bold">{{
                                $t('pages.home.receive.card6.title') }}</h3>
                            <p class="uno-text-gray-600 uno-text-xs sm:uno-text-sm md:uno-text-base">{{
                                $t('pages.home.receive.card6.desc') }}</p>
                        </div>
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