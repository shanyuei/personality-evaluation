<template>
  <div class="page-container uno-py-6">

    <div class="uno-flex uno-flex-col uno-items-center uno-gap-4">
      <div class="uno-w-[80px] uno-h-[80px] uno-flex uno-items-center uno-justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"
          width="80" height="80" viewBox="0 0 80 80">
          <g>
            <g>
              <path
                d="M23.9426,6.2976718C32.925961,-2.1259091,46.915886,-2.0954692,55.862717,6.3669062C55.862717,6.3669062,65.106529,15.110062,65.106529,15.110062C65.106529,15.110062,73.639397,24.138941,73.639397,24.138941C82.045288,33.033203,82.129723,46.91748,73.832123,55.912834C73.832123,55.912834,65.106529,65.372101,65.106529,65.372101C65.106529,65.372101,55.921101,73.837807,55.921101,73.837807C50.19355,79.116486,42.487534,80.997826,35.349407,79.500229C31.20351,78.630402,28.862253,74.346199,28.864952,70.110046C28.864952,70.106804,28.864954,70.104179,28.864954,70.102196C28.864954,70.102196,28.864954,61.03669,28.864954,61.03669C32.181892,62.790154,35.962029,63.784851,39.974991,63.784882C53.123951,63.784882,63.783291,53.125492,63.783329,39.976543C63.783329,26.827562,53.12397,16.168211,39.974991,16.168211C26.826096,16.168312,16.166658,26.827625,16.166658,39.976543C16.16666,40.681503,16.199121,41.379169,16.259142,42.068558C16.198723,42.420307,16.167173,42.781994,16.167173,43.15099C16.167173,43.15099,16.167173,66.079948,16.167173,66.079948C16.167173,66.079948,14.579951,64.578491,14.579951,64.578491C14.579951,64.578491,6.3570857,55.874084,6.3570857,55.874084C-2.1002257,46.921619,-2.1215689,32.930992,6.3085184,23.952936C6.3085184,23.952936,15.109026,14.580988,15.109026,14.580988C15.109026,14.580988,23.9426,6.2976718,23.9426,6.2976718ZM39.974991,28.86599C46.111183,28.86599,51.085545,33.840351,51.085545,39.976543C51.085506,46.112705,46.11116,51.087105,39.974991,51.087105C33.838909,51.087002,28.864473,46.11264,28.864437,39.976543C28.864437,33.840416,33.838886,28.866091,39.974991,28.86599Z"
                fill="#009D77" fill-opacity="1" />
            </g>
          </g>
        </svg>
      </div>
      <h1
        class="uno-w-full uno-text-[#011813] uno-text-2xl md:uno-text-5xl uno-font-Outfit uno-text-center uno-font-semibold uno-leading-[1.2] uno-mb-8 md:uno-mb-12">
        {{ $t('pages.testIntro.title') }}</h1>
    </div>

    <div class="uno-mt-6">
      <div class="uno-flex  uno-justify-center uno-gap-6 md:uno-gap-8">
        <div v-for="step in steps" :key="step.id" class="uno-w-full  uno-rounded-[24px] " :class="step.bgClass">
          <div class="uno-inline-block uno-w-full uno-p-6 uno-space-y-2 uno-rounded-2xl" :class="step.innerBgClass">
            <div class="uno-flex uno-flex-col uno-items-center uno-gap-3">
              <span class="uno-w-24 uno-h-24 uno-rounded-full uno-flex uno-items-center uno-justify-center"
                :class="step.iconBgClass">
                <NuxtImg :src="step.icon" :alt="'step' + step.id" width="96" height="96" />
              </span>
              <span
                class="uno-inline-flex uno-justify-start uno-items-center uno-flex-row uno-gap-2.5 uno-py-1 uno-px-4 uno-rounded-3xl uno-self-start uno-text-[#011813] uno-text-center uno-text-base uno-font-Outfit uno-font-medium uno-leading-[1.36]"
                :class="step.badgeBgClass">
                {{ $t('pages.testIntro.step') }} {{ step.id }}
              </span>
            </div>
            <div class="uno-text-[#011813] uno-text-2xl md:uno-text-3xl uno-font-Outfit uno-font-semibold">{{
              $t(step.titleKey) }}</div>
            <p class="uno-text-base md:uno-text-lg uno-text-[#4E5255] uno-font-Outfit">
              {{ $t(step.descKey) }}</p>
          </div>
        </div>
      </div>
    </div>



    <!-- 进度条 -->
    <div class="course-header md:!uno-w-[80%] md:!uno-max-w-[80%] uno-mx-auto uno-mt-4">
      <div class="course-nav">
        <div class="progress-percent">{{ 0 }}%</div>
        <div class="question-count">{{ $t('pages.testIntro.progress.step', { current, total }) }}</div>

      </div>
      <div class="course-progress">
        <div class="progress-bar" :style="{ width: 0 + '%' }" />
      </div>
    </div>

    <!-- 评分说明 -->
    <div class="uno-w-full md:uno-w-[80%] uno-mx-auto uno-mt-4">
      <div class="uno-p-4 md:uno-p-6">
        <h2
          class="uno-text-[#011813] uno-text-base md:uno-text-lg uno-font-Outfit uno-text-center uno-font-semibold uno-leading-[1.2]">
          {{ $t('pages.testIntro.instructions') }}</h2>
        <div class="uno-flex uno-flex-row uno-items-baseline uno-justify-center uno-gap-0 uno-mt-4 uno-px-[5%]">
          <div v-for="scale in scales" :key="scale.key"
            class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1">
            <div
              class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-border-solid uno-border-2"
              :class="[scale.bgClass, scale.borderClass]" />
            <span class="uno-text-xs uno-text-[#011813]">{{ $t(scale.labelKey) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 问题卡片 -->
    <div class="uno-w-full md:uno-w-[80%] uno-mx-auto uno-mt-4">
      <div class="uno-space-y-4">
        <div v-for="(q, qi) in questions" :key="qi"
          class="uno-bg-white uno-rounded-[16px] md:uno-rounded-[20px] uno-border uno-border-[var(--ui-border)] uno-shadow-[0px_2px_8px_rgba(0,0,0,0.06)]">
          <div class="uno-p-4 md:uno-p-6">
            <p
              class="uno-text-[#011813] uno-font-Outfit uno-text-base md:uno-text-lg uno-text-center uno-leading-[1.2] uno-mb-8">
              {{ q }}</p>
            <div
              class="uno-flex uno-flex-row uno-items-center uno-justify-center uno-gap-2 md:uno-gap-[20px] uno-mt-4 uno-px-[5%]">
              <div v-for="scale in scales" :key="scale.key"
                class="uno-flex-1 uno-flex uno-justify-center uno-items-center">
                <div
                  class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-border-solid uno-border-2"
                  :class="[scale.bgClass, scale.borderClass]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 提示文本 -->
      <p
        class="uno-text-[#8D8E8F] uno-font-Outfit uno-text-sm uno-text-center uno-leading-[1.2] uno-mt-6">
        {{
          $t('pages.testIntro.notice') }}</p>
    </div>

    <!-- 提交按钮 -->
    <div class="uno-w-full md:uno-w-[80%] uno-mx-auto uno-mt-6 uno-flex uno-justify-center uno-mb-12">
      <UButton :ui="UButtonTheme" @click="nextStart">{{ $t('pages.testIntro.next') }}</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UButtonTheme from '~/theme/UButton'
import { getTestQuestions } from '~/api/tests'
import type { TestQuestion } from '~/types/TestQuestion'
import { useQuestionsStore } from '~/stores/modules/questions'
const questionsStore = useQuestionsStore()


definePageMeta({
  layoutShowFooter: false,
  title: () => 'seo.test.title'
})
const { t } = useI18n()
const router = useRouter()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('seo.test.title'),
  description: () => t('seo.test.description'),
})
const questions = ref<TestQuestion[]>([])
const allQuestions = ref<TestQuestion[]>([])
const current = 0, total = ref(0)

