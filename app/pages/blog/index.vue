<template>
  <main class="min-h-screen bg-white">
    <!-- Page Header -->
    <section class="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
        <p class="text-lg text-gray-600 max-w-3xl">
          Stay updated with the latest trends, tutorials, and insights from our experts in the field.
        </p>
      </div>
    </section>

    <!-- Featured Post -->
    <section class="py-12 px-6 md:px-12 lg:px-24 border-b">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-xl font-semibold text-gray-900 mb-6">Featured Article</h2>
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
          <div class="md:flex">
            <div class="md:w-1/2">
              <NuxtImg 
                src="/images/blog/featured-article.jpg" 
                alt="Featured Article" 
                class="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div class="p-6 md:w-1/2">
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full mr-3">Development</span>
                <span>May 15, 2023</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">
                The Future of Web Development in 2023 and Beyond
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-3">
                Explore the emerging trends and technologies that will shape the future of web development. From AI-powered tools to new frameworks, discover how these innovations are transforming the industry.
              </p>
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <NuxtImg src="/images/instructors/john-doe.jpg" alt="John Doe" class="w-full h-full object-cover" />
                </div>
                <span class="font-medium">John Doe</span>
              </div>
              <UButton class="bg-primary hover:bg-primary/90 text-white rounded-full">
                Read Article
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Content -->
    <section class="py-12 px-6 md:px-12 lg:px-24">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Main Content -->
          <div class="lg:w-2/3">
            <!-- Filters and Sorting -->
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <h2 class="text-2xl font-bold text-gray-900">Latest Articles</h2>
              <div class="flex gap-2">
                <UButton 
                  variant="ghost" 
                  class="rounded-full" 
                  :pressed="activeCategory === 'all'" 
                  @click="activeCategory = 'all'"
                >
                  All
                </UButton>
                <UButton 
                  variant="ghost" 
                  class="rounded-full" 
                  :pressed="activeCategory === 'development'" 
                  @click="activeCategory = 'development'"
                >
                  Development
                </UButton>
                <UButton 
                  variant="ghost" 
                  class="rounded-full" 
                  :pressed="activeCategory === 'design'" 
                  @click="activeCategory = 'design'"
                >
                  Design
                </UButton>
                <UButton 
                  variant="ghost" 
                  class="rounded-full" 
                  :pressed="activeCategory === 'career'" 
                  @click="activeCategory = 'career'"
                >
                  Career
                </UButton>
              </div>
            </div>

            <!-- Articles Grid -->
            <div class="space-y-8">
              <div 
                v-for="article in filteredArticles" 
                :key="article.id" 
                class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border"
              >
                <div class="md:flex">
                  <div class="md:w-1/3">
                    <NuxtImg 
                      :src="article.image" 
                      :alt="article.title" 
                      class="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div class="p-6 md:w-2/3">
                    <div class="flex items-center text-sm text-gray-500 mb-2">
                      <span 
                        :class="[
                          'px-3 py-1 rounded-full mr-3 text-xs font-medium',
                          article.category === 'development' ? 'bg-blue-100 text-blue-800' :
                          article.category === 'design' ? 'bg-purple-100 text-purple-800' :
                          'bg-green-100 text-green-800'
                        ]"
                      >
                        {{ article.category.charAt(0).toUpperCase() + article.category.slice(1) }}
                      </span>
                      <span>{{ formatDate(article.date) }}</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2 hover:text-primary transition-colors duration-200">
                      <a :href="`/blog/${article.slug}`">{{ article.title }}</a>
                    </h3>
                    <p class="text-gray-600 mb-4 line-clamp-2">{{ article.excerpt }}</p>
                    <div class="flex justify-between items-center">
                      <div class="flex items-center">
                        <div class="w-8 h-8 rounded-full overflow-hidden mr-2">
                          <NuxtImg :src="article.author.avatar" :alt="article.author.name" class="w-full h-full object-cover" />
                        </div>
                        <span class="text-sm font-medium">{{ article.author.name }}</span>
                      </div>
                      <span class="text-sm text-gray-500">{{ article.readTime }} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div class="mt-12 flex justify-center">
              <UPagination 
                v-model="currentPage" 
                :total="Math.ceil(filteredArticles.length / itemsPerPage)" 
                class=""
              />
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:w-1/3">
            <!-- Search Widget -->
            <div class="bg-white rounded-lg shadow-sm p-6 mb-8 border">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Search</h3>
              <div class="relative">
                <UInput 
                  v-model="searchQuery" 
                  placeholder="Search articles..." 
                  class="pr-10"
                  prefix="search"
                />
              </div>
            </div>

            <!-- Categories Widget -->
            <div class="bg-white rounded-lg shadow-sm p-6 mb-8 border">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <ul class="space-y-2">
                <li>
                  <a href="#" class="flex justify-between items-center text-gray-700 hover:text-primary transition-colors duration-200">
                    <span>Development</span>
                    <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">24</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex justify-between items-center text-gray-700 hover:text-primary transition-colors duration-200">
                    <span>Design</span>
                    <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">18</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex justify-between items-center text-gray-700 hover:text-primary transition-colors duration-200">
                    <span>Career Advice</span>
                    <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">12</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex justify-between items-center text-gray-700 hover:text-primary transition-colors duration-200">
                    <span>Tutorials</span>
                    <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">36</span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Recent Posts Widget -->
            <div class="bg-white rounded-lg shadow-sm p-6 mb-8 border">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
              <ul class="space-y-4">
                <li v-for="recent in recentArticles" :key="recent.id">
                  <a :href="`/blog/${recent.slug}`" class="flex gap-3 group">
                    <div class="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                      <NuxtImg :src="recent.image" :alt="recent.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 class="font-medium text-gray-900 group-hover:text-primary transition-colors duration-200 line-clamp-2">{{ recent.title }}</h4>
                      <p class="text-sm text-gray-500 mt-1">{{ formatDate(recent.date) }}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Newsletter Widget -->
            <div class="bg-gray-50 rounded-lg p-6 border">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Subscribe to Newsletter</h3>
              <p class="text-gray-600 text-sm mb-4">Stay updated with our latest articles and news.</p>
              <form class="space-y-3">
                <UInput 
                  v-model="newsletterEmail" 
                  type="email" 
                  placeholder="Your email address" 
                  class=""
                  :rules="{ required: true, email: true }"
                />
                <UButton type="submit" class="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
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
//   title: t('pages.blog.title') as string
// })
// useSeoMeta({
//   title: () => t('pages.blog.title') as string,
//   description: () => t('pages.blog.description') as string,
//   ogTitle: () => t('pages.blog.title') as string,
//   ogDescription: () => t('pages.blog.description') as string
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
