<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 导航栏 - 测试响应式和主题颜色 -->
    <header :class="['fixed top-0 left-0 right-0 z-50 transition-all-300', isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5']">
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex items-center justify-between">
          <div class="text-xl font-bold text-primary">性格测评</div>
          
          <!-- 桌面菜单 -->
          <nav class="hidden md:flex items-center space-x-6">
            <a href="#home" class="text-gray-700 hover:text-primary transition-all-300">首页</a>
            <a href="#features" class="text-gray-700 hover:text-primary transition-all-300">功能</a>
            <a href="#testimonials" class="text-gray-700 hover:text-primary transition-all-300">评价</a>
            <a href="#contact" class="text-gray-700 hover:text-primary transition-all-300">联系我们</a>
          </nav>
          
          <!-- 行动按钮 -->
          <button class="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-all-300 shadow-sm">
            开始测试
          </button>
          
          <!-- 移动端菜单按钮 -->
          <button class="md:hidden text-gray-700" @click="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
    
    <!-- 移动端菜单 -->
    <div :class="['fixed inset-0 bg-black/50 z-40 transition-opacity duration-300', mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none']" @click="closeMenu"></div>
    <div :class="['fixed top-0 right-0 w-64 h-full bg-white shadow-xl z-50 transition-transform duration-300', mobileMenuOpen ? 'translate-x-0' : 'translate-x-full']">
      <div class="p-4">
        <div class="flex justify-between items-center mb-6">
          <span class="font-bold text-primary">菜单</span>
          <button @click="closeMenu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav class="flex flex-col space-y-4">
          <a href="#home" class="text-gray-700 hover:text-primary transition-all-300" @click="closeMenu">首页</a>
          <a href="#features" class="text-gray-700 hover:text-primary transition-all-300" @click="closeMenu">功能</a>
          <a href="#testimonials" class="text-gray-700 hover:text-primary transition-all-300" @click="closeMenu">评价</a>
          <a href="#contact" class="text-gray-700 hover:text-primary transition-all-300" @click="closeMenu">联系我们</a>
        </nav>
      </div>
    </div>
    
    <!-- 英雄区域 - 测试渐变和阴影 -->
    <section id="home" class="pt-32 pb-20 bg-gradient-soft">
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h1 class="text-[clamp(2rem,5vw,3.5rem)] font-bold text-gray-900 leading-tight mb-4">
              发现你的<span class="text-primary">真实性格</span>
            </h1>
            <p class="text-lg text-gray-600 mb-8 max-w-lg">
              通过科学的性格测评，了解你的优势、偏好和成长潜力，开启自我认知的旅程。
            </p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button class="bg-primary text-white px-8 py-3 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all-300">
                免费测试
              </button>
              <button class="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-100 transition-all-300">
                了解更多
              </button>
            </div>
            <div class="mt-10 flex items-center space-x-4">
              <div class="flex -space-x-2">
                <img src="https://picsum.photos/id/1/40/40" alt="用户头像" class="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://picsum.photos/id/2/40/40" alt="用户头像" class="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://picsum.photos/id/3/40/40" alt="用户头像" class="w-10 h-10 rounded-full border-2 border-white" />
                <div class="w-10 h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-700">
                  5k+
                </div>
              </div>
              <p class="text-sm text-gray-600">
                <span class="font-bold text-primary">5,000+</span> 人已完成测评
              </p>
            </div>
          </div>
          <div class="md:w-1/2 relative">
            <div class="relative z-10 bg-white rounded-2xl shadow-xl p-6 hover-lift">
              <div class="absolute -top-4 -right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                热门
              </div>
              <img src="https://picsum.photos/id/1005/600/400" alt="性格测评展示" class="w-full h-auto rounded-lg mb-4" />
              <div class="flex justify-between items-center">
                <div>
                  <h3 class="font-bold text-lg text-gray-900">MBTI职业性格测试</h3>
                  <div class="flex items-center mt-1">
                    <div class="flex text-yellow-400">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                    <span class="text-sm text-gray-500 ml-2">4.9</span>
                  </div>
                </div>
                <button class="text-primary font-medium">开始</button>
              </div>
            </div>
            <!-- 装饰元素 -->
            <div class="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 功能展示 - 测试卡片布局和自定义规则 -->
    <section id="features" class="py-20">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">为什么选择我们的测评</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            基于科学理论开发，提供专业、准确、有深度的性格分析报告
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 功能卡片 1 -->
          <div class="bg-white p-6 rounded-xl shadow-card hover:-translate-y-1 transition-all-300">
            <div class="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">科学权威</h3>
            <p class="text-gray-600">
              基于心理学权威理论开发，由专业团队研发，确保测评结果准确可靠。
            </p>
          </div>
          
          <!-- 功能卡片 2 -->
          <div class="bg-white p-6 rounded-xl shadow-card hover:-translate-y-1 transition-all-300">
            <div class="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">深度分析</h3>
            <p class="text-gray-600">
              不仅仅是简单的性格分类，还提供个性化的深度解读和发展建议。
            </p>
          </div>
          
          <!-- 功能卡片 3 -->
          <div class="bg-white p-6 rounded-xl shadow-card hover:-translate-y-1 transition-all-300">
            <div class="w-12 h-12 bg-tertiary/10 text-tertiary rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">即时反馈</h3>
            <p class="text-gray-600">
              完成测评后立即获得详细报告，无需等待，让你快速了解自己的性格特点。
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 页脚 -->
    <footer class="bg-gray-900 text-gray-300 py-12">
      <div class="container mx-auto px-4 md:px-6">
        <div class="flex flex-col md:flex-row justify-between">
          <div class="mb-8 md:mb-0">
            <div class="text-2xl font-bold text-white mb-4">性格测评</div>
            <p class="text-gray-400 max-w-xs">
              专业的性格测评平台，助你更好地认识自己，发掘潜能。
            </p>
          </div>
          
          <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 class="text-white font-bold mb-4">快速链接</h4>
              <ul class="space-y-2">
                <li><a href="#home" class="text-gray-400 hover:text-white transition-all-300">首页</a></li>
                <li><a href="#features" class="text-gray-400 hover:text-white transition-all-300">功能</a></li>
                <li><a href="#testimonials" class="text-gray-400 hover:text-white transition-all-300">评价</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-white font-bold mb-4">测试类型</h4>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-white transition-all-300">MBTI测试</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-all-300">大五人格</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-all-300">职业兴趣</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-white font-bold mb-4">联系我们</h4>
              <ul class="space-y-2">
                <li class="text-gray-400">客服邮箱: support@ceping.com</li>
                <li class="text-gray-400">工作时间: 9:00-18:00</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; 2024 性格测评平台. 保留所有权利.</p>
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