// 步骤数据
const steps = ref([
  {
    id: 1,
    bgClass: 'uno-bg-[#FBF0F4]',
    innerBgClass: 'uno-bg-[#FBF0F4]',
    iconBgClass: 'uno-bg-[var(--color-pink-4)]',
    badgeBgClass: 'uno-bg-[#FD9AC0]',
    icon: '/images/test/1.png',
    titleKey: 'pages.testIntro.pc.step1.title',
    descKey: 'pages.testIntro.pc.step1.desc'
  },
  {
    id: 2,
    bgClass: 'uno-bg-white',
    innerBgClass: 'uno-bg-[#EEE5F8]',
    iconBgClass: 'uno-bg-[var(--color-purple-4)]',
    badgeBgClass: 'uno-bg-[#DEC4FA]',
    icon: '/images/test/2.png',
    titleKey: 'pages.testIntro.pc.step2.title',
    descKey: 'pages.testIntro.pc.step2.desc'
  },
  {
    id: 3,
    bgClass: 'uno-bg-[#D2F2E9]',
    innerBgClass: 'uno-bg-[#D2F2E9]',
    iconBgClass: 'uno-bg-[var(--color-green-3)]',
    badgeBgClass: 'uno-bg-[var(--color-green-2)]',
    icon: '/images/test/3.png',
    titleKey: 'pages.testIntro.pc.step3.title',
    descKey: 'pages.testIntro.pc.step3.desc'
  }
])

// 评分等级数据
const scales = ref([
  {
    key: 'sd',
    bgClass: 'uno-bg-[#F4D0CB]',
    borderClass: 'uno-border-[#F6BAB2]',
    labelKey: 'pages.testIntro.scale.sd'
  },
  {
    key: 'd',
    bgClass: 'uno-bg-[#F1DACE]',
    borderClass: 'uno-border-[#F5CEB6]',
    labelKey: 'pages.testIntro.scale.d'
  },
  {
    key: 'n',
    bgClass: 'uno-bg-[#F0F0F0]',
    borderClass: 'uno-border-[#D8D8D8]',
    labelKey: 'pages.testIntro.scale.n'
  },
  {
    key: 'a',
    bgClass: 'uno-bg-[#C6EAD8]',
    borderClass: 'uno-border-[#9FE2AA]',
    labelKey: 'pages.testIntro.scale.a'
  },
  {
    key: 'sa',
    bgClass: 'uno-bg-[#B3E1D6]',
    borderClass: 'uno-border-[#88D9BA]',
    labelKey: 'pages.testIntro.scale.sa'
  }
])

getTestQuestions().then(res => {
  const { data } = res.data.value;
  questions.value = data.list.map(q => q.text).slice(0, 5)
  total.value = data.list.length
  allQuestions.value = data.list
})
const nextStart = () => {
  questionsStore.currentStep = 1;
  questionsStore.setQuestions(allQuestions.value)
  router.push(localePath({ name: 'test-start' }))
}

</script>

<style scoped></style>
