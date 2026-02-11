<template>
  <div class="page-container uno-py-6">
    <main class="uno-py-6 md:uno-py-12 md:uno-px-10">
      <div class="uno-mx-auto">
        <div class="uno-flex uno-flex-col uno-items-center uno-gap-4">
          <NuxtImg src="/images/process/1.png" alt="Process Icon"
            class="uno-w-12 md:uno-w-14 uno-h-12 md:uno-h-14 uno-rounded-full" />
          <h1
            class="uno-w-full uno-text-[#011813] uno-text-32px md:uno-text-5xl uno-font-Outfit uno-text-center uno-font-semibold uno-leading-[1.2] uno-mb-20px md:uno-mb-40px">
            {{ $t('pages.test.index.title') }}</h1>
        </div>


        <div class="course-header md:!uno-w-[720px] md:!uno-max-w-[720px] uno-mx-auto ">
          <div class="course-nav">
            <div class="progress-percent">{{ progress }}{{ $t('common.percentIcon') }}</div>
            <div class="question-count">{{ $t('common.stepTotal', { current: currentStep, total: totalSteps }) }}</div>

          </div>
          <div class="course-progress">
            <div class="progress-bar" :style="{ width: 0 + '%' }" />
          </div>
        </div>

        <div class="uno-w-full md:uno-w-[80%] uno-mx-auto uno-mt-4">
          <div class="uno-flex uno-items-center uno-justify-between">
            <div class="uno-inline-flex uno-items-center uno-gap-2 hover:uno-text-[var(--ui-foreground)]"
              @click="prevStep">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
            <h2
              class="uno-text-[#011813] uno-text-18px md:uno-text-base uno-font-Outfit uno-text-center uno-font-semibold uno-leading-[1.2]">
              {{ $t('pages.test.index.instructions') }}</h2>
            <div class="uno-w-6" />
          </div>

          <div class="uno-p-4 md:uno-p-6">
            <div class="uno-flex uno-flex-row uno-items-baseline uno-justify-between uno-gap-0 uno-mt-4 uno-px-[5%]">
              <div v-for="scale in scales" :key="scale.key"
                class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1">
                <div
                  class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-border-solid uno-border-2"
                  :class="[scale.bgClass, scale.borderClass]" />
                <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ scale.label
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
                  class="uno-text-[#011813] uno-font-Outfit uno-text-base md:uno-text-16px uno-text-center uno-leading-[1.2] uno-mb-8">
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
            class="uno-text-[#8D8E8F] uno-font-Outfit uno-text-sm uno-text-center uno-leading-[1.2] uno-mt-16px md:uno-mt-6">
            {{
              $t('pages.test.index.notice') }}</p>
        </div>

        <div class="uno-w-full md:uno-w-[602px] uno-mx-auto uno-mt-6 uno-flex uno-justify-center">
          <PrimaryButton @click="nextStep">
            {{ $t('common.continue') }}
            <!-- {{ currentStep < totalSteps ? $t('pages.testIntro.ctaNext') : $t('pages.testIntro.ctaSubmit') }} -->
          </PrimaryButton>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import PrimaryButton from '~/components/ui/PrimaryButton.vue'
import { useQuestionsStore } from '~/stores/modules/questions'
import { storeToRefs } from 'pinia'
import type { TestQuestion } from '~/types/TestQuestion'
const questionsStore = useQuestionsStore()
const { totalSteps, currentStep, progress, userAnswers } = storeToRefs(questionsStore)
const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const localePath = useLocalePath()
definePageMeta({
  layoutShowFooter: false,
  title: () => 'seo.test.index.title'
})

useSeoMeta({
  title: () => t('seo.test.index.title', {separator: "|"}),
  description: () => t('seo.test.index.description'),
})
const questions = ref<TestQuestion[]>([])
const prevStep = () => {
  if (questionsStore.currentStep > 1) {
    router.push(localePath({ name: 'test-step', query: { step: questionsStore.currentStep - 1 } }))
  } else {
    router.push(localePath({ name: 'test-start' }))
  }
}
const nextStep = () => {
  if (questionsStore.currentStep < totalSteps.value) {
    router.push(localePath({ name: 'test-step', query: { step: questionsStore.currentStep + 1 } }))
  } else {
    router.push(localePath({ name: 'test-analyzing' }))
  }
}
const useAnswers = (q: TestQuestion, i: number) => {
  userAnswers.value[q.id] = i
  // questionsStore.userAnswers[q.id] = i
}

const mockUserAnswers = () => {
  questions.value.forEach(q => {
    userAnswers.value[q.id] = Math.floor(Math.random() * 5) + 1;
  });
  setTimeout(() => {
    nextStep();
  }, 3000)
}

// 评分等级数据
const scales = [
  { key: 'sd', label: t('pages.test.index.scale.sd'), bgClass: 'uno-bg-[#F4D0CB]', borderClass: 'uno-border-[#F6BAB2]' },
  { key: 'd', label: t('pages.test.index.scale.d'), bgClass: 'uno-bg-[#F1DACE]', borderClass: 'uno-border-[#F5CEB6]' },
  { key: 'n', label: t('pages.test.index.scale.n'), bgClass: 'uno-bg-[#F0F0F0]', borderClass: 'uno-border-[#D8D8D8]' },
  { key: 'a', label: t('pages.test.index.scale.a'), bgClass: 'uno-bg-[#C6EAD8]', borderClass: 'uno-border-[#9FE2AA]' },
  { key: 'sa', label: t('pages.test.index.scale.sa'), bgClass: 'uno-bg-[#B3E1D6]', borderClass: 'uno-border-[#88D9BA]' }
]
watch(
  () => route.query.step,
  (val) => {
    const stepNum = Number(val) || 1
    questionsStore.currentStep = stepNum
    const list = questionsStore.getQuestionsByStep(stepNum)
    questions.value = list


    // mockUserAnswers();

  },
  { immediate: true }
)


</script>

<style scoped></style>
