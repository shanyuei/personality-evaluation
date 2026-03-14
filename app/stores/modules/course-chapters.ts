import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { CourseDetailData } from '~/types/Course'

export const useCourseChaptersStore = defineStore('course-chapters', () => {
  const course = ref<CourseDetailData | null>(null)
  const courseId = ref<string>('')
  const position = ref<string>('1')
  const total = ref<string>('10')

  const canUse = computed(() => !!course.value && !!courseId.value)

  const setCourse = (value: CourseDetailData | null) => {
    course.value = value
    courseId.value = value?.id != null ? String(value.id) : ''
  }

  const setProgressContext = (data: { course_id: string, position: string, total: string }) => {
    courseId.value = data.course_id
    position.value = data.position
    total.value = data.total
  }

  const clear = () => {
    course.value = null
    courseId.value = ''
    position.value = '1'
    total.value = '10'
  }

  return {
    course,
    courseId,
    position,
    total,
    canUse,
    setCourse,
    setProgressContext,
    clear,
  }
}, {
  persist: {
    pick: ['course', 'courseId', 'position', 'total'],
  },
})

