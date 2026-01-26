<template>
  <div class="uno-relative uno-flex uno-items-center uno-justify-center uno-py-24 sm:uno-py-32">
    <div class="uno-w-full uno-max-w-[720px] uno-px-6 sm:uno-px-10">
      <!-- 登录表单（Nuxt UI） -->
      <div class="uno-rounded-[24px] uno-p-8 sm:uno-p-10">
        <h1 class="uno-text-center uno-mb-10 uno-text-[#0F172A] uno-font-Outfit uno-font-[600] uno-text-4xl sm:uno-text-5xl">{{ $t('pages.auth.signIn.title') }}</h1>

        <UForm :state="{ email, password }" class="uno-space-y-6">
          <!-- Email -->
          <UFormField :label="$t('pages.account.settings.profile.emailPlaceholder')" :ui="UFormFieldTheme">
            <UInput v-model="email" type="email" :placeholder="$t('pages.account.settings.profile.emailPlaceholder')" :ui="UInputTheme" />
          </UFormField>

          <!-- Password -->
          <UFormField :label="$t('pages.auth.signIn.passwordLabel')" :ui="UFormFieldTheme">
            <UInput v-model="password" type="password" :placeholder="$t('pages.auth.signIn.passwordPlaceholder')" :ui="UInputTheme" />
          </UFormField>

          <!-- Submit -->
          <UButton
            :ui="UButtonTheme"
            color="primary"
            :disabled="!canSubmit"
            @click="handleSignIn"
          >
            {{ $t('pages.auth.signIn.submit') }}
          </UButton>
        </UForm>

        <!-- Sign Up Link -->
        <div class="uno-flex uno-items-center uno-justify-between uno-mt-6">
          <p class="uno-text-[#323233] uno-text-sm uno-font-Outfit">{{ $t('pages.auth.signIn.noAccount') }}</p>
          <AppLink :to="'/auth/sign-up'" class="uno-text-[#323233] hover:uno-text-[#4E5255] uno-text-sm uno-font-Outfit uno-underline uno-underline-offset-4">{{ $t('pages.auth.signIn.signUp') }}</AppLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// i18n used in template via $t
import { ref, computed } from 'vue'


import UFormFieldTheme from "~/theme/UFormField";
import UInputTheme from "~/theme/UInput";
import UButtonTheme from "~/theme/UButton";
import { useUserStore } from '~/stores/modules/user';

const { t } = useI18n()

definePageMeta({
  title: () => 'seo.auth.signIn.title'
})

useSeoMeta({
  title: () => t('seo.auth.signIn.title') as string,
  description: () => t('seo.auth.signIn.description') as string
})
const userStore = useUserStore()
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
  userStore.login({ email: email.value, password: password.value }).then(() => {
    const localePath = useLocalePath()
    navigateTo(localePath('/'))
  })
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
