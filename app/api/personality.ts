import { useGetFetch, usePostFetch,  } from '~/composables/useApi'
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


