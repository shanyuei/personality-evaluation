<template>
  <div class="page-container uno-py-6">
    <main class="uno-py-6 md:uno-py-12 md:uno-px-10">
      <div class="uno-mx-auto">
        <div class="uno-flex uno-flex-col uno-items-center uno-gap-4">
          <NuxtImg
            src="/images/process/1.png"
            alt="Process Icon"
            class="uno-w-12 md:uno-w-14 uno-h-12 md:uno-h-14 uno-rounded-full" />
          <h1
            class="uno-w-full uno-text-[#011813] uno-text-2xl md:uno-text-5xl uno-font-['Outfit'] uno-text-center uno-font-semibold uno-leading-[1.2]">
            {{ $t('pages.testIntro.title') }}</h1>
        </div>

        <div class="course-header md:!uno-w-[80%] md:!uno-max-w-[80%] uno-mx-auto">
          <div class="course-nav">
            <div class="progress-percent">{{ progress }}%</div>
            <div/> <!-- 占位符，保持布局一致 -->
            <div class="question-count">{{ $t('pages.testIntro.progress.step', { current, total }) }}</div>
          </div>
          <div class="course-progress">
            <div class="progress-bar" :style="{ width: progress + '%' }"/>
          </div>
        </div>

        <div class="uno-w-full md:uno-w-[80%] uno-mx-auto uno-mt-4">
          <div class="uno-flex uno-items-center uno-justify-between">
            <NuxtLink to="/tests"
              class="uno-inline-flex uno-items-center uno-gap-2 hover:uno-text-[var(--ui-foreground)]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </NuxtLink>
            <h2
              class="uno-text-[#011813] uno-text-base md:uno-text-lg uno-font-['Outfit'] uno-text-center uno-font-semibold uno-leading-[1.2]">
              {{ $t('pages.testIntro.instructions') }}</h2>
            <div class="uno-w-6"/>
          </div>

          <div class="uno-p-4 md:uno-p-6">
            <div class="uno-flex uno-flex-row uno-items-center uno-justify-center uno-gap-0 uno-mt-4 uno-px-[5%]">
              <div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1">
                <div
                  class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F4D0CB] uno-border-solid uno-border-[#F6BAB2] uno-border-2"/>
                <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.testIntro.scale.sd')
                  }}</span>
              </div>
              <div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1">
                <div
                  class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F1DACE] uno-border-solid uno-border-[#F5CEB6] uno-border-2"/>
                <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.testIntro.scale.d')
                  }}</span>
              </div>
              <div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1">
                <div
                  class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F0F0F0] uno-border-solid uno-border-[#D8D8D8] uno-border-2"/>
                <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.testIntro.scale.n')
                  }}</span>
              </div>
              <div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1">
                <div
                  class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#C6EAD8] uno-border-solid uno-border-[#9FE2AA] uno-border-2"/>
                <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.testIntro.scale.a')
                  }}</span>
              </div>
              <div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1">
                <div
                  class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#B3E1D6] uno-border-solid uno-border-[#88D9BA] uno-border-2"/>
                <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.testIntro.scale.sa')
                  }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="uno-w-full md:uno-w-[80%] uno-mx-auto uno-mt-4">
          <div class="uno-space-y-4">
            <div v-for="(q, qi) in questions" :key="qi"
              class="uno-bg-white uno-rounded-[16px] md:uno-rounded-[20px] uno-border uno-border-[var(--ui-border)] uno-shadow-[0px_2px_8px_rgba(0,0,0,0.06)]">
              <div class="uno-p-4 md:uno-p-6">
                <p class="uno-text-[#011813] uno-font-['Outfit'] uno-text-base md:uno-text-lg uno-text-center uno-leading-[1.2] uno-mb-8">{{ q }}</p>
                <div
                  class="uno-flex uno-flex-row uno-items-center uno-justify-center uno-gap-2 md:uno-gap-[20px] uno-mt-4 uno-px-[5%]">
                  <div class="uno-flex-1 uno-flex uno-justify-center uno-items-center">
                    <IconsSad v-if="qi === 2" @click="answers[qi] = 1" />
                    <div v-else class="uno-flex-1 uno-flex uno-justify-center uno-items-center">
                      <div
                        class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F4D0CB] uno-border-solid uno-border-[#F6BAB2] uno-border-2"
                        @click="answers[qi] = 1"/>
                    </div>
                  </div>
                  <div class="uno-flex-1 uno-flex uno-justify-center uno-items-center">
                    <CheckIcon v-if="qi === 2" color="#FFC8A7" @click="answers[qi] = 2" />
                    <div v-else class="uno-flex-1 uno-flex uno-justify-center uno-items-center">
                      <div
                        class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F1DACE] uno-border-solid uno-border-[#F5CEB6] uno-border-2"
                        @click="answers[qi] = 2"/>
                    </div>
                  </div>
                  <div class="uno-flex-1 uno-flex uno-justify-center uno-items-center">
                    <IconsCheck v-if="qi === 2" color="#D8D8D8" @click="answers[qi] = 3" />
                    <div v-else class="uno-flex-1 uno-flex uno-justify-center uno-items-center">
                      <div
                        class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F0F0F0] uno-border-solid uno-border-[#D8D8D8] uno-border-2"
                        @click="answers[qi] = 3"/>
                    </div>
                  </div>
                  <div class="uno-flex-1 uno-flex uno-justify-center uno-items-center">
                    <IconsCheck v-if="qi === 2" color="#96E5A3" @click="answers[qi] = 4" />
                    <div v-else class="uno-flex-1 uno-flex uno-justify-center uno-items-center">
                      <div
                        class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#C6EAD8] uno-border-solid uno-border-[#9FE2AA] uno-border-2"
                        @click="answers[qi] = 4"/>
                    </div>
                  </div>
                  <div class="uno-flex-1 uno-flex uno-justify-center uno-items-center">
                    <IconsCheck v-if="qi === 2" color="#5AD7A7" @click="answers[qi] = 5" />
                    <div v-else class="uno-flex-1 uno-flex uno-justify-center uno-items-center">
                      <div
                        class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#B3E1D6] uno-border-solid uno-border-[#88D9BA] uno-border-2"
                        @click="answers[qi] = 5"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p class="uno-text-[#8D8E8F] uno-font-['Outfit'] uno-text-xs md:uno-text-sm uno-text-center uno-leading-[1.2] uno-mt-6">{{
            $t('pages.testIntro.notice') }}</p>
        </div>

        <div class="uno-w-full md:uno-w-[602px] uno-mx-auto uno-mt-6 uno-flex uno-justify-center">
          <UButton
            :ui="UButtonTheme"
            :disabled="!canContinue">{{ $t('pages.testIntro.cta') }}</UButton>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import UButtonTheme from '~/theme/UButton'
const { t } = useI18n()
const total = 20
const current = 1
const questions = [
  t('pages.testIntro.q.q1'),
  t('pages.testIntro.q.q2'),
  t('pages.testIntro.q.q3'),
  t('pages.testIntro.q.q4'),
  t('pages.testIntro.q.q5')
]
const answers = ref<(number | null)[]>(Array(questions.length).fill(null))
const answeredCount = computed(() => answers.value.filter(a => a !== null).length)
const progress = computed(() => Math.round((answeredCount.value / total) * 100))
const canContinue = computed(() => answeredCount.value === questions.length)
</script>

<style scoped></style>
