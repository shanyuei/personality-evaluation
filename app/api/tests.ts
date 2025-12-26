import { useGetFetch } from "~/composables/useApi";
import type { TestQuestion } from "@/types/TestQuestion";

// 获取测试问题列表
export const getTestQuestions = () => {
    return useGetFetch<TestQuestion[]>(`/personal/questions`)
}