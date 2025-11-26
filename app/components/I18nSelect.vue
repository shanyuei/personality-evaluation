<template>
    <UPopover arrow mode="click" :dismissible="false" :ui="{ content: '' }">
        <div w-137px h-40px flex items-center gap-4px justify-center>
            <!-- 地区图标 -->
            <NuxtImg src="/images/i18nSelect/en.png" alt="en" width="20px" height="20px" />
            <!-- 区域文字 -->
            <span class="w-[54px] text-[#000000] text-sm font-['Outfit'] text-center font-medium leading-[22px]">
                {{ languageName }}
            </span>
            <!-- 箭头 -->
            <NuxtImg src="/images/i18nSelect/arrow-down.png" alt="arrow-down" width="16px" height="16px" />
        </div>

        <template #content>
            <div class="w-full flex flex-col items-center justify-center  py-9px">
                <div v-for="item in languageOptions" :key="item.value"
                    class="w-full flex items-center justify-center cursor-pointer text-sm font-['Outfit'] px-15px py-9px text-center leading-[22px] hover:bg-#BEF6E7 transition-colors"
                    :class="language === item.value ? 'bg-[#009D77!important] text-[#FFF!important]' : ''"
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