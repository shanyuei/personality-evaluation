export type SkillTestCategory = 'soft' | 'hard' | 'all'

export interface SkillTestSummary {
  id: number | string
  category?: SkillTestCategory
  title: string
  description?: string
  question_count?: number
  completed?: boolean
  score?: number
  total_score?: number
  [property: string]: any
}

export interface SkillTestQuestionOption {
  label: string
  value: string | number
  [property: string]: any
}

export interface SkillTestQuestion {
  id: number | string
  test_id?: number | string
  text: string
  options?: SkillTestQuestionOption[]
  [property: string]: any
}

export interface SkillTestQuestionsData {
  list: SkillTestQuestion[]
}

export interface SkillTestListData {
  list: SkillTestSummary[]
}

export interface SkillTestDetailData {
  test: SkillTestSummary
}

export interface SkillTestSubmitAnswer {
  id: number | string
  value: string | number | (string | number)[]
}

export interface SkillTestSubmitRequest {
  id: number | string
  answer: string
}

export interface SkillTestSubmitResult {
  submission_id: number | string
  score?: number
  total?: number
  report_id?: number | string
  [property: string]: any
}

export interface SkillTestResultData {
  test_id: number
  score: number
  total_score: number
  title: string
  summary: string
  improvement: string
}

