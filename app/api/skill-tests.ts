import { useGetFetch, usePostFetch } from '~/composables/useApi'
import type { ApiResponse } from '~/types/Api'
import type {
  SkillTestDetailData,
  SkillTestListData,
  SkillTestQuestionsData,
  SkillTestResultData,
  SkillTestSubmitRequest,
  SkillTestSubmitResult,
} from '~/types/SkillTest'

/**
 * 获取技能测评列表
 * - Method: GET
 * - Path: /tests/list
 * - Query: { type? }
 * - type: 测评类型， 1、soft skills 2、hard skills 0全部
 * - 返回: { code, message, data: { list } }
 */
export const getSkillTestList = (data?: { type?: string }) => {
  console.log('getSkillTestList', data)
  return useGetFetch<ApiResponse<SkillTestListData>>(`/tests/list`, data)
}



/**
 * 获取技能测评题目列表
 * - Method: GET
 * - Path: /tests/questions
 * - Query: { id }
 * - 返回: { code, message, data: { list } }
 */
export const getSkillTestQuestions = (data: { id: string | number }) => {
  return useGetFetch<ApiResponse<SkillTestQuestionsData>>(`/tests/detail`, data)
}

/**
 * 提交技能测评答案
 * - Method: POST
 * - Path: /tests/submit
 * - Body: { id, answer }
 * - 返回: { code, message, data: SkillTestSubmitResult }
 */
export const submitSkillTest = (data: SkillTestSubmitRequest) => {
  return usePostFetch<ApiResponse<SkillTestSubmitResult>>(`/tests/submit`, data)
}

/**
 * 获取技能测评结果
 * - Method: GET
 * - Path: /tests/result
 * - Query: { id }
 * - 返回: { code, message, data: SkillTestResultData }
 */
export const getSkillTestResult = (data: { id: string | number }) => {
  return useGetFetch<ApiResponse<SkillTestResultData>>(`/tests/result`, data)
}
