export interface CancelSubscriptionRequest {
  email: string
  reasons?: string[]
  note?: string
  [property: string]: any
}

export interface CancelSubscriptionResult {
  success: boolean
  [property: string]: any
}

