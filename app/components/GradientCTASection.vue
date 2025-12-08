<template>
  <div
    class="uno-gradient-cta-section uno-relative uno-w-full uno-flex uno-items-center uno-justify-center uno-my-20">
    <!-- 背景 -->
    <NuxtImg src="/theme/home/cat-bg-h5.png" alt="" aria-hidden="true" width="342px" height="438px"
      class="uno-absolute uno-inset-0 uno--z-10 uno-pointer-events-none uno-object-cover uno-object-center uno-block md:uno-hidden" uno-preload />
    <NuxtImg src="/theme/home/cat-bg-pc.png" alt="" aria-hidden="true" width="1200px" height="384px"
      class="uno-absolute uno-inset-0 uno--z-10 uno-pointer-events-none uno-object-cover uno-object-center uno-hidden md:uno-block" uno-preload />
    <!-- 内容 -->
    <div
      class="uno-relative uno-z-10 uno-flex uno-flex-col uno-items-center uno-rounded-[32px] sm:uno-rounded-[48px] uno-overflow-hidden uno-w-full uno-px-0 sm:uno-px-8 md:uno-px-12 lg:uno-px-24 uno-py-12 sm:uno-py-16 md:uno-py-20">
      <NuxtImg src="/theme/home/cat-bg-box-h5.png" alt="" aria-hidden="true"
        class="uno-absolute uno-inset-0 uno--z-10 uno-pointer-events-none uno-object-cover uno-object-center uno-w-[100%] uno-h-[100%] uno-block md:uno-hidden"
        uno-preload />
      <NuxtImg src="/theme/home/cat-bg-box-pc.png" alt="" aria-hidden="true"
        class="uno-absolute uno-inset-0 uno--z-10 uno-pointer-events-none uno-object-cover uno-object-center uno-w-[100%] uno-h-[100%] uno-hidden md:uno-block"
        uno-preload />
      <h2 class="uno-text-[#0F172A] uno-font-['Outfit'] uno-font-bold uno-text-3xl sm:uno-text-4xl md:uno-text-5xl uno-mb-4 uno-text-center">
        {{ title || $t('home.accuracy.title') }}
      </h2>

      <p class="uno-text-[#4E5255] uno-max-w-[720px] uno-mx-auto uno-mb-8 sm:uno-mb-10 uno-text-center uno-px-4">
        {{ description || $t('home.accuracy.description') }}
      </p>

      <button
        :disabled="buttonDisabled"
        class="uno-w-[160px] sm:uno-w-[186px] uno-h-[48px] sm:uno-h-[56px] uno-inline-flex uno-items-center uno-justify-center uno-rounded-[24px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-[#FFFFFF] uno-font-['Outfit'] uno-font-medium uno-text-[18px] sm:uno-text-[20px] uno-transition uno-duration-200 disabled:uno-opacity-50 disabled:uno-cursor-not-allowed"
        type="button"
        @click="$emit('button-click', $event)"
      >
        {{ buttonText }}
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">

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
