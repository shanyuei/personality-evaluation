<template>
    <!-- 首页 -->
     <main class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-pink-50 p-4">
       <div class="relative bg-white rounded-xl p-10 max-w-3xl border border-transparent">
         <!-- 左侧图标 -->
         <div class="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-lg">
           <div class="w-10 h-10 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full flex items-center justify-center">
             <span class="text-white text-xl">🌈</span>
           </div>
         </div>
         
         <!-- 右侧图标 -->
         <div class="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-lg">
           <div class="w-10 h-10 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full flex items-center justify-center">
             <span class="text-white text-xl">📊</span>
           </div>
         </div>
         
         <!-- 内容区域 -->
         <div class="text-center">
           <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             Discover who you truly are with the Personality test
           </h1>
           <p class="text-gray-600 mb-8">
             With this, you will find out your exact personality type.
           </p>
           <button class="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105">
             Take the Test
             <span class="w-6 h-6 bg-white text-green-500 rounded-full flex items-center justify-center text-sm">→</span>
           </button>
         </div>
       </div>
     </main>
</template>

<script setup lang="ts">
// Home page component
</script>

<style scoped>
/* Home page specific styles */
</style>