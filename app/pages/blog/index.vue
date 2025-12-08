<template>
  <main class="uno-min-h-screen uno-bg-white">
    <!-- Page Header -->
    <section class="uno-py-16 uno-px-6 md:uno-px-12 lg:uno-px-24 uno-bg-gray-50">
      <div class="uno-max-w-7xl uno-mx-auto">
        <h1 class="uno-text-3xl md:uno-text-4xl uno-font-bold uno-text-gray-900 uno-mb-4">Our Blog</h1>
        <p class="uno-text-lg uno-text-gray-600 uno-max-w-3xl">
          Stay updated with the latest trends, tutorials, and insights from our experts in the field.
        </p>
      </div>
    </section>

    <!-- Featured Post -->
    <section class="uno-py-12 uno-px-6 md:uno-px-12 lg:uno-px-24 uno-border-b">
      <div class="uno-max-w-7xl uno-mx-auto">
        <h2 class="uno-text-xl uno-font-semibold uno-text-gray-900 uno-mb-6">Featured Article</h2>
        <div class="uno-bg-white uno-rounded-lg uno-shadow-md uno-overflow-hidden hover:uno-shadow-lg uno-transition-all uno-duration-300">
          <div class="md:uno-flex">
            <div class="md:uno-w-1/2">
              <NuxtImg 
                src="/images/blog/featured-article.jpg" 
                alt="Featured Article" 
                class="uno-w-full uno-h-64 md:uno-h-full uno-object-cover"
              />
            </div>
            <div class="uno-p-6 md:uno-w-1/2">
              <div class="uno-flex uno-items-center uno-text-sm uno-text-gray-500 uno-mb-2">
                <span class="uno-bg-blue-100 uno-text-blue-800 uno-px-3 uno-py-1 uno-rounded-full uno-mr-3">Development</span>
                <span>May 15, 2023</span>
              </div>
              <h3 class="uno-text-2xl uno-font-bold uno-text-gray-900 uno-mb-3">
                The Future of Web Development in 2023 and Beyond
              </h3>
              <p class="uno-text-gray-600 uno-mb-4 uno-line-clamp-3">
                Explore the emerging trends and technologies that will shape the future of web development. From AI-powered tools to new frameworks, discover how these innovations are transforming the industry.
              </p>
              <div class="uno-flex uno-items-center uno-mb-4">
                <div class="uno-w-10 uno-h-10 uno-rounded-full uno-overflow-hidden uno-mr-3">
                  <NuxtImg src="/images/instructors/john-doe.jpg" alt="John Doe" class="uno-w-full uno-h-full uno-object-cover" />
                </div>
                <span class="uno-font-medium">John Doe</span>
              </div>
              <UButton class="uno-bg-primary hover:uno-bg-primary/90 uno-text-white uno-rounded-full">
                Read Article
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Content -->
    <section class="uno-py-12 uno-px-6 md:uno-px-12 lg:uno-px-24">
      <div class="uno-max-w-7xl uno-mx-auto">
        <div class="uno-flex uno-flex-col lg:uno-flex-row uno-gap-8">
          <!-- Main Content -->
          <div class="lg:uno-w-2/3">
            <!-- Filters and Sorting -->
            <div class="uno-flex uno-flex-col md:uno-flex-row uno-justify-between uno-items-start md:uno-items-center uno-mb-8 uno-gap-4">
              <h2 class="uno-text-2xl uno-font-bold uno-text-gray-900">Latest Articles</h2>
              <div class="uno-flex uno-gap-2">
                <UButton 
                  variant="ghost" 
                  class="uno-rounded-full" 
                  :pressed="activeCategory === 'all'" 
                  @click="activeCategory = 'all'"
                >
                  All
                </UButton>
                <UButton 
                  variant="ghost" 
                  class="uno-rounded-full" 
                  :pressed="activeCategory === 'development'" 
                  @click="activeCategory = 'development'"
                >
                  Development
                </UButton>
                <UButton 
                  variant="ghost" 
                  class="uno-rounded-full" 
                  :pressed="activeCategory === 'design'" 
                  @click="activeCategory = 'design'"
                >
                  Design
                </UButton>
                <UButton 
                  variant="ghost" 
                  class="uno-rounded-full" 
                  :pressed="activeCategory === 'career'" 
                  @click="activeCategory = 'career'"
                >
                  Career
                </UButton>
              </div>
            </div>

            <!-- Articles Grid -->
            <div class="uno-space-y-8">
              <div 
                v-for="article in paginatedArticles" 
                :key="article.id" 
                class="uno-bg-white uno-rounded-lg uno-shadow-sm uno-overflow-hidden hover:uno-shadow-md uno-transition-all uno-duration-300 uno-border"
              >
                <div class="md:uno-flex">
                  <div class="md:uno-w-1/3">
                    <NuxtImg 
                      :src="article.image" 
                      :alt="article.title" 
                      class="uno-w-full uno-h-48 md:uno-h-full uno-object-cover"
                    />
                  </div>
                  <div class="uno-p-6 md:uno-w-2/3">
                    <div class="uno-flex uno-items-center uno-text-sm uno-text-gray-500 uno-mb-2">
                      <span 
                        :class="uno-[ 'px-3 uno-py-1 uno-rounded-full uno-mr-3 uno-text-xs uno-font-medium', uno-article.category === 'development' ? 'bg-blue-100 uno-text-blue-800' : uno-article.category === 'design' ? 'bg-purple-100 uno-text-purple-800' : 'bg-green-100 uno-text-green-800' ]"
                      >
                        {{ article.category.charAt(0).toUpperCase() + article.category.slice(1) }}
                      </span>
                      <span>{{ formatDate(article.date) }}</span>
                    </div>
                    <h3 class="uno-text-xl uno-font-bold uno-text-gray-900 uno-mb-2 hover:uno-text-primary uno-transition-colors uno-duration-200">
                      <a :href="`/blog/${article.slug}`">{{ article.title }}</a>
                    </h3>
                    <p class="uno-text-gray-600 uno-mb-4 uno-line-clamp-2">{{ article.excerpt }}</p>
                    <div class="uno-flex uno-justify-between uno-items-center">
                      <div class="uno-flex uno-items-center">
                        <div class="uno-w-8 uno-h-8 uno-rounded-full uno-overflow-hidden uno-mr-2">
                          <NuxtImg :src="article.author.avatar" :alt="article.author.name" class="uno-w-full uno-h-full uno-object-cover" />
                        </div>
                        <span class="uno-text-sm uno-font-medium">{{ article.author.name }}</span>
                      </div>
                      <span class="uno-text-sm uno-text-gray-500">{{ article.readTime }} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div class="uno-mt-12 uno-flex uno-justify-center">
              <UPagination 
                v-model="currentPage" 
                :total="Math.ceil(filteredArticles.length / itemsPerPage)" 
                class=""
              />
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:uno-w-1/3">
            <!-- Search Widget -->
            <div class="uno-bg-white uno-rounded-lg uno-shadow-sm uno-p-6 uno-mb-8 uno-border">
              <h3 class="uno-text-lg uno-font-semibold uno-text-gray-900 uno-mb-4">Search</h3>
              <div class="uno-relative">
                <UInput 
                  v-model="searchQuery" 
                  placeholder="Search articles..." 
                  class="uno-pr-10"
                  prefix="search"
                />
              </div>
            </div>

            <!-- Categories Widget -->
            <div class="uno-bg-white uno-rounded-lg uno-shadow-sm uno-p-6 uno-mb-8 uno-border">
              <h3 class="uno-text-lg uno-font-semibold uno-text-gray-900 uno-mb-4">Categories</h3>
              <ul class="uno-space-y-2">
                <li>
                  <a href="#" class="uno-flex uno-justify-between uno-items-center uno-text-gray-700 hover:uno-text-primary uno-transition-colors uno-duration-200">
                    <span>Development</span>
                    <span class="uno-bg-gray-100 uno-text-gray-800 uno-text-xs uno-px-2 uno-py-1 uno-rounded-full">24</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="uno-flex uno-justify-between uno-items-center uno-text-gray-700 hover:uno-text-primary uno-transition-colors uno-duration-200">
                    <span>Design</span>
                    <span class="uno-bg-gray-100 uno-text-gray-800 uno-text-xs uno-px-2 uno-py-1 uno-rounded-full">18</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="uno-flex uno-justify-between uno-items-center uno-text-gray-700 hover:uno-text-primary uno-transition-colors uno-duration-200">
                    <span>Career Advice</span>
                    <span class="uno-bg-gray-100 uno-text-gray-800 uno-text-xs uno-px-2 uno-py-1 uno-rounded-full">12</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="uno-flex uno-justify-between uno-items-center uno-text-gray-700 hover:uno-text-primary uno-transition-colors uno-duration-200">
                    <span>Tutorials</span>
                    <span class="uno-bg-gray-100 uno-text-gray-800 uno-text-xs uno-px-2 uno-py-1 uno-rounded-full">36</span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Recent Posts Widget -->
            <div class="uno-bg-white uno-rounded-lg uno-shadow-sm uno-p-6 uno-mb-8 uno-border">
              <h3 class="uno-text-lg uno-font-semibold uno-text-gray-900 uno-mb-4">Recent Posts</h3>
              <ul class="uno-space-y-4">
                <li v-for="recent in recentArticles" :key="recent.id">
                  <a :href="`/blog/${recent.slug}`" class="uno-flex uno-gap-3 uno-group">
                    <div class="uno-w-20 uno-h-20 uno-rounded uno-overflow-hidden uno-flex-shrink-0">
                      <NuxtImg :src="recent.image" :alt="recent.title" class="uno-w-full uno-h-full uno-object-cover group-hover:uno-scale-105 uno-transition-transform uno-duration-300" />
                    </div>
                    <div>
                      <h4 class="uno-font-medium uno-text-gray-900 group-hover:uno-text-primary uno-transition-colors uno-duration-200 uno-line-clamp-2">{{ recent.title }}</h4>
                      <p class="uno-text-sm uno-text-gray-500 uno-mt-1">{{ formatDate(recent.date) }}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Newsletter Widget -->
            <div class="uno-bg-gray-50 uno-rounded-lg uno-p-6 uno-border">
              <h3 class="uno-text-lg uno-font-semibold uno-text-gray-900 uno-mb-2">Subscribe to Newsletter</h3>
              <p class="uno-text-gray-600 uno-text-sm uno-mb-4">Stay updated with our latest articles and news.</p>
              <form class="uno-space-y-3">
                <UInput 
                  v-model="newsletterEmail" 
                  type="email" 
                  placeholder="Your email address" 
                  class=""
                  :rules="{ required: true, email: true }"
                />
                <UButton type="submit" class="uno-w-full uno-bg-primary hover:uno-bg-primary/90 uno-text-white uno-rounded-full">
                  Subscribe
                </UButton>
              </form>
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
//   title: t('blog.title') as string
// })
// useSeoMeta({
//   title: () => t('blog.title') as string,
//   description: () => t('blog.description') as string,
//   ogTitle: () => t('blog.title') as string,
//   ogDescription: () => t('blog.description') as string
// })

const searchQuery = ref('');
const activeCategory = ref('all');
const currentPage = ref(1);
const itemsPerPage = ref(5);
const newsletterEmail = ref('');

const articles = ref([
  {
    id: 1,
    title: 'How to Improve Your Coding Skills in 30 Days',
    excerpt: 'Practical strategies and exercises to boost your programming abilities within a month.',
    image: '/images/blog/coding-skills.jpg',
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
    image: '/images/blog/ux-design.jpg',
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
    image: '/images/blog/programming-languages.jpg',
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
    image: '/images/blog/css-grid.jpg',
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
    image: '/images/blog/career-tips.jpg',
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
    image: '/images/blog/color-theory.jpg',
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
    image: '/images/blog/typescript.jpg',
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
    // Filter by search query
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase());
    
    // Filter by category
    const matchesCategory = activeCategory.value === 'all' || article.category === activeCategory.value;
    
    return matchesSearch && matchesCategory;
  });
});

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredArticles.value.slice(start, end);
});

const recentArticles = computed(() => {
  return articles.value.slice(0, 3);
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>

<style scoped>
/* Blog page specific styles */
</style>
