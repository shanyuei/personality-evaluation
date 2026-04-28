<template>
  <div class="page-container uno-w-full md:uno-w-[90%] uno-mx-auto uno-py-12">
    <h1
      class="uno-text-2xl md:uno-text-3xl uno-font-Outfit uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-6">
      {{ $t('pages.testDetail.welcome', { name }) }}</h1>

    <section
      class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
      <div class="uno-p-6 md:uno-p-8 uno-grid uno-gap-6 md:uno-grid-cols-3">
        <div class="uno-col-span-full md:uno-col-span-1 uno-flex uno-flex-col uno-items-start uno-space-y-4">
          <div class="uno-space-y-2">
            <div class="uno-text-[#4E5255] uno-font-Outfit uno-font-semibold uno-leading-[1.2] uno-text-sm">{{
              $t('pages.profile.aboutTitle') }}</div>
          </div>
          <div class="uno-flex uno-items-center uno-gap-4">
            <div class="uno-w-20 uno-h-20 uno-aspect-square uno-rounded-full uno-overflow-hidden uno-bg-[#F0F0F0]">
              <NuxtImg :src="`/images/profile/user-types/${profile?.type || 1}.png`" width="80" height="80" alt="user type" class="uno-w-full uno-h-full uno-object-cover" />
            </div>
            <div class="uno-flex uno-flex-col uno-items-start uno-gap-1">
              <div class="uno-text-[#4E5255] uno-text-xs uno-font-Outfit uno-leading-normal">{{
                $t('pages.profile.type') }} {{ profile?.type }}</div>
              <div class="uno-text-[#011813] uno-text-2xl uno-font-Outfit uno-font-semibold uno-leading-[1.2]">{{
                profile?.type_name }}</div>
            </div>
            <div class="uno-h-[2px] uno-bg-[#4E5255]" />
          </div>
          <p
            class="uno-text-[#4E5255] uno-text-sm uno-font-Outfit uno-leading-normal uno-text-left uno-max-w-md uno-line-clamp-8 uno-overflow-hidden uno-text-ellipsis">
            {{ profile?.type_text }}
          </p>
          <div class="uno-w-full">
            <PrimaryButton class="uno-w-full md:uno-w-[151px]">{{ $t('pages.profile.testDetail') }}</PrimaryButton>
          </div>
        </div>
        <div>
          <h3 class="uno-text-[#011813] uno-text-lg uno-font-Outfit uno-font-semibold uno-leading-[1.2]">{{
            $t('pages.profile.totalScore') }}</h3>
          <div class="uno-mt-3 uno-space-y-3">
            <div v-for="bar in typeScores" :key="bar.label" class="uno-flex uno-items-center uno-gap-3">

              <span
                class="uno-w-[28px] uno-h-[28px] uno-flex uno-justify-center uno-items-center uno-flex-col uno-gap-[8.75px] uno-py-[3.5px] uno-px-[11.37px] uno-bg-[#F0F0F0] uno-rounded-[14px] uno-overflow-hidden uno-text-[#4E5255] uno-text-[14px] uno-font-Outfit uno-font-medium uno-leading-normal">{{
                  bar.key }}</span>
              <span class="uno-w-28 uno-text-sm uno-text-[#4E5255] uno-font-Outfit uno-leading-normal">{{ bar.name
              }}</span>
              <div class="uno-flex-1 uno-h-2 uno-rounded-full uno-bg-[var(--ui-input)]">
                <div class="uno-h-2 uno-rounded-full"
                  :style="{ width: bar.value + '%', background: bar.key === 'Individualist' ? '#E786DF' : bar.key === 2 ? '#F5CEA4' : bar.key === 5 ? '#B57AF5' : bar.key === 8 ? '#67DCA9' : bar.key === 3 ? '#E97274' : bar.key === 9 ? '#C7EB78' : bar.key === 6 ? '#7E6EE7' : bar.key === 1 ? '#F4DA8F' : '#8FADF6' }" />
              </div>
              <span class="uno-text-[#4E5255] uno-text-sm uno-font-Outfit uno-leading-normal">{{ bar.value
              }}%</span>

            </div>
            <!-- <div class="uno-h-[2px] uno-bg-[#4E5255]"></div> -->
          </div>
        </div>

        <div class="uno-flex uno-items-center uno-justify-center">
          <NuxtImg src="/images/test/5.png" alt="Enneagram" class="uno-w-full md:uno-w-[220px] uno-h-auto" />
        </div>
      </div>
    </section>

    <div class="uno-mt-4 uno-flex uno-gap-2 uno-flex-wrap uno-justify-center">
      <button v-for="tab in tabs" :key="tab.id" :class="[
        'uno-px-4 uno-py-2 uno-h-48px uno-rounded-full uno-font-Outfit uno-text-sm',
        activeTab === tab.id
          ? 'uno-bg-[var(--ui-primary)] uno-text-white'
          : 'uno-bg-transparent uno-text-[var(--ui-primary)] uno-border uno-border-[var(--ui-primary)]'
      ]" @click="activeTab = tab.id">{{ tab.label }}</button>
    </div>

    <template v-if="activeTab === 'core'">
      <section
        class="uno-mt-4 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8">
          <h2 class="uno-text-[#011813] uno-text-2xl uno-font-Outfit uno-font-semibold uno-leading-[1.2] uno-mb-24px">
            {{
              profile?.characteristics?.core?.title }}</h2>
          <div class="uno-grid uno-gap-6 md:uno-grid-cols-2">
            <div v-for="i in profile?.characteristics?.core?.list" :key="i" class="uno-space-y-2">
              <h3 class="uno-text-[#011813] uno-text-lg uno-font-Outfit uno-font-semibold uno-leading-[1.2]">{{
                i.title }}</h3>
              <p class="uno-text-[#4E5255] uno-text-sm uno-font-Outfit uno-leading-normal">{{ i.text }}</p>
            </div>
          </div>
        </div>
      </section>
      <section
        class="uno-mt-6 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8 uno-space-y-6">
          <h2 class="uno-text-[#011813] uno-text-2xl uno-font-Outfit uno-font-semibold uno-leading-[1.2]">{{
            profile?.subtypes?.title }}</h2>
          <p class="uno-text-[#4E5255] uno-text-sm uno-font-Outfit uno-leading-normal">{{ profile?.subtypes?.summary
          }}</p>
          <div class="uno-grid uno-gap-6 md:uno-grid-cols-3">
            <div v-for="i in profile?.subtypes?.list" :key="i" class="uno-space-y-2">
              <h3 class="uno-text-[#011813] uno-text-lg uno-font-Outfit uno-font-semibold uno-leading-[1.2]">{{
                i.title }}</h3>
              <p class="uno-text-[#4E5255] uno-text-sm uno-font-Outfit uno-leading-normal">{{
                i.text }}</p>
            </div>
          </div>
          <div class="uno-flex uno-justify-center">
            <PrimaryButton class="uno-w-full md:uno-w-[151px]">{{ $t('pages.personalityDetail.subtypes.cta') }}
            </PrimaryButton>
          </div>
        </div>
      </section>

      <section
        class="uno-mt-6 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8 uno-space-y-4">
          <h2 class="uno-text-[#011813] uno-text-2xl uno-font-Outfit uno-font-semibold uno-leading-[1.2]">{{
            profile?.conclusion?.title }}</h2>
          <p class="uno-text-[#4E5255] uno-text-sm uno-font-Outfit uno-leading-normal">{{ profile?.conclusion?.text }}
          </p>
        </div>
      </section>

      <section
        class="uno-mt-6 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">
        <div class="uno-p-6 md:uno-p-8 uno-space-y-6">
          <h2 class="uno-text-[#011813] uno-text-2xl uno-font-Outfit uno-font-semibold uno-leading-[1.2]">{{
            profile?.characteristics?.growth?.title }}</h2>

          <div class="uno-grid uno-gap-6 md:uno-grid-cols-3">
            <div v-for="(i, index) in profile?.characteristics?.growth?.list" :key="i" class="uno-space-y-3">
              <div
                class="uno-w-[48px] uno-h-[48px] uno-rounded-full uno-border-2px uno-border-[#DDDDDD] uno-flex uno-items-center uno-justify-center uno-text-[#4E5255] uno-font-Outfit uno-font-semibold uno-text-[32px] uno-leading-[160%]">
                {{ Number(index) + 1 }}</div>
              <h3 class="uno-text-[#011813] uno-text-lg uno-font-Outfit uno-font-semibold uno-leading-[1.2]">{{
                i.title }}</h3>
              <p class="uno-text-[#4E5255] uno-text-sm uno-font-Outfit uno-leading-normal">
                {{ i.text }}
              </p>
              <AppLink v-if="index != 1" :to="'/courses'" class="uno-inline-block">
                <OutlineButton class="uno-w-full md:uno-w-[151px]">{{ $t('pages.personalityDetail.growth.ctaCourses') }}
                </OutlineButton>
              </AppLink>
            </div>


          </div>
        </div>
      </section>

      <FAQSection :title="profile?.faq?.title || detailLocaleText.faq.title"
        :items="profile?.faq?.list?.length ? profile?.faq?.list : fallbackFaqItems" :accordion="true"
        :default-expanded-index="0" />
    </template>


    <section v-if="activeTab === 'motivation'" class="uno-mt-6 md:uno-mt-8 uno-space-y-6 md:uno-space-y-24px">
      <div class="uno-grid uno-gap-4 md:uno-gap-6 md:uno-grid-cols-2">
        <div
          class="uno-bg-white uno-rounded-[24px] uno-border uno-border-[rgba(231,231,232,1)] uno-shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] uno-p-6 md:uno-p-32px">
          <div
            class="uno-w-[56px] uno-h-[56px] md:uno-w-[64px] md:uno-h-[64px] uno-rounded-full uno-bg-[var(--color-green-2)] uno-flex uno-items-center uno-justify-center uno-mb-6 md:uno-mb-8">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="64" height="64" rx="32" fill="#009D77" />
              <path
                d="M48.4485 21C48.555 21 48.6591 21.0108 48.7606 21.0284C48.7734 21.0306 48.7867 21.0312 48.7996 21.0337C48.8283 21.0393 48.8564 21.048 48.8847 21.055C48.9154 21.0625 48.9465 21.0688 48.9768 21.078C49.0659 21.1051 49.1513 21.141 49.2339 21.1809C49.3092 21.2171 49.3829 21.2577 49.4537 21.305C49.6564 21.44 49.8303 21.6141 49.9645 21.8174C50.0464 21.9416 50.1095 22.0743 50.1577 22.211C50.1664 22.2353 50.1767 22.2589 50.1843 22.2837C50.1956 22.3205 50.2038 22.358 50.2127 22.3954C50.2446 22.5304 50.264 22.6708 50.264 22.8156V30.078C50.264 31.0807 49.4512 31.8936 48.4485 31.8936C47.4457 31.8936 46.6329 31.0807 46.6329 30.078V27.1985L38.6826 35.1489C36.5556 37.2755 33.1076 37.2755 30.9804 35.1489L28.8529 33.0212C28.1439 32.3126 26.9945 32.3126 26.2855 33.0212L17.5054 41.8013C16.7964 42.5103 15.6471 42.5103 14.938 41.8013C14.229 41.0923 14.229 39.943 14.938 39.234L23.7181 30.4538C25.8452 28.3272 29.2932 28.3272 31.4202 30.4538L33.5479 32.5815C34.2569 33.2901 35.4063 33.2901 36.1153 32.5815L44.0656 24.6312H41.1861C40.1833 24.6312 39.3705 23.8183 39.3705 22.8156C39.3705 21.8129 40.1833 21 41.1861 21H48.4485Z"
                fill="white" />
            </svg>

          </div>
          <h2
            class="uno-text-[#011813] uno-text-[28px] md:uno-text-[32px] uno-font-Outfit uno-font-semibold uno-leading-[120%] uno-mb-6 md:uno-mb-24px">
            {{ motivationsSection?.motivations?.title || detailLocaleText.motivation.primary }}
          </h2>
          <div
            class="uno-text-[#4E5255] uno-text-[16px] uno-font-Outfit uno-font-normal uno-leading-[150%] uno-space-y-3 [&_ul]:uno-list-disc [&_ul]:uno-pl-5 [&_li]:uno-mb-2"
            v-html="renderRichText(motivationsSection?.motivations?.text)" />
        </div>
        <div
          class="uno-bg-white uno-rounded-[24px] uno-border uno-border-[rgba(231,231,232,1)] uno-shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] uno-p-6 md:uno-p-32px">
          <div
            class="uno-w-[56px] uno-h-[56px] md:uno-w-[64px] md:uno-h-[64px] uno-rounded-full uno-bg-[var(--color-pink-1)] uno-flex uno-items-center uno-justify-center uno-mb-6 md:uno-mb-24px">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="64" height="64" rx="32" fill="#EA4C89" />
              <path
                d="M48.4485 42.333C48.555 42.333 48.6591 42.3222 48.7606 42.3046C48.7734 42.3024 48.7867 42.3019 48.7996 42.2993C48.8283 42.2937 48.8564 42.285 48.8847 42.278C48.9154 42.2705 48.9465 42.2642 48.9768 42.255C49.0659 42.2279 49.1513 42.192 49.2339 42.1522C49.3092 42.1159 49.3829 42.0753 49.4537 42.028C49.6564 41.893 49.8303 41.7189 49.9645 41.5156C50.0464 41.3914 50.1095 41.2587 50.1577 41.122C50.1664 41.0977 50.1767 41.0741 50.1843 41.0493C50.1956 41.0125 50.2038 40.975 50.2127 40.9376C50.2446 40.8026 50.264 40.6622 50.264 40.5174V33.255C50.264 32.2523 49.4512 31.4394 48.4485 31.4394C47.4457 31.4394 46.6329 32.2523 46.6329 33.255V36.1345L38.6826 28.1841C36.5556 26.0575 33.1076 26.0575 30.9804 28.1841L28.8529 30.3118C28.1439 31.0204 26.9945 31.0204 26.2855 30.3118L17.5054 21.5317C16.7964 20.8228 15.6471 20.8228 14.938 21.5317C14.229 22.2407 14.229 23.39 14.938 24.099L23.7181 32.8792C25.8452 35.0058 29.2932 35.0058 31.4202 32.8792L33.5479 30.7515C34.2569 30.0429 35.4063 30.0429 36.1153 30.7515L44.0656 38.7018H41.1861C40.1833 38.7018 39.3705 39.5147 39.3705 40.5174C39.3705 41.5201 40.1833 42.333 41.1861 42.333H48.4485Z"
                fill="white" />
            </svg>

          </div>
          <h2
            class="uno-text-[#011813] uno-text-[32px] uno-font-Outfit uno-font-semibold uno-leading-[120%] uno-mb-24px">
            {{ motivationsSection?.fears?.title || detailLocaleText.motivation.fear }}
          </h2>
          <div
            class="uno-text-[#4E5255] uno-text-[16px] uno-font-Outfit uno-font-normal uno-leading-[150%] uno-space-y-3 [&_ul]:uno-list-disc [&_ul]:uno-pl-5 [&_li]:uno-mb-2"
            v-html="renderRichText(motivationsSection?.fears?.text)" />
        </div>
      </div>
    </section>

    <section v-if="activeTab === 'relationships'" class="uno-mt-6 md:uno-mt-8 uno-space-y-6 md:uno-space-y-24px">
      <div
        class="uno-bg-white uno-rounded-[24px] uno-border uno-border-[rgba(231,231,232,1)] uno-shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] uno-p-6 md:uno-p-32px">
        <h2
          class="uno-text-[#011813] uno-text-[28px] md:uno-text-[32px] uno-font-Outfit uno-font-semibold uno-leading-[120%] uno-mb-6 md:uno-mb-24px">
          {{ relationshipsSection?.title || detailLocaleText.relationships.title }}
        </h2>
        <div v-if="relationshipsSection?.text"
          class="uno-max-w-[1180px] uno-text-[#4E5255] uno-text-[16px] uno-font-Outfit uno-font-normal uno-leading-[150%] uno-space-y-3 [&_ul]:uno-list-disc [&_ul]:uno-pl-5 [&_li]:uno-mb-2"
          v-html="renderRichText(relationshipsSection?.text)" />
        <div class="uno-grid uno-gap-6 md:uno-gap-12 md:uno-grid-cols-2 uno-mt-6 md:uno-mt-24px">
          <div class="uno-space-y-12px">
            <h3
              class="uno-text-[#011813] uno-text-[18px] uno-font-Outfit uno-font-semibold uno-leading-[120%]">
              {{ relationshipsSection?.left_content?.title || detailLocaleText.relationships.strengths }}
            </h3>
            <div
              class="uno-text-[#4E5255] uno-text-[14px] uno-font-Outfit uno-font-normal uno-leading-[150%] uno-space-y-3 [&_ul]:uno-list-disc [&_ul]:uno-pl-5 [&_li]:uno-mb-2"
              v-html="renderRichText(relationshipsSection?.left_content?.text)" />
          </div>
          <div class="uno-space-y-12px">
            <h3
              class="uno-text-[#011813] uno-text-[18px] uno-font-Outfit uno-font-semibold uno-leading-[120%]">
              {{ relationshipsSection?.right_content?.title || detailLocaleText.relationships.tips }}
            </h3>
            <div
              class="uno-text-[#4E5255] uno-text-[14px] uno-font-Outfit uno-font-normal uno-leading-[150%] uno-space-y-3 [&_ul]:uno-list-disc [&_ul]:uno-pl-5 [&_li]:uno-mb-2"
              v-html="renderRichText(relationshipsSection?.right_content?.text)" />
            <div class="uno-pt-6 md:uno-pt-24px">
              <AppLink :is-link="true" :to="'/courses'" class="uno-inline-block">
                <PrimaryButton class="uno-w-full md:uno-w-[186px] md:uno-h-[60px]">{{ detailLocaleText.relationships.cta
                }}
                </PrimaryButton>
              </AppLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="activeTab === 'work'" class="uno-mt-6 md:uno-mt-8 uno-space-y-6 md:uno-space-y-24px">
      <div
        class="uno-bg-white uno-rounded-[24px] uno-border uno-border-[rgba(231,231,232,1)] uno-shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] uno-p-6 md:uno-p-32px">
        <h2
          class="uno-text-[#011813] uno-text-[28px] md:uno-text-[32px] uno-font-Outfit uno-font-semibold uno-leading-[120%] uno-mb-6 md:uno-mb-24px">
          {{ workSection?.title || detailLocaleText.work.title }}
        </h2>
        <div v-if="workSection?.text"
          class="uno-max-w-[1180px] uno-text-[#4E5255] uno-text-[16px] uno-font-Outfit uno-font-normal uno-leading-[150%] uno-space-y-3 [&_ul]:uno-list-disc [&_ul]:uno-pl-5 [&_li]:uno-mb-2"
          v-html="renderRichText(workSection?.text)" />
        <div class="uno-grid uno-gap-6 md:uno-gap-12 md:uno-grid-cols-2 uno-mt-6 md:uno-mt-24px">
          <div class="uno-space-y-12px">
            <h3
              class="uno-text-[#011813] uno-text-[18px] uno-font-Outfit uno-font-semibold uno-leading-[120%]">
              {{ workSection?.left_content?.title || detailLocaleText.work.challenges }}
            </h3>
            <div
              class="uno-text-[#4E5255] uno-text-[14px] uno-font-Outfit uno-font-normal uno-leading-[150%] uno-space-y-3 [&_ul]:uno-list-disc [&_ul]:uno-pl-5 [&_li]:uno-mb-2"
              v-html="renderRichText(workSection?.left_content?.text)" />
            <div class="uno-pt-6 md:uno-pt-24px">
              <AppLink :is-link="true" :to="'/courses'" class="uno-inline-block">
                <PrimaryButton class="uno-w-full md:uno-w-[186px] md:uno-h-[60px]">{{ detailLocaleText.work.cta }}
                </PrimaryButton>
              </AppLink>
            </div>
          </div>
          <div class="uno-space-y-12px">
            <h3
              class="uno-text-[#011813] uno-text-[18px] uno-font-Outfit uno-font-semibold uno-leading-[120%]">
              {{ workSection?.right_content?.title || detailLocaleText.work.strategies }}
            </h3>
            <div
              class="uno-text-[#4E5255] uno-text-[14px] uno-font-Outfit uno-font-normal uno-leading-[150%] uno-space-y-3 [&_ul]:uno-list-disc [&_ul]:uno-pl-5 [&_li]:uno-mb-2"
              v-html="renderRichText(workSection?.right_content?.text)" />
          </div>
        </div>
      </div>
    </section>
    <section v-if="activeTab === 'stress'" class="uno-mt-6 md:uno-mt-8 uno-space-y-6 md:uno-space-y-24px">
      <div
        class="uno-bg-white uno-rounded-[24px] uno-border uno-border-[rgba(231,231,232,1)] uno-shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] uno-p-6 md:uno-p-32px">
        <h2
          class="uno-text-[#011813] uno-text-[28px] md:uno-text-[32px] uno-font-Outfit uno-font-semibold uno-leading-[120%] uno-mb-6 md:uno-mb-24px">
          {{ stressSection?.title || detailLocaleText.stress.title }}
        </h2>
        <div v-if="stressSection?.text"
          class="uno-max-w-[1180px] uno-text-[#4E5255] uno-text-[16px] uno-font-Outfit uno-font-normal uno-leading-[150%] uno-mb-6 md:uno-mb-24px uno-space-y-3 [&_ul]:uno-list-disc [&_ul]:uno-pl-5 [&_li]:uno-mb-2"
          v-html="renderRichText(stressSection?.text)" />
        <div class="uno-grid uno-gap-6 md:uno-gap-12 md:uno-grid-cols-3 md:uno-items-start">
          <div class="uno-space-y-12px">
            <h3
              class="uno-text-[#011813] uno-text-[18px] uno-font-Outfit uno-font-semibold uno-leading-[120%]">
              {{ stressSection?.left_content?.title || detailLocaleText.stress.manifestations }}
            </h3>
            <div
              class="uno-text-[#4E5255] uno-text-[14px] uno-font-Outfit uno-font-normal uno-leading-[150%] uno-space-y-3 [&_ul]:uno-list-disc [&_ul]:uno-pl-5 [&_li]:uno-mb-2"
              v-html="renderRichText(stressSection?.left_content?.text)" />
            <div class="uno-pt-6 md:uno-pt-24px">
              <AppLink :is-link="true" :to="'/courses'" class="uno-inline-block">
                <PrimaryButton class="uno-w-full md:uno-w-[186px] md:uno-h-[60px]">{{ detailLocaleText.stress.cta }}
                </PrimaryButton>
              </AppLink>
            </div>
          </div>
          <div class="uno-space-y-12px">
            <h3
              class="uno-text-[#011813] uno-text-[18px] uno-font-Outfit uno-font-semibold uno-leading-[120%]">
              {{ stressSection?.middle_content?.title || detailLocaleText.stress.coping }}
            </h3>
            <div
              class="uno-text-[#4E5255] uno-text-[14px] uno-font-Outfit uno-font-normal uno-leading-[150%] uno-space-y-3 [&_ul]:uno-list-disc [&_ul]:uno-pl-5 [&_li]:uno-mb-2"
              v-html="renderRichText(stressSection?.middle_content?.text)" />
          </div>
          <div class="uno-space-y-12px">
            <h3
              class="uno-text-[#011813] uno-text-[18px] uno-font-Outfit uno-font-semibold uno-leading-[120%]">
              {{ stressSection?.right_content?.title || detailLocaleText.stress.practices }}
            </h3>
            <div
              class="uno-text-[#4E5255] uno-text-[14px] uno-font-Outfit uno-font-normal uno-leading-[150%] uno-space-y-3 [&_ul]:uno-list-disc [&_ul]:uno-pl-5 [&_li]:uno-mb-2"
              v-html="renderRichText(stressSection?.right_content?.text)" />
          </div>
        </div>
      </div>
    </section>
    <section v-if="activeTab === 'compatibility'" class="uno-mt-6 md:uno-mt-8 uno-space-y-6 md:uno-space-y-24px">
      <div
        class="uno-bg-white uno-rounded-[24px] uno-border uno-border-[rgba(231,231,232,1)] uno-shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] uno-p-32px">
        <h2
          class="uno-text-[#011813] uno-text-[32px] uno-font-Outfit uno-font-semibold uno-leading-[120%] uno-mb-24px">
          {{ profile?.compatibility?.title || detailLocaleText.compatibility.title }}
        </h2>
        <div v-if="profile?.compatibility?.text"
          class="uno-max-w-[1180px] uno-text-[#4E5255] uno-text-[16px] uno-font-Outfit uno-font-normal uno-leading-[150%] uno-space-y-3 [&_ul]:uno-list-disc [&_ul]:uno-pl-5 [&_li]:uno-mb-2"
          v-html="renderRichText(profile?.compatibility?.text)" />
      </div>


      <div class="uno-flex uno-flex-col uno-gap-4 md:uno-hidden">
        <div v-for="item in compatibilityItems" :key="`${item.key}-mobile`"
          class="uno-w-full uno-bg-white uno-rounded-[24px] uno-border uno-border-[rgba(231,231,232,1)] uno-shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] uno-p-6 uno-space-y-4">
          <div class="uno-flex uno-items-start uno-justify-between uno-gap-4">
            <div class="uno-min-w-0 uno-space-y-0">
              <div class="uno-text-[12px] uno-font-Outfit uno-font-semibold uno-text-[#4E5255] uno-leading-[120%] uno-mb-12px">
                {{ item.eyebrow }}
              </div>
              <h3 class="uno-text-[#011813] uno-text-[18px] uno-font-Outfit uno-font-semibold uno-leading-[120%]">
                {{ item.title }}
              </h3>
              <p class="uno-text-[#011813] uno-text-[18px] uno-font-Outfit uno-font-semibold uno-leading-[120%]">
                {{ item.subtitle }}
              </p>
            </div>
            <div class="uno-w-[56px] uno-h-[56px] uno-shrink-0">
              <NuxtImg
                :src="`/images/profile/types/${((item.typeNumber - 1) % 6) + 1}.png`"
                class="uno-w-full uno-h-full uno-object-contain"
                :alt="String(item.typeNumber)"
              />
            </div>
          </div>
          <div
            class="uno-text-[#4E5255] uno-text-[14px] uno-font-Outfit uno-font-normal uno-leading-[150%] uno-space-y-3 [&_ul]:uno-list-disc [&_ul]:uno-pl-5 [&_li]:uno-mb-2"
            v-html="renderRichText(item.text)" />
        </div>
      </div>

      <div ref="compatibilityDesktopScrollRef" class="compatibility-scroll uno-hidden md:uno-block uno-overflow-x-auto uno-pb-8">
        <div class="uno-flex uno-gap-5 xl:uno-gap-6 uno-w-max uno-px-2">
          <div v-for="(item, index) in compatibilityMarqueeItems" :key="`${item.key}-desktop-${index}`"
            class="uno-w-[320px] xl:uno-w-[340px] uno-shrink-0 uno-bg-white uno-rounded-[24px] uno-border uno-border-[rgba(231,231,232,1)] uno-shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] uno-p-32px uno-space-y-4">
            <div class="uno-flex uno-items-start uno-justify-between uno-gap-4">
              <div class="uno-min-w-0 uno-space-y-0">
                <div class="uno-text-[12px] uno-font-Outfit uno-font-semibold uno-text-[#4E5255] uno-leading-[120%] uno-mb-12px">
                  {{ item.eyebrow }}
                </div>
                <h3 class="uno-text-[#011813] uno-text-[18px] uno-font-Outfit uno-font-semibold uno-leading-[120%]">
                  {{ item.title }}
                </h3>
                <p class="uno-text-[#011813] uno-text-[18px] uno-font-Outfit uno-font-semibold uno-leading-[120%]">
                  {{ item.subtitle }}
                </p>
              </div>
              <div class="uno-w-[56px] uno-h-[56px] uno-shrink-0">
                <NuxtImg
                  :src="`/images/profile/types/${((item.typeNumber - 1) % 6) + 1}.png`"
                  class="uno-w-full uno-h-full uno-object-contain"
                  :alt="String(item.typeNumber)"
                />
              </div>
            </div>
            <div
              class="uno-text-[#4E5255] uno-text-[14px] uno-font-Outfit uno-font-normal uno-leading-[150%] uno-space-y-3 [&_ul]:uno-list-disc [&_ul]:uno-pl-5 [&_li]:uno-mb-2"
              v-html="renderRichText(item.text)" />
          </div>
        </div>
      </div>


    </section>



  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { getUserTestInfo } from '~/api/user'


