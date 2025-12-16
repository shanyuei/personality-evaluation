<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-[var(--color-green-4)] uno-to-[var(--color-pink-4)] uno-py-10 uno-px-6 md:uno-px-10">
    <div class="uno-w-full md:uno-w-[90%] uno-mx-auto">
      <h1 class="uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-6">{{ $t('pages.profile.welcome', { name }) }}</h1>

      <section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8 uno-grid uno-gap-6 md:uno-grid-cols-3">
          <div class="uno-col-span-full md:uno-col-span-1 uno-flex uno-flex-col uno-items-start uno-space-y-4">
            <div class="uno-space-y-2">
              <div class="uno-w-[418px] uno-text-[#4E5255] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2] uno-text-sm">{{ $t('pages.profile.aboutTitle') }}</div>
            </div>
            <div class="uno-flex uno-items-center uno-gap-4">
              <div class="uno-w-20 uno-h-20 uno-aspect-square uno-rounded-full uno-overflow-hidden uno-bg-[#F0F0F0]">
                <NuxtImg src="/images/instructors/jane-smith.jpg" alt="avatar" class="uno-w-full uno-h-full uno-object-cover" />
              </div>
              <div class="uno-flex uno-flex-col uno-items-start uno-gap-1">
                <div class="uno-text-[#4E5255] uno-text-xs uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.profile.type') }} 7</div>
                <div class="uno-w-[418px] uno-text-[#011813] uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.profile.typeName') }}</div>
              </div>
            </div>
            <p class="uno-text-xs uno-text-[var(--ui-muted-foreground)] uno-text-left uno-max-w-md">
              Type 7s on the Enneagram are often referred to as The Enthusiasts due to their energetic, spontaneous, and optimistic nature. They are characterized by a zest for life, a love of adventure, and a constant pursuit of new experiences. Type 7s are driven by the desire to avoid pain and discomfort, seeking pleasure, excitement, and variety in all aspects of their lives. With their forward-thinking and imaginative minds, Type 7s are natural problem-solvers, able to see opportunities where others may see obstacles. They thrive on possibilities and are quick to generate ideas, often inspiring those around them with their infectious optimism and sense of adventure.
            </p>
            <div>
              <UButton class="uno-w-[151px] uno-h-[48px] uno-gap-1 uno-py-1 uno-px-[20px] uno-bg-[var(--ui-primary)] uno-rounded-lg hover:uno-bg-[var(--color-green-2)] uno-text-white uno-text-lg uno-font-['Outfit'] uno-font-bold uno-leading-normal uno-text-center">{{ $t('pages.profile.readMore') }}</UButton>
            </div>
          </div>
          <div>
            <h3 class="uno-text-[#323233] uno-text-lg uno-font-['Outfit'] uno-font-semibold uno-leading-normal">{{ $t('pages.profile.totalScore') }}</h3>
            <div class="uno-mt-3 uno-space-y-3">
              <div v-for="bar in scoreBars" :key="bar.label" class="uno-flex uno-items-center uno-gap-3">
                <span class="uno-w-[28px] uno-h-[28px] uno-flex uno-justify-center uno-items-center uno-flex-col uno-gap-[8.75px] uno-py-[3.5px] uno-px-[11.37px] uno-bg-[#F0F0F0] uno-rounded-[14px] uno-overflow-hidden uno-text-[#4E5255] uno-text-[14px] uno-font-['Outfit'] uno-font-medium uno-leading-normal">{{ bar.num }}</span>
                <span class="uno-w-28 uno-text-sm uno-text-[#4E5255] uno-font-['Outfit'] uno-leading-normal">{{ bar.label }}</span>
                <div class="uno-flex-1 uno-h-2 uno-rounded-full uno-bg-[var(--ui-input)]">
                  <div class="uno-h-2 uno-rounded-full" :style="{ width: bar.value + '%', background: bar.label === 'Individualist' ? '#E786DF' : bar.num === 2 ? '#F5CEA4' : bar.num === 5 ? '#B57AF5' : bar.num === 8 ? '#67DCA9' : bar.num === 3 ? '#E97274' : bar.num === 9 ? '#C7EB78' : bar.num === 6 ? '#7E6EE7' : bar.num === 1 ? '#F4DA8F' : '#8FADF6' }"></div>
                </div>
                <span class="uno-text-sm uno-text-[var(--ui-muted-foreground)]">{{ bar.value }}%</span>
              </div>
            </div>
          </div>

          <div class="uno-flex uno-items-center uno-justify-center">
            <NuxtImg src="/images/test/5.png" alt="Enneagram" class="uno-w-[220px] uno-h-[220px]" />
          </div>
        </div>
      </section>

      <div class="uno-grid uno-gap-6 md:uno-grid-cols-5 uno-mt-6">
        <section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)] md:uno-col-span-3">
          <div class="uno-p-6 md:uno-p-8 uno-space-y-4">
            <span class="uno-w-[418px] uno-text-[#4E5255] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2] uno-mb-12">{{ $t('pages.profile.dailyTrivia') }}</span>
            <h3 class="uno-text-[#011813] uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.profile.triviaQuestion') }}</h3>
            <div class="uno-space-y-2">
            <label v-for="(opt, idx) in triviaOptions" :key="idx" class="uno-flex uno-items-center uno-gap-3">
              <input v-model="triviaSelected" :value="idx" type="radio">
              <span class="uno-text-[var(--ui-foreground)] uno-text-sm">{{ opt }}</span>
            </label>
            </div>
            <div>
              <UButton class="uno-h-[48px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-1 uno-py-1 uno-px-[20px] uno-bg-[#009D77] uno-rounded-lg hover:uno-bg-[var(--color-green-2)] uno-text-[#FFFFFF] uno-text-base uno-font-['Outfit'] uno-font-bold uno-leading-normal">{{ $t('pages.profile.viewResults') }}</UButton>
            </div>
          </div>
        </section>

        <section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)] md:uno-col-span-2">
          <div class="uno-p-6 md:uno-p-8">
            <span class="uno-w-[418px] uno-text-[#4E5255] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2] uno-mb-3">{{ $t('pages.profile.dailyStreak') }}</span>
            <div class="uno-flex uno-items-center uno-gap-2 uno-my-4">
              <div class="uno-text-[#011813] uno-text-[88px] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">0</div>
              <p class="uno-w-[272px] uno-text-[#4E5255] uno-text-base uno-font-['Outfit'] uno-leading-[1.6]">Days in a row<br>{{ $t('pages.profile.begin') }}</p>
            </div>
            <div class="uno-flex uno-gap-2 uno-mt-2">
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
      </div>

      <div class="uno-grid uno-gap-6 md:uno-grid-cols-5 uno-mt-6">
        <section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)] md:uno-col-span-3">
          <div class="uno-p-6 md:uno-p-8 uno-space-y-3">
            <span class="uno-w-[418px] uno-text-xs uno-text-[#4E5255] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.profile.continueCourse.label') }}</span>
            <h3 class="uno-text-[#011813] uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.profile.continueCourse.title') }}</h3>
            <p class="uno-text-[#323233] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.profile.continueCourse.desc') }}</p>
            <div class="uno-flex uno-justify-between uno-items-center">
              <span class="uno-text-[#323233] uno-text-sm uno-font-['Outfit'] uno-font-medium uno-leading-normal">0/10 {{ $t('pages.profile.lessons') }}</span>
            </div>
            <div class="uno-mt-2 uno-flex uno-items-end uno-justify-between">
              <UButton class="uno-h-[48px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-1 uno-py-1 uno-px-[20px] uno-bg-[#009D77] uno-rounded-lg hover:uno-bg-[var(--color-green-2)] uno-text-[#FFFFFF] uno-text-sm uno-font-['Outfit'] uno-font-bold uno-leading-normal">{{ $t('pages.profile.continueCourse.cta') }}</UButton>
              <div class="uno-w-[64px] uno-h-[64px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[14.55px] uno-p-[14.55px] uno-border-solid uno-border-[#E7E7E8] uno-border-4 uno-rounded-[145.45px] uno-overflow-hidden">
                  <span class="uno-text-sm uno-text-[var(--ui-muted-foreground)]">0%</span>
                </div>
            </div>
          </div>
        </section>
        <section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)] md:uno-col-span-2">
          <div class="uno-p-6 md:uno-p-8 uno-space-y-6">
            <h3 class="uno-text-lg uno-text-[#4E5255] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">Your progress</h3>
            <div class="uno-space-y-4">
              <div class="uno-flex uno-items-center uno-justify-between">
                <div class="uno-flex uno-items-center uno-gap-3">
                  <div class="uno-text-[var(--color-green-1)]">✓</div>
                  <span class="uno-text-[var(--ui-foreground)]">Completed tests</span>
                </div>
                <div class="uno-text-2xl uno-font-bold uno-text-[var(--ui-foreground)]">2</div>
              </div>
              <div class="uno-h-[1px] uno-bg-[var(--ui-border)]"></div>
              <div class="uno-flex uno-items-center uno-justify-between">
                <div class="uno-flex uno-items-center uno-gap-3">
                  <div class="uno-text-[var(--color-green-1)]">📚</div>
                  <span class="uno-text-[var(--ui-foreground)]">Finished course</span>
                </div>
                <div class="uno-text-2xl uno-font-bold uno-text-[var(--ui-foreground)]">1</div>
              </div>
              <div class="uno-h-[1px] uno-bg-[var(--ui-border)]"></div>
              <div class="uno-flex uno-items-center uno-justify-between">
                <div class="uno-flex uno-items-center uno-gap-3">
                  <div class="uno-text-[var(--color-green-1)]">🔬</div>
                  <span class="uno-text-[var(--ui-foreground)]">Completed challenge</span>
                </div>
                <div class="uno-text-2xl uno-font-bold uno-text-[var(--ui-foreground)]">1</div>
              </div>
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
  { num: 9, label: 'Loyalist', value: 83, color: 'var(--color-green-2)' },
  { num: 6, label: 'Peacemaker', value: 66, color: 'var(--ui-primary)' },
  { num: 1, label: 'Reformer', value: 52, color: 'var(--color-pink-1)' }
]
//



const triviaOptions = ['Avoidance', 'Guesswork', 'Practice', 'Analytical thinking']
const triviaSelected = ref<number | null>(null)

const weekdays = [
  { text: 'M', active: false },
  { text: 'T', active: false },
  { text: 'W', active: false },
  { text: 'T', active: false },
  { text: 'F', active: false },
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
