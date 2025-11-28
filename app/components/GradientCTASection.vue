<template>
  <div class="gradient-cta-section p-12 rounded-xl text-center relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 -z-10"></div>
    
    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
      {{ title || $t('home.accuracy.title') }}
    </h2>
    
    <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
      {{ description || $t('home.accuracy.description') }}
    </p>
    
    <CTAButton
      :text="buttonText"
      :disabled="buttonDisabled"
      @click="$emit('button-click', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import CTAButton from './CTAButton.vue';

interface Props {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonDisabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  buttonDisabled: false
});

defineEmits<{
  (e: 'button-click', event: MouseEvent): void;
}>();
</script>

<style scoped>
.gradient-cta-section {
  border-radius: 12px;
  position: relative;
  z-index: 1;
}

/* 确保渐变背景能够正确显示 */
.gradient-cta-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(240, 244, 255, 0.8) 0%, rgba(245, 235, 255, 0.8) 100%);
  border-radius: 12px;
  -z-index: -1;
}
</style>