import PrimaryButton from '~/components/ui/PrimaryButton.vue'
import OutlineButton from '~/components/ui/OutlineButton.vue'
definePageMeta({
  layoutShowFooter: false,
  title: () => 'seo.profile.detail.title',
  layoutShowPageTopIcons: false,
  path: '/profile'
})
const name = 'liyangzhi'
const { t, locale } = useI18n()
const token = useCookie('token')
token.value = 'el0wBwD18J9X6mcKWSOP3Z9QhHTpGKok9OVXkcBjIvUgHceyDQcGNGhlV44a'
useSeoMeta({
  title: () => t('seo.profile.detail.title'),
  description: () => t('seo.profile.detail.description'),
})

const profile = ref<any>({})
const typeScores = ref<any>({})


const tabs = [
  { id: 'core', label: useI18n().t('pages.testDetail.tab.core') },
  { id: 'motivation', label: useI18n().t('pages.testDetail.tab.motivation') },
  { id: 'relationships', label: useI18n().t('pages.testDetail.tab.relationships') },
  { id: 'work', label: useI18n().t('pages.testDetail.tab.work') },
  { id: 'stress', label: useI18n().t('pages.testDetail.tab.stress') },
  { id: 'compatibility', label: useI18n().t('pages.testDetail.tab.compatibility') }
]
const activeTab = ref('core')
const compatibilityScrollRef = ref<HTMLElement | null>(null)
const compatibilityDesktopScrollRef = ref<HTMLElement | null>(null)
let compatibilityAutoScrollTimer: ReturnType<typeof window.setInterval> | null = null
let compatibilityDesktopAutoScrollTimer: ReturnType<typeof window.setInterval> | null = null
let compatibilityResumeTimer: ReturnType<typeof window.setTimeout> | null = null

