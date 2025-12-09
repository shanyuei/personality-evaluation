<template>
  <main class="">
    <!-- Hero -->
    <section class="uno-py-16 uno-px-6 md:uno-px-10 ">
      <div class="page-container">
        <p class="uno-text-sm uno-text-gray-500">Home / Blog</p>
        <h1 class="uno-text-3xl md:uno-text-5xl uno-font-['Outfit'] uno-font-bold uno-text-[#0F172A] uno-mt-2">
          {{ $t('pages.blog.hero.title') }}
        </h1>
      </div>
    </section>

    <!-- Featured grid: 1 large + 4 small -->
    <section class="uno-py-12 uno-px-6 md:uno-px-10">
      <div class="page-container">
        <div class="uno-grid md:uno-grid-cols-3 uno-gap-6">
          <!-- Large card -->
          <div class="md:uno-col-span-2 uno-rounded-2xl uno-overflow-hidden">
            <div>
              <NuxtImg :src="articles[0].image" :alt="articles[0].title" 
                class="uno-w-full uno-h-64 md:uno-h-[384px] uno-object-cover" />
              <div class="uno-p-6">
                <p class="uno-text-sm uno-text-gray-500 uno-mb-1">{{ articles[0].author.name }} · {{ articles[0].readTime }} min</p>
                <h3 class="uno-text-2xl uno-font-bold uno-text-gray-900 uno-mb-3">{{ articles[0].title }}</h3>
                <p class="uno-text-gray-600 uno-line-clamp-3">{{ articles[0].excerpt }}</p>
              </div>
            </div>
          </div>

          <!-- 4 small cards -->
          <div class="uno-grid sm:uno-grid-cols-2 uno-gap-6">
            <div v-for="a in smallArticles" :key="a.id" class="uno-rounded-2xl uno-overflow-hidden">
              <NuxtImg :src="a.image" :alt="a.title" class="uno-w-full uno-h-36 uno-object-cover" />
              <div class="uno-p-4">
                <p class="uno-text-xs uno-text-gray-500 uno-mb-1">{{ a.author.name }} - {{ a.readTime }} min</p>
                <h4 class="uno-text-base uno-font-semibold uno-text-gray-900">{{ a.title }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Explore + List -->
    <section class="uno-py-12 uno-px-6 md:uno-px-10">
      <div class="page-container">
        <div class="uno-text-center uno-mb-8">
          <h2 class="uno-text-2xl md:uno-text-3xl uno-font-['Outfit'] uno-font-bold uno-text-[#0F172A]">{{
            $t('pages.blog.exploreTitle') }}</h2>
        </div>

        <div class="uno-flex uno-flex-col lg:uno-flex-row uno-gap-8">
          <!-- Grid -->
          <div class="lg:uno-w-2/3">
            <div class="uno-grid sm:uno-grid-cols-2 md:uno-grid-cols-3 uno-gap-6">
              <div v-for="a in otherArticles" :key="a.id" class="uno-rounded-2xl">
                <NuxtImg :src="a.image" :alt="a.title"
                  class="uno-w-full uno-h-48 uno-object-cover uno-rounded-[16px]" />
                <p class="uno-text-xs uno-text-gray-500 uno-mt-2">{{ a.author.name }} · {{ a.readTime }} min</p>
                <h4 class="uno-text-base md:uno-text-lg uno-font-semibold uno-text-gray-900">{{ a.title }}</h4>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:uno-w-1/3">
            <!-- Categories -->
            <div class="uno-rounded-2xl uno-p-6 uno-mb-8">
              <h3 class="uno-text-lg uno-font-semibold uno-text-gray-900 uno-mb-4">{{
                $t('pages.blog.sidebar.categories') }}</h3>
              <ul class="uno-space-y-2">
                <li v-for="(c, i) in categoryCounts" :key="c.label" class="uno-text-gray-700">
                  <a href="#" class="hover:uno-text-[var(--ui-primary)]">
                    <span :class="i === 0 ? 'uno-text-[var(--color-pink-1)]' : ''">{{ c.label }}</span>
                    <span class="uno-text-gray-500"> ({{ c.count }})</span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Recent Blogs -->
            <div class="uno-rounded-2xl uno-p-6 uno-mb-8">
              <h3 class="uno-text-lg uno-font-semibold uno-text-gray-900 uno-mb-4">{{ $t('pages.blog.sidebar.recent') }}
              </h3>
              <ul class="uno-space-y-4">
                <li v-for="recent in recentArticles" :key="recent.id">
                  <a :href="`/blog/${recent.slug}`" class="uno-flex uno-gap-3 uno-group">
                    <div class="uno-w-20 uno-h-20 uno-rounded uno-overflow-hidden uno-flex-shrink-0">
                      <NuxtImg :src="recent.image" :alt="recent.title"
                        class="uno-w-full uno-h-full uno-object-cover group-hover:uno-scale-105 uno-transition-transform uno-duration-300" />
                    </div>
                    <div>
                      <h4
                        class="uno-font-medium uno-text-gray-900 group-hover:uno-text-[var(--ui-primary)] uno-transition-colors uno-duration-200 uno-line-clamp-2">
                        {{ recent.title }}</h4>
                      <p class="uno-text-sm uno-text-gray-500 uno-mt-1 uno-line-clamp-2">{{ recent.excerpt }}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Tags -->
            <div class="uno-rounded-2xl uno-p-6 uno-mb-8">
              <h3 class="uno-text-lg uno-font-semibold uno-text-gray-900 uno-mb-3">{{ $t('pages.blog.sidebar.tags') }}
              </h3>
              <div class="uno-flex uno-flex-wrap uno-gap-2">
                <span v-for="tag in tags" :key="tag"
                  class="uno-text-xs uno-px-3 uno-py-1 uno-rounded-full uno-text-gray-800">#{{ tag }}</span>
              </div>
            </div>

            <!-- Follow us -->
            <div class="uno-rounded-2xl uno-p-6">
              <h3 class="uno-text-lg uno-font-semibold uno-text-gray-900 uno-mb-3">{{ $t('pages.blog.sidebar.follow') }}
              </h3>
              <div class="uno-flex uno-gap-3">
                <a href="#" aria-label="Twitter"
                  class="uno-w-9 uno-h-9 uno-rounded-full uno-flex uno-items-center uno-justify-center">X</a>
                <a href="#" aria-label="Website"
                  class="uno-w-9 uno-h-9 uno-rounded-full uno-flex uno-items-center uno-justify-center">W</a>
                <a href="#" aria-label="Instagram"
                  class="uno-w-9 uno-h-9 uno-rounded-full uno-flex uno-items-center uno-justify-center">IG</a>
                <a href="#" aria-label="LinkedIn"
                  class="uno-w-9 uno-h-9 uno-rounded-full uno-flex uno-items-center uno-justify-center">IN</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
// const { t } = useI18n()
// definePageMeta({
//   title: () => t('pages.blog.title') as string
// })
// useSeoMeta({
//   title: () => t('seo.blog.title') as string,
//   description: () => t('seo.blog.description') as string,
//   ogTitle: () => t('seo.blog.title') as string,
//   ogDescription: () => t('seo.blog.description') as string
// })

const searchQuery = ref('');
const tags = ref(['CareerTips', 'Productivity', 'Tools', 'TechInnovation', 'Leadership']);

const articles = ref([
  {
    id: 1,
    title: 'How to Improve Your Coding Skills in 30 Days',
    excerpt: 'Practical strategies and exercises to boost your programming abilities within a month.',
    image: '/images/blog/1.png',
    category: 'development',
    date: '2023-05-10',
    readTime: 8,
    slug: 'improve-coding-skills',
    author: {
      name: 'Sarah Johnson',
      avatar: '/images/instructors/sarah-johnson.jpg'
    }
  },
  {
    id: 2,
    title: 'The Importance of User Experience in Web Design',
    excerpt: 'Understanding how UX design impacts user satisfaction and business success.',
    image: '/images/blog/2.png',
    category: 'design',
    date: '2023-05-08',
    readTime: 6,
    slug: 'ux-importance',
    author: {
      name: 'Jane Smith',
      avatar: '/images/instructors/jane-smith.jpg'
    }
  },
  {
    id: 3,
    title: 'Top 10 Programming Languages to Learn in 2023',
    excerpt: 'A comprehensive guide to the most in-demand programming languages for the year.',
    image: '/images/blog/3.png',
    category: 'development',
    date: '2023-05-05',
    readTime: 10,
    slug: 'top-programming-languages',
    author: {
      name: 'John Doe',
      avatar: '/images/instructors/john-doe.jpg'
    }
  },
  {
    id: 4,
    title: 'Building Responsive Layouts with CSS Grid',
    excerpt: 'Master CSS Grid to create flexible and responsive web layouts with ease.',
    image: '/images/blog/4.png',
    category: 'development',
    date: '2023-05-02',
    readTime: 7,
    slug: 'css-grid-tutorial',
    author: {
      name: 'David Wilson',
      avatar: '/images/instructors/david-wilson.jpg'
    }
  },
  {
    id: 5,
    title: 'Career Tips for Aspiring Web Developers',
    excerpt: 'Advice on building a successful career in web development.',
    image: '/images/blog/5.png',
    category: 'career',
    date: '2023-04-28',
    readTime: 9,
    slug: 'developer-career-tips',
    author: {
      name: 'Emily Davis',
      avatar: '/images/instructors/emily-davis.jpg'
    }
  },
  {
    id: 6,
    title: 'Color Theory Basics for Web Designers',
    excerpt: 'Understanding color theory principles to create harmonious and effective designs.',
    image: '/images/blog/6.png',
    category: 'design',
    date: '2023-04-25',
    readTime: 6,
    slug: 'color-theory-web-design',
    author: {
      name: 'Jane Smith',
      avatar: '/images/instructors/jane-smith.jpg'
    }
  },
  {
    id: 7,
    title: 'Introduction to TypeScript for JavaScript Developers',
    excerpt: 'Learn how TypeScript can improve your JavaScript code with static typing.',
    image: '/images/blog/7.png',
    category: 'development',
    date: '2023-04-22',
    readTime: 8,
    slug: 'typescript-introduction',
    author: {
      name: 'John Doe',
      avatar: '/images/instructors/john-doe.jpg'
    }
  },
]);

const filteredArticles = computed(() => {
  return articles.value.filter(article => {
    const q = searchQuery.value.toLowerCase();
    return article.title.toLowerCase().includes(q) || article.excerpt.toLowerCase().includes(q);
  });
});

const smallArticles = computed(() => filteredArticles.value.slice(1, 5));
const otherArticles = computed(() => filteredArticles.value.slice(5));

const recentArticles = computed(() => {
  return articles.value.slice(0, 3);
});

const categoryCounts = computed(() => {
  const map: Record<string, number> = {};
  for (const a of articles.value) {
    map[a.category] = (map[a.category] || 0) + 1;
  }
  return Object.entries(map).map(([label, count]) => ({ label, count }));
});

</script>

<style scoped>
/* Blog page specific styles */
</style>
