<template>
  <UHeader :ui="{
    body: 'bg-transparent p-0',
    content: 'bg-transparent',
    header: ' page-container h-[96px] border-none max-sm:h-[53px]',
    overlay: 'bg-transparent',
    root: 'h-[96px] border-none bg-transparent max-sm:h-[53px] justify-center flex',
    container: '!px-[0px] page-container max-sm:!px-[24px] max-xs:!px-[16px]'
  }" :class="[!showMenu ? 'hiddenMenu' : '']">
    <!-- 导航栏 -->
    <template #left>

      <div class="uno-flex  uno-w-full">
        <!-- logo -->
        <div class="uno-w-[249px] uno-flex uno-items-center  max-sm:uno-hidden">
          <NuxtImg src="/theme/logo.png" width="249" height="40" alt="logo" />
        </div>
        <div class="uno-w-[152px]  uno-items-center uno-hidden max-sm:uno-flex">
          <NuxtImg src="/theme/logo-2.png" width="152" height="26" alt="logo" class="" />
        </div>

        <!-- 导航栏 -->
        <UNavigationMenu v-if="showMenu" :ui="{
          link: 'before:bg-transparent font-Outfit text-center font-medium text-[16px] text-[#001813] data-[active]:text-[var(--color-pink-1)] hover:text-[var(--color-pink-1)]',
          item: 'ml-[18px] mr-[18px]'
        }" :items="itemsLocalized" class="uno-w-full uno-justify-center max-sm:uno-hidden" />
      </div>

    </template>

    <template #right>
      <!-- 未登录状态 -->
      <AppArrowButton v-if="!token" preset="header" class="max-sm:uno-hidden uno-font-['Outfit'] uno-font-medium"
        :to="localePath('/auth/sign-in')">
        {{ $t('common.getStarted') }}
      </AppArrowButton>

      <!-- 登录状态 -->
      <UDropdownMenu v-else :items="accountItems" :ui="{
        item: 'data-[disabled]:cursor-text data-[disabled]:select-text uno-px-3 uno-py-2',
        content: 'uno-p-1 uno-bg-white uno-ring-1 uno-ring-gray-200 uno-rounded-xl uno-shadow-lg uno-min-w-[200px]'
      }"
        :content="{ align: 'end', side: 'bottom', sideOffset: 8 }">
        <div class="uno-flex uno-items-center uno-gap-2 uno-cursor-pointer max-sm:uno-hidden">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.4737 20.5624C7.6987 19.7847 8.90912 19.1964 10.1049 18.7978C11.3008 18.3992 12.5987 18.1999 13.9987 18.1999C15.3987 18.1999 16.7015 18.3992 17.907 18.7978C19.1126 19.1964 20.3279 19.7847 21.5529 20.5624C22.4084 19.5124 23.016 18.4527 23.3758 17.3833C23.7355 16.3138 23.9154 15.186 23.9154 13.9999C23.9154 11.1805 22.9674 8.82284 21.0716 6.927C19.1758 5.03117 16.8181 4.08325 13.9987 4.08325C11.1793 4.08325 8.82162 5.03117 6.92578 6.927C5.02995 8.82284 4.08203 11.1805 4.08203 13.9999C4.08203 15.186 4.26676 16.3138 4.6362 17.3833C5.00564 18.4527 5.61814 19.5124 6.4737 20.5624ZM13.9932 14.8749C12.8691 14.8749 11.923 14.489 11.1549 13.7173C10.3869 12.9457 10.0029 11.9978 10.0029 10.8735C10.0029 9.74946 10.3887 8.80341 11.1605 8.03534C11.9321 7.26726 12.88 6.88325 14.0042 6.88325C15.1283 6.88325 16.0744 7.26913 16.8424 8.04088C17.6105 8.81245 17.9945 9.76037 17.9945 10.8846C17.9945 12.0087 17.6087 12.9548 16.8369 13.7228C16.0653 14.4909 15.1174 14.8749 13.9932 14.8749ZM13.987 25.6666C12.3702 25.6666 10.8509 25.3603 9.42887 24.7478C8.00687 24.1353 6.77003 23.2992 5.71828 22.2395C4.66634 21.1798 3.83897 19.9418 3.2362 18.5254C2.63342 17.1091 2.33203 15.5957 2.33203 13.9853C2.33203 12.3749 2.63828 10.8616 3.25078 9.44525C3.86328 8.02892 4.69939 6.79575 5.75911 5.74575C6.81886 4.69575 8.05687 3.8645 9.4732 3.252C10.8895 2.6395 12.4029 2.33325 14.0133 2.33325C15.6237 2.33325 17.137 2.6395 18.5534 3.252C19.9697 3.8645 21.2029 4.69575 22.2529 5.74575C23.3029 6.79575 24.1341 8.03049 24.7466 9.44992C25.3591 10.8693 25.6654 12.3834 25.6654 13.992C25.6654 15.6009 25.3591 17.1127 24.7466 18.5275C24.1341 19.9425 23.3029 21.1798 22.2529 22.2395C21.2029 23.2992 19.9669 24.1353 18.5449 24.7478C17.1229 25.3603 15.6036 25.6666 13.987 25.6666Z"
              fill="#EA4C89" />
          </svg>

          <span class="uno-text-[var(--color-pink-1)] uno-font-Outfit uno-font-medium uno-text-base">{{
            userStore.userInfo?.name || 'Account' }}</span>
          <UIcon name="i-heroicons-chevron-down-20-solid" class="uno-w-5 uno-h-5 uno-text-[var(--color-pink-1)]" />
        </div>


        <template #profile="{ item }">
          <div class="uno-flex uno-items-center uno-gap-2 uno-w-full" @click="onClick(item)">
            <UIcon :name="item.icon" class="uno-w-5 uno-h-5 uno-text-[var(--ui-muted-foreground)]" />
            <span class="uno-truncate uno-font-Outfit uno-text-[var(--ui-foreground)]">{{ item.label }}</span>
          </div>
        </template>
      </UDropdownMenu>

      <!-- 多语言 -->
      <I18nSelect />
    </template>

    <template #body>
      <div
        class="uno-flex uno-flex-col uno-items-start uno-gap-4 uno-p-24px uno-bg-[#FFFFFF] uno-border-[1px] uno-border-[#F0F0F0] uno-rounded-[16px] uno-w-[374px]">
        <UNavigationMenu orientation="vertical"
          :ui="{ link: 'before:bg-transparent font-Outfit text-center font-medium text-[#011813] data-[active]:text-[var(--color-pink-1)] hover:text-[var(--color-pink-1)]', item: 'line-height-[42px] min-h-[42px]' }"
          :items="itemsLocalized" class="uno-w-full" />
        <div>
          <AppArrowButton variant="outline"
            class="uno-h-[48px] uno-gap-3 uno-py-1 uno-pr-1 uno-pl-[20px] uno-rounded-[100px] uno-w-full uno-font-Outfit uno-font-medium"
            :icon-size="40" :to="localePath('/auth/sign-in')" icon-src="/images/header/go-icon-1.png">
            {{ $t('common.getStarted') }}
          </AppArrowButton>
        </div>
      </div>
    </template>
  </UHeader>

