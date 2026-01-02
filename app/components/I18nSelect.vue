<template>
    <UPopover arrow mode="click" :dismissible="false" :ui="{ content: '' }">
        <div
            class=" uno-w-137px uno-h-40px uno-flex uno-items-center uno-gap-4px uno-justify-center max-sm:uno-w-auto max-sm:uno-px-8px max-sm:uno-gap-2px">
            <!-- 地区图标 -->
            <NuxtImg src="/images/i18nSelect/en.png" alt="en" width="24px" height="24px" />
            <!-- 区域文字 -->
            <span
                class="uno-min-w-[54px] max-sm:uno-w-auto max-sm:uno-min-w-auto uno-text-[#000000] uno-text-sm uno-font-['Outfit'] uno-text-center uno-font-medium uno-leading-[22px]">
                {{ languageName }}
            </span>
            <!-- 箭头 -->
            <NuxtImg src="/images/i18nSelect/arrow-down.png" alt="arrow-down" width="16px" height="16px"
                class="max-sm:uno-hidden" />
        </div>

        <template #content>
            <div class="uno-w-full uno-flex uno-flex-col uno-items-center uno-justify-center uno-py-9px">
                <div v-for="item in languageOptions" :key="item.value"
                    class="uno-w-full uno-flex uno-items-center uno-justify-center uno-cursor-pointer uno-text-sm uno-font-['Outfit'] uno-px-15px uno-py-9px uno-text-center uno-leading-[22px] hover:uno-bg-#BEF6E7 uno-transition-colors"
                    :class="language === item.value ? 'bg-[#009D77!important] uno-text-[#FFF!important]' : ''"
                    @click="changeLanguage(item.value)">
                    {{ item.label }}
                </div>

            </div>
        </template>
    </UPopover>

</template>
<script lang="ts" setup>
import { useLanguageStore } from '~/stores/modules/language'

const languageStore = useLanguageStore()
const { languageOptions, language, languageName } = storeToRefs(languageStore)


const changeLanguage = (value: any) => {
    languageStore.changeLanguage(value)
}

</script>
