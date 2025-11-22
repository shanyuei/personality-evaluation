<template>
  <div class="min-h-screen flex flex-col">
    <!-- 导航栏 -->
    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b shadow-sm">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-home" class="h-6 w-6" />
            <span class="text-xl font-bold">性格测评系统</span>
          </div>
          <nav class="hidden md:flex items-center gap-6">
            <NuxtLink to="/" class="text-gray-700 hover:text-primary font-medium">首页</NuxtLink>
            <NuxtLink to="#" class="text-gray-700 hover:text-primary font-medium">测评</NuxtLink>
            <NuxtLink to="#" class="text-gray-700 hover:text-primary font-medium">结果</NuxtLink>
            <NuxtLink to="#" class="text-gray-700 hover:text-primary font-medium">关于</NuxtLink>
          </nav>
          <div class="flex items-center gap-2">
            <UButton variant="ghost" size="sm" class="md:hidden">
              <UIcon name="i-heroicons-menu" class="h-5 w-5" />
            </UButton>
            <UButton variant="default" size="sm">登录</UButton>
          </div>
        </div>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="flex-1 container mx-auto px-4 py-8">
      <NuxtPage />
    </main>

    <!-- 页脚 -->
    <footer class="bg-gray-50 border-t py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-center md:text-left">
            <p class="text-gray-600 text-sm">© 2024 性格测评系统. 保留所有权利.</p>
          </div>
          <div class="flex gap-6">
            <a href="#" class="text-gray-600 hover:text-primary text-sm">隐私政策</a>
            <a href="#" class="text-gray-600 hover:text-primary text-sm">使用条款</a>
            <a href="#" class="text-gray-600 hover:text-primary text-sm">联系我们</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// 布局组件逻辑
</script>

<style scoped>
/* 布局特定样式 */
</style>