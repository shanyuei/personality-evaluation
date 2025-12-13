<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-[var(--color-green-4)] uno-to-[var(--color-pink-4)] uno-py-16 uno-px-6 md:uno-px-10">
    <div class="uno-max-w-[880px] uno-mx-auto">
      <section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-10">
          <div class="uno-flex uno-items-center uno-justify-center uno-mb-6">
            <div class="uno-w-16 uno-h-16 uno-rounded-full uno-bg-[var(--ui-input)] uno-flex uno-items-center uno-justify-center uno-font-['Outfit'] uno-text-[var(--ui-foreground)]">
              {{ $t('pages.testEnd.score', { value: scoreValue, total: scoreTotal }) }}
            </div>
          </div>

          <h1 class="uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-text-center">{{ $t('pages.testEnd.title') }}</h1>
          <p class="uno-text-[var(--ui-muted-foreground)] uno-text-center uno-mt-3">{{ $t('pages.testEnd.description') }}</p>

          <div class="uno-mt-6">
            <p class="uno-font-semibold uno-text-[var(--ui-foreground)]">{{ $t('pages.testEnd.areasTitle') }}</p>
            <div class="uno-space-y-4 uno-mt-3">
              <div v-for="item in areas" :key="item.key" class="uno-flex uno-items-start uno-gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="uno-mt-1">
                  <path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p class="uno-text-[var(--ui-foreground)]"><span class="uno-font-semibold">{{ item.title }}</span> {{ item.body }}</p>
              </div>
            </div>
          </div>

          <div class="uno-flex uno-items-center uno-justify-center uno-gap-3 uno-mt-8">
            <NuxtLink to="/courses" class="uno-inline-block">
              <UButton class="uno-h-[48px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white uno-px-8">{{ $t('pages.testEnd.ctaPrimary') }}</UButton>
            </NuxtLink>
            <NuxtLink to="/tests" class="uno-inline-block">
              <UButton class="uno-h-[48px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white uno-px-8">{{ $t('pages.testEnd.ctaSecondary') }}</UButton>
            </NuxtLink>
          </div>

          <p class="uno-text-sm uno-text-[var(--ui-muted-foreground)] uno-text-center uno-mt-4">{{ $t('pages.testEnd.disclaimer') }}</p>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const scoreValue = Number(route.query.score ?? localStorage.getItem('testScore') ?? 20)
const scoreTotal = Number(route.query.total ?? localStorage.getItem('testTotal') ?? 40)
const { t } = useI18n()
const areas = [
  { key: 'format', title: t('pages.testEnd.areas.format.title'), body: t('pages.testEnd.areas.format.body') },
  { key: 'financial', title: t('pages.testEnd.areas.financial.title'), body: t('pages.testEnd.areas.financial.body') },
  { key: 'ratio', title: t('pages.testEnd.areas.ratio.title'), body: t('pages.testEnd.areas.ratio.body') },
  { key: 'investment', title: t('pages.testEnd.areas.investment.title'), body: t('pages.testEnd.areas.investment.body') }
]
</script>

<style scoped></style>
