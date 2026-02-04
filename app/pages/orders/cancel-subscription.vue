<template>
  <section class="uno-relative uno-flex uno-items-center uno-justify-center uno-py-12 sm:uno-py-24 md:uno-py-32">
    <div class="uno-w-full uno-max-w-[720px] uno-px-4 sm:uno-px-6 md:uno-px-10">
      <div class="uno-p-4 sm:uno-p-6 md:uno-p-8">
        <h1
          class="uno-text-center uno-mb-3 uno-text-[#0F172A] uno-font-Outfit uno-font-bold uno-text-2xl sm:uno-text-3xl md:uno-text-4xl lg:uno-text-5xl">
          {{ t('pages.orders.cancel.subscription.title') }}</h1>
        <p class="uno-text-center uno-text-[#4E5255] uno-mb-6 sm:uno-mb-8">
          {{ t('pages.orders.cancel.subscription.description') }}
        </p>

        <div class="uno-mb-4 sm:uno-mb-6">
          <UFormField :label="t('pages.orders.cancel.subscription.emailLabel')" :ui="UFormFieldTheme">
            <UInput id="email" v-model="email" type="email"
              :placeholder="t('pages.orders.cancel.subscription.emailPlaceholder')" :ui="UInputTheme" />
          </UFormField>

          <p v-if="emailError" class="uno-mt-2 uno-text-sm uno-text-[#EA4C89]">
            {{ t('pages.orders.cancel.subscription.emailError') }}
          </p>
        </div>

        <div class="uno-mb-6 sm:uno-mb-8">
          <h2 class="uno-text-[#0F172A] uno-font-Outfit uno-font-semibold uno-text-[16px] uno-mb-3 sm:uno-mb-4">
            {{ t('pages.orders.cancel.subscription.reasonTitle') }}</h2>
          <CheckboxGroup>
            <label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">
              <Checkbox v-model="reasons.difficult" value="difficult" />
              <span>{{ t('pages.orders.cancel.subscription.reasonDifficult') }}</span>
            </label>
            <label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">
              <Checkbox v-model="reasons.missing" value="missing" />
              <span>{{ t('pages.orders.cancel.subscription.reasonMissing') }}</span>
            </label>
            <label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">
              <Checkbox v-model="reasons.technical" value="technical" />
              <span>{{ t('pages.orders.cancel.subscription.reasonTechnical') }}</span>
            </label>
            <label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">
              <Checkbox v-model="reasons.switching" value="switching" />
              <span>{{ t('pages.orders.cancel.subscription.reasonSwitching') }}</span>
            </label>
            <label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">
              <Checkbox v-model="reasons.team" value="team" />
              <span>{{ t('pages.orders.cancel.subscription.reasonTeam') }}</span>
            </label>
              <label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">
              <Checkbox v-model="reasons.budget" value="budget" />
              <span>{{ t('pages.orders.cancel.subscription.reasonBudget') }}</span>
            </label>
            <label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">
              <Checkbox v-model="reasons.other" value="other" />
              <span>{{ t('pages.orders.cancel.subscription.reasonOther') }}</span>
            </label>
          </CheckboxGroup>
        </div>

        <PrimaryButton
          class="uno-w-full uno-py-3 sm:uno-py-4 uno-px-4 uno-rounded-[16px] uno-transition-colors uno-duration-300 uno-mb-4 sm:uno-mb-6"
          @click="submit">
          {{ t('pages.orders.cancel.subscription.submitButton') }}
        </PrimaryButton>

        <div class="uno-space-y-3 sm:uno-space-y-4 uno-text-sm uno-text-[#4E5255]">
          <div class="uno-flex uno-items-start uno-gap-2 sm:uno-gap-3">
            <NuxtImg src="/images/common/email-icon-1.png" alt="Email Icon" width="16" height="16"
              class="uno-mt-0.5 uno-hidden md:uno-block " />
            <NuxtImg src="/images/common/email-icon-1.png" alt="Email Icon" width="50" height="50"
              class="uno-mt-0.5 uno-block md:uno-hidden" />
            <div class="uno-text-xs">
              {{ t('pages.orders.cancel.subscription.contactSupport') }}
              <!-- <span
                class="uno-underline uno-text-[#009D77]">here</span> -->

            </div>
          </div>
          <p class="uno-flex uno-items-start uno-gap-2 sm:uno-gap-3 uno-text-xs">
            <NuxtImg src="/images/common/user-icon-1.png" alt="User Icon" width="16" height="16"
              class="uno-mt-0.5  uno-hidden md:uno-block" />
            <NuxtImg src="/images/common/user-icon-1.png" alt="User Icon" width="50" height="50"
              class="uno-mt-0.5 uno-block md:uno-hidden" />
            <!-- You can also cancel your subscription by logging into your account, going to the "Membership" tab and
            clicking "Cancel Subscription". -->
            {{ t('pages.orders.cancel.subscription.cancelSubscription') }}
          </p>
        </div>
      </div>
    </div>


    <UModal v-model:open="showConfirmModal" :closeable="true" :ui="{
      content: 'uno-rounded-16px uno-border-0 uno-shadow-none '
    }">
      <template #content>
        <div class="uno-p-6 sm:uno-p-8">
          <h2 class="uno-font-Outfit uno-font-semibold uno-text-[24px] uno-leading-[150%] uno-text-center uno-mb-4">
            {{ t('pages.orders.cancel.subscription.confirmTitle') }}
          </h2>
          <p
            class="uno-text-[#4E5255] uno-font-Outfit uno-font-normal uno-text-[16px] uno-leading-[150%] uno-text-center uno-mb-6">
            {{ t('pages.orders.cancel.subscription.confirmDesc') }}
            <!-- Are you sure you want to cancel your subscription? You will lose access to your data and this action
            <span class="uno-font-Outfit uno-font-bold uno-text-[16px] uno-leading-[150%]">can't be undone!</span> -->
          </p>
          <div class="uno-flex uno-flex-col sm:uno-flex-row uno-gap-4 uno-justify-center">
            <button
              class="uno-w-full uno-h-[40px] uno-gap-2 uno-pt-2 uno-pr-6 uno-pb-2 uno-pl-6 uno-rounded-[8px] uno-bg-gray-300 uno-text-[#0F172A] uno-font-Outfit uno-font-medium uno-text-[16px] uno-leading-[150%] uno-transition-colors hover:uno-bg-gray-400 focus-visible:uno-outline-none focus-visible:uno-ring-0 sm:uno-w-[160px] sm:uno-h-[40px] uno-order-2 sm:uno-order-1"
              @click="showConfirmModal = false">
              <!-- Never mind -->
               {{ t('pages.orders.cancel.subscription.confirmCancel') }}
            </button>
            <button
              class="uno-w-full uno-h-[40px] uno-gap-2 uno-pt-2 uno-pr-6 uno-pb-2 uno-pl-6 uno-rounded-[8px] uno-bg-[#EA4C89] uno-text-white uno-font-Outfit uno-font-medium uno-text-[16px] uno-leading-[150%] uno-transition-colors hover:uno-bg-[#F06B99] focus-visible:uno-outline-none focus-visible:uno-ring-0 sm:uno-w-[218px] sm:uno-h-[40px] uno-order-1 sm:uno-order-2"
              @click="confirmCancel">
              <!-- Yes, Cancel subscription -->
               {{ t('pages.orders.cancel.subscription.confirmSubmit') }}
            </button>
          </div>
        </div>
      </template>

    </UModal>

    <!-- Confirmation Success Modal -->
    <UModal v-model:open="showSuccessModal" :closeable="true" :ui="{
      content: 'uno-rounded-16px uno-border-0 uno-shadow-none'
    }">
      <template #content>
        <div class="uno-p-6 sm:uno-p-8 uno-flex uno-flex-col uno-items-center">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.9993 51.3327C40.886 51.3327 51.3327 40.886 51.3327 27.9993C51.3327 15.1127 40.886 4.66602 27.9993 4.66602C15.1127 4.66602 4.66602 15.1127 4.66602 27.9993C4.66602 40.886 15.1127 51.3327 27.9993 51.3327Z"
              fill="#009D77" />
            <path d="M18.203 30.8001L25.9406 36.3992L39.3869 18.1998" stroke="white" stroke-width="4.2"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <h2 class="uno-font-Outfit uno-font-semibold uno-text-[24px] uno-leading-[150%] uno-text-center uno-mb-8px">
            {{ t('pages.orders.cancel.subscription.successTitle') }}
          </h2>
          <p
            class="uno-text-[#4E5255] uno-font-Outfit uno-font-normal uno-text-[16px] uno-leading-[150%] uno-text-center">
            {{ t('pages.orders.cancel.subscription.successDesc') }}
          </p>

        </div>
      </template>

    </UModal>
  </section>

  <!-- Confirmation Modal -->

</template>

<script setup lang="ts">
import { ref } from 'vue'


import UFormFieldTheme from "~/theme/UFormField";
import UInputTheme from "~/theme/UInput";
import Checkbox from '~/components/ui/Checkbox.vue';
import CheckboxGroup from '~/components/ui/CheckboxGroup.vue';
import PrimaryButton from '~/components/ui/PrimaryButton.vue';
const { t } = useI18n()
definePageMeta({
  title: () => 'seo.orders.cancelSubscription.title',
  layoutShowPageTopIcons: false,
  path: '/cancel-subscription'
})
useSeoMeta({
  title: () => t('seo.orders.cancelSubscription.title', { separator: '|' }) as string,
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
  budget: false,

})
const emailError = ref(true)
const showConfirmModal = ref(false)
const showSuccessModal = ref(false)

const submit = () => {
  showConfirmModal.value = true
  // emailError.value = email.value.trim() === ''
  // if (emailError.value) return
  // showConfirmModal.value = true
}

const confirmCancel = () => {
  showConfirmModal.value = false
  // TODO: integrate real cancel subscription flow here
  console.log('Subscription cancelled')
  showSuccessModal.value = true
}
</script>

<style scoped></style>
