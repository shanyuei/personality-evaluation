<template>
  <main class="page-container uno-py-64px blog-page">
    <!-- Hero -->
    <section class="">
      <p
        class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#011813] uno-leading-[20px] md:uno-leading-[24px]">
        {{ $t('pages.blog.breadcrumb.list') }}</p>
      <h1
        class="uno-font-semibold uno-text-[28px] md:uno-text-[72px] uno-text-[#011813] uno-leading-[36px] md:uno-leading-[86px] uno-mt-12px">
        {{ $t('pages.blog.hero.title') }}
      </h1>
    </section>

    <!-- Featured grid: 1 large + 4 small -->
    <section class="uno-my-[56px]">
      <div class="uno-grid md:uno-grid-cols-2 uno-gap-[24px]">
        <!-- Large card -->
        <NuxtLink v-if="recommendArticles[0]" :to="`/blog/${recommendArticles[0].slug}`"
          class="uno-rounded-2xl uno-overflow-hidden">
          <div>
            <NuxtImg :src="getImageUrl(recommendArticles[0].cover[0].url)" :alt="recommendArticles[0].title" width="588"
              height="392" class="uno-rounded-2xl uno-overflow-hidden" />
            <div class="uno-py-6">
              <p
                class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px] uno-mb-1">
                <!-- {{ recommendArticles[0].author.name }}  -->
                ·
                {{ formatDate(recommendArticles[0].publishedAt,'datetime') }}
                <!-- min -->
              </p>
              <h3
                class="uno-font-semibold uno-text-[20px] md:uno-text-[24px] uno-text-[#011813] uno-leading-[28px] md:uno-leading-[33px] uno-mb-3">
                {{
                  recommendArticles[0].title }}</h3>
              <p
                class=" uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px] uno-line-clamp-3">
                {{
                  recommendArticles[0].excerpt }}</p>
            </div>
          </div>
        </NuxtLink>

        <!-- 4 small cards -->
        <div class="uno-hidden md:uno-grid md:uno-grid-cols-2 uno-gap-[24px]">
          <NuxtLink v-for="a in smallArticles" :key="a.id" :to="`/blog/${a.slug}`"
            class="uno-rounded-2xl uno-overflow-hidden">
            <NuxtImg width="282" height="188" :src="getImageUrl(a.cover[0].url)" :alt="a.title" class="uno-rounded-2xl uno-overflow-hidden" />
            <div class="uno-py-4">
              <p class="uno-text-sm uno-text-gray-500 uno-mb-1">
                <!-- {{ a.author.name }} -->
                · 
                {{ formatDate(a.publishedAt,'date') }}
              </p>
              <h4 class="uno-text-lg uno-font-semibold uno-text-gray-900 uno-mb-2">{{ a.title }}</h4>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Explore + List -->
    <section class="uno-mt-60px md:uno-mt-120px">
      <div class="uno-text-center uno-mb-10">
        <h2 class="uno-font-semibold uno-text-[48px] uno-text-[#011813] uno-leading-[58px] uno-text-center">{{
          $t('pages.blog.exploreTitle') }}</h2>
      </div>

      <div class="uno-flex uno-flex-col lg:uno-flex-row uno-gap-8">
        <!-- Grid -->
        <div class="lg:uno-w-2/3">
          <div class="uno-grid sm:uno-grid-cols-2 md:uno-grid-cols-3 uno-gap-6">
            <NuxtLink v-for="a in articles" :key="a.id" :to="`/blog/${a.slug}`" class="uno-rounded-2xl">
              <NuxtImg :src="getImageUrl(a.cover[0].url)" :alt="a.title" width="384" height="282" class="uno-rounded-2xl uno-overflow-hidden" />
              <p
                class="uno-font-normal uno-text-[16px] uno-text-[#4e5255] uno-leading-[24px] uno-mt-2 uno-line-clamp-2">
                <!-- {{ a.author.name }} -->
                 · {{ formatDate(a.publishedAt,'date') }}</p>
              <h4 class="uno-font-medium uno-text-[24px] uno-text-[#011813] uno-leading-[33px] uno-line-clamp-2">{{
                a.title }}</h4>
            </NuxtLink>
          </div>
          <div class="uno-flex uno-justify-center uno-mt-24px">
            <button
              :class="!hasMoreOther ? 'uno-opacity-50 uno-cursor-not-allowed uno-border-[var(--ui-border)] uno-text-[var(--ui-muted-foreground)]' : ''"
              :disabled="!hasMoreOther"
              class="uno-h-[40px] uno-px-24px uno-rounded-[999px] uno-bg-transparent uno-border uno-border-[var(--ui-primary)] uno-text-[var(--ui-primary)] uno-font-['Outfit'] uno-font-medium hover:uno-opacity-80"
              @click="loadMoreData">
              {{ $t('pages.blog.loadMore') }}
            </button>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:uno-w-1/3">
          <!-- Categories -->
          <div class="uno-rounded-2xl uno-mb-12">
            <h3 class="uno-text-[22px] uno-font-['Outfit'] uno-font-semibold uno-text-[#011813] uno-mb-4">{{
              $t('pages.blog.sidebar.categories') }}</h3>
            <ul class="uno-space-y-3">
              <li v-for="(c, i) in categories" :key="c.documentId">
                <NuxtLink :to="`/blog/category/${c.slug}`"
                  class="uno-flex uno-items-center hover:uno-text-[var(--color-pink-1)]">
                  <span class="uno-text-[18px] uno-font-['Outfit'] uno-font-medium">{{ c.name }}</span>
                  <span class="uno-text-[18px] uno-ml-2">({{ c.posts.count }})</span>
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Recent Blogs -->
          <div class="uno-rounded-2xl uno-mb-6">
            <h3 class="uno-text-lg uno-font-semibold uno-text-gray-900 uno-mb-4">{{ $t('pages.blog.sidebar.recent') }}
            </h3>
            <ul class="uno-space-y-4">
              <li v-for="recent in previewArticles" :key="recent.id">
                <NuxtLink :to="`/blog/${recent.slug}`" class="uno-flex uno-gap-4 uno-group">
                  <div class="uno-rounded-[12px] uno-overflow-hidden uno-flex-shrink-0">
                    <NuxtImg :src="getImageUrl(recent.cover[0].url)" :alt="recent.title" width="102" height="102" />
                  </div>
                  <div>
                    <h4
                      class="uno-font-medium uno-text-[20px] uno-text-[#011813] uno-leading-[30px] group-hover:uno-text-[var(--ui-primary)] uno-transition-colors uno-duration-200 uno-line-clamp-1">
                      {{ recent.title }}</h4>
                    <p
                      class="uno-font-normal uno-text-[16px] uno-text-[#4e5255] uno-leading-[24px] uno-mt-1 uno-line-clamp-2">
                      {{
                        recent.excerpt }}</p>
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Tags -->
          <div class="uno-rounded-2xl uno-py-6">
            <h3 class="uno-text-lg uno-font-semibold uno-text-gray-900 uno-mb-3">{{ $t('pages.blog.sidebar.tags') }}
            </h3>
            <div class="uno-flex uno-flex-wrap uno-gap-3">
              <span v-for="tag in tags" :key="tag.documentId"
                class="uno-text-[14px] uno-px-3 uno-py-1 uno-rounded-[999px] uno-border uno-border-[var(--ui-border)] uno-bg-transparent uno-text-[#011813] hover:uno-border-[var(--color-pink-1)] hover:uno-text-[var(--color-pink-1)]">{{
                  tag.name }}</span>
            </div>
          </div>

          <!-- Follow us -->
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
import { ref, computed } from 'vue';
import { getCategories, getRecommendArticles, getTop5Tags, getAllArticles,getPreviewArticles } from '~/api/blog'

