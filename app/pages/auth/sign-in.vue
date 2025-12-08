<template>
  <div class="uno-relative uno-flex uno-items-center uno-justify-center uno-py-24 sm:uno-py-32">
    <div class="uno-w-full uno-max-w-[720px] uno-px-6 sm:uno-px-10">
      <!-- 登录表单 -->
      <div class="uno-rounded-[24px] uno-p-8 sm:uno-p-10">
        <h1 class="uno-text-center uno-mb-10 uno-text-[#0F172A] uno-font-['Outfit'] uno-font-bold uno-text-4xl sm:uno-text-5xl">Sign In</h1>
        
        <!-- Email Input -->
        <div class="uno-mb-6">
          <label uno-for="email" class="uno-block uno-text-sm uno-font-medium uno-text-gray-700 uno-mb-2">Email</label>
          <input 
            id="email"
            type="email"
            class="uno-w-full uno-px-4 uno-py-3 uno-border uno-border-gray-300 uno-rounded-[16px] focus:uno-outline-none focus:uno-ring-2 focus:uno-ring-[#009D77] focus:uno-border-transparent uno-transition-all uno-shadow-sm"
            placeholder="Email Address"
          >
        </div>
        
        <!-- Password Input -->
        <div class="uno-mb-8">
          <label uno-for="password" class="uno-block uno-text-sm uno-font-medium uno-text-gray-700 uno-mb-2">Password</label>
          <input 
            id="password"
            type="password"
            class="uno-w-full uno-px-4 uno-py-3 uno-border uno-border-gray-300 uno-rounded-[16px] focus:uno-outline-none focus:uno-ring-2 focus:uno-ring-[#009D77] focus:uno-border-transparent uno-transition-all uno-shadow-sm"
            placeholder="Password"
          >
        </div>
        
        <!-- Get Started Button -->
        <button class="uno-w-full uno-bg-[#009D77] uno-text-white uno-font-['Outfit'] uno-font-medium uno-py-4 uno-px-4 uno-rounded-[16px] hover:uno-bg-[#0AA17F] uno-transition-colors uno-duration-300 uno-mb-6" @click="handleSignIn">
          Get Started
        </button>
        
        <!-- Sign Up Link -->
        <div class="uno-flex uno-items-center uno-justify-between uno-text-gray-600">
          <p>Don't have an account?</p>
          <a href="/auth/sign-up" class="uno-text-[#0F172A] uno-underline uno-underline-offset-4 uno-font-medium">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// You can add authentication logic here
// const { t } = useI18n()
// definePageMeta({
//   title: t('pages.auth.signIn.title') as string
// })
// useSeoMeta({
//   title: () => t('pages.auth.signIn.title') as string,
//   description: () => t('pages.auth.signIn.description') as string,
//   ogTitle: () => t('pages.auth.signIn.title') as string,
//   ogDescription: () => t('pages.auth.signIn.description') as string
// })
// You can add authentication logic here
const handleSignIn = () => {
  // Sign in logic will go here
  console.log('Sign in attempt');
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
