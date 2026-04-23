<template>
  <div class="lg:uno-hidden uno-fixed uno-left-0 uno-top-[185px] uno-z-[90]">


    <svg width="70" height="80" viewBox="0 0 70 80" fill="none" xmlns="http://www.w3.org/2000/svg" @click="open = true">
      <g filter="url(#filter0_d_1534_7238)">
        <path d="M0 16H30C43.2548 16 54 26.7452 54 40C54 53.2548 43.2548 64 30 64H0V16Z" fill="white" />
      </g>
      <circle cx="16" cy="33" r="2" fill="#011813" />
      <circle cx="16" cy="40" r="2" fill="#011813" />
      <circle cx="16" cy="47" r="2" fill="#011813" />
      <path d="M22 33H37" stroke="#011813" stroke-width="3" stroke-linecap="round" />
      <path d="M22 40H37" stroke="#011813" stroke-width="3" stroke-linecap="round" />
      <path d="M22 47H37" stroke="#011813" stroke-width="3" stroke-linecap="round" />
      <defs>
        <filter id="filter0_d_1534_7238" x="-16" y="0" width="86" height="80" filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1534_7238" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1534_7238" result="shape" />
        </filter>
      </defs>
    </svg>

  </div>

  <Teleport to="body">
    <div v-if="open"
      class="lg:uno-hidden uno-fixed uno-inset-0 uno-z-[100] uno-bg-black/60 uno-flex uno-items-start uno-justify-start uno-pt-[176px]">
      <div class="uno-min-w-[294px] uno-max-w-[75%] uno-min-h-[312px] uno-max-h-[600px] uno-bg-white uno-rounded-[4px] uno-p-6 uno-flex uno-flex-col uno-gap-4 uno-relative">
        <div class="uno-absolute uno-right-8px uno-top-8px uno-w-24px uno-h-24px">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            @click="open = false">
            <path d="M7.76172 7.75879L16.247 16.2441" stroke="#4E5255" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M16.2461 7.76514L7.76081 16.2504" stroke="#4E5255" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>

        </div>
        <ul class="uno-space-y-16px uno-max-h-full uno-overflow-y-auto uno-pr-1">
          <li v-for="item in items" :key="`${item.id}-mobile`">
            <a :href="`#${item.id}`"
              :class="['uno-block uno-text-[16px] uno-leading-[150%] uno-font-Outfit uno-font-medium uno-break-words uno-tracking-[0%] uno-text-[#011813]', activeId === item.id ? 'uno-text-[#EA4C89]' : '']"
              @click="onSelect(item.id)">{{ item.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface DirectoryItem {
  id: string
  label: string
}

const props = defineProps<{
  title: string
  items: DirectoryItem[]
  activeId: string
}>()

const emit = defineEmits<{
  select: [id: string]
}>()

const open = ref(false)

const onSelect = (id: string) => {
  emit('select', id)
  open.value = false
}
</script>
