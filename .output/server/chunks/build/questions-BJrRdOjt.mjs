import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useQuestionsStore = defineStore("questions", () => {
  const questions = ref([]);
  const questionType = ref("personality");
  const currentStep = ref(1);
  const currentAnswerCount = computed(() => {
    return Object.keys(userAnswers.value).length;
  });
  const totalSteps = computed(() => Math.ceil(questions.value.length / 5));
  const progress = computed(() => {
    return Math.round(currentAnswerCount.value / questions.value.length * 100);
  });
  const userAnswers = ref({});
  const setQuestions = (value) => {
    questions.value = value;
  };
  const getQuestionsByStep = (step) => {
    const start = (step - 1) * 5;
    const end = start + 5;
    return questions.value.slice(start, end);
  };
  return {
    questions,
    questionType,
    currentStep,
    totalSteps,
    progress,
    userAnswers,
    setQuestions,
    getQuestionsByStep
  };
}, {
  persist: {
    pick: ["questions", "questionType", "currentStep", "currentIndex", "userAnswers"]
  }
});

export { useQuestionsStore as u };
//# sourceMappingURL=questions-BJrRdOjt.mjs.map
