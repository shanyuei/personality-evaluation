<template>
    <!-- 首页 -->
    <main class="mx-auto pt-128px">
        <!-- 第一块区域 -->
        <div class="relative rounded-xl mx-auto max-w-[1200px] border border-transparent ">
            <!-- 内容区域 -->
            <div class="flex justify-start items-center flex-col   ">
                <div class="flex justify-start items-center flex-col gap-16px">
                    <h1 class=" text-[#011813] text-7xl font-['Outfit'] text-center font-semibold">
                        {{ $t('home.title') }}
                    </h1>
                    <h2 class="text-[#4E5255] text-lg font-['Outfit'] text-center">
                        {{ $t('home.description') }}
                    </h2>
                </div>



                <!-- 测试按钮 -->
                <UButton :ui="{
                    base: 'flex justify-center items-center flex-row gap-[18px] py-4 pr-3 pl-[48px] bg-[#009D77] rounded-[149.99px] m-t-72px hover:bg-[#008A68] active:bg-[#007759] transition-all duration-300 hover:shadow-lg active:scale-[0.98]',
                }">
                    <span class="text-[#FFFFFF] text-[32px] font-['Outfit'] font-medium leading-normal">
                        Take the Test
                    </span>
                    <NuxtImg src="/images/common/go-arrow-1.png" alt="btn-icon" width="72px" height="72px" />
                </UButton>
            </div>
        </div>
        <!-- 第二块区域 hero -->
        <div class="hero-section w-full py-20 mx-auto max-w-[1200px]">
            <div class="container mx-auto ">
                <div class="flex justify-center items-center flex-wrap gap-24px">
                    <!-- 六个卡通人物头像 -->
                    <div
                        class="hero-avatar relative w-180px h-300px  overflow-hidden  flex items-center justify-center">
                        <!-- 卡通人物1 -->
                        <NuxtImg src="/images/home/hero/hero-1.png" alt="卡通人物1" class="w-full h-full object-contain" />
                    </div>
                    <div class="hero-avatar relative w-180px h-300px  overflow-hidden flex items-center justify-center">
                        <!-- 卡通人物2 -->
                        <NuxtImg src="/images/home/hero/hero-2.png" alt="卡通人物2" class="w-full h-full object-contain" />
                    </div>
                    <div class="hero-avatar relative w-180px h-300px  overflow-hidden flex items-center justify-center">
                        <!-- 卡通人物3 -->
                        <NuxtImg src="/images/home/hero/hero-3.png" alt="卡通人物3" class="w-full h-full object-contain" />
                    </div>
                    <div class="hero-avatar relative w-180px h-300px  overflow-hidden flex items-center justify-center">
                        <!-- 卡通人物4 -->
                        <NuxtImg src="/images/home/hero/hero-4.png" alt="卡通人物4" class="w-full h-full object-contain" />
                    </div>
                    <div class="hero-avatar relative w-180px h-300px  overflow-hidden flex items-center justify-center">
                        <!-- 卡通人物5 -->
                        <NuxtImg src="/images/home/hero/hero-5.png" alt="卡通人物5" class="w-full h-full object-contain" />
                    </div>
                    <div class="hero-avatar relative w-180px h-300px  overflow-hidden flex items-center justify-center">
                        <!-- 卡通人物6 -->
                        <NuxtImg src="/images/home/hero/hero-6.png" alt="卡通人物6" class="w-full h-full object-contain" />
                    </div>
                </div>
            </div>
        </div>
        <!-- 第三块 数据统计区域 -->
        <div class="data-stats bg-[#F5F8FF] py-12">
            <div class="container mx-auto  mx-auto max-w-[1200px]">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <!-- 统计项1 -->
                    <div class="text-center p-6">

                        <div class="text-[#009D77] text-5xl font-['Outfit'] font-semibold m-b-4px">241K+</div>
                        <div class="text-[#4E5255] text-lg font-['Outfit']">Tests taken today</div>
                    </div>
                    <!-- 统计项2 -->
                    <div class="text-center p-6">
                        <div class="text-[#EA4C89] text-5xl font-['Outfit'] font-semibold m-b-4px">172M+</div>
                        <div class="text-[#4E5255] text-lg font-['Outfit']">Tests taken in US</div>
                    </div>
                    <!-- 统计项3 -->
                    <div class="text-center p-6">
                        <div class="text-[#FD9AC0] text-5xl font-['Outfit'] font-semibold m-b-4px">1460M+</div>
                        <div class="text-[#4E5255] text-lg font-['Outfit']">Total tests taken</div>
                    </div>
                    <!-- 统计项4 -->
                    <div class="text-center p-6">
                        <div class="text-[#B273F2] text-5xl font-['Outfit'] font-semibold m-b-4px">91.2%</div>
                        <div class="text-[#4E5255] text-lg font-['Outfit']">Results rated accurate or very accurate
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 第四块 介绍区域 -->
        <div class="intro-section py-24">
            <div class="container mx-auto max-w-[1200px]">
                <!-- Why You Should Take the Test 部分 -->
                <div class="mb-24">
                    <h2 class="text-[#011813] text-5xl font-['Outfit'] text-center font-semibold m-b-12px">Why You
                        Should Take the Test?</h2>
                    <p class="text-[#4E5255] font-['Outfit'] text-center">
                        Connect with the most expert mentors, guiding you with personalized advice through guided
                        questions and proven expertise.
                    </p>

                    <!-- 主要介绍卡片 -->
                    <div
                        class=" shadow-lg mb-12 w-[70%] bg-[#F8F8F8] border-solid border-[#E7E7E8] border rounded-3xl p-24px relative">
                        <!-- 装饰图片 -->
                        <NuxtImg src="/images/home/2.png" alt="decor" width="56" height="56"
                            class="relative top-[0] left-246px" />

                        <div class="flex gap-40px">
                            <div class="w-full md:w-[24%] pt-24px">
                                <h3 class="text-2xl font-['Outfit'] font-bold mb-4">Improved self-awareness</h3>
                                <p class="text-gray-600 mb-6">
                                    Gain UI design mastery with hands-on expert mentorship, refining your skills through
                                    personalized guidance and feedback.
                                </p>
                                <!-- 分割线 -->
                                <div class="w-full h-[1px] bg-[#E7E7E8] my-6"></div>
                                <UButton :ui="{
                                    base: 'flex justify-center items-center flex-row gap-2 px-6 py-3 bg-[#009D77] rounded-full text-white hover:bg-[#008A68] transition-all duration-300'
                                }">
                                    <span>Get Started</span>
                                    <NuxtImg src="/images/common/go-arrow-1.png" alt="arrow" width="16px" height="16px"
                                        class="w-4 h-4" />
                                </UButton>
                            </div>
                            <div class="w-full md:w-[76%]  relative top-[-6px]">
                                <!-- 图片 -->
                                <NuxtImg src="/images/home/1.png" alt="Self-awareness illustration" width="564"
                                    height="376" class=" rounded-lg w-100%" />

                            </div>
                        </div>
                    </div>

                    <!-- 三个小介绍卡片 -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- 卡片1 -->
                        <div class="bg-[#F8F8F8] border-solid border-[#E7E7E8] border rounded-3xl p-24px shadow-lg relative">
                            <div class="mb-4 text-amber-500">
                                <!-- 图标 -->
                                <NuxtImg src="/images/home/3.png" alt="Better decision-making icon" width="56"
                                    height="56" class="" />
                            </div>
                            <h3 class="text-xl font-['Outfit'] font-bold mb-3">Better decision-making</h3>
                            <p class="text-gray-600">
                                Gain UI design mastery with hands-on expert mentorship, refining your skills through
                                personalized guidance and feedback.
                            </p>
                        </div>

                        <!-- 卡片2 -->
                        <div class="bg-[#F8F8F8] border-solid border-[#E7E7E8] border rounded-3xl p-24px shadow-lg relative">
                            <div class="mb-4 text-pink-500">
                                <!-- 图标 -->
                                <NuxtImg src="/images/home/4.png" alt="Enhanced relationships icon" width="56"
                                    height="56" />
                            </div>
                            <h3 class="text-xl font-['Outfit'] font-bold mb-3">Enhanced relationships</h3>
                            <p class="text-gray-600">
                                Gain UI design mastery with hands-on expert mentorship, refining your skills through
                                personalized guidance and feedback.
                            </p>
                        </div>

                        <!-- 卡片3 -->
                        <div class="bg-[#F8F8F8] border-solid border-[#E7E7E8] border rounded-3xl p-24px shadow-lg relative">
                            <div class="mb-4 text-indigo-500">
                                <!-- 图标 -->
                                <NuxtImg src="/images/home/5.png" alt="Career satisfaction icon" width="56"
                                    height="56" />
                            </div>
                            <h3 class="text-xl font-['Outfit'] font-bold mb-3">Career satisfaction</h3>
                            <p class="text-gray-600">
                                Gain UI design mastery with hands-on expert mentorship, refining your skills through
                                personalized guidance and feedback.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- How Does It Work 部分 -->
                <div class="flex flex-col md:flex-row gap-12 items-center">
                    <!-- 左侧：标题、描述和按钮 -->
                    <div class="w-full md:w-1/2">
                        <h2 class="text-4xl font-['Outfit'] font-bold mb-8">How Does It Work?</h2>
                        <p class="text-gray-600 mb-12">
                            Meta webflow template includes 7 pages in total, with more than 30+ sections and 2 different
                            home page layouts featuring
                        </p>

                        <UButton :ui="{
                            base: 'flex justify-center items-center flex-row gap-2 px-6 py-3 bg-[#009D77] rounded-full text-white hover:bg-[#008A68] transition-all duration-300'
                        }">
                            <span>Get Started</span>
                            <NuxtImg src="/images/common/go-arrow-1.png" alt="arrow" width="16px" height="16px"
                                class="w-4 h-4" />
                        </UButton>
                    </div>

                <!-- 右侧：三个步骤卡片 -->
                    <div class="w-full md:w-1/2">
                        <div class="flex justify-start items-start flex-col gap-6">
                            <div style="flex-shrink: 0" class="flex justify-start items-center flex-row gap-6 py-24px px-24px bg-[#FFFFFF] rounded-2xl shadow-[0_20px_40px_0_rgba(0,157,119,0.08)]">
                                <div style="flex: none" class="w-[56px] h-[56px] flex justify-center items-center p-4 bg-[#E8FAF5] rounded-[28px]">
                                    <span class="text-[#009D77] text-4xl font-['Outfit'] font-semibold leading-[1.36]">1</span>
                                </div>
                                <div class="flex justify-start items-start flex-col gap-2">
                                    <p class="text-[#011813] text-2xl font-['Outfit'] font-semibold">Prepare yourself</p>
                                    <p class="w-[370px] max-sm:w-full text-[#4E5255] font-['Outfit']">Ensure you're in a relaxed setting conducive to concentration for the test.</p>
                                </div>
                            </div>

                            <div style="flex-shrink: 0" class="flex justify-start items-center flex-row gap-6 py-24px px-24px bg-[#FFFFFF] rounded-2xl shadow-[0_20px_40px_0_rgba(0,157,119,0.08)]">
                                <div style="flex: none" class="w-[56px] h-[56px] flex justify-center items-center p-4 bg-[#FFF5F9] rounded-[28px]">
                                    <span class="text-[#EA4C89] text-4xl font-['Outfit'] font-semibold leading-[1.36]">2</span>
                                </div>
                                <div class="flex justify-start items-start flex-col gap-2">
                                    <span class="text-[#011813] text-2xl font-['Outfit'] font-semibold">10+ Useful inner pages</span>
                                    <p class="w-[370px] max-sm:w-full text-[#4E5255] font-['Outfit']">Meta has 10+ inner pages that are needed for your business. You can fully customize these.</p>
                                </div>
                            </div>

                            <div style="flex-shrink: 0" class="flex justify-start items-center flex-row gap-6 py-24px px-24px bg-[#FFFFFF] rounded-2xl shadow-[0_20px_40px_0_rgba(0,157,119,0.08)]">
                                <div style="flex: none" class="w-[56px] h-[56px] flex justify-center items-center p-4 bg-[#F5EFFC] rounded-[28px]">
                                    <span class="text-[#932EFA] text-4xl font-['Outfit'] font-semibold leading-[1.36]">3</span>
                                </div>
                                <div class="flex justify-start items-start flex-col gap-2">
                                    <span class="text-[#011813] text-2xl font-['Outfit'] font-semibold">30+ Details sections</span>
                                    <p class="w-[370px] max-sm:w-full text-[#4E5255] font-['Outfit']">Meta has 40+ stunning sections which will help you build a portfolio website as per your needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 第五块 What You Will Receive 区域 -->
        <div class="receive-section py-24 bg-gray-50">
            <div class="container mx-auto max-w-[1200px]">
                <h2 class="text-4xl font-['Outfit'] font-bold text-center mb-4">What You Will Receive</h2>
                <p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
                    Be always were in form of volunteers range time is mediatingappositive the in our affidavit how
                    solitary saw more in his not
                </p>

                <!-- 六个卡片布局 -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="relative">
                        <div class="bg-white rounded-2xl shadow-lg p-24px border border-[#E7E7E8] flex flex-col items-center text-center gap-12px relative z-[1] w-full min-h-[220px]">
                            <NuxtImg src="/images/home/7.png" alt="Comprehensive Personality Report" width="72" height="72" />
                            <h3 class="text-xl font-['Outfit'] font-bold">Comprehensive Personality Report</h3>
                            <p class="text-gray-600">The to der ealie, der ealie, the to over mear for queen, for please</p>
                        </div>
                        <div class="bg-white rounded-2xl shadow-lg p-24px border border-[#E7E7E8] flex flex-col items-center text-center gap-12px relative z-[3] w-full min-h-[220px] m-t-[-20px] ml-0">
                            <NuxtImg src="/images/home/10.png" alt="Practical Daily Challenges" width="72" height="72" />
                            <h3 class="text-xl font-['Outfit'] font-bold">Practical Daily Challenges</h3>
                            <p class="text-gray-600">The colu we easily in der ealie, even for moquen, for please</p>
                        </div>
                    </div>

                    <div class="relative">
                        <div class="bg-white rounded-2xl shadow-lg p-24px border border-[#E7E7E8] flex flex-col items-center text-center gap-12px relative z-[1] w-full min-h-[220px]">
                            <NuxtImg src="/images/home/8.png" alt="Personalized Course Recommendations" width="72" height="72" />
                            <h3 class="text-xl font-['Outfit'] font-bold">Personalized Course Recommendations</h3>
                            <p class="text-gray-600">Reveal it everything overing overing the best!</p>
                        </div>
                        <div class="bg-white rounded-2xl shadow-lg p-24px border border-[#E7E7E8] flex flex-col items-center text-center gap-12px relative z-[3] w-full min-h-[220px] m-t-[-20px] ml-0">
                            <NuxtImg src="/images/home/11.png" alt="Learning and Development Library" width="72" height="72" />
                            <h3 class="text-xl font-['Outfit'] font-bold">Learning and Development Library</h3>
                            <p class="text-gray-600">Reveal in everything overing overing bad policy of the test for the great</p>
                        </div>
                    </div>

                    <div class="relative">
                        <div class="bg-white rounded-2xl shadow-lg p-24px border border-[#E7E7E8] flex flex-col items-center text-center gap-12px relative z-[1] w-full min-h-[220px]">
                            <NuxtImg src="/images/home/9.png" alt="Skill Assessment Tests" width="72" height="72" />
                            <h3 class="text-xl font-['Outfit'] font-bold">Skill Assessment Tests</h3>
                            <p class="text-gray-600">Where centred for date, control over thought, through teacher effectiveness</p>
                        </div>
                        <div class="bg-white rounded-2xl shadow-lg p-24px border border-[#E7E7E8] flex flex-col items-center text-center gap-12px relative z-[3] w-full min-h-[220px] m-t-[-20px] ml-0">
                            <NuxtImg src="/images/home/12.png" alt="Certificates of Achievement" width="72" height="72" />
                            <h3 class="text-xl font-['Outfit'] font-bold">Certificates of Achievement</h3>
                            <p class="text-gray-600">Where centred for date, control over thought, through teacher effectiveness</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 第六块 客户评价模块 -->
        <div class="testimonials-section py-24 bg-white">
            <div class="container mx-auto max-w-[1200px]">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-['Outfit'] font-bold mb-4">Trusted by 20,000+ customers</h2>
                    <p class="text-gray-600 max-w-3xl mx-auto">
                        Be always were in form of volunteers range time is mediatingappositive the in our affidavit how
                        solitary saw more in his not
                    </p>
                    <!-- 五星评分 -->
                    <div class="flex justify-center mt-6 text-yellow-400">
                        <span class="text-xl">★★★★★</span>
                    </div>
                </div>

                <!-- 评价卡片网格 -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    <!-- 评价卡片1 -->
                    <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <p class="text-gray-600 mb-6 text-sm">
                            An exceptional platform for career development. The current curriculum, skilled instructors,
                            and hands-on learning are truly rewarding.
                        </p>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Brandon Michael"
                                    class="w-full h-full rounded-full object-cover" />
                            </div>
                            <div>
                                <h4 class="font-['Outfit'] font-bold">Brandon Michael</h4>
                                <p class="text-gray-500 text-xs">UX/UI Designer</p>
                            </div>
                        </div>
                    </div>

                    <!-- 评价卡片2 -->
                    <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <p class="text-gray-600 mb-6 text-sm">
                            An exceptional platform for career development. The current curriculum, skilled instructors,
                            and hands-on learning are truly rewarding.
                        </p>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                                <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Brandon Michael"
                                    class="w-full h-full rounded-full object-cover" />
                            </div>
                            <div>
                                <h4 class="font-['Outfit'] font-bold">Brandon Michael</h4>
                                <p class="text-gray-500 text-xs">UX/UI Designer</p>
                            </div>
                        </div>
                    </div>

                    <!-- 评价卡片3 -->
                    <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <p class="text-gray-600 mb-6 text-sm">
                            An exceptional platform for career development. The current curriculum, skilled instructors,
                            and hands-on learning are truly rewarding.
                        </p>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                                <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Brandon Michael"
                                    class="w-full h-full rounded-full object-cover" />
                            </div>
                            <div>
                                <h4 class="font-['Outfit'] font-bold">Brandon Michael</h4>
                                <p class="text-gray-500 text-xs">UX/UI Designer</p>
                            </div>
                        </div>
                    </div>

                    <!-- 评价卡片4 -->
                    <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <p class="text-gray-600 mb-6 text-sm">
                            An exceptional platform for career development. The current curriculum, skilled instructors,
                            and hands-on learning are truly rewarding.
                        </p>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                                <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Brandon Michael"
                                    class="w-full h-full rounded-full object-cover" />
                            </div>
                            <div>
                                <h4 class="font-['Outfit'] font-bold">Brandon Michael</h4>
                                <p class="text-gray-500 text-xs">UX/UI Designer</p>
                            </div>
                        </div>
                    </div>

                    <!-- 评价卡片5 -->
                    <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <p class="text-gray-600 mb-6 text-sm">
                            An exceptional platform for career development. The current curriculum, skilled instructors,
                            and hands-on learning are truly rewarding.
                        </p>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                                <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Brandon Michael"
                                    class="w-full h-full rounded-full object-cover" />
                            </div>
                            <div>
                                <h4 class="font-['Outfit'] font-bold">Brandon Michael</h4>
                                <p class="text-gray-500 text-xs">UX/UI Designer</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 第二行评价卡片 -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    <!-- 评价卡片6 -->
                    <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <p class="text-gray-600 mb-6 text-sm">
                            An exceptional platform for career development. The current curriculum, skilled instructors,
                            and hands-on learning are truly rewarding.
                        </p>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                                <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="Brandon Michael"
                                    class="w-full h-full rounded-full object-cover" />
                            </div>
                            <div>
                                <h4 class="font-['Outfit'] font-bold">Brandon Michael</h4>
                                <p class="text-gray-500 text-xs">UX/UI Designer</p>
                            </div>
                        </div>
                    </div>

                    <!-- 评价卡片7 -->
                    <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <p class="text-gray-600 mb-6 text-sm">
                            An exceptional platform for career development. The current curriculum, skilled instructors,
                            and hands-on learning are truly rewarding.
                        </p>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                                <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="Brandon Michael"
                                    class="w-full h-full rounded-full object-cover" />
                            </div>
                            <div>
                                <h4 class="font-['Outfit'] font-bold">Brandon Michael</h4>
                                <p class="text-gray-500 text-xs">UX/UI Designer</p>
                            </div>
                        </div>
                    </div>

                    <!-- 评价卡片8 -->
                    <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <p class="text-gray-600 mb-6 text-sm">
                            An exceptional platform for career development. The current curriculum, skilled instructors,
                            and hands-on learning are truly rewarding.
                        </p>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                                <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="Brandon Michael"
                                    class="w-full h-full rounded-full object-cover" />
                            </div>
                            <div>
                                <h4 class="font-['Outfit'] font-bold">Brandon Michael</h4>
                                <p class="text-gray-500 text-xs">UX/UI Designer</p>
                            </div>
                        </div>
                    </div>

                    <!-- 评价卡片9 -->
                    <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <p class="text-gray-600 mb-6 text-sm">
                            An exceptional platform for career development. The current curriculum, skilled instructors,
                            and hands-on learning are truly rewarding.
                        </p>
                        <div class="flex items-center">
                            <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                                <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="Brandon Michael"
                                    class="w-full h-full rounded-full object-cover" />
                            </div>
                            <div>
                                <h4 class="font-['Outfit'] font-bold">Brandon Michael</h4>
                                <p class="text-gray-500 text-xs">UX/UI Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 第七块 常见问题模块 -->
        <div class="faq-section py-24 bg-gray-50">
            <div class="container mx-auto max-w-[1200px]">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-['Outfit'] font-bold mb-4">Frequently Asked Questions</h2>
                    <p class="text-gray-600 max-w-3xl mx-auto">
                        Frequently Asked Questions offers a quick answers to common queries, guiding users through
                        features and functionalities efficiently.
                    </p>
                </div>

                <!-- FAQ 列表 -->
                <div class="max-w-3xl mx-auto">
                    <!-- FAQ 项目 1 (默认展开) -->
                    <div class="border border-gray-200 rounded-xl mb-4 overflow-hidden">
                        <button
                            class="w-full flex justify-between items-center p-6 bg-green-50 hover:bg-green-100 transition-colors text-left">
                            <span class="font-['Outfit'] font-semibold text-lg text-green-800">Can I Track My
                                Assignments and Grades?</span>
                            <span class="text-green-800">-</span>
                        </button>
                        <div class="p-6 bg-white border-t border-gray-200">
                            <p class="text-gray-600">
                                Yes, the LMS offers a "Gradebook" where students can view their grades, mentor feedback
                                on assignments, and class attendance data. You can view your grade and comments for each
                                submission.
                            </p>
                        </div>
                    </div>

                    <!-- FAQ 项目 2 -->
                    <div class="border border-gray-200 rounded-xl mb-4 overflow-hidden">
                        <button
                            class="w-full flex justify-between items-center p-6 hover:bg-gray-50 transition-colors text-left">
                            <span class="font-['Outfit'] font-semibold text-lg">Does the LMS support video lessons and
                                live classes?</span>
                            <span>+</span>
                        </button>
                    </div>

                    <!-- FAQ 项目 3 -->
                    <div class="border border-gray-200 rounded-xl mb-4 overflow-hidden">
                        <button
                            class="w-full flex justify-between items-center p-6 hover:bg-gray-50 transition-colors text-left">
                            <span class="font-['Outfit'] font-semibold text-lg">How can I communicate with my
                                instructor?</span>
                            <span>+</span>
                        </button>
                    </div>

                    <!-- FAQ 项目 4 -->
                    <div class="border border-gray-200 rounded-xl mb-4 overflow-hidden">
                        <button
                            class="w-full flex justify-between items-center p-6 hover:bg-gray-50 transition-colors text-left">
                            <span class="font-['Outfit'] font-semibold text-lg">What support is available for students
                                and instructors?</span>
                            <span>+</span>
                        </button>
                    </div>

                    <!-- FAQ 项目 5 -->
                    <div class="border border-gray-200 rounded-xl mb-4 overflow-hidden">
                        <button
                            class="w-full flex justify-between items-center p-6 hover:bg-gray-50 transition-colors text-left">
                            <span class="font-['Outfit'] font-semibold text-lg">Are there interactive features for
                                students?</span>
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA 区域 - 渐变背景卡片 -->
        <div class="mx-auto max-w-[1200px] mb-24">
            <GradientCTASection title="Curious how accurate we are about you?"
                description="Connect with a network of term professionals, gain valuable insights, and access resources that prepare you for your dream career."
                buttonText="Get Started" @button-click="handleCTAClick" />
        </div>
    </main>
</template>

<script setup lang="ts">
// Home page component
import GradientCTASection from '../components/GradientCTASection.vue';

const handleCTAClick = () => {
    console.log('CTA button clicked');
    // 可以在这里添加跳转逻辑
};
</script>

<style scoped>
/* Home page specific styles */
</style>
