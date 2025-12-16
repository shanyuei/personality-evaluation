<template>
  <div class="page-container uno-py-6">
    <main class="uno-py-8 md:uno-py-16 uno-px-0 md:uno-px-10">
      <div class="uno-max-w-full md:uno-max-w-[64%] uno-mx-auto uno-text-center">
        <div class="uno-flex uno-items-center uno-justify-center uno-mb-6">
          <div
            class="uno-w-16 uno-h-16 uno-rounded-full uno-bg-[var(--ui-input)] uno-flex uno-items-center uno-justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect x="5" y="3" width="14" height="18" rx="2" stroke="var(--ui-primary)" stroke-width="2" />
              <line x1="8" y1="8" x2="16" y2="8" stroke="var(--ui-primary)" stroke-width="1.5" />
              <line x1="8" y1="12" x2="16" y2="12" stroke="var(--ui-primary)" stroke-width="1.5" />
              <line x1="8" y1="16" x2="13" y2="16" stroke="var(--ui-primary)" stroke-width="1.5" />
            </svg>
          </div>
        </div>

        <h1
          class="uno-text-[#011813] uno-text-2xl md:uno-text-5xl uno-font-['Outfit'] uno-text-center uno-font-semibold uno-leading-[1.2] uno-mb-4 md:uno-mb-6">
          {{ $t('pages.testStart.title') }}</h1>

        <div class="uno-max-w-[880px] uno-mx-auto uno-space-y-4 uno-text-left">
          <div class="uno-flex uno-items-center uno-gap-3">
            <div class="uno-w-40px">
              <IconsCheck :size="40" class="uno-mt-1" background-color="none" check-color="var(--ui-primary)" />
            </div>
            <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit']">
              <span class="uno-font-semibold">
                {{ $t('pages.testStart.format.title') }}
              </span>
              {{ $t('pages.testStart.format.body') }}
            </p>
          </div>
          <div class="uno-flex uno-items-center uno-gap-3">
            <div class="uno-w-40px">
              <IconsCheck :size="40" class="uno-mt-1" background-color="none" check-color="var(--ui-primary)" />
            </div>
            <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit']">
              <span class="uno-font-semibold">
                {{ $t('pages.testStart.scoring.title') }}
              </span>
              {{ $t('pages.testStart.scoring.body') }}
            </p>
          </div>
        </div>

        <div class="uno-flex uno-items-center uno-justify-center uno-mt-8">
          <NuxtLink to="/test/step" class="uno-block uno-w-full uno-max-w-[880px] uno-mx-auto">
            <UButton
              :ui="UButtonTheme"
>
              {{ $t('pages.testStart.cta.getStarted') }}</UButton>
          </NuxtLink>
        </div>

        <p
          class="uno-w-full uno-max-w-[880px] uno-text-[#4E5255] uno-text-xs uno-font-['Outfit'] uno-text-center uno-leading-normal uno-mx-0 uno-mt-4">
          {{ $t('pages.testStart.disclaimer') }}</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import UButtonTheme from '~/theme/UButton'
</script>

<style scoped></style>
