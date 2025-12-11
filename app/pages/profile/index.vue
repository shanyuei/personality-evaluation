<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-[var(--color-green-4)] uno-to-[var(--color-pink-4)] uno-py-10 uno-px-6 md:uno-px-10">
    <div class="uno-w-full md:uno-w-[90%] uno-mx-auto">
      <h1 class="uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-6">{{ $t('pages.profile.welcome', { name }) }}</h1>

      <section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8 uno-grid uno-gap-6 md:uno-grid-cols-3">
          <div class="uno-flex uno-gap-6">
            <div class="uno-flex uno-flex-col uno-gap-2 uno-items-center">
              <div class="uno-w-16 uno-h-16 uno-aspect-square uno-rounded-full uno-overflow-hidden uno-border uno-border-[var(--ui-border)]">
                <NuxtImg src="/images/instructors/jane-smith.jpg" alt="avatar" class="uno-w-full uno-h-full uno-object-cover" />
              </div>
              <span class="uno-text-xs uno-bg-[var(--ui-input)] uno-text-[var(--ui-foreground)] uno-rounded-full uno-px-3 uno-py-1">{{ $t('pages.profile.type') }} 7</span>
            </div>
            <div class="uno-flex-1 uno-space-y-3">
              <div class="uno-flex uno-items-center uno-gap-2">
                <span class="uno-text-base md:uno-text-lg uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.profile.aboutTitle') }}</span>
                <span class="uno-text-[var(--ui-primary)] uno-font-semibold">{{ $t('pages.profile.typeName') }}</span>
              </div>
              <p class="uno-text-sm md:uno-text-base uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.profile.aboutDesc') }}</p>
              <div>
                <UButton class="uno-h-[40px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white">{{ $t('pages.profile.readMore') }}</UButton>
              </div>
            </div>
          </div>
          <div>
            <h3 class="uno-text-lg uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.profile.totalScore') }}</h3>
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

      <div class="uno-grid uno-gap-6 md:uno-grid-cols-2 uno-mt-6">
        <section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
          <div class="uno-p-6 md:uno-p-8 uno-space-y-4">
            <span class="uno-text-sm uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.profile.dailyTrivia') }}</span>
            <h3 class="uno-text-lg md:uno-text-xl uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.profile.triviaQuestion') }}</h3>
            <div class="uno-space-y-2">
            <label v-for="(opt, idx) in triviaOptions" :key="idx" class="uno-flex uno-items-center uno-gap-3">
              <input v-model="triviaSelected" :value="idx" type="radio">
              <span class="uno-text-[var(--ui-foreground)]">{{ opt }}</span>
            </label>
            </div>
            <div>
              <UButton class="uno-h-[40px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white">{{ $t('pages.profile.viewResults') }}</UButton>
            </div>
          </div>
        </section>

        <section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
          <div class="uno-p-6 md:uno-p-8 uno-space-y-3">
            <span class="uno-text-sm uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.profile.dailyStreak') }}</span>
            <div class="uno-text-3xl uno-font-extrabold uno-text-[var(--ui-foreground)]">0</div>
            <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.profile.begin') }}</p>
            <div class="uno-flex uno-gap-2 uno-mt-2">
              <span v-for="d in weekdays" :key="d.text" class="uno-w-8 uno-h-8 uno-rounded-full uno-flex uno-items-center uno-justify-center" :class="d.active ? 'uno-bg-[var(--ui-primary)] uno-text-white' : 'uno-bg-[var(--ui-input)] uno-text-[var(--ui-foreground)]'">{{ d.text }}</span>
            </div>
          </div>
        </section>
      </div>

      <div class="uno-grid uno-gap-6 md:uno-grid-cols-2 uno-mt-6">
        <section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
          <div class="uno-p-6 md:uno-p-8 uno-space-y-3">
            <span class="uno-text-sm uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.profile.continueCourse.label') }}</span>
            <h3 class="uno-text-lg md:uno-text-xl uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.profile.continueCourse.title') }}</h3>
            <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.profile.continueCourse.desc') }}</p>
            <div class="uno-flex uno-items-center uno-justify-between">
              <span class="uno-text-sm uno-text-[var(--ui-muted-foreground)]">0/10 {{ $t('pages.profile.lessons') }}</span>
              <span class="uno-text-sm uno-text-[var(--ui-muted-foreground)]">0%</span>
            </div>
            <UButton class="uno-h-[40px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white">{{ $t('pages.profile.continueCourse.cta') }}</UButton>
          </div>
        </section>
        <section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
          <div class="uno-p-6 md:uno-p-8 uno-grid uno-gap-4 md:uno-grid-cols-2">
            <div class="uno-bg-[var(--ui-input)] uno-rounded-[16px] uno-p-4">
              <div class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.profile.progress.tests') }}</div>
              <div class="uno-text-2xl uno-font-bold uno-text-[var(--ui-foreground)]">2</div>
            </div>
            <div class="uno-bg-[var(--ui-input)] uno-rounded-[16px] uno-p-4">
              <div class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.profile.progress.courses') }}</div>
              <div class="uno-text-2xl uno-font-bold uno-text-[var(--ui-foreground)]">1</div>
            </div>
            <div class="uno-bg-[var(--ui-input)] uno-rounded-[16px] uno-p-4">
              <div class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.profile.progress.challenges') }}</div>
              <div class="uno-text-2xl uno-font-bold uno-text-[var(--ui-foreground)]">1</div>
            </div>
          </div>
        </section>
      </div>

      <section class="uno-mt-8">
        <h2 class="uno-text-xl md:uno-text-2xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-4">{{ $t('pages.profile.takeAnother') }}</h2>
        <div class="uno-grid uno-gap-6 md:uno-grid-cols-3">
          <div v-for="card in testCards" :key="card.id" class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
            <div class="uno-p-6 md:uno-p-8 uno-space-y-3">
              <div class="uno-flex uno-items-center uno-gap-2">
                <span class="uno-text-xs uno-bg-[var(--ui-input)] uno-rounded-full uno-px-2 uno-py-1">{{ $t('pages.profile.tag.hard') }}</span>
                <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">10 {{ $t('pages.profile.questions') }}</span>
                <span v-if="card.completed" class="uno-text-xs uno-text-[var(--ui-primary)]">{{ $t('pages.profile.completed') }}</span>
              </div>
              <h3 class="uno-text-lg uno-font-bold uno-text-[var(--ui-foreground)]">{{ card.title }}</h3>
              <p class="uno-text-[var(--ui-muted-foreground)]">{{ card.desc }}</p>
              <div class="uno-flex uno-gap-3">
                <UButton variant="ghost" class="uno-h-[40px] uno-rounded-[12px] uno-border uno-border-[var(--ui-border)] hover:uno-border-[var(--ui-primary)] hover:uno-text-[var(--ui-primary)]">{{ $t('pages.profile.readMore') }}</UButton>
                <UButton v-if="card.try" class="uno-h-[40px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white">{{ $t('pages.profile.tryAgain') }}</UButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="uno-mt-8">
        <div class="uno-grid uno-gap-6 md:uno-grid-cols-4">
          <div v-for="course in courseCards" :key="course.id" class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
            <NuxtImg :src="course.image" :alt="course.title" class="uno-w-full uno-h-[160px] uno-object-cover uno-rounded-t-[24px]" />
            <div class="uno-p-6 uno-space-y-3">
              <h3 class="uno-text-lg uno-font-bold uno-text-[var(--ui-foreground)]">{{ course.title }}</h3>
              <p class="uno-text-[var(--ui-muted-foreground)]">{{ course.desc }}</p>
              <div class="uno-flex uno-items-center uno-justify-between">
                <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">1/10 {{ $t('pages.profile.lessons') }}</span>
                <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">10%</span>
              </div>
              <UButton class="uno-h-[40px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white">{{ $t('pages.profile.continueCourse.cta') }}</UButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const name = 'liyangzhi'
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
//

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

