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
      <div
        class="uno-bg-white uno-rounded-[24px] uno-p-24px uno-mt-24px uno-mb-24px md:!uno-w-[720px] md:!uno-max-w-[720px] uno-mx-auto">
        <div class="uno-w-full uno-mx-auto uno-mt-4 uno-bg-white uno-rounded-[16px] md:uno-rounded-[20px] ">
          <div class="uno-space-y-4">
            <p
              class="uno-text-[#011813] uno-font-Outfit uno-text-base md:uno-text-16px uno-text-center uno-leading-[1.2] uno-mb-8">
              {{ question }}</p>
            <RadioGroup v-model="selected" :items="radioItems" />
          </div>


          <!-- 提交按钮 -->
          <div class="uno-w-full uno-mx-auto uno-mt-24px uno-flex uno-justify-center ">
            <button 
              class="uno-block uno-w-full"
              @click="handleSubmit"
            >
              <PrimaryButton>{{ isLastQuestion ? $t('pages.userCourseTest.finish') : $t('pages.userCourseTest.next') }}</PrimaryButton>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import PrimaryButton from '@/components/ui/PrimaryButton.vue'
import RadioGroup from '@/components/ui/RadioGroup.vue'
import { getSkillTestQuestions, submitSkillTest } from '~/api/skill-tests'

const { t } = useI18n()
const route = useRoute()

// 获取 test_id 参数
const testId = computed(() => route.query.test_id as string | number)

// 获取测试详情数据
const { data: testDetailData } = await getSkillTestQuestions({
  id: testId.value
})

// 测试信息
const testInfo = computed(() => testDetailData.value?.data || {})

// 题目列表
const questions = computed(() => testInfo.value?.question_data || [])

// 当前题目索引
const currentIndex = ref(0)

// 当前题目
const currentQuestion = computed(() => questions.value[currentIndex.value])

// 当前题号
const current = computed(() => currentIndex.value + 1)

// 总题数
const total = computed(() => testInfo.value?.question_num || questions.value.length)

// 进度百分比
const progress = computed(() => Math.round((current.value / total.value) * 100))

// 选中的答案
const selected = ref<string | number>("")

// 题目内容
const question = computed(() => currentQuestion.value?.question || '')

// 选项列表
const radioItems = computed(() => {
  const answers = currentQuestion.value?.answers || []
  return answers.map((answer: string, index: number) => ({
    label: answer,
    value: index
  }))
})

// 是否是最后一个题目
const isLastQuestion = computed(() => currentIndex.value === questions.value.length - 1)

// 答案数组
const answers = ref<{ id: number | string; value: string | number }[]>([])

// 处理提交
const handleSubmit = async () => {
  // 检查是否已选择答案
  if (selected.value === '' || selected.value === undefined || selected.value === null) {
    // 未选择答案，显示提示
    return
  }

  // 保存当前答案
  if (currentQuestion.value) {
    const existingIndex = answers.value.findIndex(a => a.id === currentIndex.value)
    if (existingIndex >= 0) {
      answers.value[existingIndex].value = selected.value
    } else {
      answers.value.push({
        id: currentIndex.value,
        value: selected.value
      })
    }
  }

  if (isLastQuestion.value) {
    // 最后一个题目，提交答案
    await submitAnswers()
  } else {
    // 切换到下一个题目
    currentIndex.value++
    // 恢复之前的答案或清空
    const nextAnswer = answers.value.find(a => a.id === currentIndex.value)
    selected.value = nextAnswer?.value || ''
  }
}

// 提交答案
const submitAnswers = async () => {
  try {
    // 将答案转换为逗号分隔的字符串，如 "1,2,3"（value + 1，因为选项从0开始但提交需要从1开始）
    const answersString = answers.value
      .sort((a, b) => Number(a.id) - Number(b.id))
      .map(answer => Number(answer.value) + 1)
      .join(',')

    await submitSkillTest({
      id: testId.value,
      answer: answersString
    })
    // 跳转到测试结果页面
    await navigateTo(`/test/result?test_id=${testId.value}`)
  } catch (error) {
    console.error('Error submitting test:', error)
  }
}

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
