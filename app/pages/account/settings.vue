<template>
  <div class="page-container uno-max-w-[720px] uno-mx-auto my-[32px]">
    <h1
      class="uno-text-3xl md:uno-text-4xl uno-font-Outfit uno-font-bold uno-text-center uno-text-gray-900 uno-mb-8">
      {{ $t('pages.account.settings.title') }}</h1>

    <div
      class="uno-shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] uno-rounded-[24px] uno-border uno-border-solid uno-border-[1px] uno-border-[#e7e7e8] bg-white p-[32px]">
      <!-- Profile details -->
      <section>
        <h2 class="uno-font-semibold uno-text-[24px] uno-text-[#323233] uno-leading-[36px] uno-mb-[16px]">{{
          $t('pages.account.settings.profile.title') }}</h2>
        <div class="uno-space-y-4">
          <UFormField :ui="UFormFieldTheme" :label="$t('pages.account.settings.profile.name')">
            <UInput v-model="name" :ui="UInputTheme" type="text"
              :placeholder="$t('pages.account.settings.profile.namePlaceholder')" />
          </UFormField>
          <UFormField :ui="UFormFieldTheme" :label="$t('pages.account.settings.profile.email')">
            <UInput v-model="email" :ui="UInputTheme" type="email"
              :placeholder="$t('pages.account.settings.profile.emailPlaceholder')" />
          </UFormField>
          <div>
            <PrimaryButton class="!uno-w-[217px]" :loading="profileLoading"
              @click="onSaveProfile">
                 {{ $t('common.confirm') }}
            </PrimaryButton>
          </div>
        </div>
      </section>

      <!-- Change password -->
      <section class="uno-mt-[34px]">
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
          <div>
            <PrimaryButton class="!uno-w-[217px]" :loading="passwordLoading"
              @click="onChangePassword">
              {{ $t('common.confirm') }}
            </PrimaryButton>
          </div>
        </div>
      </section>

      <!-- Change language -->
      <section class="uno-mt-[34px]">
        <h2 class="uno-font-semibold uno-text-[24px] uno-text-[#323233] uno-leading-[36px] uno-mb-[16px]">{{
          $t('pages.account.settings.language.title') }}</h2>
        <UFormField :ui="UFormFieldTheme">
          <USelect v-model="language" :ui="USelectTheme" :placeholder="$t('pages.account.settings.language.placeholder')" :items="languageOptions" value-attribute="value"
            option-attribute="label" />
        </UFormField>
        <div class="uno-mt-4">
          <PrimaryButton class="!uno-w-[217px]" :loading="languageLoading" @click="onLanguageSaved">
            {{ $t('common.confirm') }}
          </PrimaryButton>
        </div>
      </section>

      <!-- Delete account -->
      <section class="uno-mt-[34px]">
        <h2 class="uno-font-semibold uno-text-[24px] uno-text-[#323233] uno-leading-[36px] uno-mb-[16px]">{{
          $t('pages.account.settings.delete.title') }}</h2>
        <button class="uno-text-[#FF4747] uno-font-bold uno-text-[18px] hover:uno-underline" @click="onDeleteAccount">{{
          $t('pages.account.settings.delete.action') }}</button>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/modules/user'
import { useLanguageStore } from '@/stores/modules/language'
import { storeToRefs } from 'pinia'
import UFormFieldTheme from "~/theme/UFormField";
import UInputTheme from "~/theme/UInput";
import USelectTheme from "~/theme/USelect";
import PrimaryButton from '~/components/ui/PrimaryButton.vue';

definePageMeta({
  layoutShowFooter: false,
  title: () => 'seo.account.settings.title',
  path: '/settings',
  layoutShowPageTopIcons:false
})

const { t } = useI18n()
const localePath = useLocalePath()
const toast = useToast()

useSeoMeta({
  title: () => t('seo.account.settings.title', { separator: '|' }) as string,
  description: () => t('seo.account.settings.description') as string,
})

