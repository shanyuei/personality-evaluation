<template>
  <button
    :class="[
      'uno-w-[324px] uno-h-[56px] uno-gap-1 uno-opacity-100 uno-pt-[6px] uno-pr-[6px] uno-pb-[6px] uno-pl-[20px] uno-rounded-[8px] uno-font-[Outfit] uno-font-bold uno-text-[18px] uno-leading-[150%] uno-tracking-[0%] uno-vertical-align-middle uno-w-full',
      variantStyles[variant]
    ]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'outline', 'secondary'].includes(value)
  }
});

defineEmits(['click']);

const variantStyles = {
  primary: 'uno-bg-[#009D77] uno-text-white hover:uno-bg-[#0AA17F] hover:uno-shadow-md hover:uno-transition-colors',
  outline: 'uno-border-2 uno-border-[#009D77] uno-text-[#009D77] hover:uno-bg-[#009D77] hover:uno-text-white hover:uno-transition-colors',
  secondary: 'uno-bg-[#FFFFFF] uno-text-[#333333] hover:uno-bg-[#F5F5F5] hover:uno-shadow-sm hover:uno-transition-colors'
};
</script>
