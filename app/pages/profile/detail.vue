<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-[var(--color-green-4)] uno-to-[var(--color-pink-4)] uno-py-10 uno-px-6 md:uno-px-10">
    <div class="uno-w-full md:uno-w-[90%] uno-mx-auto">
      <h1 class="uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-6">{{ $t('pages.testDetail.welcome', { name }) }}</h1>

      <section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8 uno-grid uno-gap-6 md:uno-grid-cols-3">
          <div class="uno-flex uno-gap-6">
            <div class="uno-flex uno-flex-col uno-gap-2 uno-items-center">
              <div class="uno-w-16 uno-h-16 uno-aspect-square uno-rounded-full uno-overflow-hidden uno-border uno-border-[var(--ui-border)]">
                <NuxtImg src="/images/instructors/jane-smith.jpg" alt="avatar" class="uno-w-full uno-h-full uno-object-cover" />
              </div>
              <span class="uno-text-xs uno-bg-[var(--ui-input)] uno-text-[var(--ui-foreground)] uno-rounded-full uno-px-3 uno-py-1">{{ $t('pages.testDetail.type') }} 7</span>
            </div>
            <div class="uno-flex-1 uno-space-y-3">
              <div class="uno-flex uno-items-center uno-gap-2">
                <span class="uno-text-base md:uno-text-lg uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.testDetail.allAbout') }}</span>
                <span class="uno-text-[var(--ui-primary)] uno-font-semibold">{{ $t('pages.testDetail.typeName') }}</span>
              </div>
              <p class="uno-text-sm md:uno-text-base uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.testDetail.aboutDesc') }}</p>
              <div>
                <UButton class="uno-h-[40px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white">{{ $t('pages.testDetail.readMore') }}</UButton>
              </div>
            </div>
          </div>

          <div>
            <h3 class="uno-text-lg uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.testDetail.totalScore') }}</h3>
            <div class="uno-mt-3 uno-space-y-3">
              <div v-for="bar in scoreBars" :key="bar.label" class="uno-flex uno-items-center uno-gap-3">
                <span class="uno-w-7 uno-h-7 uno-rounded-full uno-flex uno-items-center uno-justify-center uno-text-xs" :style="{ background: bar.color, color: '#fff' }">{{ bar.num }}</span>
                <span class="uno-w-28 uno-text-sm uno-text-[var(--ui-foreground)]">{{ bar.label }}</span>
                <div class="uno-flex-1 uno-h-2 uno-rounded-full uno-bg-[var(--ui-input)]">
                  <div class="uno-h-2 uno-rounded-full" :style="{ width: bar.value + '%', background: bar.color }"></div>
                </div>
                <span class="uno-text-sm uno-text-[var(--ui-muted-foreground)]">{{ bar.value }}%</span>
              </div>
            </div>
          </div>

          <div class="uno-flex uno-items-center uno-justify-center">
            <svg width="220" height="220" viewBox="0 0 220 220">
              <circle cx="110" cy="110" r="90" fill="none" stroke="var(--ui-border)" stroke-width="1" />
              <circle cx="110" cy="110" r="60" fill="none" stroke="var(--ui-border)" stroke-width="1" />
              <circle cx="110" cy="110" r="30" fill="none" stroke="var(--ui-border)" stroke-width="1" />
              <line v-for="edge in enneaLines" :key="edge.join('-')" :x1="enneaPos[edge[0]].x" :y1="enneaPos[edge[0]].y" :x2="enneaPos[edge[1]].x" :y2="enneaPos[edge[1]].y" stroke="var(--ui-foreground)" />
              <g v-for="n in enneaNodes" :key="n.id">
                <circle :cx="enneaPos[n.id].x" :cy="enneaPos[n.id].y" r="14" :fill="n.fill" />
                <text :x="enneaPos[n.id].x" :y="enneaPos[n.id].y + 4" text-anchor="middle" font-size="10" fill="#fff">{{ n.id }}</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      <div class="uno-mt-4 uno-flex uno-gap-2 uno-flex-wrap uno-justify-center">
        <UButton
          v-for="tab in tabs"
          :key="tab.id"
          class="uno-rounded-full uno-h-[40px] uno-px-4 uno-flex uno-items-center uno-justify-center"
          @click="activeTab = tab.id"
          :class="activeTab === tab.id
            ? 'uno-bg-[var(--ui-primary)] uno-text-white hover:uno-bg-[var(--color-green-2)]'
            : 'uno-bg-white uno-text-[var(--ui-muted-foreground)] uno-border uno-border-[var(--ui-border)] hover:uno-bg-[var(--color-green-2)] hover:uno-text-white'"
        >{{ tab.label }}</UButton>
      </div>

      <section class="uno-mt-6 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8">
          <h2 class="uno-text-xl md:uno-text-2xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-4">{{ $t('pages.testDetail.core.title') }}</h2>
          <div class="uno-grid uno-gap-6 md:uno-grid-cols-2">
            <div v-for="i in 6" :key="i" class="uno-space-y-2">
              <h3 class="uno-text-base uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.testDetail.core.cardTitle') }}</h3>
              <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.testDetail.core.cardDesc') }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="uno-mt-6 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8 uno-space-y-6">
          <h2 class="uno-text-xl md:uno-text-2xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)]">{{ $t('pages.personalityDetail.subtypes.title') }}</h2>
          <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.personalityDetail.subtypes.subtitle') }}</p>
          <div class="uno-grid uno-gap-6 md:uno-grid-cols-3">
            <div class="uno-space-y-2">
              <h3 class="uno-text-base uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.personalityDetail.subtypes.sp') }}</h3>
              <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.personalityDetail.subtypes.spDesc') }}</p>
            </div>
            <div class="uno-space-y-2">
              <h3 class="uno-text-base uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.personalityDetail.subtypes.social') }}</h3>
              <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.personalityDetail.subtypes.socialDesc') }}</p>
            </div>
            <div class="uno-space-y-2">
              <h3 class="uno-text-base uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.personalityDetail.subtypes.oneToOne') }}</h3>
              <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.personalityDetail.subtypes.oneToOneDesc') }}</p>
            </div>
          </div>
          <div class="uno-flex uno-justify-center">
            <UButton class="uno-h-[40px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white">{{ $t('pages.personalityDetail.subtypes.cta') }}</UButton>
          </div>
        </div>
      </section>

      <section class="uno-mt-6 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8 uno-space-y-4">
          <h2 class="uno-text-xl md:uno-text-2xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)]">{{ $t('pages.personalityDetail.conclusion.title') }}</h2>
          <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.personalityDetail.conclusion.p1') }}</p>
          <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.personalityDetail.conclusion.p2') }}</p>
          <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.personalityDetail.conclusion.p3') }}</p>
        </div>
      </section>

      <section class="uno-mt-6 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8 uno-space-y-6">
          <h2 class="uno-text-xl md:uno-text-2xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)]">{{ $t('pages.personalityDetail.growth.title') }}</h2>

          <div class="uno-grid uno-gap-6 md:uno-grid-cols-3">
            <div class="uno-space-y-3">
              <div class="uno-w-10 uno-h-10 uno-rounded-full uno-border uno-border-[var(--ui-border)] uno-flex uno-items-center uno-justify-center uno-text-[var(--ui-foreground)] uno-font-semibold">1</div>
              <h3 class="uno-text-base uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.personalityDetail.growth.items.i1.title') }}</h3>
              <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.personalityDetail.growth.items.i1.body') }}</p>
              <NuxtLink to="/courses" class="uno-inline-block">
                <UButton variant="ghost" class="uno-h-[40px] uno-rounded-[12px] uno-border uno-border-[var(--ui-primary)] uno-text-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] hover:uno-text-white">{{ $t('pages.personalityDetail.growth.ctaCourses') }}</UButton>
              </NuxtLink>
            </div>

            <div class="uno-space-y-3">
              <div class="uno-w-10 uno-h-10 uno-rounded-full uno-border uno-border-[var(--ui-border)] uno-flex uno-items-center uno-justify-center uno-text-[var(--ui-foreground)] uno-font-semibold">2</div>
              <h3 class="uno-text-base uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.personalityDetail.growth.items.i2.title') }}</h3>
              <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.personalityDetail.growth.items.i2.body') }}</p>
            </div>

            <div class="uno-space-y-3">
              <div class="uno-w-10 uno-h-10 uno-rounded-full uno-border uno-border-[var(--ui-border)] uno-flex uno-items-center uno-justify-center uno-text-[var(--ui-foreground)] uno-font-semibold">3</div>
              <h3 class="uno-text-base uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.personalityDetail.growth.items.i3.title') }}</h3>
              <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.personalityDetail.growth.items.i3.body') }}</p>
              <NuxtLink to="/test" class="uno-inline-block">
                <UButton variant="ghost" class="uno-h-[40px] uno-rounded-[12px] uno-border uno-border-[var(--ui-primary)] uno-text-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] hover:uno-text-white">{{ $t('pages.personalityDetail.growth.ctaTests') }}</UButton>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        :title="$t('pages.personalityDetail.faq.title')"
        :description="$t('pages.personalityDetail.faq.description')"
        :items="faqItems"
        :accordion="true"
        :default-expanded-index="0"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
