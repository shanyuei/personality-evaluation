<template>
  <div class="page-container uno-py-12 md:uno-py-16">
    <!-- Top Section: Summary & Form -->
    <div class="uno-grid uno-grid-cols-1 lg:uno-grid-cols-12 uno-gap-8 lg:uno-gap-16 uno-mb-24 uno-items-start">
      
      <!-- Left Column: Summary -->
      <div class="lg:uno-col-span-5">
        <h1 class="uno-text-4xl md:uno-text-5xl uno-font-bold uno-text-[#011813] uno-mb-4 uno-font-['Outfit']">
          {{ $t('pages.order.create.title') }}
        </h1>
        <p class="uno-text-[#4E5255] uno-text-lg uno-mb-8 uno-font-['Outfit']">
          {{ $t('pages.order.create.subtitle') }}
        </p>

        <!-- Summary Card -->
        <div class="uno-bg-[#EAFBF6] uno-rounded-[24px] uno-p-6 md:uno-p-8">
          <div class="uno-flex uno-justify-between uno-items-baseline uno-mb-6">
            <h3 class="uno-text-2xl uno-font-bold uno-text-[#009D77]">{{ $t('pages.order.create.summary.trial') }}</h3>
            <span class="uno-text-2xl uno-font-bold uno-text-[#009D77]">{{ $t('pages.order.create.summary.price') }}</span>
          </div>

          <ul class="uno-space-y-4 uno-mb-8">
            <li class="uno-flex uno-items-start uno-gap-3">
              <div class="uno-w-6 uno-h-6 uno-rounded-full uno-bg-[#009D77] uno-flex uno-items-center uno-justify-center uno-shrink-0 uno-mt-0.5">
                 <UIcon name="i-lucide-check" class="uno-text-white uno-w-4 uno-h-4" />
              </div>
              <span class="uno-text-[#011813] uno-font-medium">{{ $t('pages.order.create.summary.benefit1') }}</span>
            </li>
            <li class="uno-flex uno-items-start uno-gap-3">
              <div class="uno-w-6 uno-h-6 uno-rounded-full uno-bg-[#009D77] uno-flex uno-items-center uno-justify-center uno-shrink-0 uno-mt-0.5">
                 <UIcon name="i-lucide-check" class="uno-text-white uno-w-4 uno-h-4" />
              </div>
              <span class="uno-text-[#011813] uno-font-medium">{{ $t('pages.order.create.summary.benefit2') }}</span>
            </li>
            <li class="uno-flex uno-items-start uno-gap-3">
              <div class="uno-w-6 uno-h-6 uno-rounded-full uno-bg-[#009D77] uno-flex uno-items-center uno-justify-center uno-shrink-0 uno-mt-0.5">
                 <UIcon name="i-lucide-check" class="uno-text-white uno-w-4 uno-h-4" />
              </div>
              <span class="uno-text-[#011813] uno-font-medium">{{ $t('pages.order.create.summary.benefit3') }}</span>
            </li>
          </ul>

          <p class="uno-text-xs uno-text-[#4E5255] uno-leading-relaxed">
            {{ $t('pages.order.create.summary.terms') }}
          </p>
        </div>
      </div>

      <!-- Right Column: Payment Form -->
      <div class="lg:uno-col-span-7">
        <div class="uno-bg-white uno-rounded-[24px] uno-p-6 md:uno-p-8 uno-shadow-lg uno-border uno-border-[#E7E7E8]">
          <form class="uno-space-y-6" @submit.prevent="handleSubmit">
            <!-- Email -->
            <div class="uno-space-y-2">
              <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{ $t('pages.order.create.form.email') }}</label>
     
              <UInput
                v-model="form.email"
                :placeholder="$t('pages.order.create.form.emailPlaceholder')"
                size="xl"
                :ui="{ rounded: 'rounded-[12px]' }"
                class="uno-w-full"
              />
            </div>

            <!-- Cardholder Name -->
            <div class="uno-space-y-2">
              <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{ $t('pages.order.create.form.name') }}</label>
              <UInput
                v-model="form.name"
                :placeholder="$t('pages.order.create.form.namePlaceholder')"
                size="xl"
                :ui="{ rounded: 'rounded-[12px]' }"
                class="uno-w-full"
              />
            </div>

            <!-- Card Number -->
            <div class="uno-space-y-2">
              <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{ $t('pages.order.create.form.cardNumber') }}</label>
              <UInput
                v-model="form.cardNumber"
                :placeholder="$t('pages.order.create.form.cardNumberPlaceholder')"
                size="xl"
                icon="i-lucide-credit-card"
                :ui="{ rounded: 'rounded-[12px]' }"
                class="uno-w-full"
              />
            </div>

            <!-- Expires, CVV, Zip -->
            <div class="uno-grid uno-grid-cols-3 uno-gap-4">
              <div class="uno-space-y-2">
                <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{ $t('pages.order.create.form.expires') }}</label>
                <UInput
                  v-model="form.expires"
                  :placeholder="$t('pages.order.create.form.expiresPlaceholder')"
                  size="xl"
                  :ui="{ rounded: 'rounded-[12px]' }"
                  class="uno-w-full"
                />
              </div>
              <div class="uno-space-y-2">
                <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{ $t('pages.order.create.form.cvv') }}</label>
                <UInput
                  v-model="form.cvv"
                  :placeholder="$t('pages.order.create.form.cvvPlaceholder')"
                  size="xl"
                  :ui="{ rounded: 'rounded-[12px]' }"
                  class="uno-w-full"
                />
              </div>
              <div class="uno-space-y-2">
                <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{ $t('pages.order.create.form.zip') }}</label>
                <UInput
                  v-model="form.zip"
                  :placeholder="$t('pages.order.create.form.zipPlaceholder')"
                  size="xl"
                  :ui="{ rounded: 'rounded-[12px]' }"
                  class="uno-w-full"
                />
              </div>
            </div>

            <!-- Consent Checkbox -->
            <div class="uno-flex uno-items-start uno-gap-3">
              <UCheckbox v-model="form.consent" :ui="{ base: 'uno-w-5 uno-h-5', rounded: 'rounded' }" />
              <p class="uno-text-xs uno-text-[#4E5255] uno-leading-tight uno-mt-0.5">
                {{ $t('pages.order.create.form.consent') }}
              </p>
            </div>

            <!-- Buttons -->
            <div class="uno-space-y-3">
              <button class="uno-w-full uno-h-[48px] uno-bg-[#009D77] hover:uno-bg-[var(--color-green-2)] uno-text-white uno-rounded-[12px] uno-font-bold uno-transition-colors">
                {{ $t('pages.order.create.form.subscribeBtn') }}
              </button>
              
              <button type="button" class="uno-w-full uno-h-[48px] uno-bg-[#191919] hover:uno-bg-black uno-text-white uno-rounded-[12px] uno-font-bold uno-transition-colors uno-flex uno-items-center uno-justify-center uno-gap-2">
                {{ $t('pages.order.create.form.paypalBtn') }}
                <UIcon name="i-simple-icons-paypal" class="uno-text-white" />
              </button>

              <button type="button" class="uno-w-full uno-h-[48px] uno-bg-[#191919] hover:uno-bg-black uno-text-white uno-rounded-[12px] uno-font-bold uno-transition-colors uno-flex uno-items-center uno-justify-center uno-gap-2">
                 {{ $t('pages.order.create.form.gpayBtn') }}
                 <UIcon name="i-simple-icons-googlepay" class="uno-text-white" />
              </button>
            </div>

            <!-- Payment Icons -->
            <div class="uno-flex uno-items-center uno-justify-center uno-gap-4 uno-mt-6 uno-opacity-60">
               <NuxtImg src="/images/orders/create/1.png" height="24" class="uno-h-6 uno-w-auto" />
               <NuxtImg src="/images/orders/create/2.png" height="24" class="uno-h-6 uno-w-auto" />
               <NuxtImg src="/images/orders/create/3.png" height="24" class="uno-h-6 uno-w-auto" />
               <NuxtImg src="/images/orders/create/4.png" height="24" class="uno-h-6 uno-w-auto" />
            </div>

          </form>
        </div>
      </div>
    </div>

    <!-- Trust Badges Section -->
    <div class="uno-grid uno-grid-cols-2 md:uno-grid-cols-4 uno-gap-8 uno-mb-24 uno-max-w-5xl uno-mx-auto">
      <div v-for="(item, index) in trustItems" :key="index" class="uno-flex uno-flex-col uno-items-center uno-text-center">
        <NuxtImg :src="item.image" width="64" height="64" class="uno-w-16 uno-h-16 uno-mb-4" />
        <h4 class="uno-text-[#4E5255] uno-font-bold uno-font-['Outfit']">{{ item.text }}</h4>
      </div>
    </div>

    <!-- Testimonials Section -->
    <TestimonialsSection 
      :title="$t('pages.order.create.testimonials.title')" 
      :description="$t('pages.order.create.testimonials.subtitle')"
      :rating="5"
      :reviews="reviews"
    />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// Form State
