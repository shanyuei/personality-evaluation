<template>
  <UPopover arrow :ui="{ content: 'w-[calc(100vw)] px-24px' }">
    <button class="w-10 h-10 flex flex-col justify-center items-center gap-1.5" aria-label="Toggle menu">
      <span class="block w-6 h-0.5 bg-[#011813]"></span>
      <span class="block w-6 h-0.5 bg-[#011813]"></span>
      <span class="block w-6 h-0.5 bg-[#011813]"></span>
    </button>
    <template #content>
   
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// 定义组件props
const props = defineProps<{
  items: Array<{
    label: string;
    to: string;
  }>;
}>();
</script>
