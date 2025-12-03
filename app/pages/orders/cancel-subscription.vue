<template>
  <section class="relative flex items-center justify-center py-24 sm:py-32">
    <div class="w-full max-w-[720px] px-6 sm:px-10">
      <div class=" p-8 sm:p-10">
        <h1 class="text-center mb-3 text-[#0F172A] font-['Outfit'] font-bold text-4xl sm:text-5xl">Cancel Subscription</h1>
        <p class="text-center text-[#4E5255] mb-8">Easily cancel your subscription by entering the email used to create your account.</p>

        <div class="mb-6">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            id="email"
            type="email"
            v-model="email"
            class="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#009D77] focus:border-transparent transition-all shadow-sm"
            placeholder="Email Address"
          >
          <p v-if="emailError" class="mt-2 text-sm text-[#EA4C89]">Email Address is required. This field cannot be left blank.</p>
        </div>

        <div class="mb-8">
          <h2 class="text-[#0F172A] font-['Outfit'] font-semibold text-xl mb-4">Why did you decide to cancel your subscription?</h2>
          <div class="space-y-3">
            <label class="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" class="mt-1 h-4 w-4" v-model="reasons" value="difficult" >
              <span>I found Cacaoo difficult to use.</span>
            </label>
            <label class="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" class="mt-1 h-4 w-4" v-model="reasons" value="missing" >
              <span>I didn't find the necessary function.</span>
            </label>
            <label class="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" class="mt-1 h-4 w-4" v-model="reasons" value="technical" >
              <span>I faced technical issues while working with Cacaoo.</span>
            </label>
            <label class="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" class="mt-1 h-4 w-4" v-model="reasons" value="switching" >
              <span>I had problems switching plans.</span>
            </label>
            <label class="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" class="mt-1 h-4 w-4" v-model="reasons" value="team" >
              <span>My team members do not want to use Cacaoo.</span>
            </label>
            <label class="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" class="mt-1 h-4 w-4" v-model="reasons" value="other" >
              <span>Other.</span>
            </label>
          </div>
        </div>

        <button class="w-full bg-[#009D77] text-white font-['Outfit'] font-medium py-4 px-4 rounded-[16px] hover:bg-[#0AA17F] transition-colors duration-300 mb-6" @click="submit">
          Get Started
        </button>

        <div class="space-y-3 text-sm text-[#4E5255]">
          <p>
            If you don't remember which email you used to register, check your inbox for emails from "Personality".
            Otherwise, contact our friendly customer support <a href="/support" class="underline">here</a>.
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
