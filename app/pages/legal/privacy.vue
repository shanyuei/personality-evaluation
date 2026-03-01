<template>
  <main class="uno-py-12 uno-px-6 md:uno-px-10 ">
    <div class="page-container  uno-mx-auto">
      <!-- 面包屑导航 -->
      <div class="uno-text-sm  uno-mb-6">
        <a href="/">Home</a> / <span>Privacy Policy</span>
      </div>

      <div class="uno-mb-20">
        <h1 class="uno-text-4xl md:uno-text-5xl uno-font-Outfit uno-font-bold uno-text-gray-900">Privacy Policy</h1>
      </div>

      <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-4 uno-gap-8">
        <!-- 侧边栏菜单 -->
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

        <!-- 主内容区域 -->
        <div class="uno-col-span-1 md:uno-col-span-3">
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

  // Reset clicking state after a delay to allow scroll to complete
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
