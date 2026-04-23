<template>
  <main class="uno-py-12 uno-px-2 lg:uno-px-10 ">
    <div class="page-container  uno-mx-auto">
      <div class="uno-text-sm  uno-mb-6">
        <a href="/">{{ $t('pages.legal.breadcrumb.home') }}</a> / <span>{{ $t('pages.legal.terms.title') }}</span>
      </div>

      <div class="uno-mb-20">
        <h1 class="uno-text-4xl md:uno-text-5xl uno-font-Outfit uno-font-bold uno-text-gray-900">{{ $t('pages.legal.terms.title') }}</h1>
      </div>

      <LegalMobileDirectory
        :title="$t('pages.legal.directory')"
        :items="navItems"
        :active-id="activeSection"
        @select="handleMobileNavClick"
      />

      <div class="uno-grid uno-grid-cols-1 lg:uno-grid-cols-4 uno-gap-8">
        <div class="uno-hidden lg:uno-block uno-h-full uno-col-span-1">
          <nav class="uno-sticky uno-top-24 uno-self-start">
            <ul class="uno-space-y-3 lg:uno-space-y-4">
              <li v-for="item in navItems" :key="item.id">
                <a :href="`#${item.id}`"
                  :class="['uno-block uno-text-[16px] md:uno-text-[20px] uno-font-medium hover:text-[var(--color-pink-1)]', activeSection === item.id ? 'text-[var(--color-pink-1)]' : '']"
                  @click="handleClick(item.id)">{{ item.label }}</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="uno-col-span-1 lg:uno-col-span-3">
          <div class="uno-space-y-8">
            <section v-for="section in sections" :key="section.id" :id="section.id">
              <h2 class="uno-text-[24px] uno-font-[Outfit] uno-font-[600] uno-text-gray-900 uno-mb-4"
                v-html="section.title"></h2>
              <p v-if="section.subtitle" class="uno-text-[16px] uno-font-[500] uno-text-[#011813] uno-mb-6"
                v-html="section.subtitle"></p>
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
import LegalMobileDirectory from '~/components/legal/LegalMobileDirectory.vue'

const { t } = useI18n()

definePageMeta({
  layoutShowCurious: true,
  title: () => 'seo.legal.terms.title',
  path: "/terms-of-use",
  layoutShowPageTopIcons: false,
})

useSeoMeta({
  title: () => t('seo.legal.terms.title'),
  description: () => t('seo.legal.terms.description'),
})

const activeSection = ref('terms-of-use')
const isClicking = ref(false)

const navItems = computed(() => [
  { id: 'terms-of-use', label: t('pages.legal.terms.nav.termsOfUse') },
  { id: 'introduction', label: t('pages.legal.terms.nav.introduction') },
  { id: 'registration', label: t('pages.legal.terms.nav.registration') },
  { id: 'personality-test', label: t('pages.legal.terms.nav.personalityTest') },
  { id: 'purchase', label: t('pages.legal.terms.nav.purchase') },
  { id: 'refunds', label: t('pages.legal.terms.nav.refunds') },
  { id: 'license', label: t('pages.legal.terms.nav.license') },
  { id: 'acceptable-use', label: t('pages.legal.terms.nav.acceptableUse') },
  { id: 'user-content', label: t('pages.legal.terms.nav.userContent') },
  { id: 'notice-takedown', label: t('pages.legal.terms.nav.noticeTakedown') },
  { id: 'unsolicited-ideas', label: t('pages.legal.terms.nav.unsolicitedIdeas') },
  { id: 'warranties', label: t('pages.legal.terms.nav.warranties') },
  { id: 'liability', label: t('pages.legal.terms.nav.liability') },
  { id: 'indemnity', label: t('pages.legal.terms.nav.indemnity') },
  { id: 'breaches', label: t('pages.legal.terms.nav.breaches') },
  { id: 'changes', label: t('pages.legal.terms.nav.changes') },
  { id: 'entire-agreement', label: t('pages.legal.terms.nav.entireAgreement') },
  { id: 'contact', label: t('pages.legal.terms.nav.contact') }
])

const sections = computed(() => [
  {
    id: 'terms-of-use',
    title: t('pages.legal.terms.sections.termsOfUse.title'),
    subtitle: t('pages.legal.terms.sections.termsOfUse.subtitle'),
    content: t('pages.legal.terms.sections.termsOfUse.content')
  },
  {
    id: 'introduction',
    title: t('pages.legal.terms.sections.introduction.title'),
    content: t('pages.legal.terms.sections.introduction.content')
  },
  {
    id: 'registration',
    title: t('pages.legal.terms.sections.registration.title'),
    content: t('pages.legal.terms.sections.registration.content')
  },
  {
    id: 'personality-test',
    title: t('pages.legal.terms.sections.personalityTest.title'),
    content: t('pages.legal.terms.sections.personalityTest.content')
  },
  {
    id: 'purchase',
    title: t('pages.legal.terms.sections.purchase.title'),
    content: t('pages.legal.terms.sections.purchase.content')
  },
  {
    id: 'refunds',
    title: t('pages.legal.terms.sections.refunds.title'),
    content: t('pages.legal.terms.sections.refunds.content')
  },
  {
    id: 'license',
    title: t('pages.legal.terms.sections.license.title'),
    content: t('pages.legal.terms.sections.license.content')
  },
  {
    id: 'acceptable-use',
    title: t('pages.legal.terms.sections.acceptableUse.title'),
    content: t('pages.legal.terms.sections.acceptableUse.content')
  },
  {
    id: 'user-content',
    title: t('pages.legal.terms.sections.userContent.title'),
    content: t('pages.legal.terms.sections.userContent.content')
  },
  {
    id: 'notice-takedown',
    title: t('pages.legal.terms.sections.noticeTakedown.title'),
    content: t('pages.legal.terms.sections.noticeTakedown.content')
  },
  {
    id: 'unsolicited-ideas',
    title: t('pages.legal.terms.sections.unsolicitedIdeas.title'),
    content: t('pages.legal.terms.sections.unsolicitedIdeas.content')
  },
  {
    id: 'warranties',
    title: t('pages.legal.terms.sections.warranties.title'),
    content: t('pages.legal.terms.sections.warranties.content')
  },
  {
    id: 'liability',
    title: t('pages.legal.terms.sections.liability.title'),
    content: t('pages.legal.terms.sections.liability.content')
  },
  {
    id: 'indemnity',
    title: t('pages.legal.terms.sections.indemnity.title'),
    content: t('pages.legal.terms.sections.indemnity.content')
  },
  {
    id: 'breaches',
    title: t('pages.legal.terms.sections.breaches.title'),
    content: t('pages.legal.terms.sections.breaches.content')
  },
  {
    id: 'changes',
    title: t('pages.legal.terms.sections.changes.title'),
    content: t('pages.legal.terms.sections.changes.content')
  },
  {
    id: 'entire-agreement',
    title: t('pages.legal.terms.sections.entireAgreement.title'),
    content: t('pages.legal.terms.sections.entireAgreement.content')
  },
  {
    id: 'contact',
    title: t('pages.legal.terms.sections.contact.title'),
    content: t('pages.legal.terms.sections.contact.content')
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

const handleMobileNavClick = (sectionId) => {
  handleClick(sectionId)
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
