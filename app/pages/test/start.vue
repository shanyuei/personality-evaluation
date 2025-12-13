<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-[var(--color-green-4)] uno-to-[var(--color-pink-4)] uno-py-16 uno-px-6 md:uno-px-10">
    <div class="uno-max-w-[80%] uno-mx-auto uno-text-center">
      <div class="uno-flex uno-items-center uno-justify-center uno-mb-6">
        <div class="uno-w-16 uno-h-16 uno-rounded-full uno-bg-[var(--ui-input)] uno-flex uno-items-center uno-justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="5" y="3" width="14" height="18" rx="2" stroke="var(--ui-primary)" stroke-width="2" />
            <line x1="8" y1="8" x2="16" y2="8" stroke="var(--ui-primary)" stroke-width="1.5" />
            <line x1="8" y1="12" x2="16" y2="12" stroke="var(--ui-primary)" stroke-width="1.5" />
            <line x1="8" y1="16" x2="13" y2="16" stroke="var(--ui-primary)" stroke-width="1.5" />
          </svg>
        </div>
      </div>

      <h1 class="uno-text-3xl md:uno-text-4xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-6">{{ $t('pages.testStart.title') }}</h1>

      <div class="uno-max-w-[880px] uno-mx-auto uno-space-y-4 uno-text-left">
        <div class="uno-flex uno-items-start uno-gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="uno-mt-1">
            <path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="uno-text-[var(--ui-foreground)]">
            <span class="uno-font-semibold">{{ $t('pages.testStart.format.title') }}</span>
            {{ $t('pages.testStart.format.body') }}
          </p>
        </div>
        <div class="uno-flex uno-items-start uno-gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="uno-mt-1">
            <path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="uno-text-[var(--ui-foreground)]">
            <span class="uno-font-semibold">{{ $t('pages.testStart.scoring.title') }}</span>
            {{ $t('pages.testStart.scoring.body') }}
          </p>
        </div>
      </div>

      <div class="uno-flex uno-items-center uno-justify-center uno-mt-8">
        <NuxtLink to="/test/step" class="uno-inline-block">
          <UButton class="uno-h-[48px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white uno-text-lg uno-font-['Outfit'] uno-font-bold uno-leading-normal uno-px-8">{{ $t('pages.testStart.cta.getStarted') }}</UButton>
        </NuxtLink>
      </div>

      <p class="uno-text-sm uno-text-[var(--ui-muted-foreground)] uno-mt-4">{{ $t('pages.testStart.disclaimer') }}</p>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
