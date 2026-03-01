<template>
  <button :class="[
    baseClasses,
    sizeClasses,
    typographyClasses,
    colorClasses,
    hoverClasses,
    disabledClasses
  ]" :style="style" :disabled="disabled" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
  },
  height: {
    type: String,
  },
  fontSize: {
    type: String,
  },
  fontWeight: {
    type: String,
  }
});

defineEmits(['click']);

// Base classes
const baseClasses = 'uno-opacity-100 uno-vertical-align-middle uno-font-Outfit uno-font-bold'

// Size classes
const sizeClasses = `uno-w-full uno-h-56px uno-gap-1 uno-pt-[6px] uno-pr-[6px] uno-pb-[6px] uno-pl-[6px] uno-rounded-[8px]`

// Typography classes
const typographyClasses = 'uno-text-[18px] uno-leading-[150%] uno-tracking-[0%]'

// Color classes
const colorClasses = 'uno-border-2 uno-border-[#009D77] uno-text-[#009D77]'

// Hover classes
const hoverClasses = 'hover:uno-bg-[#009D77] hover:uno-text-white hover:uno-transition-colors'

// Disabled classes
const disabledClasses = 'disabled:uno-opacity-50 disabled:uno-cursor-not-allowed disabled:uno-border-[#009D77] disabled:uno-text-[#009D77] disabled:hover:uno-bg-transparent disabled:hover:uno-text-[#009D77] disabled:hover:uno-shadow-none'


const style = computed(() => {
  const temp = {}
  if (props.width) {
    temp.width = props.width
  }
  if (props.height) {
    temp.height = props.height
  }
  if (props.fontSize) {
    temp.fontSize = props.fontSize
  }
  if (props.fontWeight) {
    temp.fontWeight = props.fontWeight
  }
  return temp
})
</script>