const motivationsSection = computed(() => profile.value?.characteristics?.motivations_fears || {})
const relationshipsSection = computed(() => profile.value?.characteristics?.relationships || {})
const workSection = computed(() => profile.value?.characteristics?.work || {})
const stressSection = computed(() => profile.value?.stress_relaxation || {})
const compatibilityItems = computed(() => {
  const compatibility = profile.value?.compatibility || {}
  const entries = Object.entries(compatibility)
    .filter(([key, value]) => key.startsWith('type_') && value)
    .map(([key, value]) => {
      const typeNumber = key.replace('type_', '')

      return {
        key,
        eyebrow: detailLocaleText.value.compatibility.cardEyebrow,
        title: detailLocaleText.value.compatibility.cardTitle(typeNumber),
        subtitle: detailLocaleText.value.compatibility.itemTitle(typeNumber),
        typeNumber,
        text: String(value)
      }
    })

  return entries
})

const compatibilityMarqueeItems = computed(() => {
  if (!compatibilityItems.value.length)
    return []

  return [...compatibilityItems.value, ...compatibilityItems.value]
})

const renderRichText = (value?: string) => {
  if (!value)
    return ''

  return value
    .replace(/\/n/g, '<br />')
    .replace(/\n/g, '<br />')
}

const detailLocaleText = computed(() => {
  const isZh = locale.value?.startsWith('zh')

  return isZh
    ? {
      motivation: {
        primary: '核心动机',
        fear: '核心恐惧'
      },
      relationships: {
        title: '关系模式',
        strengths: '优势与挑战',
        tips: '关系建议',
        cta: '查看课程'
      },
      work: {
        title: '工作模式',
        challenges: '职场挑战',
        strategies: '成长策略',
        cta: '查看课程'
      },
      stress: {
        title: '压力与放松',
        manifestations: '压力表现',
        coping: '健康应对',
        practices: '身心建议',
        cta: '查看课程'
      },
      compatibility: {
          title: '与其他人格的互动',
          cardEyebrow: 'Compatibility',
          cardTitle: (type: string) => `With Type ${type}`,
          itemTitle: (type: string) => `（类型 ${type}）`,
          cta: '查看课程'
        },
      faq: {
        title: '常见问题',
        items: [
          {
            title: '2 号人格真的可以在不求回报的情况下付出吗？',
            text: '可以。随着成长与自我觉察的提升，2 号人格会逐渐从丰盛感出发去给予，而不是为了获得认可，从而实现更纯粹的利他。'
          },
          {
            title: '2 号人格如何停止为所有人的快乐负责？',
            text: '关键在于理解每个人都有自己的成长旅程，而“帮忙”有时也可能阻碍对方的发展。'
          },
          {
            title: '2 号人格会意识到自己有时过于介入吗？',
            text: '不一定。因为他们的出发点是想帮助别人，所以未必会察觉自己已经越界。反馈与自我反思有助于培养这种觉察。'
          },
          {
            title: '为什么 2 号人格容易在付出后感到委屈？',
            text: '因为他们常把被需要与被爱联系在一起。当付出未被看见或回应时，压抑已久的个人需求就容易转化为委屈和失落。'
          },
          {
            title: '2 号人格最重要的成长课题是什么？',
            text: '学习先照顾自己、表达真实需求，并建立健康边界。这样不仅能减少耗竭，也能让关系更平衡、更持久。'
          }
        ]
      }
    }
    : {
      motivation: {
        primary: 'Primary Motivations',
        fear: 'Fears'
      },
      relationships: {
        title: 'Approach to Relationships',
        strengths: 'Strengths and Challenges',
        tips: 'Tips for Healthy Relationships',
        cta: 'View courses'
      },
      work: {
        title: 'Ideal Work Environments and Roles',
        challenges: 'Challenges Faced in the Workplace',
        strategies: 'Strategies for Career Growth and Satisfaction',
        cta: 'View courses'
      },
      stress: {
        title: 'Stress and Relaxation',
        manifestations: 'How Stress Manifests',
        coping: 'Healthy Coping Mechanisms',
        practices: 'Strategies for Emotional and Mental Well-Being',
        cta: 'View courses'
      },
      compatibility: {
          title: 'Interactions with Other Enneagram Types',
          cardEyebrow: 'Compatibility',
          cardTitle: (type: string) => `With Type ${type}`,
          itemTitle: (type: string) => `(Type ${type})`,
          cta: 'View courses'
        },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            title: 'Can Type 2s ever give without expecting anything in return?',
            text: 'Yes. Through growth and self-awareness, Type 2s learn to give from a state of abundance rather than a need for validation, allowing for true altruism.'
          },
          {
            title: 'How can a Type 2 stop feeling responsible for everyone else\'s happiness?',
            text: 'Developing the understanding that everyone has their own journey and that helping can sometimes hinder others\' growth is key.'
          },
          {
            title: 'Do Type 2s realize when they are being intrusive?',
            text: 'Not always. Because their intent is to be helpful, they may not notice when they are crossing boundaries. Feedback and self-reflection are necessary to develop this awareness.'
          },
          {
            title: 'Why do Type 2s feel resentful after giving so much?',
            text: 'Because they often connect being needed with being loved. When their efforts are not seen or reciprocated, their own unspoken needs can surface as resentment and disappointment.'
          },
          {
            title: 'What is the most important growth task for Type 2s?',
            text: 'Learning to care for themselves first, express their real needs, and build healthy boundaries. This reduces burnout and helps relationships stay balanced and sustainable.'
          }
        ]
      }
    }
})

