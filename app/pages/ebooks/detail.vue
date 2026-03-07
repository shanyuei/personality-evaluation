<template>
  <main class=" uno-py-10 uno-px-6 md:uno-px-10">
    <div class="page-container px-6 md:px-10">
      <div
        class="uno-bg-[var(--ui-primary)] uno-text-white uno-rounded-[20px] uno-px-6 uno-py-8 md:uno-px-10 md:uno-py-12 uno-shadow-[0_8px_24px_rgba(0,0,0,0.12)] uno-h-[196px] uno-flex uno-flex-col uno-justify-center">
        <h1 class="uno-text-2xl md:uno-text-4xl uno-font-Outfit uno-font-extrabold uno-text-center">{{
          $t('pages.ebookDetail.hero.title') }}</h1>
        <p class="uno-text-center uno-mt-3 uno-text-sm md:uno-text-base">{{ $t('pages.ebookDetail.hero.subtitle') }}</p>
      </div>

      <section class="uno-mt-6">
        <div class="uno-py-6 uno-space-y-6">
          <div>
            <h2
              class="uno-text-2xl md:uno-text-3xl uno-font-Outfit uno-font-[600] uno-text-[var(--ui-foreground)] uno-border-b uno-border-[#BDF1E5] uno-pb-16px">
              {{ $t('pages.ebookDetail.title') }}</h2>



            <p class="uno-text-[#4E5255] uno-text-sm md:uno-text-base uno-mt-12px">{{ $t('pages.ebookDetail.intro')
            }}</p>
          </div>

          <div class="uno-space-y-4">
            <h3 class="uno-text-[24px] uno-font-600 uno-text-[var(--ui-foreground)]">{{
              $t('pages.ebookDetail.sections.contentCreation.title') }}</h3>
            <p class="uno-text-[#4E5255]">{{ $t('pages.ebookDetail.sections.contentCreation.body') }}
            </p>
            <p class="uno-text-[20px] uno-text-[var(--ui-foreground)] uno-font-medium">{{
              $t('pages.ebookDetail.sections.keyTakeaway.title') }}</p>
            <p class="uno-text-[#4E5255]">{{ $t('pages.ebookDetail.sections.keyTakeaway.body') }}</p>
          </div>

          <div class="uno-space-y-4">
            <h3 class="uno-text-[24px] uno-font-600 uno-text-[var(--ui-foreground)]">{{
              $t('pages.ebookDetail.sections.social.title') }}</h3>
            <p class="uno-text-[#4E5255]">{{ $t('pages.ebookDetail.sections.social.body') }}</p>
          </div>

          <div class="uno-space-y-4">
            <h3 class="uno-text-[24px] uno-font-600 uno-text-[var(--ui-foreground)]">{{
              $t('pages.ebookDetail.sections.about.title') }}</h3>
            <p class="uno-text-[#4E5255]">{{ $t('pages.ebookDetail.sections.about.body') }}</p>
          </div>

          <div class="uno-space-y-3">
            <h3 class="uno-text-[24px] uno-font-600 uno-text-[var(--ui-foreground)]">{{
              $t('pages.ebookDetail.learn.title')
            }}</h3>
            <ul class="uno-space-y-2">
              <li v-for="(item, i) in learnList" :key="i" class="uno-text-[var(--ui-foreground)]">
                <span class="uno-mr-0">{{ i + 1 }}.</span>
                <span class="uno-text-[#011813] uno-font-500">{{ item.split(':')[0] }}:</span>
                <span class="uno-text-[#4E5255] uno-font-400">{{ item.split(':')[1] }}</span>
              </li>
            </ul>
          </div>

          <div class="uno-space-y-3">
            <h3 class="uno-text-[24px] uno-font-600 uno-text-[var(--ui-foreground)]">{{
              $t('pages.ebookDetail.require.title') }}</h3>
            <ul class="uno-space-y-2 uno-pl-5">
              <li v-for="(item, i) in requireList" :key="i"
                class="uno-text-[var(--ui-foreground)] uno-list-disc  uno-m-0">
                <span class="uno-text-[#011813] uno-font-500">{{ item.split(':')[0] }}:</span>
                <span class="uno-text-[#4E5255] uno-font-400">{{ item.split(':')[1] }}</span>
              </li>
            </ul>
          </div>

          <div class="uno-space-y-4">
            <h3 class="uno-text-[24px] uno-font-600 uno-text-[var(--ui-foreground)]">{{
              $t('pages.ebookDetail.sections.analytics.title') }}</h3>
            <p class="uno-text-[#4E5255]">{{ $t('pages.ebookDetail.sections.analytics.body') }}</p>
          </div>

          <div class="uno-space-y-4">
            <h3 class="uno-text-[24px] uno-font-600 uno-text-[var(--ui-foreground)]">{{
              $t('pages.ebookDetail.sections.video.title') }}</h3>
            <p class="uno-text-[#4E5255]">{{ $t('pages.ebookDetail.sections.video.body') }}</p>
          </div>

          <div class="uno-space-y-4">
            <h3 class="uno-text-[24px] uno-font-600 uno-text-[var(--ui-foreground)]">{{
              $t('pages.ebookDetail.sections.copywriting.title') }}</h3>
            <p class="uno-text-[#4E5255]">
              {{ $t('pages.ebookDetail.sections.copywriting.body') }}
            </p>
            <p class="uno-text-[#4E5255]">
              <span class="uno-font-bold uno-text-[var(--ui-foreground)]">Ready to boost your brand's reach?</span>
              Start by applying one or two of these skills today and watch your engagement grow! Let us know in the
              comments which strategies have worked best for your brand.
            </p>
          </div>


          <div
            class="uno-flex uno-flex-col md:uno-flex-row uno-items-center uno-justify-center uno-gap-3 uno-mx-auto uno-mt-6  uno-p-4 md:uno-p-5 uno-w-full md:uno-w-[440px] md:uno-h-[72px] uno-rounded-[12px] uno-bg-[var(--color-green-7)]">
            <div class="uno-flex-1">
              <PrimaryButton width="full" height="48px">
                {{ $t('pages.ebookDetail.cta.download') }}</PrimaryButton>
            </div>
            <div class="uno-flex-1">
              <AppLink :to="'/ebooks'" class="uno-inline-block w-full">
                <OutlineButton width="full" height="48px">
                  {{ $t('pages.ebookDetail.cta.close') }}</OutlineButton>
              </AppLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import PrimaryButton from '~/components/ui/PrimaryButton.vue'
import OutlineButton from '~/components/ui/OutlineButton.vue'

const { t } = useI18n()
definePageMeta({
  title: () => 'seo.ebooks.detail.title',
  layoutShowPageTopIcons: false,
})
useSeoMeta({
  title: () => t('seo.ebooks.detail.title') as string,
  description: () => t('seo.ebooks.detail.description') as string
})
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
  t('pages.ebookDetail.require.i3'),
  t('pages.ebookDetail.require.i4')
]
</script>

<style scoped></style>
