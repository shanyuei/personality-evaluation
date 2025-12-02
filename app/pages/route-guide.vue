<template>
  <main class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- 页面标题 -->
      <div class="text-center mb-8 sm:mb-12">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-['Outfit'] font-bold text-gray-900 mb-4">
          路由引导页面
        </h1>
        <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          下面是系统中所有可用的路由页面，点击即可导航到相应页面
        </p>
      </div>

      <!-- 路由列表容器 -->
      <div class="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
        <!-- 路由统计信息 -->
        <div class="mb-6 sm:mb-8 p-3 sm:p-4 bg-gray-50 rounded-xl">
          <p class="text-gray-700 font-medium">
            系统中共有 <span class="text-green-600 font-bold">{{ routes.length }}</span> 个可用路由
          </p>
        </div>

        <!-- 路由列表 -->
        <div class="space-y-3 sm:space-y-4" v-if="routes.length > 0">
          <div 
            v-for="route in routes" 
            :key="route.path"
            class="group"
          >
            <NuxtLink 
              :to="route.path"
              class="block p-3 sm:p-4 border border-gray-200 rounded-xl hover:border-green-500 transition-all duration-300 hover:bg-gray-50 transform hover:-translate-y-0.5 hover:shadow-md"
            >
              <div class="flex flex-col md:flex-row md:items-center justify-between">
                <div class="flex-1">
                  <h3 class="text-base sm:text-lg font-['Outfit'] font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {{ formatRouteName(route.path) }}
                  </h3>
                  <p class="text-gray-500 text-xs sm:text-sm mt-1 truncate">
                    路径: {{ route.path }}
                  </p>
                </div>
                <div class="mt-2 md:mt-0 flex-shrink-0">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-green-800">
                    点击访问
                    <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- 无路由时的提示 -->
        <div v-else class="text-center py-12">
          <div class="mb-4 flex justify-center">
            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
            </svg>
          </div>
          <p class="text-gray-500">未找到任何可用路由</p>
        </div>
      </div>

      <!-- 返回首页按钮 -->
      <div class="mt-6 sm:mt-8 text-center">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center px-5 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors shadow-sm"
        >
          <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V7a2 2 0 00-2-2M5 12V7a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
          返回首页
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = ref<any[]>([])

// 格式化路由名称
const formatRouteName = (path: string) => {
  if (path === '/') return '首页'
  
  // 移除开头的 '/' 并按 '/' 分割
  const parts = path.replace(/^\//, '').split('/')
  
  // 转换为更友好的名称
  const nameParts = parts.map(part => {
    // 处理特殊页面名称
    const specialNames: Record<string, string> = {
      'about': '关于我们',
      'auth': '认证登录',
      'blog': '博客',
      'courses': '课程',
      'mentors': '导师',
      'orders': '订单',
      'test': '测试',
      'analyzing': '分析中',
      'result': '测试结果',
      'step': '测试步骤',
      'cancel-subscription': '取消订阅',
      'sign-in': '登录',
      'route-guide': '路由引导'
    }
    
    if (specialNames[part]) return specialNames[part]
    
    // 将驼峰命名或短横线命名转换为普通名称
    return part
      .replace(/([A-Z])/g, ' $1')
      .replace(/-/g, ' ')
      .replace(/^./, str => str.toUpperCase())
  })
  
  return nameParts.join(' - ')
}

// 过滤不需要显示的路由
const filterRoutes = (allRoutes: any[]) => {
  const ignoredPaths = ['/_nuxt', '/__nuxt_error', '/api']
  
  return allRoutes.filter(route => {
    // 过滤掉忽略的路径
    const shouldIgnore = ignoredPaths.some(ignored => route.path.startsWith(ignored))
    if (shouldIgnore) return false
    
    // 过滤掉动态路由（包含 : 或 * 的路由）
    if (route.path.includes(':') || route.path.includes('*')) return false
    
    return true
  })
}

// 在组件挂载时加载所有路由
onMounted(() => {
  // 获取所有路由信息
  const allRoutes = router.getRoutes()
  
  // 过滤并设置路由列表
  routes.value = filterRoutes(allRoutes)
  
  // 按路径排序路由
  routes.value.sort((a, b) => {
    // 确保首页在最前面
    if (a.path === '/') return -1
    if (b.path === '/') return 1
    // 其他路由按路径长度和字母顺序排序
    if (a.path.length !== b.path.length) {
      return a.path.length - b.path.length
    }
    return a.path.localeCompare(b.path)
  })
})
</script>

<style scoped>
/* 可以在这里添加组件特定的样式 */
</style>