const form = ref({
  email: '',
  name: '',
  cardNumber: '',
  expires: '',
  cvv: '',
  zip: '',
  consent: false
})

const handleSubmit = () => {
  console.log('Form submitted', form.value)
  // Implement submission logic here
}

// Trust Badges Data
const trustItems = computed(() => [
  { text: t('pages.order.create.trust.us'), image: '/images/orders/create/5.png' },
  { text: t('pages.order.create.trust.noCharge'), image: '/images/orders/create/6.png' },
  { text: t('pages.order.create.trust.refund'), image: '/images/orders/create/7.png' },
  { text: t('pages.order.create.trust.cancel'), image: '/images/orders/create/8.png' },
])

// Testimonials Data
const reviews = [
  {
    name: 'Brandon Michael',
    role: 'UI/UX Designer',
    avatarUrl: '/images/home/8.png',
    text: 'An exceptional platform for career development! The current curriculum, skilled instructors, and hands-on learning ensure every moment is impactful, enriching, and truly rewarding.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    avatarUrl: '/images/home/11.png',
    text: 'This platform transformed my understanding of my own strengths. The insights were spot on and helped me navigate a career change with confidence.'
  },
  {
    name: 'David Chen',
    role: 'Software Engineer',
    avatarUrl: '/images/about/3.png',
    text: 'The personality tests are incredibly detailed. I was skeptical at first, but the results explained so much about my work style and preferences.'
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Specialist',
    avatarUrl: '/images/home/8.png',
    text: 'Great value for money. The unlimited reports option gave me access to deep dives that I use regularly for personal growth and team building.'
  },
  {
    name: 'Michael Wilson',
    role: 'HR Director',
    avatarUrl: '/images/home/11.png',
    text: 'We use this for our entire team. It has improved our communication and understanding of each other significantly. Highly recommended!'
  }
]
</script>
