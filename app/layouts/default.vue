<template>
  <div class="min-h-screen flex flex-col relative">
    <!-- 页面顶部背景 -->
    <NuxtImg src="/theme/layout/bg-top.png" alt="bg-top" width="100%" height="100vh"
      class="w-full h-auto max-h-100vh absolute top-0 left-0 z-0" />
    <NuxtImg src="/theme/layout/page-top-icon-1.png" width="124px" height="132px"
      class="absolute top-331px right-67px z-1" />
    <NuxtImg src="/theme/layout/page-top-icon-2.png" width="163px" height="170px"
      class="absolute top-431px left-133px z-1" />
    <!-- 头部 -->
    <app-header />
    <!-- 主要内容区域 -->
    <main class="flex-1 container mx-auto px-4 py-8 z-10">

      <NuxtPage />
    </main>
    <!-- 底部 -->
    <app-footer />
  </div>
</template>

<script setup lang="ts">
// 布局组件逻辑
</script>

<style scoped>
/* 布局特定样式 */
</style>