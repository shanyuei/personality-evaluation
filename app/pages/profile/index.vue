<template>
  <div class="page-container uno-w-full md:uno-w-[90%] uno-mx-auto uno-py-12">
    <h1
      class="uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-6">
      {{ $t('pages.profile.welcome', { name }) }}</h1>

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

        <div class="uno-col-span-full md:uno-col-span-1 uno-flex uno-items-center uno-justify-center uno-hidden md:uno-block">
          <NuxtImg src="/images/test/5.png" alt="Enneagram" class="uno-w-full md:uno-w-[220px] uno-h-auto" />
        </div>
      </div>
    </section>

    <div class="uno-grid uno-gap-6 md:uno-grid-cols-5 uno-mt-6">
      <section
        class="uno-col-span-full md:uno-col-span-3 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-4 md:uno-p-8 uno-space-y-4">
          <span class="uno-text-[#4E5255] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{
            $t('pages.profile.dailyTrivia') }}</span>
          <h3
            class="uno-text-[#011813] uno-text-base md:uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2] uno-mt-4">
            {{ $t('pages.profile.triviaQuestion') }}</h3>
          <div class="uno-space-y-3">
            <URadioGroup v-model="triviaSelected" :items="radioItems" :ui="URadioTheme" />
            <UButton :ui="UButtonTheme" class="uno-w-full md:uno-w-auto">{{ $t('pages.profile.viewResults') }}</UButton>
          </div>
        </div>
      </section>

      <section
        class="uno-col-span-full md:uno-col-span-2 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-4 md:uno-p-8 uno-space-y-6">
          <h3
            class="uno-text-base md:uno-text-lg uno-text-[#4E5255] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">
            {{ $t('pages.profile.progress.title') }}</h3>
          <div class="uno-space-y-4">
            <div class="uno-flex uno-items-end uno-justify-between">
              <div class="uno-flex uno-items-center uno-gap-3">
                <NuxtImg src="/images/profile/1.png" alt="completed" class="uno-w-[24px] uno-h-[24px]" />
                <span class="uno-text-[#323233] uno-font-['Outfit'] uno-text-sm">{{ $t('pages.profile.progress.tests') }}</span>
              </div>
              <div
                class="uno-text-[#323233] uno-text-4xl md:uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-mb-0">2
              </div>
            </div>
            <div class="uno-h-[2px] uno-bg-[var(--ui-border)]"></div>
            <div class="uno-flex uno-items-end uno-justify-between">
              <div class="uno-flex uno-items-center uno-gap-3">
                <NuxtImg src="/images/profile/2.png" alt="book" class="uno-w-[24px] uno-h-[24px]" />
                <span class="uno-text-[#323233] uno-font-['Outfit'] uno-text-sm">{{ $t('pages.profile.progress.courses') }}</span>
              </div>
              <div
                class="uno-text-[#323233] uno-text-4xl md:uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-mb-0">1
              </div>
            </div>
            <div class="uno-h-[2px] uno-bg-[var(--ui-border)]"></div>
            <div class="uno-flex uno-items-end uno-justify-between">
              <div class="uno-flex uno-items-center uno-gap-3">
                <NuxtImg src="/images/profile/3.png" alt="test tube" class="uno-w-[24px] uno-h-[24px]" />
                <span class="uno-text-[#323233] uno-font-['Outfit'] uno-text-sm">{{ $t('pages.profile.progress.challenges') }}</span>
              </div>
              <div
                class="uno-text-[#323233] uno-text-4xl md:uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-mb-0">1
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="uno-grid uno-gap-6 md:uno-grid-cols-5 uno-mt-6">
      <section
        class="uno-col-span-full md:uno-col-span-3 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-4 md:uno-p-8 uno-space-y-6">
          <span class="uno-text-xs uno-text-[#4E5255] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{
            $t('pages.profile.continueCourse.label') }}</span>
          <h3
            class="uno-text-[#011813] uno-text-xl md:uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">
            {{ $t('pages.profile.continueCourse.title') }}</h3>
          <p class="uno-text-[#323233] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{
            $t('pages.profile.continueCourse.desc') }}</p>
          <div class="uno-flex uno-justify-between uno-items-center">
            <span class="uno-text-[#323233] uno-text-sm uno-font-['Outfit'] uno-font-medium uno-leading-normal">0/10 {{
              $t('pages.profile.lessons') }}</span>
          </div>
          <div class="uno-flex uno-items-end uno-justify-between uno-gap-4">
            <UButton :ui="UButtonTheme" class="uno-w-full md:uno-w-auto">{{ $t('pages.profile.continueCourse.cta') }}
            </UButton>
            <div
              class="uno-w-[64px] uno-h-[64px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[14.55px] uno-p-[14.55px] uno-border-solid uno-border-[#E7E7E8] uno-border-4 uno-rounded-[145.45px] uno-overflow-hidden">
              <span class="uno-text-sm uno-text-[var(--ui-muted-foreground)]">0%</span>
            </div>
          </div>
        </div>
      </section>
      <section
        class="uno-col-span-full md:uno-col-span-2 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-4 md:uno-p-8 uno-space-y-6">
          <h3
            class="uno-text-base md:uno-text-lg uno-text-[#4E5255] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">
            {{ $t('pages.profile.progress.title') }}</h3>
          <div class="uno-space-y-4">
            <div class="uno-flex uno-items-end uno-justify-between">
              <div class="uno-flex uno-items-center uno-gap-3">
                <NuxtImg src="/images/profile/1.png" alt="completed" class="uno-w-[24px] uno-h-[24px]" />
                <span class="uno-text-[#323233] uno-font-['Outfit'] uno-text-sm">{{ $t('pages.profile.progress.tests') }}</span>
              </div>
              <div
                class="uno-text-[#323233] uno-text-4xl md:uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-mb-0">2
              </div>
            </div>
            <div class="uno-h-[2px] uno-bg-[var(--ui-border)]"></div>
            <div class="uno-flex uno-items-end uno-justify-between">
              <div class="uno-flex uno-items-center uno-gap-3">
                <NuxtImg src="/images/profile/2.png" alt="book" class="uno-w-[24px] uno-h-[24px]" />
                <span class="uno-text-[#323233] uno-font-['Outfit'] uno-text-sm">{{ $t('pages.profile.progress.courses') }}</span>
              </div>
              <div
                class="uno-text-[#323233] uno-text-4xl md:uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-mb-0">1
              </div>
            </div>
            <div class="uno-h-[2px] uno-bg-[var(--ui-border)]"></div>
            <div class="uno-flex uno-items-end uno-justify-between">
              <div class="uno-flex uno-items-center uno-gap-3">
                <NuxtImg src="/images/profile/3.png" alt="test tube" class="uno-w-[24px] uno-h-[24px]" />
                <span class="uno-text-[#323233] uno-font-['Outfit'] uno-text-sm">{{ $t('pages.profile.progress.challenges') }}</span>
              </div>
              <div
                class="uno-text-[#323233] uno-text-4xl md:uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-mb-0">1
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

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

    <section class="uno-mt-8">
      <h2
        class="uno-text-2xl md:uno-text-[32px] uno-text-[#011813] uno-font-['Outfit'] uno-font-bold uno-leading-normal uno-mt-12 uno-mb-6">
        {{ $t('pages.profile.continueLearning') }}</h2>
      <div class="uno-grid uno-gap-6 md:uno-grid-cols-3">
        <div v-for="(course, index) in courseCards" :key="course.id"
          class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)] uno-overflow-hidden">
          <div class="uno-p-4 md:uno-p-8 uno-space-y-3">
            <h3 class="uno-text-lg uno-font-bold uno-text-[var(--ui-foreground)] uno-mb-3">{{ course.title }}</h3>
            <p class="uno-text-sm uno-text-[var(--ui-muted-foreground)] uno-mb-4 line-clamp-3">{{ course.desc }}</p>
            <div class="uno-mt-2">
              <div class="uno-flex uno-items-center uno-justify-between">
                <div>
                  <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">1/10 {{ $t('pages.profile.lessons')
                    }}</span>
                </div>
              </div>
              <div class="uno-flex uno-items-center uno-justify-between uno-mt-3">
                <UButton :ui="UButtonTheme" size="sm" class="uno-w-[180px] md:uno-w-[120px]">{{
                  $t('pages.profile.continueCourse.cta') }}</UButton>
                <div class="uno-relative uno-w-14 uno-h-14">
                  <div class="uno-absolute uno-inset-0 uno-flex uno-items-center uno-justify-center">
                    <span class="uno-text-sm uno-font-medium uno-text-[var(--ui-primary)]">10%</span>
                  </div>
                  <svg class="uno-w-full uno-h-full" viewBox="0 0 100 100">
                    <circle class="uno-fill-none uno-stroke-[#E0E0E0] uno-stroke-w-6" cx="50" cy="50" r="45" />
                    <circle class="uno-fill-none uno-stroke-[#009D77] uno-stroke-w-6 uno-stroke-linecap-round" cx="50"
                      cy="50" r="45" stroke-dasharray="283" stroke-dashoffset="254.7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import UButtonTheme from '~/theme/UButton'
