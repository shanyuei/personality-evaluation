<template>
  <main class="uno-min-h-screen uno-bg-white">
    <!-- Page Header -->
    <section class="uno-py-16 uno-px-6 md:uno-px-12 lg:uno-px-24 uno-bg-gray-50">
      <div class="uno-max-w-7xl uno-mx-auto">
        <h1 class="uno-text-3xl md:uno-text-4xl uno-font-bold uno-text-gray-900 uno-mb-4">Our Courses</h1>
        <p class="uno-text-lg uno-text-gray-600 uno-max-w-3xl">
          Explore our comprehensive range of courses designed to help you achieve your learning goals.
        </p>
      </div>
    </section>

    <!-- Course Filters -->
    <section class="uno-py-8 uno-px-6 md:uno-px-12 lg:uno-px-24">
      <div class="uno-max-w-7xl uno-mx-auto uno-flex uno-flex-col sm:uno-flex-row uno-justify-between uno-items-start sm:uno-items-center uno-gap-4 uno-mb-8">
        <div class="uno-flex uno-flex-wrap uno-gap-2">
          <UButton variant="ghost" class="uno-rounded-full" :pressed="activeFilter === 'all'" @click="activeFilter = 'all'">
            All Courses
          </UButton>
          <UButton variant="ghost" class="uno-rounded-full" :pressed="activeFilter === 'programming'" @click="activeFilter = 'programming'">
            Programming
          </UButton>
          <UButton variant="ghost" class="uno-rounded-full" :pressed="activeFilter === 'design'" @click="activeFilter = 'design'">
            Design
          </UButton>
          <UButton variant="ghost" class="uno-rounded-full" :pressed="activeFilter === 'business'" @click="activeFilter = 'business'">
            Business
          </UButton>
        </div>
        <USelect v-model="sortOrder" :options="sortOptions" placeholder="Sort by" class="uno-w-full sm:uno-w-40" />
      </div>

      <!-- Course Grid -->
      <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-2 lg:uno-grid-cols-3 uno-gap-8">
        <div v-for="course in filteredCourses" :key="course.id" class="uno-bg-white uno-rounded-lg uno-shadow-md uno-overflow-hidden hover:uno-shadow-lg uno-transition-shadow uno-duration-300">
          <div class="uno-h-48 uno-bg-gray-200 uno-overflow-hidden">
            <NuxtImg :src="course.image" :alt="course.title" class="uno-w-full uno-h-full uno-object-cover" />
          </div>
          <div class="uno-p-6">
            <div class="uno-flex uno-justify-between uno-items-start uno-mb-2">
              <span class="uno-text-sm uno-font-medium uno-text-primary uno-bg-primary/10 uno-px-3 uno-py-1 uno-rounded-full">{{ course.category }}</span>
              <div class="uno-flex uno-items-center">
                <span class="uno-text-amber-500 uno-mr-1">★</span>
                <span class="uno-text-sm uno-font-medium">{{ course.rating }}</span>
              </div>
            </div>
            <h3 class="uno-text-xl uno-font-bold uno-mb-2">{{ course.title }}</h3>
            <p class="uno-text-gray-600 uno-text-sm uno-mb-4 uno-line-clamp-2">{{ course.description }}</p>
            <div class="uno-flex uno-justify-between uno-items-center">
              <div class="uno-flex uno-items-center">
                <div class="uno-w-8 uno-h-8 uno-rounded-full uno-bg-gray-200 uno-overflow-hidden uno-mr-2">
                  <NuxtImg :src="course.instructor.avatar" :alt="course.instructor.name" class="uno-w-full uno-h-full uno-object-cover" />
                </div>
                <span class="uno-text-sm uno-text-gray-700">{{ course.instructor.name }}</span>
              </div>
              <span class="uno-font-bold uno-text-gray-900">{{ course.price }}</span>
            </div>
            <UButton class="uno-w-full uno-mt-4 uno-bg-primary hover:uno-bg-primary/90 uno-text-white uno-rounded-lg">
              Enroll Now
            </UButton>
          </div>
        </div>
      </div>

      <!-- No Courses Found -->
      <div v-if="filteredCourses.length === 0" class="uno-text-center uno-py-16">
        <p class="uno-text-gray-600 uno-text-lg">No courses found matching your criteria.</p>
        <UButton class="uno-mt-4 uno-bg-primary hover:uno-bg-primary/90 uno-text-white uno-rounded-full" @click="activeFilter = 'all'">
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
//   title: t('courses.title') as string
// })
// useSeoMeta({
//   title: () => t('courses.title') as string,
//   description: () => t('courses.description') as string,
//   ogTitle: () => t('courses.title') as string,
//   ogDescription: () => t('courses.description') as string
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