const fallbackFaqItems = computed(() => detailLocaleText.value.faq.items)

const clearCompatibilityResumeTimer = () => {
  if (compatibilityResumeTimer) {
    clearTimeout(compatibilityResumeTimer)
    compatibilityResumeTimer = null
  }
}

const stopCompatibilityAutoScroll = () => {
  if (compatibilityAutoScrollTimer) {
    clearInterval(compatibilityAutoScrollTimer)
    compatibilityAutoScrollTimer = null
  }

  if (compatibilityDesktopAutoScrollTimer) {
    clearInterval(compatibilityDesktopAutoScrollTimer)
    compatibilityDesktopAutoScrollTimer = null
  }
}

const startAutoScrollForContainer = (container: HTMLElement | null, itemCount: number, setTimer: (timer: ReturnType<typeof window.setInterval>) => void) => {
  if (!container || itemCount <= 1)
    return

  const scrollLimit = container.scrollWidth / 2
  if (!scrollLimit)
    return

  const timer = window.setInterval(() => {
    container.scrollLeft += 1

    if (container.scrollLeft >= scrollLimit)
      container.scrollLeft = 0
  }, 24)

  setTimer(timer)
}

const startCompatibilityAutoScroll = async () => {
  stopCompatibilityAutoScroll()

  if (activeTab.value !== 'compatibility')
    return

  await nextTick()

  startAutoScrollForContainer(compatibilityScrollRef.value, compatibilityMarqueeItems.value.length, (timer) => {
    compatibilityAutoScrollTimer = timer
  })

  startAutoScrollForContainer(compatibilityDesktopScrollRef.value, compatibilityMarqueeItems.value.length, (timer) => {
    compatibilityDesktopAutoScrollTimer = timer
  })
}

