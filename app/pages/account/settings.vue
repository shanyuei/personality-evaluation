<template>
  <div class="uno-max-w-[720px] uno-mx-auto">
    <h1
      class="uno-text-3xl md:uno-text-4xl uno-font-['Outfit'] uno-font-bold uno-text-center uno-text-gray-900 uno-mb-8">
      {{
        $t('pages.account.settings.title') }}</h1>

    <div
      class="uno-shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] uno-rounded-[24px] uno-border uno-border-solid uno-border-[1px] uno-border-[#e7e7e8] bg-white p-[32px]">
      <!-- Profile details -->
      <section>
        <h2 class="uno-font-semibold uno-text-[24px] uno-text-[#323233] uno-leading-[36px] uno-mb-[16px]">{{
          $t('pages.account.settings.profile.title') }}</h2>
        <div class="uno-space-y-4">
          <UFormField :ui="UFormFieldTheme" :label="$t('pages.account.settings.profile.namePlaceholder')">
            <UInput v-model="name" :ui="UInputTheme" type="text"
              :placeholder="$t('pages.account.settings.profile.namePlaceholder')" />
          </UFormField>
          <UFormField :ui="UFormFieldTheme" :label="$t('pages.account.settings.profile.emailPlaceholder')">
            <UInput v-model="email" :ui="UInputTheme" type="email"
              :placeholder="$t('pages.account.settings.profile.emailPlaceholder')" />
          </UFormField>
          <div>
            <button
              class="uno-w-[217px] uno-h-[56px] uno-bg-[var(--color-green-1)] uno-rounded-[8px] uno-font-bold uno-text-[18px] uno-text-[#ffffff] uno-leading-[27px]"
              :disabled="!profileValid" @click="onSaveProfile">{{ $t('pages.account.settings.profile.submit')
              }}</button>
          </div>
          <p v-if="profileMessage" class="uno-text-sm uno-text-green-700 uno-mt-2">{{ profileMessage }}</p>
        </div>
      </section>

      <!-- Change password -->
      <section class="uno-mt-34px">
        <h2 class="uno-font-semibold uno-text-[24px] uno-text-[#323233] uno-leading-[36px] uno-mb-[16px]">{{
          $t('pages.account.settings.password.title') }}</h2>
        <div class="uno-space-y-4">
          <UFormField :ui="UFormFieldTheme">
            <UInput v-model="currentPassword" :ui="UInputTheme" type="password"
              :placeholder="$t('pages.account.settings.password.current')" />
          </UFormField>
          <UFormField :ui="UFormFieldTheme">
            <UInput v-model="newPassword" :ui="UInputTheme" type="password"
              :placeholder="$t('pages.account.settings.password.new')" />
          </UFormField>
          <UFormField :ui="UFormFieldTheme">
            <UInput v-model="repeatNewPassword" :ui="UInputTheme" type="password"
              :placeholder="$t('pages.account.settings.password.repeat')" />
          </UFormField>
          <button
            class="uno-w-[217px] uno-h-[56px] uno-bg-[var(--color-green-1)] uno-rounded-[8px] uno-font-bold uno-text-[18px] uno-text-[#ffffff] uno-leading-[27px]"
            :disabled="!passwordValid" @click="onChangePassword">{{ $t('pages.account.settings.password.submit')
            }}</button>
          <p v-if="passwordMessage" class="uno-text-sm"
            :class="passwordSuccess ? 'uno-text-green-700' : 'uno-text-red-600'">{{ passwordMessage }}</p>
        </div>
      </section>

      <!-- Change language -->
      <section class="uno-mt-34px">
        <h2 class="uno-font-semibold uno-text-[24px] uno-text-[#323233] uno-leading-[36px] uno-mb-[16px]">{{
          $t('pages.account.settings.language.title') }}</h2>
        <UFormField :ui="UFormFieldTheme">
          <USelect v-model="language" :ui="USelectTheme" :items="languageOptions" value-attribute="value"
            option-attribute="label" />
        </UFormField>
        <div class="uno-mt-4">
          <button
            class="uno-w-[217px] uno-h-[56px] uno-bg-[var(--color-green-1)] uno-rounded-[8px] uno-font-bold uno-text-[18px] uno-text-[#ffffff] uno-leading-[27px]"
            @click="onLanguageSaved">{{
              $t('pages.account.settings.language.submit') }}</button>
          <p v-if="languageMessage" class="uno-text-sm uno-text-green-700 uno-mt-2">{{ languageMessage }}</p>
        </div>
      </section>

      <!-- Delete account -->
      <section class="uno-mt-34px">
        <h2 class="uno-font-semibold uno-text-[24px] uno-text-[#323233] uno-leading-[36px] uno-mb-[16px]">{{
          $t('pages.account.settings.delete.title') }}</h2>
        <button
          class="uno-w-[217px] uno-h-[56px] uno-bg-[var(--color-green-1)] uno-rounded-[8px] uno-font-bold uno-text-[18px] uno-text-[#ffffff] uno-leading-[27px]"
          @click="onDeleteAccount">{{
            $t('pages.account.settings.delete.action') }}</button>
        <p v-if="deleteMessage" class="uno-text-sm uno-text-green-700 uno-mt-2">{{ deleteMessage }}</p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/modules/user'