const userStore = useUserStore()
const name = ref(userStore.userInfo?.name || '')
const email = ref(userStore.userInfo?.email || '')
const profileLoading = ref(false)

const profileValid = computed(() => {
  const n = name.value.trim()
  const e = email.value.trim()
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
  // Check if changed
  const changed = n !== userStore.userInfo?.name || e !== userStore.userInfo?.email
  return !!n && !!e && ok && changed
})

const currentPassword = ref('')
const newPassword = ref('')
const repeatNewPassword = ref('')
const passwordLoading = ref(false)
const passwordValid = computed(() => {
  const c = currentPassword.value
  const n = newPassword.value
  const r = repeatNewPassword.value
  return !!c && !!n && !!r && n === r
})

const languageLoading = ref(false)
const languageStore = useLanguageStore()
const { languageOptions, language } = storeToRefs(languageStore)

const onSaveProfile = async () => {
  const n = name.value.trim()
  const e = email.value.trim()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!n || !e) {
    toast.add({
      title: t('pages.account.settings.profile.emptyError') as string,
      color: 'warning',
      icon: 'i-heroicons-x-circle'
    })
    return
  }

  if (!emailRegex.test(e)) {
    toast.add({
      title: t('pages.account.settings.profile.emailInvalid') as string,
      color: 'warning',
      icon: 'i-heroicons-x-circle'
    })
    return
  }

  profileLoading.value = true
  try {
    const { data, error } = await userStore.updateUserInfo({ name: n, email: e })
    if (error.value) throw error.value
    toast.add({
      title: t('pages.account.settings.profile.success') as string,
      icon: 'i-heroicons-check-circle'
    })
  } catch (e) {
    toast.add({
      title: t('pages.account.settings.profile.fail') as string,
      color: 'warning',
      icon: 'i-heroicons-x-circle'
    })
  } finally {
    profileLoading.value = false
    userStore.fetchUserInfo()
  }
}

const onChangePassword = async () => {
  if (!newPassword.value || newPassword.value !== repeatNewPassword.value) {
    toast.add({
      title: t('pages.account.settings.password.mismatch') as string,
      icon: 'i-heroicons-x-circle'
    })
    return
  }
  passwordLoading.value = true
  try {
    const { data, error } = await userStore.updatePassword({
      old_password: currentPassword.value,
      re_password: repeatNewPassword.value,
      password: newPassword.value
    })

    if (error.value) {
      toast.add({
        title: error.value.data?.message || t('pages.account.settings.password.fail'),
        color: 'warning',
        icon: 'i-heroicons-x-circle'
      })
    } else {
      toast.add({
        title: t('pages.account.settings.password.success') as string,
        icon: 'i-heroicons-check-circle'
      })
      currentPassword.value = ''
      newPassword.value = ''
      repeatNewPassword.value = ''

      // Logout and redirect to login page
      userStore.logout()
      await navigateTo(localePath('/auth/sign-in'))
    }
  } catch (e) {
    toast.add({
      title: t('pages.account.settings.password.fail') as string,
      color: 'warning',
      icon: 'i-heroicons-x-circle'
    })
  } finally {
    passwordLoading.value = false
  }
}

const onLanguageSaved = async () => {
  languageLoading.value = true
  try {
    const { error } = await userStore.updateUserInfo({ lang: language.value })
    if (error.value) throw error.value

    languageStore.changeLanguage(language.value as any)
    toast.add({
      title: t('pages.account.settings.language.success') as string,

      icon: 'i-heroicons-check-circle'
    })
  } catch (e) {
    toast.add({
      title: t('pages.account.settings.language.fail') || 'Failed to update language',
      color: 'warning',
      icon: 'i-heroicons-x-circle'
    })
  } finally {
    languageLoading.value = false
    userStore.fetchUserInfo()
  }
}

const onDeleteAccount = async () => {
  await new Promise(resolve => setTimeout(resolve, 600))
  toast.add({
    title: t('pages.account.settings.delete.tips') as string,
    icon: 'i-heroicons-check-circle'
  })
}
</script>

<style scoped></style>
