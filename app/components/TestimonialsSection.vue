<template>
  <div
    class="uno-testimonials-section uno-py-16 sm:uno-py-20 md:uno-py-24 uno-bg-[var(--ui-background)] uno-w-full uno-mx-auto uno-overflow-hidden">
    <div class="uno-px-4">
      <div class="uno-text-center uno-mb-16">
        <h2 class="uno-text-[48px] uno-font-['Outfit'] uno-font-bold uno-mb-4 uno-text-[var(--ui-foreground)]">{{ title
          }}</h2>
        <p class="uno-text-[var(--ui-muted-foreground)] uno-max-w-3xl uno-mx-auto">{{ description }}</p>
      </div>

      <ClientOnly>
        <div class="uno-mt-[10px] ">
          <div class="uno-relative uno-right-0 sm:uno-right-12 md:uno-right-48px ">
            <Swiper v-if="firstRow.length" :modules="[Autoplay]" :slides-per-view="1" :space-between="16" :loop="true"
              :speed="800" :autoplay="{ delay: 2500, disableOnInteraction: false }" :breakpoints="{
                375: { slidesPerView: 1, spaceBetween: 16 },
                640: { slidesPerView: 1.5, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 2.5, spaceBetween: 24 },
                1280: { slidesPerView: 3, spaceBetween: 24 },
                1440: { slidesPerView: 3.5, spaceBetween: 24 },
                1600: { slidesPerView: 4, spaceBetween: 24 },
                1920: { slidesPerView: 4.5, spaceBetween: 24 }
              }">
              <SwiperSlide v-for="(item, idx) in firstRow" :key="'f-' + idx">
                <div class="uno-py-12px">
                  <div
                    class="uno-bg-[var(--ui-background)] uno-rounded-2xl uno-shadow-md hover:uno-shadow-[0_12px_24px_rgba(0,157,119,0.12)] uno-transition-all uno-duration-300 hover:uno-translate-y-[-4px] uno-p-6 uno-border uno-border-solid uno-border-[#F0F0F0] uno-w-full uno-max-w-[400px] uno-h-[331px]">
                    <div class="uno-flex uno-items-center uno-gap-1 uno-mb-4 uno-text-amber-400">
                      <span v-for="n in 5" :key="n"
                        class="uno-text-[24px] uno-w-[24px] uno-h-[24px] uno-flex uno-justify-center uno-items-center">★</span>
                    </div>
                    <p class="uno-text-[var(--ui-muted-foreground)] uno-mb-6 uno-text-[16px]">{{ item.text }}</p>
                    <div class="uno-flex uno-items-center">
                      <div
                        class="uno-w-[48px] uno-h-[48px] uno-rounded-full uno-bg-[var(--color-gray-7)] uno-flex uno-items-center uno-justify-center uno-mr-3">
                        <img :src="item.avatarUrl" :alt="item.name"
                          class="uno-w-full uno-h-full uno-rounded-full uno-object-cover">
                      </div>
                      <div>
                        <h4 class="uno-font-['Outfit'] uno-font-bold uno-text-[20px] uno-text-[var(--ui-foreground)]">{{
                          item.name }}</h4>
                        <p class="uno-text-[var(--ui-muted-foreground)] uno-text-[16px]">{{ item.role }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </ClientOnly>

      <ClientOnly>
        <div class="">
          <div class="uno-relative uno-left-0 sm:uno-left-12 md:uno-left-48px">
            <Swiper v-if="secondRow.length" :modules="[Autoplay]" :slides-per-view="1" :space-between="16" :loop="true"
              :speed="800" :autoplay="{ delay: 2500, disableOnInteraction: false, reverseDirection: true }"
              :breakpoints="{
                375: { slidesPerView: 1, spaceBetween: 16 },
                640: { slidesPerView: 1.5, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 2.5, spaceBetween: 24 },
                1280: { slidesPerView: 3, spaceBetween: 24 },
                1440: { slidesPerView: 3.5, spaceBetween: 24 },
                1600: { slidesPerView: 4, spaceBetween: 24 },
                1920: { slidesPerView: 4.5, spaceBetween: 24 }
              }">
              <SwiperSlide v-for="(item, idx) in secondRow" :key="'s-' + idx">
                <div class="uno-py-12px">
                  <div
                  class="uno-bg-[var(--ui-background)] uno-rounded-2xl uno-shadow-md hover:uno-shadow-[0_12px_24px_rgba(0,157,119,0.12)] uno-transition-all uno-duration-300 hover:uno-translate-y-[-4px] uno-p-6 uno-border uno-border-solid uno-border-[#F0F0F0] uno-w-full uno-max-w-[400px] uno-h-[331px]">
                  <div class="uno-flex uno-items-center uno-gap-1 uno-mb-4 uno-text-amber-400">
                    <span v-for="n in 5" :key="n"
                      class="uno-text-[24px] uno-w-[24px] uno-h-[24px] uno-flex uno-justify-center uno-items-center">★</span>
                  </div>
                  <p class="uno-text-[var(--ui-muted-foreground)] uno-mb-6 uno-text-[16px]">{{ item.text }}</p>
                  <div class="uno-flex uno-items-center">
                    <div
                      class="uno-w-[48px] uno-h-[48px] uno-rounded-full uno-bg-[var(--color-gray-7)] uno-flex uno-items-center uno-justify-center uno-mr-3">
                      <img :src="item.avatarUrl" :alt="item.name"
                        class="uno-w-full uno-h-full uno-rounded-full uno-object-cover">
                    </div>
                    <div>
                      <h4 class="uno-font-['Outfit'] uno-font-bold uno-text-[20px] uno-text-[var(--ui-foreground)]">{{
                        item.name }}</h4>
                      <p class="uno-text-[var(--ui-muted-foreground)] uno-text-[16px]">{{ item.role }}</p>
                    </div>
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