const name = 'liyangzhi'
const { t } = useI18n()

const tabs = [
  { id: 'core', label: useI18n().t('pages.testDetail.tab.core') },
  { id: 'motivation', label: useI18n().t('pages.testDetail.tab.motivation') },
  { id: 'relationships', label: useI18n().t('pages.testDetail.tab.relationships') },
  { id: 'work', label: useI18n().t('pages.testDetail.tab.work') },
  { id: 'stress', label: useI18n().t('pages.testDetail.tab.stress') },
  { id: 'compatibility', label: useI18n().t('pages.testDetail.tab.compatibility') }
]
const activeTab = ref('core')

const scoreBars = [
  { num: 7, label: 'Enthusiast', value: 93, color: 'var(--ui-primary)' },
  { num: 4, label: 'Individualist', value: 88, color: 'var(--color-pink-1)' },
  { num: 2, label: 'Helper', value: 86, color: 'var(--color-green-2)' },
  { num: 5, label: 'Investigator', value: 86, color: 'var(--ui-primary)' },
  { num: 8, label: 'Challenger', value: 86, color: 'var(--color-green-2)' },
  { num: 3, label: 'Achiever', value: 84, color: 'var(--ui-primary)' },
  { num: 6, label: 'Loyalist', value: 83, color: 'var(--color-green-2)' },
  { num: 9, label: 'Peacemaker', value: 66, color: 'var(--ui-primary)' },
  { num: 1, label: 'Reformer', value: 52, color: 'var(--color-pink-1)' }
]

