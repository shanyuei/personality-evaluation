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
          link: 'before:bg-[transparent!important] font-[\'Outfit\'] text-center font-medium text-[var(--ui-foreground)] data-[active]:text-[var(--color-pink-1)] hover:text-[var(--color-pink-1)]',
          item: 'ml-[18px] mr-[18px]'
        }" :items="items" class="uno-w-full uno-justify-center max-sm:uno-hidden" />
      </div>

    </template>

    <template #right>
      <!-- 未登录状态 -->
      <div v-if="!token"
        class="uno-h-[48px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-3 uno-py-1 uno-pr-1 uno-pl-[20px] uno-border-solid uno-border-[#011813] uno-border uno-rounded-[100px] max-sm:uno-hidden cursor-pointer"
        @click="navigateTo('/auth/sign-in')">
        <span class="uno-text-[#011813] uno-font-['Outfit'] uno-font-medium">{{ $t("common.getStarted") }}</span>
        <NuxtImg src="/images/header/go-icon-1.png" alt="go-icon-1" width="40px" height="40px" />
      </div>

      <!-- 登录状态 -->
      <UDropdownMenu v-else :items="accountItems"
        :ui="{ item: 'data-[disabled]:cursor-text data-[disabled]:select-text uno-px-3 uno-py-2', content: 'uno-p-1 uno-bg-white uno-ring-1 uno-ring-gray-200 uno-rounded-xl uno-shadow-lg uno-min-w-[200px]' }"
        :content="{ align: 'end', side: 'bottom', sideOffset: 8 }">
        <div class="uno-flex uno-items-center uno-gap-2 uno-cursor-pointer max-sm:uno-hidden">
          <UIcon name="i-lucide-circle-user" class="uno-w-6 uno-h-6 uno-text-[var(--color-pink-1)]" />
          <span class="uno-text-[var(--color-pink-1)] uno-font-['Outfit'] uno-font-medium uno-text-lg">{{
            userStore.userInfo?.name || 'Account' }}</span>
          <UIcon name="i-heroicons-chevron-down-20-solid" class="uno-w-5 uno-h-5 uno-text-[var(--color-pink-1)]" />
        </div>

        <template #account="{ item }">
          <div class="uno-text-left">
            <p class="uno-text-xs uno-font-['Outfit'] uno-text-[var(--ui-muted-foreground)]">Signed in as</p>
            <p class="uno-truncate uno-font-medium uno-text-[var(--ui-foreground)] uno-font-['Outfit']">
              {{ item.label }}
            </p>
          </div>
        </template>

        <template #profile="{ item }">
          <div class="uno-flex uno-items-center uno-gap-2 uno-w-full" @click="onClick(item)">
            <UIcon :name="item.icon" class="uno-w-5 uno-h-5 uno-text-[var(--ui-muted-foreground)]" />
            <span class="uno-truncate uno-font-['Outfit'] uno-text-[var(--ui-foreground)]">{{ item.label }}</span>
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
import { useUserStore } from '~/stores/modules/user';

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
  navigateTo('/');
};

const accountItems = ref<any[]>([
  [{
    label: userStore.userInfo?.name || 'User',
    slot: 'account',
    disabled: true
  }],
  [{
    label: 'Profile',
    icon: 'i-lucide-user',
    slot: 'profile',
    to: '/profile'
  }, {
    label: 'Billing',
    icon: 'i-lucide-credit-card',
    to: '/billing'
  }, {
    label: 'Settings',
    icon: 'i-lucide-cog',
    to: '/account/settings'
  }],
  [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    slot: 'profile',
    click: handleLogout
  }]
]);



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
const onClick = (item: any) => {
  console.log(item)
  if (item.to) {
    navigateTo(item.to);
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