import { useLanguageStore } from '@/stores/modules/language'
import UFormFieldTheme from "~/theme/UFormField";
import UInputTheme from "~/theme/UInput";
import USelectTheme from "~/theme/USelect";

const { t } = useI18n()
// definePageMeta({ title: () => t('pages.account.settings.title') as string })
// useSeoMeta({
//   title: () => t('pages.account.settings.title') as string,
//   description: () => t('pages.account.settings.description') as string,
//   ogTitle: () => t('pages.account.settings.title') as string,
//   ogDescription: () => t('pages.account.settings.description') as string
// })

const userStore = useUserStore()
const name = ref(userStore.user?.name || '')
const email = ref(userStore.user?.email || '')
const profileMessage = ref('')
const profileValid = computed(() => {
  const n = name.value.trim()
  const e = email.value.trim()
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
  return !!n && !!e && ok
})

const currentPassword = ref('')
const newPassword = ref('')
const repeatNewPassword = ref('')
const passwordMessage = ref('')
const passwordSuccess = ref(false)
const passwordValid = computed(() => {
  const c = currentPassword.value
  const n = newPassword.value
  const r = repeatNewPassword.value
  return !!c && !!n && !!r && n === r
})

const languageMessage = ref('')
const deleteMessage = ref('')
const languageStore = useLanguageStore()
const { languageOptions, language } = storeToRefs(languageStore)

const onSaveProfile = async () => {
  const ok = await userStore.updateProfile({ name: name.value, email: email.value })
  profileMessage.value = ok ? t('pages.account.settings.profile.success') as string : t('pages.account.settings.profile.fail') as string
}

const onChangePassword = async () => {
  if (!newPassword.value || newPassword.value !== repeatNewPassword.value) {
    passwordSuccess.value = false
    passwordMessage.value = t('pages.account.settings.password.mismatch') as string
    return
  }
  await new Promise(resolve => setTimeout(resolve, 600))
  passwordSuccess.value = true
  passwordMessage.value = t('pages.account.settings.password.success') as string
  currentPassword.value = ''
  newPassword.value = ''
  repeatNewPassword.value = ''
}

const onLanguageSaved = () => {
  languageStore.changeLanguage(language.value as any)
  languageMessage.value = t('pages.account.settings.language.success') as string
}

const onDeleteAccount = async () => {
  await new Promise(resolve => setTimeout(resolve, 600))
  deleteMessage.value = t('pages.account.settings.delete.success') as string
}
</script>

<style scoped></style>