const enneaNodes = Array.from({ length: 9 }, (_, i) => {
  const id = i + 1
  const fill = id === 7 ? 'var(--color-green-2)' : id === 4 ? 'var(--color-pink-1)' : 'var(--ui-primary)'
  return { id, fill }
})

const enneaPos = computed(() => {
  const map: Record<number, { x: number; y: number }> = {}
  const cx = 110, cy = 110, r = 80
  enneaNodes.forEach((n, idx) => {
    const angleDeg = -90 + idx * (360 / 9)
    const rad = angleDeg * Math.PI / 180
    map[n.id] = { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
  })
  return map
})

const enneaLines: Array<[number, number]> = [
  [7, 2],
  [7, 4],
  [7, 6]
]

const faqItems = [
  { question: t('pages.personalityDetail.faq.q1'), answer: t('pages.personalityDetail.faq.a1') },
  { question: t('pages.personalityDetail.faq.q2'), answer: t('pages.personalityDetail.faq.a2') },
  { question: t('pages.personalityDetail.faq.q3'), answer: t('pages.personalityDetail.faq.a3') },
  { question: t('pages.personalityDetail.faq.q4'), answer: t('pages.personalityDetail.faq.a4') },
  { question: t('pages.personalityDetail.faq.q5'), answer: t('pages.personalityDetail.faq.a5') }
]
</script>

<style scoped></style>
