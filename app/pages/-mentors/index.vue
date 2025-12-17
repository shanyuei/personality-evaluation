<template>
  <main class="uno-min-h-screen uno-bg-white">
    <!-- Page Header -->
    <section class="uno-py-16 uno-px-6 md:uno-px-12 lg:uno-px-24 uno-bg-gray-50">
      <div class="uno-max-w-7xl uno-mx-auto">
        <h1 class="uno-text-3xl md:uno-text-4xl uno-font-bold uno-text-gray-900 uno-mb-4">Our Expert Mentors</h1>
        <p class="uno-text-lg uno-text-gray-600 uno-max-w-3xl">
          Meet our team of experienced professionals who are passionate about guiding you on your learning journey.
        </p>
      </div>
    </section>

    <!-- Mentors Section -->
    <section class="uno-py-12 uno-px-6 md:uno-px-12 lg:uno-px-24">
      <div class="uno-max-w-7xl uno-mx-auto">
        <!-- Search and Filter -->
        <div class="uno-flex uno-flex-col md:uno-flex-row uno-justify-between uno-items-start md:uno-items-center uno-mb-12 uno-gap-4">
          <UInput 
            v-model="searchQuery" 
            placeholder="Search mentors..." 
            class="uno-w-full md:uno-w-64"
            prefix="search"
          />
          <div class="uno-flex uno-flex-wrap uno-gap-2">
            <UButton 
              variant="ghost" 
              class="uno-rounded-full" 
              :pressed="activeExpertise === 'all'" 
              @click="activeExpertise = 'all'"
            >
              All Expertise
            </UButton>
            <UButton 
              variant="ghost" 
              class="uno-rounded-full" 
              :pressed="activeExpertise === 'programming'" 
              @click="activeExpertise = 'programming'"
            >
              Programming
            </UButton>
            <UButton 
              variant="ghost" 
              class="uno-rounded-full" 
              :pressed="activeExpertise === 'design'" 
              @click="activeExpertise = 'design'"
            >
              Design
            </UButton>
            <UButton 
              variant="ghost" 
              class="uno-rounded-full" 
              :pressed="activeExpertise === 'business'" 
              @click="activeExpertise = 'business'"
            >
              Business
            </UButton>
          </div>
        </div>

        <!-- Mentors Grid -->
        <div class="uno-grid uno-grid-cols-1 sm:uno-grid-cols-2 lg:uno-grid-cols-3 uno-gap-8">
          <div 
            v-for="mentor in filteredMentors" 
            :key="mentor.id" 
            class="uno-bg-white uno-rounded-lg uno-shadow-md uno-overflow-hidden hover:uno-shadow-lg uno-transition-all uno-duration-300 hover:uno--translate-y-1"
          >
            <div class="uno-p-6">
              <div class="uno-flex uno-flex-col uno-items-center uno-text-center uno-mb-6">
                <div class="uno-w-32 uno-h-32 uno-rounded-full uno-overflow-hidden uno-border-4 uno-border-white uno-shadow-md uno-mb-4">
                  <NuxtImg :src="mentor.avatar" :alt="mentor.name" class="uno-w-full uno-h-full uno-object-cover" />
                </div>
                <h3 class="uno-text-xl uno-font-bold uno-text-gray-900 uno-mb-1">{{ mentor.name }}</h3>
                <p class="uno-text-primary uno-font-medium uno-mb-2">{{ mentor.title }}</p>
                <div class="uno-flex uno-items-center uno-justify-center uno-mb-4">
                  <span class="uno-text-amber-500 uno-mr-1">★</span>
                  <span class="uno-text-sm uno-font-medium">{{ mentor.rating }} ({{ mentor.students }} students)</span>
                </div>
                <div class="uno-flex uno-flex-wrap uno-gap-2 uno-justify-center uno-mb-4">
                  <span 
                    v-for="skill in mentor.skills" 
                    :key="skill" 
                    class="uno-text-xs uno-bg-gray-100 uno-text-gray-800 uno-px-3 uno-py-1 uno-rounded-full"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
              
              <p class="uno-text-gray-600 uno-text-sm uno-mb-6 uno-line-clamp-3">{{ mentor.bio }}</p>
              
              <div class="uno-flex uno-justify-between uno-items-center">
                <span class="uno-text-sm uno-text-gray-500">{{ mentor.courses }} courses</span>
                <UButton class="uno-bg-primary hover:uno-bg-primary/90 uno-text-white uno-rounded-full">
                  View Profile
                </UButton>
              </div>
            </div>
          </div>
        </div>

        <!-- No Mentors Found -->
        <div v-if="filteredMentors.length === 0" class="uno-text-center uno-py-16">
          <p class="uno-text-gray-600 uno-text-lg">No mentors found matching your criteria.</p>
          <UButton class="uno-mt-4 uno-bg-primary hover:uno-bg-primary/90 uno-text-white uno-rounded-full" @click="resetFilters">
            Clear Filters
          </UButton>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="uno-py-16 uno-px-6 md:uno-px-12 lg:uno-px-24 uno-bg-gray-50">
      <div class="uno-max-w-7xl uno-mx-auto">
        <h2 class="uno-text-2xl md:uno-text-3xl uno-font-bold uno-text-center uno-text-gray-900 uno-mb-12">Student Success Stories</h2>
        <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-2 uno-gap-8">
          <div class="uno-bg-white uno-p-6 uno-rounded-lg uno-shadow-md">
            <div class="uno-flex uno-items-center uno-mb-4">
              <div class="uno-text-amber-500 uno-flex">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            <p class="uno-text-gray-700 uno-mb-4 uno-italic">
              "My mentor provided invaluable guidance throughout my learning journey. Their industry experience and personalized feedback helped me land my dream job."
            </p>
            <div class="uno-flex uno-items-center">
              <div class="uno-w-10 uno-h-10 uno-rounded-full uno-overflow-hidden uno-mr-3">
                <NuxtImg src="/images/students/alice.jpg" alt="Alice" class="uno-w-full uno-h-full uno-object-cover" />
              </div>
              <div>
                <p class="uno-font-medium uno-text-gray-900">Alice Thompson</p>
                <p class="uno-text-sm uno-text-gray-600">Software Developer at TechCorp</p>
              </div>
            </div>
          </div>
          <div class="uno-bg-white uno-p-6 uno-rounded-lg uno-shadow-md">
            <div class="uno-flex uno-items-center uno-mb-4">
              <div class="uno-text-amber-500 uno-flex">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            <p class="uno-text-gray-700 uno-mb-4 uno-italic">
              "The mentorship program exceeded my expectations. My mentor was knowledgeable, supportive, and pushed me to achieve more than I thought possible."
            </p>
            <div class="uno-flex uno-items-center">
              <div class="uno-w-10 uno-h-10 uno-rounded-full uno-overflow-hidden uno-mr-3">
                <NuxtImg src="/images/students/bob.jpg" alt="Bob" class="uno-w-full uno-h-full uno-object-cover" />
              </div>
              <div>
                <p class="uno-font-medium uno-text-gray-900">Bob Johnson</p>
                <p class="uno-text-sm uno-text-gray-600">UX Designer at CreativeStudio</p>
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


