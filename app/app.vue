<template>
  <UApp :toaster="toaster">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
import type { ToasterProps } from '@nuxt/ui';

const toaster = ref<ToasterProps>({ position: 'top-center' })
</script>

<style scoped>
/* 全局样式已在布局组件中定义 */
</style>
