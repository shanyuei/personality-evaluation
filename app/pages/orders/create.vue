<template>
  <div class="uno-py-12 md:uno-py-16">
    <!-- Top Section: Summary & Form -->
    <div
      class="page-container uno-grid uno-grid-cols-1 lg:uno-grid-cols-12 uno-gap-8 lg:uno-gap-16 uno-mb-56px uno-items-start">

      <!-- Left Column: Summary -->
      <div class="md:uno-col-span-12 lg:uno-col-span-6">
        <h1
          class="uno-text-4xl md:uno-text-5xl uno-font-600 uno-text-[#011813] uno-mb-4 uno-font-Outfit uno-whitespace-nowrap">
          {{ $t('pages.orders.create.title') }}
        </h1>
        <p class="uno-text-[#4E5255] uno-text-lg uno-mb-48px uno-font-Outfit">
          {{ $t('pages.orders.create.subtitle') }}
        </p>

        <!-- Summary Card -->
        <div class="uno-bg-[#EAFBF6] uno-rounded-[24px] uno-p-6 md:uno-p-8">
          <div class="uno-flex uno-justify-between uno-items-baseline uno-mb-6">
            <h3 v-if="!planName" class="uno-text-2xl uno-font-bold uno-text-[#009D77]">{{
              $t('pages.orders.create.summary.trial', { day: 7 }) }}</h3>
            <h3 v-else class="uno-text-2xl uno-font-bold uno-text-[#009D77]">{{ planName }}</h3>
            <span class="uno-text-2xl uno-font-bold uno-text-[#009D77]">{{ $t("common.price") }} {{ planPrice }}</span>
          </div>

          <ul class="uno-space-y-4 uno-mb-8">
            <li class="uno-flex uno-items-center uno-gap-3">
              <AppCheckIcon class="uno-text-white uno-w-4 uno-h-4" />
              <span class="uno-text-[18px] uno-text-[#323233] uno-font-[400]">{{
                $t('pages.orders.create.summary.benefit1') }}</span>
            </li>
            <li class="uno-flex uno-items-center uno-gap-3">
              <AppCheckIcon class="uno-text-white uno-w-4 uno-h-4" />
              <span class="uno-text-[18px] uno-text-[#323233] uno-font-[400]">{{
                $t('pages.orders.create.summary.benefit2') }}</span>
            </li>
            <li class="uno-flex uno-items-center uno-gap-3">
              <AppCheckIcon class="uno-text-white uno-w-4 uno-h-4" />
              <span class="uno-text-[18px] uno-text-[#323233] uno-font-[400]">{{
                $t('pages.orders.create.summary.benefit3') }}</span>
            </li>
          </ul>
        </div>

        <p class="uno-text-xs uno-text-[#8D8E8F] uno-leading-relaxed uno-mt-12px">
          {{ $t('pages.orders.create.summary.terms', {
            price1: $t("common.price") + "1.99", price2: $t("common.price") +
              "27.88", day: 7
          }) }}
          <a href="mailto:support@personalitytest101.com">support@personalitytest101.com</a>
        </p>
      </div>

      <!-- Right Column: Payment Form -->
      <div class="md:uno-col-span-12 lg:uno-col-span-6">
        <div class="uno-bg-white uno-rounded-[24px] uno-p-6 md:uno-p-8 uno-shadow-lg uno-border uno-border-[#E7E7E8]">
          <form class="uno-space-y-6" @submit.prevent="handleSubmit">
            <!-- Email -->
            <div class="uno-space-y-2">
              <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{
                $t('pages.orders.create.form.email') }}</label>

              <UInput v-model="form.email" :placeholder="$t('pages.orders.create.form.emailPlaceholder')" size="xl"
                :ui="{ rounded: 'rounded-[12px]' }" class="uno-w-full" />
            </div>

            <!-- Cardholder Name -->
            <div class="uno-space-y-2">
              <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{
                $t('pages.orders.create.form.name') }}</label>
              <UInput v-model="form.name" :placeholder="$t('pages.orders.create.form.namePlaceholder')" size="xl"
                :ui="{ rounded: 'rounded-[12px]' }" class="uno-w-full" />
            </div>

            <!-- Card Number -->
            <div class="uno-space-y-2">
              <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{
                $t('pages.orders.create.form.cardNumber') }}</label>
              <UInput v-model="form.cardNumber" :placeholder="$t('pages.orders.create.form.cardNumberPlaceholder')"
                size="xl" icon="i-lucide-credit-card" :ui="{ rounded: 'rounded-[12px]' }" class="uno-w-full" />
            </div>

            <!-- Expires, CVV, Zip -->
            <div class="uno-grid uno-grid-cols-3 uno-gap-4">
              <div class="uno-space-y-2">
                <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{
                  $t('pages.orders.create.form.expires') }}</label>
                <UInput v-model="form.expires" :placeholder="$t('pages.orders.create.form.expiresPlaceholder')"
                  size="xl" :ui="{ rounded: 'rounded-[12px]' }" class="uno-w-full" />
              </div>
              <div class="uno-space-y-2">
                <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{
                  $t('pages.orders.create.form.cvv') }}</label>
                <UInput v-model="form.cvv" :placeholder="$t('pages.orders.create.form.cvvPlaceholder')" size="xl"
                  :ui="{ rounded: 'rounded-[12px]' }" class="uno-w-full" />
              </div>
              <div class="uno-space-y-2">
                <label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">{{
                  $t('pages.orders.create.form.zip') }}</label>
                <UInput v-model="form.zip" :placeholder="$t('pages.orders.create.form.zipPlaceholder')" size="xl"
                  :ui="{ rounded: 'rounded-[12px]' }" class="uno-w-full" />
              </div>
            </div>

            <!-- Consent Checkbox -->
            <div class="uno-flex uno-items-start uno-gap-3">
              <UCheckbox v-model="form.consent"
                :ui="{ base: 'uno-w-5 uno-h-5 uno-border uno-border-[#4E5255]', rounded: 'rounded' }" />
              <div class="uno-text-xs uno-text-[#4E5255] uno-leading-tight uno-mt-0.5">
                <span>{{ $t('pages.orders.create.form.consentPart1') }}</span>
                <span class="uno-text-[#009D77]">{{ $t('pages.orders.create.form.terms') }}</span>
                <span>{{ $t('pages.orders.create.form.consentPart2') }}</span>
                <span class="uno-text-[#009D77]">{{ $t('pages.orders.create.form.privacy') }}</span>
                <span>{{ $t('common.period') }}</span>
              </div>
            </div>

            <!-- Buttons -->
            <div class="uno-space-y-3">
              <PrimaryButton height="56px" @click="handleSubmit">
                {{ $t('pages.orders.create.form.subscribeBtn', { price: $t("common.price") + planPrice }) }}
              </PrimaryButton>

              <CustomButton height="43px" variant="dark">
                {{ $t('pages.orders.create.form.paypalBtn') }}
                <svg width="78" height="21" viewBox="0 0 78 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M33.2518 20.2653L42.8401 6.3224C42.9239 6.23866 42.9239 6.15491 42.9239 6.07117C42.9239 5.81995 42.7145 5.52686 42.4633 5.52686H39.5742C39.323 5.52686 39.0299 5.69434 38.9043 5.90369L34.9266 11.7656L33.2518 6.11304C33.1261 5.77808 32.7912 5.52686 32.4143 5.52686H29.609C29.3578 5.52686 29.1484 5.77808 29.1484 6.07117C29.1484 6.23866 32.0794 14.6128 32.3306 15.4083C31.9119 15.9945 29.2322 19.721 29.2322 20.1816C29.2322 20.4328 29.4415 20.6421 29.6928 20.6421H32.5818C32.8331 20.6421 33.0843 20.4747 33.2518 20.2653Z"
                    fill="white" />
                  <path
                    d="M77.0065 0.544318C77.0065 0.251224 76.7972 0 76.546 0H73.7825C73.5732 0 73.3219 0.167482 73.3219 0.418706L70.8934 16.0783L70.8516 16.162C70.8516 16.4133 71.0609 16.7064 71.3959 16.7064H73.8662C74.2431 16.7064 74.6199 16.2877 74.6618 15.869L77.0903 0.628059V0.544318H77.0065Z"
                    fill="white" />
                  <path
                    d="M9.25873 0H3.27124C2.89441 0 2.51757 0.293094 2.4757 0.7118L0.00533502 16.0783C-0.0365356 16.3714 0.172817 16.6645 0.465911 16.6645H3.35498C3.77369 16.6645 4.15052 16.2458 4.19239 15.8271L4.86232 11.8075C5.02981 10.7189 6.83024 11.0957 7.58391 11.0957C11.8966 11.0957 14.5344 8.5416 14.5344 4.18706C14.4926 1.04676 12.0641 0 9.25873 0ZM6.70463 7.74606L5.49038 7.78793L6.11844 3.76835C6.16031 3.51713 6.36966 3.34965 6.62089 3.34965H7.33269C9.04938 3.34965 10.3055 3.559 9.97053 5.61066C9.63557 7.49483 8.37945 7.74606 6.70463 7.74606Z"
                    fill="white" />
                  <path
                    d="M27.1794 5.52698H24.2903C23.7041 5.52698 23.7041 6.36439 23.6622 6.74123C22.7829 5.44324 21.5268 5.23389 20.1032 5.23389C16.4186 5.23389 13.6133 8.45792 13.6133 12.0169C13.6133 14.9479 15.4556 16.8739 18.3865 16.8739C19.7264 16.8739 21.4431 16.1202 22.3642 15.0735C22.2805 15.2828 22.1968 15.7853 22.1968 15.9946C22.1968 16.3296 22.3642 16.5808 22.6992 16.5808H25.2952C25.7139 16.5808 26.0488 16.1621 26.1326 15.7434L27.6399 6.11317C27.6818 5.82008 27.4724 5.52698 27.1794 5.52698ZM19.8939 13.9011C18.5121 13.9011 17.5072 13.1056 17.5072 11.6401C17.5072 9.79778 18.9308 8.33231 20.7732 8.33231C22.1549 8.33231 23.2435 9.16972 23.2435 10.6771C23.2016 12.4775 21.778 13.9011 19.8939 13.9011Z"
                    fill="white" />
                  <path
                    d="M52.008 0H46.0205C45.6018 0 45.2249 0.293094 45.1831 0.7118L42.7546 16.0364C42.7127 16.3295 42.9639 16.6226 43.257 16.6226H46.3555C46.6485 16.6226 46.8998 16.4133 46.9416 16.162L47.6116 11.8075C47.7791 10.7189 49.5795 11.0957 50.3332 11.0957C54.604 11.0957 57.2418 8.5416 57.2418 4.18706C57.1999 1.04676 54.7714 0 52.008 0ZM49.4539 7.74606L48.2396 7.78793L48.8677 3.76835C48.9096 3.51713 49.077 3.34965 49.3283 3.34965H49.9982C51.2962 3.34965 52.7198 3.43339 52.7198 5.02447C52.7617 7.28548 51.3799 7.74606 49.4539 7.74606Z"
                    fill="white" />
                  <path
                    d="M69.8875 5.52698H67.0403C66.4541 5.52698 66.4541 6.36439 66.4122 6.74123C65.5748 5.44324 64.3187 5.23389 62.8532 5.23389C59.1686 5.23389 56.3633 8.45792 56.3633 12.0169C56.3633 14.9479 58.2056 16.8739 61.1365 16.8739C62.5183 16.8739 64.2349 16.1202 65.1142 15.0735C65.0724 15.2828 64.9468 15.7853 64.9468 15.9946C64.9468 16.3296 65.1142 16.5808 65.4073 16.5808H68.0033C68.422 16.5808 68.757 16.1621 68.8407 15.7434L70.3899 6.0713C70.3899 5.82007 70.1806 5.52698 69.8875 5.52698ZM62.6439 13.9011C61.2621 13.9011 60.2154 13.1056 60.2154 11.6401C60.2154 9.79778 61.639 8.33231 63.4813 8.33231C64.863 8.33231 65.9516 9.16972 65.9098 10.6771C65.9098 12.5194 64.4443 13.9011 62.6439 13.9011Z"
                    fill="white" />
                </svg>

              </CustomButton>

              <CustomButton height="43px" variant="dark">
                {{ $t('pages.orders.create.form.gpayBtn') }}
                <svg width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M35.4409 5.37703C36.8154 5.37703 37.8776 5.75186 38.6898 6.50164C39.502 7.25142 39.8769 8.25108 39.8769 9.50064V15.4987H38.1275V14.1241H38.065C37.3152 15.2488 36.2531 15.8111 35.0035 15.8111C33.9414 15.8111 33.0041 15.4987 32.2544 14.8739C31.5671 14.2491 31.1298 13.3744 31.1298 12.4372C31.1298 11.4375 31.5046 10.6253 32.2544 10.0005C33.0041 9.37569 34.0663 9.1258 35.3159 9.1258C36.4405 9.1258 37.3152 9.31319 38.0025 9.75058V9.31325C38.0025 8.73006 37.7848 8.14693 37.3494 7.76699L37.2527 7.68875C36.7529 7.25142 36.1281 7.00147 35.4409 7.00147C34.3787 7.00147 33.5665 7.43886 33.0041 8.31353L31.3797 7.31386C32.3794 6.0018 33.6914 5.37703 35.4409 5.37703ZM26.6313 1.12842C27.7524 1.12842 28.8178 1.51852 29.6696 2.24611L29.8177 2.37797C30.6924 3.12775 31.1298 4.25236 31.1298 5.43947C31.1298 6.62658 30.6924 7.68875 29.8177 8.50097C28.943 9.31324 27.8808 9.75058 26.6313 9.75058L23.6322 9.68808V15.4987H21.7578V1.12842H26.6313ZM35.6907 10.6253C34.941 10.6253 34.3162 10.8127 33.8164 11.1876C33.3165 11.5 33.0666 11.9374 33.0666 12.4997C33.0666 12.9995 33.3165 13.4369 33.6914 13.6868C34.1288 13.9992 34.6286 14.1866 35.1285 14.1866C35.8282 14.1866 36.528 13.9145 37.0754 13.421L37.1903 13.3119C37.8151 12.7496 38.1275 12.0623 38.1275 11.3126C37.5652 10.8752 36.7529 10.6253 35.6907 10.6253ZM26.7562 2.87781H23.6322V7.87619H26.7562C27.4435 7.87619 28.1308 7.62625 28.5681 7.12642C29.5678 6.18925 29.5678 4.62725 28.6306 3.69008L28.5681 3.62758C28.0683 3.12775 27.4435 2.81536 26.7562 2.87781ZM49.9986 5.68942L43.8131 19.8722H41.9387L44.2505 14.9364L40.1893 5.75186H42.1886L45.1252 12.8121H45.1877L48.0617 5.75186H49.9986V5.68942Z"
                    fill="white" />
                  <path
                    d="M16.2005 8.43773C16.2005 7.8754 16.138 7.31306 16.0756 6.75073H8.26562V9.93723H12.7017C12.5142 10.9369 11.9519 11.8741 11.0772 12.4364V14.4982H13.7638C15.3258 13.0612 16.2005 10.9369 16.2005 8.43773Z"
                    fill="#4285F4" />
                  <path
                    d="M8.25931 16.4976C10.5086 16.4976 12.383 15.7479 13.7575 14.4983L11.0709 12.4364C10.3211 12.9363 9.38393 13.2486 8.25931 13.2486C6.13498 13.2486 4.26061 11.8116 3.63582 9.81226H0.886719V11.9366C2.32375 14.7481 5.13532 16.4976 8.25931 16.4976Z"
                    fill="#34A853" />
                  <path
                    d="M3.63944 9.81248C3.26456 8.81282 3.26456 7.68821 3.63944 6.62604V4.50171H0.890333C-0.296778 6.81348 -0.296778 9.56259 0.890333 11.9368L3.63944 9.81248Z"
                    fill="#FBBC04" />
                  <path
                    d="M8.25933 3.25231C9.44644 3.25231 10.571 3.68964 11.4458 4.50192L13.82 2.1277C12.3205 0.75314 10.3212 -0.0591357 8.32183 0.00336336C5.19783 0.00336336 2.32377 1.75281 0.949219 4.56436L3.69832 6.68869C4.26064 4.68936 6.13505 3.25231 8.25933 3.25231Z"
                    fill="#EA4335" />
                </svg>

              </CustomButton>
            </div>

            <!-- Payment Icons -->
            <div class="uno-flex uno-items-center uno-justify-between uno-mt-6 ">
              <div class="uno-flex uno-items-center uno-gap-3">
                <NuxtImg src="/images/orders/create/1.png" height="24" class="uno-h-6 uno-w-auto" />
                <NuxtImg src="/images/orders/create/2.png" height="24" class="uno-h-6 uno-w-auto" />
                <NuxtImg src="/images/orders/create/3.png" height="24" class="uno-h-6 uno-w-auto" />
              </div>
              <div class="uno-flex uno-items-center">
                <NuxtImg src="/images/orders/create/4.png" height="24" class="uno-h-6 uno-w-auto" />
                <!-- <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.6693 12.9584C19.6693 17.75 16.3151 20.1459 12.3284 21.5354C12.1197 21.6062 11.8929 21.6028 11.6864 21.5259C7.6901 20.1459 4.33594 17.75 4.33594 12.9584V6.25002C4.33594 5.99586 4.4369 5.7521 4.61663 5.57238C4.79635 5.39266 5.0401 5.29169 5.29427 5.29169C7.21094 5.29169 9.60677 4.14169 11.2743 2.68502C11.4773 2.51156 11.7356 2.41626 12.0026 2.41626C12.2696 2.41626 12.5279 2.51156 12.7309 2.68502C14.408 4.15127 16.7943 5.29169 18.7109 5.29169C18.9651 5.29169 19.2089 5.39266 19.3886 5.57238C19.5683 5.7521 19.6693 5.99586 19.6693 6.25002V12.9584Z"
                    stroke="#009D77" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.125 11.9999L11.0417 13.9166L14.875 10.0833" stroke="#009D77" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M35.85 16.14C35.0847 16.14 34.4313 16 33.89 15.72C33.3487 15.44 32.868 15.034 32.448 14.502L33.344 13.606C33.652 14.0353 34.0067 14.362 34.408 14.586C34.8093 14.8007 35.304 14.908 35.892 14.908C36.4707 14.908 36.9327 14.782 37.278 14.53C37.6327 14.278 37.81 13.9327 37.81 13.494C37.81 13.13 37.726 12.836 37.558 12.612C37.39 12.388 37.1613 12.206 36.872 12.066C36.592 11.9167 36.284 11.786 35.948 11.674C35.612 11.5527 35.276 11.4267 34.94 11.296C34.604 11.156 34.296 10.988 34.016 10.792C33.736 10.5867 33.5073 10.3207 33.33 9.994C33.162 9.66733 33.078 9.25667 33.078 8.762C33.078 8.21133 33.2087 7.74467 33.47 7.362C33.7407 6.97 34.1047 6.67133 34.562 6.466C35.0287 6.25133 35.5513 6.144 36.13 6.144C36.7647 6.144 37.334 6.27 37.838 6.522C38.342 6.76467 38.7527 7.08667 39.07 7.488L38.174 8.384C37.8847 8.048 37.572 7.796 37.236 7.628C36.9093 7.46 36.5313 7.376 36.102 7.376C35.5793 7.376 35.164 7.49267 34.856 7.726C34.548 7.95 34.394 8.26733 34.394 8.678C34.394 9.00467 34.478 9.27067 34.646 9.476C34.8233 9.672 35.052 9.84 35.332 9.98C35.612 10.12 35.92 10.2507 36.256 10.372C36.6013 10.484 36.942 10.61 37.278 10.75C37.614 10.89 37.922 11.0673 38.202 11.282C38.482 11.4967 38.706 11.7767 38.874 12.122C39.0513 12.458 39.14 12.8827 39.14 13.396C39.14 14.2547 38.8413 14.9267 38.244 15.412C37.656 15.8973 36.858 16.14 35.85 16.14ZM43.3695 16.14C42.6042 16.14 41.9509 16 41.4095 15.72C40.8682 15.44 40.3875 15.034 39.9675 14.502L40.8635 13.606C41.1715 14.0353 41.5262 14.362 41.9275 14.586C42.3289 14.8007 42.8235 14.908 43.4115 14.908C43.9902 14.908 44.4522 14.782 44.7975 14.53C45.1522 14.278 45.3295 13.9327 45.3295 13.494C45.3295 13.13 45.2455 12.836 45.0775 12.612C44.9095 12.388 44.6809 12.206 44.3915 12.066C44.1115 11.9167 43.8035 11.786 43.4675 11.674C43.1315 11.5527 42.7955 11.4267 42.4595 11.296C42.1235 11.156 41.8155 10.988 41.5355 10.792C41.2555 10.5867 41.0269 10.3207 40.8495 9.994C40.6815 9.66733 40.5975 9.25667 40.5975 8.762C40.5975 8.21133 40.7282 7.74467 40.9895 7.362C41.2602 6.97 41.6242 6.67133 42.0815 6.466C42.5482 6.25133 43.0709 6.144 43.6495 6.144C44.2842 6.144 44.8535 6.27 45.3575 6.522C45.8615 6.76467 46.2722 7.08667 46.5895 7.488L45.6935 8.384C45.4042 8.048 45.0915 7.796 44.7555 7.628C44.4289 7.46 44.0509 7.376 43.6215 7.376C43.0989 7.376 42.6835 7.49267 42.3755 7.726C42.0675 7.95 41.9135 8.26733 41.9135 8.678C41.9135 9.00467 41.9975 9.27067 42.1655 9.476C42.3429 9.672 42.5715 9.84 42.8515 9.98C43.1315 10.12 43.4395 10.2507 43.7755 10.372C44.1209 10.484 44.4615 10.61 44.7975 10.75C45.1335 10.89 45.4415 11.0673 45.7215 11.282C46.0015 11.4967 46.2255 11.7767 46.3935 12.122C46.5709 12.458 46.6595 12.8827 46.6595 13.396C46.6595 14.2547 46.3609 14.9267 45.7635 15.412C45.1755 15.8973 44.3775 16.14 43.3695 16.14ZM48.4332 16V6.284H49.7492V16H48.4332ZM49.3292 16V14.796H54.5372V16H49.3292ZM61.6625 16.14C60.8972 16.14 60.2438 16 59.7025 15.72C59.1612 15.44 58.6805 15.034 58.2605 14.502L59.1565 13.606C59.4645 14.0353 59.8192 14.362 60.2205 14.586C60.6218 14.8007 61.1165 14.908 61.7045 14.908C62.2832 14.908 62.7452 14.782 63.0905 14.53C63.4452 14.278 63.6225 13.9327 63.6225 13.494C63.6225 13.13 63.5385 12.836 63.3705 12.612C63.2025 12.388 62.9738 12.206 62.6845 12.066C62.4045 11.9167 62.0965 11.786 61.7605 11.674C61.4245 11.5527 61.0885 11.4267 60.7525 11.296C60.4165 11.156 60.1085 10.988 59.8285 10.792C59.5485 10.5867 59.3198 10.3207 59.1425 9.994C58.9745 9.66733 58.8905 9.25667 58.8905 8.762C58.8905 8.21133 59.0212 7.74467 59.2825 7.362C59.5532 6.97 59.9172 6.67133 60.3745 6.466C60.8412 6.25133 61.3638 6.144 61.9425 6.144C62.5772 6.144 63.1465 6.27 63.6505 6.522C64.1545 6.76467 64.5652 7.08667 64.8825 7.488L63.9865 8.384C63.6972 8.048 63.3845 7.796 63.0485 7.628C62.7218 7.46 62.3438 7.376 61.9145 7.376C61.3918 7.376 60.9765 7.49267 60.6685 7.726C60.3605 7.95 60.2065 8.26733 60.2065 8.678C60.2065 9.00467 60.2905 9.27067 60.4585 9.476C60.6358 9.672 60.8645 9.84 61.1445 9.98C61.4245 10.12 61.7325 10.2507 62.0685 10.372C62.4138 10.484 62.7545 10.61 63.0905 10.75C63.4265 10.89 63.7345 11.0673 64.0145 11.282C64.2945 11.4967 64.5185 11.7767 64.6865 12.122C64.8638 12.458 64.9525 12.8827 64.9525 13.396C64.9525 14.2547 64.6538 14.9267 64.0565 15.412C63.4685 15.8973 62.6705 16.14 61.6625 16.14ZM69.4864 16.14C68.8238 16.14 68.2264 15.9907 67.6944 15.692C67.1624 15.384 66.7424 14.9687 66.4344 14.446C66.1264 13.9233 65.9724 13.3307 65.9724 12.668C65.9724 12.0147 66.1218 11.4267 66.4204 10.904C66.7284 10.3813 67.1391 9.97067 67.6524 9.672C68.1751 9.364 68.7584 9.21 69.4024 9.21C70.0184 9.21 70.5598 9.35 71.0264 9.63C71.5024 9.91 71.8711 10.2973 72.1324 10.792C72.4031 11.2867 72.5384 11.8467 72.5384 12.472C72.5384 12.5653 72.5338 12.668 72.5244 12.78C72.5151 12.8827 72.4964 13.004 72.4684 13.144H66.8544V12.094H71.7964L71.3344 12.5C71.3344 12.052 71.2551 11.674 71.0964 11.366C70.9378 11.0487 70.7138 10.806 70.4244 10.638C70.1351 10.4607 69.7851 10.372 69.3744 10.372C68.9451 10.372 68.5671 10.4653 68.2404 10.652C67.9138 10.8387 67.6618 11.1 67.4844 11.436C67.3071 11.772 67.2184 12.1687 67.2184 12.626C67.2184 13.0927 67.3118 13.5033 67.4984 13.858C67.6851 14.2033 67.9511 14.474 68.2964 14.67C68.6418 14.8567 69.0384 14.95 69.4864 14.95C69.8598 14.95 70.2004 14.8847 70.5084 14.754C70.8258 14.6233 71.0964 14.4273 71.3204 14.166L72.1324 14.992C71.8151 15.3653 71.4231 15.65 70.9564 15.846C70.4991 16.042 70.0091 16.14 69.4864 16.14ZM76.9503 16.14C76.2969 16.14 75.7043 15.986 75.1723 15.678C74.6496 15.37 74.2343 14.9547 73.9263 14.432C73.6276 13.9 73.4783 13.312 73.4783 12.668C73.4783 12.0147 73.6276 11.4267 73.9263 10.904C74.2343 10.3813 74.6496 9.97067 75.1723 9.672C75.7043 9.364 76.2969 9.21 76.9503 9.21C77.4636 9.21 77.9396 9.308 78.3783 9.504C78.8169 9.69067 79.1949 9.966 79.5123 10.33L78.6723 11.17C78.4669 10.9273 78.2149 10.7453 77.9163 10.624C77.6269 10.4933 77.3049 10.428 76.9503 10.428C76.5303 10.428 76.1569 10.526 75.8303 10.722C75.5036 10.9087 75.2469 11.17 75.0603 11.506C74.8736 11.842 74.7803 12.2293 74.7803 12.668C74.7803 13.1067 74.8736 13.494 75.0603 13.83C75.2469 14.166 75.5036 14.432 75.8303 14.628C76.1569 14.824 76.5303 14.922 76.9503 14.922C77.3049 14.922 77.6269 14.8613 77.9163 14.74C78.2149 14.6093 78.4716 14.4227 78.6863 14.18L79.5123 15.02C79.2043 15.3747 78.8263 15.65 78.3783 15.846C77.9396 16.042 77.4636 16.14 76.9503 16.14ZM83.4359 16.14C82.8946 16.14 82.4046 16.0187 81.9659 15.776C81.5366 15.524 81.2006 15.1787 80.9579 14.74C80.7152 14.3013 80.5939 13.7927 80.5939 13.214V9.35H81.8539V13.158C81.8539 13.522 81.9146 13.8393 82.0359 14.11C82.1666 14.3713 82.3532 14.572 82.5959 14.712C82.8386 14.852 83.1232 14.922 83.4499 14.922C83.9446 14.922 84.3319 14.768 84.6119 14.46C84.8919 14.1427 85.0319 13.7087 85.0319 13.158V9.35H86.2919V13.214C86.2919 13.7927 86.1706 14.3013 85.9279 14.74C85.6852 15.1787 85.3492 15.524 84.9199 15.776C84.4999 16.0187 84.0052 16.14 83.4359 16.14ZM87.9806 16V9.35H89.2406V16H87.9806ZM89.2406 12.206L88.7646 11.996C88.7646 11.1467 88.9606 10.47 89.3526 9.966C89.7446 9.462 90.3093 9.21 91.0466 9.21C91.3826 9.21 91.686 9.27067 91.9566 9.392C92.2273 9.504 92.4793 9.69533 92.7126 9.966L91.8866 10.82C91.7466 10.6707 91.5926 10.5633 91.4246 10.498C91.2566 10.4327 91.0606 10.4 90.8366 10.4C90.37 10.4 89.9873 10.5493 89.6886 10.848C89.39 11.1467 89.2406 11.5993 89.2406 12.206ZM96.461 16.14C95.7984 16.14 95.201 15.9907 94.669 15.692C94.137 15.384 93.717 14.9687 93.409 14.446C93.101 13.9233 92.947 13.3307 92.947 12.668C92.947 12.0147 93.0964 11.4267 93.395 10.904C93.703 10.3813 94.1137 9.97067 94.627 9.672C95.1497 9.364 95.733 9.21 96.377 9.21C96.993 9.21 97.5344 9.35 98.001 9.63C98.477 9.91 98.8457 10.2973 99.107 10.792C99.3777 11.2867 99.513 11.8467 99.513 12.472C99.513 12.5653 99.5084 12.668 99.499 12.78C99.4897 12.8827 99.471 13.004 99.443 13.144H93.829V12.094H98.771L98.309 12.5C98.309 12.052 98.2297 11.674 98.071 11.366C97.9124 11.0487 97.6884 10.806 97.399 10.638C97.1097 10.4607 96.7597 10.372 96.349 10.372C95.9197 10.372 95.5417 10.4653 95.215 10.652C94.8884 10.8387 94.6364 11.1 94.459 11.436C94.2817 11.772 94.193 12.1687 94.193 12.626C94.193 13.0927 94.2864 13.5033 94.473 13.858C94.6597 14.2033 94.9257 14.474 95.271 14.67C95.6164 14.8567 96.013 14.95 96.461 14.95C96.8344 14.95 97.175 14.8847 97.483 14.754C97.8004 14.6233 98.071 14.4273 98.295 14.166L99.107 14.992C98.7897 15.3653 98.3977 15.65 97.931 15.846C97.4737 16.042 96.9837 16.14 96.461 16.14Z"
                    fill="#009D77" />
                </svg> -->

              </div>
            </div>

          </form>
        </div>
      </div>
    </div>

    <!-- Trust Badges Section -->
    <div
      class="page-container uno-flex uno-flex-wrap uno-justify-between uno-gap-8 uno-mb-24 uno-mx-auto">
      <div v-for="(item, index) in trustItems" :key="index"
        class="uno-flex uno-flex-col uno-items-center uno-text-center">
        <NuxtImg :src="item.image" width="64" height="64" class="uno-w-16 uno-h-16 uno-mb-4" />
        <h4 class="uno-text-[#4E5255] uno-font-[500] uno-font-Outfit">{{ item.text }}</h4>
      </div>
    </div>

    <!-- Testimonials Section -->
    <TestimonialsSection :title="$t('pages.orders.create.testimonials.title')"
      :description="$t('pages.orders.create.testimonials.subtitle')" :rating="5" :reviews="reviews" />

    <!-- FAQ Section -->
    <FAQSection :title="$t('common.faq.title')" :description="$t('common.faq.desc')" :items="faqItems" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { payOrder } from '~/api/tests';
