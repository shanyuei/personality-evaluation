<template>
  <div class=" uno-mx-auto">
    <div v-for="(item, index) in items" :key="item.value" @click="selectItem(item.value)"
      class="uno-flex uno-items-center uno-gap-3 uno-p-3 uno-rounded-lg hover:uno-bg-[#f5f5f5] cursor-pointer">
      <div class="uno-flex-shrink-0">
        <!-- 未选中状态 -->
        <svg v-if="modelValue !== item.value" width="20" height="20" viewBox="0 0 20 20" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.9974 18.3332C14.5998 18.3332 18.3307 14.6022 18.3307 9.99984C18.3307 5.39746 14.5998 1.6665 9.9974 1.6665C5.39502 1.6665 1.66406 5.39746 1.66406 9.99984C1.66406 14.6022 5.39502 18.3332 9.9974 18.3332Z"
            stroke="#4E5255" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <!-- 选中状态 -->
        <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.9974 15.0011C12.7595 15.0011 14.9987 12.762 14.9987 9.99984C14.9987 7.23769 12.7595 4.99854 9.9974 4.99854C7.23525 4.99854 4.99609 7.23769 4.99609 9.99984C4.99609 12.762 7.23525 15.0011 9.9974 15.0011Z"
            fill="#009D77" />
          <path
            d="M9.9974 18.3332C14.5998 18.3332 18.3307 14.6022 18.3307 9.99984C18.3307 5.39746 14.9987 1.6665 9.9974 1.6665C5.39502 1.6665 1.66406 5.39746 1.66406 9.99984C1.66406 14.6022 5.39502 18.3332 9.9974 18.3332Z"
            stroke="#4E5255" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <span class="uno-text-[#011813] uno-font-Outfit uno-text-[14px] uno-font-normal">{{ item.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: any
  items: Array<{
    label: string
    value: any
  }>
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

const selectItem = (value: any) => {
  emit('update:modelValue', value)
}
</script>

<style scoped></style>