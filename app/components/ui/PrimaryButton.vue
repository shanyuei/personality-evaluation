<template>
  <button
    class="uno-w-full uno-h-[56px] uno-gap-4 uno-opacity-100 uno-pt-[6px] uno-pr-[6px] uno-pb-[6px] uno-pl-[6px] uno-rounded-[8px] uno-font-Outfit uno-font-bold uno-text-[18px] uno-leading-[150%] uno-tracking-[0%] uno-vertical-align-middle uno-bg-[#009D77] uno-text-white hover:uno-bg-[#0AA17F] hover:uno-shadow-md hover:uno-transition-colors"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineEmits(['click']);
</script>