const { t } = useI18n()
definePageMeta({
  title: () => 'seo.mentors.title'
})
useSeoMeta({
  title: () => t('seo.mentors.title') as string,
  description: () => t('seo.mentors.description') as string
})

const searchQuery = ref('');
const activeExpertise = ref('all');

const mentors = ref([
  {
    id: 1,
    name: 'John Doe',
    title: 'Senior Web Developer',
    avatar: '/images/instructors/john-doe.jpg',
    rating: 4.9,
    students: 1250,
    courses: 8,
    expertise: 'programming',
    skills: ['JavaScript', 'React', 'Node.js', 'TypeScript'],
    bio: 'John has over 10 years of experience in web development and has worked with companies like Google and Microsoft. He specializes in building scalable web applications and is passionate about teaching others.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'UX/UI Design Lead',
    avatar: '/images/instructors/jane-smith.jpg',
    rating: 4.8,
    students: 980,
    courses: 6,
    expertise: 'design',
    skills: ['UI Design', 'UX Research', 'Figma', 'Prototyping'],
    bio: 'Jane is an award-winning designer with a background in human-centered design. She has helped numerous startups create intuitive and beautiful user experiences.',
  },
  {
    id: 3,
    name: 'Michael Brown',
    title: 'Digital Marketing Expert',
    avatar: '/images/instructors/michael-brown.jpg',
    rating: 4.7,
    students: 840,
    courses: 5,
    expertise: 'business',
    skills: ['SEO', 'Content Marketing', 'Social Media', 'Analytics'],
    bio: 'Michael has generated over $10M in revenue for clients through strategic digital marketing campaigns. He specializes in helping businesses grow their online presence.',
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    title: 'Data Scientist',
    avatar: '/images/instructors/sarah-johnson.jpg',
    rating: 4.9,
    students: 1120,
    courses: 7,
    expertise: 'programming',
    skills: ['Python', 'Machine Learning', 'Data Visualization', 'SQL'],
    bio: 'Sarah holds a PhD in Computer Science and has worked as a data scientist at Amazon. She specializes in turning complex data into actionable insights.',
  },
  {
    id: 5,
    name: 'David Wilson',
    title: 'Graphic Designer',
    avatar: '/images/instructors/david-wilson.jpg',
    rating: 4.8,
    students: 750,
    courses: 4,
    expertise: 'design',
    skills: ['Photoshop', 'Illustrator', 'Branding', 'Typography'],
    bio: 'David is a professional graphic designer with clients ranging from startups to Fortune 500 companies. He specializes in creating memorable brand identities.',
  },
  {
    id: 6,
    name: 'Emily Davis',
    title: 'Business Strategist',
    avatar: '/images/instructors/emily-davis.jpg',
    rating: 4.6,
    students: 680,
    courses: 3,
    expertise: 'business',
    skills: ['Strategic Planning', 'Project Management', 'Leadership', 'Negotiation'],
    bio: 'Emily has helped over 50 businesses achieve sustainable growth through strategic planning and operational improvements. She is passionate about empowering entrepreneurs.',
  },
]);

const filteredMentors = computed(() => {
  return mentors.value.filter(mentor => {
    // Filter by search query
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         mentor.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         mentor.skills.some(skill => skill.toLowerCase().includes(searchQuery.value.toLowerCase()));
    
    // Filter by expertise
    const matchesExpertise = activeExpertise.value === 'all' || mentor.expertise === activeExpertise.value;
    
    return matchesSearch && matchesExpertise;
  });
});

const resetFilters = () => {
  searchQuery.value = '';
  activeExpertise.value = 'all';
};
</script>

<style scoped>
/* Mentors page specific styles */
</style>
