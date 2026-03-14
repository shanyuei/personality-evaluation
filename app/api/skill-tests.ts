import { useGetFetch, usePostFetch } from '~/composables/useApi'
import type { ApiResponse } from '~/types/Api'
import type {
  SkillTestDetailData,
  SkillTestListData,
  SkillTestQuestionsData,
  SkillTestSubmitRequest,
  SkillTestSubmitResult,
} from '~/types/SkillTest'

/**
 * 获取技能测评列表
 * - Method: GET
 * - Path: /tests/list
 * - Query: { category? }
 * - 返回: { code, message, data: { list } }
 */
export const getSkillTestList = (data?: { category?: string }) => {
  return useGetFetch<ApiResponse<SkillTestListData>>(`/tests/list`, data)
}

/**
 * 获取技能测评详情
 * - Method: GET
 * - Path: /tests/detail
 * - Query: { test_id }
 * - 返回: { code, message, data: { test } }
 */
export const getSkillTestDetail = (data: { test_id: string | number }) => {
  return useGetFetch<ApiResponse<SkillTestDetailData>>(`/tests/detail`, data)
}

/**
 * 获取技能测评题目列表
 * - Method: GET
 * - Path: /tests/questions
 * - Query: { test_id }
 * - 返回: { code, message, data: { list } }
 */
export const getSkillTestQuestions = (data: { test_id: string | number }) => {
  return useGetFetch<ApiResponse<SkillTestQuestionsData>>(`/tests/questions`, data)
}

/**
 * 提交技能测评答案
 * - Method: POST
 * - Path: /tests/submit
 * - Body: { test_id, answers }
 * - 返回: { code, message, data: SkillTestSubmitResult }
 */
export const submitSkillTest = (data: SkillTestSubmitRequest) => {
  return usePostFetch<ApiResponse<SkillTestSubmitResult>>(`/tests/submit`, data)
}
