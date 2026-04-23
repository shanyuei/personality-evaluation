<template>
  <main class="uno-py-12 uno-px-2 md:uno-px-10">
    <div class="page-container">
      <div class="uno-mb-8">
        <h1
          class="uno-text-[40px] md:uno-text-[64px] lg:uno-text-[72px] uno-font-Outfit uno-font-600 uno-text-[var(--ui-foreground)] uno-tracking-tight">
          {{ $t('pages.faq.title') }}
        </h1>
      </div>

      <LegalMobileDirectory :title="$t('pages.legal.directory')" :items="asideCategories" :active-id="currentCategory"
        @select="handleMobileCategoryClick" />

      <div class="uno-grid uno-grid-cols-1 lg:uno-grid-cols-4 uno-gap-8">
        <!-- 分类 -->
        <aside class="uno-hidden lg:uno-block uno-h-full uno-col-span-1">
          <nav class="uno-sticky uno-top-24 uno-self-start">
            <ul class="uno-space-y-3 lg:uno-space-y-4">
              <li v-for="cat in asideCategories" :key="cat.id">
                <a :class="['uno-block uno-text-[16px] md:uno-text-[20px] uno-font-medium hover:text-[var(--color-pink-1)]', currentCategory === cat.id ? 'text-[var(--color-pink-1)]' : '']"
                  @click="scrollToCategory(cat.id)">{{ cat.title }}</a>
              </li>
            </ul>
          </nav>
        </aside>
        <!-- 内容 -->
        <section class="lg:uno-col-span-3 uno-space-y-10">
          <div class="uno-space-y-4">

            <div class="uno-space-y-5">
              <template v-for="(entry, i) in asideCategories" :key="entry.id">
                <h2 :id="entry.id"
                  class="uno-text-2xl md:uno-text-24px uno-font-Outfit uno-font-600 uno-text-black uno-mb-4">
                  {{ entry.title }}
                </h2>

                <!-- 内容 integrations -->

                <!-- <h6 class="uno-text-gray-700 uno-text-lg md:uno-text-xl uno-font-Outfit uno-font-medium">
                      {{ item.text }}
                    </h6> -->
                <div v-for="(text, i) in entry.list" :key="i"
                  class="uno-border-t uno-border-t-[var(--ui-border)] uno-rounded-[12px]">
                  <div class="uno-flex uno-justify-between uno-items-center uno-py-[20px] "
                    @click="toggle(entry.id + '-' + entry.id, i)">
                    <p class="uno-text-[var(--ui-foreground)] uno-text-18px uno-font-Outfit uno-font-medium">
                      {{ text.question }}
                    </p>
                    <div class="uno-w-[24px] uno-h-[24px] uno-flex uno-items-center uno-justify-center uno-mr-4">
                      <IconsFaqToggle :expanded="isExpanded(entry.id + '-' + entry.id, i)" />
                    </div>
                  </div>
                  <div v-if="isExpanded(entry.id + '-' + entry.id, i)" class=" uno-pb-[20px]">
                    <p class="uno-text-[#4E5255] uno-text-14px uno-pr-10">
                      {{ text.answer }}
                    </p>
                  </div>
                </div>

              </template>
            </div>


          </div>

        </section>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import LegalMobileDirectory from '~/components/legal/LegalMobileDirectory.vue'

const { t } = useI18n()
definePageMeta({
  layoutShowCurious: true,
  title: () => 'seo.faq.title',
  layoutShowPageTopIcons: false,
  layoutShowPageTopIcons3: true,
  layoutPageTopIcon3Class: 'uno-top-160px uno-right-30px md:uno-top-100px md:uno-right-30px lg:uno-top-160px',
  path: '/faq',
})

useSeoMeta({
  title: () => t('seo.faq.title', { separator: '|' }),
  description: () => t('seo.faq.description')
})


const currentCategory = ref<string>('all')
const expandedItem = ref<string | null>(null)

const isExpanded = (section: string, i: number) => {
  return expandedItem.value === `${section}-${i}`
}

const toggle = (section: string, i: number) => {
  const key = `${section}-${i}`
  if (expandedItem.value === key) {
    expandedItem.value = null
  } else {
    expandedItem.value = key
  }
}

