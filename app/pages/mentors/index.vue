<template>
  <main class="min-h-screen bg-white">
    <!-- Page Header -->
    <section class="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expert Mentors</h1>
        <p class="text-lg text-gray-600 max-w-3xl">
          Meet our team of experienced professionals who are passionate about guiding you on your learning journey.
        </p>
      </div>
    </section>

    <!-- Mentors Section -->
    <section class="py-12 px-6 md:px-12 lg:px-24">
      <div class="max-w-7xl mx-auto">
        <!-- Search and Filter -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <UInput 
            v-model="searchQuery" 
            placeholder="Search mentors..." 
            class="w-full md:w-64"
            prefix="search"
          />
          <div class="flex flex-wrap gap-2">
            <UButton 
              variant="ghost" 
              class="rounded-full" 
              :pressed="activeExpertise === 'all'" 
              @click="activeExpertise = 'all'"
            >
              All Expertise
            </UButton>
            <UButton 
              variant="ghost" 
              class="rounded-full" 
              :pressed="activeExpertise === 'programming'" 
              @click="activeExpertise = 'programming'"
            >
              Programming
            </UButton>
            <UButton 
              variant="ghost" 
              class="rounded-full" 
              :pressed="activeExpertise === 'design'" 
              @click="activeExpertise = 'design'"
            >
              Design
            </UButton>
            <UButton 
              variant="ghost" 
              class="rounded-full" 
              :pressed="activeExpertise === 'business'" 
              @click="activeExpertise = 'business'"
            >
              Business
            </UButton>
          </div>
        </div>

        <!-- Mentors Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="mentor in filteredMentors" 
            :key="mentor.id" 
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div class="p-6">
              <div class="flex flex-col items-center text-center mb-6">
                <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                  <NuxtImg :src="mentor.avatar" :alt="mentor.name" class="w-full h-full object-cover" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-1">{{ mentor.name }}</h3>
                <p class="text-primary font-medium mb-2">{{ mentor.title }}</p>
                <div class="flex items-center justify-center mb-4">
                  <span class="text-amber-500 mr-1">★</span>
                  <span class="text-sm font-medium">{{ mentor.rating }} ({{ mentor.students }} students)</span>
                </div>
                <div class="flex flex-wrap gap-2 justify-center mb-4">
                  <span 
                    v-for="skill in mentor.skills" 
                    :key="skill" 
                    class="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
              
              <p class="text-gray-600 text-sm mb-6 line-clamp-3">{{ mentor.bio }}</p>
              
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500">{{ mentor.courses }} courses</span>
                <UButton class="bg-primary hover:bg-primary/90 text-white rounded-full">
                  View Profile
                </UButton>
              </div>
            </div>
          </div>
        </div>

        <!-- No Mentors Found -->
        <div v-if="filteredMentors.length === 0" class="text-center py-16">
          <p class="text-gray-600 text-lg">No mentors found matching your criteria.</p>
          <UButton class="mt-4 bg-primary hover:bg-primary/90 text-white rounded-full" @click="resetFilters">
            Clear Filters
          </UButton>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">Student Success Stories</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <div class="text-amber-500 flex">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            <p class="text-gray-700 mb-4 italic">
              "My mentor provided invaluable guidance throughout my learning journey. Their industry experience and personalized feedback helped me land my dream job."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full overflow-hidden mr-3">
                <NuxtImg src="/images/students/alice.jpg" alt="Alice" class="w-full h-full object-cover" />
              </div>
              <div>
                <p class="font-medium text-gray-900">Alice Thompson</p>
                <p class="text-sm text-gray-600">Software Developer at TechCorp</p>
              </div>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <div class="text-amber-500 flex">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            <p class="text-gray-700 mb-4 italic">
              "The mentorship program exceeded my expectations. My mentor was knowledgeable, supportive, and pushed me to achieve more than I thought possible."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full overflow-hidden mr-3">
                <NuxtImg src="/images/students/bob.jpg" alt="Bob" class="w-full h-full object-cover" />
              </div>
              <div>
                <p class="font-medium text-gray-900">Bob Johnson</p>
                <p class="text-sm text-gray-600">UX Designer at CreativeStudio</p>
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
//   title: t('pages.mentors.title') as string
// })
// useSeoMeta({
//   title: () => t('pages.mentors.title') as string,
//   description: () => t('pages.mentors.description') as string,
//   ogTitle: () => t('pages.mentors.title') as string,
//   ogDescription: () => t('pages.mentors.description') as string
// })

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
