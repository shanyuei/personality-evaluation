<template>
  <main class="">

    <section class="uno-relative uno-py-22 sm:uno-py-32">
      <div class="page-container uno-px-6 sm:uno-px-10">
        <div class="uno-flex uno-flex-col md:uno-flex-row uno-items-center md:uno-justify-between uno-gap-72px">
          <NuxtImg src="/images/about/icon-1.png" alt="decor"
            class="uno-absolute uno-left-1/2 uno--translate-x-1/2 uno-top-4 uno-w-47px uno-h-36px" />
          <div class="uno-text-center md:uno-text-left md:uno-w-1/2">
            <h1 class="uno-font-semibold uno-text-4xl md:uno-text-6xl uno-text-[#011813] md:uno-leading-[86px] uno-text-left">
              {{ $t('pages.about.hero.title') }}</h1>
            <p class="uno-font-normal uno-text-[16px] md:uno-text-[18px] uno-text-[#4e5255] md:uno-leading-[27px] uno-text-left uno-m-t-16px">{{
              $t('pages.about.hero.desc') }}
            </p>
          </div>
          <div class="uno-relative uno-w-[320px] sm:uno-w-[342px] md:uno-w-[486px] uno-mx-auto md:uno-mx-0">
            <NuxtImg src="/images/about/1.png" alt="About hero" width="486" height="428"
              uno-sizes="(min-width:768px) 486px, 320px" class="uno-w-full uno-h-auto" />
          </div>
        </div>

        <div class="uno-mt-12 md:uno-mt-120px">
          <div class="md:uno-max-w-[74%] uno-mx-auto">
            <p class="uno-font-normal uno-text-[18px] md:uno-text-[24px] uno-text-[#011813] md:uno-leading-[34px] uno-text-center md:uno-w-80% uno-mx-auto">
              {{ $t('pages.about.content.desc') }}
            </p>
            <div class="uno-mt-8 md:uno-mt-10 uno-bg-[#edfbff] uno-rounded-[16px] uno-px-6 md:uno-px-10 uno-py-8 md:uno-py-10">
              <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-4 uno-gap-6 md:uno-gap-8 uno-items-center uno-text-center">
                <div>
                  <div class="uno-font-semibold uno-text-[48px] uno-text-[#011813] uno-leading-[58px]">{{
                    $t('pages.about.stats.projects.value') }}</div>
                  <div class="uno-mt-2 uno-font-normal uno-text-[18px] uno-text-[#4e5255] uno-leading-[27px]">{{
                    $t('pages.about.stats.projects.label') }}</div>
                </div>
                <div>
                  <div class="uno-font-semibold uno-text-[48px] uno-text-[#011813] uno-leading-[58px]">{{
                    $t('pages.about.stats.team.value') }}</div>
                  <div class="uno-mt-2 uno-font-normal uno-text-[18px] uno-text-[#4e5255] uno-leading-[27px]">{{
                    $t('pages.about.stats.team.label') }}</div>
                </div>
                <div>
                  <div class="uno-font-semibold uno-text-[48px] uno-text-[#011813] uno-leading-[58px]">{{
                    $t('pages.about.stats.reviews.value') }}</div>
                  <div class="uno-mt-2 uno-font-normal uno-text-[18px] uno-text-[#4e5255] uno-leading-[27px]">{{
                    $t('pages.about.stats.reviews.label') }}</div>
                </div>
                <div>
                  <div class="uno-font-semibold uno-text-[48px] uno-text-[#011813] uno-leading-[58px]">{{
                    $t('pages.about.stats.awards.value') }}</div>
                  <div class="uno-mt-2 uno-font-normal uno-text-[18px] uno-text-[#4e5255] uno-leading-[27px]">{{
                    $t('pages.about.stats.awards.label') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section class="uno-py-12 md:uno-py-20 uno-bg-#f8f8f8">
      <div class="page-container uno-px-6 sm:uno-px-10">
        <div class="uno-flex uno-flex-col md:uno-flex-row uno-gap-10 uno-items-center">
          <div class="uno-min-w-564px">
            <NuxtImg src="/images/about/2.png" alt="Mission" width="564px" height="440px"
               class="uno-w-full uno-h-auto" />
          </div>
          <div>
            <div class="uno-flex uno-justify-center uno-items-center">
              <span
                class="uno-px-16px uno-py-8px uno-bg-[#dfffea] uno-rounded-8px uno-font-medium uno-text-[16px] uno-text-[#011813] uno-leading-[24px]">{{
                  $t('pages.about.sections.mission.badge') }}</span>
            </div>
            <h2 class="uno-mt-4 uno-text-3xl md:uno-text-4xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)]">{{
              $t('pages.about.sections.mission.title') }}</h2>
            <p class="uno-mt-4 uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.about.sections.mission.desc') }}</p>
            <div class="uno-mt-6 uno-space-y-3">
              <div class="uno-flex uno-items-start uno-gap-3">
                <NuxtImg src="/images/about/icon-2.png" alt="check" width="24" height="24" class="uno-w-6 uno-h-6" />
                <span class="uno-text-[var(--ui-foreground)]">{{ $t('pages.about.sections.mission.list1') }}</span>
              </div>
              <div class="uno-flex uno-items-start uno-gap-3">
                <NuxtImg src="/images/about/icon-2.png" alt="check" width="24" height="24" class="uno-w-6 uno-h-6" />
                <span class="uno-text-[var(--ui-foreground)]">{{ $t('pages.about.sections.mission.list2') }}</span>
              </div>
              <div class="uno-flex uno-items-start uno-gap-3">
                <NuxtImg src="/images/about/icon-2.png" alt="check" width="24" height="24" class="uno-w-6 uno-h-6" />
                <span class="uno-text-[var(--ui-foreground)]">{{ $t('pages.about.sections.mission.list3') }}</span>
              </div>
              <div class="uno-flex uno-items-start uno-gap-3">
                <NuxtImg src="/images/about/icon-2.png" alt="check" width="24" height="24" class="uno-w-6 uno-h-6" />
                <span class="uno-text-[var(--ui-foreground)]">{{ $t('pages.about.sections.mission.list4') }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="uno-mt-10 uno-flex uno-flex-col md:uno-flex-row uno-gap-10 uno-items-center">
          <div>
            <div class="uno-flex uno-justify-center uno-items-center">
              <span
                class="uno-px-16px uno-py-8px uno-bg-[#ffd3e1] uno-rounded-8px uno-font-medium uno-text-[16px] uno-text-[#011813] uno-leading-[24px] uno-mx-auto">{{
                  $t('pages.about.sections.vision.badge') }}</span>
            </div>
            <h2 class="uno-mt-4 uno-text-3xl md:uno-text-4xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)]">{{
              $t('pages.about.sections.vision.title') }}</h2>
            <p class="uno-mt-4 uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.about.sections.vision.desc') }}</p>
            <div class="uno-mt-6 uno-space-y-3">
              <div class="uno-flex uno-items-start uno-gap-3">
                <NuxtImg src="/images/about/icon-2.png" alt="check" width="24" height="24" class="uno-w-6 uno-h-6" />
                <span class="uno-text-[var(--ui-foreground)]">{{ $t('pages.about.sections.vision.list1') }}</span>
              </div>
              <div class="uno-flex uno-items-start uno-gap-3">
                <NuxtImg src="/images/about/icon-2.png" alt="check" width="24" height="24" class="uno-w-6 uno-h-6" />
                <span class="uno-text-[var(--ui-foreground)]">{{ $t('pages.about.sections.vision.list2') }}</span>
              </div>
              <div class="uno-flex uno-items-start uno-gap-3">
                <NuxtImg src="/images/about/icon-2.png" alt="check" width="24" height="24" class="uno-w-6 uno-h-6" />
                <span class="uno-text-[var(--ui-foreground)]">{{ $t('pages.about.sections.vision.list3') }}</span>
              </div>
              <div class="uno-flex uno-items-start uno-gap-3">
                <NuxtImg src="/images/about/icon-2.png" alt="check" width="24" height="24" class="uno-w-6 uno-h-6" />
                <span class="uno-text-[var(--ui-foreground)]">{{ $t('pages.about.sections.vision.list4') }}</span>
              </div>
            </div>
          </div>
            <div class="uno-min-w-564px">
            <NuxtImg src="/images/about/3.png" alt="Vision" width="564px" height="440px"
              class="uno-w-full uno-h-auto" />
          </div>
        </div>
      </div>
    </section>

    <section class="uno-py-12 md:uno-py-20">
      <div class="page-container uno-px-6 sm:uno-px-10">
        <div class="uno-flex uno-flex-col md:uno-flex-row uno-gap-10 uno-items-start">
          <div>
            <h2 class="uno-text-3xl md:uno-text-5xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)]">{{
              $t('pages.about.standout.title') }}</h2>
            <p class="uno-mt-4 uno-text-[var(--ui-muted-foreground)] uno-max-w-xl">{{ $t('pages.about.standout.desc') }}</p>
            <div class="uno-mt-8 uno-space-y-6">
              <div class="uno-flex uno-items-start uno-gap-4">
                <span class="uno-w-10 uno-h-10 uno-rounded-full uno-bg-[var(--color-green-3)] uno-flex uno-items-center uno-justify-center">
                  <NuxtImg src="/images/about/icon-3.png" alt="precision" width="64" height="64" />
                </span>
                <div>
                  <div class="uno-text-lg md:uno-text-xl uno-font-semibold uno-text-[var(--ui-foreground)]">{{
                    $t('pages.about.standout.items.precision.title') }}</div>
                  <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.about.standout.items.precision.desc') }}</p>
                </div>
              </div>
              <div class="uno-flex uno-items-start uno-gap-4">
                <span class="uno-w-10 uno-h-10 uno-rounded-full uno-bg-[var(--color-purple-4)] uno-flex uno-items-center uno-justify-center">
                  <NuxtImg src="/images/about/icon-4.png" alt="deep" width="64" height="64" />
                </span>
                <div>
                  <div class="uno-text-lg md:uno-text-xl uno-font-semibold uno-text-[var(--ui-foreground)]">{{
                    $t('pages.about.standout.items.deep.title') }}</div>
                  <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.about.standout.items.deep.desc') }}</p>
                </div>
              </div>
              <div class="uno-flex uno-items-start uno-gap-4">
                <span class="uno-w-10 uno-h-10 uno-rounded-full uno-bg-[var(--color-pink-3)] uno-flex uno-items-center uno-justify-center">
                  <NuxtImg src="/images/about/icon-5.png" alt="expert" width="64" height="64" />
                </span>
                <div>
                  <div class="uno-text-lg md:uno-text-xl uno-font-semibold uno-text-[var(--ui-foreground)]">{{
                    $t('pages.about.standout.items.expert.title') }}</div>
                  <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.about.standout.items.expert.desc') }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="uno-w-[320px] sm:uno-w-[342px] md:uno-w-[616px] uno-mx-auto md:uno-mx-0">
            <NuxtImg src="/images/about/4.png" alt="Vision" width="616px" height="560px"
              uno-sizes="(min-width:768px) 616px, 320px" class="uno-w-full uno-h-auto" />
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
//   title: () => t('seo.about.title') as string,
//   description: () => t('seo.about.description') as string,
//   ogTitle: () => t('seo.about.title') as string,
//   ogDescription: () => t('seo.about.description') as string
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
