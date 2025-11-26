<template>
  <UHeader>
    <!-- 导航栏 -->
    <template #left>
      <!-- logo -->
      <div class="m-r-59px">
        <NuxtImg src="/theme/logo.png" alt="logo" width="175px" height="40px" />
      </div>
      <!-- 导航栏 -->
     <UNavigationMenu :items="items" class="w-full justify-center" />

    </template>

    <template #right>
      <!-- Get Started -->
      <div>
        Get Started

      </div>
      <!-- 多语言 -->
      <I18nSelect />
    </template>
  </UHeader>
</template>
<script setup lang="ts">
import { withDefaults, defineProps, ref } from "vue";
import { useRouter } from "vue-router";
import I18nSelect from "~/components/I18nSelect.vue";

const router = useRouter();
const go = (to?: string) => {
  if (to) router.push(to);
};
const menuOpen = ref(false);
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
    to: '/about-us',
  },
]);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
:deep(.u-navigation-menu) {
  background-color: #fff5f7;
  border: 1px solid #e9c1cd;
  border-radius: 4px;
  padding: 0 16px;
}

:deep(.u-navigation-menu-item) {
  color: #333;
  padding: 8px 16px;
  position: relative;

  &:first-child {
    color: #e31f71;
    font-weight: bold;
  }

  &:first-child::after {
    content: '▼';
    font-size: 10px;
    margin-left: 4px;
  }

  &:hover {
    background-color: rgba(227, 31, 113, 0.05);
  }
}

.app-header {
  position: static;
  left: 0px;
  top: 0px;
  width: 1440px;
  height: 96px;
  opacity: 1;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 120px;
  z-index: 0;
}
</style>