import type { Category } from '~/types/Category'
import type { Post } from '~/types/Post';
import type { Tag } from '~/types/Tag'

const { t } = useI18n();

definePageMeta({
  layoutShowCurious: true,
  title: () => 'seo.blog.title'
})

useSeoMeta({
  title: () => t('seo.blog.title'),
  description: () => t('seo.blog.description'),
})
const hasMoreOther = ref(false);
const tags = ref<Tag[]>([])
// 当前页码
const currentPage = ref(1);
const recommendArticles = ref<Post[]>([])
const articles = ref<Post[]>([])
// 预览前五
const previewArticles = ref<Post[]>([])
const categories = ref<Category[]>([])

getCategories().then(res => {
  categories.value = res.data;
})
getTop5Tags().then(res => {
  tags.value = res.data;
})
getRecommendArticles().then(res => {
  recommendArticles.value = res.data;
})
getPreviewArticles().then(res => {
  previewArticles.value = res.data;
})
const getPageData = async (page: number = 1, append: boolean = false) => {
  const res = await getAllArticles(page);
  
  // 如果是追加模式，将新数据添加到现有数组中
  if (append) {
    articles.value = [...articles.value, ...res.data];
  } else {
    articles.value = res.data;
  }
  
  hasMoreOther.value = articles.value.length < res.meta.total;
  return res;
}
getPageData(1);

const smallArticles = computed(() => recommendArticles.value.slice(1, 5));



// 加载更多数据
const loadMoreData = async () => {
  if (hasMoreOther.value) {
    currentPage.value++;
    await getPageData(currentPage.value, true);
  }
};



</script>

<style scoped>
/* Blog page specific styles */
</style>
