<template>
    <UApp>
        <NuxtLayout>
            <section class=" flex items-center justify-center px-6 py-40 ">
                <div class="text-center max-w-[680px] mx-auto">
                    <template v-if="error?.statusCode === 404">
                        <!-- 引入404 图片 -->
                        <img src="/theme/404.png" alt="" aria-hidden="true" class="mx-auto mb-8 w-[320px] sm:w-[480px]">
                        <div class="flex justify-start items-center flex-col gap-10">
                            <div style="flex-shrink: 0"
                                class="flex self-stretch justify-start items-center flex-col gap-3">
                                <p style="flex-shrink: 0"
                                    class="self-stretch text-[#011813] text-[32px] font-['Outfit'] text-center font-semibold">
                                    Oops! that page doesn’t exist
                                </p>
                                <p style="flex-shrink: 0"
                                    class="self-stretch text-[#4E5255] font-['Outfit'] text-center">
                                    Oops! It seems the page you're looking for doesn’t exist. Let's get
                                    you back on track—click below to return to the home page.
                                </p>
                            </div>
                            <div style="flex-shrink: 0"
                                class="flex justify-center items-center flex-row gap-2 py-4 px-[24px] bg-[#EA4C89] rounded-[1000px]"
                                @click="handleError">
                                <span class="text-[#FFFFFF] font-['Outfit'] font-medium leading-normal">
                                    Back to Home
                                </span>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <h1 class="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4">{{ error?.statusCode }} -
                            Something went
                            wrong</h1>
                        <p class="text-[#4E5255] mb-8 px-4">{{ error?.message }}</p>
                        <button
                            class="inline-flex items-center justify-center px-6 h-[48px] rounded-[16px] bg-[#009D77] text-white hover:bg-[#0AA17F]"
                            @click="handleError">
                            Back to Home
                        </button>
                    </template>
                </div>
            </section>
        </NuxtLayout>
    </UApp>
</template>

<script setup lang="ts">
const error = useError()
const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped></style>
