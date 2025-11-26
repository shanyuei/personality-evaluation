<template>
  <main class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative py-20 px-6 md:px-12 lg:px-24">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Welcome to Our Learning Platform
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Discover a world of knowledge with our expert mentors and comprehensive courses.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton size="lg" class="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
            Explore Courses
          </UButton>
          <UButton size="lg" class="bg-white hover:bg-gray-100 text-primary border border-primary rounded-full px-8">
            Meet Our Mentors
          </UButton>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="text-primary text-4xl mb-4">📚</div>
            <h3 class="text-xl font-semibold mb-3">Comprehensive Courses</h3>
            <p class="text-gray-600">
              Learn from carefully crafted courses designed by industry experts to help you succeed.
            </p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="text-primary text-4xl mb-4">👨‍🏫</div>
            <h3 class="text-xl font-semibold mb-3">Expert Mentors</h3>
            <p class="text-gray-600">
              Get guidance from experienced professionals who are passionate about teaching and sharing knowledge.
            </p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="text-primary text-4xl mb-4">🎯</div>
            <h3 class="text-xl font-semibold mb-3">Practical Learning</h3>
            <p class="text-gray-600">
              Apply what you learn through hands-on projects and real-world scenarios.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 px-6 md:px-12 lg:px-24 bg-primary/10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
        <p class="text-lg text-gray-700 mb-8">
          Join thousands of students who have transformed their careers with our platform.
        </p>
        <UButton size="lg" class="bg-primary hover:bg-primary/90 text-white rounded-full px-10">
          Get Started Today
        </UButton>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
// Home page component
</script>

<style scoped>
/* Home page specific styles */
</style>