</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useUserStore } from '~/stores/modules/user';
import { navigateTo, useCookie } from '#app';
import { useLocalePath, useI18n } from '#i18n';

const userStore = useUserStore();
const token = useCookie('token');
const { t } = useI18n();

// import I18nSelect from "~/components/I18nSelect.vue";
const props = defineProps({
  showMenu: {
    type: Boolean,
    default: true,
  },
})

const handleLogout = () => {
  userStore.logout();
  navigateTo(localePath('/'));
};

const accountItems = ref<any[]>([
  [{
    label: 'Settings',
    to: '/account/settings'
  }, {
    label: 'Subscription',
    to: '/subscription'
  }, {
    label: 'Contact Us',
    to: '/contact'
  }, {
    label: 'Logout',
    click: handleLogout
  }]
]);



const localePath = useLocalePath()
const items = ref([
  {
    label: 'Home',
    to: '/',
    hasChildren: true
  },
  {
    label: 'Tests',
    to: '/tests',
  },
  {
    label: 'Courses',
    to: '/courses',
  },
  {
    label: 'Ebooks',
    to: '/ebooks',
  },
  {
    label: 'Profile',
    to: '/profile',
  },
]);
const itemsLocalized = computed(() => items.value.map(i => ({ ...i, to: localePath(i.to) })))
const onClick = (item: any) => {
  console.log(item)
  if (item.to) {
    navigateTo(localePath(item.to));
  } else if (item.click) {
    item.click();
  }
}
</script>

<style lang="less">
.hiddenMenu {
  [data-slot="base"] {
    display: none;
  }
}
</style>
