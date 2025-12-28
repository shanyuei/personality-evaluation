<template>
  <section
    class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
    <div class="uno-p-4 md:uno-p-8 uno-grid uno-gap-6 md:uno-grid-cols-3">
      <div class="uno-col-span-full md:uno-col-span-1 uno-flex uno-flex-col uno-items-start uno-space-y-4">
        <div class="uno-space-y-2">
          <div class="uno-text-[#4E5255] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2] uno-text-sm">
            {{ $t('pages.profile.aboutTitle') }}</div>
        </div>
        <div class="uno-flex uno-items-center uno-gap-4">
          <div class="uno-w-20 uno-h-20 uno-aspect-square uno-rounded-full uno-overflow-hidden uno-bg-[#F0F0F0]">
            <NuxtImg src="/images/instructors/jane-smith.jpg" alt="avatar"
              class="uno-w-full uno-h-full uno-object-cover" />
          </div>
          <div class="uno-flex uno-flex-col uno-items-start uno-gap-1">
            <div class="uno-text-[#4E5255] uno-text-xs uno-font-['Outfit'] uno-leading-normal">{{
              $t('pages.profile.type') }} 7</div>
            <div class="uno-text-[#011813] uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{
              $t('pages.profile.typeName') }}</div>
          </div>
        </div>
        <div class="uno-h-[1px] uno-w-full uno-bg-[var(--ui-border)]"></div>
        <p class="uno-text-xs uno-text-[var(--ui-muted-foreground)] uno-text-left uno-max-w-md">
          {{ $t('pages.profile.detailedDesc') }}
        </p>
        <div class="uno-w-full md:uno-w-200px">
          <UButton :ui="UButtonTheme">{{
            $t('pages.profile.readMore') }}</UButton>
        </div>
      </div>
      <div class="uno-col-span-full md:uno-col-span-1">
        <h3
          class="uno-text-[#323233] uno-text-base md:uno-text-lg uno-font-['Outfit'] uno-font-semibold uno-leading-normal">
          {{ $t('pages.profile.totalScore') }}</h3>
        <div class="uno-mt-3 uno-space-y-3">
          <div v-for="bar in scoreBars" :key="bar.label" class="uno-flex uno-items-center uno-gap-3">
            <span
              class="uno-w-[28px] uno-h-[28px] uno-flex uno-justify-center uno-items-center uno-flex-col uno-gap-[8.75px] uno-py-[3.5px] uno-px-[11.37px] uno-bg-[#F0F0F0] uno-rounded-[14px] uno-overflow-hidden uno-text-[#4E5255] uno-text-[14px] uno-font-['Outfit'] uno-font-medium uno-leading-normal">{{
                bar.num }}</span>
            <span
              class="uno-w-28 uno-text-xs md:uno-text-sm uno-text-[#4E5255] uno-font-['Outfit'] uno-leading-normal">{{
                bar.label }}</span>
            <div class="uno-flex-1 uno-h-2 uno-rounded-full uno-bg-[var(--ui-input)]">
              <div class="uno-h-2 uno-rounded-full"
                :style="{ width: bar.value + '%', background: bar.label === 'Individualist' ? '#E786DF' : bar.num === 2 ? '#F5CEA4' : bar.num === 5 ? '#B57AF5' : bar.num === 8 ? '#67DCA9' : bar.num === 3 ? '#E97274' : bar.num === 9 ? '#C7EB78' : bar.num === 6 ? '#7E6EE7' : bar.num === 1 ? '#F4DA8F' : '#8FADF6' }">
              </div>
            </div>
            <span class="uno-text-xs md:uno-text-sm uno-text-[var(--ui-muted-foreground)]">{{ bar.value }}%</span>
          </div>
        </div>
      </div>

      <div
        class="uno-col-span-full md:uno-col-span-1 uno-flex uno-items-center uno-justify-center uno-hidden md:uno-block">
        <NuxtImg src="/images/test/5.png" alt="Enneagram" class="uno-w-full md:uno-w-[220px] uno-h-auto" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UButtonTheme from '~/theme/UButton'

defineProps<{
  scoreBars: Array<{
    num: number
    label: string
    value: number
    color: string
  }>
}>()
</script>
