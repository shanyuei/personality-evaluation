<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-[var(--color-green-4)] uno-to-[var(--color-pink-4)] uno-py-6 uno-px-4 md:uno-px-10">
    <div class="uno-max-w-[80%] uno-mx-auto">
      <div class="uno-w-full md:uno-w-[860px] uno-mx-auto">
        <!-- 顶部导航与进度 -->
        <div class="uno-flex uno-items-center uno-justify-between uno-text-[var(--ui-muted-foreground)] uno-mb-2">
          <NuxtLink to="/user-course/chapter-complete" class="uno-inline-flex uno-items-center uno-gap-2 hover:uno-text-[var(--ui-foreground)]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </NuxtLink>
          <div class="uno-text-sm md:uno-text-base">{{ $t('pages.userCourseTest.questionCount', { current, total }) }}</div>
          <div class="uno-text-sm">{{ progress }}%</div>
        </div>

        <div class="uno-w-full uno-h-[6px] uno-rounded-full uno-bg-[var(--ui-input)]">
          <div class="uno-h-full uno-rounded-full uno-bg-[var(--ui-primary)]" :style="{ width: progress + '%' }"></div>
        </div>
      </div>

      <!-- 题卡 -->
      <div class="uno-mt-4 uno-w-full md:uno-w-[860px] uno-mx-auto uno-bg-white uno-rounded-[20px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8">
          <h1 class="uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-6">{{ $t('pages.userCourseTest.question') }}</h1>

          <div class="uno-space-y-4">
            <button v-for="(opt, idx) in options" :key="idx" type="button" class="uno-flex uno-items-center uno-gap-3 uno-w-full uno-text-left"
              @click="selected = idx">
              <span class="uno-inline-flex uno-items-center uno-justify-center uno-w-5 uno-h-5 uno-aspect-square uno-rounded-full"
                :class="selected === idx ? 'uno-bg-white uno-border-2 uno-border-[var(--ui-primary)]' : 'uno-bg-white uno-border-2 uno-border-[var(--ui-border)]'">
                <span v-if="selected === idx" class="uno-w-2.5 uno-h-2.5 uno-aspect-square uno-rounded-full uno-bg-[var(--ui-primary)]"></span>
              </span>
              <span class="uno-text-sm md:uno-text-base uno-text-[var(--ui-foreground)]">{{ opt }}</span>
            </button>
          </div>

          <div class="uno-mt-8">
            <NuxtLink to="/user-course/test-complete" class="uno-block">
              <UButton class="uno-w-full uno-h-[48px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white uno-flex uno-items-center uno-justify-center uno-text-center">{{ $t('pages.userCourseTest.cta') }}</UButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const current = ref(4)
const total = ref(10)
const progress = computed(() => Math.round((current.value / total.value) * 100))
const selected = ref<number | null>(0)
const options = [
  $t('pages.userCourseTest.o1'),
  $t('pages.userCourseTest.o2'),
  $t('pages.userCourseTest.o3'),
  $t('pages.userCourseTest.o4')
]
</script>

<style scoped></style>
