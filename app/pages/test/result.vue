<template>
  <div class="page-container uno-py-6">
    <main class="uno-py-8 md:uno-py-16 uno-px-0 md:uno-px-10">
      <div class="uno-max-w-full md:uno-max-w-[880px] uno-mx-auto">
        <section
          class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] ">
          <div class="uno-p-6 md:uno-p-10">
            <div class="uno-flex uno-items-center uno-justify-center uno-mb-6">
              <div
                class="uno-w-96px uno-h-96px uno-rounded-full uno-bg-[rgba(221,221,221,0.5)] uno-flex uno-flex-col uno-items-center uno-justify-center uno-font-Outfit uno-text-[#4E5255] uno-text-16px md:uno-text-16px text-center"
                style="white-space: pre-line;"
                v-html="$t('pages.testEnd.score', { value: scoreValue, total: scoreTotal })">
              </div>
            </div>

            <h1
              class="uno-self-stretch uno-text-[#011813] uno-text-2xl md:uno-text-[32px] uno-font-Outfit uno-text-center uno-font-semibold uno-leading-[1.2] style-1">
              {{ resultTitle || $t('pages.testEnd.title') }}</h1>
            <p
              class="uno-w-full uno-text-[#4E5255] uno-text-sm uno-font-Outfit uno-leading-normal uno-mx-auto uno-mt-4">
              {{ resultSummary || $t('pages.testEnd.description') }}</p>

            <div class="uno-mt-6 uno-w-full uno-mx-auto uno-p-2 md:uno-p-0">
              <div class="uno-text-[#4E5255] uno-font-Outfit uno-prose uno-max-w-none" v-html="resultImprovement"></div>
            </div>

            <div
              class="uno-flex uno-flex-col md:uno-flex-row uno-items-center uno-justify-center uno-gap-24px uno-mt-6 md:uno-mt-8">
              <div class="uno-w-full md:uno-w-[calc((100%-24px)/2)]">
                <AppLink :to="testStartLink" >
                  <PrimaryButton>{{ $t('pages.testEnd.ctaPrimary') }}</PrimaryButton>
                </AppLink>
              </div>
              <div class="uno-w-full md:uno-w-[calc((100%-24px)/2)]">
                <AppLink :to="'/profile'" >
                  <OutlineButton fontSize="18px">{{ $t('pages.testEnd.ctaSecondary') }}</OutlineButton>
                </AppLink>
              </div>
            </div>

            <p
              class="uno-w-full uno-text-[#4E5255] uno-text-xs uno-font-Outfit uno-text-center uno-leading-normal uno-mt-4 uno-mx-auto">
              {{ $t('pages.testEnd.disclaimer') }}</p>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PrimaryButton from '~/components/ui/PrimaryButton.vue'
import OutlineButton from '~/components/ui/OutlineButton.vue'
import { getSkillTestResult } from '~/api/skill-tests'

const { t } = useI18n()
const route = useRoute()

definePageMeta({
  layoutShowFooter: false,
  layoutShowPageTopIcons: false,
  title: () => 'seo.test.result.title'
})

useSeoMeta({
  title: () => t('seo.test.result.title'),
  description: () => t('seo.test.result.description'),
})

// 获取 test_id 参数
const testId = computed(() => route.query.test_id as string | number)

// 获取测试结果数据
const { data: resultData } = await getSkillTestResult({
  id: testId.value
})

// 计算属性
const scoreValue = computed(() => resultData.value?.data?.score ?? 0)
const scoreTotal = computed(() => resultData.value?.data?.total_score ?? 0)
const resultTitle = computed(() => resultData.value?.data?.title ?? '')
const resultSummary = computed(() => resultData.value?.data?.summary ?? '')
const resultImprovement = computed(() => resultData.value?.data?.improvement ?? '')

// 获取随机测试ID
const randTestId = computed(() => resultData.value?.data?.rand_test_id ?? '')

// 生成测试开始页面链接
const testStartLink = computed(() => {
  if (randTestId.value) {
    return `/test/start?test_id=${randTestId.value}`
  }
  return '/test/start'
})
</script>

<style scoped></style>
