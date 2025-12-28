<template>
  <div class="page-container uno-w-full md:uno-w-[90%] uno-mx-auto uno-py-12">
    <ProfileHeader :name="name" />

    <ProfileResultCard :score-bars="scoreBars" />

    <div class="uno-grid uno-gap-6 md:uno-grid-cols-5 uno-mt-6">
      <ProfileDailyTriviaCard />
      <ProfileDailyStreakCard />
    </div>

    <div class="uno-grid uno-gap-6 md:uno-grid-cols-5 uno-mt-6">
      <ProfileContinueCourseCard />
      <ProfileProgressCard />
    </div>

    <ProfileTestList :test-cards="testCards" />

    <ProfileCourseList :course-cards="courseCards" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getUserTestInfo } from '~/api/user'

definePageMeta({
 layoutShowFooter:false,
 title: () => 'seo.profile.title'
})
const { t } = useI18n()

useSeoMeta({
  title: () => t('seo.profile.title'),
  description: () => t('seo.profile.description'),
})
const userStore = useUserStore()
const userInfo = userStore.userInfo
const name = userInfo?.name || 'Account'
const scoreBars = [
  { num: 7, label: 'Enthusiast', value: 93, color: 'var(--ui-primary)' },
  { num: 4, label: 'Individualist', value: 88, color: 'var(--color-pink-1)' },
  { num: 2, label: 'Helper', value: 86, color: 'var(--color-green-2)' },
  { num: 5, label: 'Investigator', value: 86, color: 'var(--ui-primary)' },
  { num: 8, label: 'Challenger', value: 86, color: 'var(--color-green-2)' },
  { num: 3, label: 'Achiever', value: 84, color: 'var(--ui-primary)' },
  { num: 9, label: 'Loyalist', value: 83, color: 'var(--color-green-2)' },
  { num: 6, label: 'Peacemaker', value: 66, color: 'var(--ui-primary)' },
  { num: 1, label: 'Reformer', value: 52, color: 'var(--color-pink-1)' }
]

const testCards = [
  { id: 1, title: 'Operations Management', desc: 'Objective: To assess an individual\'s proficiency in a specific hard skill through multiple-choice questions designed to evaluate knowledge, application, and problem-solving abilities.' },
  { id: 2, title: 'Business Analysis', desc: 'Your score: 35 out of 40 points', completed: true, try: true },
  { id: 3, title: 'Operations Management', desc: 'Objective: To assess an individual\'s proficiency in a specific hard skill through multiple-choice questions designed to evaluate knowledge, application, and problem-solving abilities.' }
]

const courseCards = [
  { id: 1, title: 'Business Analysis', desc: 'Leadership and management are two distinctive and complementary systems of actions in the business environment. Both are necessary for success in an increasingly complex and volatile business environment.', image: '/images/blog/1.png' },
  { id: 2, title: 'Brand Management', desc: 'Leadership and management are two distinctive and complementary systems of actions in the business environment.', image: '/images/blog/2.png' },
  { id: 3, title: 'Brand Management', desc: 'Leadership and management are two distinctive and complementary systems of actions in the business environment.', image: '/images/blog/3.png' }
]
getUserTestInfo().then(res => {
  console.log('getUserTestInfo',res)
})
</script>

<style scoped></style>
