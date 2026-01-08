<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

    <Head>
      <Title>{{ title }}</Title>
      <template v-for="link in head.link" :key="link.key">
        <Link :id="link.key" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.key">
        <Meta :id="meta.key" :property="meta.property" :content="meta.content" />
      </template>
    </Head>

    <Body>
      <div class="uno-min-h-screen uno-flex uno-flex-col uno-relative">
        <!-- 页面顶部背景 -->
        <NuxtImg src="/theme/layout/bg-top.png" alt="bg-top" width="100%" height="100vh"
          class="uno-w-full uno-h-auto uno-max-h-100vh uno-absolute uno-top-0 uno-left-0 uno-z-0" />
        <template v-if="showPageTopIcons">
          <NuxtImg src="/theme/layout/page-top-icon-1.png" width="124px" height="132px"
            class="uno-absolute uno-top-331px uno-right-67px uno-z-1" />
          <NuxtImg src="/theme/layout/page-top-icon-2.png" width="163px" height="170px"
            class="uno-absolute uno-top-431px uno-left-133px uno-z-1" />
        </template>
        <template v-if="showPageTopIcons3">
          <NuxtImg  src="/theme/layout/page-top-icon-3.png" width="104" height="44"
            class="uno-absolute uno-z-1" :class="pageTopIcon3Class" />
        </template>




        <!-- 头部 -->
        <app-header :show-menu="showMenu" />
        <!-- 主要内容区域 -->
        <main class="uno-flex-1 uno-mx-auto uno-z-10 uno-w-full">
          <slot>
            <NuxtPage />
          </slot>
        </main>
        <!--  curious -->
        <app-curious v-if="showCurious" />
        <!-- 底部 -->
        <app-footer v-if="showFooter" />
      </div>
    </Body>

    </Html>
  </div>
</template>

<script setup lang="ts">

const route = useRoute()
const { t } = useI18n()

const props = withDefaults(defineProps<{
  layoutShowPageTopIcons?: boolean
}>(), {
  layoutShowPageTopIcons: true
})

const showFooter = computed(() => {
  return route.meta.layoutShowFooter !== false
})
const showMenu = computed(() => {
  return route.meta.layoutShowMenu !== false
})
const showCurious = computed(() => {
  return route.meta.layoutShowCurious === true
})
const showPageTopIcons = computed(() => {
  if (route.meta.layoutShowPageTopIcons !== undefined) {
    return route.meta.layoutShowPageTopIcons
  }
  return props.layoutShowPageTopIcons
})
console.log(useRouter().getRoutes())
console.log(route,props)
const showPageTopIcons3 = computed(() => {
  return route.meta.layoutShowPageTopIcons3 === true
})

const pageTopIcon3Class = computed(() => {
  return (route.meta.layoutPageTopIcon3Class as string) || 'uno-top-252px uno-right-120px'
})
console.log(route?.meta?.title)
const head = useLocaleHead()
const title = computed(() => {
  if (route?.meta?.title) {
    return t(route?.meta?.title)
  } else {
    return ""
  }
});

</script>

<style scoped>
/* 布局特定样式 */
</style>