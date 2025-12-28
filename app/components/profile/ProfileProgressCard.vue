<template>
  <section
    class="uno-col-span-full md:uno-col-span-2 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
    <div class="uno-p-4 md:uno-p-8 uno-space-y-6">
      <h3
        class="uno-text-base md:uno-text-lg uno-text-[#4E5255] uno-font-['Outfit'] uno-font-semibold uno-leading-[1.2]">
        {{ $t('pages.profile.progress.title') }}</h3>
      <div class="uno-space-y-4">
        <div class="uno-flex uno-items-end uno-justify-between">
          <div class="uno-flex uno-items-center uno-gap-3">
            <NuxtImg src="/images/profile/1.png" alt="completed" class="uno-w-[24px] uno-h-[24px]" />
            <span class="uno-text-[#323233] uno-font-['Outfit'] uno-text-sm">{{ $t('pages.profile.progress.tests')
              }}</span>
          </div>
          <div
            class="uno-text-[#323233] uno-text-4xl md:uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-mb-0">2
          </div>
        </div>
        <div class="uno-h-[2px] uno-bg-[var(--ui-border)]"></div>
        <div class="uno-flex uno-items-end uno-justify-between">
          <div class="uno-flex uno-items-center uno-gap-3">
            <NuxtImg src="/images/profile/2.png" alt="book" class="uno-w-[24px] uno-h-[24px]" />
            <span class="uno-text-[#323233] uno-font-['Outfit'] uno-text-sm">{{ $t('pages.profile.progress.courses')
              }}</span>
          </div>
          <div
            class="uno-text-[#323233] uno-text-4xl md:uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-mb-0">1
          </div>
        </div>
        <div class="uno-h-[2px] uno-bg-[var(--ui-border)]"></div>
        <div class="uno-flex uno-items-end uno-justify-between">
          <div class="uno-flex uno-items-center uno-gap-3">
            <NuxtImg src="/images/profile/3.png" alt="test tube" class="uno-w-[24px] uno-h-[24px]" />
            <span class="uno-text-[#323233] uno-font-['Outfit'] uno-text-sm">{{
              $t('pages.profile.progress.challenges') }}</span>
          </div>
          <div
            class="uno-text-[#323233] uno-text-4xl md:uno-text-5xl uno-font-['Outfit'] uno-font-semibold uno-mb-0">1
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