import URadioTheme from '~/theme/URadio'
definePageMeta({
 layoutShowFooter:false
})
const { t } = useI18n()

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

const radioItems = computed(() => {
  return triviaOptions.map((opt, idx) => ({
    label: opt,
    value: idx
  }))
})
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
  { id: 1, title: 'Operations Management', desc: 'Objective: To assess an individual\'s proficiency in a specific hard skill through multiple-choice questions designed to evaluate knowledge, application, and problem-solving abilities.' },
  { id: 2, title: 'Business Analysis', desc: 'Your score: 35 out of 40 points', completed: true, try: true },
  { id: 3, title: 'Operations Management', desc: 'Objective: To assess an individual\'s proficiency in a specific hard skill through multiple-choice questions designed to evaluate knowledge, application, and problem-solving abilities.' }
]

const courseCards = [
  { id: 1, title: 'Business Analysis', desc: 'Leadership and management are two distinctive and complementary systems of actions in the business environment. Both are necessary for success in an increasingly complex and volatile business environment.', image: '/images/blog/1.png' },
  { id: 2, title: 'Brand Management', desc: 'Leadership and management are two distinctive and complementary systems of actions in the business environment.', image: '/images/blog/2.png' },
  { id: 3, title: 'Brand Management', desc: 'Leadership and management are two distinctive and complementary systems of actions in the business environment.', image: '/images/blog/3.png' }
]
</script>

<style scoped></style>