import AppCheckIcon from '~/components/AppCheckIcon.vue';
import PrimaryButton from '~/components/ui/PrimaryButton.vue'
import CustomButton from '~/components/ui/CustomButton.vue'

const { toast } = useToast()

const { t } = useI18n()
const route = useRoute()



definePageMeta({
  title: () => 'pages.orders.create.title',
    layoutShowPageTopIcons: false,
  path: '/checkout'
})
useSeoMeta({
  title: () => t('seo.orders.create.title', { separator: '|' }) as string,
  description: () => t('seo.orders.create.description') as string
})

// Form State
const form = ref({
  order_id: '',
  email: '',
  name: '',
  cardNumber: '',
  expires: '',
  cvv: '',
  zip: '',
  consent: false
})
const planName = ref('')
const planPrice = ref('')

const isLoading = ref(false)
const emailError = ref(false)

// Initialize form data from route query
onMounted(() => {
  if (route.query.order_id) {
    form.value.order_id = route.query.order_id as string
  } else if (route.query.order_sn) {
    form.value.order_id = route.query.order_sn as string
  }

  // Get plan_name and plan_price from query params
  planName.value = route.query.plan_name as string || ""
  planPrice.value = route.query.plan_price as string || "1.99"

  // You can use these values as needed
})

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (form.value.email && !emailRegex.test(form.value.email)) {
    emailError.value = true
  } else {
    emailError.value = false
  }
}

