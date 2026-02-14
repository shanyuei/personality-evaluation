<template>
  <main class="uno-py-12 uno-px-6 md:uno-px-10 ">
    <div class="page-container  uno-mx-auto">
      <div class="uno-text-sm  uno-mb-6">
        <a href="/">Home</a> / <span>Terms of Use</span>
      </div>

      <div class="uno-mb-20">
        <h1 class="uno-text-4xl md:uno-text-5xl uno-font-Outfit uno-font-bold uno-text-gray-900">Terms of Use</h1>
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
  title: () => 'seo.legal.terms.title',
  path: "/terms-of-use"
})

useSeoMeta({
  title: () => t('seo.legal.terms.title'),
  description: () => t('seo.legal.terms.description'),
})

const activeSection = ref('terms-of-use')
const isClicking = ref(false)

const navItems = [
  { id: 'terms-of-use', label: 'Terms of Use & Purchase' },
  { id: 'introduction', label: '1. Introduction' },
  { id: 'registration', label: '2. Registration' },
  { id: 'personality-test', label: '3. Personality Test & AI Tools' },
  { id: 'purchase', label: '4. Purchase of Digital Content & Subscriptions' },
  { id: 'refunds', label: '5. Refunds & Cancellation' },
  { id: 'license', label: '6. License to Use Website & Products' },
  { id: 'acceptable-use', label: '7. Acceptable Use' },
  { id: 'user-content', label: '8. User Generated Content' },
  { id: 'notice-takedown', label: '9. Notice and Takedown' },
  { id: 'unsolicited-ideas', label: '10. Unsolicited Idea Submissions' },
  { id: 'warranties', label: '11. Warranties & Disclaimers' },
  { id: 'liability', label: '12. Liability Limitations' },
  { id: 'indemnity', label: '13. Indemnity' },
  { id: 'breaches', label: '14. Breaches & Enforcement' },
  { id: 'changes', label: '15. Changes & Variation' },
  { id: 'entire-agreement', label: '16. Entire Agreement' },
  { id: 'contact', label: '17. Contact' }
]

