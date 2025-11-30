<template>
  <div class="gradient-cta-section relative w-[1344px] h-[528px] p-72px flex items-center justify-center">
    <!-- 背景 -->
    <NuxtImg src="/theme/home/cat-bg.png" alt="" aria-hidden="true"
      class="absolute inset-0 -z-10 pointer-events-none object-cover w-[100%] h-[100%]" width="100%" height="100%"
      preload />
    <!-- 内容 -->
    <div
      class="relative z-10 relative py-56px flex flex-col items-center rounded-[48px] overflow-hidden w-1200px h-384px px-196px">
      <NuxtImg src="/theme/home/cat-bg-2.png" alt="" aria-hidden="true"
        class="absolute inset-0 -z-10 pointer-events-none object-cover w-[100%] h-[100%]" width="100%" height="100%"
        preload />
      <h2 class="text-[#0F172A] font-['Outfit'] font-bold text-3xl md:text-5xl mb-4 text-center">
        {{ title || $t('home.accuracy.title') }}
      </h2>

      <p class="text-[#4E5255] max-w-[720px] mx-auto mb-10 text-center">
        {{ description || $t('home.accuracy.description') }}
      </p>

      <CTAButton :text="buttonText" :disabled="buttonDisabled" btn-class="w-[186px] h-[56px] pl-[20px!important] pr-[6px!important]" bg-color="#011813" hover-bg-color="#02221D" active-bg-color="#02221D" text-class="text-[#FFFFFF] font-['Outfit'] font-medium" :icon-size-px="44"  @click="$emit('button-click', $event)" />
    </div>

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
.gradient-cta-section {}
</style>
