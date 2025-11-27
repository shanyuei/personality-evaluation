<template>
    <!-- 首页 -->
    <main class="mx-auto pt-128px">
        <!-- 第一块区域 -->
        <div class="relative rounded-xl mx-auto max-w-4xl border border-transparent ">
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
        <div class="hero-section w-full py-20">
            <div class="container mx-auto px-4">
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

    </main>
</template>

<script setup lang="ts">
// Home page component
</script>

<style scoped>
/* Home page specific styles */
</style>