const triviaOptions = ['Guesswork', 'Practice', 'Analytical thinking']
const triviaSelected = ref<number | null>(null)

const weekdays = [
  { text: 'M', active: false },
  { text: 'T', active: false },
  { text: 'W', active: true },
  { text: 'T', active: true },
  { text: 'F', active: true },
  { text: 'S', active: false },
  { text: 'S', active: false }
]

const testCards = [
  { id: 1, title: 'Operations Management', desc: 'Objective: To assess an individual’s proficiency in a specific hard skill through multiple-choice questions designed to evaluate knowledge, application, and problem-solving abilities.' },
  { id: 2, title: 'Business Analysis', desc: 'Your score: 35 out of 40 points', completed: true, try: true },
  { id: 3, title: 'Operations Management', desc: 'Objective: To assess an individual’s proficiency in a specific hard skill through multiple-choice questions designed to evaluate knowledge, application, and problem-solving abilities.' }
]

const courseCards = [
  { id: 1, title: 'Business Analysis', desc: 'Leadership and management are two distinctive and complementary systems of actions in the business environment. Both are necessary for success in an increasingly complex and volatile business environment.', image: '/images/blog/1.png' },
  { id: 2, title: 'Brand Management', desc: 'Leadership and management are two distinctive and complementary systems of actions in the business environment.', image: '/images/blog/2.png' },
  { id: 3, title: 'Brand Management', desc: 'Leadership and management are two distinctive and complementary systems of actions in the business environment.', image: '/images/blog/3.png' },
  { id: 4, title: 'Business Analysis', desc: 'Leadership and management are two distinctive and complementary systems of actions in the business environment.', image: '/images/blog/4.png' }
]
</script>

<style scoped></style>
