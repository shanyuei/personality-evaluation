<template>
  <main class="page-container uno-py-46px blog-page">
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
        <AppLink v-if="recommendArticles && recommendArticles[0]" :is-link="!!recommendArticles[0]?.slug" :to="{
          name: 'blog-dateil-slug',
          params: {
            slug: recommendArticles[0]?.slug || ''
          }
        }" class="uno-rounded-2xl uno-overflow-hidden">
          <div>
            <NuxtImg :src="getImageUrl(recommendArticles[0]?.cover?.url)" :alt="recommendArticles[0].title" width="588"
              height="392" class="uno-rounded-2xl uno-overflow-hidden" />
            <div class="uno-py-6">
              <p
                class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px] uno-mb-1">
                <!-- {{ recommendArticles[0].author.name }}  -->
                {{ recommendArticles[0].updatedBy.firstname + " " + recommendArticles[0].updatedBy.lastname }}
                <!-- ·
                {{ formatDate(recommendArticles[0].publishedAt, 'relative') }} -->
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
        </AppLink>

        <!-- 4 small cards -->
        <div class="uno-hidden md:uno-grid md:uno-grid-cols-2 uno-gap-[24px]">
          <AppLink v-for="a in smallArticles" :key="a.id" :is-link="!!a?.slug" :to="{
            name: 'blog-dateil-slug',
            params: {
              slug: a?.slug || ''
            }
          }">
            <div class="uno-rounded-2xl uno-overflow-hidden">
              <NuxtImg width="282" height="188" :src="getImageUrl(a.cover?.url)" :alt="a.title"
                class="uno-rounded-2xl uno-overflow-hidden" />
              <div class="uno-py-4">
                <p class="uno-text-[16px] uno-text-gray-500 uno-mb-1">
                  {{ a.updatedBy.firstname + " " + a.updatedBy.lastname }}
                  <!-- ·
                  {{ formatDate(a.publishedAt, 'relative') }} -->
                </p>
                <h4 class="uno-text-[20px] uno-font-500 uno-text-gray-900 uno-mb-2">{{ a.title }}</h4>
              </div>
            </div>
          </AppLink>
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
        <div class="lg:uno-w-3/5">
          <div class="uno-grid sm:uno-grid-cols-2 md:uno-grid-cols-3 uno-gap-6">
            <AppLink v-for="a in articles" :key="a.id" :is-link="!!a?.slug" :to="{
              name: 'blog-dateil-slug',
              params: {
                slug: a?.slug || ''
              }
            }">
              <div class="uno-rounded-2xl">
                <NuxtImg :src="getImageUrl(a.cover?.url)" :alt="a.title" width="384" height="282"
                  class="uno-rounded-2xl uno-overflow-hidden" />
                <p
                  class="uno-font-normal uno-text-[16px] uno-text-[#4e5255] uno-leading-[24px] uno-mt-2 uno-line-clamp-2">
                  {{ a.updatedBy.firstname + " " + a.updatedBy.lastname }}
                  <!-- · {{ formatDate(a.publishedAt, 'relative') }} -->
                </p>
                <h4 class="uno-font-medium uno-text-[24px] uno-text-[#011813] uno-leading-[33px] uno-line-clamp-2">{{
                  a.title }}</h4>
              </div>
            </AppLink>
          </div>
          <div class="uno-flex uno-justify-center uno-mt-24px">
            <button
              :class="!hasMoreOther ? 'uno-opacity-50 uno-cursor-not-allowed uno-border-[var(--ui-border)] uno-text-[var(--ui-muted-foreground)]' : ''"
              :disabled="!hasMoreOther"
              class="uno-h-[40px] uno-px-24px uno-rounded-[999px] uno-bg-transparent uno-border uno-border-[var(--color-pink-1)] uno-text-[var(--color-pink-1)] uno-font-['Outfit'] uno-font-medium hover:uno-opacity-80"
              @click="loadMoreData">
              {{ $t('pages.blog.loadMore') }}
            </button>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:uno-w-2/5">
          <!-- Categories -->
          <!-- <div class="uno-rounded-2xl uno-mb-12">
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
          </div> -->

          <!-- Recent Blogs -->
          <div class="uno-rounded-2xl uno-mb-6">
            <h3 class="uno-text-[24px] uno-font-semibold uno-text-gray-900 uno-mb-4">{{ $t('pages.blog.sidebar.recent')
              }}
            </h3>
            <ul class="uno-space-y-4">
              <li v-for="recent in previewArticles" :key="recent.id">
                <AppLink :is-link="!!recent?.slug" :to="{
                  name: 'blog-dateil-slug',
                  params: {
                    slug: recent?.slug || ''
                  }
                }">
                  <div class="uno-flex uno-gap-4 uno-group">
                    <NuxtImg :src="getImageUrl(recent.cover?.url)" :alt="recent.title" width="102"
                      class="uno-rounded-[12px]" height="102" />
                    <div>
                      <h4
                        class="uno-font-medium uno-text-[20px] uno-text-[#011813] uno-leading-[30px] group-hover:uno-text-[var(--color-pink-1)] uno-transition-colors uno-duration-200 uno-line-clamp-1">
                        {{ recent.title }}</h4>
                      <p
                        class="uno-font-normal uno-text-[16px] uno-text-[#4e5255] uno-leading-[24px] uno-mt-1 uno-line-clamp-2">
                        {{
                          recent.excerpt }}</p>
                    </div>
                  </div>
                </AppLink>
              </li>
            </ul>
          </div>

          <!-- Tags -->
          <div class="uno-rounded-2xl uno-py-6">
            <h3 class="uno-text-[24px] uno-font-semibold uno-text-gray-900 uno-mb-3">{{ $t('pages.blog.sidebar.tags') }}
            </h3>
            <div class="uno-flex uno-flex-wrap uno-gap-3">
              <span v-for="tag in tags" :key="tag.documentId" role="button" :class="[
                'uno-text-[16px] uno-font-400 uno-px-3 uno-py-1 uno-rounded-[999px] uno-border uno-bg-transparent uno-text-[#4E5255] uno-cursor-pointer hover:uno-border-[var(--color-pink-1)] hover:uno-text-[#011813]',
                activeTagSlug === tag.slug ? 'uno-border-[var(--color-pink-1)] !uno-text-[#011813]' : 'uno-border-[#E7E7E8]'
              ]" @click="onTagClick(tag)">{{ tag.name }}</span>
            </div>
          </div>

          <!-- Follow us -->
          <div class="uno-rounded-2xl uno-py-6 uno-flex uno-items-center uno-gap-[12px]">
            <h3 class="uno-text-[18px] uno-font-400 uno-text-gray-900">{{ $t('pages.blog.sidebar.follow') }}
            </h3>
            <div class="uno-flex uno-gap-[12px]">
              <a href="#" aria-label="Twitter"
                class="uno-w-[40px] uno-h-[40px] uno-rounded-full uno-flex uno-items-center uno-justify-center">
                <NuxtImg src="/images/footer/twitter.png" alt="twitter" width="40" height="40" />
              </a>
              <a href="#" aria-label="Facebook"
                class="uno-w-[40px] uno-h-[40px] uno-rounded-full uno-flex uno-items-center uno-justify-center">
                <NuxtImg src="/images/footer/facebook.png" alt="facebook" width="40" height="40" />
              </a>
              <a href="#" aria-label="Instagram"
                class="uno-w-[40px] uno-h-[40px] uno-rounded-full uno-flex uno-items-center uno-justify-center">
                <NuxtImg src="/images/footer/instagram.png" alt="instagram" width="40" height="40" />
              </a>
              <a href="#" aria-label="LinkedIn"
                class="uno-w-[40px] uno-h-[40px] uno-rounded-full uno-flex uno-items-center uno-justify-center">
                <NuxtImg src="/images/footer/linkedin.png" alt="linkedin" width="40" height="40" />
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
import { getRecommendArticles, getAllTags, getAllArticles, getLatestArticles } from '~/api/blog'