const resumeCompatibilityAutoScroll = () => {
  clearCompatibilityResumeTimer()
  compatibilityResumeTimer = window.setTimeout(() => {
    startCompatibilityAutoScroll()
  }, 1800)
}

const bindScrollInteraction = (container: HTMLElement | null) => {
  if (!container)
    return

  const pauseScroll = () => {
    stopCompatibilityAutoScroll()
    clearCompatibilityResumeTimer()
  }

  const resumeScroll = () => {
    resumeCompatibilityAutoScroll()
  }

  container.addEventListener('mouseenter', pauseScroll)
  container.addEventListener('mouseleave', resumeScroll)
  container.addEventListener('touchstart', pauseScroll, { passive: true })
  container.addEventListener('touchend', resumeScroll)
  container.addEventListener('wheel', resumeScroll, { passive: true })
}

const bindCompatibilityScrollInteraction = () => {
  bindScrollInteraction(compatibilityScrollRef.value)
  bindScrollInteraction(compatibilityDesktopScrollRef.value)
}

onMounted(async () => {
  await nextTick()
  bindCompatibilityScrollInteraction()
  startCompatibilityAutoScroll()
})

onBeforeUnmount(() => {
  clearCompatibilityResumeTimer()
  stopCompatibilityAutoScroll()
})

