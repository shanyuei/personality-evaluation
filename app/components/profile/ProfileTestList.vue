<template>
  <section class="uno-mt-8">
    <h2
      class="uno-text-2xl md:uno-text-[32px] uno-text-[#011813] uno-font-['Outfit'] uno-font-bold uno-leading-normal uno-mt-12 uno-mb-6">
      {{ $t('pages.profile.takeAnother') }}</h2>
    <div class="uno-grid uno-gap-6 md:uno-grid-cols-3">
      <div v-for="card in testCards" :key="card.id"
        class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-4 md:uno-p-8 uno-space-y-3">
          <div class="uno-flex uno-items-center uno-justify-between uno-gap-2">
            <span
              class="uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-2 uno-py-2 uno-px-4 uno-bg-[#F0F0F0] uno-rounded-lg uno-text-sm uno-text-right">{{
                $t('pages.profile.tag.hard') }}</span>
            <span v-if="card.id !== 2"
              class="uno-text-[#4E5255] uno-font-['Outfit'] uno-text-right uno-font-medium uno-leading-normal uno-text-sm">10
              {{ $t('pages.profile.questions') }}</span>
            <span v-if="card.completed"
              class="uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-2 uno-py-2 uno-px-4 uno-bg-[#F0FDF9] uno-border-solid uno-border-[rgba(0,157,119,0.3)] uno-border uno-rounded-lg uno-text-[#009D77] uno-font-['Outfit'] uno-font-medium uno-leading-normal">
              <NuxtImg src="/images/profile/4.png" alt="completed" class="uno-w-[13.75px] uno-h-[12.5px]" />
              {{ $t('pages.profile.completed') }}
            </span>
          </div>
          <h3
            class="uno-text-[#011813] uno-text-lg md:uno-text-xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.24]">
            {{ card.title }}</h3>
          <p class="uno-text-[#323233] uno-text-xs uno-font-['Outfit'] uno-leading-normal uno-min-h-[80px]">{{
            card.desc }}</p>
          <div class="uno-flex uno-gap-3">
            <UButton :ui="UButtonTheme" class="uno-flex-1">{{ $t('pages.profile.readMore') }}</UButton>
            <UButton v-if="card.try" :ui="UButtonTheme" variant="secondary" class="uno-flex-1">{{
              $t('pages.profile.tryAgain') }}</UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UButtonTheme from '~/theme/UButton'

defineProps<{
  testCards: Array<{
    id: number
    title: string
    desc: string
    completed?: boolean
    try?: boolean
  }>
}>()
</script>
