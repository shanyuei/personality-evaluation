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
        <!-- 分类 -->
        <aside class="uno-hidden md:uno-block md:uno-col-span-1">
          <div class=" uno-rounded-2xl  uno-p-6">
            <div class="uno-flex uno-justify-start uno-items-start uno-flex-col uno-gap-4">
              <span
                class="uno-text-[var(--ui-foreground)] uno-text-2xl uno-font-['Outfit'] uno-font-medium uno-leading-normal">
                {{ $t('pages.faq.sections.general.title') }}
              </span>
              <div v-for="cat in asideCategories" :key="cat.id"
                class="uno-flex uno-justify-start uno-items-start uno-flex-col uno-gap-3 uno-cursor-pointer">
                <div
                  class="uno-text-xl uno-font-['Outfit'] uno-leading-normal uno-text-[var(--ui-foreground)] uno-font-medium">
                  {{ cat.title }}
                </div>
                <template v-for="(text, i) in cat.items" :key="i">
                  <div :class="[
                    `uno-font-['Outfit'] uno-leading-[2.4] uno-cursor-pointer uno-font-medium`,
                    currentCategory === text.id ? 'uno-text-[var(--ui-primary)]' : 'uno-text-[var(--ui-muted-foreground)]'
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
            <h2 class="uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-bold uno-text-black uno-mb-4">
              {{ $t('pages.faq.sections.general.title') }}
            </h2>
            <div class="uno-space-y-5">
              <template v-for="entry in asideCategories" :key="entry.id">
                <h4 class="uno-text-gray-800 uno-text-xl md:uno-text-2xl uno-font-['Outfit'] uno-font-medium">
                  {{ entry.title }}
                </h4>
                <template v-for="item in entry.items" :key="item.text">
                  <template v-if="currentCategory === 'all' || item.id === currentCategory">
                    <h6 class="uno-text-gray-700 uno-text-lg md:uno-text-xl uno-font-['Outfit'] uno-font-medium">
                      {{ item.text }}
                    </h6>
                    <div v-for="(text, i) in item.list" :key="i"
                      class="uno-border-t uno-border-t-[var(--ui-border)] uno-rounded-[12px]">
                      <div class="uno-flex uno-justify-between uno-items-center uno-py-[20px] "
                        @click="toggle('general', i)">
                        <p class="uno-text-[var(--ui-foreground)] uno-text-xl uno-font-['Outfit'] uno-font-medium">
                          {{ text.question }}
                        </p>
                        <div class="uno-w-[24px] uno-h-[24px] uno-flex uno-items-center uno-justify-center uno-mr-4">
                          <IconsFaqToggle />
                        </div>
                      </div>
                      <div v-if="isExpanded('general', i)" class=" uno-pb-[20px]">
                        <p class="uno-text-[var(--ui-muted-foreground)]">
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
  layoutShowCurious: true
})


const currentCategory = ref<string>('all') // 默认展示全部分类
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

// 切换分类
const switchCategory = (id: string) => {
  currentCategory.value = id
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
          { question: "什么是我们的服务？", answer: "我们提供专业的测评服务，帮助你了解自己的优势和不足。", id: "1", type: "1" },
          { question: "如何注册账户？", answer: "点击右上角注册按钮，填写邮箱和密码即可完成注册。", id: "2", type: "1" },
          { question: "忘记密码怎么办？", answer: "点击登录页忘记密码链接，输入邮箱即可重置密码。", id: "3", type: "1" },
          { question: "如何注册账户？", answer: "点击右上角注册按钮，填写邮箱和密码即可完成注册。", id: "4", type: "1" },
          { question: "忘记密码怎么办？", answer: "点击登录页忘记密码链接，输入邮箱即可重置密码。", id: "5", type: "1" },
        ]
      },
      {
        text: "Data Sharing and Disclosure",
        id: "2",
        list: [
          { question: "如何集成我们的API？", answer: "你可以参考我们的API文档，按照步骤完成集成。", id: "6", type: "2" },
          { question: "API调用有频率限制吗？", answer: "免费用户每分钟最多调用10次，付费用户无限制。", id: "7", type: "2" },
          { question: "如何获取API密钥？", answer: "登录账户后，在设置页面可以生成和管理API密钥。", id: "8", type: "2" },
        ]
      },
     
    ]
  }
]




</script>

<style scoped></style>