watch(activeTab, () => {
  if (activeTab.value === 'compatibility') {
    startCompatibilityAutoScroll()
    return
  }

  stopCompatibilityAutoScroll()
})

watch(compatibilityItems, () => {
  startCompatibilityAutoScroll()
})

const scoreBars = [
  { num: 7, label: 'Enthusiast', value: 93, color: 'var(--ui-primary)' },
  { num: 4, label: 'Individualist', value: 88, color: 'var(--color-pink-1)' },
  { num: 2, label: 'Helper', value: 86, color: 'var(--color-green-2)' },
  { num: 5, label: 'Investigator', value: 86, color: 'var(--ui-primary)' },
  { num: 8, label: 'Challenger', value: 86, color: 'var(--color-green-2)' },
  { num: 3, label: 'Achiever', value: 84, color: 'var(--ui-primary)' },
  { num: 6, label: 'Loyalist', value: 83, color: 'var(--color-green-2)' },
  { num: 9, label: 'Peacemaker', value: 66, color: 'var(--ui-primary)' },
  { num: 1, label: 'Reformer', value: 52, color: 'var(--color-pink-1)' }
]

const enneaNodes = Array.from({ length: 9 }, (_, i) => {
  const id = i + 1
  const fill = id === 7 ? 'var(--color-green-2)' : id === 4 ? 'var(--color-pink-1)' : 'var(--ui-primary)'
  return { id, fill }
})

const enneaPos = computed(() => {
  const map: Record<number, { x: number; y: number }> = {}
  const cx = 110, cy = 110, r = 80
  enneaNodes.forEach((n, idx) => {
    const angleDeg = -90 + idx * (360 / 9)
    const rad = angleDeg * Math.PI / 180
    map[n.id] = { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
  })
  return map
})

const enneaLines: Array<[number, number]> = [
  [7, 2],
  [7, 4],
  [7, 6]
]

getUserTestInfo().then(res => {
  console.log(res.data.value.data)
  profile.value = res.data.value.data.profile || {};
  const percentages = res.data.value.data.percentages || {}
  // const typeScoresData = res.data.value.data.type_scores || {}
  typeScores.value = percentages.map((item) => {
    return {
      ...item,
      key: Number(item.type),
      value: Number(item.percent)
    }
  }).sort((a, b) => b.percent - a.percent);
})
</script>

<style scoped>
.compatibility-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: auto;
}

.compatibility-scroll::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}
</style>
