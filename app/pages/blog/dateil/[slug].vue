<template>
  <main class="page-container uno-py-46px blog-page">
    <section>
      <p
        class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#011813] uno-leading-[20px] md:uno-leading-[24px]">
        {{ $t('pages.blog.detail.breadcrumb') }}</p>
    </section>

    <section class="uno-my-[24px] md:uno-my-[50px]">
      <div v-if="article" class="uno-rounded-[24px] uno-overflow-hidden">
        <NuxtImg v-if="article?.cover?.url" :src="getImageUrl(article.cover?.url || '')" :alt="article.title"
        width="1200" height="460"
          class="uno-w-full uno-h-420px uno-object-cover" />
      </div>
      <div class="uno-flex uno-flex-col md:uno-flex-row uno-gap-[24px] uno-mt-56px">
        <div v-if="article" class="uno-flex-1 uno-min-w-0">
          <p
            class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px]">
            {{ article.updatedBy.firstname + " " + article.updatedBy.lastname }}
            ·
            {{ formatDate(article.publishedAt, 'relative') }}
          </p>
          <h1
            class="uno-font-semibold uno-text-[28px] md:uno-text-[48px] uno-text-[#011813] uno-leading-[36px] md:uno-leading-[58px] uno-mt-8px">
            {{ article.title }}</h1>
          <p
            class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px] uno-mt-8px">
            {{ article.excerpt }}</p>

          <div class="uno-mt-24px md:uno-mt-40px" v-html="article.content" />
        </div>

        <div class="uno-w-full md:uno-w-[384px] uno-shrink-0">
          <div class="uno-rounded-2xl uno-mb-6">
            <h3 class="uno-text-[24px] uno-font-semibold uno-text-gray-900 uno-mb-4">{{ $t('pages.blog.sidebar.recent')
            }}
            </h3>
            <ul class="uno-space-y-4">
              <li v-for="recent in recentArticles" :key="recent.id">
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
                        class="uno-font-medium uno-text-[20px] uno-text-[#011813] uno-leading-[26px] group-hover:uno-text-[var(--ui-primary)] uno-transition-colors uno-duration-200 uno-line-clamp-1">
                        {{ recent.title }}</h4>
                      <p
                        class="uno-font-normal uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] uno-mt-1 uno-line-clamp-2">
                        {{ recent.excerpt }}</p>
                    </div>
                  </div>
                </AppLink>
              </li>
            </ul>
          </div>

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
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleBySlug, getLatestArticles, updatePreviewBySlug } from '~/api/blog'
import type { Post } from '~/types/Post'



const route = useRoute()
const { t } = useI18n()
const slug = computed(() => String(route.params.slug || ''))


const article = ref<Post>()
// const article = computed(() => articles.value.find(a => a.slug === slug.value))
const recentArticles = ref<Post[]>([])

getArticleBySlug(slug.value).then(res => {
  console.log('getArticleBySlug', res.data);
  article.value = res.data.value.data[0]
})
getLatestArticles().then(res => {
  recentArticles.value = res.data.value.data
})
updatePreviewBySlug(slug.value);
// 使用文章标题作为页面标题，如果没有文章则使用默认标题
definePageMeta({
  title: () => 'seo.blog.slug.title',
  layoutShowPageTopIcons3: true,
  layoutShowPageTopIcons: false,
  layoutPageTopIcon3Class: 'uno-top-150px uno-right-150px',
})

useSeoMeta({
  title: () => article.value ? `${article.value.title} - ${t('seo.blog.slug.title')}` : t('seo.blog.title'),
  description: () => article.value ? article.value.excerpt : t('seo.blog.slug.description')
})
</script>

<style scoped></style>
