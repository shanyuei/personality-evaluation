<template>
  <div class="page-container uno-py-6">
    <main class="uno-py-8 md:uno-py-16 uno-px-0 md:uno-px-10">
      <div class="uno-max-w-full md:uno-max-w-[64%] uno-mx-auto uno-text-center">
        <div class="uno-flex uno-items-center uno-justify-center uno-mb-6">
        <NuxtImg
          src="/images/test/6.png"
          class="uno-w-16 uno-h-16 uno-rounded-full"
          alt="Test icon"
        />
      </div>

        <h1
          class="uno-text-[#011813] uno-text-2xl md:uno-text-5xl uno-font-['Outfit'] uno-text-center uno-font-semibold uno-leading-[1.2] uno-mb-4 md:uno-mb-6">
          {{ $t('pages.testStart.title') }}</h1>

        <div class="uno-max-w-[880px] uno-mx-auto uno-space-y-4 uno-text-left">
          <div class="uno-flex uno-items-center uno-gap-3">
            <div class="uno-w-40px">
              <IconsCheck :size="40" class="uno-mt-1" background-color="none" check-color="var(--ui-primary)" />
            </div>
            <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit']">
              <span class="uno-font-semibold">
                {{ $t('pages.testStart.format.title') }}
              </span>
              {{ $t('pages.testStart.format.body') }}
            </p>
          </div>
          <div class="uno-flex uno-items-center uno-gap-3">
            <div class="uno-w-40px">
              <IconsCheck :size="40" class="uno-mt-1" background-color="none" check-color="var(--ui-primary)" />
            </div>
            <p class="uno-text-[#4E5255] uno-text-sm uno-font-['Outfit']">
              <span class="uno-font-semibold">
                {{ $t('pages.testStart.scoring.title') }}
              </span>
              {{ $t('pages.testStart.scoring.body') }}
            </p>
          </div>
        </div>

        <div class="uno-flex uno-items-center uno-justify-center uno-mt-8">
            <UButton
              :ui="UButtonTheme"
              @click="nextStep"
>
              {{ $t('pages.testStart.cta.getStarted') }}</UButton>
        </div>

        <p
          class="uno-w-full uno-max-w-[880px] uno-text-[#4E5255] uno-text-xs uno-font-['Outfit'] uno-text-center uno-leading-normal uno-mx-0 uno-mt-4">
          {{ $t('pages.testStart.disclaimer') }}</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import UButtonTheme from '~/theme/UButton'


const { t } = useI18n()
const router = useRouter()
definePageMeta({
  layoutShowFooter: false,
  title: () => 'seo.test.start.title'
})

useSeoMeta({
  title: () => t('seo.test.start.title'),
  description: () => t('seo.test.start.description'),
})
const nextStep = () => {
  console.log('nextStep', router.getRoutes())
  router.push({ name: 'test-step', query: { step: 1 } })
}
</script>

<style scoped></style>
