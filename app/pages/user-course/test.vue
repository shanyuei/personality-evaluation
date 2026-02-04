<template>
  <div class="uno-pt-6">
    <div class="page-container">
      <div class="course-header md:!uno-w-[720px] md:!uno-max-w-[720px] uno-mx-auto">
        <!-- 顶部导航与进度 -->
        <div class="course-nav">
          <AppLink :to="'/user-course/chapter-complete'" class="back-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </AppLink>

          <div class="question-count">{{ $t('pages.userCourseTest.questionCount', { current, total }) }}</div>
          <div class="progress-percent">{{ progress }}%</div>
        </div>

        <div class="course-progress">
          <div class="progress-bar" :style="{ width: progress + '%' }" />
        </div>
      </div>

      <!-- 题卡 -->
      <div class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_0px_#0000000D] uno-p-24px uno-mt-24px uno-mb-24px">
        <div
          class="uno-w-full md:uno-w-[720px] uno-mx-auto uno-mt-4 uno-bg-white uno-rounded-[16px] md:uno-rounded-[20px] ">
          <div class="uno-space-y-4">
              <p
                class="uno-text-[#011813] uno-font-Outfit uno-text-base md:uno-text-lg uno-text-center uno-leading-[1.2] uno-mb-8">
                {{ question }}</p>
              <RadioGroup v-model="selected" :items="radioItems" />
          </div>


          <!-- 提交按钮 -->
          <div class="uno-w-auto md:uno-w-[720px] uno-mx-auto uno-mt-24px uno-flex uno-justify-center ">
            <AppLink :to="'/user-course/test-complete'" class="uno-block uno-w-[672px]">
              <PrimaryButton>{{ $t('pages.userCourseTest.cta') }}</PrimaryButton>
            </AppLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import PrimaryButton from '@/components/ui/PrimaryButton.vue'
import RadioGroup from '@/components/ui/RadioGroup.vue'

const { t } = useI18n()
const current = ref(4)
const total = ref(10)
const progress = computed(() => Math.round((current.value / total.value) * 100))
const selected = ref<any>("")
// 模拟查询出来的问题内容
const question = ref('这是一个测试问题的内容，应该从数据源查询获取')
const options = [
  '选项 A - 这是第一个选项',
  '选项 B - 这是第二个选项',
  '选项 C - 这是第三个选项',
  '选项 D - 这是第四个选项'
]

const radioItems = computed(() => {
  return options.map((opt, idx) => ({
    label: opt,
    value: idx
  }))
})

definePageMeta({
  title: () => 'seo.userCourse.test.title',
  layoutShowPageTopIcons: false,
})

useSeoMeta({
  title: () => t('seo.userCourse.test.title'),
  description: () => t('seo.userCourse.test.description')
})
</script>

<style scoped></style>
