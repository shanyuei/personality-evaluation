<template>
  <UHeader>
    <!-- 导航栏 -->
    <template #left>
      <!-- logo -->
      <image src="/theme/logo.png" alt="logo" class="h-6 w-auto" />
      <!-- 导航栏 -->
      <UHeaderNav>
        <UHeaderNavItem to="/">首页</UHeaderNavItem>
        <UHeaderNavItem to="/about">关于我们</UHeaderNavItem>
        <UHeaderNavItem to="/services">服务</UHeaderNavItem>
        <UHeaderNavItem to="/contact">联系我们</UHeaderNavItem>
      </UHeaderNav>
    </template>

    <template #right>
      <!-- Get Started -->
      <UHeaderNavItem to="/get-started">开始使用</UHeaderNavItem>
      <!-- 多语言 -->
      <UHeaderNavItem to="/language">多语言</UHeaderNavItem>
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const go = (to?: string) => {
  if (to) router.push(to);
};
const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style  scoped>
.app-header {
  /* 自动布局子元素 */
  position: static;
  left: 0px;
  top: 0px;
  width: 1440px;
  height: 96px;
  opacity: 1;
  margin: 0 auto;

  /* 自动布局 */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 120px;

  z-index: 0;
}
</style>
