<template>
  <UHeader :ui="{
    body: 'bg-transparent p-0',
    content: 'bg-transparent',
    header: ' page-container h-[96px] border-none max-sm:h-[53px]',
    overlay: 'bg-transparent',
    root: 'h-[96px] border-none bg-transparent max-sm:h-[53px] justify-center flex',
    container: '!px-[0px] page-container max-sm:!px-[24px] max-xs:!px-[16px]'
  }" :class="[!showMenu? 'hiddenMenu': '']">
    <!-- 导航栏 -->
    <template #left>

      <div class="uno-flex uno-gap-54px uno-w-full">
        <!-- logo -->
        <NuxtImg src="/theme/logo.png" width="249" height="40" alt="logo" class="max-sm:hidden" />

        <NuxtImg src="/theme/logo-2.png" width="152" height="26" alt="logo" class="max-sm:block" />
        <!-- 导航栏 -->
        <UNavigationMenu v-if="showMenu" :ui="{
          link: 'before:bg-[transparent!important] font-[\'Outfit\'] text-center font-medium text-[var(--ui-foreground)] data-[active]:text-[var(--color-pink-1)] hover:text-[var(--color-pink-1)]',
          item: 'ml-[18px] mr-[18px]'
        }" :items="items" class="uno-w-full uno-justify-center max-sm:uno-hidden" />
      </div>

    </template>

    <template #right>
      <div
        class="uno-h-[48px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-3 uno-py-1 uno-pr-1 uno-pl-[20px] uno-border-solid uno-border-[#011813] uno-border uno-rounded-[100px] max-sm:uno-hidden">
        <span class="uno-text-[#011813] uno-font-['Outfit'] uno-font-medium">{{ $t("header.GetStarted") }}</span>
        <NuxtImg src="/images/header/go-icon-1.png" alt="go-icon-1" width="40px" height="40px" />
      </div>
      <!-- 多语言 -->
      <I18nSelect />
    </template>

    <template #body>
      <div
        class="uno-flex uno-flex-col uno-items-start uno-gap-4 uno-p-24px uno-bg-[#FFFFFF] uno-border-[1px] uno-border-[#F0F0F0] uno-rounded-[16px] uno-w-[374px]">
        <UNavigationMenu orientation="vertical"
          :ui="{ link: 'before:bg-[transparent!important] font-[`Outfit`] text-center font-medium text-[#011813] data-[active]:text-[--color-pink-1] hover:text-[--color-pink-1]', item: 'line-height-[42px] min-h-[42px]' }"
          :items="items" class="uno-w-full" />
        <div>
          <div
            class="uno-h-[48px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-3 uno-py-1 uno-pr-1 uno-pl-[20px] uno-border-solid uno-border-[#011813] uno-border uno-rounded-[100px] uno-w-full">
            <span class="uno-text-[#011813] uno-font-['Outfit'] uno-font-medium">Get Started</span>
            <NuxtImg src="/images/header/go-icon-1.png" alt="go-icon-1" width="40px" height="40px" />
          </div>
        </div>
      </div>
    </template>
  </UHeader>

</template>
<script setup lang="ts">
import { ref } from "vue";
// import I18nSelect from "~/components/I18nSelect.vue";
const props = defineProps({
  showMenu: {
    type: Boolean,
    default: true,
  },
})
const items = ref([
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Courses',
    to: '/courses',
  },
  {
    label: 'Mentors',
    to: '/mentors',
  },
  {
    label: 'Blog',
    to: '/blog',
  },
  {
    label: 'About Us',
    to: '/about',
  },
]);

</script>

<style lang="less">
  .hiddenMenu{
    [data-slot="base"]{
      display: none;
    }
  }
</style>
