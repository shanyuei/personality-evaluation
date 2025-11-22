<template>
  <div class="min-h-screen bg-white">
    <!-- 导航栏 -->
    <header class="sticky top-0 z-50 transition-all duration-300" :class="{ 'bg-white shadow-md py-2': isScrolled, 'bg-white/80 backdrop-blur-sm border-b py-3': !isScrolled }">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-home" class="h-6 w-6 text-primary" />
            <span class="text-xl font-bold">性格测评系统</span>
          </div>
          
          <!-- 桌面导航 -->
          <nav class="hidden md:flex items-center gap-8">
            <a href="#" class="text-primary font-medium flex items-center gap-1 group">
              Home
              <UIcon name="i-heroicons-chevron-down" class="h-4 w-4 transition-transform group-hover:rotate-180" />
            </a>
            <a href="#" class="text-gray-700 hover:text-primary transition-colors relative group">
              Courses
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" class="text-gray-700 hover:text-primary transition-colors relative group">
              Mentors
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" class="text-gray-700 hover:text-primary transition-colors relative group">
              Blog
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" class="text-gray-700 hover:text-primary transition-colors relative group">
              About Us
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          
          <div class="flex items-center gap-4">
            <button class="border border-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors transform hover:scale-105 active:scale-95 duration-200">
              Get Started
            </button>
            <div class="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5 hover:border-primary cursor-pointer transition-colors">
              <UIcon name="i-heroicons-globe" class="h-4 w-4" />
              <span class="text-sm">English</span>
              <UIcon name="i-heroicons-chevron-down" class="h-4 w-4 transition-transform hover:rotate-180" />
            </div>
            
            <!-- 移动端菜单按钮 -->
            <button class="md:hidden text-gray-700 hover:text-primary transition-colors" @click="toggleMenu">
              <UIcon :name="mobileMenuOpen ? 'i-heroicons-x' : 'i-heroicons-menu'" class="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <!-- 移动端导航菜单 -->
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 py-4 space-y-4 animate-in fade-in slide-in-from-top-5 duration-200">
          <a href="#" class="block py-2 text-primary font-medium">Home</a>
          <a href="#" class="block py-2 text-gray-700 hover:text-primary transition-colors">Courses</a>
          <a href="#" class="block py-2 text-gray-700 hover:text-primary transition-colors">Mentors</a>
          <a href="#" class="block py-2 text-gray-700 hover:text-primary transition-colors">Blog</a>
          <a href="#" class="block py-2 text-gray-700 hover:text-primary transition-colors">About Us</a>
        </div>
      </div>
    </header>

    <!-- 英雄区域 -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-60" />
      <div class="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-8 animate-fade-in-up" style="animation-delay: 0.1s">
            <div class="space-y-4">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span class="block">Discover who you</span>
                <span class="block text-primary">truly are with</span>
                <span class="block">the Personality test</span>
              </h1>
              <p class="text-xl text-gray-600">
                With this test, you will find out your exact personality type.
              </p>
            </div>
            <button class="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 duration-200 hover:translate-y-[-2px] group">
              Take the Test
              <UIcon name="i-heroicons-arrow-up-right" class="h-5 w-5 transition-transform group-hover:rotate-45" />
            </button>
          </div>
          <div class="relative">
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
            <div class="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 transition-all hover:shadow-2xl animate-fade-in-up" style="animation-delay: 0.3s">
                <!-- 测试卡片示例 -->
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-white rounded-xl p-4 shadow-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] cursor-pointer group">
                    <UIcon name="i-heroicons-brain" class="h-10 w-10 text-primary mb-3 transition-transform group-hover:scale-110" />
                    <h3 class="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">Self-awareness</h3>
                    <p class="text-sm text-gray-500">Understand your traits</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] cursor-pointer group">
                    <UIcon name="i-heroicons-users" class="h-10 w-10 text-secondary mb-3 transition-transform group-hover:scale-110" />
                    <h3 class="font-semibold text-lg mb-1 group-hover:text-secondary transition-colors">Relationships</h3>
                    <p class="text-sm text-gray-500">Improve interactions</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] cursor-pointer group">
                    <UIcon name="i-heroicons-briefcase" class="h-10 w-10 text-tertiary mb-3 transition-transform group-hover:scale-110" />
                    <h3 class="font-semibold text-lg mb-1 group-hover:text-tertiary transition-colors">Career</h3>
                    <p class="text-sm text-gray-500">Find your path</p>
                  </div>
                  <div class="bg-white rounded-xl p-4 shadow-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] cursor-pointer group">
                    <UIcon name="i-heroicons-heart" class="h-10 w-10 text-quaternary mb-3 transition-transform group-hover:scale-110" />
                    <h3 class="font-semibold text-lg mb-1 group-hover:text-quaternary transition-colors">Growth</h3>
                    <p class="text-sm text-gray-500">Develop yourself</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 成就统计 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <h3 class="text-4xl font-bold text-primary mb-2">241K+</h3>
              <p class="text-gray-600">Tests taken today</p>
            </div>
            <div class="text-center">
              <h3 class="text-4xl font-bold text-secondary mb-2">172M+</h3>
              <p class="text-gray-600">Tests taken in US</p>
            </div>
            <div class="text-center">
              <h3 class="text-4xl font-bold text-tertiary mb-2">1460M+</h3>
              <p class="text-gray-600">Total tests taken</p>
            </div>
            <div class="text-center">
              <h3 class="text-4xl font-bold text-quaternary mb-2">91.2%</h3>
              <p class="text-gray-600">Results rated as accurate</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 为什么参加测试 -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Why You Should Take the Test?</h2>
          <p class="text-gray-600 text-lg">
            Connect with the next wave of expert mentors, guiding you with fresh perspectives,
            innovative insights, and proven expertise.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 卡片 1 -->
          <div class="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:translate-y-[-8px] group">
            <div class="p-6">
              <div class="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <UIcon name="i-heroicons-lightbulb" class="h-8 w-8 text-primary transition-colors group-hover:text-primary/80" />
              </div>
              <h3 class="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Improved self-awareness</h3>
              <p class="text-gray-600 mb-4">
                Gain a deeper understanding of your personality traits, strengths, and areas for growth.
              </p>
              <a href="#" class="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all group-hover:text-primary/80">
                Learn more
                <UIcon name="i-heroicons-arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <!-- 卡片 2 -->
          <div class="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:translate-y-[-8px] group">
            <div class="p-6">
              <div class="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <UIcon name="i-heroicons-users" class="h-8 w-8 text-secondary transition-colors group-hover:text-secondary/80" />
              </div>
              <h3 class="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">Better relationships</h3>
              <p class="text-gray-600 mb-4">
                Understand how you interact with others and improve your communication and connections.
              </p>
              <a href="#" class="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all group-hover:text-primary/80">
                Learn more
                <UIcon name="i-heroicons-arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <!-- 卡片 3 -->
          <div class="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:translate-y-[-8px] group">
            <div class="p-6">
              <div class="bg-tertiary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <UIcon name="i-heroicons-briefcase" class="h-8 w-8 text-tertiary transition-colors group-hover:text-tertiary/80" />
              </div>
              <h3 class="text-xl font-bold mb-3 group-hover:text-tertiary transition-colors">Career guidance</h3>
              <p class="text-gray-600 mb-4">
                Discover career paths that align with your personality and natural strengths.
              </p>
              <a href="#" class="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all group-hover:text-primary/80">
                Learn more
                <UIcon name="i-heroicons-arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 测试类型 -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Popular Test Types</h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from our selection of scientifically validated personality assessments
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-white shadow-lg">
            <h3 class="text-2xl font-bold mb-4">Myers-Briggs Type Indicator (MBTI)</h3>
            <p class="text-gray-600 mb-6">
              The MBTI assesses your personality across four dimensions: Extraversion/Introversion,
              Sensing/Intuition, Thinking/Feeling, and Judging/Perceiving.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="flex">
                  <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
                  <UIcon name="i-heroicons-star-half" class="h-5 w-5 text-yellow-400" />
                </div>
                <span class="text-gray-700 font-medium">4.8 (12K+ reviews)</span>
              </div>
              <button class="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full text-sm font-medium transition-all transform hover:scale-105 active:scale-95 duration-200 hover:shadow-lg">
              Take MBTI Test
            </button>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-tertiary/5 to-quaternary/5 rounded-2xl p-8 border border-white shadow-lg">
            <h3 class="text-2xl font-bold mb-4">Big Five Personality Traits</h3>
            <p class="text-gray-600 mb-6">
              The Big Five measures your personality across five key dimensions: Openness,
              Conscientiousness, Extraversion, Agreeableness, and Neuroticism.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="flex">
                  <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
                  <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
                </div>
                <span class="text-gray-700 font-medium">4.9 (15K+ reviews)</span>
              </div>
              <button class="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-full text-sm font-medium transition-all transform hover:scale-105 active:scale-95 duration-200 hover:shadow-lg">
              Take Big Five Test
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户评价 -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">What Our Users Say</h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            Read what people are saying about their experience with our personality tests
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 评价 1 -->
          <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src="https://picsum.photos/id/1001/200/200" alt="用户头像" class="w-full h-full object-cover" />
              </div>
              <div>
                <h4 class="font-semibold">John Doe</h4>
                <p class="text-sm text-gray-500">Marketing Professional</p>
              </div>
            </div>
            <div class="flex mb-4">
              <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
              <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
              <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
              <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
              <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
            </div>
            <p class="text-gray-600 italic">
              "This test completely changed how I understand myself and my interactions with others. The insights were spot on and have helped me in both my personal and professional life."
            </p>
          </div>
          
          <!-- 评价 2 -->
          <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src="https://picsum.photos/id/1005/200/200" alt="用户头像" class="w-full h-full object-cover" />
              </div>
              <div>
                <h4 class="font-semibold">Sarah Johnson</h4>
                <p class="text-sm text-gray-500">Software Engineer</p>
              </div>
            </div>
            <div class="flex mb-4">
              <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
              <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
              <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
              <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
              <UIcon name="i-heroicons-star-half" class="h-5 w-5 text-yellow-400" />
            </div>
            <p class="text-gray-600 italic">
              "I was skeptical at first, but the results were surprisingly accurate. It helped me understand why I work better in certain environments and how to communicate more effectively with my team."
            </p>
          </div>
          
          <!-- 评价 3 -->
          <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src="https://picsum.photos/id/1006/200/200" alt="用户头像" class="w-full h-full object-cover" />
              </div>
              <div>
                <h4 class="font-semibold">Michael Chen</h4>
                <p class="text-sm text-gray-500">Human Resources Manager</p>
              </div>
            </div>
            <div class="flex mb-4">
              <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
              <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
              <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
              <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
              <UIcon name="i-heroicons-star" class="h-5 w-5 text-yellow-400" />
            </div>
            <p class="text-gray-600 italic">
              "We use these tests for team building and hiring. The insights have been invaluable for creating balanced teams and improving workplace communication. Highly recommended!"
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 行动召唤 -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-10 border border-white shadow-xl text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to discover your true self?</h2>
          <p class="text-gray-600 mb-8 text-lg">
            Start your personality journey today and unlock your full potential
          </p>
          <button class="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 duration-200 hover:translate-y-[-2px] group mx-auto">
              Start Free Test
              <UIcon name="i-heroicons-arrow-up-right" class="h-5 w-5 transition-transform group-hover:rotate-45" />
            </button>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="bg-gray-900 text-white pt-16 pb-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div class="flex items-center gap-2 mb-6">
              <UIcon name="i-heroicons-home" class="h-6 w-6 text-white" />
              <span class="text-xl font-bold">性格测评系统</span>
            </div>
            <p class="text-gray-400 mb-6">
              Discover your true personality and unlock your full potential with our scientifically validated assessments.
            </p>
            <div class="flex gap-4">
              <a href="#" class="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <UIcon name="i-heroicons-facebook" class="h-5 w-5" />
              </a>
              <a href="#" class="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <UIcon name="i-heroicons-linkedin" class="h-5 w-5" />
              </a>
              <a href="#" class="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <UIcon name="i-heroicons-instagram" class="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-6">Quick Links</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Tests</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-6">Test Categories</h3>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">MBTI</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Big Five</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Career Tests</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Relationship Tests</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Leadership Tests</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-6">Contact Us</h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <UIcon name="i-heroicons-phone" class="h-5 w-5 text-gray-400 mt-0.5" />
                <span class="text-gray-400">+86 123 4567 8910</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-heroicons-envelope" class="h-5 w-5 text-gray-400 mt-0.5" />
                <span class="text-gray-400">contact@personality-test.com</span>
              </li>
              <li class="flex items-start gap-3">
                <UIcon name="i-heroicons-map-pin" class="h-5 w-5 text-gray-400 mt-0.5" />
                <span class="text-gray-400">123 Personality Street, Beijing, China</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2024 性格测评系统. All rights reserved.</p>
          <div class="flex justify-center gap-6 mt-4">
            <a href="#" class="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" class="hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// 首页组件逻辑
