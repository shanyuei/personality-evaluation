<template>
    <UDropdownMenu :items="languageItems" :ui="{
      item: 'uno-px-15px uno-py-6px uno-text-sm uno-font-Outfit uno-text-left uno-leading-[22px] hover:uno-bg-transparent before:hidden',
      content: 'uno-py-4px uno-bg-white uno-ring-1 uno-ring-gray-200 uno-rounded-xl uno-shadow-lg uno-min-w-[137px]'
    }" :content="{ align: 'end', side: 'bottom', sideOffset: 8 }" @select="changeLanguage">
        <div
            class="uno-w-137px uno-h-40px uno-flex uno-items-center uno-gap-8px uno-justify-center max-sm:uno-w-auto max-sm:uno-px-8px">
            <!-- 地区图标 -->
            <NuxtImg src="/images/i18nSelect/en.png" alt="en" width="24px" height="24px" />
            <!-- 区域文字 -->
            <span
                class="uno-min-w-[54px] max-sm:uno-w-auto max-sm:uno-min-w-auto uno-text-[#000000] uno-text-sm uno-font-Outfit uno-text-center uno-font-medium uno-leading-[22px]">
                {{ languageName }}
            </span>
            <!-- 箭头 -->
            <NuxtImg src="/images/i18nSelect/arrow-down.png" alt="arrow-down" width="16px" height="16px"
                class="max-sm:uno-hidden" />
        </div>

        <template #item="{ item }">
            <div class="uno-w-full uno-flex uno-items-center uno-justify-center uno-cursor-pointer uno-transition-all"
                :class="language === item.value 
                    ? 'uno-text-[#009D77] uno-underline uno-decoration-[#009D77] uno-decoration-2 uno-underline-offset-4' 
                    : 'uno-text-[#000000] hover:uno-text-[#009D77] hover:uno-underline hover:uno-decoration-[#009D77] hover:uno-decoration-2 hover:uno-underline-offset-4'">
                {{ item.label }}
            </div>
        </template>
    </UDropdownMenu>

</template>

<script lang="ts" setup>
import { useLanguageStore } from '~/stores/modules/language'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

const languageStore = useLanguageStore()
const { languageOptions, language, languageName } = storeToRefs(languageStore)

const languageItems = computed(() => {
    return languageOptions.value.map((item: any) => ({
        label: item.label,
        value: item.value
    }))
})

const changeLanguage = (item: any) => {
    languageStore.changeLanguage(item.value)
}
</script>
