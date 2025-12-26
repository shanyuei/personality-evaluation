import { useGetFetch , usePostFetch } from "~/composables/useApi";
import type { TestQuestion } from "@/types/TestQuestion";
import {
  submitPersonalityAnswers,
  getPersonalityResult
} from '~/api/personality'
import type {
  PersonalitySubmitData,
  PersonalitySubmitResult,
  PersonalityResult
} from '~/types/Personality'

// 获取测试问题列表
export const getTestQuestions = () => {
    return useGetFetch<TestQuestion[]>(`/personal/questions`)
}
// 提交测试答案
export const submitTestAnswers = (data: PersonalitySubmitData) => {
return usePostFetch<PersonalitySubmitResult>(`/personal/submit`, data)
}
