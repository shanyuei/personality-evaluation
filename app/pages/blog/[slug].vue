<template>
  <main class="page-container uno-py-64px blog-page">
    <section>
      <p class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#011813] uno-leading-[20px] md:uno-leading-[24px]">{{ $t('pages.blog.detail.breadcrumb') }}</p>
    </section>

    <section class="uno-my-[24px] md:uno-my-[40px]">
      <div class="uno-grid md:uno-grid-cols-3 uno-gap-[24px]">
        <div class="md:uno-col-span-2">
          <div v-if="article" class="uno-rounded-[24px] uno-overflow-hidden">
            <NuxtImg :src="article.image" :alt="article.title" width="948" height="420" class="uno-w-full uno-h-auto" />
          </div>

          <div v-if="article" class="uno-mt-24px">
            <p class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px]">{{ article.author.name }} · {{ article.readTime }} min</p>
            <h1 class="uno-font-semibold uno-text-[28px] md:uno-text-[48px] uno-text-[#011813] uno-leading-[36px] md:uno-leading-[58px] uno-mt-8px">{{ article.title }}</h1>
            <p class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px] uno-mt-8px">{{ article.excerpt }}</p>
          </div>

          <div class="uno-mt-24px md:uno-mt-40px">
            <h2 class="uno-font-semibold uno-text-[22px] md:uno-text-[28px] uno-text-[#011813] uno-leading-[30px] md:uno-leading-[36px]">{{ $t('pages.blog.detail.sections.contentCreation.title') }}</h2>
            <p class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px] uno-mt-8px">{{ $t('pages.blog.detail.sections.contentCreation.body') }}</p>
            <div class="uno-mt-8px">
              <div class="uno-font-medium uno-text-[14px] md:uno-text-[16px] uno-text-[#011813] uno-leading-[20px] md:uno-leading-[24px]">{{ $t('pages.blog.detail.sections.keyTakeaway') }}</div>
              <p class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px]">{{ $t('pages.blog.detail.sections.contentCreation.takeaway') }}</p>
            </div>
          </div>

          <div class="uno-mt-24px md:uno-mt-40px">
            <h2 class="uno-font-semibold uno-text-[22px] md:uno-text-[28px] uno-text-[#011813] uno-leading-[30px] md:uno-leading-[36px]">{{ $t('pages.blog.detail.sections.socialMedia.title') }}</h2>
            <p class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px] uno-mt-8px">{{ $t('pages.blog.detail.sections.socialMedia.body') }}</p>
          </div>

          <div class="uno-mt-24px md:uno-mt-40px">
            <h2 class="uno-font-semibold uno-text-[22px] md:uno-text-[28px] uno-text-[#011813] uno-leading-[30px] md:uno-leading-[36px]">{{ $t('pages.blog.detail.sections.analytics.title') }}</h2>
            <p class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px] uno-mt-8px">{{ $t('pages.blog.detail.sections.analytics.body') }}</p>
          </div>

          <div class="uno-mt-24px md:uno-mt-40px">
            <h2 class="uno-font-semibold uno-text-[22px] md:uno-text-[28px] uno-text-[#011813] uno-leading-[30px] md:uno-leading-[36px]">{{ $t('pages.blog.detail.sections.video.title') }}</h2>
            <p class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px] uno-mt-8px">{{ $t('pages.blog.detail.sections.video.body') }}</p>
            <div class="uno-mt-16px uno-rounded-[16px] uno-bg-[var(--ui-muted)] uno-h-[160px]"></div>
          </div>

          <div class="uno-mt-24px md:uno-mt-40px">
            <h2 class="uno-font-semibold uno-text-[22px] md:uno-text-[28px] uno-text-[#011813] uno-leading-[30px] md:uno-leading-[36px]">{{ $t('pages.blog.detail.sections.copywriting.title') }}</h2>
            <p class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px] uno-mt-8px">{{ $t('pages.blog.detail.sections.copywriting.body') }}</p>
          </div>
        </div>

        <div>
          <div class="uno-rounded-2xl uno-mb-6">
            <h3 class="uno-text-lg uno-font-semibold uno-text-gray-900 uno-mb-4">{{ $t('pages.blog.sidebar.recent') }}</h3>
            <ul class="uno-space-y-4">
              <li v-for="recent in recentArticles" :key="recent.id">
                <a :href="`/blog/${recent.slug}`" class="uno-flex uno-gap-4 uno-group">
                  <div class="uno-rounded-[12px] uno-overflow-hidden uno-flex-shrink-0">
                    <NuxtImg :src="recent.image" :alt="recent.title" width="72" height="72" />
                  </div>
                  <div>
                    <h4 class="uno-font-medium uno-text-[18px] uno-text-[#011813] uno-leading-[26px] group-hover:uno-text-[var(--ui-primary)] uno-transition-colors uno-duration-200 uno-line-clamp-1">{{ recent.title }}</h4>
                    <p class="uno-font-normal uno-text-[14px] uno-text-[#4e5255] uno-leading-[20px] uno-mt-1 uno-line-clamp-2">{{ recent.excerpt }}</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div class="uno-rounded-2xl uno-py-6">
            <h3 class="uno-text-lg uno-font-semibold uno-text-gray-900 uno-mb-3">{{ $t('pages.blog.sidebar.follow') }}</h3>
            <div class="uno-flex uno-gap-3">
              <a href="#" aria-label="Twitter" class="uno-w-[32px] uno-h-[32px] uno-rounded-full uno-flex uno-items-center uno-justify-center">
                <NuxtImg src="/images/footer/twitter.png" alt="twitter" width="32" height="32" />
              </a>
              <a href="#" aria-label="Facebook" class="uno-w-[32px] uno-h-[32px] uno-rounded-full uno-flex uno-items-center uno-justify-center">
                <NuxtImg src="/images/footer/facebook.png" alt="facebook" width="32" height="32" />
              </a>
              <a href="#" aria-label="Instagram" class="uno-w-[32px] uno-h-[32px] uno-rounded-full uno-flex uno-items-center uno-justify-center">
                <NuxtImg src="/images/footer/instagram.png" alt="instagram" width="32" height="32" />
              </a>
              <a href="#" aria-label="LinkedIn" class="uno-w-[32px] uno-h-[32px] uno-rounded-full uno-flex uno-items-center uno-justify-center">
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
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useArticles } from '~/composables/useArticles'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))

const { articles } = useArticles()

const article = computed(() => articles.value.find(a => a.slug === slug.value))
const recentArticles = computed(() => articles.value.slice(0, 3))
</script>

<style scoped>
</style>
