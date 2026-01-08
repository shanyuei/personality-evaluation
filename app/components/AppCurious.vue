<template>
  <div
    class="uno-gradient-cta-section uno-relative uno-w-full uno-flex uno-items-center uno-justify-center uno-mb-20 uno-relative">
    <!-- 内容 -->
    <!-- 背景 -->
    <NuxtImg src="/images/footer/curious-h5-bg.png" alt="" aria-hidden="true" width="342px" height="438px"
      class="uno-absolute  uno--z-10 uno-pointer-events-none uno-object-cover uno-object-center uno-block md:uno-hidden"
      uno-preload />
    <NuxtImg src="/images/footer/curious-pc-bg.png" alt="" aria-hidden="true" width="1300px" height="600px"
      class="uno-absolute  uno--z-10 uno-pointer-events-none uno-object-cover uno-object-center uno-hidden md:uno-block"
      uno-preload />
    <div
      class="page-container uno-relative uno-z-10 uno-flex uno-flex-col uno-items-center uno-justify-center uno-gap-2 uno-rounded-[32px] sm:uno-rounded-[48px] uno-w-full uno-max-w-[342px] md:uno-max-w-[1200px] uno-h-[438px] uno-px-0 sm:uno-px-8 md:uno-px-12 lg:uno-px-24 uno-py-12 sm:uno-py-16 md:uno-py-20">

      <h2
        class="uno-w-80% uno-text-[#0F172A] uno-relative uno-z-10 uno-font-['Outfit'] uno-font-bold uno-text-xl sm:uno-text-2xl md:uno-text-3xl lg:uno-text-4xl xl:uno-text-5xl uno-mb-2 sm:uno-mb-3 md:uno-mb-4 uno-text-center">
        {{ title || $t('pages.home.accuracy.title') }}
      </h2>

      <p
        class="uno-w-80% uno-text-[#4E5255] uno-relative uno-z-10 uno-max-w-[720px] uno-mx-auto uno-mb-4 sm:uno-mb-6 md:uno-mb-8 lg:uno-mb-10 uno-text-center uno-px-4 uno-text-sm sm:uno-text-base md:uno-text-[16px]">
        {{ description || $t('pages.home.accuracy.description') }}
      </p>

      <AppArrowButton
        class="uno-relative uno-z-10 uno-w-70% md:uno-w-190px uno-h-66px uno-justify-start uno-gap-[6px] sm:uno-gap-[8px] md:uno-gap-[12px] uno-py-2 sm:uno-py-2 uno-pr-[3px] sm:uno-pr-[4px] md:uno-pr-[6px] uno-pl-[12px] sm:uno-pl-[16px] md:uno-pl-[16px] uno-text-[12px] sm:uno-text-[14px] md:uno-text-[18px] uno-font-['Outfit'] uno-font-medium"
        :icon-size="44"
        hover-class=""
      >
        <div class="w-[calc(100%-44px)] text-center uno-text-16px">
          Take the Test
        </div>
      </AppArrowButton>
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
