<template>
  <div class="page-container uno-py-6">
    <main class="uno-py-8 md:uno-py-16 uno-px-0 md:uno-px-10">
    <div class="uno-max-w-full md:uno-max-w-[880px] uno-mx-auto">
      <section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-10">
          <div class="uno-flex uno-items-center uno-justify-center uno-mb-6">
            <div class="uno-w-20 uno-h-20 uno-rounded-full uno-bg-[var(--ui-input)] uno-flex uno-items-center uno-justify-center uno-font-['Outfit'] uno-text-[var(--ui-foreground)] uno-text-sm md:uno-text-base text-center">
              {{ $t('pages.testEnd.score', { value: scoreValue, total: scoreTotal }) }}
            </div>
          </div>

          <h1 class="uno-self-stretch uno-text-[#011813] uno-text-2xl md:uno-text-[32px] uno-font-['Outfit'] uno-text-center uno-font-semibold uno-leading-[1.2] style-1">{{ $t('pages.testEnd.title') }}</h1>
          <p class="uno-w-full uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal uno-mx-auto uno-mt-4">{{ $t('pages.testEnd.description') }}</p>

          <div class="uno-mt-6 uno-w-full uno-mx-auto uno-p-2 md:uno-p-0">
            <p class="uno-text-[#011813] uno-text-base md:uno-text-lg uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.testEnd.areasTitle') }}</p>
            <div class="uno-space-y-4 uno-mt-3 uno-text-[#4E5255] uno-font-['Outfit']">
              <div v-for="item in areas" :key="item.key" class="uno-flex uno-items-center uno-gap-3">
                <!-- pc 展示 -->
                <div class="uno-hidden md:uno-block"><IconsCheck :size="30" background-color="none" check-color="var(--ui-primary)" class="uno-mt-1" /></div>
                <!-- 移动端展示 -->
                <div class="uno-block md:uno-hidden"><IconsCheck :size="24" background-color="none" check-color="var(--ui-primary)" class="uno-mt-1" /></div>
                <p class="uno-text-sm"><span class="uno-font-semibold">{{ item.title }}</span> {{ item.body }}</p>
              </div>
            </div>
          </div>

          <div class="uno-flex uno-flex-col md:uno-flex-row uno-items-center uno-justify-center uno-gap-3 uno-mt-6 md:uno-mt-8">
            <NuxtLink to="/courses" class="uno-inline-block uno-w-full md:uno-w-auto">
              <UButton :ui="UButtonTheme">{{ $t('pages.testEnd.ctaPrimary') }}</UButton>
            </NuxtLink>
            <NuxtLink to="/tests" class="uno-inline-block uno-w-full md:uno-w-auto">
              <UButton :ui="UButtonThemeDark" >{{ $t('pages.testEnd.ctaSecondary') }}</UButton>
            </NuxtLink>
          </div>

          <p class="uno-w-full uno-text-[#4E5255] uno-text-xs uno-font-['Outfit'] uno-text-center uno-leading-normal uno-mt-4 uno-mx-auto">{{ $t('pages.testEnd.disclaimer') }}</p>
        </div>
      </section>
    </div>
  </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconsCheck from '~/components/icons/Check.vue'
import UButtonTheme, {UButtonThemeDark} from '~/theme/UButton'
const route = useRoute()
const scoreValue = ref(Number(route.query.score ?? 20))
const scoreTotal = ref(Number(route.query.total ?? 40))
if (import.meta.client) {
  const s = localStorage.getItem('testScore')
  const tt = localStorage.getItem('testTotal')
  if (!route.query.score && s) scoreValue.value = Number(s)
  if (!route.query.total && tt) scoreTotal.value = Number(tt)
}
const { t } = useI18n()
const areas = [
  { key: 'format', title: t('pages.testEnd.areas.format.title'), body: t('pages.testEnd.areas.format.body') },
  { key: 'financial', title: t('pages.testEnd.areas.financial.title'), body: t('pages.testEnd.areas.financial.body') },
  { key: 'ratio', title: t('pages.testEnd.areas.ratio.title'), body: t('pages.testEnd.areas.ratio.body') },
  { key: 'investment', title: t('pages.testEnd.areas.investment.title'), body: t('pages.testEnd.areas.investment.body') }
]
</script>

<style scoped></style>
