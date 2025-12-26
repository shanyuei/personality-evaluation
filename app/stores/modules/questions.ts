import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { TestQuestion } from '~/types/TestQuestion';

export const useQuestionsStore = defineStore('questions', () => {
    // 测试问题
    const questions = ref<TestQuestion[]>([]);
    // 测试类型
    const questionType = ref('personality');
    // 当前步骤
    const currentStep = ref(1);
    // 当前答题下标
    const currentIndex = ref(0);
    // 总步骤数
    const totalSteps = computed(() => Math.ceil(questions.value.length / 5));
    // 答题进度
    const progress = computed(() => {
        return Math.round((currentIndex.value / questions.value.length) * 100);
    })
    // 用户选择答案
    const userAnswers = ref<Record<number, number>>({});


    const setQuestions = (value: TestQuestion[]) => {
        questions.value = value;
    }
    // 根据步骤 获取 问题，一步 五题，逻辑类似于分页
    const getQuestionsByStep = (step: number) => {
        const start = (step - 1) * 5;
        const end = start + 5;
        return questions.value.slice(start, end);
    }



    return {
        questions,
        questionType,
        currentStep,
        totalSteps,
        progress,
        userAnswers,
        setQuestions,
        getQuestionsByStep,
    };
}, {
     persist: {
        pick: ['questions', 'questionType', 'currentStep', 'currentIndex', 'userAnswers']
     },
});
