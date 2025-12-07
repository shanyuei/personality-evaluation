<template>
  <UHeader :ui="{
    body: 'bg-transparent p-0 ',
    content: 'bg-transparent',
    header: 'bg-transparent h-[96px] border-none max-sm:h-[53px]',
    overlay: 'bg-transparent',
    root: 'h-[96px] border-none bg-transparent max-sm:h-[53px]',
    container: 'max-w-[80%]'
  }">
    <!-- 导航栏 -->
    <template #left>

      <div flex gap-54px>
        <!-- logo -->
        <div class="min-w-175px">
          <NuxtPicture src="/theme/logo.png" width="175px" height="40px"
            :img-attrs="{ class: 'w-[175px] h-[40px] max-sm:w-[105px] max-sm:h-[24px]', alt: 'logo' }" />
        </div>
        <!-- 导航栏 -->
        <UNavigationMenu :ui="{
          link: 'before:bg-[transparent!important] font-[`Outfit`] text-center font-medium text-[#011813] data-[active]:text-[--color-pink-1] hover:text-[--color-pink-1]',
          item: 'm-x-18px'

        }" :items="items" class="w-full justify-center max-sm:hidden" />
      </div>

    </template>

    <template #right>
      <div
        class="h-[48px] flex justify-center items-center flex-row gap-3 py-1 pr-1 pl-[20px] border-solid border-[#011813] border rounded-[100px] max-sm:hidden">
        <span class="text-[#011813] font-['Outfit'] font-medium">{{ $t("header.GetStarted") }}</span>
        <NuxtImg src="/images/header/go-icon-1.png" alt="go-icon-1" width="40px" height="40px" />
      </div>
      <!-- 多语言 -->
      <!-- <I18nSelect /> -->
    </template>

    <template #body>
      <div
        class="flex flex-col items-start gap-4 p-24px bg-[#FFFFFF] border-[1px] border-[#F0F0F0] rounded-[16px] w-[374px]">
        <UNavigationMenu orientation="vertical"
          :ui="{ link: 'before:bg-[transparent!important] font-[`Outfit`] text-center font-medium text-[#011813] data-[active]:text-[--color-pink-1] hover:text-[--color-pink-1]', item: 'line-height-[42px] min-h-[42px]' }"
          :items="items" class="w-full" />
        <div>
          <div
            class="h-[48px] flex justify-center items-center flex-row gap-3 py-1 pr-1 pl-[20px] border-solid border-[#011813] border rounded-[100px] w-full ">
            <span class="text-[#011813] font-['Outfit'] font-medium">Get Started</span>
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

<style scoped></style>
