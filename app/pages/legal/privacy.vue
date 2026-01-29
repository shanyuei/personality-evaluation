<template>
  <main class="uno-py-12 uno-px-6 md:uno-px-10 ">
    <div class="page-container  uno-mx-auto">
      <!-- 面包屑导航 -->
      <div class="uno-text-sm  uno-mb-6">
        <a href="/">Home</a> / <span>Privacy Policy</span>
      </div>

      <div class="uno-mb-20">
        <h1 class="uno-text-4xl md:uno-text-5xl uno-font-['Outfit'] uno-font-bold uno-text-gray-900">Privacy Policy</h1>
      </div>

      <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-4 uno-gap-8">
        <!-- 侧边栏菜单 -->
        <div class="uno-col-span-1 uno-hidden md:uno-block">
          <nav class="uno-sticky uno-top-8">
            <ul class="uno-space-y-4">
              <li v-for="item in navItems" :key="item.id">
                <a :href="`#${item.id}`"
                  :class="['uno-block uno-text-[20px] uno-font-medium hover:text-[var(--color-pink-1)]', activeSection === item.id ? 'text-[var(--color-pink-1)]' : '']"
                  @click="handleClick(item.id)">{{ item.label }}</a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- 主内容区域 -->
        <div class="uno-col-span-3">
          <div class="uno-space-y-8">
            <section v-for="section in sections" :key="section.id" :id="section.id">
              <h2 class="uno-text-[24px] uno-font-[\'Outfit\'] uno-font-[600] uno-text-gray-900 uno-mb-4">{{
                section.title }}</h2>
              <p v-if="section.subtitle" class="uno-text-[16px] uno-font-[500] uno-text-[#011813] uno-mb-6">{{ section.subtitle }}</p>
              <p class="uno-text-gray-700 uno-mb-4">{{ section.content }}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'


const { t } = useI18n()

definePageMeta({
  layoutShowCurious: true,
  title: () => 'seo.legal.privacy.title'
})

useSeoMeta({
  title: () => t('seo.legal.privacy.title'),
  description: () => t('seo.legal.privacy.description'),
})
const activeSection = ref('privacy-policy')
const isClicking = ref(false)

// 导航项数组
const navItems = [
  { id: 'privacy-policy', label: 'Privacy Policy' },
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'how-we-use-your-information', label: 'How We Use Your Information' },
  { id: 'data-sharing-and-disclosure', label: 'Data Sharing and Disclosure' },
  { id: 'cookies-and-tracking-technologies', label: 'Cookies and Tracking Technologies' },
  { id: 'changes-to-this-privacy-policy', label: 'Changes to This Privacy Policy' },
  { id: 'contact-us', label: 'Contact Us' }
]

// 内容部分数组
const sections = [
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    subtitle: 'Last Update: 25-11-2024',
    content: 'At MH. Masters Hub, we value and prioritize your privacy. This Privacy Policy describes how we collect, use, share, and protect your information while you use our Learning Management System (LMS) website and services. We are committed to ensuring that your personal data remains secure and that you are informed about your rights and options regarding your information.'
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: 'We collect personal information such as your name, email, and contact details to manage your account and improve your learning experience. We track your course progress, assignments, and assessments to tailor our services. For purchases, we collect payment details for secure processing. We also gather usage data, including IP address and device information, to enhance our platform\'s performance.'
  },
  {
    id: 'how-we-use-your-information',
    title: 'How We Use Your Information',
    content: 'We use your data to manage your account, personalize your learning, and communicate important updates. With your consent, we may send you promotional offers. Your payment information is used for secure transactions and fraud prevention. We also use your data to improve our website, customer services, and comply with legal requirements.'
  },
  {
    id: 'data-sharing-and-disclosure',
    title: 'Data Sharing and Disclosure',
    content: 'Your privacy is important to us, and we ensure your information is kept confidential. We do not sell or rent your data. But may share it with trusted third-party vendors for services like hosting and payment processing. These providers are required to protect your data. We may also share information to comply with legal obligations or with your consent.'
  },
  {
    id: 'cookies-and-tracking-technologies',
    title: 'Cookies and Tracking Technologies',
    content: 'Our website uses cookies and similar tracking technologies to improve user experience and functionality. Cookies enable us to remember your preferences, analyze site usage, and enhance our services. Cookies are small files stored on your device, and while you may choose to disable them via your browser settings, doing so could limit certain functionalities or features on our website.'
  },
  {
    id: 'changes-to-this-privacy-policy',
    title: 'Changes to This Privacy Policy',
    content: 'We may update this Privacy Policy to reflect changes in our practices or legal requirements. Updates will be posted here, and significant changes will be communicated via email or notifications. We encourage you to review this policy regularly to stay informed. By continuing to use our website, you accept the updated terms.'
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    content: 'If you have any questions, concerns, or feedback regarding this Privacy Policy, please reach out to us. We are here to address any inquiries you may have to ensure your experience with MH. Masters Hub is secure and trustworthy.'
  }
]

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
