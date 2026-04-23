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

useHead({
  link: [
    { rel: 'preload', href: '/fonts/Outfit/Outfit-Thin.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
    { rel: 'preload', href: '/fonts/Outfit/Outfit-ExtraLight.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
    { rel: 'preload', href: '/fonts/Outfit/Outfit-Light.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
    { rel: 'preload', href: '/fonts/Outfit/Outfit-Regular.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
    { rel: 'preload', href: '/fonts/Outfit/Outfit-Medium.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
    { rel: 'preload', href: '/fonts/Outfit/Outfit-SemiBold.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
    { rel: 'preload', href: '/fonts/Outfit/Outfit-Bold.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
    { rel: 'preload', href: '/fonts/Outfit/Outfit-ExtraBold.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
    { rel: 'preload', href: '/fonts/Outfit/Outfit-Black.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' }
  ]
})
</script>

<style scoped>
/* 全局样式已在布局组件中定义 */
</style>
