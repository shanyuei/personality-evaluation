<template>
  <div class="testimonials-section py-24 bg-white">
    <div class="container mx-auto max-w-[1200px]">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-['Outfit'] font-bold mb-4">{{ title }}</h2>
        <p class="text-gray-600 max-w-3xl mx-auto">{{ description }}</p>
      </div>

      <div v-if="firstRow.length" class="flex flex-wrap gap-x-6 gap-y-0">
        <div
          v-for="(item, idx) in firstRow"
          :key="idx"
          class="bg-white rounded-2xl shadow-md p-6 border border-[#E7E7E8] w-[220px]"
        >
          <div class="flex items-center gap-1 mb-4 text-amber-400">
            <span v-for="n in 5" :key="n" class="text-base">★</span>
          </div>
          <p class="text-gray-600 mb-6 text-sm">{{ item.text }}</p>
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
              <img :src="item.avatarUrl" :alt="item.name" class="w-full h-full rounded-full object-cover">
            </div>
            <div>
              <h4 class="font-['Outfit'] font-bold">{{ item.name }}</h4>
              <p class="text-gray-500 text-xs">{{ item.role }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="secondRow.length" class="flex flex-wrap gap-x-6 gap-y-0 mt-0">
        <div
          v-for="(item, idx) in secondRow"
          :key="'s-' + idx"
          class="bg-white rounded-2xl shadow-md p-6 border border-[#E7E7E8] w-[220px]"
        >
          <div class="flex items-center gap-1 mb-4 text-amber-400">
            <span v-for="n in 5" :key="n" class="text-base">★</span>
          </div>
          <p class="text-gray-600 mb-6 text-sm">{{ item.text }}</p>
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
              <img :src="item.avatarUrl" :alt="item.name" class="w-full h-full rounded-full object-cover">
            </div>
            <div>
              <h4 class="font-['Outfit'] font-bold">{{ item.name }}</h4>
              <p class="text-gray-500 text-xs">{{ item.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>

<script setup lang="ts">
interface ReviewItem {
  text: string
  avatarUrl: string
  name: string
  role: string
}

interface Props {
  title?: string
  description?: string
  rating?: number
  reviews: ReviewItem[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Trusted by 20,000+ customers',
  description:
    'Be always were in form of volunteers range time is mediatingappositive the in our affidavit how solitary saw more in his not',
  rating: 5
})

const firstRow = computed(() => (props.reviews || []).slice(0, 5))
const secondRow = computed(() => (props.reviews || []).slice(5))
</script>

<style scoped>
</style>
