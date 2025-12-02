export default defineNuxtPlugin(() => {
  const route = useRoute()
  const { t } = useI18n()
  const map: Record<string, { title: string; desc: string }> = {
    '/': { title: 'home.title', desc: 'home.description' },
    '/about': { title: 'pages.about.title', desc: 'pages.about.description' },
    '/courses': { title: 'pages.courses.title', desc: 'pages.courses.description' },
    '/mentors': { title: 'pages.mentors.title', desc: 'pages.mentors.description' },
    '/blog': { title: 'pages.blog.title', desc: 'pages.blog.description' },
    '/auth/sign-in': { title: 'pages.auth.signIn.title', desc: 'pages.auth.signIn.description' },
    '/orders/cancel-subscription': { title: 'pages.orders.cancelSubscription.title', desc: 'pages.orders.cancelSubscription.description' },
    '/test': { title: 'pages.test.title', desc: 'pages.test.description' },
    '/test/step': { title: 'pages.test.step.title', desc: 'pages.test.step.description' },
    '/test/analyzing': { title: 'pages.test.analyzing.title', desc: 'pages.test.analyzing.description' },
    '/route-guide': { title: 'routeGuide.title', desc: 'routeGuide.intro' }
  }
  const resolveKeys = (path: string) => {
    const keys = Object.keys(map).sort((a, b) => b.length - a.length)
    for (const base of keys) {
      if (path === base || path.startsWith(base)) return map[base]
    }
    return { title: 'home.title', desc: 'common.siteDescription' }
  }
  const apply = () => {
    const { title, desc } = resolveKeys(route.path)
    useSeoMeta({
      title: () => t(title) as string,
      description: () => t(desc) as string,
      ogTitle: () => t(title) as string,
      ogDescription: () => t(desc) as string
    })
  }
  watch(() => route.fullPath, apply, { immediate: true })
})
