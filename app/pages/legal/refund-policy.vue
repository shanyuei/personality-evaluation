<template>
  <main class="uno-py-12 uno-px-6 md:uno-px-10 ">
    <div class="page-container  uno-mx-auto">
      <div class="uno-text-sm  uno-mb-6">
        <a href="/">Home</a> / <span>Refund Policy</span>
      </div>

      <div class="uno-mb-20">
        <h1 class="uno-text-4xl md:uno-text-5xl uno-font-Outfit uno-font-bold uno-text-gray-900">Refund Policy</h1>
      </div>

      <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-4 uno-gap-8">
        <div class="uno-col-span-1">
          <nav>
            <ul class="uno-space-y-3 md:uno-space-y-4">
              <li v-for="item in navItems" :key="item.id">
                <a :href="`#${item.id}`"
                  :class="['uno-block uno-text-[16px] md:uno-text-[20px] uno-font-medium hover:text-[var(--color-pink-1)]', activeSection === item.id ? 'text-[var(--color-pink-1)]' : '']"
                  @click="handleClick(item.id)">{{ item.label }}</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="uno-col-span-1 md:uno-col-span-3">
          <div class="uno-space-y-8">
            <section v-for="section in sections" :key="section.id" :id="section.id">
                 <h2 class="uno-text-[24px] uno-font-[Outfit] uno-font-[600] uno-text-gray-900 uno-mb-4" v-html="section.title"></h2>
              <p v-if="section.subtitle" class="uno-text-[16px] uno-font-[500] uno-text-[#011813] uno-mb-6" v-html="section.subtitle" ></p>
              <div class="uno-text-gray-700 uno-mb-4" v-html="section.content"></div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const { t } = useI18n()

definePageMeta({
  layoutShowCurious: true,
  title: () => 'seo.legal.refund.title',
  path: "/refund-policy",
    layoutShowPageTopIcons: false,
})

useSeoMeta({
  title: () => t('seo.legal.refund.title'),
  description: () => t('seo.legal.refund.description'),
})

const activeSection = ref('refund-policy')
const isClicking = ref(false)

const navItems = computed(() => [
  { id: 'refund-policy', label: t('pages.legal.refund.nav.refundPolicy') },
  { id: 'subscription-plans', label: t('pages.legal.refund.nav.subscriptionPlans') },
  { id: 'refund-conditions', label: t('pages.legal.refund.nav.refundConditions') },
  { id: 'cancellation-rights', label: t('pages.legal.refund.nav.cancellationRights') },
  { id: 'refund-request', label: t('pages.legal.refund.nav.refundRequest') },
  { id: 'friendly-notes', label: t('pages.legal.refund.nav.friendlyNotes') },
  { id: 'why-simple', label: t('pages.legal.refund.nav.whySimple') }
])

const sections = computed(() => [
  {
    id: 'refund-policy',
    title: t('pages.legal.refund.sections.refundPolicy.title'),
    subtitle: t('pages.legal.refund.sections.refundPolicy.subtitle'),
    content: t('pages.legal.refund.sections.refundPolicy.content')
  },
  {
    id: 'subscription-plans',
    title: t('pages.legal.refund.sections.subscriptionPlans.title'),
    content: t('pages.legal.refund.sections.subscriptionPlans.content')
  },
  {
    id: 'refund-conditions',
    title: t('pages.legal.refund.sections.refundConditions.title'),
    content: t('pages.legal.refund.sections.refundConditions.content')
  },
  {
    id: 'cancellation-rights',
    title: t('pages.legal.refund.sections.cancellationRights.title'),
    content: t('pages.legal.refund.sections.cancellationRights.content')
  },
  {
    id: 'refund-request',
    title: t('pages.legal.refund.sections.refundRequest.title'),
    content: t('pages.legal.refund.sections.refundRequest.content')
  },
  {
    id: 'friendly-notes',
    title: t('pages.legal.refund.sections.friendlyNotes.title'),
    content: t('pages.legal.refund.sections.friendlyNotes.content')
  },
  {
    id: 'why-simple',
    title: t('pages.legal.refund.sections.whySimple.title'),
    content: t('pages.legal.refund.sections.whySimple.content')
  }
])

const handleScroll = () => {
  if (isClicking.value) return

  const sections = document.querySelectorAll('section[id]')
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100
    const sectionId = section.getAttribute('id')
    if (window.scrollY >= sectionTop) {
      activeSection.value = sectionId
    }
  })
}

const handleClick = (sectionId) => {
  isClicking.value = true
  activeSection.value = sectionId

  setTimeout(() => {
    isClicking.value = false
  }, 1000)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped></style>
