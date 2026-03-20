<template>
  <main class="uno-py-12 uno-px-6 md:uno-px-10">
    <div class="page-container">
      <div class="uno-mb-8">
        <h1
          class="uno-text-[40px] md:uno-text-[64px] lg:uno-text-[72px] uno-font-Outfit uno-font-600 uno-text-[var(--ui-foreground)] uno-tracking-tight">
          {{ $t('pages.faq.title') }}
        </h1>
      </div>

      <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-8">
        <!-- 分类 -->
        <aside class="uno-hidden md:uno-block md:uno-col-span-1">
          <div class=" uno-rounded-2xl  uno-p-6">
            <div class="uno-flex uno-justify-start uno-items-start uno-flex-col uno-gap-4">
              <span
                class="uno-text-[var(--ui-foreground)] uno-text-2xl uno-font-Outfit uno-font-medium uno-leading-normal">
                {{ $t('pages.faq.general.faqs') }}
              </span>
              <div v-for="cat in asideCategories" :key="cat.id"
                class="uno-flex uno-justify-start uno-items-start uno-flex-col uno-gap-3 uno-cursor-pointer">
                <div
                  class="uno-text-xl uno-font-Outfit uno-leading-normal uno-text-[var(--ui-foreground)] uno-font-medium">
                  {{ cat.title }}
                </div>

                <template v-for="(text, i) in cat.items" :key="i">
                  <div :class="[
                    `uno-font-Outfit uno-leading-[2.4] uno-cursor-pointer uno-font-medium`,
                    currentCategory === text.id ? 'uno-text-[var(--ui-primary)]' : 'uno-text-[#4E5255]'
                  ]" @click="switchCategory(text.id)">
                    {{ text.text }}
                  </div>
                </template>
              </div>
            </div>
          </div>
        </aside>
        <!-- 内容 -->
        <section class="md:uno-col-span-2 uno-space-y-10">
          <div class="uno-space-y-4">
            <h2 class="uno-text-2xl md:uno-text-24px uno-font-Outfit uno-font-600 uno-text-black uno-mb-4">
              {{ $t('pages.faq.general.faqs') }}
            </h2>
            
            <!-- 固定显示的 FAQ 内容 -->
            <div class="uno-space-y-8">
              <!-- Personality & Science -->
              <div>
                <h3 class="uno-text-xl uno-font-Outfit uno-font-medium uno-mb-4">
                  {{ $t('pages.faq.faqs.personalityScience') }}
                </h3>
                <div class="uno-space-y-4">
                  <div v-for="(item, i) in [1, 2, 3]" :key="'personality-' + i"
                    class="uno-border-t uno-border-t-[var(--ui-border)] uno-rounded-[12px]">
                    <div class="uno-flex uno-justify-between uno-items-center uno-py-[20px] "
                      @click="toggle('fixed-personality', item)">
                      <p class="uno-text-[var(--ui-foreground)] uno-text-18px uno-font-Outfit uno-font-medium">
                        {{ $t('pages.faq.faqs.list.' + item + '.q') }}
                      </p>
                      <div class="uno-w-[24px] uno-h-[24px] uno-flex uno-items-center uno-justify-center uno-mr-4">
                        <IconsFaqToggle :expanded="isExpanded('fixed-personality', item)" />
                      </div>
                    </div>
                    <div v-if="isExpanded('fixed-personality', item)" class=" uno-pb-[20px]">
                      <p class="uno-text-[#4E5255] uno-text-14px uno-px-10">
                        {{ $t('pages.faq.faqs.list.' + item + '.desc') }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Membership & Billing -->
              <div>
                <h3 class="uno-text-xl uno-font-Outfit uno-font-medium uno-mb-4">
                  {{ $t('pages.faq.faqs.membershipBilling') }}
                </h3>
                <div class="uno-space-y-4">
                  <div v-for="(item, i) in [4, 5, 6]" :key="'billing-' + i"
                    class="uno-border-t uno-border-t-[var(--ui-border)] uno-rounded-[12px]">
                    <div class="uno-flex uno-justify-between uno-items-center uno-py-[20px] "
                      @click="toggle('fixed-billing', item - 3)">
                      <p class="uno-text-[var(--ui-foreground)] uno-text-18px uno-font-Outfit uno-font-medium">
                        {{ $t('pages.faq.faqs.list.' + item + '.q') }}
                      </p>
                      <div class="uno-w-[24px] uno-h-[24px] uno-flex uno-items-center uno-justify-center uno-mr-4">
                        <IconsFaqToggle :expanded="isExpanded('fixed-billing', item - 3)" />
                      </div>
                    </div>
                    <div v-if="isExpanded('fixed-billing', item - 3)" class=" uno-pb-[20px]">
                      <p class="uno-text-[#4E5255] uno-text-14px uno-px-10">
                        {{ $t('pages.faq.faqs.list.' + item + '.desc') }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 内容 faqs -->
            <div v-show="false" class="uno-space-y-5">
              <div v-for="(faq, i) in faqs" :key="i"
                class="uno-border-t uno-border-t-[var(--ui-border)] uno-rounded-[12px]">
                <div class="uno-flex uno-justify-between uno-items-center uno-py-[20px] " @click="toggle('general', i)">
                  <p class="uno-text-[var(--ui-foreground)] uno-text-18px uno-font-Outfit uno-font-medium">
                    {{ faq.title }}
                  </p>
                  <div class="uno-w-[24px] uno-h-[24px] uno-flex uno-items-center uno-justify-center uno-mr-4">
                    <IconsFaqToggle :expanded="isExpanded('general', i)" />
                  </div>
                </div>
                <div v-if="isExpanded('general', i)" class=" uno-pb-[20px]">
                  <p class="uno-text-[#4E5255] uno-text-14px uno-px-10">
                    {{ faq.desc }}
                  </p>
                </div>
              </div>
            </div>

            <div class="uno-space-y-5">
              <template v-for="entry in asideCategories" :key="entry.id">
                <h4 class="uno-text-gray-800 uno-text-xl md:uno-text-2xl uno-font-Outfit uno-font-600">
                  {{ entry.title }}
                </h4>
                <!-- 内容 integrations -->
                <div v-show="false" class="uno-space-y-5">
                  <div v-for="(integration, i) in integrations" :key="i"
                    class="uno-border-t uno-border-t-[var(--ui-border)] uno-rounded-[12px]">
                    <div class="uno-flex uno-justify-between uno-items-center uno-py-[20px] "
                      @click="toggle('integration', i)">
                      <p class="uno-text-[var(--ui-foreground)] uno-text-18px uno-font-Outfit uno-font-medium">
                        {{ integration.title }}
                      </p>
                      <div class="uno-w-[24px] uno-h-[24px] uno-flex uno-items-center uno-justify-center uno-mr-4">
                        <IconsFaqToggle :expanded="isExpanded('integration', i)" />
                      </div>
                    </div>
                    <div v-if="isExpanded('integration', i)" class=" uno-pb-[20px]">
                      <p class="uno-text-[#4E5255] uno-text-14px uno-px-10">
                        {{ integration.desc }}
                      </p>
                    </div>
                  </div>
                </div>
                <template v-for="item in entry.items" :key="item.text">
                  <template v-if="currentCategory === 'all' || item.id === currentCategory">
                    <!-- <h6 class="uno-text-gray-700 uno-text-lg md:uno-text-xl uno-font-Outfit uno-font-medium">
                      {{ item.text }}
                    </h6> -->
                    <div v-for="(text, i) in item.list" :key="i"
                      class="uno-border-t uno-border-t-[var(--ui-border)] uno-rounded-[12px]">
                      <div class="uno-flex uno-justify-between uno-items-center uno-py-[20px] "
                        @click="toggle(entry.id + '-' + item.id, i)">
                        <p class="uno-text-[var(--ui-foreground)] uno-text-18px uno-font-Outfit uno-font-medium">
                          {{ text.question }}
                        </p>
                        <div class="uno-w-[24px] uno-h-[24px] uno-flex uno-items-center uno-justify-center uno-mr-4">
                          <IconsFaqToggle :expanded="isExpanded(entry.id + '-' + item.id, i)" />
                        </div>
                      </div>
                      <div v-if="isExpanded(entry.id + '-' + item.id, i)" class=" uno-pb-[20px]">
                        <p class="uno-text-[#4E5255] uno-text-14px uno-px-10 uno-px-10">
                          {{ text.answer }}
                        </p>
                      </div>
                    </div>
                  </template>
                </template>
              </template>
            </div>
          </div>

        </section>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'


const { t } = useI18n()
definePageMeta({
  layoutShowCurious: true,
  title: () => 'seo.faq.title',
  layoutShowPageTopIcons: false,
  layoutShowPageTopIcons3: true,
  layoutPageTopIcon3Class: 'uno-top-160px uno-right-0'
})

useSeoMeta({
  title: () => t('seo.faq.title', { separator: '|' }),
  description: () => t('seo.faq.description')
})


const currentCategory = ref<string>('all') // 默认展示全部分类
const expanded = reactive<{ [key: string]: boolean[] }>({
  general: [],
  integration: [],
  account: [],
  billing: []
})

const isExpanded = (section: string, i: number) => {
  if (!expanded[section]) {
    expanded[section] = []
  }
  return expanded[section][i] || false
}
const toggle = (section: string, i: number) => {
  if (!expanded[section]) {
    expanded[section] = []
  }
  expanded[section][i] = !expanded[section][i]
}

// 切换分类
const switchCategory = (id: string) => {
  currentCategory.value = currentCategory.value === id ? 'all' : id
}
const faqs = [
  {
    type: t('pages.faq.faqs.personalityScience'),
    title: t('pages.faq.faqs.list.1.q'),
    desc: t('pages.faq.faqs.list.1.desc')
  },
  {
    type: t('pages.faq.faqs.personalityScience'),
    title: t('pages.faq.faqs.list.2.q'),
    desc: t('pages.faq.faqs.list.2.desc')
  },
  {
    type: t('pages.faq.faqs.personalityScience'),
    title: t('pages.faq.faqs.list.3.q'),
    desc: t('pages.faq.faqs.list.3.desc')
  },
  {
    type: t('pages.faq.faqs.membershipBilling'),
    title: t('pages.faq.faqs.list.4.q'),
    desc: t('pages.faq.faqs.list.4.desc')
  },
  {
    type: t('pages.faq.faqs.membershipBilling'),
    title: t('pages.faq.faqs.list.5.q'),
    desc: t('pages.faq.faqs.list.5.desc')
  },
  {
    type: t('pages.faq.faqs.membershipBilling'),
    title: t('pages.faq.faqs.list.6.q'),
    desc: t('pages.faq.faqs.list.6.desc')
  }
];
const integrations = [
  {
    type: t('pages.faq.integrations.type1'),
    title: t('pages.faq.integrations.list.1.q'),
    desc: t('pages.faq.integrations.list.1.desc'),
  },
  {
    type: t('pages.faq.integrations.type1'),
    title: t('pages.faq.integrations.list.2.q'),
    desc: t('pages.faq.integrations.list.2.desc'),
  },
  {
    type: t('pages.faq.integrations.type1'),
    title: t('pages.faq.integrations.list.3.q'),
    desc: t('pages.faq.integrations.list.3.desc'),
  },
  {
    type: t('pages.faq.integrations.type2'),
    title: t('pages.faq.integrations.list.4.q'),
    desc: t('pages.faq.integrations.list.4.desc'),
  },
  {
    type: t('pages.faq.integrations.type2'),
    title: t('pages.faq.integrations.list.5.q'),
    desc: t('pages.faq.integrations.list.5.desc'),
  }, {
    type: t('pages.faq.integrations.type2'),
    title: t('pages.faq.integrations.list.6.q'),
    desc: t('pages.faq.integrations.list.6.desc'),
  }
];
const asideCategories: any = [
  {
    id: 'integration',
    title: t('pages.faq.integration'),

    items: [
      {
        text: t('pages.faq.integrations.title1'),
        id: "1",
        list: [
          {
            question: t('pages.faq.integrations.list1.question1'),
            answer: t('pages.faq.integrations.list1.answer1'),
            id: "1",
            type: "1"
          }
        ]
      },
      {
        text: t('pages.faq.integrations.title2'),
        id: "2",
        list: [
          {
            question: t('pages.faq.integrations.list2.question1'),
            answer: t('pages.faq.integrations.list2.answer1'),
            id: "1",
            type: "1"
          }
        ]
      },
      {
        text: t('pages.faq.integrations.title3'),
        id: "3",
        list: [
          {
            question: t('pages.faq.integrations.list3.question1'),
            answer: t('pages.faq.integrations.list3.answer1'),
            id: "1",
            type: "1"
          }
        ]
      },
      {
        text: t('pages.faq.integrations.title4'),
        id: "4",
        list: [
          {
            question: t('pages.faq.integrations.list4.question1'),
            answer: t('pages.faq.integrations.list4.answer1'),
            id: "1",
            type: "1"
          }
        ]
      },
      {
        text: t('pages.faq.integrations.title5'),
        id: "5",
        list: [
          {
            question: t('pages.faq.integrations.list5.question1'),
            answer: t('pages.faq.integrations.list5.answer1', { email: 'support@personalitytest101.com' }),
            id: "1",
            type: "1"
          }
        ]
      }
    ]
  }
]




</script>

<style scoped></style>