// 滚动到指定分类
const scrollToCategory = (id: string) => {
  currentCategory.value = id
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handleMobileCategoryClick = (id: string) => {
  scrollToCategory(id)
}

let observer: IntersectionObserver | null = null

// 监听滚动更新当前分类
const updateCurrentCategory = () => {
  const entries = observer?.takeRecords?.() || []
  const visibleEntries = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

  if (visibleEntries.length > 0) {
    const id = visibleEntries[0].target.id
    if (id !== currentCategory.value) {
      currentCategory.value = id
    }
  }
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    const visibleEntries = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

    if (visibleEntries.length > 0) {
      const id = visibleEntries[0].target.id
      if (id !== currentCategory.value) {
        currentCategory.value = id
      }
    }
  }, {
    rootMargin: '-20% 0px -70% 0px',
    threshold: [0, 0.1, 0.2, 0.5]
  })

  asideCategories.forEach((cat: any) => {
    const element = document.getElementById(cat.id)
    if (element) {
      observer?.observe(element)
    }
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})



const asideCategories: any = [
  {
    id: 'general',
    title: t('pages.faq.general.title'),
    list: [
      {
        question: t('pages.faq.general.list.1.question'),
        answer: t('pages.faq.general.list.1.answer')
      },
      {
        question: t('pages.faq.general.list.2.question'),
        answer: t('pages.faq.general.list.2.answer')
      },
      {
        question: t('pages.faq.general.list.3.question'),
        answer: t('pages.faq.general.list.3.answer')
      },
      {
        question: t('pages.faq.general.list.4.question'),
        answer: t('pages.faq.general.list.4.answer')
      },
      {
        question: t('pages.faq.general.list.5.question'),
        answer: t('pages.faq.general.list.5.answer')
      },
      {
        question: t('pages.faq.general.list.6.question'),
        answer: t('pages.faq.general.list.6.answer')
      },
    ],
  },
  {
    id: 'integration',
    title: t('pages.faq.integration'),
    list: [
      {
        question: t('pages.faq.integrations.list.1.question'),
        answer: t('pages.faq.integrations.list.1.answer')
      },
      {
        question: t('pages.faq.integrations.list.2.question'),
        answer: t('pages.faq.integrations.list.2.answer')
      },
      {
        question: t('pages.faq.integrations.list.3.question'),
        answer: t('pages.faq.integrations.list.3.answer')
      },
      {
        question: t('pages.faq.integrations.list.4.question'),
        answer: t('pages.faq.integrations.list.4.answer')
      },
      {
        question: t('pages.faq.integrations.list.5.question'),
        answer: t('pages.faq.integrations.list.5.answer')
      },
      {
        question: t('pages.faq.integrations.list.6.question'),
        answer: t('pages.faq.integrations.list.6.answer')
      },
    ]
  },
  {
    title: t('pages.faq.information.title'),
    id: t('pages.faq.information.title'),
    list: [
      {
        question: t('pages.faq.information.list.1.question'),
        answer: t('pages.faq.information.list.1.answer'),
      }
    ]
  },
  {
    title: t('pages.faq.disclosure.title'),
    id: t('pages.faq.disclosure.title'),
    list: [
      {
        question: t('pages.faq.disclosure.list.1.question'),
        answer: t('pages.faq.disclosure.list.1.answer'),
      }
    ]
  },
  {
    title: t('pages.faq.cookies.title'),
    id: t('pages.faq.cookies.title'),
    list: [
      {
        question: t('pages.faq.cookies.list.1.question'),
        answer: t('pages.faq.cookies.list.1.answer'),
      }
    ]
  },
  {
    title: t('pages.faq.changes.title'),
    id: t('pages.faq.changes.title'),
    list: [
      {
        question: t('pages.faq.changes.list.1.question'),
        answer: t('pages.faq.changes.list.1.answer'),
      }
    ]
  },
  {
    title: t('pages.faq.contact.title'),
    id: t('pages.faq.contact.title'),
    list: [
      {
        question: t('pages.faq.contact.list.1.question'),
        answer: t('pages.faq.contact.list.1.answer', { email: 'support@personalitytest101.com' }),
      }
    ]
  }
]




</script>

<style scoped></style>