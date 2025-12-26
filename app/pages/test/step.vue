<template>
  <div class="page-container uno-py-6">
    <main class="uno-py-6 md:uno-py-12 md:uno-px-10">
      <div class="uno-mx-auto">
        <div class="uno-flex uno-flex-col uno-items-center uno-gap-4">
          <NuxtImg src="/images/process/1.png" alt="Process Icon"
            class="uno-w-12 md:uno-w-14 uno-h-12 md:uno-h-14 uno-rounded-full" />
          <h1
            class="uno-w-full uno-text-[#011813] uno-text-2xl md:uno-text-5xl uno-font-['Outfit'] uno-text-center uno-font-semibold uno-leading-[1.2]">
            {{ $t('pages.testIntro.title') }}</h1>
        </div>

        <div class="course-header md:!uno-w-[80%] md:!uno-max-w-[80%] uno-mx-auto">
          <div class="course-nav">
            <div class="progress-percent">{{ progress }}%</div>
            <div /> <!-- 占位符，保持布局一致 -->
            <div class="question-count">{{ $t('pages.testIntro.progress.step', { currentStep, totalSteps }) }}</div>
          </div>
          <div class="course-progress">
            <div class="progress-bar" :style="{ width: progress + '%' }" />
          </div>
        </div>

        <div class="uno-w-full md:uno-w-[80%] uno-mx-auto uno-mt-4">
          <div class="uno-flex uno-items-center uno-justify-between">
            <div @click="prevStep"
              class="uno-inline-flex uno-items-center uno-gap-2 hover:uno-text-[var(--ui-foreground)]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <h2
              class="uno-text-[#011813] uno-text-base md:uno-text-lg uno-font-['Outfit'] uno-text-center uno-font-semibold uno-leading-[1.2]">
              {{ $t('pages.testIntro.instructions') }}</h2>
            <div class="uno-w-6" />
          </div>

          <div class="uno-p-4 md:uno-p-6">
            <div class="uno-flex uno-flex-row uno-items-baseline uno-justify-center uno-gap-0 uno-mt-4 uno-px-[5%]">
              <div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1">
                <div
                  class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F4D0CB] uno-border-solid uno-border-[#F6BAB2] uno-border-2" />
                <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.testIntro.scale.sd')
                }}</span>
              </div>
              <div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1">
                <div
                  class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F1DACE] uno-border-solid uno-border-[#F5CEB6] uno-border-2" />
                <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.testIntro.scale.d')
                }}</span>
              </div>
              <div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1">
                <div
                  class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F0F0F0] uno-border-solid uno-border-[#D8D8D8] uno-border-2" />
                <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.testIntro.scale.n')
                }}</span>
              </div>
              <div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1">
                <div
                  class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#C6EAD8] uno-border-solid uno-border-[#9FE2AA] uno-border-2" />
                <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.testIntro.scale.a')
                }}</span>
              </div>
              <div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1">
                <div
                  class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#B3E1D6] uno-border-solid uno-border-[#88D9BA] uno-border-2" />
                <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.testIntro.scale.sa')
                }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="uno-w-full md:uno-w-[80%] uno-mx-auto uno-mt-4">
          <div class="uno-space-y-4">
            <div v-for="(q, qi) in questions" :key="qi"
              class="uno-bg-white uno-rounded-[16px] md:uno-rounded-[20px] uno-border uno-border-[var(--ui-border)] uno-shadow-[0px_2px_8px_rgba(0,0,0,0.06)]">
              <div class="uno-p-4 md:uno-p-6">
                <p
                  class="uno-text-[#011813] uno-font-['Outfit'] uno-text-base md:uno-text-lg uno-text-center uno-leading-[1.2] uno-mb-8">
                  {{ q.text }}</p>
                <div
                  class="uno-flex uno-flex-row uno-items-center uno-justify-center uno-gap-2 md:uno-gap-[20px] uno-mt-4 uno-px-[5%]">
                  <template v-for="i in [1, 2, 3, 4, 5]" :key="i">
                    <div class="uno-flex-1 uno-flex uno-justify-center uno-items-center">

                      <div class="uno-flex-1 uno-flex uno-justify-center uno-items-center">
                        <div
                          class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px]   uno-border-solid  uno-border-2"
                          :class="[i === 1 ? 'uno-bg-[#F4D0CB] uno-border-[#F6BAB2]' : i === 2 ? 'uno-bg-[#F1DACE] uno-border-[#F5CEB6]' : i === 3 ? 'uno-bg-[#F0F0F0] uno-border-[#D8D8D8]' : i === 4 ? 'uno-bg-[#C6EAD8] uno-border-[#9FE2AA]' : 'uno-bg-[#B3E1D6] uno-border-[#88D9BA]']"
                          @click="useAnswers(q, i)">
                          <IconsSad v-if="userAnswers[q.id] === i" />
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>

          <p
            class="uno-text-[#8D8E8F] uno-font-['Outfit'] uno-text-xs md:uno-text-sm uno-text-center uno-leading-[1.2] uno-mt-6">
            {{
              $t('pages.testIntro.notice') }}</p>
        </div>

        <div class="uno-w-full md:uno-w-[602px] uno-mx-auto uno-mt-6 uno-flex uno-justify-center">
          <UButton :ui="UButtonTheme" @click="nextStep">{{ $t('pages.testIntro.cta') }}</UButton>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import UButtonTheme from '~/theme/UButton'
import { useQuestionsStore } from '~/stores/modules/questions'
import { storeToRefs } from 'pinia'
import type { TestQuestion } from '~/types/TestQuestion'
const questionsStore = useQuestionsStore()
const { totalSteps, currentStep, progress,userAnswers } = storeToRefs(questionsStore)
const { t } = useI18n()
const route = useRoute()
const router = useRouter()
definePageMeta({
  layoutShowFooter: false,
  title: () => 'seo.test.step.title'
})

useSeoMeta({
  title: () => t('seo.test.step.title'),
  description: () => t('seo.test.step.description'),
})
const questions = ref<TestQuestion[]>([])
const prevStep = () => {
  if (questionsStore.currentStep > 1) {
    router.push({ name: 'test-step', query: { step: questionsStore.currentStep - 1 } })
  } else {
    router.push({ name: 'test-start' })
  }
}
const nextStep = () => {
  if (questionsStore.currentStep < totalSteps.value) {
    router.push({ name: 'test-step', query: { step: questionsStore.currentStep + 1 } })
  } else {
    router.push({ name: 'test-result' })
  }
}
const useAnswers = (q: TestQuestion, i: number) => {
  console.log(q, i)
  userAnswers.value[q.id] = i
  // questionsStore.userAnswers[q.id] = i
}
watch(
  () => route.query.step,
  (val) => {
    const stepNum = Number(val) || 1
    questionsStore.currentStep = stepNum
    const list = questionsStore.getQuestionsByStep(stepNum)
    questions.value = list
  },
  { immediate: true }
)


</script>

<style scoped></style>