import type { Category } from '~/types/Category'
import type { Post } from '~/types/Post';
import type { Tag } from '~/types/Tag'

const { t } = useI18n();

definePageMeta({
  layoutShowCurious: true,
  layoutShowPageTopIcons3: true,
  layoutShowPageTopIcons: false,
  title: () => 'seo.blog.title'
})

useSeoMeta({
  title: () => t('seo.blog.title'),
  description: () => t('seo.blog.description'),
})
const route = useRoute();

const hasMoreOther = ref(false);
const tags = ref<Tag[]>([])
// 当前页码
const currentPage = ref(1);
const recommendArticles = ref<Post[]>([])
const articles = ref<Post[]>([])
// 预览前五
const previewArticles = ref<Post[]>([])
// const categories = ref<Category[]>([])
const activeTagSlug = ref<string | null>(null)


getAllTags().then(({ data }) => {
  tags.value = data.value?.data || [];
})
getRecommendArticles(route.params.slug).then(({ data }) => {
  const list = data.value?.data;
  recommendArticles.value = Array.isArray(list) ? list : [];
})
getLatestArticles(route.params.slug).then(({ data }) => {
  const list = data.value?.data;
  previewArticles.value = Array.isArray(list) ? list : [];
})
const getPageData = async (page: number = 1, append: boolean = false) => {
  const { data } = await getAllArticles(page, activeTagSlug.value ?? undefined, route.params.slug);
  const dataV = data.value;

  // 如果是追加模式，将新数据添加到现有数组中
  if (append) {
    articles.value = [...articles.value, ...dataV.data];
  } else {
    articles.value = dataV.data;
  }

  hasMoreOther.value = articles.value.length < (dataV?.meta?.total ?? 0);
  return data;
}
getPageData(1);

const smallArticles = computed(() => {
  const list = Array.isArray(recommendArticles.value) ? recommendArticles.value : [];
  return list.slice(1, 5);
});



// 加载更多数据
const loadMoreData = async () => {
  if (hasMoreOther.value) {
    currentPage.value++;
    await getPageData(currentPage.value, true);
  }
};

const onTagClick = (tag: Tag) => {
  activeTagSlug.value = activeTagSlug.value === tag.slug ? null : tag.slug
  currentPage.value = 1
  getPageData(1)
}


</script>

<style scoped>
/* Blog page specific styles */
</style>
