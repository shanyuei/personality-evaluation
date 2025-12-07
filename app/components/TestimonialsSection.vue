<template>
  <div class="testimonials-section py-16 sm:py-20 md:py-24 bg-white w-full mx-auto overflow-hidden">
    <div class="mx-auto max-w-[80%] px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-['Outfit'] font-bold mb-4">{{ title }}</h2>
        <p class="text-gray-600 max-w-3xl mx-auto">{{ description }}</p>
      </div>

      <ClientOnly>
        <Swiper v-if="firstRow.length" :modules="[Autoplay]" :slides-per-view="1" :space-between="16" :loop="true"
          :speed="800" :autoplay="{ delay: 2500, disableOnInteraction: false }"
          :breakpoints="{ 640: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 3, spaceBetween: 24 } }">
          <SwiperSlide v-for="(item, idx) in firstRow" :key="'f-' + idx">
            <div class="bg-white rounded-2xl shadow-md p-6 border border-[#E7E7E8] w-full max-w-[384px]">
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
          </SwiperSlide>
        </Swiper>
      </ClientOnly>

      <ClientOnly>
        <div class="mt-0 ">
          <div class="relative left-0 sm:left-12 md:left-48px">
            <Swiper v-if="secondRow.length" :modules="[Autoplay]" :slides-per-view="1" :space-between="16" :loop="true"
              :speed="800" :autoplay="{ delay: 2500, disableOnInteraction: false, reverseDirection: true }"
              :breakpoints="{ 640: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 3, spaceBetween: 24 } }">
              <SwiperSlide v-for="(item, idx) in secondRow" :key="'s-' + idx">
                <div class="bg-white rounded-2xl shadow-md p-6 border border-[#E7E7E8] w-full max-w-[384px]">
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
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
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

const all = computed(() => props.reviews || [])
const mid = computed(() => Math.ceil(all.value.length / 2))
const firstRow = computed(() => all.value.slice(0, mid.value))
const secondRow = computed(() => all.value.slice(mid.value))
</script>

<style scoped></style>