const sections = [
  {
    id: 'terms-of-use',
    title: 'Terms of Use & Purchase',
    subtitle: 'Last Updated: February 2, 2026',
    content: `
      <p>Welcome to PersonalityTest101.com. These Terms of Use & Purchase govern your access to our website and your purchase of digital content, subscriptions, and services (collectively, "Products"). By using our website, you agree to these terms in full. If you do not agree, please do not use the website or purchase any Products.</p>
    `
  },
  {
    id: 'introduction',
    title: '1. Introduction',
    content: `
      <ul style="padding-left: 20px;list-style: disc;">
        <li>Our Products are designed for information and entertainment purposes only. They are not medical, psychological, or professional advice.</li>
        <li>Personalized reports and AI outputs are for personal use only, not for assessing others or business/recruitment purposes.</li>
        <li>Users must be 16 years or older (or the legal age of consent in their country).</li>
        <li>AI Mentor (Elina) outputs are informational only, and you should avoid sharing sensitive personal data.</li>
        <li>The English version of the website is the official version. Other language versions are provided for convenience.</li>
        <li>Use of cookies and personal data is governed by our Privacy Policy.</li>
      </ul>
    `
  },
  {
    id: 'registration',
    title: '2. Registration',
    content: `
      <ul style="padding-left: 20px;list-style: disc;">
        <li>Some website areas are free to access. Certain Products require registration.</li>
        <li>You must provide accurate and up-to-date information.</li>
        <li>Keep your password confidential and report any suspected account breaches to support@personalitytest101.com.</li>
        <li>Only one account per user is allowed. We reserve the right to suspend or cancel accounts that violate these terms.</li>
      </ul>
    `
  },
  {
    id: 'personality-test',
    title: '3. Personality Test & AI Tools',
    content: `
      <ul style="padding-left: 20px;list-style: disc;">
        <li>Free Personality Test results assign one of 16 personality types and two variants.</li>
        <li>Premium Profiles and Specialized Tests are paid Products.</li>
        <li>AI tools (e.g., Elina) supplement guidance but do not constitute professional advice.</li>
      </ul>
    `
  },
  {
    id: 'purchase',
    title: '4. Purchase of Digital Content & Subscriptions',
    content: `
      <ul style="padding-left: 20px;list-style: disc;">
        <li>Products are licensed, not sold, and remain our property.</li>
        <li>Payment is authorized at purchase. Your order is confirmed upon successful payment.</li>
        <li>Prices are in USD, include VAT where applicable, and are subject to change.</li>
        <li>E-books require a PDF reader. Digital rights management (DRM) must not be removed.</li>
      </ul>
    `
  },
  {
    id: 'refunds',
    title: '5. Refunds & Cancellation',
    content: `
      <p>Refund eligibility depends on the Product type:</p>
      <ul style="padding-left: 20px;list-style: disc;">
        <li>7-Day Trial: Non-refundable</li>
        <li>Monthly Subscription: Refundable within 7 days at 50% of fee</li>
        <li>Annual Subscription: Refundable within 14 days at 50% of fee</li>
      </ul>
      <p>Refunds are only for technical issues, not personal preference or report dissatisfaction.</p>
      <p>Statutory rights under consumer law remain valid: You can cancel digital content contracts within 14 days, but once accessed, this right is lost.</p>
      <p>Refund requests must be sent to support@personalitytest101.com.</p>
    `
  },
  {
    id: 'license',
    title: '6. License to Use Website & Products',
    content: `
      <ul style="padding-left: 20px;list-style: disc;">
        <li>Intellectual property (copyright, trademarks, software, content) belongs to us or our licensors.</li>
        <li>You may view, download, or print for personal use only.</li>
        <li>You must not copy, sell, modify, or distribute any material without permission.</li>
      </ul>
    `
  },
  {
    id: 'acceptable-use',
    title: '7. Acceptable Use',
    content: `
      <p>You may not use the Website or Products to:</p>
      <ul style="padding-left: 20px;list-style: disc;">
        <li>Transmit malware, spam, or illegal content</li>
        <li>Conduct business or employment assessments without permission</li>
        <li>Violate laws, harass, or impersonate others</li>
        <li>Share confidential or copyrighted content unlawfully</li>
      </ul>
    `
  },
  {
    id: 'user-content',
    title: '8. User Generated Content',
    content: `
      <ul style="padding-left: 20px;list-style: disc;">
        <li>You are responsible for any content you post.</li>
        <li>By posting, you grant us a worldwide, royalty-free license to use your content.</li>
        <li>Offensive, illegal, or misleading content is prohibited.</li>
      </ul>
    `
  },
  {
    id: 'notice-takedown',
    title: '9. Notice and Takedown',
    content: `
      <ul style="padding-left: 20px;list-style: disc;">
        <li>If you believe content infringes your rights, email support@personalitytest101.com with full details.</li>
        <li>We will investigate and remove infringing content as appropriate.</li>
      </ul>
    `
  },
  {
    id: 'unsolicited-ideas',
    title: '10. Unsolicited Idea Submissions',
    content: `
      <ul style="padding-left: 20px;list-style: disc;">
        <li>Do not submit ideas or creative works. Any submissions become our sole property without obligation. Feedback can be sent via email excluding ideas.</li>
      </ul>
    `
  },
  {
    id: 'warranties',
    title: '11. Warranties & Disclaimers',
    content: `
      <ul style="padding-left: 20px;list-style: disc;">
        <li>Products are provided "as is" without warranties.</li>
        <li>We do not guarantee accuracy, completeness, or availability of Products or AI outputs.</li>
        <li>Our content is informational only and not a substitute for professional advice.</li>
      </ul>
    `
  },
  {
    id: 'liability',
    title: '12. Liability Limitations',
    content: `
      <ul style="padding-left: 20px;list-style: disc;">
        <li>Liability is limited to the extent allowed by law.</li>
        <li>We are not liable for:</li>
        <ul style="padding-left: 20px;list-style: disc;">
          <li>Business, employment, or recruitment losses</li>
          <li>Emotional or mental distress except due to our negligence</li>
          <li>Loss of data or unforeseeable damages</li>
        </ul>
        <li>AI outputs are used at your own risk.</li>
      </ul>
    `
  },
  {
    id: 'indemnity',
    title: '13. Indemnity',
    content: `
      <p>You agree to compensate us for any losses or claims arising from your breach of these terms.</p>
    `
  },
  {
    id: 'breaches',
    title: '14. Breaches & Enforcement',
    content: `
      <ul style="padding-left: 20px;list-style: disc;">
        <li>We may suspend or block access for breaches of these terms.</li>
        <li>Delay in enforcement does not waive our rights.</li>
      </ul>
    `
  },
  {
    id: 'changes',
    title: '15. Changes & Variation',
    content: `
      <p>We may revise these terms at any time. Continued use of the website constitutes acceptance.</p>
    `
  },
  {
    id: 'entire-agreement',
    title: '16. Entire Agreement',
    content: `
      <p>These terms, together with Privacy Policy and Refund Policy, constitute the complete agreement.</p>
    `
  },
  {
    id: 'contact',
    title: '17. Contact',
    content: `
      <p>For support, complaints, or questions: support@personalitytest101.com</p>
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
