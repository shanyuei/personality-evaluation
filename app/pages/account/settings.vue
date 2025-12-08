<template>
  <main class="uno-py-12 uno-px-6 md:uno-px-10">
    <div class="uno-max-w-[720px] uno-mx-auto">
         <UInput v-model="name" />
      <h1 class="uno-text-3xl md:uno-text-4xl uno-font-['Outfit'] uno-font-bold uno-text-center uno-text-gray-900 uno-mb-8">{{
        $t('pages.account.settings.title') }}</h1>

      <div class="uno-bg-white uno-rounded-[24px] uno-shadow-sm uno-border uno-p-6 md:uno-p-8 uno-space-y-10">
        <!-- Profile details -->
        <section>
          <h2 class="uno-text-xl uno-font-['Outfit'] uno-font-semibold uno-text-gray-900 uno-mb-4">{{
            $t('pages.account.settings.profile.title') }}</h2>

       
          <div class="uno-space-y-4">
            <div>
              <UInput v-model="name" type="text" :placeholder="$t('pages.account.settings.profile.namePlaceholder')" />
            </div>
            <div>
              <UInput v-model="email" type="email"
                :placeholder="$t('pages.account.settings.profile.emailPlaceholder')" />
            </div>
            <div>
              <button
                class="uno-w-full uno-h-[48px] uno-rounded-[16px] uno-bg-[var(--ui-primary)] uno-text-white hover:uno-bg-[var(--color-green-2)] uno-font-['Outfit']"
                @click="onSaveProfile">{{ $t('pages.account.settings.profile.submit') }}</button>
            </div>
            <p v-if="profileMessage" class="uno-text-sm uno-text-green-700 uno-mt-2">{{ profileMessage }}</p>
          </div>
        </section>

        <!-- Change password -->
        <section>
          <h2 class="uno-text-xl uno-font-['Outfit'] uno-font-semibold uno-text-gray-900 uno-mb-4">{{
            $t('pages.account.settings.password.title') }}</h2>
          <div class="uno-space-y-4">
            <UInput v-model="currentPassword" type="password"
              :placeholder="$t('pages.account.settings.password.current')" />
            <UInput v-model="newPassword" type="password" :placeholder="$t('pages.account.settings.password.new')" />
            <UInput v-model="repeatNewPassword" type="password"
              :placeholder="$t('pages.account.settings.password.repeat')" />
            <button
              class="uno-w-full uno-h-[48px] uno-rounded-[16px] uno-bg-[var(--ui-primary)] uno-text-white hover:uno-bg-[var(--color-green-2)] uno-font-['Outfit']"
              @click="onChangePassword">{{ $t('pages.account.settings.password.submit') }}</button>
            <p v-if="passwordMessage" class="uno-text-sm" :class="uno-passwordSuccess ? 'text-green-700' : 'text-red-600'">{{
              passwordMessage }}</p>
          </div>
        </section>

        <!-- Change language -->
        <section>
          <h2 class="uno-text-xl uno-font-['Outfit'] uno-font-semibold uno-text-gray-900 uno-mb-4">{{
            $t('pages.account.settings.language.title') }}</h2>
          <USelect v-model="language" :items="languageOptions" value-attribute="value" option-attribute="label" />
          <div class="uno-mt-4">
            <button
              class="uno-w-full uno-h-[48px] uno-rounded-[16px] uno-bg-[var(--ui-primary)] uno-text-white hover:uno-bg-[var(--color-green-2)] uno-font-['Outfit']"
              @click="onLanguageSaved">{{ $t('pages.account.settings.language.submit') }}</button>
            <p v-if="languageMessage" class="uno-text-sm uno-text-green-700 uno-mt-2">{{ languageMessage }}</p>
          </div>
        </section>

        <!-- Delete account -->
        <section>
          <h2 class="uno-text-xl uno-font-['Outfit'] uno-font-semibold uno-text-gray-900 uno-mb-4">{{
            $t('pages.account.settings.delete.title') }}</h2>
          <button class="uno-text-[var(--color-pink-1)] hover:uno-underline uno-font-['Outfit']" @click="onDeleteAccount">{{
            $t('pages.account.settings.delete.action') }}</button>
          <p v-if="deleteMessage" class="uno-text-sm uno-text-green-700 uno-mt-2">{{ deleteMessage }}</p>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/modules/user'
import { useLanguageStore } from '@/stores/modules/language'

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

const currentPassword = ref('')
const newPassword = ref('')
const repeatNewPassword = ref('')
const passwordMessage = ref('')
const passwordSuccess = ref(false)

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
