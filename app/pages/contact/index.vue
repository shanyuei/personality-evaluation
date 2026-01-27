<template>
  <main class="uno-py-12 sm:uno-py-16 md:uno-py-24">
    <!-- 页面内容 -->
    <div class="page-container">

      <div class="uno-flex uno-flex-col md:uno-flex-row md:uno-justify-between  uno-relative">
        <NuxtImg src="/images/about/icon-1.png" alt="decor"
          class="uno-absolute uno-left-1/2 uno--translate-x-1/2 uno-top-0 uno-w-47px uno-h-36px" />
        <!-- 左侧内容 -->
        <div class="uno-w-[740px]">
          <h1
            class="uno-text-[#011813] uno-text-5xl sm:uno-text-6xl md:uno-text-[72px] uno-font-Outfit uno-font-[600] uno-mb-6 uno-leading-[1.2]">
            Contact Us
          </h1>
          <p class="uno-text-[#4E5255] uno-text-[18px] uno-font-Outfit uno-mb-12 uno-leading-[1.5]">
            Have questions about our personality tests or need support? 
            <br />
            Contact the PersonalityTest101 team — we’re here to help.
          </p>
          <a href="mailto:support@personalitytest101.com"
            class="uno-text-[var(--ui-primary)] uno-text-base uno-font-Outfit uno-mb-12 inline-block">
            support@personalitytest101.com
          </a>

          <!-- 联系选项卡片 -->
          <div class="uno-grid uno-grid-cols-1 sm:uno-grid-cols-3 uno-gap-[20px]">
            <div v-for="option in contactOptions" :key="option.id" class="uno-gap-16 ">
              <div class="uno-w-12 uno-h-12 uno-rounded-full uno-flex uno-items-center uno-justify-center uno-mb-4">
                <HeartIcon v-if="option.id === 'feedback'" />
                <MailIcon v-else-if="option.id === 'media'" />
                <BrainIcon v-else-if="option.id === 'support'" />
              </div>
              <h3 class="uno-text-[#011813] uno-text-[20px] uno-font-Outfit uno-font-[500] uno-mb-2 uno-leading-[1.36]">
                {{ option.title }}
              </h3>
              <p class="uno-text-[#4E5255] uno-text-[14px] uno-font-Outfit uno-font-[400] uno-leading-[1.36]">
                {{ option.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- 右侧 Get in Touch 卡片 -->
        <div class="uno-flex-1 uno-max-w-[411px]">
          <div
            class="uno-bg-[var(--Color-4,#DCFBF2)] uno-w-full uno-px-[32px] uno-py-[33px] uno-rounded-[32px] uno-border uno-border-[#E7E7E8] uno-flex uno-flex-col uno-items-center">
            <div
              class="uno-w-10 uno-h-10 uno-bg-[#dfffea] uno-rounded-full uno-flex uno-items-center uno-justify-center uno-mb-4">
              <MailLargeIcon />

            </div>
            <h3
              class="uno-text-[#011813] uno-text-[24px] uno-font-Outfit uno-font-[500] uno-mb-4 uno-leading-[1.36] uno-text-center">
              Get in Touch
            </h3>
            <p
              class="uno-text-[#4E5255] uno-text-[14px] uno-font-Outfit uno-font-[400] uno-mb-6 uno-leading-[1.36] uno-text-center">
              If you have questions about our personality tests, need assistance, or want to share feedback, feel free
              to reach out anytime. We’re always happy to hear from our users and provide clear, thoughtful support.
            </p>
            <p
              class="uno-text-[#4E5255] uno-text-[14px] uno-font-Outfit uno-font-[400] uno-mb-8 uno-leading-[1.36] uno-text-center">
              Click the button below to email the PersonalityTest101 team directly. Get in touch today — we’re here to
              support you every step of the way.

            </p>
            <a href="mailto:support@personalitytest101.com"
              class="uno-w-full uno-h-[56px] uno-px-[20px] uno-py-[6px] uno-gap-4 uno-bg-[var(--Color,#009D77)] uno-text-white uno-text-base uno-font-Outfit uno-font-semibold uno-rounded-[8px] uno-transition-colors hover:uno-bg-[#0A8165] uno-flex uno-items-center uno-justify-center">
              Get Support
            </a>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="uno-mt-24">
        <FAQSection :title="'Frequently Asked Questions'"
          :description="'Find answers to common questions about our services and operations.'" :items="faqItems"
          :accordion="true" :default-expanded-index="0" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import HeartIcon from '@/components/icons/HeartIcon.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import BrainIcon from '@/components/icons/BrainIcon.vue'
import MailLargeIcon from '@/components/icons/MailLargeIcon.vue'

const { t } = useI18n()

definePageMeta({
  title: () => 'seo.contact.title',
  layoutShowCurious: true,
  curious: {
    title: 'Ready to Uncover Your True Personality?',
    description: 'Find out your personality type, preferences, and hidden strengths in just a few minutes. Quick, fun, and insightful — your journey of self-discovery starts here!',
    buttonText: 'Reveal Your Personality',
    buttonDisabled: false
  }
})
useSeoMeta({
  title: () => t('seo.contact.title') as string,
  description: () => t('seo.contact.description') as string
})

// 联系选项数据
const contactOptions = [
  {
    id: 'feedback',
    title: 'Test Support',
    description: 'Get help with taking personality tests, viewing results, or understanding your reports.',
  },
  {
    id: 'media',
    title: 'Feedback & Suggestions',
    description: 'Share your thoughts, ideas, or suggestions to help us improve PersonalityTest101.',
  },
  {
    id: 'support',
    title: 'General Inquiries',
    description: 'Have questions about PersonalityTest101 or our services? Reach out and we\'ll get back to you as soon as possible.',
  }
]

const faqItems = [
  {
    question: 'What is the PersonalityTest101 assessment and how does it work?',
    answer: 'Our personality assessments are designed to help you understand your traits, preferences, and behavioral patterns through a structured set of questions. Once you complete the test, you\'ll receive a personalized report with insights into your personality type and practical suggestions for growth.'
  },
  {
    question: 'How do you handle my personal data and privacy?',
    answer: 'We value your privacy and protect your information with secure systems. Your test responses and results are kept confidential and are not shared without your consent. You can review our full Privacy Policy for more details.'
  },
  {
    question: 'How accurate are the personality test results?',
    answer: 'Our tests are designed using trusted psychological frameworks, giving you reliable insights into your personality traits. While no test can capture every detail, the results are meaningful and can help you better understand yourself.'
  },
  {
    question: 'Are there different types of tests available?',
    answer: 'Yes! PersonalityTest101 offers a variety of assessments that explore different aspects of your personality, including traits, strengths, career preferences, and relationship patterns. You can choose the tests that interest you most.'
  },
  {
    question: 'How long will it take to receive my test results?',
    answer: 'You will usually receive your results immediately after completing the test. The exact time the test takes depends on how quickly you answer each question.'
  },
  {
    question: 'How often can I retake the tests?',
    answer: 'You can retake our tests as often as you like. Your results may change over time as your experiences, self-perception, or perspective evolves.'
  },
  {
    question: 'Are the tests scientifically validated?',
    answer: 'Yes, our main assessments are based on widely recognized psychological frameworks and have been tested for reliability and validity, ensuring meaningful results for users.'
  },
  {
    question: 'Are the tests suitable for all age groups?',
    answer: 'Our tests are designed for teens and adults. Some specialized tests may have recommended age ranges — always check the description before starting.'
  }
]
</script>

<style scoped>
/* About Us page specific styles */
</style>
