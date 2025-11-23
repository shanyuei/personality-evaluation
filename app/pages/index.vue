<template>
  <div class="min-h-screen bg-white">

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