import { ref, onMounted, nextTick } from 'vue'

// 页面状态管理
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const visibleSections = ref<Record<string, boolean>>({})

// 切换移动端菜单
const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  // 防止滚动时关闭菜单
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

// 关闭移动端菜单
const closeMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// 监听滚动事件，用于导航栏样式变化和滚动动画
onMounted(() => {
  const handleScroll = () => {
    // 导航栏滚动效果
    isScrolled.value = window.scrollY > 50
    
    // 检测元素是否进入视口，触发动画
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0
      visibleSections.value[section.id] = isVisible
      
      if (isVisible && !section.classList.contains('animate-visible')) {
        section.classList.add('animate-visible')
      }
    })
  }
  
  // 初始化时执行一次滚动检测
  nextTick(() => {
    handleScroll()
  })
  
  window.addEventListener('scroll', handleScroll)
  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
})

// 平滑滚动到指定区域
const scrollToSection = (id: string) => {
  closeMenu()
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// 定义颜色主题
const themeColors = {
  primary: '#4F46E5',
  secondary: '#10B981',
  tertiary: '#F59E0B',
  quaternary: '#EC4899'
}
</script>

<style scoped>
/* 首页特定样式 */
:root {
  --primary: #4F46E5;
  --secondary: #10B981;
  --tertiary: #F59E0B;
  --quaternary: #EC4899;
}

/* 添加一些自定义动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.animate-slide-in-left {
  animation: slideInLeft 0.6s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.6s ease-out;
}

.animate-pulse-slow {
  animation: pulse 3s infinite;
}

/* 响应式设计 */
@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem !important;
  }
  
  h2 {
    font-size: 2rem !important;
  }
  
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

/* 视差滚动效果 */
.parallax-bg {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* 滚动显示动画 */
section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

section.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 悬停效果增强 */
button:active {
  transform: scale(0.98);
}

/* 渐变背景 */
.bg-gradient-soft {
  background: linear-gradient(135deg, var(--primary)/5 0%, var(--secondary)/5 100%);
}
</style>