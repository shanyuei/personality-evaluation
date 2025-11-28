<template>
  <div class="faq-section py-24 bg-gray-50">
    <div class="container mx-auto max-w-[1200px]">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-['Outfit'] font-bold mb-4">{{ title }}</h2>
        <p v-if="description" class="text-gray-600 max-w-3xl mx-auto">{{ description }}</p>
      </div>

      <div class="max-w-3xl mx-auto">
        <div
          v-for="(item, idx) in localItems"
          :key="idx"
          class="border border-gray-200 rounded-xl mb-4 overflow-hidden"
        >
          <button
            class="w-full flex justify-between items-center p-6 hover:bg-gray-50 transition-colors text-left"
            :class="item.expanded ? 'bg-green-50' : ''"
            @click="toggle(idx)"
          >
            <span
              class="font-['Outfit'] font-semibold text-lg"
              :class="item.expanded ? 'text-green-800' : ''"
            >
              {{ item.question }}
            </span>
            <span :class="item.expanded ? 'text-green-800' : ''">{{ item.expanded ? '-' : '+' }}</span>
          </button>
          <div v-if="item.expanded" class="p-6 bg-white border-t border-gray-200">
            <p class="text-gray-600">{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FAQItem {
  question: string
  answer: string
  expanded?: boolean
}

interface Props {
  title?: string
  description?: string
  items: FAQItem[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Frequently Asked Questions',
  description: ''
})

const localItems = ref<FAQItem[]>(props.items.map(i => ({ ...i, expanded: i.expanded ?? false })))

const toggle = (i: number) => {
  const item = localItems.value[i]
  if (item) item.expanded = !item.expanded
}
</script>

<style scoped>
</style>

