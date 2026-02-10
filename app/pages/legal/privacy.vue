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
              <h2 class="uno-text-[24px] uno-font-[Outfit] uno-font-[600] uno-text-gray-900 uno-mb-4">{{
                section.title }}</h2>
              <p v-if="section.subtitle" class="uno-text-[16px] uno-font-[500] uno-text-[#011813] uno-mb-6">{{
                section.subtitle }}</p>
              <div class="uno-text-gray-700 uno-mb-4" v-html="section.content"></div>
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
  title: () => 'seo.legal.privacy.title',
  path: "/privacy-policy"
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
  { id: 'anonymization-of-test-data', label: 'Anonymization of Test Data' },
  { id: 'data-sharing-and-disclosure', label: 'Data Sharing and Disclosure' },
  { id: 'cookies-and-tracking-technologies', label: 'Cookies and Tracking Technologies' },
  { id: 'changes-to-this-privacy-policy', label: 'Changes to This Privacy Policy' },
  { id: 'informational-purpose-disclaimer', label: 'Informational Purpose Disclaimer' },
  { id: 'contact-us', label: 'Contact Us' }
]

// 内容部分数组
const sections = [
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    subtitle: 'Last Updated: November 25, 2024',
    content: `
      <p>We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website and personality testing services.</p>
      <p>By accessing or using our services, you agree to the practices described in this Privacy Policy.</p>
    `
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: `
      <p>We may collect the following types of information when you use our services:</p>
      <ul style="padding-left: 20px;list-style: disc;">
        <li><strong>Personal Information:</strong> Such as an email address or username if you voluntarily provide it.</li>
        <li><strong>Assessment Data:</strong> Responses, results, and interactions related to personality tests, quizzes, or questionnaires.</li>
        <li><strong>Usage Information:</strong> Pages visited, features used, test completion status, and interaction behavior.</li>
        <li><strong>Technical Information:</strong> IP address, browser type, device type, operating system, and language preferences.</li>
      </ul>
      <p>We collect only the information necessary to provide and improve our services.</p>
    `
  },
  {
    id: 'how-we-use-your-information',
    title: 'How We Use Your Information',
    content: `
      <p>We use the collected information to:</p>
      <ul style="padding-left: 20px;list-style: disc;">
        <li>Provide, operate, and maintain our personality testing services</li>
        <li>Generate and display test results and personalized insights</li>
        <li>Improve website performance, content, and overall user experience</li>
        <li>Communicate service-related updates or respond to inquiries</li>
        <li>Detect and prevent fraud, abuse, or unauthorized access</li>
        <li>Comply with applicable legal and regulatory requirements</li>
      </ul>
    `
  },
  {
    id: 'anonymization-of-test-data',
    title: 'Anonymization of Test Data',
    content: `
      <p>To enhance user privacy, personality test responses and results may be processed in an aggregated or anonymized manner. This means such data cannot be used to directly identify individual users. Anonymized data may be used for statistical analysis, service improvement, and research purposes.</p>
    `
  },
  {
    id: 'data-sharing-and-disclosure',
    title: 'Data Sharing and Disclosure',
    content: `
      <p>We do not sell, rent, or trade your personal information.</p>
      <p>We may share your information only in the following circumstances:</p>
      <ul style="padding-left: 20px;list-style: disc;">
        <li>With trusted third-party service providers who assist in website hosting, analytics, customer support, or payment processing</li>
        <li>When required by law, regulation, or legal process</li>
        <li>To protect the rights, safety, or security of users or the platform</li>
        <li>With your explicit consent</li>
      </ul>
      <p>All third parties are required to handle data securely and only for authorized purposes.</p>
    `
  },
  {
    id: 'cookies-and-tracking-technologies',
    title: 'Cookies and Tracking Technologies',
    content: `
      <p>We use cookies and similar tracking technologies to:</p>
      <ul style="padding-left: 20px;list-style: disc;">
        <li>Remember user preferences and settings</li>
        <li>Analyze website usage and traffic</li>
        <li>Improve functionality and user experience</li>
      </ul>
      <p>You can manage or disable cookies through your browser settings. Please note that disabling cookies may limit certain features of the website.</p>
    `
  },
  {
    id: 'changes-to-this-privacy-policy',
    title: 'Changes to This Privacy Policy',
    content: `
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised "Last Updated" date. Continued use of the website after such changes constitutes acceptance of the updated policy.</p>
    `
  },
  {
    id: 'informational-purpose-disclaimer',
    title: 'Informational Purpose Disclaimer',
    content: `
      <p>All personality test results and related content provided on this website are for <strong>informational and educational purposes only</strong>. They are not intended to diagnose, treat, or replace professional psychological, medical, or mental health advice. Users are encouraged to seek qualified professionals for personalized guidance when appropriate.</p>
    `
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    content: `
      <p>If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your information, please contact us at:</p>
      <p><strong>Email:</strong> support@personalitytest101.com</p>
      <p>We will make reasonable efforts to respond to your inquiry in a timely manner.</p>
    `
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
