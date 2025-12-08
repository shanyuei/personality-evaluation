<template>
  <div class="uno-relative uno-flex uno-items-center uno-justify-center uno-py-24 sm:uno-py-32">
    <div class="uno-w-full uno-max-w-[720px] uno-px-6 sm:uno-px-10">
      <!-- 登录表单（Nuxt UI） -->
      <div class="uno-rounded-[24px] uno-p-8 sm:uno-p-10">
        <h1 class="uno-text-center uno-mb-10 uno-text-[#0F172A] uno-font-['Outfit'] uno-font-bold uno-text-4xl sm:uno-text-5xl">{{ $t('auth.signIn.title') }}</h1>

        <UForm :state="{ email, password }" class="uno-space-y-6">
          <!-- Email -->
          <UFormField :label="$t('account.settings.profile.emailPlaceholder')" :ui="UFormFieldTheme">
            <UInput v-model="email" type="email" :placeholder="$t('account.settings.profile.emailPlaceholder')" :ui="UInputTheme" />
          </UFormField>

          <!-- Password -->
          <UFormField :label="$t('auth.signIn.passwordLabel')" :ui="UFormFieldTheme">
            <UInput v-model="password" type="password" :placeholder="$t('auth.signIn.passwordPlaceholder')" :ui="UInputTheme" />
          </UFormField>

          <!-- Submit -->
          <UButton
            :ui="UButtonTheme"
            color="primary"
            :disabled="!canSubmit"
            @click="handleSignIn"
          >
            {{ $t('auth.signIn.submit') }}
          </UButton>
        </UForm>

        <!-- Sign Up Link -->
        <div class="uno-flex uno-items-center uno-justify-between uno-mt-6">
          <p class="uno-text-[#8d8e8f] uno-font-['Outfit']">{{ $t('auth.signIn.noAccount') }}</p>
          <NuxtLink to="/auth/sign-up" class="uno-text-[#0F172A] hover:uno-text-[#4E5255] uno-font-['Outfit'] uno-underline uno-underline-offset-4">{{ $t('auth.signIn.signUp') }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// i18n used in template via $t
import UFormFieldTheme from "~/theme/UFormField";
import UInputTheme from "~/theme/UInput";
import UButtonTheme from "~/theme/UButton";
// definePageMeta({
//   title: t('auth.signIn.title') as string
// })
// useSeoMeta({
//   title: () => t('auth.signIn.title') as string,
//   description: () => t('auth.signIn.description') as string,
//   ogTitle: () => t('auth.signIn.title') as string,
//   ogDescription: () => t('auth.signIn.description') as string
// })
const email = ref('')
const password = ref('')
const canSubmit = computed(() => {
  const e = email.value.trim()
  const p = password.value.trim()
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
  return emailOk && !!p
})

const handleSignIn = () => {
  if (!canSubmit.value) return
  console.log('Sign in attempt', { email: email.value })
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
