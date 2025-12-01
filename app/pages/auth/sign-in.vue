<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50">
    <div class="w-full max-w-md px-6 py-8">
      <!-- 登录表单 -->
      <div class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
        <h1 class="text-3xl font-bold text-center mb-8">Sign In</h1>
        
        <!-- Email Input -->
        <div class="mb-6">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            placeholder="Email Address"
          />
        </div>
        
        <!-- Password Input -->
        <div class="mb-8">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input 
            type="password" 
            id="password" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            placeholder="Password"
          />
        </div>
        
        <!-- Get Started Button -->
        <button class="w-full bg-green-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300 mb-6">
          Get Started
        </button>
        
        <!-- Sign Up Link -->
        <div class="text-center">
          <p class="text-gray-600">
            Don't have an account? 
            <a href="/auth/sign-up" class="text-blue-600 hover:underline font-medium">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// You can add authentication logic here
const handleSignIn = () => {
  // Sign in logic will go here
  console.log('Sign in attempt');
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>