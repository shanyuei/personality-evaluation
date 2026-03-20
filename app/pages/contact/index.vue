<template>
  <main class="uno-pt-12 sm:uno-pt-16 md:uno-pt-56px">
    <!-- 页面内容 -->
    <div class="page-container">

      <div
        class="uno-flex uno-flex-col md:uno-flex-row md:uno-justify-between uno-flex-wrap uno-gap-20px uno-pt-60px md:uno-pt-0 uno-relative">
        <NuxtImg src="/images/about/icon-1.png" alt="decor"
          class="uno-absolute uno-left-1/2 uno--translate-x-1/2 uno-top-0 uno-w-47px uno-h-36px" />
        <!-- 左侧内容 -->
        <div class="uno-w-full sm:uno-w-[740px]">
          <h1
            class="uno-text-[#011813] uno-text-5xl sm:uno-text-6xl md:uno-text-[72px] uno-font-Outfit uno-font-[600] uno-mb-6 uno-leading-[1.2]">
            <!-- Contact Us -->
            {{ t('pages.contact.title') }}
          </h1>
          <p class="uno-text-[#4E5255] uno-text-[18px] uno-font-Outfit uno-mb-24px uno-leading-[1.5]">
            {{ t('pages.contact.desc1') }}
            <br>
            {{ t('pages.contact.desc2') }}
          </p>
          <a href="mailto:support@personalitytest101.com"
            class="uno-text-[var(--ui-primary)] uno-text-18px uno-font-Outfit uno-mb-24px inline-block uno-underline">
            support@personalitytest101.com
          </a>

          <!-- 联系选项卡片 -->
          <div class="uno-grid uno-grid-cols-1 sm:uno-grid-cols-3 uno-gap-[36px]">
            <div v-for="option in contactOptions" :key="option.id" class="uno-gap-16 ">
              <div class="uno-w-64px uno-h-64px uno-rounded-full uno-flex uno-items-center uno-justify-center uno-mb-4">
                <HeartIcon v-if="option.id === 'feedback'" />
                <MailIcon v-else-if="option.id === 'support'" />
                <BrainIcon v-else-if="option.id === 'media'" />
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
        <div class="uno-flex-1 ">
          <div
            class="uno-bg-[var(--Color-4,#DCFBF2)] uno-w-full uno-px-[32px] uno-py-[33px] uno-rounded-[32px]  uno-flex uno-flex-col uno-items-center">
            <div
              class="uno-w-10 uno-h-10 uno-bg-[#dfffea] uno-rounded-full uno-flex uno-items-center uno-justify-center uno-mb-4">
              <MailLargeIcon />

            </div>
            <h3
              class="uno-text-[#011813] uno-text-[24px] uno-font-Outfit uno-font-[500] uno-mb-4 uno-leading-[1.36] uno-text-center">
              {{ t('pages.contact.contactUs') }}
            </h3>
            <p
              class="uno-text-[#4E5255] uno-text-[14px] uno-font-Outfit uno-font-[400] uno-mb-6 uno-leading-[1.36] uno-text-center">
              {{ t('pages.contact.contactDesc1') }}
            </p>
            <p
              class="uno-text-[#4E5255] uno-text-[14px] uno-font-Outfit uno-font-[400] uno-mb-8 uno-leading-[1.36] uno-text-center">
              {{ t('pages.contact.contactDesc2') }}

            </p>
            <a href="mailto:support@personalitytest101.com" class="uno-block uno-w-full">
              <PrimaryButton width="full">
                {{ t('pages.contact.getSupport') }}
              </PrimaryButton>
            </a>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div >
        <FAQSection :title="t('pages.contact.faqTitle')" :description="t('pages.contact.faqDesc')" :items="faqItems"
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
import { useCurious } from '@/composables/useCurious'
import PrimaryButton from '~/components/ui/PrimaryButton.vue'

const { t } = useI18n()




definePageMeta({
  title: () => 'seo.contact.title',
  layoutShowCurious: true,
  layoutShowPageTopIcons: false,
  path: '/contact-us'
})
useSeoMeta({
  title: () => t('seo.contact.title', { separator: '|' }) as string,
  description: () => t('seo.contact.description') as string
})
const curious = useCurious()
// curious.setButtonText(t('pages.contact.curiousButtonText'))
curious.setButtonText(t('pages.home.curious.buttonText'))
curious.setDescription(t('pages.contact.curiousDesc'))
curious.setTitle(t('pages.contact.curiousTitle'))

// 联系选项数据
const contactOptions = [
  {
    id: 'support',
    title: t('pages.contact.support'),
    description: t('pages.contact.supportDesc'),
  },
  {
    id: 'media',
    title: t('pages.contact.media'),
    description: t('pages.contact.mediaDesc'),
  },
  {
    id: 'feedback',
    title: t('pages.contact.feedback'),
    description: t('pages.contact.feedbackDesc'),
  }
]

const faqItems = [
  {
    question: t('datas.faq.question1'),
    answer: t('datas.faq.answer1'),
  },
  {
    question: t('datas.faq.question2'),
    answer: t('datas.faq.answer2'),
  },
  {
    question: t('datas.faq.question3'),
    answer: t('datas.faq.answer3'),
  },
  {
    question: t('datas.faq.question4'),
    answer: t('datas.faq.answer4'),
  },
  {
    question: t('datas.faq.question5'),
    answer: t('datas.faq.answer5'),
  },
  {
    question: t('datas.faq.question6'),
    answer: t('datas.faq.answer6'),
  },
  {
    question: t('datas.faq.question7'),
    answer: t('datas.faq.answer7'),
  },
  {
    question: t('datas.faq.question8'),
    answer: t('datas.faq.answer8'),
  }
]
</script>

<style scoped>
/* About Us page specific styles */
</style>
