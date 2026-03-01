<template>
  <button :class="[
    baseClasses,
    sizeClasses,
    typographyClasses,
    variantStyles[variant],
    getDisabledClasses()
  ]" :style="style" :disabled="disabled" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'outline', 'secondary', 'dark'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
  },
  height: {
    type: String,
    default: '56px'
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
const baseClasses = 'uno-opacity-100 uno-vertical-align-middle uno-font-Outfit uno-font-bold uno-flex uno-items-center uno-justify-center uno-gap-2'

// Size classes
const sizeClasses = 'uno-w-[324px] uno-h-[56px] uno-gap-1 uno-pt-[6px] uno-pr-[6px] uno-pb-[6px] uno-pl-[6px] uno-rounded-[8px] uno-w-full'

// Typography classes
const typographyClasses = 'uno-text-[18px] uno-leading-[150%] uno-tracking-[0%]'

// Variant styles
const variantStyles = {
  primary: 'uno-bg-[#009D77] uno-text-white hover:uno-bg-[#0AA17F] hover:uno-shadow-md hover:uno-transition-colors',
  outline: 'uno-border-2 uno-border-[#009D77] uno-text-[#009D77] hover:uno-bg-[#009D77] hover:uno-text-white hover:uno-transition-colors',
  secondary: 'uno-bg-[#FFFFFF] uno-text-[#333333] hover:uno-bg-[#F5F5F5] hover:uno-shadow-sm hover:uno-transition-colors',
  dark: 'uno-bg-[#191919] uno-text-white hover:uno-bg-black hover:uno-shadow-sm hover:uno-transition-colors'
};

// Get disabled classes based on variant
const getDisabledClasses = () => {
  if (!props.disabled) return ''

  const commonDisabledClasses = 'disabled:uno-opacity-50 disabled:uno-cursor-not-allowed disabled:hover:uno-shadow-none'

  switch (props.variant) {
    case 'primary':
      return `${commonDisabledClasses} disabled:uno-bg-gray-300 disabled:uno-text-gray-500 disabled:hover:uno-bg-gray-300`
    case 'outline':
      return `${commonDisabledClasses} disabled:uno-border-gray-300 disabled:uno-text-gray-500 disabled:hover:uno-bg-transparent disabled:hover:uno-text-gray-500`
    case 'secondary':
      return `${commonDisabledClasses} disabled:uno-bg-gray-100 disabled:uno-text-gray-500 disabled:hover:uno-bg-gray-100`
    case 'dark':
      return `${commonDisabledClasses} disabled:uno-bg-gray-700 disabled:uno-text-gray-300 disabled:hover:uno-bg-gray-700`
    default:
      return commonDisabledClasses
  }
}

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
