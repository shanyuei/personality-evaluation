<template>
  <main class="min-h-screen bg-white">
    <!-- Page Header -->
    <section class="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ $t('pages.about.title') }}</h1>
        <p class="text-lg text-gray-600 max-w-3xl">
          {{ $t('pages.about.description') }}
        </p>
      </div>
    </section>

    <!-- Mission and Vision -->
    <section class="py-16 px-6 md:px-12 lg:px-24 border-b">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <span class="text-blue-600 text-2xl">🎯</span>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p class="text-gray-600 mb-4">
              Our mission is to democratize education and make high-quality learning accessible to everyone, everywhere.
              We believe that education is the key to personal and professional growth, and we're committed to providing
              engaging, practical, and relevant courses that help learners achieve their goals.
            </p>
            <p class="text-gray-600">
              Through our platform, we aim to bridge the gap between traditional education and industry needs,
              equipping students with the skills they need to succeed in today's rapidly changing world.
            </p>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <span class="text-green-600 text-2xl">🔮</span>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p class="text-gray-600 mb-4">
              We envision a world where anyone, regardless of their background or circumstances,
              can access the education and resources they need to reach their full potential.
            </p>
            <p class="text-gray-600">
              We strive to become the leading online learning platform globally, known for our innovative approach,
              exceptional instructors, and transformative learning experiences that empower individuals to thrive
              in their personal and professional lives.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="md:flex items-center gap-12">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p class="text-gray-600 mb-4">
              Founded in 2020, our platform was born out of a passion for education and a desire to make learning
              more accessible and effective. What started as a small project has grown into a thriving community
              of learners and instructors from around the world.
            </p>
            <p class="text-gray-600 mb-4">
              Our journey began when our founders recognized the limitations of traditional education systems
              in keeping pace with technological advancements and industry demands. They set out to create a platform
              that would provide practical, up-to-date knowledge and skills that learners could immediately apply.
            </p>
            <p class="text-gray-600">
              Today, we're proud to offer thousands of courses taught by industry experts, helping learners
              across the globe achieve their personal and professional goals. But our story is just beginning,
              and we're excited about the future of learning and the impact we can make together.
            </p>
          </div>
          <div class="md:w-1/2">
            <div class="grid grid-cols-2 gap-4">
              <NuxtImg 
                src="/images/about/our-story-1.jpg" 
                alt="Our Story" 
                class="rounded-lg shadow-md w-full h-48 object-cover transform translate-y-8"
              />
              <NuxtImg 
                src="/images/about/our-story-2.jpg" 
                alt="Our Story" 
                class="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <NuxtImg 
                src="/images/about/our-story-3.jpg" 
                alt="Our Story" 
                class="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <NuxtImg 
                src="/images/about/our-story-4.jpg" 
                alt="Our Story" 
                class="rounded-lg shadow-md w-full h-48 object-cover transform translate-y-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="py-16 px-6 md:px-12 lg:px-24">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">Our Leadership Team</h2>
        <p class="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Meet the dedicated individuals who lead our mission to transform education through innovation and excellence.
        </p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
            <div class="p-6 text-center">
              <div class="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                <NuxtImg src="/images/team/ceo.jpg" alt="CEO" class="w-full h-full object-cover" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-1">Sarah Chen</h3>
              <p class="text-primary font-medium mb-3">Founder & CEO</p>
              <p class="text-gray-600 text-sm mb-4">
                Former Google engineer with 15+ years of experience in tech and education.
              </p>
              <div class="flex justify-center space-x-3">
                <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors">
                  <span class="sr-only">LinkedIn</span>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors">
                  <span class="sr-only">Twitter</span>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
            <div class="p-6 text-center">
              <div class="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                <NuxtImg src="/images/team/cto.jpg" alt="CTO" class="w-full h-full object-cover" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-1">Mark Johnson</h3>
              <p class="text-primary font-medium mb-3">Chief Technology Officer</p>
              <p class="text-gray-600 text-sm mb-4">
                Software architect with extensive experience in building scalable learning platforms.
              </p>
              <div class="flex justify-center space-x-3">
                <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors">
                  <span class="sr-only">LinkedIn</span>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors">
                  <span class="sr-only">GitHub</span>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
            <div class="p-6 text-center">
              <div class="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                <NuxtImg src="/images/team/head-of-education.jpg" alt="Head of Education" class="w-full h-full object-cover" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-1">Emma Williams</h3>
              <p class="text-primary font-medium mb-3">Head of Education</p>
              <p class="text-gray-600 text-sm mb-4">
                Educational expert with a background in curriculum development and pedagogy.
              </p>
              <div class="flex justify-center space-x-3">
                <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors">
                  <span class="sr-only">LinkedIn</span>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors">
                  <span class="sr-only">Twitter</span>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
            <div class="p-6 text-center">
              <div class="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                <NuxtImg src="/images/team/marketing-director.jpg" alt="Marketing Director" class="w-full h-full object-cover" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-1">Michael Rodriguez</h3>
              <p class="text-primary font-medium mb-3">Marketing Director</p>
              <p class="text-gray-600 text-sm mb-4">
                Strategic marketer with experience in EdTech and digital learning platforms.
              </p>
              <div class="flex justify-center space-x-3">
                <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors">
                  <span class="sr-only">LinkedIn</span>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-600 transition-colors">
                  <span class="sr-only">Twitter</span>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-16 px-6 md:px-12 lg:px-24 bg-primary text-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">100K+</div>
            <div class="text-white/80">Students</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">500+</div>
            <div class="text-white/80">Courses</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">200+</div>
            <div class="text-white/80">Instructors</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">95%</div>
            <div class="text-white/80">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Us -->
    <section class="py-16 px-6 md:px-12 lg:px-24">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">Get in Touch</h2>
        <p class="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Have questions or want to learn more about our platform? Contact us today!
        </p>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form class="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 class="text-xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <div class="space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <UInput id="name" placeholder="Your name" class="" />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <UInput id="email" type="email" placeholder="Your email" class="" />
                </div>
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <UInput id="subject" placeholder="Subject" class="" />
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <UTextarea id="message" placeholder="Your message" rows="4" class="" />
                </div>
                <UButton type="submit" class="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                  Send Message
                </UButton>
              </div>
            </form>
          </div>
          
          <div>
            <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full">
              <h3 class="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div class="space-y-6">
                <div>
                  <h4 class="text-lg font-medium text-gray-900 mb-2">Location</h4>
                  <p class="text-gray-600">123 Education Street, Learning City, LC 12345</p>
                </div>
                <div>
                  <h4 class="text-lg font-medium text-gray-900 mb-2">Email</h4>
                  <a href="mailto:info@example.com" class="text-primary hover:underline">info@example.com</a>
                </div>
                <div>
                  <h4 class="text-lg font-medium text-gray-900 mb-2">Phone</h4>
                  <a href="tel:+11234567890" class="text-primary hover:underline">+1 (123) 456-7890</a>
                </div>
                <div>
                  <h4 class="text-lg font-medium text-gray-900 mb-2">Follow Us</h4>
                  <div class="flex space-x-4">
                    <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                      <span class="sr-only">Facebook</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                      <span class="sr-only">Twitter</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                      <span class="sr-only">Instagram</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-primary transition-colors">
                      <span class="sr-only">LinkedIn</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div class="mt-8">
                <h4 class="text-lg font-medium text-gray-900 mb-4">Office Hours</h4>
                <ul class="space-y-2 text-gray-600">
                  <li class="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li class="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                  <li class="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FAQSection 
      :title="$t('pages.about.faq.title')" 
      :description="$t('pages.about.faq.desc')" 
      :items="faqItems" 
      :accordion="true" 
      :default-expanded-index="0" 
    />
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()
definePageMeta({
  title: () => t('pages.about.title') as string
})
useSeoMeta({
  title: () => t('pages.about.title') as string,
  description: () => t('pages.about.description') as string,
  ogTitle: () => t('pages.about.title') as string,
  ogDescription: () => t('pages.about.description') as string
})

const faqItems = [
  {
    question: t('pages.about.faq.q1'),
    answer: t('pages.about.faq.a1')
  },
  {
    question: t('pages.about.faq.q2'),
    answer: t('pages.about.faq.a2')
  },
  {
    question: t('pages.about.faq.q3'),
    answer: t('pages.about.faq.a3')
  },
  {
    question: t('pages.about.faq.q4'),
    answer: t('pages.about.faq.a4')
  },
  {
    question: t('pages.about.faq.q5'),
    answer: t('pages.about.faq.a5')
  }
]
</script>

<style scoped>
/* About Us page specific styles */
</style>
