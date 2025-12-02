<template>
  <div class="relative flex items-center justify-center py-24 sm:py-32">
    <div class="w-full max-w-[720px] px-6 sm:px-10">
      <!-- 登录表单 -->
      <div class="rounded-[24px] p-8 sm:p-10">
        <h1 class="text-center mb-10 text-[#0F172A] font-['Outfit'] font-bold text-4xl sm:text-5xl">Sign In</h1>
        
        <!-- Email Input -->
        <div class="mb-6">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input 
            id="email"
            type="email"
            class="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#009D77] focus:border-transparent transition-all shadow-sm"
            placeholder="Email Address"
          >
        </div>
        
        <!-- Password Input -->
        <div class="mb-8">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input 
            id="password"
            type="password"
            class="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#009D77] focus:border-transparent transition-all shadow-sm"
            placeholder="Password"
          >
        </div>
        
        <!-- Get Started Button -->
        <button class="w-full bg-[#009D77] text-white font-['Outfit'] font-medium py-4 px-4 rounded-[16px] hover:bg-[#0AA17F] transition-colors duration-300 mb-6" @click="handleSignIn">
          Get Started
        </button>
        
        <!-- Sign Up Link -->
        <div class="flex items-center justify-between text-gray-600">
          <p>Don't have an account?</p>
          <a href="/auth/sign-up" class="text-[#0F172A] underline underline-offset-4 font-medium">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// You can add authentication logic here
const { t } = useI18n()
definePageMeta({
  title: t('pages.auth.signIn.title') as string
})
useSeoMeta({
  title: () => t('pages.auth.signIn.title') as string,
  description: () => t('pages.auth.signIn.description') as string,
  ogTitle: () => t('pages.auth.signIn.title') as string,
  ogDescription: () => t('pages.auth.signIn.description') as string
})
// You can add authentication logic here
const handleSignIn = () => {
  // Sign in logic will go here
  console.log('Sign in attempt');
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
