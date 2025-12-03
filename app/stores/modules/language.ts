import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n'



export const useLanguageStore = defineStore('language', () => {
    const language = useCookieLocale() ?? ref(useBrowserLocale()) ?? ref('en');
    const i18n = useI18n();
    const languageName = computed(() => {
        return languageOptions.value.find(item => item.value === language.value)?.label || ''
    })
    const languageOptions = computed(() => {
        const list: any[] = i18n.locales.value || [];
        return list.map(item => {
            item.label = item.name;
            item.value = item.code;
            return {
                ...item,
                label: item.name,
                value: item.code
            }
        }) as { label: string, value: string }[];
    })

    // vue-i18n 切换语言
    const changeLanguage = (value: 'en' | 'zh' | 'ja') => {
        i18n.setLocale(value);
        console.log('changeLanguage', value, i18n)
        language.value = value;
    }

    return {
        language,
        i18n,
        languageOptions,
        languageName,
        changeLanguage,
    };
});
