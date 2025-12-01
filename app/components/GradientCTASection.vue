<template>
  <div
    class="gradient-cta-section relative w-full flex items-center justify-center mx-auto max-w-[342px] sm:max-w-[680px] md:max-w-[960px] lg:max-w-[1200px] min-h-[280px] sm:min-h-[320px] md:min-h-[528px] px-0 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20">
    <!-- 背景 -->
    <NuxtPicture
      :sources="[
        { srcset: '/theme/home/cat-bg-h5.png', media: '(max-width: 639px)' },
        { srcset: '/theme/home/cat-bg-pc.png', media: '(min-width: 640px)' }
      ]"
      src="/theme/home/cat-bg-pc.png"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 -z-10 pointer-events-none object-cover top-15px"
      preload
    />
    <!-- 内容 -->
    <div
      class="relative z-10 flex flex-col items-center rounded-[32px] sm:rounded-[48px] overflow-hidden w-full max-w-[342px] sm:max-w-[680px] md:max-w-[960px] lg:max-w-[1200px] h-auto min-h-[280px] sm:min-h-[320px] md:min-h-[384px] px-0 sm:px-8 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20">
      <NuxtPicture
        :sources="[
          { srcset: '/theme/home/cat-bg-box-h5.png', media: '(max-width: 639px)' },
          { srcset: '/theme/home/cat-bg-box-pc.png', media: '(min-width: 640px)' }
        ]"
        src="/theme/home/cat-bg-box-pc.png"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 -z-10 pointer-events-none object-cover w-[100%] h-[100%]"
        preload
      />
      <h2 class="text-[#0F172A] font-['Outfit'] font-bold text-3xl sm:text-4xl md:text-5xl mb-4 text-center">
        {{ title || $t('home.accuracy.title') }}
      </h2>

      <p class="text-[#4E5255] max-w-[720px] mx-auto mb-8 sm:mb-10 text-center px-4">
        {{ description || $t('home.accuracy.description') }}
      </p>

      <CTAButton :text="buttonText" :disabled="buttonDisabled"
        btn-class="w-[160px] h-[48px] sm:w-[186px] sm:h-[56px] pl-[20px!important] pr-[6px!important]"
        bg-color="#011813" hover-bg-color="#02221D" active-bg-color="#02221D"
        text-class="text-[#FFFFFF] font-['Outfit'] font-medium text-[18px] sm:text-[20px]" :icon-size-px="40"
        @click="$emit('button-click', $event)" />
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
  title: '',
  description: '',
  buttonText: '',
  buttonDisabled: false
});

defineEmits<{
  (e: 'button-click', event: MouseEvent): void;
}>();
</script>

<style scoped>
.gradient-cta-section {}
</style>
