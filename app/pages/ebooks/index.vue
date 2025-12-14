<template>
  <main class="uno-py-10 uno-px-4 sm:uno-px-6">
    <div class="page-container uno-mx-auto">
      <div class="uno-grid uno-gap-6 md:uno-grid-cols-[2fr_1fr] uno-w-full uno-mx-auto">
        <section>
          <h2
            class="uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-4">
            {{ $t('pages.ebooks.myTitle') }}</h2>
          <div class="uno-space-y-6">
            <div v-for="book in primaryBooks" :key="book.id"
              class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
              <EbookMyCard :title="book.title" :description="book.description"
                :download-text="book.downloadText"
                :read-online-text="book.readOnlineText" :image="book.image" />
            </div>
          </div>
        </section>

        <section>
          <h2
            class="uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-4">
            {{ $t('pages.ebooks.otherTitle') }}</h2>
          <div class="uno-space-y-6">
            <div v-for="item in others" :key="item.id"
              class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
              <EbooksOtherCard :title="item.title" :price="item.price" :original-price="item.originalPrice"
                :sale="item.sale" :image="item.image" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()
const primaryBooks = [
  {
    id: 1,
    title: t('pages.ebooks.primary.title'),
    description: t('pages.ebooks.primary.desc'),
    downloadText: t('pages.ebooks.primary.download'),
    readOnlineText: t('pages.ebooks.primary.readOnline'),
    image: '/images/blog/2.png'
  },
  {
    id: 2,
    title: t('pages.ebooks.primary.title'),
    description: t('pages.ebooks.primary.desc'),
    downloadText: t('pages.ebooks.primary.download'),
    readOnlineText: t('pages.ebooks.primary.readOnline'),
    image: '/images/blog/7.png'
  },
  {
    id: 3,
    title: t('pages.ebooks.primary.title'),
    description: t('pages.ebooks.primary.desc'),
    downloadText: t('pages.ebooks.primary.download'),
    readOnlineText: t('pages.ebooks.primary.readOnline'),
    image: '/images/blog/8.png'
  }
]
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
  },
  {
    id: 3,
    title: t('pages.ebooks.cardTitle'),
    image: '/images/blog/4.png',
    originalPrice: 'CN¥40',
    price: 'CN¥5.49',
    sale: false
  },
  {
    id: 4,
    title: t('pages.ebooks.cardTitle'),
    image: '/images/blog/5.png',
    originalPrice: 'CN¥40',
    price: 'CN¥5.49',
    sale: true
  },
  {
    id: 5,
    title: t('pages.ebooks.cardTitle'),
    image: '/images/blog/6.png',
    originalPrice: 'CN¥40',
    price: 'CN¥5.49',
    sale: false
  }
]
</script>

<style scoped></style>
