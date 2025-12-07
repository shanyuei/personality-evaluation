<template>
  <main class="">

    <section class="relative py-22 sm:py-32 ">
      <NuxtImg src="/images/about/icon-1.png" alt="decor"
        class="absolute left-1/2 -translate-x-1/2 top-4 w-47px h-36px" />
      <div class="max-w-[80%] mx-auto px-6 sm:px-10">
        <div class="flex flex-col md:flex-row items-center md:justify-between gap-72px ">
          <div class="text-center md:text-left md:w-1/2">
            <h1 class="font-semibold text-[72px] text-[#011813] leading-[86px] text-left">
              {{ $t('pages.about.hero.title') }}</h1>
            <p class="font-normal text-[18px] text-[#4e5255] leading-[27px] text-left m-t-16px">{{
              $t('pages.about.hero.desc') }}
            </p>
          </div>
          <div class="relative w-486px ">
            <NuxtImg src="/images/about/1.png" alt="About hero" width="486" height="428" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-14">
      <div class="max-w-[65%] mx-auto px-6 sm:px-10">
        <p class="font-normal text-[24px] text-[#011813] leading-[34px] text-center w-80% mx-auto">
          {{ $t('pages.about.content.desc') }}
        </p>
        <div class="mt-8 md:mt-10 bg-[#edfbff] rounded-[16px] px-6 md:px-10 py-8 md:py-10">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center text-center">
            <div>
              <div class="font-semibold text-[48px] text-[#011813] leading-[58px]">{{
                $t('pages.about.stats.projects.value') }}</div>
              <div class="mt-2 font-normal text-[18px] text-[#4e5255] leading-[27px]">{{
                $t('pages.about.stats.projects.label') }}</div>
            </div>
            <div>
              <div class="font-semibold text-[48px] text-[#011813] leading-[58px]">{{
                $t('pages.about.stats.team.value') }}</div>
              <div class="mt-2 font-normal text-[18px] text-[#4e5255] leading-[27px]">{{
                $t('pages.about.stats.team.label') }}</div>
            </div>
            <div>
              <div class="font-semibold text-[48px] text-[#011813] leading-[58px]">{{
                $t('pages.about.stats.reviews.value') }}</div>
              <div class="mt-2 font-normal text-[18px] text-[#4e5255] leading-[27px]">{{
                $t('pages.about.stats.reviews.label') }}</div>
            </div>
            <div>
              <div class="font-semibold text-[48px] text-[#011813] leading-[58px]">{{
                $t('pages.about.stats.awards.value') }}</div>
              <div class="mt-2 font-normal text-[18px] text-[#4e5255] leading-[27px]">{{
                $t('pages.about.stats.awards.label') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section class="py-12 md:py-20">
      <div class="max-w-[80%] mx-auto px-6 sm:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <NuxtImg src="/images/about/3.png" alt="Mission" width="564px" height="440px" />
          </div>
          <div>
            <span
              class="inline-flex items-center px-3 h-[32px] rounded-full bg-[var(--color-green-3)] text-[var(--color-green-1)] font-medium">{{
                $t('pages.about.sections.mission.badge') }}</span>
            <h2 class="mt-4 text-3xl md:text-4xl font-['Outfit'] font-extrabold text-[var(--ui-foreground)]">{{
              $t('pages.about.sections.mission.title') }}</h2>
            <p class="mt-4 text-[var(--ui-muted-foreground)]">{{ $t('pages.about.sections.mission.desc') }}</p>
            <div class="mt-6 space-y-3">
              <div class="flex items-start gap-3">
                <NuxtImg src="/images/about/icon-2.png" alt="check" width="24" height="24" class="w-6 h-6" />
                <span class="text-[var(--ui-foreground)]">{{ $t('pages.about.sections.mission.list1') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <NuxtImg src="/images/about/icon-2.png" alt="check" width="24" height="24" class="w-6 h-6" />
                <span class="text-[var(--ui-foreground)]">{{ $t('pages.about.sections.mission.list2') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <NuxtImg src="/images/about/icon-2.png" alt="check" width="24" height="24" class="w-6 h-6" />
                <span class="text-[var(--ui-foreground)]">{{ $t('pages.about.sections.mission.list3') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <NuxtImg src="/images/about/icon-2.png" alt="check" width="24" height="24" class="w-6 h-6" />
                <span class="text-[var(--ui-foreground)]">{{ $t('pages.about.sections.mission.list4') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-6 md:py-10">
      <div class="max-w-[80%] mx-auto px-6 sm:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span
              class="inline-flex items-center px-3 h-[32px] rounded-full bg-[var(--color-pink-3)] text-[var(--color-pink-1)] font-medium">{{
                $t('pages.about.sections.vision.badge') }}</span>
            <h2 class="mt-4 text-3xl md:text-4xl font-['Outfit'] font-extrabold text-[var(--ui-foreground)]">{{
              $t('pages.about.sections.vision.title') }}</h2>
            <p class="mt-4 text-[var(--ui-muted-foreground)]">{{ $t('pages.about.sections.vision.desc') }}</p>
            <div class="mt-6 space-y-3">
              <div class="flex items-start gap-3">
                <NuxtImg src="/images/about/icon-2.png" alt="check" width="24" height="24" class="w-6 h-6" />
                <span class="text-[var(--ui-foreground)]">{{ $t('pages.about.sections.vision.list1') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <NuxtImg src="/images/about/icon-2.png" alt="check" width="24" height="24" class="w-6 h-6" />
                <span class="text-[var(--ui-foreground)]">{{ $t('pages.about.sections.vision.list2') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <NuxtImg src="/images/about/icon-2.png" alt="check" width="24" height="24" class="w-6 h-6" />
                <span class="text-[var(--ui-foreground)]">{{ $t('pages.about.sections.vision.list3') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <NuxtImg src="/images/about/icon-2.png" alt="check" width="24" height="24" class="w-6 h-6" />
                <span class="text-[var(--ui-foreground)]">{{ $t('pages.about.sections.vision.list4') }}</span>
              </div>
            </div>
          </div>
          <div>
            <NuxtImg src="/images/about/4.png" alt="Vision" width="616px" height="560px" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-20">
      <div class="max-w-[80%] mx-auto px-6 sm:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 class="text-3xl md:text-5xl font-['Outfit'] font-extrabold text-[var(--ui-foreground)]">{{
              $t('pages.about.standout.title') }}</h2>
            <p class="mt-4 text-[var(--ui-muted-foreground)] max-w-xl">{{ $t('pages.about.standout.desc') }}</p>
            <div class="mt-8 space-y-6">
              <div class="flex items-start gap-4">
                <span class="w-10 h-10 rounded-full bg-[var(--color-green-3)] flex items-center justify-center">
                  <NuxtImg src="/images/about/icon-3.png" alt="precision" width="64" height="64" />
                </span>
                <div>
                  <div class="text-lg md:text-xl font-semibold text-[var(--ui-foreground)]">{{
                    $t('pages.about.standout.items.precision.title') }}</div>
                  <p class="text-[var(--ui-muted-foreground)]">{{ $t('pages.about.standout.items.precision.desc') }}</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <span class="w-10 h-10 rounded-full bg-[var(--color-purple-4)] flex items-center justify-center">
                  <NuxtImg src="/images/about/icon-4.png" alt="deep" width="64" height="64" />
                </span>
                <div>
                  <div class="text-lg md:text-xl font-semibold text-[var(--ui-foreground)]">{{
                    $t('pages.about.standout.items.deep.title') }}</div>
                  <p class="text-[var(--ui-muted-foreground)]">{{ $t('pages.about.standout.items.deep.desc') }}</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <span class="w-10 h-10 rounded-full bg-[var(--color-pink-3)] flex items-center justify-center">
                  <NuxtImg src="/images/about/icon-5.png" alt="expert" width="64" height="64" />
                </span>
                <div>
                  <div class="text-lg md:text-xl font-semibold text-[var(--ui-foreground)]">{{
                    $t('pages.about.standout.items.expert.title') }}</div>
                  <p class="text-[var(--ui-muted-foreground)]">{{ $t('pages.about.standout.items.expert.desc') }}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="rounded-[24px] overflow-hidden bg-[var(--color-purple-4)]">
              <NuxtImg src="/images/about/2.png" alt="Stands Out" width="564px" height="440px" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <FAQSection :title="$t('pages.about.faq.title')" :description="$t('pages.about.faq.desc')" :items="faqItems"
      :accordion="true" :default-expanded-index="0" />
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
