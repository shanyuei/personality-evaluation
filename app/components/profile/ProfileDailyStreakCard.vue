<template>
  <section
    class="uno-col-span-full md:uno-col-span-2 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
    <div class="uno-p-4 md:uno-p-8">
      <span class="uno-text-[#4E5255] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2] uno-mb-3">{{
        $t('pages.profile.dailyStreak') }}</span>
      <div class="uno-flex uno-items-center uno-gap-2 uno-my-4">
        <div
          class="uno-text-[#011813] uno-text-[64px] md:uno-text-[88px] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">
          0</div>
        <p class="uno-text-[#4E5255] uno-text-sm md:uno-text-base uno-font-['Outfit'] uno-leading-[1.6]">{{
          $t('pages.profile.begin') }}</p>
      </div>
      <div class="uno-flex uno-gap-2 uno-mt-2 uno-flex-wrap">
        <span v-for="(d, idx) in weekdays" :key="d.text" :class="[
          idx === 2
            ? 'uno-w-[48px] uno-h-[48px] uno-flex uno-justify-center uno-items-end uno-pb-0 uno-px-[19.5px] uno-bg-[#DCFBF2] uno-border-solid uno-border-[#009D77] uno-border-[4.2px] uno-rounded-[24px] uno-overflow-hidden'
            : 'uno-w-[46px] uno-h-[46px] uno-flex uno-justify-center uno-items-end uno-pb-0 uno-px-[19.5px] uno-bg-[#F0F0F0] uno-border-solid uno-border-[#DDDDDD] uno-border-[4.2px] uno-rounded-[24px] uno-overflow-hidden',
          d.active
            ? 'uno-bg-[var(--ui-primary)] uno-text-white uno-font-bold'
            : idx === 2
              ? 'uno-text-[#009D77]'
              : 'uno-bg-[#F0F0F0] uno-text-black uno-font-bold'
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
