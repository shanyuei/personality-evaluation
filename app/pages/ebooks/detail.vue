<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-[var(--color-green-4)] uno-to-[var(--color-pink-4)] uno-py-10 uno-px-6 md:uno-px-10">
    <div class="uno-w-full md:uno-w-[70%] uno-mx-auto">
      <div class="uno-bg-[var(--ui-primary)] uno-text-white uno-rounded-[20px] uno-px-6 uno-py-8 md:uno-px-10 md:uno-py-12 uno-shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
        <h1 class="uno-text-2xl md:uno-text-4xl uno-font-['Outfit'] uno-font-extrabold uno-text-center">{{ $t('pages.ebookDetail.hero.title') }}</h1>
        <p class="uno-text-center uno-mt-3 uno-text-sm md:uno-text-base">{{ $t('pages.ebookDetail.hero.subtitle') }}</p>
      </div>

      <section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)] uno-mt-6">
        <div class="uno-p-6 md:uno-p-10 uno-space-y-6">
          <h2 class="uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)]">{{ $t('pages.ebookDetail.title') }}</h2>
          <p class="uno-text-[var(--ui-muted-foreground)] uno-text-sm md:uno-text-base">{{ $t('pages.ebookDetail.intro') }}</p>

          <div class="uno-space-y-4">
            <h3 class="uno-text-xl uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.ebookDetail.sections.contentCreation.title') }}</h3>
            <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.ebookDetail.sections.contentCreation.body') }}</p>
            <p class="uno-text-[var(--ui-foreground)] uno-font-medium">{{ $t('pages.ebookDetail.sections.keyTakeaway.title') }}</p>
            <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.ebookDetail.sections.keyTakeaway.body') }}</p>
          </div>

          <div class="uno-space-y-4">
            <h3 class="uno-text-xl uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.ebookDetail.sections.social.title') }}</h3>
            <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.ebookDetail.sections.social.body') }}</p>
          </div>

          <div class="uno-space-y-4">
            <h3 class="uno-text-xl uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.ebookDetail.sections.about.title') }}</h3>
            <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.ebookDetail.sections.about.body') }}</p>
          </div>

          <div class="uno-space-y-3">
            <h3 class="uno-text-xl uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.ebookDetail.learn.title') }}</h3>
            <ul class="uno-space-y-2">
              <li v-for="(item, i) in learnList" :key="i" class="uno-text-[var(--ui-foreground)]"><span class="uno-text-[var(--ui-foreground)]">{{ item }}</span></li>
            </ul>
          </div>

          <div class="uno-space-y-3">
            <h3 class="uno-text-xl uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.ebookDetail.require.title') }}</h3>
            <ul class="uno-space-y-2">
              <li v-for="(item, i) in requireList" :key="i" class="uno-text-[var(--ui-muted-foreground)]">{{ item }}</li>
            </ul>
          </div>

          <div class="uno-space-y-4">
            <h3 class="uno-text-xl uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.ebookDetail.sections.analytics.title') }}</h3>
            <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.ebookDetail.sections.analytics.body') }}</p>
          </div>

          <div class="uno-space-y-4">
            <h3 class="uno-text-xl uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.ebookDetail.sections.video.title') }}</h3>
            <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.ebookDetail.sections.video.body') }}</p>
          </div>

          <div class="uno-space-y-4">
            <h3 class="uno-text-xl uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.ebookDetail.sections.copywriting.title') }}</h3>
            <p class="uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.ebookDetail.sections.copywriting.body') }}</p>
          </div>

          <div class="uno-flex uno-flex-col md:uno-flex-row uno-items-center uno-justify-center uno-gap-3 uno-pt-6">
            <UButton class="uno-w-full md:uno-w-[280px] uno-h-[48px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white uno-flex uno-items-center uno-justify-center uno-text-center">{{ $t('pages.ebookDetail.cta.download') }}</UButton>
            <NuxtLink to="/ebooks" class="uno-inline-block uno-w-full md:uno-w-[280px]">
              <UButton variant="ghost" class="uno-w-full uno-h-[48px] uno-rounded-[12px] uno-border uno-border-[var(--ui-border)] hover:uno-border-[var(--ui-primary)] hover:uno-text-[var(--ui-primary)] uno-flex uno-items-center uno-justify-center uno-text-center">{{ $t('pages.ebookDetail.cta.close') }}</UButton>
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()
const learnList = [
  t('pages.ebookDetail.learn.i1'),
  t('pages.ebookDetail.learn.i2'),
  t('pages.ebookDetail.learn.i3'),
  t('pages.ebookDetail.learn.i4'),
  t('pages.ebookDetail.learn.i5')
]
const requireList = [
  t('pages.ebookDetail.require.i1'),
  t('pages.ebookDetail.require.i2'),
  t('pages.ebookDetail.require.i3')
]
</script>

<style scoped></style>
