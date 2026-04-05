import { useGetFetch, usePostFetch } from "~/composables/useApi";
import type { TestQuestion } from "@/types/TestQuestion";
import type { ApiResponse } from '~/types/Api'

import type {
  PersonalQuestionsData,
  PersonalitySubmitData,
  PersonalitySubmitResult,
  PlanInfo,
  PaymentCreateRequest,
  PaymentCreateResult,
  PaymentPayRequest,
  PaymentPayResult
} from '~/types/Personality'

/**
 * 获取人格测试题目列表
 * - Method: GET
 * - Path: /personal/questions
 * - 返回: { code, message, data: { list } }
 */
export const getTestQuestions = () => {
  return useGetFetch<ApiResponse<PersonalQuestionsData>>(`/personal/questions`)
}
/**
 * 提交人格测试答案
 * - Method: POST
 * - Path: /personal/submit
 * - Body: { answers: [{ id, score }] }
 * - 返回: { code, message, data: { submissionId, report_id? } }
 */
export const submitTestAnswers = (data: PersonalitySubmitData) => {
  return usePostFetch<ApiResponse<PersonalitySubmitResult>>(`/personal/submit`, data)
}
/**
 * 获取套餐列表
 * - Method: GET
 * - Path: /plan_list
 * - 返回: { code, message, data: PlanInfo[] }
 */
export const getPlanList = () => {
  return useGetFetch<ApiResponse<PlanInfo[]>>(`/plan_list`)
}
/**
 * 创建订单
 * - Method: POST
 * - Path: /payment/create
 * - Body: { plan_id, report_id }
 * - 返回: { code, message, data: { order_id } }
 */
export const createOrder = (data: PaymentCreateRequest) => {
  return usePostFetch<ApiResponse<PaymentCreateResult>>(`/payment/create`, data)
}
/**
 * 获取支付信息
 * - Method: POST
 * - Path: /payment/pay-info
 * - Body: { order_id, email }
 * - 返回: { code, message, data: { client_secret } }
 */
export const payOrder = (data: { order_id: number, email: string }) => {
  return usePostFetch<ApiResponse<PaymentPayResult>>(`/payment/pay-info`, data)
}
