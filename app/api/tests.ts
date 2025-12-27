import { useGetFetch, usePostFetch } from "~/composables/useApi";
import type { TestQuestion } from "@/types/TestQuestion";

import type {
  PersonalitySubmitData,
  PersonalitySubmitResult,
  PlanInfo
} from '~/types/Personality'

// 获取测试问题列表
export const getTestQuestions = () => {
  return useGetFetch<TestQuestion[]>(`/personal/questions`)
}
// 提交测试答案
export const submitTestAnswers = (data: PersonalitySubmitData) => {
  return usePostFetch<PersonalitySubmitResult>(`/personal/submit`, data)
}
// 获取 套餐信息
export const getPlanList = () => {
  return useGetFetch<PlanInfo[]>(`/plan_list`)
}
// 创建订单
export const createOrder = (data: { plan_id: string , report_id: string }) => {
  return usePostFetch<any>(`/payment/create`, data)
}
//  支付 
export const payOrder = (data: { order_id: string, email: string }) => {
  return usePostFetch<any>(`/payment/pay`, data)
}