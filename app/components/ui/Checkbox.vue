<template>
  <div 
    class="uno-flex uno-items-center uno-justify-center uno-cursor-pointer"
    @click="toggle"
  >
    <div v-if="modelValue" class="uno-w-5 uno-h-5">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.50121 11.0001L9.26463 12.9997L14.0669 6.49995" stroke="#009D77" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="2.7" y="2.7" width="14.6" height="14.6" rx="1.3" stroke="#009D77" stroke-width="1.4"/>
      </svg>
    </div>
    <div v-else class="uno-w-5 uno-h-5">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.7" y="2.7" width="14.6" height="14.6" rx="1.3" stroke="#4E5255" stroke-width="1.4"/>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  value: {
    type: [String, Number, Boolean],
    default: undefined
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const toggle = () => {
  const newValue = !props.modelValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}
</script>

<style scoped>
/* Add any additional styles here */
</style>