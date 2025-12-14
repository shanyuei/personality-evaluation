<template>
  <main class="uno-py-12 uno-px-6 md:uno-px-10">
    <div class="page-container">
      <div class="uno-mb-8">
        <h1
          class="uno-text-[40px] md:uno-text-[64px] lg:uno-text-[72px] uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-tracking-tight">
          {{ $t('pages.faq.title') }}
        </h1>
      </div>

      <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-8">
        <aside class="md:uno-col-span-1">
          <div class=" uno-rounded-2xl  uno-p-6">
            <div class="uno-flex uno-justify-start uno-items-start uno-flex-col uno-gap-4">
              <span
                class="uno-text-[var(--ui-foreground)] uno-text-2xl uno-font-['Outfit'] uno-font-medium uno-leading-normal">
                General FAQs
              </span>
              <div v-for="cat in asideCategories" :key="cat.id"
                class="uno-flex uno-justify-start uno-items-start uno-flex-col uno-gap-3 uno-cursor-pointer">
                <div
                  class="uno-text-xl uno-font-['Outfit'] uno-leading-normal uno-text-[var(--ui-foreground)] uno-font-medium">
                  {{ cat.title }}
                </div>
                <template v-for="(text, i) in cat.items" :key="i">
                  <div
                    class="uno-font-['Outfit'] uno-leading-[2.4] uno-cursor-pointer uno-text-[var(--ui-muted-foreground)] uno-font-medium">
                    {{ text.text }}
                  </div>
                </template>
              </div>
            </div>
          </div>
        </aside>

        <section class="md:uno-col-span-2 uno-space-y-10">
          <div class="uno-space-y-4">
            <h2 class="uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-bold uno-text-[var(--ui-foreground)]">
              {{ $t('pages.faq.sections.general.title') }}
            </h2>
            <div class="uno-space-y-3">
              <template v-for="entry in asideCategories" :key="entry.id">
                <h4 class="uno-text-[var(--ui-muted-foreground)] uno-text-lg uno-font-['Outfit'] uno-font-medium">
                  {{ entry.title }}
                </h4>
                <template v-for="item in entry.items" :key="item.text">
                  <h6 class="uno-text-[var(--ui-muted-foreground)] uno-text-lg uno-font-['Outfit'] uno-font-medium">
                    {{ item.text }}
                  </h6>
                  <div v-for="(text, i) in item.list" :key="i"
                    class="uno-border-t uno-border-t-[var(--ui-border)] uno-rounded-[12px]">
                    <div class="uno-flex uno-justify-between uno-items-center uno-py-[20px] uno-px-[24px]">
                      <p class="uno-text-[var(--ui-foreground)] uno-text-xl uno-font-['Outfit'] uno-font-medium">
                        {{ text.question }}
                      </p>
                      <div class="uno-w-[24px] uno-h-[24px] uno-flex uno-items-center uno-justify-center">
                        <IconsFaqToggle />
                      </div>
                    </div>
                    <div v-if="isExpanded('general', text.idx)" class="uno-px-[24px] uno-pb-[20px]">
                      <p class="uno-text-[var(--ui-muted-foreground)]">
                        {{ text.answer }}
                      </p>
                    </div>
                  </div>
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




const expanded = reactive<{ [key: string]: number | null }>({
  general: 0,
  integration: null,
  account: null,
  billing: null
})

const isExpanded = (section: string, i: number) => expanded[section] === i
const toggle = (section: string, i: number) => {
  expanded[section] = expanded[section] === i ? null : i
}
const asideCategories: any = [
  {
    id: 'integration',
    title: 'Integration',
    items: [
      {
        text: "How We Use Your Information",
        id: "1",
        list: [
          { question: t('faq.sections.general.q1'), answer: t('faq.sections.general.a1'), id: "1", type: "1" },
          { question: t('faq.sections.general.q2'), answer: t('faq.sections.general.a2'), id: "2", type: "1" },
          { question: t('faq.sections.general.q3'), answer: t('faq.sections.general.a3'), id: "3", type: "1" },
          { question: t('faq.sections.general.q2'), answer: t('faq.sections.general.a2'), id: "4", type: "1" },
          { question: t('faq.sections.general.q3'), answer: t('faq.sections.general.a3'), id: "5", type: "1" },
        ]
      },
      {
        text: "Data Sharing and Disclosure",
        id: "2",
        list: [
          { question: t('faq.sections.integration.q1'), answer: t('faq.sections.integration.a1'), id: "6", type: "2" },
          { question: t('faq.sections.integration.q2'), answer: t('faq.sections.integration.a2'), id: "7", type: "2" },
          { question: t('faq.sections.integration.q3'), answer: t('faq.sections.integration.a3'), id: "8", type: "2" },
        ]
      },
      {
        text: "Cookies and Tracking Technologies",
        id: "3",
        list: [
          { question: t('faq.sections.account.q1'), answer: t('faq.sections.account.a1'), id: "9", type: "3" },
          { question: t('faq.sections.account.q2'), answer: t('faq.sections.account.a2'), id: "10", type: "3" },
          { question: t('faq.sections.account.q3'), answer: t('faq.sections.account.a3'), id: "11", type: "3" },
        ],
      },
      {
        text: "Changes to This Privacy Policy",
        id: "4",
        list: [
          { question: t('faq.sections.billing.q1'), answer: t('faq.sections.billing.a1'), id: "12", type: "4" },
          { question: t('faq.sections.billing.q2'), answer: t('faq.sections.billing.a2'), id: "13", type: "4" },
          { question: t('faq.sections.billing.q3'), answer: t('faq.sections.billing.a3'), id: "14", type: "4" },
          { question: t('faq.sections.billing.q4'), answer: t('faq.sections.billing.a4'), id: "15", type: "4" },
        ]
      },
      {
        text: "Contact Us",
        id: "5",
        list: [
          { question: t('faq.sections.billing.q5'), answer: t('faq.sections.billing.a5'), id: "16", type: "5" },
          { question: t('faq.sections.billing.q6'), answer: t('faq.sections.billing.a6'), id: "17", type: "5" },
          { question: t('faq.sections.billing.q7'), answer: t('faq.sections.billing.a7'), id: "18", type: "5" },
          { question: t('faq.sections.billing.q8'), answer: t('faq.sections.billing.a8'), id: "19", type: "5" },
        ]
      }
    ]
  }
]


const getFaqType = () => {

}


</script>

<style scoped></style>
