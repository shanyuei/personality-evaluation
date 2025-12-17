<template>
  <section class="uno-relative uno-flex uno-items-center uno-justify-center uno-py-12 sm:uno-py-24 md:uno-py-32">
    <div class="uno-w-full uno-max-w-[720px] uno-px-4 sm:uno-px-6 md:uno-px-10">
      <div class="uno-p-4 sm:uno-p-6 md:uno-p-8">
        <h1
          class="uno-text-center uno-mb-3 uno-text-[#0F172A] uno-font-['Outfit'] uno-font-bold uno-text-2xl sm:uno-text-3xl md:uno-text-4xl lg:uno-text-5xl">
          Cancel Subscription</h1>
        <p class="uno-text-center uno-text-[#4E5255] uno-mb-6 sm:uno-mb-8">Easily cancel your subscription by entering
          the email
          used to create your account.</p>

        <div class="uno-mb-4 sm:uno-mb-6">
          <UFormField label="email" :ui="UFormFieldTheme">
            <UInput id="email" v-model="email" type="email" placeholder="Email Address" :ui="UInputTheme" />
          </UFormField>

          <p v-if="emailError" class="uno-mt-2 uno-text-sm uno-text-[#EA4C89]">Email Address is required. This field
            cannot be left blank.</p>
        </div>

        <div class="uno-mb-6 sm:uno-mb-8">
          <h2
            class="uno-text-[#0F172A] uno-font-['Outfit'] uno-font-semibold uno-text-lg sm:uno-text-xl uno-mb-3 sm:uno-mb-4">
            Why did you decide
            to cancel your subscription?</h2>
          <div class="uno-space-y-2 sm:uno-space-y-3">
            <label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">
              <UCheckbox v-model="reasons.difficult" value="difficult" :ui="UCheckboxTheme" />
              <span>I found Cacaoo difficult to use.</span>
            </label>
            <label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">
              <UCheckbox v-model="reasons.missing" value="missing" :ui="UCheckboxTheme" />
              <span>I didn't find the necessary function.</span>
            </label>
            <label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">
              <UCheckbox v-model="reasons.technical" value="technical" :ui="UCheckboxTheme" />
              <span>I faced technical issues while working with Cacaoo.</span>
            </label>
            <label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">
              <UCheckbox v-model="reasons.switching" value="switching" :ui="UCheckboxTheme" />
              <span>I had problems switching plans.</span>
            </label>
            <label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">
              <UCheckbox v-model="reasons.team" value="team" :ui="UCheckboxTheme" />
              <span>My team members do not want to use Cacaoo.</span>
            </label>
            <label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">
              <UCheckbox v-model="reasons.other" value="other" :ui="UCheckboxTheme" />
              <span>Other.</span>
            </label>
          </div>
        </div>

        <UButton
          class="uno-w-full uno-py-3 sm:uno-py-4 uno-px-4 uno-rounded-[16px] uno-transition-colors uno-duration-300 uno-mb-4 sm:uno-mb-6"
          :ui="UButtonTheme" @click="submit">
          Get Started
        </UButton>

        <div class="uno-space-y-3 sm:uno-space-y-4 uno-text-sm uno-text-[#4E5255]">
          <div class="uno-flex uno-items-start uno-gap-2 sm:uno-gap-3">
            <NuxtImg src="/images/common/email-icon-1.png" alt="Email Icon" width="16" height="16"
              class="uno-mt-0.5 uno-hidden md:uno-block " />
            <NuxtImg src="/images/common/email-icon-1.png" alt="Email Icon" width="50" height="50"
              class="uno-mt-0.5 uno-block md:uno-hidden" />
            <div>
              If you don't remember which email you used to register, check your inbox for emails from "Personality".
              Otherwise, contact our friendly customer support <span
                class="uno-underline uno-text-[#009D77]">here</span>

            </div>
          </div>
          <p class="uno-flex uno-items-start uno-gap-2 sm:uno-gap-3">
            <NuxtImg src="/images/common/user-icon-1.png" alt="User Icon" width="16" height="16"
              class="uno-mt-0.5  uno-hidden md:uno-block" />
            <NuxtImg src="/images/common/user-icon-1.png" alt="User Icon" width="50" height="50"
              class="uno-mt-0.5 uno-block md:uno-hidden" />
            You can also cancel your subscription by logging into your account, going to the "Membership" tab and
            clicking "Cancel Subscription".
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'


import UFormFieldTheme from "~/theme/UFormField";
import UInputTheme from "~/theme/UInput";
import UCheckboxTheme from "~/theme/UCheckbox";
import UButtonTheme from "~/theme/UButton";
const { t } = useI18n()
definePageMeta({
  title: () => 'seo.orders.cancelSubscription.title'
})
useSeoMeta({
  title: () => t('seo.orders.cancelSubscription.title') as string,
  description: () => t('seo.orders.cancelSubscription.description') as string
})
const email = ref('')
const reasons = ref({
  difficult: false,
  missing: false,
  technical: false,
  switching: false,
  team: false,
  other: false,

})
const emailError = ref(false)

const submit = () => {
  emailError.value = email.value.trim() === ''
  if (emailError.value) return
  // TODO: integrate real cancel subscription flow here
}
</script>

<style scoped></style>
