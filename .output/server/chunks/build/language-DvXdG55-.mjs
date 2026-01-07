import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { N as useCookieLocale, O as useBrowserLocale, u as useI18n } from './server.mjs';

const useLanguageStore = defineStore("language", () => {
  const language = useCookieLocale() ?? ref(useBrowserLocale()) ?? ref("en");
  const i18n = useI18n();
  const languageName = computed(() => {
    return languageOptions.value.find((item) => item.value === language.value)?.label || "English";
  });
  const languageOptions = computed(() => {
    const list = i18n.locales.value || [];
    return list.map((item) => {
      item.label = item.name;
      item.value = item.code;
      return {
        ...item,
        label: item.name,
        value: item.code
      };
    });
  });
  const changeLanguage = (value) => {
    i18n.setLocale(value);
    console.log("changeLanguage", value, i18n);
    language.value = value;
  };
  return {
    language,
    i18n,
    languageOptions,
    languageName,
    changeLanguage
  };
});

export { useLanguageStore as u };
//# sourceMappingURL=language-DvXdG55-.mjs.map
