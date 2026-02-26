import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

// 单例状态，确保所有组件共享同一个状态
let title = ref<string>('');
let description = ref<string>('');
let buttonText = ref<string>('');
let buttonDisabled = ref<boolean>(false);

// 初始化函数，仅在首次使用时调用
function initialize() {
  const { t } = useI18n();
  title.value = t('pages.contact.curiousTitle');
  description.value = t('pages.contact.curiousDesc');
  buttonText.value = t('pages.contact.curiousButtonText');
  buttonDisabled.value = false;
}

export function useCurious() {
  // 确保状态已初始化
  if (!title.value) {
    initialize();
  }

  const setTitle = (newTitle: string) => {
    title.value = newTitle;
  };

  const setDescription = (newDescription: string) => {
    description.value = newDescription;
  };

  const setButtonText = (newButtonText: string) => {
    buttonText.value = newButtonText;
  };

  const setButtonDisabled = (newButtonDisabled: boolean) => {
    buttonDisabled.value = newButtonDisabled;
  };

  const reset = () => {
    title.value = '';
    description.value = '';
    buttonText.value = '';
    buttonDisabled.value = false;
  };

  return {
    title,
    description,
    buttonText,
    buttonDisabled,
    setTitle,
    setDescription,
    setButtonText,
    setButtonDisabled,
    reset
  };
}
