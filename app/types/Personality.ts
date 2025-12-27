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