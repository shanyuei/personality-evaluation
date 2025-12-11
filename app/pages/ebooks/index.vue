<template>
  <main class="uno-min-h-screen uno-bg-gradient-to-br uno-from-[var(--color-green-4)] uno-to-[var(--color-pink-4)] uno-py-10 uno-px-6 md:uno-px-10">
    <div class="page-container uno-mx-auto">
      <div class="uno-grid uno-gap-6 md:uno-grid-cols-[2fr_1fr] uno-w-full md:uno-w-[30%] uno-mx-auto">
        <section>
          <h2 class="uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-4">{{ $t('pages.ebooks.myTitle') }}</h2>
          <div class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
            <div class="uno-p-6 md:uno-p-8 uno-flex uno-items-center uno-gap-6">
              <div class="uno-flex-1 uno-space-y-3">
                <h3 class="uno-text-xl md:uno-text-2xl uno-font-['Outfit'] uno-font-bold uno-text-[var(--ui-foreground)]">{{ $t('pages.ebooks.primary.title') }}</h3>
                <p class="uno-text-sm md:uno-text-base uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.ebooks.primary.desc') }}</p>
                <div class="uno-flex uno-gap-3 uno-pt-2">
                  <UButton class="uno-h-[48px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white">{{ $t('pages.ebooks.primary.download') }}</UButton>
                  <UButton variant="ghost" class="uno-h-[48px] uno-rounded-[12px] uno-border uno-border-[var(--ui-border)] hover:uno-border-[var(--ui-primary)] hover:uno-text-[var(--ui-primary)]">{{ $t('pages.ebooks.primary.readOnline') }}</UButton>
                </div>
              </div>
              <div class="uno-w-[160px] uno-h-[160px] uno-rounded-[24px] uno-bg-[var(--ui-input)] uno-flex uno-items-center uno-justify-center">
                <NuxtImg src="/images/blog/2.png" alt="ebook" class="uno-w-[120px] uno-h-[120px] uno-object-cover uno-rounded-[12px]" sizes="(min-width:768px) 160px, 120px" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-4">{{ $t('pages.ebooks.otherTitle') }}</h2>
          <div class="uno-space-y-6">
            <div v-for="item in others" :key="item.id" class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
              <div class="uno-p-6 md:uno-p-8 uno-flex uno-gap-6">
                <div class="uno-w-[140px] uno-h-[140px] uno-rounded-[16px] uno-bg-[var(--ui-input)] uno-relative">
                  <NuxtImg :src="item.image" :alt="item.title" class="uno-w-full uno-h-full uno-object-cover uno-rounded-[16px]" sizes="(min-width:768px) 140px, 120px" />
                  <span v-if="item.sale" class="uno-absolute uno-top-2 uno-right-2 uno-text-xs uno-bg-[var(--color-pink-1)] uno-text-white uno-rounded-full uno-px-3 uno-py-1">{{ $t('pages.ebooks.sale') }}</span>
                </div>
                <div class="uno-flex-1 uno-flex uno-flex-col uno-gap-2">
                  <h3 class="uno-text-lg md:uno-text-xl uno-font-['Outfit'] uno-font-bold uno-text-[var(--ui-foreground)]">{{ item.title }}</h3>
                  <div class="uno-flex uno-items-center uno-gap-3">
                    <span class="uno-text-[var(--ui-muted-foreground)] uno-line-through">{{ item.originalPrice }}</span>
                    <span class="uno-text-[22px] uno-font-bold uno-text-[var(--ui-primary)]">{{ item.price }}</span>
                    <span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">{{ $t('pages.ebooks.oneTime') }}</span>
                  </div>
                  <div class="uno-flex uno-gap-3 uno-pt-2">
                    <UButton class="uno-h-[48px] uno-rounded-[12px] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white">{{ $t('pages.ebooks.buyNow') }}</UButton>
                    <UButton variant="ghost" class="uno-h-[48px] uno-rounded-[12px] uno-border uno-border-[var(--ui-border)] hover:uno-border-[var(--ui-primary)] hover:uno-text-[var(--ui-primary)]">{{ $t('pages.ebooks.readMore') }}</UButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()
const others = [
  {
    id: 1,
    title: t('pages.ebooks.cardTitle'),
    image: '/images/blog/1.png',
    originalPrice: 'CN¥40',
    price: 'CN¥5.49',
    sale: true
  },
  {
    id: 2,
    title: t('pages.ebooks.cardTitle'),
    image: '/images/blog/3.png',
    originalPrice: 'CN¥40',
    price: 'CN¥5.49',
    sale: true
  }
]
</script>

<style scoped>
.page-container { max-width: min(96%, 1440px); }
</style>
