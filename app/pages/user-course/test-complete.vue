<template>
  <main class="page-container uno-py-40px">
      <div class="uno-w-full uno-max-w-860px  uno-mx-auto uno-bg-white uno-rounded-[24px] ">
        <div class="uno-p-8 md:uno-p-10 uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-6">
          <div class="uno-w-96px uno-h-96px uno-aspect-square uno-rounded-full uno-border-2 uno-border-[#F6998D] uno-flex uno-items-center uno-justify-center uno-bg-[rgba(255,211,204,0.5)]">
            <div class="uno-flex uno-items-center uno-flex-col">
              <span class="uno-text-[#D73875] uno-text-2xl md:uno-text-3xl uno-font-Outfit uno-font-semibold">{{ score }}/{{ total }}</span>
              <span class="uno-text-[#D73875] uno-text-sm uno-font-Outfit uno-font-normal">points</span>
            </div>
          </div>

          <h1 class="uno-text-2xl md:uno-text-[32px] uno-font-Outfit uno-font-semibold uno-leading-[1.2] uno-text-[#011813]">{{ courseName }}</h1>
          <p class="uno-w-full uno-text-[#4E5255] uno-text-sm uno-font-Outfit uno-leading-normal">{{ $t('pages.userCourseTestComplete.description') }}</p>

          <AppLink :is-link="false" class="uno-w-full md:uno-w-[520px]">
            <PrimaryButton height="44px" class="uno-w-full">{{ $t('pages.userCourseTestComplete.cta') }}</PrimaryButton>
          </AppLink>
        </div>
    </div>
  </main>
</template>

<script setup lang="ts">


import PrimaryButton from '~/components/ui/PrimaryButton.vue'

const { t } = useI18n()
const score = 0
const total = 10
const courseName = 'People Leadership vs. Management'

definePageMeta({
  title: () => 'seo.userCourse.testComplete.title',
      layoutShowPageTopIcons: false,
})

useSeoMeta({
  title: () => t('seo.userCourse.testComplete.title'),
  description: () => t('seo.userCourse.testComplete.description')
})
</script>

<style scoped></style>
