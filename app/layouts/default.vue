<template>
  <div class="uno-min-h-screen uno-flex uno-flex-col uno-relative">
    <!-- 页面顶部背景 -->
    <NuxtImg src="/theme/layout/bg-top.png" alt="bg-top" width="100%" height="100vh"
      class="uno-w-full uno-h-auto uno-max-h-100vh uno-absolute uno-top-0 uno-left-0 uno-z-0" />
    <NuxtImg src="/theme/layout/page-top-icon-1.png" width="124px" height="132px"
      class="uno-absolute uno-top-331px uno-right-67px uno-z-1" />
    <NuxtImg src="/theme/layout/page-top-icon-2.png" width="163px" height="170px"
      class="uno-absolute uno-top-431px uno-left-133px uno-z-1" />
    <!-- 头部 -->
    <app-header :show-menu="showMenu" />
    <!-- 主要内容区域 -->
    <main class="uno-flex-1 uno-mx-auto uno-z-10 uno-w-full">
      <slot>
        <NuxtPage />
      </slot>
    </main>
    <!-- 底部 -->
    <app-footer v-if="showFooter" />
  </div>
</template>

<script setup lang="ts">

  const route = useRoute()

  const showFooter = computed(() => {
    return route.meta.layoutShowFooter !== false
  })
  const showMenu = computed(() => {
    return route.meta.layoutShowMenu !== false
  })
// 布局组件逻辑
// 
</script>

<style scoped>
/* 布局特定样式 */
</style>