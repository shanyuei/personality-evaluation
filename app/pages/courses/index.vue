<template>
  <main class="min-h-screen bg-white">
    <!-- Page Header -->
    <section class="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
        <p class="text-lg text-gray-600 max-w-3xl">
          Explore our comprehensive range of courses designed to help you achieve your learning goals.
        </p>
      </div>
    </section>

    <!-- Course Filters -->
    <section class="py-8 px-6 md:px-12 lg:px-24">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div class="flex flex-wrap gap-2">
          <UButton variant="ghost" class="rounded-full" :pressed="activeFilter === 'all'" @click="activeFilter = 'all'">
            All Courses
          </UButton>
          <UButton variant="ghost" class="rounded-full" :pressed="activeFilter === 'programming'" @click="activeFilter = 'programming'">
            Programming
          </UButton>
          <UButton variant="ghost" class="rounded-full" :pressed="activeFilter === 'design'" @click="activeFilter = 'design'">
            Design
          </UButton>
          <UButton variant="ghost" class="rounded-full" :pressed="activeFilter === 'business'" @click="activeFilter = 'business'">
            Business
          </UButton>
        </div>
        <USelect v-model="sortOrder" :options="sortOptions" placeholder="Sort by" class="w-full sm:w-40" />
      </div>

      <!-- Course Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="course in filteredCourses" :key="course.id" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div class="h-48 bg-gray-200 overflow-hidden">
            <NuxtImg :src="course.image" :alt="course.title" class="w-full h-full object-cover" />
          </div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-2">
              <span class="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{{ course.category }}</span>
              <div class="flex items-center">
                <span class="text-amber-500 mr-1">★</span>
                <span class="text-sm font-medium">{{ course.rating }}</span>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ course.title }}</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ course.description }}</p>
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-2">
                  <NuxtImg :src="course.instructor.avatar" :alt="course.instructor.name" class="w-full h-full object-cover" />
                </div>
                <span class="text-sm text-gray-700">{{ course.instructor.name }}</span>
              </div>
              <span class="font-bold text-gray-900">{{ course.price }}</span>
            </div>
            <UButton class="w-full mt-4 bg-primary hover:bg-primary/90 text-white rounded-lg">
              Enroll Now
            </UButton>
          </div>
        </div>
      </div>

      <!-- No Courses Found -->
      <div v-if="filteredCourses.length === 0" class="text-center py-16">
        <p class="text-gray-600 text-lg">No courses found matching your criteria.</p>
        <UButton class="mt-4 bg-primary hover:bg-primary/90 text-white rounded-full" @click="activeFilter = 'all'">
          View All Courses
        </UButton>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
// const { t } = useI18n()
// definePageMeta({
//   title: t('pages.courses.title') as string
// })
// useSeoMeta({
//   title: () => t('pages.courses.title') as string,
//   description: () => t('pages.courses.description') as string,
//   ogTitle: () => t('pages.courses.title') as string,
//   ogDescription: () => t('pages.courses.description') as string
// })

const activeFilter = ref('all');
const sortOrder = ref('popular');

const sortOptions = [
  { label: 'Most Popular', value: 'popular' },
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-low' },
  { label: 'Price: High to Low', value: 'price-high' },
];

const courses = ref([
  {
    id: 1,
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of web development with HTML, CSS, and JavaScript.',
    image: '/images/courses/web-dev.jpg',
    category: 'programming',
    rating: 4.8,
    reviews: 124,
    price: '$49.99',
    instructor: {
      name: 'John Doe',
      avatar: '/images/instructors/john-doe.jpg',
    },
    duration: '8 weeks',
    level: 'Beginner',
  },
  {
    id: 2,
    title: 'Advanced React Development',
    description: 'Master React hooks, context API, and build modern single-page applications.',
    image: '/images/courses/react.jpg',
    category: 'programming',
    rating: 4.9,
    reviews: 89,
    price: '$89.99',
    instructor: {
      name: 'Jane Smith',
      avatar: '/images/instructors/jane-smith.jpg',
    },
    duration: '10 weeks',
    level: 'Advanced',
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    description: 'Learn the principles of user interface and user experience design.',
    image: '/images/courses/ui-ux.jpg',
    category: 'design',
    rating: 4.7,
    reviews: 156,
    price: '$69.99',
    instructor: {
      name: 'Sarah Johnson',
      avatar: '/images/instructors/sarah-johnson.jpg',
    },
    duration: '6 weeks',
    level: 'Beginner',
  },
  {
    id: 4,
    title: 'Digital Marketing Strategy',
    description: 'Create effective digital marketing campaigns and grow your online presence.',
    image: '/images/courses/marketing.jpg',
    category: 'business',
    rating: 4.6,
    reviews: 78,
    price: '$59.99',
    instructor: {
      name: 'Michael Brown',
      avatar: '/images/instructors/michael-brown.jpg',
    },
    duration: '8 weeks',
    level: 'Intermediate',
  },
  {
    id: 5,
    title: 'Data Science Essentials',
    description: 'Introduction to data analysis, visualization, and machine learning.',
    image: '/images/courses/data-science.jpg',
    category: 'programming',
    rating: 4.9,
    reviews: 112,
    price: '$99.99',
    instructor: {
      name: 'Emily Davis',
      avatar: '/images/instructors/emily-davis.jpg',
    },
    duration: '12 weeks',
    level: 'Intermediate',
  },
  {
    id: 6,
    title: 'Graphic Design with Adobe Creative Suite',
    description: 'Master Adobe Photoshop, Illustrator, and InDesign for professional design work.',
    image: '/images/courses/graphic-design.jpg',
    category: 'design',
    rating: 4.8,
    reviews: 95,
    price: '$79.99',
    instructor: {
      name: 'David Wilson',
      avatar: '/images/instructors/david-wilson.jpg',
    },
    duration: '10 weeks',
    level: 'Beginner',
  },
]);

const filteredCourses = computed(() => {
  let result = courses.value;
  
  // Filter by category
  if (activeFilter.value !== 'all') {
    result = result.filter(course => course.category === activeFilter.value);
  }
  
  // Sort courses
  switch (sortOrder.value) {
    case 'newest':
      return [...result].reverse();
    case 'price-low':
      return [...result].sort((a, b) => {
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));
        return priceA - priceB;
      });
    case 'price-high':
      return [...result].sort((a, b) => {
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));
        return priceB - priceA;
      });
    case 'popular':
    default:
      return [...result].sort((a, b) => b.reviews - a.reviews);
  }
});
</script>

<style scoped>
/* Courses page specific styles */
</style>
