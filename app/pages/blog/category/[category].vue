<template>
  <main class="page-container uno-py-64px blog-page">
    <section class="">
      <p class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#011813] uno-leading-[20px] md:uno-leading-[24px]">Home / Blog</p>
      <h1 class="uno-font-semibold uno-text-[28px] md:uno-text-[72px] uno-text-[#011813] uno-leading-[36px] md:uno-leading-[86px] uno-mt-12px">
        {{ $t('pages.blog.hero.title') }}
      </h1>
    </section>

    <section class="uno-my-[56px]">
      <div class="uno-grid md:uno-grid-cols-2 uno-gap-[24px]">
        <NuxtLink v-if="filteredArticles.length" :to="`/blog/slug/${filteredArticles[0].slug}`" class="uno-rounded-2xl uno-overflow-hidden">
          <div>
            <NuxtImg :src="filteredArticles[0].image" :alt="filteredArticles[0].title" width="588" height="392" />
            <div class="uno-py-6">
              <p class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px] uno-mb-1">{{ filteredArticles[0].author.name }} · {{ filteredArticles[0].readTime }} min</p>
              <h3 class="uno-font-semibold uno-text-[20px] md:uno-text-[24px] uno-text-[#011813] uno-leading-[28px] md:uno-leading-[33px] uno-mb-3">{{ filteredArticles[0].title }}</h3>
              <p class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px] uno-line-clamp-3">{{ filteredArticles[0].excerpt }}</p>
            </div>
          </div>
        </NuxtLink>

        <div class="uno-hidden md:uno-grid md:uno-grid-cols-2 uno-gap-[24px]">
          <NuxtLink v-for="a in smallArticles" :key="a.id" :to="`/blog/slug/${a.slug}`" class="uno-rounded-2xl uno-overflow-hidden">
            <NuxtImg width="282" height="188" :src="a.image" :alt="a.title" />
            <div class="uno-py-4">
              <p class="uno-text-sm uno-text-gray-500 uno-mb-1">{{ a.author.name }} · {{ a.readTime }} min</p>
              <h4 class="uno-text-lg uno-font-semibold uno-text-gray-900 uno-mb-2">{{ a.title }}</h4>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="uno-mt-60px md:uno-mt-120px">
      <div class="uno-text-center uno-mb-10">
        <h2 class="uno-font-semibold uno-text-[48px] uno-text-[#011813] uno-leading-[58px] uno-text-center">{{
          $t('pages.blog.exploreTitle') }}</h2>
      </div>

      <div class="uno-flex uno-flex-col lg:uno-flex-row uno-gap-8">
        <div class="lg:uno-w-2/3">
          <div class="uno-grid sm:uno-grid-cols-2 md:uno-grid-cols-3 uno-gap-[24px]">
            <NuxtLink v-for="a in otherVisibleArticles" :key="a.id" :to="`/blog/slug/${a.slug}`" class="uno-rounded-2xl">
              <NuxtImg :src="a.image" :alt="a.title" width="384" height="282" />
              <p class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px] uno-mt-2 uno-line-clamp-2">{{ a.author.name }} · {{ a.readTime }} min</p>
              <h4 class="uno-font-medium uno-text-[20px] md:uno-text-[24px] uno-text-[#011813] uno-leading-[28px] md:uno-leading-[33px] uno-line-clamp-2">{{ a.title }}</h4>
            </NuxtLink>
          </div>
          <div class="uno-flex uno-justify-center uno-mt-24px">
            <button
              :class="!hasMoreOther ? 'uno-opacity-50 uno-cursor-not-allowed uno-border-[var(--ui-border)] uno-text-[var(--ui-muted-foreground)]' : ''"
              :disabled="!hasMoreOther"
              class="uno-h-[40px] uno-px-24px uno-rounded-[999px] uno-bg-transparent uno-border uno-border-[var(--ui-primary)] uno-text-[var(--ui-primary)] uno-font-['Outfit'] uno-font-medium hover:uno-opacity-80"
              @click="otherLimit += 6">
              Load more
            </button>
          </div>
        </div>

        <div class="lg:uno-w-1/3">
      

          <div class="uno-rounded-2xl uno-mb-6">
            <h3 class="uno-text-lg uno-font-semibold uno-text-gray-900 uno-mb-4">{{ $t('pages.blog.sidebar.recent') }}
            </h3>
            <ul class="uno-space-y-4">
              <li v-for="recent in recentArticles" :key="recent.id">
                <NuxtLink :to="`/blog/slug/${recent.slug}`" class="uno-flex uno-gap-4 uno-group">
                  <div class="uno-rounded-[12px] uno-overflow-hidden uno-flex-shrink-0">
                    <NuxtImg :src="recent.image" :alt="recent.title" width="102" height="102" />
                  </div>
                  <div>
                    <h4
                      class="uno-font-medium uno-text-[20px] uno-text-[#011813] uno-leading-[30px] group-hover:uno-text-[var(--ui-primary)] uno-transition-colors uno-duration-200 uno-line-clamp-1">
                      {{ recent.title }}</h4>
                    <p class="uno-font-normal uno-text-[16px] uno-text-[#4e5255] uno-leading-[24px] uno-mt-1 uno-line-clamp-2">{{
                      recent.excerpt }}</p>
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="uno-rounded-2xl uno-py-6">
            <h3 class="uno-text-lg uno-font-semibold uno-text-gray-900 uno-mb-3">{{ $t('pages.blog.sidebar.tags') }}
            </h3>
            <div class="uno-flex uno-flex-wrap uno-gap-3">
              <span v-for="tag in tags" :key="tag"
                :class="tag === activeTag ? 'uno-border-[var(--color-pink-1)] uno-bg-transparent uno-text-[#011813]' : 'uno-border-[var(--ui-border)] uno-bg-transparent uno-text-[#011813]'"
                class="uno-text-[14px] uno-px-3 uno-py-1 uno-rounded-[999px] uno-border">#{{ tag }}</span>
            </div>
          </div>

          <div class="uno-rounded-2xl uno-py-6">
            <h3 class="uno-text-lg uno-font-semibold uno-text-gray-900 uno-mb-3">{{ $t('pages.blog.sidebar.follow') }}
            </h3>
            <div class="uno-flex uno-gap-3">
              <a href="#" aria-label="Twitter"
                class="uno-w-[32px] uno-h-[32px] uno-rounded-full uno-flex uno-items-center uno-justify-center">
                <NuxtImg src="/images/footer/twitter.png" alt="twitter" width="32" height="32" />
              </a>
              <a href="#" aria-label="Facebook"
                class="uno-w-[32px] uno-h-[32px] uno-rounded-full uno-flex uno-items-center uno-justify-center">
                <NuxtImg src="/images/footer/facebook.png" alt="facebook" width="32" height="32" />
              </a>
              <a href="#" aria-label="Instagram"
                class="uno-w-[32px] uno-h-[32px] uno-rounded-full uno-flex uno-items-center uno-justify-center">
                <NuxtImg src="/images/footer/instagram.png" alt="instagram" width="32" height="32" />
              </a>
              <a href="#" aria-label="LinkedIn"
                class="uno-w-[32px] uno-h-[32px] uno-rounded-full uno-flex uno-items-center uno-justify-center">
                <NuxtImg src="/images/footer/linkedin.png" alt="linkedin" width="32" height="32" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useArticles } from '~/composables/useArticles'

const route = useRoute()
const category = computed(() => String(route.params.category || ''))

const searchQuery = ref('')
const tags = ref(['CareerTips', 'Productivity', 'Tools', 'TechInnovation', 'Leadership'])
const activeTag = ref('Productivity')

const { articles } = useArticles()

const filteredArticles = computed(() => {
  const q = searchQuery.value.toLowerCase()
  return articles.value.filter(a => a.category === category.value)
    .filter(a => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q))
})

const smallArticles = computed(() => filteredArticles.value.slice(1, 5))
const otherArticles = computed(() => filteredArticles.value.slice(5))
const otherLimit = ref(6)
const otherVisibleArticles = computed(() => otherArticles.value.slice(0, otherLimit.value))
const hasMoreOther = computed(() => otherLimit.value < otherArticles.value.length)

const recentArticles = computed(() => {
  return articles.value.slice(0, 3)
})

</script>

<style scoped>
</style>