const isFormValid = computed(() => {
  const emailValid = !!form.value.email && !emailError.value
  const orderIdValid = !!form.value.order_id
  const consentValid = form.value.consent
  return emailValid && orderIdValid && consentValid
})

const handleSubmit = async () => {
  if (!isFormValid.value) {
    // Check specific validation errors and show toasts
    if (!form.value.email) {
      toast?.add({
        title: t('common.api.error'),
        color: 'warning',
        description: t('pages.orders.create.form.emailRequired') || 'Email is required.',
      })
    } else if (emailError.value) {
      toast?.add({
        title: t('common.api.error'),
        color: 'warning',
        description: t('pages.orders.create.form.emailInvalid') || 'Please enter a valid email address.',
      })
    } else if (!form.value.order_id) {
      toast?.add({
        title: t('common.api.error'),
        color: 'warning',
        description: t('pages.orders.create.form.orderIdRequired') || 'Order ID is required.',
      })
    } else if (!form.value.consent) {
      toast?.add({
        title: t('common.api.error'),
        color: 'warning',
        description: t('pages.orders.create.form.consentRequired') || 'Please consent to the terms.',
      })
    }
    return
  }

  isLoading.value = true
  try {
    const { data, error } = await payOrder({
      order_id: form.value.order_id,
      email: form.value.email
    })

    if (error.value) {
      // Using alert for simplicity, could be replaced with a toast
      return
    }

    const token = data.value?.data?.user_token
    if (token) {
      // 存储 token 到 localStorage 或 sessionStorage
      localStorage.setItem('userToken', token)
      // 跳转到成功页面
      // router.push({ path: '/orders/success' })
    } else {
      // 处理 token 缺失的情况
      toast?.add({
        title: t('common.api.error'),
        color: 'warning',
        description: t('pages.orders.create.form.paymentError') || 'Payment failed. Please try again.',
      })
    }



  } catch (err) {
  } finally {
    isLoading.value = false
  }
}

