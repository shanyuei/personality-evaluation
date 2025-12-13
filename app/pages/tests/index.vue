<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-[var(--color-green-4)] uno-to-[var(--color-pink-4)] uno-py-10 uno-px-6 md:uno-px-10">
    <div class="uno-w-full md:uno-w-[90%] uno-mx-auto">
      <div class="uno-flex uno-gap-2 uno-flex-wrap uno-justify-center uno-mb-6">
        <UButton
          v-for="(f, i) in filters"
          :key="f.id"
          class="uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-1 uno-py-3 uno-px-[20px] uno-rounded-[100px] uno-font-['Outfit'] uno-font-medium"
          :class="i === 0
            ? 'uno-bg-[var(--ui-primary)] uno-text-white'
            : 'uno-bg-white uno-text-[#4E5255] uno-border uno-border-solid uno-border-[#B1B2B2]'"
          @click="activeFilter = f.id"
        >{{ f.label }}</UButton>
      </div>

      <section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8 uno-grid uno-gap-6 md:uno-grid-cols-3">
          <div class="md:uno-col-span-1">
            <NuxtImg src="/images/blog/2.png" alt="hero" class="uno-w-full uno-h-[180px] md:uno-h-full uno-object-cover uno-rounded-[16px]" />
          </div>
          <div class="md:uno-col-span-2 uno-space-y-4">
            <h1 class="uno-w-[642px] uno-text-[#011813] uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.tests.hero.title') }}</h1>
            <div class="uno-flex uno-items-center uno-justify-between">
              <span class="uno-text-xs uno-bg-[var(--ui-input)] uno-text-[var(--ui-foreground)] uno-rounded-full uno-px-3 uno-py-1">{{ heroBadge }}</span>
              <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.tests.questions', { count: hero.questions }) }}</span>
            </div>
            <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.tests.hero.objective') }}</p>
            <div>
              <NuxtLink to="/test/step">
                <UButton class="uno-h-[40px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white">{{ $t('pages.tests.cta.startNow') }}</UButton>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <section class="uno-mt-6">
        <div class="uno-grid uno-gap-6 md:uno-grid-cols-2">
          <div v-for="card in filteredTests" :key="card.id" class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
            <div class="uno-p-6 uno-space-y-3">
              <div class="uno-flex uno-items-center uno-justify-between">
                <span class="uno-text-xs uno-bg-[var(--ui-input)] uno-text-[var(--ui-foreground)] uno-rounded-full uno-px-3 uno-py-1">{{ card.badge }}</span>
                <span v-if="!card.completed" class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.tests.questions', { count: card.questions }) }}</span>
                <span v-else class="uno-text-xs uno-text-[var(--ui-primary)] uno-flex uno-items-center uno-gap-1">{{ $t('pages.tests.completed') }}</span>
              </div>
              <h3 class="uno-text-lg uno-font-bold uno-text-[var(--ui-foreground)]">{{ card.title }}</h3>
              <p class="uno-text-[var(--ui-muted-foreground)]">{{ card.desc }}</p>
              <div v-if="!card.completed">
                <UButton class="uno-h-[40px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white">{{ $t('pages.tests.cta.readMore') }}</UButton>
              </div>
              <div v-else class="uno-flex uno-gap-3">
                <NuxtLink to="/test/result">
                  <UButton class="uno-h-[40px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white">{{ $t('pages.tests.cta.viewResults') }}</UButton>
                </NuxtLink>
                <NuxtLink to="/test/step">
                  <UButton variant="ghost" class="uno-h-[40px] uno-rounded-[12px] uno-border uno-border-[var(--ui-border)] hover:uno-border-[var(--ui-primary)] hover:uno-text-[var(--ui-primary)]">{{ $t('pages.tests.cta.tryAgain') }}</UButton>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="uno-flex uno-justify-center uno-mt-6">
          <UButton variant="ghost" class="uno-h-[40px] uno-rounded-[12px] uno-border uno-border-[var(--ui-border)] hover:uno-border-[var(--ui-primary)] hover:uno-text-[var(--ui-primary)]">{{ $t('pages.tests.cta.loadMore') }}</UButton>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
locale.value = 'en'

const filters = [
  { id: 'all', label: t('pages.tests.filters.all') },
  { id: 'soft', label: t('pages.tests.filters.soft') },
  { id: 'hard', label: t('pages.tests.filters.hard') }
]
const activeFilter = ref<'all' | 'soft' | 'hard'>('all')

const hero = { title: t('pages.tests.hero.title'), questions: 10 }
const heroBadge = t('pages.tests.badges.hard')

const tests = [
  { id: 1, cat: 'hard', badge: t('pages.tests.badges.hard'), title: t('pages.tests.cards.operations.title'), desc: t('pages.tests.cards.operations.desc'), questions: 10, completed: false },
  { id: 2, cat: 'hard', badge: t('pages.tests.badges.hard'), title: t('pages.tests.cards.business.title'), desc: t('pages.tests.cards.business.desc'), questions: 10, completed: true },
  { id: 3, cat: 'hard', badge: t('pages.tests.badges.hard'), title: t('pages.tests.cards.operations.title'), desc: t('pages.tests.cards.operations.desc'), questions: 10, completed: false },
  { id: 4, cat: 'hard', badge: t('pages.tests.badges.hard'), title: t('pages.tests.cards.operations.title'), desc: t('pages.tests.cards.operations.desc'), questions: 10, completed: false },
  { id: 5, cat: 'hard', badge: t('pages.tests.badges.hard'), title: t('pages.tests.cards.operations.title'), desc: t('pages.tests.cards.operations.desc'), questions: 10, completed: false },
  { id: 6, cat: 'hard', badge: t('pages.tests.badges.hard'), title: t('pages.tests.cards.operations.title'), desc: t('pages.tests.cards.operations.desc'), questions: 10, completed: false }
]

const filteredTests = computed(() => {
  if (activeFilter.value === 'all') return tests
  return tests.filter(i => i.cat === activeFilter.value)
})
</script>

<style scoped></style>
