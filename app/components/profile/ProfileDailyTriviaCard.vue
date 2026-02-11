<template>
  <section
    class="uno-col-span-full md:uno-col-span-3 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
    <div class="uno-p-4 md:uno-p-8 uno-space-y-4">
      <span class="uno-text-[#4E5255] uno-font-Outfit uno-font-semibold uno-leading-[1.2]">{{
        $t('pages.profile.dailyTrivia') }}</span>
      <h3
        class="uno-text-[#011813] uno-text-base md:uno-text-2xl uno-font-Outfit uno-font-semibold uno-leading-[1.2] uno-mt-4">
        {{ $t('pages.profile.triviaQuestion') }}</h3>
      <div class="uno-space-y-3">
        <URadioGroup v-model="triviaSelected" :items="radioItems" :ui="URadioTheme" />
        <PrimaryButton width="219px">{{ $t('pages.profile.viewResults') }}</PrimaryButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import PrimaryButton from '~/components/ui/PrimaryButton.vue'
import URadioTheme from '~/theme/URadio'

const triviaOptions = ['Avoidance', 'Guesswork', 'Practice', 'Analytical thinking']
const triviaSelected = ref<number | null>(null)

const radioItems = computed(() => {
  return triviaOptions.map((opt, idx) => ({
    label: opt,
    value: idx
  }))
})
</script>
