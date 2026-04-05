import type { TestQuestion } from './TestQuestion'

export interface PersonalityQuestion {
  id: number
  text: string
  type: number
  options?: {
    label: string
    value: number | string
    score?: number
  }[]
}

export interface PersonalitySubmitData {
  answers: {
    id: number
    score: number | string | (number | string)[]
  }[]
}

export interface PersonalitySubmitResult {
  submissionId: string | number
  report_id?: string | number
}

export interface PersonalityResult {
  id: number | string
  score: number
  level: string
  description: string
  advice?: string
}

export interface PlanInfo {
  id: number | string;
  name:string
  price:string
 currency:string
 unit:string


}

export interface PersonalQuestionsData {
  list: TestQuestion[]
}

export interface PaymentCreateRequest {
  plan_id: string
  report_id: string
}

export interface PaymentCreateResult {
  order_id: string
}

export interface PaymentPayRequest {
  order_id: string
  email: string
}

export interface PaymentPayResult {
  user_token: string
  client_secret: string
}
