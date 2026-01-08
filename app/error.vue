<template>
    <UApp>
        <NuxtLayout :layout-show-page-top-icons="false">
            <section class="uno-flex uno-items-center uno-justify-center uno-px-6 uno-py-40">
                <div class="uno-text-center uno-max-w-[680px] uno-mx-auto">
                    <template v-if="error?.statusCode === 404">
                        <!-- 引入404 图片 -->
                        <img src="/theme/404.png" alt="" aria-hidden="true" class="uno-mx-auto uno-mb-8 uno-w-[320px] sm:uno-w-[480px]">
                        <div class="uno-flex uno-justify-start uno-items-center uno-flex-col uno-gap-10">
                            <div style="flex-shrink: 0"
                                class="uno-flex uno-self-stretch uno-justify-start uno-items-center uno-flex-col uno-gap-3">
                                <p style="flex-shrink: 0"
                                    class="uno-self-stretch uno-text-[#011813] uno-text-[32px] uno-font-['Outfit'] uno-text-center uno-font-semibold">
                                    Oops! that page doesn’t exist
                                </p>
                                <p style="flex-shrink: 0"
                                    class="uno-self-stretch uno-text-[#4E5255] uno-font-['Outfit'] uno-text-center">
                                    Oops! It seems the page you're looking for doesn’t exist. Let's get
                                    you back on track—click below to return to the home page.
                                </p>
                            </div>
                            <div style="flex-shrink: 0"
                                class="uno-w-148px  uno-h-[56px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-2 uno-py-4 uno-px-[18px] uno-bg-[#EA4C89] uno-rounded-[1000px]"
                                @click="handleError">
                                <span class="uno-text-[#FFFFFF] uno-font-['Outfit'] uno-font-[16px] uno-leading-normal">
                                    Back to Home
                                </span>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <h1 class="uno-text-4xl sm:uno-text-5xl uno-font-bold uno-text-[#0F172A] uno-mb-4">{{ error?.statusCode }} -
                            Something went
                            wrong</h1>
                        <p class="uno-text-[#4E5255] uno-mb-8 uno-px-4">{{ error?.message }}</p>
                        <button
                            class="uno-inline-flex uno-items-center uno-justify-center uno-px-6 uno-h-[48px] uno-rounded-[16px] uno-bg-[#009D77] uno-text-white hover:uno-bg-[#0AA17F]"
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
