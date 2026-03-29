<template>
  <div
    class="uno-testimonials-section uno-pt-16 sm:uno-pt-120px md:uno-pt-120px uno-bg-[var(--ui-background)] uno-w-full uno-mx-auto uno-overflow-hidden">
    <div class="uno-px-4">
      <div class="uno-text-center uno-mb-0 sm:uno-mb-56px">
        <h2
          class="uno-text-[32px] sm:uno-text-[48px] uno-font-Outfit uno-font-600 uno-mb-4 uno-text-[var(--ui-foreground)]">
          {{ title
          }}</h2>
        <p class="uno-text-[var(--ui-muted-foreground)] uno-max-w-2xl uno-mx-auto" style="white-space: pre-line;">{{
          description }}</p>

      </div>

      <ClientOnly v-if="!$device.isMobile && !$device.isMobileOrTablet">
        <div class="">
          <div class="uno-relative uno-right-0 sm:uno-right-12 md:uno-right-48px ">
            <Swiper v-if="firstRow.length" :modules="[Autoplay]" :slides-per-view="1" :space-between="16" :loop="true"
              :speed="800" :autoplay="{ delay: 2500, disableOnInteraction: false }" :breakpoints="{
                375: { slidesPerView: 1, spaceBetween: 16 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
                1280: { slidesPerView: 3, spaceBetween: 24 },
                1440: { slidesPerView: 4, spaceBetween: 24 },
                1600: { slidesPerView: 4, spaceBetween: 24 },
                1920: { slidesPerView: 5, spaceBetween: 24 },
                2200: { slidesPerView: 6, spaceBetween: 24 },
                2560: { slidesPerView: 7, spaceBetween: 24 }
              }">
              <SwiperSlide v-for="(item, idx) in firstRow" :key="'f-' + idx">
                <div class="uno-py-12px">
                  <div
                    class="uno-bg-[var(--ui-background)] uno-rounded-2xl hover:uno-shadow-[0_12px_24px_rgba(0,157,119,0.12)] uno-transition-all uno-duration-300 hover:uno-translate-y-[-4px] uno-p-6 uno-border uno-border-solid uno-border-[#F0F0F0] uno-w-full uno-max-w-[400px] uno-h-[331px] uno-flex uno-flex-col">
                    <div class="uno-flex uno-items-center uno-gap-1 uno-mb-4 uno-text-amber-400">
                      <svg v-for="n in 5" :key="n" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="uno-w-[24px] uno-h-[24px]">
                        <path d="M11.2827 3.45356C11.5131 2.98662 11.6284 2.75315 11.7848 2.67856C11.9209 2.61366 12.0791 2.61366 12.2152 2.67856C12.3717 2.75315 12.4869 2.98662 12.7174 3.45356L14.9041 7.88353C14.9721 8.02138 15.0061 8.0903 15.0558 8.14382C15.0999 8.1912 15.1527 8.22959 15.2113 8.25687C15.2776 8.28767 15.3536 8.29878 15.5057 8.32102L20.397 9.03595C20.9121 9.11124 21.1696 9.14888 21.2888 9.27468C21.3925 9.38414 21.4412 9.53454 21.4215 9.68402C21.3988 9.85582 21.2124 10.0374 20.8395 10.4006L17.3014 13.8467C17.1912 13.9541 17.136 14.0078 17.1004 14.0717C17.0689 14.1283 17.0487 14.1905 17.0409 14.2548C17.0321 14.3274 17.0451 14.4032 17.0711 14.555L17.906 19.4224C17.994 19.9357 18.038 20.1924 17.9553 20.3447C17.8833 20.4773 17.7554 20.5702 17.6071 20.5977C17.4366 20.6293 17.2061 20.5081 16.7451 20.2657L12.3724 17.9661C12.2361 17.8944 12.168 17.8586 12.0962 17.8445C12.0327 17.8321 11.9673 17.8321 11.9038 17.8445C11.832 17.8586 11.7639 17.8944 11.6277 17.9661L7.25492 20.2657C6.79392 20.5081 6.56341 20.6293 6.39297 20.5977C6.24468 20.5702 6.11672 20.4773 6.04474 20.3447C5.962 20.1924 6.00603 19.9357 6.09407 19.4224L6.92889 14.555C6.95491 14.4032 6.96793 14.3274 6.95912 14.2548C6.95132 14.1905 6.93111 14.1283 6.89961 14.0717C6.86402 14.0078 6.80888 13.9541 6.69859 13.8467L3.16056 10.4006C2.78766 10.0374 2.60121 9.85582 2.57853 9.68402C2.55879 9.53454 2.60755 9.38414 2.71125 9.27468C2.83044 9.14888 3.08797 9.11124 3.60304 9.03595L8.49431 8.32102C8.64642 8.29878 8.72248 8.28767 8.78872 8.25687C8.84736 8.22959 8.90016 8.1912 8.94419 8.14382C8.99391 8.0903 9.02793 8.02138 9.09597 7.88353L11.2827 3.45356Z" fill="#FFA200"/>
                      </svg>
                    </div>
                    <p class="uno-text-[#323233] uno-mb-6 uno-text-[16px]">{{ item.text }}</p>
                    <div class="uno-flex uno-items-center uno-mt-auto">
                      <div
                        class="uno-w-[48px] uno-h-[48px] uno-rounded-full uno-bg-[var(--color-gray-7)] uno-flex uno-items-center uno-justify-center uno-mr-3">
                        <img :src="item.avatarUrl" :alt="item.name"
                          class="uno-w-full uno-h-full uno-rounded-full uno-object-cover">
                      </div>
                      <div>
                        <h4 class="uno-font-Outfit uno-font-semibold uno-text-[20px] uno-text-[var(--ui-foreground)]">{{
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
        <div class="">
          <div class="uno-relative uno-left-0 sm:uno-left-12 md:uno-left-48px">
            <Swiper v-if="secondRow.length" :modules="[Autoplay]" :slides-per-view="1" :loop="true" :speed="800"
              :autoplay="{ delay: 2500, disableOnInteraction: false, reverseDirection: true }" :breakpoints="{
                375: { slidesPerView: 1, spaceBetween: 16 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
                1280: { slidesPerView: 3, spaceBetween: 24 },
                1440: { slidesPerView: 4, spaceBetween: 24 },
                1600: { slidesPerView: 4, spaceBetween: 24 },
                1920: { slidesPerView: 5, spaceBetween: 24 },
                2200: { slidesPerView: 6, spaceBetween: 24 },
                2560: { slidesPerView: 7, spaceBetween: 24 }
              }">
              <SwiperSlide v-for="(item, idx) in secondRow" :key="'s-' + idx">
                <div class="uno-py-12px">
                  <div
                    class="uno-bg-[var(--ui-background)] uno-rounded-2xl hover:uno-shadow-[0_12px_24px_rgba(0,157,119,0.12)] uno-transition-all uno-duration-300 hover:uno-translate-y-[-4px] uno-p-6 uno-border uno-border-solid uno-border-[#F0F0F0] uno-w-full uno-max-w-[400px] uno-h-[331px] uno-flex uno-flex-col">
                    <div class="uno-flex uno-items-center uno-gap-1 uno-mb-4 uno-text-amber-400">
                      <svg v-for="n in 5" :key="n" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="uno-w-[24px] uno-h-[24px]">
                        <path d="M11.2827 3.45356C11.5131 2.98662 11.6284 2.75315 11.7848 2.67856C11.9209 2.61366 12.0791 2.61366 12.2152 2.67856C12.3717 2.75315 12.4869 2.98662 12.7174 3.45356L14.9041 7.88353C14.9721 8.02138 15.0061 8.0903 15.0558 8.14382C15.0999 8.1912 15.1527 8.22959 15.2113 8.25687C15.2776 8.28767 15.3536 8.29878 15.5057 8.32102L20.397 9.03595C20.9121 9.11124 21.1696 9.14888 21.2888 9.27468C21.3925 9.38414 21.4412 9.53454 21.4215 9.68402C21.3988 9.85582 21.2124 10.0374 20.8395 10.4006L17.3014 13.8467C17.1912 13.9541 17.136 14.0078 17.1004 14.0717C17.0689 14.1283 17.0487 14.1905 17.0409 14.2548C17.0321 14.3274 17.0451 14.4032 17.0711 14.555L17.906 19.4224C17.994 19.9357 18.038 20.1924 17.9553 20.3447C17.8833 20.4773 17.7554 20.5702 17.6071 20.5977C17.4366 20.6293 17.2061 20.5081 16.7451 20.2657L12.3724 17.9661C12.2361 17.8944 12.168 17.8586 12.0962 17.8445C12.0327 17.8321 11.9673 17.8321 11.9038 17.8445C11.832 17.8586 11.7639 17.8944 11.6277 17.9661L7.25492 20.2657C6.79392 20.5081 6.56341 20.6293 6.39297 20.5977C6.24468 20.5702 6.11672 20.4773 6.04474 20.3447C5.962 20.1924 6.00603 19.9357 6.09407 19.4224L6.92889 14.555C6.95491 14.4032 6.96793 14.3274 6.95912 14.2548C6.95132 14.1905 6.93111 14.1283 6.89961 14.0717C6.86402 14.0078 6.80888 13.9541 6.69859 13.8467L3.16056 10.4006C2.78766 10.0374 2.60121 9.85582 2.57853 9.68402C2.55879 9.53454 2.60755 9.38414 2.71125 9.27468C2.83044 9.14888 3.08797 9.11124 3.60304 9.03595L8.49431 8.32102C8.64642 8.29878 8.72248 8.28767 8.78872 8.25687C8.84736 8.22959 8.90016 8.1912 8.94419 8.14382C8.99391 8.0903 9.02793 8.02138 9.09597 7.88353L11.2827 3.45356Z" fill="#FFA200"/>
                      </svg>
                    </div>
                    <p class="uno-text-[var(--ui-muted-foreground)] uno-mb-6 uno-text-[16px]">{{ item.text }}</p>
                    <div class="uno-flex uno-items-center uno-mt-auto">
                      <div
                        class="uno-w-[48px] uno-h-[48px] uno-rounded-full uno-bg-[var(--color-gray-7)] uno-flex uno-items-center uno-justify-center uno-mr-3">
                        <img :src="item.avatarUrl" :alt="item.name"
                          class="uno-w-full uno-h-full uno-rounded-full uno-object-cover">
                      </div>
                      <div>
                        <h4 class="uno-font-Outfit uno-font-semibold uno-text-[20px] uno-text-[var(--ui-foreground)]">{{
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

      <ClientOnly v-else>
        <div class="uno-mt-[10px] ">
          <div class="uno-relative uno-right-0 sm:uno-right-12 md:uno-right-0 lg:uno-right-48px ">
            <!-- Autoplay,  -->
            <Swiper v-if="mobileData.length" :modules="[Pagination]" :slides-per-view="1" :space-between="16"
              :loop="true" :speed="800" :pagination="{
                clickable: true,
              }" :autoplay="{ delay: 2500, disableOnInteraction: false }" class="diy-swiper" :breakpoints="{
                375: { slidesPerView: $device.isMobileOrTablet ? 2 : 1, spaceBetween: 16 },
                640: { slidesPerView: $device.isMobileOrTablet ? 2 : 1, spaceBetween: 20 },
                768: { slidesPerView: $device.isMobileOrTablet ? 2 : 1, spaceBetween: 20 },
                1024: { slidesPerView: $device.isMobileOrTablet ? 2 : 1, spaceBetween: 24 },
                1280: { slidesPerView: 3, spaceBetween: 24 },
                1440: { slidesPerView: 4, spaceBetween: 24 },
                1600: { slidesPerView: 4, spaceBetween: 24 },
                1920: { slidesPerView: 5, spaceBetween: 24 },
                2200: { slidesPerView: 6, spaceBetween: 24 },
                2560: { slidesPerView: 7, spaceBetween: 24 }
              }">
              <SwiperSlide v-for="(d, idx) in mobileData" :key="'f-' + idx">
                <div v-for="(item, itemIdx) in d" :key="itemIdx" class="uno-py-12px">
                  <div
                    class="uno-bg-[var(--ui-background)] uno-rounded-2xl md:uno-shadow-md uno-p-24px uno-border uno-border-solid uno-border-[#F0F0F0] uno-w-full uno-h-[296px] uno-flex uno-flex-col">
                    <div class="uno-flex uno-items-center uno-gap-1 uno-mb-24px uno-text-amber-400">
                      <svg v-for="n in 5" :key="n" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="uno-w-[24px] uno-h-[24px]">
                        <path d="M11.2827 3.45356C11.5131 2.98662 11.6284 2.75315 11.7848 2.67856C11.9209 2.61366 12.0791 2.61366 12.2152 2.67856C12.3717 2.75315 12.4869 2.98662 12.7174 3.45356L14.9041 7.88353C14.9721 8.02138 15.0061 8.0903 15.0558 8.14382C15.0999 8.1912 15.1527 8.22959 15.2113 8.25687C15.2776 8.28767 15.3536 8.29878 15.5057 8.32102L20.397 9.03595C20.9121 9.11124 21.1696 9.14888 21.2888 9.27468C21.3925 9.38414 21.4412 9.53454 21.4215 9.68402C21.3988 9.85582 21.2124 10.0374 20.8395 10.4006L17.3014 13.8467C17.1912 13.9541 17.136 14.0078 17.1004 14.0717C17.0689 14.1283 17.0487 14.1905 17.0409 14.2548C17.0321 14.3274 17.0451 14.4032 17.0711 14.555L17.906 19.4224C17.994 19.9357 18.038 20.1924 17.9553 20.3447C17.8833 20.4773 17.7554 20.5702 17.6071 20.5977C17.4366 20.6293 17.2061 20.5081 16.7451 20.2657L12.3724 17.9661C12.2361 17.8944 12.168 17.8586 12.0962 17.8445C12.0327 17.8321 11.9673 17.8321 11.9038 17.8445C11.832 17.8586 11.7639 17.8944 11.6277 17.9661L7.25492 20.2657C6.79392 20.5081 6.56341 20.6293 6.39297 20.5977C6.24468 20.5702 6.11672 20.4773 6.04474 20.3447C5.962 20.1924 6.00603 19.9357 6.09407 19.4224L6.92889 14.555C6.95491 14.4032 6.96793 14.3274 6.95912 14.2548C6.95132 14.1905 6.93111 14.1283 6.89961 14.0717C6.86402 14.0078 6.80888 13.9541 6.69859 13.8467L3.16056 10.4006C2.78766 10.0374 2.60121 9.85582 2.57853 9.68402C2.55879 9.53454 2.60755 9.38414 2.71125 9.27468C2.83044 9.14888 3.08797 9.11124 3.60304 9.03595L8.49431 8.32102C8.64642 8.29878 8.72248 8.28767 8.78872 8.25687C8.84736 8.22959 8.90016 8.1912 8.94419 8.14382C8.99391 8.0903 9.02793 8.02138 9.09597 7.88353L11.2827 3.45356Z" fill="#FFA200"/>
                      </svg>
                    </div>
                    <p class="uno-text-[#323233] uno-mb-6 uno-text-[16px]">{{ item.text }}</p>
                    <div class="uno-flex uno-items-center uno-mt-auto">
                      <div
                        class="uno-w-[48px] uno-h-[48px] uno-rounded-full uno-bg-[var(--color-gray-7)] uno-flex uno-items-center uno-justify-center uno-mr-3">
                        <img :src="item.avatarUrl" :alt="item.name"
                          class="uno-w-full uno-h-full uno-rounded-full uno-object-cover">
                      </div>
                      <div>
                        <h4 class="uno-font-Outfit uno-font-600 uno-text-[20px] uno-text-[var(--ui-foreground)]">{{
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
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
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
  description: `Be always were in form of volunteers range time is mediatingappositive the in our affidavit \n how solitary saw more in his not`,
  rating: 5
})
const chunk = (arr: string | any[] | globalThis.ComputedRef<ReviewItem[]>, n: number) => Array.from({ length: Math.ceil(arr.length / n) }, (_, i) => arr.slice(i * n, i * n + n));
const all = computed(() => props.reviews || [])
const mid = computed(() => Math.ceil(all.value.length / 2))
const firstRow = computed(() => all.value.slice(0, mid.value))
const secondRow = computed(() => all.value.slice(mid.value))
const mobileData = computed(() => chunk(all.value, 2))
</script>

<style scoped lang="less">
:deep(.diy-swiper) {

  // background-color: aqua;
  .swiper-wrapper {
    margin-bottom: 12px;
  }

  .swiper-pagination {
    position: relative;
    top: 0px;

    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background: #E7E7E8;
      border-radius: 50%;
      opacity: 1;
    }

    .swiper-pagination-bullet-active {
      background: #009D77;
    }
  }
}
</style>
