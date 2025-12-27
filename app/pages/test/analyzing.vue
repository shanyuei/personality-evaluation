<template>
  <div class="page-container uno-py-6">
    <div class=" uno-flex uno-flex-col uno-items-center uno-justify-center uno-py-6 md:uno-py-12 uno-px-4 md:uno-px-6">
      <NuxtImg src="/images/test/4.png" alt="test image" width="450" height="450" />
      <!-- 底部进度条和提示文本 -->
      <div class="uno-w-full uno-max-w-md md:uno-max-w-lg uno-px-2">
        <div class="uno-w-full uno-h-2 uno-bg-[var(--ui-muted)] uno-rounded-full uno-overflow-hidden uno-shadow-sm uno-relative">
          <div class="bar-loading" :style="{ width: progress + '%' }" />
        </div>
        <p
          class="uno-text-center uno-text-[#8D8E8F] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2] uno-mt-3 md:uno-mt-4 uno-text-[10px] md:uno-text-xs uno-max-w-[70%] md:uno-max-w-[60%] uno-mx-auto">
          We are analyzing your answers and preparing your personality type report...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { submitTestAnswers } from '~/api/tests'
import { useQuestionsStore } from '~/stores/modules/questions'
import { storeToRefs } from 'pinia'


const { t } = useI18n()
const questionsStore = useQuestionsStore()
const { userAnswers } = storeToRefs(questionsStore)
definePageMeta({
  title: () => 'seo.test.analyzing.title'
})
useSeoMeta({
  title: () => t('seo.test.analyzing.title'),
  description: () => t('seo.test.analyzing.description')
})
const router = useRouter()

const progress = ref(0)
onMounted(async () => {
  const answers = []
  for (const key in userAnswers.value) {
    const score = userAnswers.value[key]
    if (score == null || score === 0) continue
    answers.push({
      id: Number(key),
      score
    })
  }
  // 进度模拟到 85%
  let incre = setInterval(() => {
    progress.value = Math.min(85, progress.value + 3)
  }, 120)
  try {
    const { data } = await submitTestAnswers({ answers })
    // 请求完成后进度拉满并跳转
    clearInterval(incre)
    progress.value = 100

    const reportId = data.value?.data?.report_id

    setTimeout(() => {
      router.push({
        path: '/pricing',
        query: { reportId }
      })
    }, 500)
  } catch (e) {
    clearInterval(incre)
    progress.value = 100
    // 请求失败也收尾，后续可在此提示错误
  }
})
</script>



<style scoped>
.bar-loading {
  position: absolute;
  inset: 0 auto 0 0;
  height: 100%;
  border-radius: inherit;
  background: var(--ui-primary);
  width: 0;
  transition: width 300ms ease;
}
.bar-loading::after {
  content: "";
  position: absolute;
  top: 0;
  left: -20%;
  height: 100%;
  width: 40%;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 100%);
  animation: shimmer 1.2s linear infinite;
}
@keyframes shimmer {
  0% { transform: translateX(0); }
  100% { transform: translateX(200%); }
}
</style>
