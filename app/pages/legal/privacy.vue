<template>
  <main class="uno-py-12 uno-px-2 lg:uno-px-10 ">
    <div class="page-container  uno-mx-auto">
      <!-- 面包屑导航 -->
      <div class="uno-text-sm  uno-mb-6">
        <a href="/">{{ $t('pages.legal.breadcrumb.home') }}</a> / <span>{{ $t('pages.legal.privacy.title') }}</span>
      </div>

      <div class="uno-mb-20">
        <h1 class="uno-text-4xl md:uno-text-5xl uno-font-Outfit uno-font-bold uno-text-gray-900">{{ $t('pages.legal.privacy.title') }}</h1>
      </div>

      <LegalMobileDirectory
        :title="$t('pages.legal.directory')"
        :items="navItems"
        :active-id="activeSection"
        @select="handleMobileNavClick"
      />

      <div class="uno-grid uno-grid-cols-1 lg:uno-grid-cols-4 uno-gap-8">
        <!-- 侧边栏菜单 -->
        <div class="uno-hidden lg:uno-block lg:uno-col-span-1">
          <nav class="uno-sticky uno-top-24 uno-self-start">
            <ul class="uno-space-y-3 md:uno-space-y-4">
              <li v-for="item in navItems" :key="item.id">
                <a :href="`#${item.id}`"
                  :class="['uno-block uno-text-[16px] md:uno-text-[20px] uno-font-medium hover:text-[var(--color-pink-1)]', activeSection === item.id ? 'text-[var(--color-pink-1)]' : '']"
                  @click="handleClick(item.id)">{{ item.label }}</a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- 主内容区域 -->
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
  title: () => 'seo.legal.privacy.title',
  path: "/privacy-policy",
  layoutShowPageTopIcons: false,
})

useSeoMeta({
  title: () => t('seo.legal.privacy.title', {separator: '|'}),
  description: () => t('seo.legal.privacy.description'),
})
const activeSection = ref('privacy-policy')
const isClicking = ref(false)
const scrollOffset = 180

const navItems = computed(() => [
  { id: 'privacy-policy', label: t('pages.legal.privacy.nav.privacyPolicy') },
  { id: 'information-we-collect', label: t('pages.legal.privacy.nav.informationWeCollect') },
  { id: 'how-we-use-your-information', label: t('pages.legal.privacy.nav.howWeUseYourInformation') },
  { id: 'anonymization-of-test-data', label: t('pages.legal.privacy.nav.anonymizationOfTestData') },
  { id: 'data-sharing-and-disclosure', label: t('pages.legal.privacy.nav.dataSharingAndDisclosure') },
  { id: 'cookies-and-tracking-technologies', label: t('pages.legal.privacy.nav.cookiesAndTrackingTechnologies') },
  { id: 'changes-to-this-privacy-policy', label: t('pages.legal.privacy.nav.changesToThisPrivacyPolicy') },
  { id: 'informational-purpose-disclaimer', label: t('pages.legal.privacy.nav.informationalPurposeDisclaimer') },
  { id: 'contact-us', label: t('pages.legal.privacy.nav.contactUs') }
])

const sections = computed(() => [
  {
    id: 'privacy-policy',
    title: t('pages.legal.privacy.sections.privacyPolicy.title'),
    subtitle: t('pages.legal.privacy.sections.privacyPolicy.subtitle'),
    content: t('pages.legal.privacy.sections.privacyPolicy.content')
  },
  {
    id: 'information-we-collect',
    title: t('pages.legal.privacy.sections.informationWeCollect.title'),
    content: t('pages.legal.privacy.sections.informationWeCollect.content')
  },
  {
    id: 'how-we-use-your-information',
    title: t('pages.legal.privacy.sections.howWeUseYourInformation.title'),
    content: t('pages.legal.privacy.sections.howWeUseYourInformation.content')
  },
  {
    id: 'anonymization-of-test-data',
    title: t('pages.legal.privacy.sections.anonymizationOfTestData.title'),
    content: t('pages.legal.privacy.sections.anonymizationOfTestData.content')
  },
  {
    id: 'data-sharing-and-disclosure',
    title: t('pages.legal.privacy.sections.dataSharingAndDisclosure.title'),
    content: t('pages.legal.privacy.sections.dataSharingAndDisclosure.content')
  },
  {
    id: 'cookies-and-tracking-technologies',
    title: t('pages.legal.privacy.sections.cookiesAndTrackingTechnologies.title'),
    content: t('pages.legal.privacy.sections.cookiesAndTrackingTechnologies.content')
  },
  {
    id: 'changes-to-this-privacy-policy',
    title: t('pages.legal.privacy.sections.changesToThisPrivacyPolicy.title'),
    content: t('pages.legal.privacy.sections.changesToThisPrivacyPolicy.content')
  },
  {
    id: 'informational-purpose-disclaimer',
    title: t('pages.legal.privacy.sections.informationalPurposeDisclaimer.title'),
    content: t('pages.legal.privacy.sections.informationalPurposeDisclaimer.content')
  },
  {
    id: 'contact-us',
    title: t('pages.legal.privacy.sections.contactUs.title'),
    content: t('pages.legal.privacy.sections.contactUs.content')
  }
])

const handleScroll = () => {
  if (isClicking.value) return

  const sectionElements = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
  if (!sectionElements.length) return

  const currentY = window.scrollY + scrollOffset
  let currentId = sectionElements[0].id

  for (const section of sectionElements) {
    if (currentY >= section.offsetTop) {
      currentId = section.id
    } else {
      break
    }
  }

  if (activeSection.value !== currentId) {
    activeSection.value = currentId
  }
}

const handleClick = (sectionId: string) => {
  isClicking.value = true
  activeSection.value = sectionId

  const target = document.getElementById(sectionId)
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - (scrollOffset - 8)
    window.scrollTo({ top, behavior: 'smooth' })
  }

  window.setTimeout(() => {
    isClicking.value = false
    handleScroll()
  }, 450)
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
