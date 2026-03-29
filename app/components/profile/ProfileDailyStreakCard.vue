<template>
  <section
    class="uno-col-span-full md:uno-col-span-2 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
    <div class="uno-p-4 md:uno-p-8">
      <span class="uno-text-[#4E5255] uno-font-Outfit uno-font-semibold uno-leading-[1.2] uno-mb-3">{{
        $t('pages.profile.dailyStreak') }}</span>
      <div class="uno-flex uno-items-center uno-gap-2 uno-my-4">
        <div
          class="uno-text-[#011813] uno-text-[64px] md:uno-text-[88px] uno-font-Outfit uno-font-semibold uno-leading-[1.2]">
          0</div>
        <p class="uno-text-[#4E5255] uno-text-sm md:uno-text-base uno-font-Outfit uno-leading-[1.6]">{{
          $t('pages.profile.begin') }}</p>
      </div>
      <div class="uno-flex uno-gap-[15px] uno-mt-2 uno-flex-wrap">
        <span v-for="(d, idx) in weekdays" :key="d.text" :class="[
          'uno-w-[48px] uno-h-[48px] uno-flex uno-justify-center uno-items-center uno-pt-[6px] uno-px-[19.5px] uno-pb-[6px] uno-rounded-[24px] uno-border-[1px] uno-font-Outfit uno-font-medium uno-text-[24px] uno-leading-[150%] uno-tracking-[0%]',
          idx === 2
            ? 'uno-bg-[#DCFBF2] uno-border-[#009D77]'
            : 'uno-bg-[#F0F0F0] uno-border-[#DDDDDD]',
          d.active
            ? 'uno-bg-[var(--ui-primary)] uno-text-white'
            : idx === 2
              ? 'uno-text-[#009D77]'
              : 'uno-text-black'
        ]">{{ d.text }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const weekdays = [
  { text: 'M', active: false },
  { text: 'T', active: false },
  { text: 'W', active: false },
  { text: 'T', active: false },
  { text: 'F', active: false },
  { text: 'S', active: false },
  { text: 'S', active: false }
]
</script>
