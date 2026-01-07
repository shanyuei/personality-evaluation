<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-gray-50 uno-to-gray-100 uno-py-8 uno-px-4 sm:uno-px-6 lg:uno-px-8">
    <div class="uno-max-w-7xl uno-mx-auto">
      <!-- 页面标题 -->
      <div class="uno-text-center uno-mb-8 sm:uno-mb-12">
        <h1 class="uno-text-2xl sm:uno-text-3xl md:uno-text-4xl uno-font-['Outfit'] uno-font-bold uno-text-gray-900 uno-mb-4">
          {{ $t('pages.routeGuide.title') }}
        </h1>
        <p class="uno-text-base sm:uno-text-lg uno-text-gray-600 uno-max-w-2xl uno-mx-auto">
          {{ $t('pages.routeGuide.intro') }}
        </p>
      </div>

      <!-- 路由列表容器 -->
      <div class="uno-bg-white uno-rounded-2xl uno-shadow-xl uno-p-4 sm:uno-p-6 md:uno-p-8">
        <!-- 路由统计信息 -->
        <div class="uno-mb-6 sm:uno-mb-8 uno-p-3 sm:uno-p-4 uno-bg-gray-50 uno-rounded-xl">
          <p class="uno-text-gray-700 uno-font-medium">
            {{ $t('pages.routeGuide.stats', { count: routes.length }) }}
          </p>
        </div>

        <!-- 路由列表 -->
        <div class="uno-space-y-3 sm:uno-space-y-4" v-if="routes.length > 0">
          <div 
            v-for="route in routes" 
            :key="route.path"
            class="uno-group"
          >
            <AppLink 
              :to="route.path"
              class="uno-block uno-p-3 sm:uno-p-4 uno-border uno-border-gray-200 uno-rounded-xl hover:uno-border-green-500 uno-transition-all uno-duration-300 hover:uno-bg-gray-50 uno-transform hover:uno--translate-y-0.5 hover:uno-shadow-md"
            >
              <div class="uno-flex uno-flex-col md:uno-flex-row md:uno-items-center uno-justify-between">
                <div class="uno-flex-1">
                  <h3 class="uno-text-base sm:uno-text-lg uno-font-['Outfit'] uno-font-semibold uno-text-gray-900 group-hover:uno-text-green-600 uno-transition-colors">
                    {{ formatRouteName(route.path) }}
                  </h3>
                  <p class="uno-text-gray-500 uno-text-xs sm:uno-text-sm uno-mt-1 uno-truncate">
                    {{ $t('pages.routeGuide.pathLabel') }}: {{ route.path }}
                  </p>
                </div>
                <div class="uno-mt-2 md:uno-mt-0 uno-flex-shrink-0">
                  <span class="uno-inline-flex uno-items-center uno-px-3 uno-py-1 uno-rounded-full uno-text-xs sm:uno-text-sm uno-font-medium uno-bg-green-100 uno-text-green-800">
                    {{ $t('pages.routeGuide.visit') }}
                    <svg class="uno-w-4 uno-h-4 uno-ml-1 uno-transition-transform group-hover:uno-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </AppLink>
          </div>
        </div>

        <!-- 无路由时的提示 -->
        <div v-else class="uno-text-center uno-py-12">
          <div class="uno-mb-4 uno-flex uno-justify-center">
            <svg class="uno-w-12 uno-h-12 uno-text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
            </svg>
          </div>
          <p class="uno-text-gray-500">{{ $t('pages.routeGuide.empty') }}</p>
        </div>
      </div>

      <!-- 返回首页按钮 -->
      <div class="uno-mt-6 sm:uno-mt-8 uno-text-center">
        <AppLink 
          :to="'/'" 
          class="uno-inline-flex uno-items-center uno-px-5 sm:uno-px-6 uno-py-2 sm:uno-py-3 uno-border uno-border-transparent uno-text-sm sm:uno-text-base uno-font-medium uno-rounded-md uno-text-white uno-bg-green-600 hover:uno-bg-green-700 uno-transition-colors uno-shadow-sm"
        >
          <svg class="uno-w-4 uno-h-4 sm:uno-w-5 sm:uno-h-5 uno-mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V7a2 2 0 00-2-2M5 12V7a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
          {{ $t('pages.routeGuide.back') }}
        </AppLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'



const { t } = useI18n()

definePageMeta({
  title: () => 'seo.routeGuide.title'
})

useSeoMeta({
  title: () => t('seo.routeGuide.title'),
  description: () => t('seo.routeGuide.description')
})

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
