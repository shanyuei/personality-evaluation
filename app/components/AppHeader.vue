<template>
  <header class="app-header">
    <UHeader>
      <template #title>
        <Logo class="h-6 w-auto" />
      </template>
    </UHeader>
    <!-- logo -->

    <!-- menu -->
    <!-- Get Started -->
    <!-- 多语言 -->
  </header>
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

<style lang="less" scoped>
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
