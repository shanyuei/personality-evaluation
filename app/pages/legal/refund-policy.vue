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
  title: () => 'seo.legal.refund.title',
  path: "/refund-policy"
})

useSeoMeta({
  title: () => t('seo.legal.refund.title'),
  description: () => t('seo.legal.refund.description'),
})

const activeSection = ref('refund-policy')
const isClicking = ref(false)

const navItems = [
  { id: 'refund-policy', label: 'Refund and Cancellation Policy' },
  { id: 'subscription-plans', label: 'Subscription Plans & Refunds' },
  { id: 'refund-conditions', label: 'When Refunds Are Possible' },
  { id: 'cancellation-rights', label: 'Subscription Cancellation & Right to Cancel' },
  { id: 'refund-request', label: 'How to Request a Refund' },
  { id: 'friendly-notes', label: 'A Few Friendly Notes' },
  { id: 'why-simple', label: 'Why We Keep It Simple' }
]

const sections = [
  {
    id: 'refund-policy',
    title: 'Refund and Cancellation Policy',
    subtitle: 'Last Updated: February 2, 2026',
    content: `
      <p>We want every subscription to bring you meaningful insights into your personality. While our tests are designed to provide valuable results, we understand that sometimes things don't go as expected. Here's our refund and cancellation policy — clear, fair, and user-friendly.</p>
    `
  },
  {
    id: 'subscription-plans',
    title: '1. Subscription Plans & Refunds',
    content: `
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; border: 1px solid #000;">
        <thead>
          <tr style="background-color: #fff;">
            <th style="padding: 12px; text-align: left; border: 1px solid #000;">Plan</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #000;">Refund Window</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #000;">Refund Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 12px; border: 1px solid #000;"><strong>7-Day Trial</strong></td>
            <td style="padding: 12px; border: 1px solid #000;">Not refundable</td>
            <td style="padding: 12px; border: 1px solid #000;">N/A</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #000;"><strong>Monthly Subscription</strong></td>
            <td style="padding: 12px; border: 1px solid #000;">Within 7 days of purchase</td>
            <td style="padding: 12px; border: 1px solid #000;">50% of the subscription fee</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #000;"><strong>Annual Subscription</strong></td>
            <td style="padding: 12px; border: 1px solid #000;">Within 14 days of purchase</td>
            <td style="padding: 12px; border: 1px solid #000;">50% of the subscription fee</td>
          </tr>
        </tbody>
      </table>
      <p><strong>💡 Tip:</strong> Personalized reports are considered delivered once accessed, so full refunds are not available.</p>
    `
  },
  {
    id: 'refund-conditions',
    title: '2. When Refunds Are Possible',
    content: `
      <p>Refunds will not be granted for:</p>
      <ul style="padding-left: 20px;list-style: disc;">
        <li>Changing your mind or personal preference</li>
        <li>Not liking your report results</li>
        <li>Waiting time expectations</li>
        <li>Personalized reports that have already been accessed</li>
      </ul>
    `
  },
  {
    id: 'cancellation-rights',
    title: '3. Subscription Cancellation & Right to Cancel',
    content: `
      <p>You may cancel your subscription at any time to stop future payments. After cancellation, you can continue to use your subscription until the end of your current billing period.</p>
      <p>In addition, your statutory rights under applicable consumer laws remain valid:</p>
      <ul style="padding-left: 20px;list-style: disc;">
        <li>You have the right to cancel a contract for digital content within 14 days without giving any reason.</li>
        <li>If you start accessing or downloading your digital content during this period, you acknowledge that your right to cancel will be lost once the content is accessed.</li>
        <li>The 14-day period begins on the day your subscription is confirmed via email.</li>
        <li>To exercise this right, notify us via email: support@personalitytest101.com with a clear statement that you wish to cancel.</li>
        <li>To meet the deadline, it is sufficient to send your cancellation notice before the 14-day period ends.</li>
      </ul>
    `
  },
  {
    id: 'refund-request',
    title: '4. How to Request a Refund',
    content: `
      <p>To request a refund within our policy:</p>
      <ul style="padding-left: 20px;list-style: disc;">
        <li>Email: support@personalitytest101.com</li>
        <li>Include your account email, order details, and reason for the refund.</li>
      </ul>
      <p>Refunds are processed to the original payment method, usually within 30 business days after approval.</p>
    `
  },
  {
    id: 'friendly-notes',
    title: '5. A Few Friendly Notes',
    content: `
      <ul style="padding-left: 20px;list-style: disc;">
        <li>Personalized reports are created just for you and cannot be returned.</li>
        <li>Refunds apply only to the most recent payment.</li>
        <li>Each request is reviewed personally to ensure fairness and transparency.</li>
      </ul>
      <p>Our goal is that every test brings value and helps you understand yourself better.</p>
    `
  },
  {
    id: 'why-simple',
    title: 'Why We Keep It Simple',
    content: `
      <p>We know your time and trust are valuable. By providing clear refund windows, explaining partial refunds, and including your legal cancellation rights, we hope you feel confident subscribing, knowing that:</p>
      <ol style="padding-left: 20px;list-style: decimal;">
        <li>We deliver meaningful, personalized reports.</li>
        <li>You have a clear path if technical problems occur.</li>
        <li>You're supported every step of the way.</li>
      </ol>
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
