<template>
  <section class="uno-relative uno-flex uno-items-center uno-justify-center uno-py-24 sm:uno-py-32">
    <div class="uno-w-full uno-max-w-[720px] uno-px-6 sm:uno-px-10">
      <div class="uno-p-8 sm:uno-p-10">
        <h1 class="uno-text-center uno-mb-3 uno-text-[#0F172A] uno-font-['Outfit'] uno-font-bold uno-text-4xl sm:uno-text-5xl">Cancel Subscription</h1>
        <p class="uno-text-center uno-text-[#4E5255] uno-mb-8">Easily cancel your subscription by entering the email used to create your account.</p>

        <div class="uno-mb-6">
          <label uno-for="email" class="uno-block uno-text-sm uno-font-medium uno-text-gray-700 uno-mb-2">Email</label>
          <input
            id="email"
            type="email"
            v-model="email"
            class="uno-w-full uno-px-4 uno-py-3 uno-border uno-border-gray-300 uno-rounded-[16px] focus:uno-outline-none focus:uno-ring-2 focus:uno-ring-[#009D77] focus:uno-border-transparent uno-transition-all uno-shadow-sm"
            placeholder="Email Address"
          >
          <p v-if="emailError" class="uno-mt-2 uno-text-sm uno-text-[#EA4C89]">Email Address is required. This field cannot be left blank.</p>
        </div>

        <div class="uno-mb-8">
          <h2 class="uno-text-[#0F172A] uno-font-['Outfit'] uno-font-semibold uno-text-xl uno-mb-4">Why did you decide to cancel your subscription?</h2>
          <div class="uno-space-y-3">
            <label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">
              <input type="checkbox" class="uno-mt-1 uno-h-4 uno-w-4" v-model="reasons" uno-value="difficult" >
              <span>I found Cacaoo difficult to use.</span>
            </label>
            <label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">
              <input type="checkbox" class="uno-mt-1 uno-h-4 uno-w-4" v-model="reasons" uno-value="missing" >
              <span>I didn't find the necessary function.</span>
            </label>
            <label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">
              <input type="checkbox" class="uno-mt-1 uno-h-4 uno-w-4" v-model="reasons" uno-value="technical" >
              <span>I faced technical issues while working with Cacaoo.</span>
            </label>
            <label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">
              <input type="checkbox" class="uno-mt-1 uno-h-4 uno-w-4" v-model="reasons" uno-value="switching" >
              <span>I had problems switching plans.</span>
            </label>
            <label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">
              <input type="checkbox" class="uno-mt-1 uno-h-4 uno-w-4" v-model="reasons" uno-value="team" >
              <span>My team members do not want to use Cacaoo.</span>
            </label>
            <label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">
              <input type="checkbox" class="uno-mt-1 uno-h-4 uno-w-4" v-model="reasons" uno-value="other" >
              <span>Other.</span>
            </label>
          </div>
        </div>

        <button class="uno-w-full uno-bg-[#009D77] uno-text-white uno-font-['Outfit'] uno-font-medium uno-py-4 uno-px-4 uno-rounded-[16px] hover:uno-bg-[#0AA17F] uno-transition-colors uno-duration-300 uno-mb-6" @click="submit">
          Get Started
        </button>

        <div class="uno-space-y-3 uno-text-sm uno-text-[#4E5255]">
          <p>
            If you don't remember which email you used to register, check your inbox for emails from "Personality".
            Otherwise, contact our friendly customer support <a href="/support" class="uno-underline">here</a>.
          </p>
          <p>
            You can also cancel your subscription by logging into your account, going to the "Membership" tab and clicking "Cancel Subscription".
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// const { t } = useI18n()
// definePageMeta({
//   title: t('pages.orders.cancelSubscription.title') as string
// })
// useSeoMeta({
//   title: () => t('pages.orders.cancelSubscription.title') as string,
//   description: () => t('pages.orders.cancelSubscription.description') as string,
//   ogTitle: () => t('pages.orders.cancelSubscription.title') as string,
//   ogDescription: () => t('pages.orders.cancelSubscription.description') as string
// })
const email = ref('')
const reasons = ref<string[]>(['difficult'])
const emailError = ref(false)

const submit = () => {
  emailError.value = email.value.trim() === ''
  if (emailError.value) return
  // TODO: integrate real cancel subscription flow here
}
</script>

<style scoped></style>
