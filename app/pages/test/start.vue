<template>
  <div class="page-container uno-py-6">
    <main class="uno-py-8 md:uno-py-16 uno-px-0 md:uno-px-10">
      <div class="uno-max-w-full lg:uno-max-w-[64%] uno-mx-auto uno-text-center">
        <div class="uno-flex uno-items-center uno-justify-center uno-mb-6">
          <NuxtImg src="/images/test/6.png" class="uno-w-24 uno-h-24 uno-rounded-full" alt="Test icon" />
        </div>

        <h1
          class="uno-text-[#011813] uno-text-2xl md:uno-text-5xl uno-font-Outfit uno-text-center uno-font-semibold uno-leading-[1.2] uno-mb-4 md:uno-mb-6">
          {{ $t('pages.testStart.title') }}</h1>

        <div class="uno-max-w-[880px] uno-mx-auto uno-space-y-4 uno-text-left">
          <div v-for="(step, index) in steps" :key="index" class="uno-flex uno-items-start uno-gap-4px">
            <div class="uno-w-24px">
              <IconsCheck :size="24" background-color="none" check-color="var(--ui-primary)" />
            </div>
            <p class="uno-text-[#4E5255] uno-text-[16px] uno-font-400 uno-font-Outfit">
              <span class="uno-font-[700]">
                {{ step.title }}
              </span>
              {{ step.body }}
            </p>
          </div>
        </div>

        <div class="uno-flex uno-items-center uno-justify-center uno-mt-8">
          <PrimaryButton @click="nextStep">
            {{ $t('pages.testStart.cta.getStarted') }}</PrimaryButton>
        </div>

        <p
          class="uno-w-full uno-max-w-[880px] uno-text-[#4E5255] uno-text-xs uno-font-Outfit uno-text-center uno-leading-normal uno-mx-0 uno-mt-4">
          {{ $t('pages.testStart.disclaimer') }}</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import PrimaryButton from '~/components/ui/PrimaryButton.vue'
import { getSkillTestQuestions } from '~/api/skill-tests'

const { t } = useI18n()
const router = useRouter()
const route = useRoute()
const localePath = useLocalePath()

definePageMeta({
  layoutShowFooter: false,
  title: () => 'seo.test.start.title',
  layoutShowPageTopIcons: false,
})

const testId = computed(() => route.query.test_id as string | number)

const { data: testDetailData } = await getSkillTestQuestions({
  id: testId.value
})

const testInfo = computed(() => testDetailData.value?.data || {})
useSeoMeta({
  title: () => (testInfo.value as any)?.meta_title || (testInfo.value as any)?.title || t('seo.test.start.title'),
  description: () => (testInfo.value as any)?.meta_description || (testInfo.value as any)?.summary || t('seo.test.start.description'),
})

const steps = [
  {
    title: t('pages.testStart.format.title'),
    body: t('pages.testStart.format.body')
  },
  {
    title: t('pages.testStart.scoring.title'),
    body: t('pages.testStart.scoring.body')
  }
]

const nextStep = () => {
  if (testId.value) {
    router.push(`/user-course/test?test_id=${testId.value}`)
  }
}
</script>

<style scoped></style>
