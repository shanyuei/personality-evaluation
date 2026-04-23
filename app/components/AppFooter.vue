<template>
  <div class="uno-w-full uno-relative uno-min-h-[471px] md:uno-min-h-[400px]">
    <div class="uno-w-full uno-absolute uno-bottom-0 uno-left-0 uno-z-[1] ">
      <NuxtImg src="/theme/layout/footer-bg-1920.png" alt="uno-footer" width="1920" height="471"
        class="uno-w-full uno-h-760px lg:uno-h-[471px] md:uno-h-[620px] uno-object-cover uno-object-center" />
    </div>
    <div class="page-container uno-w-full uno-bottom-0 uno-left-0 uno-z-[2] uno-relative">
      <UFooter :ui="{
        container: 'md:uno-pt-80px !px-0 gap-0 z-[2] relative max-w-[1440px] mx-auto items-start max-md:max-w-[80%] max-md:flex max-md:flex-col-reverse max-md:gap-32px max-sm:max-w-full max-sm:flex-col-reverse max-sm:flex max-sm:gap-32px max-sm:py-0  uno-items-start',
        left: 'flex-1 md:uno-items-start md:uno-justify-center',
        right: 'flex-1 hidden',
        center: 'flex-2 md:w-full',
        bottom: 'p-t-0 uno-pb-32px uno-pt-22px',
      }">
        <template #left>
          <div class="uno-flex uno-flex-col md:uno-pl-30px md:uno-mb-32px">
            <!-- logo -->
            <!-- <NuxtImg src="/theme/logo.png" alt="logo" width="249" height="60" /> -->
            <img src="/theme/logo.png" alt="logo" width="249" height="60" />
            <!-- 介绍 -->
            <p class="uno-text-[#4E5255] uno-font-Outfit uno-text-[16px] uno-m-t-12px">
              {{ $t('common.footer.introduction') }}
            </p>
            <p class="uno-text-[#011813] uno-text-xl uno-font-Outfit uno-font-medium uno-m-t-24px">
              {{ $t('common.footer.StayConnected') }}
            </p>
            <!-- 图标 -->
            <div class="uno-flex uno-gap-12px uno-mt-16px md:uno-mb-0 uno-mb-32px">
              <!-- 推特 -->
              <NuxtImg src="/images/footer/twitter.png" alt="twitter" width="40px" height="40px" />
              <!-- 脸书 -->
              <NuxtImg src="/images/footer/facebook.png" alt="facebook" width="40px" height="40px" />
              <!-- Linkedin -->
              <NuxtImg src="/images/footer/linkedin.png" alt="linkedin" width="40px" height="40px" />
              <!-- Instagram -->
              <NuxtImg src="/images/footer/instagram.png" alt="instagram" width="40px" height="40px" />
            </div>
          </div>

        </template>

        <template #default>
          <!-- 导航 -->
          <div
            class="uno-grid uno-grid-cols-2 sm:uno-grid-cols-3 md:uno-justify-center md:uno-justify-items-center uno-gap-y-32px uno-gap-x-[64px] sm:uno-gap-80px uno-mb-32px w-full">
            <div>
              <h3 class="uno-text-[#011813] uno-text-2xl uno-font-Outfit uno-font-semibold uno-mb-16px">
                {{ $t('common.footer.product') }}
              </h3>
              <ul class="uno-space-y-16px">
                <li>
                  <NuxtLink :to="localePath('/free-personality-test')"
                    class="uno-text-[#011813] uno-font-Outfit uno-cursor-pointer hover:uno-text-[#009D77] hover:uno-underline hover:uno-decoration-[#009D77] hover:uno-decoration-2 hover:uno-underline-offset-4">
                    {{ $t('common.footer.freePersonalityTest') }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="uno-text-[#011813] uno-text-2xl uno-font-Outfit uno-font-semibold uno-mb-16px">
                {{ $t('common.footer.help') }}
              </h3>
              <ul class="uno-space-y-16px">

                <li>
                  <NuxtLink :to="localePath('/faq')"
                    class="uno-text-[#011813] uno-font-Outfit uno-cursor-pointer hover:uno-text-[#009D77] hover:uno-underline hover:uno-decoration-[#009D77] hover:uno-decoration-2 hover:uno-underline-offset-4">
                    {{ $t('common.footer.faq') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/cancel-subscription')"
                    class="uno-text-[#011813] uno-font-Outfit uno-cursor-pointer hover:uno-text-[#009D77] hover:uno-underline hover:uno-decoration-[#009D77] hover:uno-decoration-2 hover:uno-underline-offset-4">
                    {{ $t('common.footer.cancelSubscription') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/about-us')"
                    class="uno-text-[#011813] uno-font-Outfit uno-cursor-pointer hover:uno-text-[#009D77] hover:uno-underline hover:uno-decoration-[#009D77] hover:uno-decoration-2 hover:uno-underline-offset-4">
                    {{ $t('common.footer.aboutUs') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/contact-us')"
                    class="uno-text-[#011813] uno-font-Outfit uno-cursor-pointer hover:uno-text-[#009D77] hover:uno-underline hover:uno-decoration-[#009D77] hover:uno-decoration-2 hover:uno-underline-offset-4">
                    {{ $t('common.footer.contactUs') }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="uno-text-[#011813] uno-text-2xl uno-font-Outfit uno-font-semibold uno-mb-16px">
                {{ $t('common.footer.legal') }}
              </h3>
              <ul class="uno-space-y-16px">
                <!-- <li>
                  <NuxtLink :to="localePath('/privacy')"
                    class="uno-text-[#011813] uno-font-Outfit uno-cursor-pointer hover:uno-text-[#009D77] hover:uno-underline hover:uno-decoration-[#009D77] hover:uno-decoration-2 hover:uno-underline-offset-4">
                    {{ $t('common.footer.privacyPolicy') }}
                  </NuxtLink>
                </li> -->
                <li>
                  <NuxtLink :to="localePath('/terms-of-use')"
                    class="uno-text-[#011813] uno-font-Outfit uno-cursor-pointer hover:uno-text-[#009D77] hover:uno-underline hover:uno-decoration-[#009D77] hover:uno-decoration-2 hover:uno-underline-offset-4">
                    {{ $t('common.footer.termsOfUse') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/privacy-policy')"
                    class="uno-text-[#011813] uno-font-Outfit uno-cursor-pointer hover:uno-text-[#009D77] hover:uno-underline hover:uno-decoration-[#009D77] hover:uno-decoration-2 hover:uno-underline-offset-4">
                    {{ $t('common.footer.privacyPolicy') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/refund-policy')"
                    class="uno-text-[#011813] uno-font-Outfit uno-cursor-pointer hover:uno-text-[#009D77] hover:uno-underline hover:uno-decoration-[#009D77] hover:uno-decoration-2 hover:uno-underline-offset-4">
                    {{ $t('common.footer.refundPolicy') }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </template>

        <template #right>
          <div class="">
            <div>
              <h3 class="uno-text-[#011813] uno-text-2xl uno-font-Outfit uno-font-semibold uno-mb-16px">
                {{ $t('common.footer.legal') }}
              </h3>
              <ul class="uno-space-y-16px">
                <li>
                  <NuxtLink :to="localePath('/terms-of-use')"
                    class="uno-text-[#011813] uno-font-Outfit uno-cursor-pointer hover:uno-text-[#009D77] hover:uno-underline hover:uno-decoration-[#009D77] hover:uno-decoration-2 hover:uno-underline-offset-4">
                    {{ $t('common.footer.termsOfUse') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/privacy')"
                    class="uno-text-[#011813] uno-font-Outfit uno-cursor-pointer hover:uno-text-[#009D77] hover:uno-underline hover:uno-decoration-[#009D77] hover:uno-decoration-2 hover:uno-underline-offset-4">
                    {{ $t('common.footer.privacyPolicy') }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink :to="localePath('/refund-policy')"
                    class="uno-text-[#011813] uno-font-Outfit uno-cursor-pointer hover:uno-text-[#009D77] hover:uno-underline hover:uno-decoration-[#009D77] hover:uno-decoration-2 hover:uno-underline-offset-4">
                    {{ $t('common.footer.refundPolicy') }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <!-- <div>
            <h3 class="uno-text-[#011813] uno-text-2xl uno-font-Outfit uno-font-semibold uno-mb-16px">
              {{ $t('common.footer.contactUs') }}
            </h3>
            <div class="uno-space-y-16px">
              <div class="uno-flex uno-items-center uno-gap-8px">
                <NuxtImg src="/images/footer/tel.png" alt="tel" width="20px" height="20px" class="uno-text-[#4E5255]" />
                <a href="tel:+8801798155521" class="uno-text-[#011813] uno-font-Outfit uno-cursor-pointer">+8801798155521</a>
              </div>
              <div class="uno-flex uno-items-center uno-gap-8px">
                <NuxtImg src="/images/footer/mailto.png" alt="mailto" width="20px" height="20px"
                  class="uno-text-[#4E5255]" />
                <a href="mailto:support@personalitytest101.com"
                  class="uno-text-[#011813] uno-font-Outfit uno-cursor-pointer">support@personalitytest101.com</a>
              </div>
              <div class="uno-flex uno-items-start uno-gap-8px">
                <NuxtImg src="/images/footer/address.png" alt="address" width="20px" height="20px"
                  class="uno-text-[#4E5255]" />
                <div class="uno-text-[#011813] uno-font-Outfit uno-cursor-pointer uno-not-italic">4886 Stroman Drives,
                  California,<br>South
                  Stanton, USA</div>
              </div>
            </div>
          </div> -->
        </template>
        <template #bottom>
          <div
            class="uno-w-full uno-flex uno-justify-center uno-max-w-[1440px] uno-m-b-24px sm:uno-m-b-32px uno-mx-auto uno-px-0 sm:uno-px-40px xl:uno-px-0 max-md:uno-max-w-[80%] sm:uno-w-full">
            <NuxtImg src="/images/footer/line.png" alt="line" width="100%" height="1px" object-fit="contain" />
          </div>
          <div
            class="uno-w-full uno-max-w-[1440px] uno-mx-auto uno-px-0 sm:uno-px-40px xl:uno-px-0 uno-flex uno-items-center uno-justify-center max-md:uno-max-w-[80%] max-sm:uno-max-w-full max-sm:uno-flex-col max-sm:uno-items-center uno-gap-0 sm:uno-gap-16px max-xs:uno-gap-12px">
            <div class="uno-text-[#011813] uno-font-Outfit uno-cursor-pointer uno-text-center uno-text-16px">
              {{ $t('common.footer.copyright') }}
            </div>
            <!-- <div class="uno-flex uno-items-center uno-gap-8px uno-flex-wrap uno-justify-center ">
              <span
                class="uno-text-[#011813] uno-font-Outfit uno-cursor-pointer uno-mr-12px max-sm:uno-mr-8px max-xs:uno-mr-6px max-sm:uno-text-14px max-xs:uno-text-12px">
                {{ $t('common.footer.payments') }}:</span>
              <NuxtImg src="/images/footer/payments-logo-1.png" alt="Visa" width="36px" height="24px" />
              <NuxtImg src="/images/footer/payments-logo-2.png" alt="Mastercard" width="36px" height="24px" />
              <NuxtImg src="/images/footer/payments-logo-3.png" alt="UnionPay" width="36px" height="24px" />
              <NuxtImg src="/images/footer/payments-logo-4.png" alt="American Express" width="36px" height="24px" />
              <NuxtImg src="/images/footer/payments-logo-5.png" alt="PayPal" width="36px" height="24px" />
            </div> -->
          </div>
        </template>

      </UFooter>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useLocalePath } from '#i18n'

const localePath = useLocalePath()
</script>
<style scoped></style>
