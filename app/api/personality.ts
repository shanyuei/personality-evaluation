import { useGetFetch, usePostFetch, $baseFetch } from '~/composables/useApi'
import type {
  PersonalityQuestion,
  PersonalityResult,
  PersonalitySubmitData,
  PersonalitySubmitResult
} from '~/types/Personality'

export const getPersonalityQuestions = () => {
  return useGetFetch<PersonalityQuestion[]>('/personal/questions')
}

export const submitPersonalityAnswers = (data: PersonalitySubmitData) => {
  return usePostFetch<PersonalitySubmitResult>('/personal/submit', data)
}

export const getPersonalityResult = (submissionId: string | number) => {
  return useGetFetch<PersonalityResult>('/personal/result', {
    query: { submissionId }
  })
}

export const $getPersonalityQuestions = () => {
  return $baseFetch<PersonalityQuestion[]>('/personal/questions')
}

export const $submitPersonalityAnswers = (data: PersonalitySubmitData) => {
  return $baseFetch<PersonalitySubmitResult>('/personal/submit', {
    method: 'POST',
    body: data
  })
}

export const $getPersonalityResult = (submissionId: string | number) => {
  return $baseFetch<PersonalityResult>('/personal/result', {
    method: 'GET',
    query: { submissionId }
  } as any)
}

