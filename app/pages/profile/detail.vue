<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-[var(--color-green-4)] uno-to-[var(--color-pink-4)] uno-py-10 uno-px-6 md:uno-px-10">
    <div class="uno-w-full md:uno-w-[90%] uno-mx-auto">
      <h1 class="uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-6">{{ $t('pages.testDetail.welcome', { name }) }}</h1>

 <section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8 uno-grid uno-gap-6 md:uno-grid-cols-3">
          <div class="uno-col-span-full md:uno-col-span-1 uno-flex uno-flex-col uno-items-start uno-space-y-4">
            <div class="uno-space-y-2">
              <div class="uno-text-[#4E5255] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2] uno-text-sm">{{ $t('pages.profile.aboutTitle') }}</div>
            </div>
            <div class="uno-flex uno-items-center uno-gap-4">
              <div class="uno-w-20 uno-h-20 uno-aspect-square uno-rounded-full uno-overflow-hidden uno-bg-[#F0F0F0]">
                <NuxtImg src="/images/instructors/jane-smith.jpg" alt="avatar" class="uno-w-full uno-h-full uno-object-cover" />
              </div>
              <div class="uno-flex uno-flex-col uno-items-start uno-gap-1">
                <div class="uno-text-[#4E5255] uno-text-xs uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.profile.type') }} 7</div>
                <div class="uno-text-[#011813] uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.profile.typeName') }}</div>
              </div>
              <div class="uno-h-[2px] uno-bg-[#4E5255]"></div>
            </div>
            <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal uno-text-left uno-max-w-md">
              Type 7s on the Enneagram are often referred to as The Enthusiasts due to their energetic, spontaneous, and optimistic nature. They are characterized by a zest for life, a love of adventure, and a constant pursuit of new experiences. Type 7s are driven by the desire to avoid pain and discomfort, seeking pleasure, excitement, and variety in all aspects of their lives. With their forward-thinking and imaginative minds, Type 7s are natural problem-solvers, able to see opportunities where others may see obstacles. They thrive on possibilities and are quick to generate ideas, often inspiring those around them with their infectious optimism and sense of adventure.
            </p>
            <div>
              <UButton :ui="UButtonTheme" class="uno-w-full md:uno-w-[151px]">{{ $t('pages.profile.readMore') }}</UButton>
            </div>
          </div>
          <div>
            <h3 class="uno-text-[#011813] uno-text-lg uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.profile.totalScore') }}</h3>
            <div class="uno-mt-3 uno-space-y-3">
              <div v-for="bar in scoreBars" :key="bar.label" class="uno-flex uno-items-center uno-gap-3">
                <span class="uno-w-[28px] uno-h-[28px] uno-flex uno-justify-center uno-items-center uno-flex-col uno-gap-[8.75px] uno-py-[3.5px] uno-px-[11.37px] uno-bg-[#F0F0F0] uno-rounded-[14px] uno-overflow-hidden uno-text-[#4E5255] uno-text-[14px] uno-font-['Outfit'] uno-font-medium uno-leading-normal">{{ bar.num }}</span>
                <span class="uno-w-28 uno-text-sm uno-text-[#4E5255] uno-font-['Outfit'] uno-leading-normal">{{ bar.label }}</span>
                <div class="uno-flex-1 uno-h-2 uno-rounded-full uno-bg-[var(--ui-input)]">
                  <div class="uno-h-2 uno-rounded-full" :style="{ width: bar.value + '%', background: bar.label === 'Individualist' ? '#E786DF' : bar.num === 2 ? '#F5CEA4' : bar.num === 5 ? '#B57AF5' : bar.num === 8 ? '#67DCA9' : bar.num === 3 ? '#E97274' : bar.num === 9 ? '#C7EB78' : bar.num === 6 ? '#7E6EE7' : bar.num === 1 ? '#F4DA8F' : '#8FADF6' }"></div>
                </div>
                <span class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ bar.value }}%</span>
              </div>
              <!-- <div class="uno-h-[2px] uno-bg-[#4E5255]"></div> -->
            </div>
          </div>

          <div class="uno-flex uno-items-center uno-justify-center">
            <NuxtImg src="/images/test/5.png" alt="Enneagram" class="uno-w-full md:uno-w-[220px] uno-h-auto" />
          </div>
        </div>
      </section>

      <div class="uno-mt-4 uno-flex uno-gap-2 uno-flex-wrap uno-justify-center">
        <UButton
          v-for="tab in tabs"
          :key="tab.id"
          :ui="UButtonTheme"
          :variant="activeTab === tab.id ? 'default' : 'outline'"
          size="sm"
          class="uno-rounded-full"
          @click="activeTab = tab.id"
        >{{ tab.label }}</UButton>
      </div>

      <section class="uno-mt-6 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8">
          <h2 class="uno-text-[#011813] uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.testDetail.core.title') }}</h2>
          <div class="uno-grid uno-gap-6 md:uno-grid-cols-2">
            <div v-for="i in 8" :key="i" class="uno-space-y-2">
              <h3 class="uno-text-[#011813] uno-text-lg uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.testDetail.core.cardTitle') }}</h3>
              <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">Type 7s are known for their optimistic outlook on life, always seeing the silver lining even in difficult situations. They approach challenges with a sense of enthusiasm and curiosity, believing that there is always something positive to be found.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="uno-mt-6 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8 uno-space-y-6">
          <h2 class="uno-text-[#011813] uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.personalityDetail.subtypes.title') }}</h2>
          <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">The Enneagram outlines three subtypes for Type 7, each highlighting different expressions of their core characteristics:</p>
          <div class="uno-grid uno-gap-6 md:uno-grid-cols-3">
            <div class="uno-space-y-2">
              <h3 class="uno-text-[#011813] uno-text-lg uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.personalityDetail.subtypes.sp') }}</h3>
              <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.personalityDetail.subtypes.spDesc') }}</p>
            </div>
            <div class="uno-space-y-2">
              <h3 class="uno-text-[#011813] uno-text-lg uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.personalityDetail.subtypes.social') }}</h3>
              <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.personalityDetail.subtypes.socialDesc') }}</p>
            </div>
            <div class="uno-space-y-2">
              <h3 class="uno-text-[#011813] uno-text-lg uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.personalityDetail.subtypes.oneToOne') }}</h3>
              <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.personalityDetail.subtypes.oneToOneDesc') }}</p>
            </div>
          </div>
          <div class="uno-flex uno-justify-center">
            <UButton :ui="UButtonTheme" class="uno-w-full md:uno-w-[151px]">{{ $t('pages.personalityDetail.subtypes.cta') }}</UButton>
          </div>
        </div>
      </section>

      <section class="uno-mt-6 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8 uno-space-y-4">
          <h2 class="uno-text-[#011813] uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.personalityDetail.conclusion.title') }}</h2>
          <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneaneuismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum,nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinaar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum,nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneean euismod bibendum laoreet. Proin gravida dolor sit amet <br /> lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum nullaluctus pharetra vulputate, felis tellus mollis orci</p>
        </div>
      </section>

      <section class="uno-mt-6 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8 uno-space-y-6">
          <h2 class="uno-text-[#011813] uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.personalityDetail.growth.title') }}</h2>

          <div class="uno-grid uno-gap-6 md:uno-grid-cols-3">
            <div class="uno-space-y-3">
              <div class="uno-w-10 uno-h-10 uno-rounded-full uno-border uno-border-[var(--ui-border)] uno-flex uno-items-center uno-justify-center uno-text-[var(--ui-foreground)] uno-font-semibold">1</div>
              <h3 class="uno-text-[#011813] uno-text-lg uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.personalityDetail.growth.items.i1.title') }}</h3>
              <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.personalityDetail.growth.items.i1.body') }}</p>
              <NuxtLink to="/courses" class="uno-inline-block">
                <UButton :ui="UButtonTheme" class="uno-w-full md:uno-w-[151px]">{{ $t('pages.personalityDetail.growth.ctaCourses') }}</UButton>
              </NuxtLink>
            </div>

            <div class="uno-space-y-3">
              <div class="uno-w-10 uno-h-10 uno-rounded-full uno-border uno-border-[var(--ui-border)] uno-flex uno-items-center uno-justify-center uno-text-[var(--ui-foreground)] uno-font-semibold">2</div>
              <h3 class="uno-text-[#011813] uno-text-lg uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.personalityDetail.growth.items.i2.title') }}</h3>
              <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.personalityDetail.growth.items.i2.body') }}</p>
            </div>

            <div class="uno-space-y-3">
              <div class="uno-w-10 uno-h-10 uno-rounded-full uno-border uno-border-[var(--ui-border)] uno-flex uno-items-center uno-justify-center uno-text-[var(--ui-foreground)] uno-font-semibold">3</div>
              <h3 class="uno-text-[#011813] uno-text-lg uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">{{ $t('pages.personalityDetail.growth.items.i3.title') }}</h3>
              <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit'] uno-leading-normal">{{ $t('pages.personalityDetail.growth.items.i3.body') }}</p>
              <NuxtLink to="/test" class="uno-inline-block">
                <UButton :ui="UButtonTheme" class="uno-w-full md:uno-w-[151px]">{{ $t('pages.personalityDetail.growth.ctaTests') }}</UButton>
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
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import UButtonTheme from '~/theme/UButton'

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














