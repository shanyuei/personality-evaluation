<template>
  <main class="min-h-screen bg-white">

    <section class="relative py-24 sm:py-32 bg-[linear-gradient(90deg,_var(--color-green-3)_0%,_var(--color-pink-3)_100%)]">
      <NuxtImg src="/theme/layout/page-top-icon-1.png" alt="decor" class="absolute left-1/2 -translate-x-1/2 top-4 w-8 h-8" />
      <div class="max-w-[1200px] mx-auto px-6 sm:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div class="text-center md:text-left">
            <h1 class="text-[40px] leading-[1.05] md:text-6xl md:leading-[1.05] lg:text-7xl font-['Outfit'] font-extrabold text-[var(--ui-foreground)] tracking-tight">{{ $t('pages.about.hero.title') }}</h1>
            <p class="mt-6 text-[var(--ui-muted-foreground)] max-w-xl md:max-w-none">{{ $t('pages.about.hero.desc') }}</p>
          </div>
          <div class="relative">
            <NuxtImg src="/images/home/hero/hero-1.png" alt="About hero" class="w-full h-auto rounded-[24px] shadow-[0_20px_40px_0_rgba(0,157,119,0.08)]" sizes="(min-width:768px) 600px, 100vw" />
          </div>
        </div>
      </div>
    </section>
   
    <section class="py-12 md:py-16">
      <div class="max-w-[1200px] mx-auto px-6 sm:px-10">
        <p class="text-center text-[var(--ui-foreground)] max-w-4xl mx-auto">
          {{ $t('pages.about.content.desc') }}
        </p>
        <div class="mt-8 md:mt-10 bg-[var(--color-purple-4)] rounded-[24px] px-6 md:px-10 py-8 md:py-10">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center text-center">
            <div>
              <div class="text-2xl md:text-4xl font-extrabold text-[var(--ui-foreground)]">{{ $t('pages.about.stats.projects.value') }}</div>
              <div class="mt-2 text-sm md:text-base text-[var(--ui-muted-foreground)]">{{ $t('pages.about.stats.projects.label') }}</div>
            </div>
            <div>
              <div class="text-2xl md:text-4xl font-extrabold text-[var(--ui-foreground)]">{{ $t('pages.about.stats.team.value') }}</div>
              <div class="mt-2 text-sm md:text-base text-[var(--ui-muted-foreground)]">{{ $t('pages.about.stats.team.label') }}</div>
            </div>
            <div>
              <div class="text-2xl md:text-4xl font-extrabold text-[var(--ui-foreground)]">{{ $t('pages.about.stats.reviews.value') }}</div>
              <div class="mt-2 text-sm md:text-base text-[var(--ui-muted-foreground)]">{{ $t('pages.about.stats.reviews.label') }}</div>
            </div>
            <div>
              <div class="text-2xl md:text-4xl font-extrabold text-[var(--ui-foreground)]">{{ $t('pages.about.stats.awards.value') }}</div>
              <div class="mt-2 text-sm md:text-base text-[var(--ui-muted-foreground)]">{{ $t('pages.about.stats.awards.label') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-12 md:py-20">
      <div class="max-w-[1200px] mx-auto px-6 sm:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 class="text-3xl md:text-5xl font-['Outfit'] font-extrabold text-[var(--ui-foreground)]">{{ $t('pages.about.standout.title') }}</h2>
            <p class="mt-4 text-[var(--ui-muted-foreground)] max-w-xl">{{ $t('pages.about.standout.desc') }}</p>
            <div class="mt-8 space-y-6">
              <div class="flex items-start gap-4">
                <span class="w-10 h-10 rounded-full bg-[var(--color-green-3)] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/200/svg" viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M20 7L9 18L4 13" stroke="var(--color-green-1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
                <div>
                  <div class="text-lg md:text-xl font-semibold text-[var(--ui-foreground)]">{{ $t('pages.about.standout.items.precision.title') }}</div>
                  <p class="text-[var(--ui-muted-foreground)]">{{ $t('pages.about.standout.items.precision.desc') }}</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <span class="w-10 h-10 rounded-full bg-[var(--color-purple-4)] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/200/svg" viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M10 14L21 3" stroke="var(--color-purple-1)" stroke-width="2" stroke-linecap="round"/><circle cx="7" cy="17" r="4" stroke="var(--color-purple-1)" stroke-width="2"/></svg>
                </span>
                <div>
                  <div class="text-lg md:text-xl font-semibold text-[var(--ui-foreground)]">{{ $t('pages.about.standout.items.deep.title') }}</div>
                  <p class="text-[var(--ui-muted-foreground)]">{{ $t('pages.about.standout.items.deep.desc') }}</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <span class="w-10 h-10 rounded-full bg-[var(--color-pink-3)] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/200/svg" viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M12 2V22" stroke="var(--color-pink-1)" stroke-width="2"/><path d="M5 7H19" stroke="var(--color-pink-1)" stroke-width="2"/></svg>
                </span>
                <div>
                  <div class="text-lg md:text-xl font-semibold text-[var(--ui-foreground)]">{{ $t('pages.about.standout.items.expert.title') }}</div>
                  <p class="text-[var(--ui-muted-foreground)]">{{ $t('pages.about.standout.items.expert.desc') }}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="rounded-[24px] overflow-hidden bg-[var(--color-purple-4)]">
              <NuxtImg src="/images/home/hero/hero-4.png" alt="Stands Out" class="w-full h-auto" sizes="(min-width:768px) 560px, 100vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-12 md:py-20">
      <div class="max-w-[1200px] mx-auto px-6 sm:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <NuxtImg src="/images/home/hero/hero-2.png" alt="Mission" class="w-full h-auto rounded-[24px]" sizes="(min-width:768px) 560px, 100vw" />
          </div>
          <div>
            <span class="inline-flex items-center px-3 h-[32px] rounded-full bg-[var(--color-green-3)] text-[var(--color-green-1)] font-medium">{{ $t('pages.about.sections.mission.badge') }}</span>
            <h2 class="mt-4 text-3xl md:text-4xl font-['Outfit'] font-extrabold text-[var(--ui-foreground)]">{{ $t('pages.about.sections.mission.title') }}</h2>
            <p class="mt-4 text-[var(--ui-muted-foreground)]">{{ $t('pages.about.sections.mission.desc') }}</p>
            <div class="mt-6 space-y-3">
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full border border-[var(--color-green-1)] text-[var(--color-green-1)] flex items-center justify-center text-xs">✓</span>
                <span class="text-[var(--ui-foreground)]">{{ $t('pages.about.sections.mission.list1') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full border border-[var(--color-green-1)] text-[var(--color-green-1)] flex items-center justify-center text-xs">✓</span>
                <span class="text-[var(--ui-foreground)]">{{ $t('pages.about.sections.mission.list2') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full border border-[var(--color-green-1)] text-[var(--color-green-1)] flex items-center justify-center text-xs">✓</span>
                <span class="text-[var(--ui-foreground)]">{{ $t('pages.about.sections.mission.list3') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full border border-[var(--color-green-1)] text-[var(--color-green-1)] flex items-center justify-center text-xs">✓</span>
                <span class="text-[var(--ui-foreground)]">{{ $t('pages.about.sections.mission.list4') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-6 md:py-10">
      <div class="max-w-[1200px] mx-auto px-6 sm:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span class="inline-flex items-center px-3 h-[32px] rounded-full bg-[var(--color-pink-3)] text-[var(--color-pink-1)] font-medium">{{ $t('pages.about.sections.vision.badge') }}</span>
            <h2 class="mt-4 text-3xl md:text-4xl font-['Outfit'] font-extrabold text-[var(--ui-foreground)]">{{ $t('pages.about.sections.vision.title') }}</h2>
            <p class="mt-4 text-[var(--ui-muted-foreground)]">{{ $t('pages.about.sections.vision.desc') }}</p>
            <div class="mt-6 space-y-3">
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full border border-[var(--color-green-1)] text-[var(--color-green-1)] flex items-center justify-center text-xs">✓</span>
                <span class="text-[var(--ui-foreground)]">{{ $t('pages.about.sections.vision.list1') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full border border-[var(--color-green-1)] text-[var(--color-green-1)] flex items-center justify-center text-xs">✓</span>
                <span class="text-[var(--ui-foreground)]">{{ $t('pages.about.sections.vision.list2') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full border border-[var(--color-green-1)] text-[var(--color-green-1)] flex items-center justify-center text-xs">✓</span>
                <span class="text-[var(--ui-foreground)]">{{ $t('pages.about.sections.vision.list3') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full border border-[var(--color-green-1)] text-[var(--color-green-1)] flex items-center justify-center text-xs">✓</span>
                <span class="text-[var(--ui-foreground)]">{{ $t('pages.about.sections.vision.list4') }}</span>
              </div>
            </div>
          </div>
          <div>
            <NuxtImg src="/images/home/hero/hero-3.png" alt="Vision" class="w-full h-auto rounded-[24px]" sizes="(min-width:768px) 560px, 100vw" />
          </div>
        </div>
      </div>
    </section>
    
    <FAQSection 
      :title="$t('pages.about.faq.title')" 
      :description="$t('pages.about.faq.desc')" 
      :items="faqItems" 
      :accordion="true" 
      :default-expanded-index="0" 
    />
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()
// definePageMeta({
//   title: () => t('pages.about.title') as string
// })
// useSeoMeta({
//   title: () => t('pages.about.title') as string,
//   description: () => t('pages.about.description') as string,
//   ogTitle: () => t('pages.about.title') as string,
//   ogDescription: () => t('pages.about.description') as string
// })

const faqItems = [
  {
    question: t('pages.about.faq.q1'),
    answer: t('pages.about.faq.a1')
  },
  {
    question: t('pages.about.faq.q2'),
    answer: t('pages.about.faq.a2')
  },
  {
    question: t('pages.about.faq.q3'),
    answer: t('pages.about.faq.a3')
  },
  {
    question: t('pages.about.faq.q4'),
    answer: t('pages.about.faq.a4')
  },
  {
    question: t('pages.about.faq.q5'),
    answer: t('pages.about.faq.a5')
  }
]
</script>

<style scoped>
/* About Us page specific styles */
</style>
