import { usePostFetch } from "~/composables/useApi";
import type { ApiResponse } from '~/types/Api'

export interface PaymentResultRequest {
  order_sn: string
}

export interface PaymentResultData {
  order_sn: string
  status: string
  customer_email?: string
  customer_name?: string
  amount_total?: number
  currency?: string
}

export const getPaymentResult = (data: PaymentResultRequest) => {
  return usePostFetch<ApiResponse<PaymentResultData>>(`/payment-result`, data)
}
