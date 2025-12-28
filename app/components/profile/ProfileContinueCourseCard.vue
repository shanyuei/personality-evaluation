<template>
  <section
    class="uno-col-span-full md:uno-col-span-3 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
    <div class="uno-p-4 md:uno-p-8 uno-space-y-6">
      <span class="uno-text-xs uno-text-[#4E5255] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{
        $t('pages.profile.continueCourse.label') }}</span>
      <h3
        class="uno-text-[#011813] uno-text-xl md:uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">
        {{ $t('pages.profile.continueCourse.title') }}</h3>
      <p class="uno-text-[#323233] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{
        $t('pages.profile.continueCourse.desc') }}</p>
      <div class="uno-flex uno-justify-between uno-items-center">
        <span class="uno-text-[#323233] uno-text-sm uno-font-['Outfit'] uno-font-medium uno-leading-normal">0/10 {{
          $t('pages.profile.lessons') }}</span>
      </div>
      <div class="uno-flex uno-items-end uno-justify-between uno-gap-4">
        <UButton :ui="UButtonTheme" class="uno-w-full md:uno-w-auto">{{ $t('pages.profile.continueCourse.cta') }}
        </UButton>
        <div
          class="uno-w-[64px] uno-h-[64px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[14.55px] uno-p-[14.55px] uno-border-solid uno-border-[#E7E7E8] uno-border-4 uno-rounded-[145.45px] uno-overflow-hidden">
          <span class="uno-text-sm uno-text-[var(--ui-muted-foreground)]">0%</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UButtonTheme from '~/theme/UButton'
</script>
