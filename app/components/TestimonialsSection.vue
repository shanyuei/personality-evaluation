<template>
  <div class="uno-testimonials-section uno-py-16 sm:uno-py-20 md:uno-py-24 uno-bg-white uno-w-full uno-mx-auto uno-overflow-hidden">
    <div class="uno-mx-auto uno-max-w-[80%] uno-px-4">
      <div class="uno-text-center uno-mb-16">
        <h2 class="uno-text-4xl uno-font-['Outfit'] uno-font-bold uno-mb-4">{{ title }}</h2>
        <p class="uno-text-gray-600 uno-max-w-3xl uno-mx-auto">{{ description }}</p>
      </div>

      <ClientOnly>
        <Swiper v-if="firstRow.length" :modules="[Autoplay]" :slides-per-view="1" :space-between="16" :loop="true"
          :speed="800" :autoplay="{ delay: 2500, disableOnInteraction: false }"
          :breakpoints="{ 640: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 3, spaceBetween: 24 } }">
          <SwiperSlide v-for="(item, idx) in firstRow" :key="'f-' + idx">
            <div class="uno-bg-white uno-rounded-2xl uno-shadow-md uno-p-6 uno-border uno-border-[#E7E7E8] uno-w-full uno-max-w-[384px]">
              <div class="uno-flex uno-items-center uno-gap-1 uno-mb-4 uno-text-amber-400">
                <span v-for="n in 5" :key="n" class="uno-text-base">★</span>
              </div>
              <p class="uno-text-gray-600 uno-mb-6 uno-text-sm">{{ item.text }}</p>
              <div class="uno-flex uno-items-center">
                <div class="uno-w-10 uno-h-10 uno-rounded-full uno-bg-gray-200 uno-flex uno-items-center uno-justify-center uno-mr-3">
                  <img :src="item.avatarUrl" :alt="item.name" class="uno-w-full uno-h-full uno-rounded-full uno-object-cover">
                </div>
                <div>
                  <h4 class="uno-font-['Outfit'] uno-font-bold">{{ item.name }}</h4>
                  <p class="uno-text-gray-500 uno-text-xs">{{ item.role }}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>

      <ClientOnly>
        <div class="uno-mt-0">
          <div class="uno-relative uno-left-0 sm:uno-left-12 md:uno-left-48px">
            <Swiper v-if="secondRow.length" :modules="[Autoplay]" :slides-per-view="1" :space-between="16" :loop="true"
              :speed="800" :autoplay="{ delay: 2500, disableOnInteraction: false, reverseDirection: true }"
              :breakpoints="{ 640: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 3, spaceBetween: 24 } }">
              <SwiperSlide v-for="(item, idx) in secondRow" :key="'s-' + idx">
                <div class="uno-bg-white uno-rounded-2xl uno-shadow-md uno-p-6 uno-border uno-border-[#E7E7E8] uno-w-full uno-max-w-[384px]">
                  <div class="uno-flex uno-items-center uno-gap-1 uno-mb-4 uno-text-amber-400">
                    <span v-for="n in 5" :key="n" class="uno-text-base">★</span>
                  </div>
                  <p class="uno-text-gray-600 uno-mb-6 uno-text-sm">{{ item.text }}</p>
                  <div class="uno-flex uno-items-center">
                    <div class="uno-w-10 uno-h-10 uno-rounded-full uno-bg-gray-200 uno-flex uno-items-center uno-justify-center uno-mr-3">
                      <img :src="item.avatarUrl" :alt="item.name" class="uno-w-full uno-h-full uno-rounded-full uno-object-cover">
                    </div>
                    <div>
                      <h4 class="uno-font-['Outfit'] uno-font-bold">{{ item.name }}</h4>
                      <p class="uno-text-gray-500 uno-text-xs">{{ item.role }}</p>
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
