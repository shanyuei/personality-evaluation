import { usePostFetch } from '~/composables/useApi'
import type { ApiResponse } from '~/types/Api'
import type { CancelSubscriptionRequest, CancelSubscriptionResult } from '~/types/Order'

/**
 * 取消订阅
 * - Method: POST
 * - Path: /orders/cancel-subscription
 * - Body: { email, reasons?, note? }
 * - 返回: { code, message, data: { success } }
 */
export const cancelSubscription = (data: CancelSubscriptionRequest) => {
  return usePostFetch<ApiResponse<CancelSubscriptionResult>>(`/orders/cancel-subscription`, data)
}