// Trust Badges Data
const trustItems = computed(() => [
  { text: t('pages.orders.create.trust.us'), image: '/images/orders/create/5.png' },
  { text: t('pages.orders.create.trust.noCharge'), image: '/images/orders/create/6.png' },
  { text: t('pages.orders.create.trust.refund'), image: '/images/orders/create/7.png' },
  { text: t('pages.orders.create.trust.cancel'), image: '/images/orders/create/8.png' },
])
// Testimonials Data
const reviews = computed(() => {
  return [
    {
      text: t('pages.orders.create.testimonials.reviews.review1.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
      name: t('pages.orders.create.testimonials.reviews.review1.name'),
      role: t('pages.orders.create.testimonials.reviews.review1.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review2.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
      name: t('pages.orders.create.testimonials.reviews.review2.name'),
      role: t('pages.orders.create.testimonials.reviews.review2.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review3.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/women/67.jpg',
      name: t('pages.orders.create.testimonials.reviews.review3.name'),
      role: t('pages.orders.create.testimonials.reviews.review3.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review4.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/men/78.jpg',
      name: t('pages.orders.create.testimonials.reviews.review4.name'),
      role: t('pages.orders.create.testimonials.reviews.review4.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review5.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/women/23.jpg',
      name: t('pages.orders.create.testimonials.reviews.review5.name'),
      role: t('pages.orders.create.testimonials.reviews.review5.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review6.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/men/56.jpg',
      name: t('pages.orders.create.testimonials.reviews.review6.name'),
      role: t('pages.orders.create.testimonials.reviews.review6.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review7.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/women/89.jpg',
      name: t('pages.orders.create.testimonials.reviews.review7.name'),
      role: t('pages.orders.create.testimonials.reviews.review7.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review8.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/men/92.jpg',
      name: t('pages.orders.create.testimonials.reviews.review8.name'),
      role: t('pages.orders.create.testimonials.reviews.review8.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review9.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: t('pages.orders.create.testimonials.reviews.review9.name'),
      role: t('pages.orders.create.testimonials.reviews.review9.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review10.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/men/63.jpg',
      name: t('pages.orders.create.testimonials.reviews.review10.name'),
      role: t('pages.orders.create.testimonials.reviews.review10.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review11.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/women/75.jpg',
      name: t('pages.orders.create.testimonials.reviews.review11.name'),
      role: t('pages.orders.create.testimonials.reviews.review11.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review12.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/men/87.jpg',
      name: t('pages.orders.create.testimonials.reviews.review12.name'),
      role: t('pages.orders.create.testimonials.reviews.review12.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review13.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/women/51.jpg',
      name: t('pages.orders.create.testimonials.reviews.review13.name'),
      role: t('pages.orders.create.testimonials.reviews.review13.role')
    },
    {
      text: t('pages.orders.create.testimonials.reviews.review14.review'),
      avatarUrl: 'https://randomuser.me/api/portraits/men/39.jpg',
      name: t('pages.orders.create.testimonials.reviews.review14.name'),
      role: t('pages.orders.create.testimonials.reviews.review14.role')
    }
  ]
})


const faqItems = computed(() => [
  {
    question: t('datas.faq.question1'),
    answer: t('datas.faq.answer1')
  },
  {
    question: t('datas.faq.question2'),
    answer: t('datas.faq.answer2')
  },
  {
    question: t('datas.faq.question3'),
    answer: t('datas.faq.answer3')
  },
  {
    question: t('datas.faq.question4'),
    answer: t('datas.faq.answer4')
  },
  {
    question: t('datas.faq.question5'),
    answer: t('datas.faq.answer5')
  },
  {
    question: t('datas.faq.question6'),
    answer: t('datas.faq.answer6')
  },
  {
    question: t('datas.faq.question7'),
    answer: t('datas.faq.answer7')
  },
  {
    question: t('datas.faq.question8'),
    answer: t('datas.faq.answer8')
  }
])
</script>
