import { ref } from 'vue';

export function useCurious() {
  const { t } = useI18n()
  const title = ref<string>(t('pages.contact.curiousTitle'));
  const description = ref<string>(t('pages.contact.curiousDesc'));
  const buttonText = ref<string>(t('pages.contact.curiousButtonText'));
  const buttonDisabled = ref<boolean>(false);

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
