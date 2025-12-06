<template>
  <main class="min-h-screen bg-white">

    <!-- 第一块 -->

    
   
    <FAQSection 
      :title="$t('pages.about.faq.title')" 
      :description="$t('pages.about.faq.desc')" 
      :items="faqItems" 
      :accordion="true" 
      :default-expanded-index="0" 
    />
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()
// definePageMeta({
//   title: () => t('pages.about.title') as string
// })
// useSeoMeta({
//   title: () => t('pages.about.title') as string,
//   description: () => t('pages.about.description') as string,
//   ogTitle: () => t('pages.about.title') as string,
//   ogDescription: () => t('pages.about.description') as string
// })

const faqItems = [
  {
    question: t('pages.about.faq.q1'),
    answer: t('pages.about.faq.a1')
  },
  {
    question: t('pages.about.faq.q2'),
    answer: t('pages.about.faq.a2')
  },
  {
    question: t('pages.about.faq.q3'),
    answer: t('pages.about.faq.a3')
  },
  {
    question: t('pages.about.faq.q4'),
    answer: t('pages.about.faq.a4')
  },
  {
    question: t('pages.about.faq.q5'),
    answer: t('pages.about.faq.a5')
  }
]
</script>

<style scoped>
/* About Us page specific styles */
</style>
