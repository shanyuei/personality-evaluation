<template>
  <div class="uno-w-full uno-relative uno-min-h-[471px]">
    <div class="uno-w-full uno-absolute uno-bottom-0 uno-left-0 uno-z-[1] ">
      <NuxtImg src="/theme/layout/footer-bg-1920.png" alt="uno-footer" width="1920" height="471"
        class="uno-w-full uno-h-[471px] uno-object-cover uno-object-center" />
    </div>
    <div class="uno-w-full uno-bottom-0 uno-left-0 uno-z-[2] uno-relative">
      <UFooter :ui="{
        container: 'py-80px px-40px xl:px-0 gap-0 z-[2] relative max-w-[1440px] mx-auto items-start max-md:max-w-[80%] max-sm:max-w-full max-sm:flex-col-reverse max-sm:flex max-sm:gap-32px max-sm:py-0 max-sm:p-b-24px',
        left: 'flex-none',
        right: 'flex-none',
        center: 'flex-none',
        bottom: 'p-t-0 uno-pb-32px',
      }">
        <template #left>
          <div class="uno-flex uno-flex-col uno-w-210px">
            <!-- logo -->
            <NuxtImg src="/theme/logo.png" alt="logo" width="175px" height="40px" />
            <!-- 介绍 -->
            <p class="uno-text-[#4E5255] uno-font-['Outfit'] uno-text-sm uno-m-t-12px">
              Unlock knowledge with expert-led online courses.
            </p>
            <p class="uno-text-[#011813] uno-text-xl uno-font-['Outfit'] uno-font-medium uno-m-t-24px">
              Stay connected
            </p>
            <!-- 图标 -->
            <div class="uno-flex uno-gap-12px uno-m-t-16px">
              <!-- 推特 -->
              <NuxtImg src="/images/footer/twitter.png" alt="twitter" width="32px" height="32px" />
              <!-- 脸书 -->
              <NuxtImg src="/images/footer/facebook.png" alt="facebook" width="32px" height="32px" />
              <!-- Linkedin -->
              <NuxtImg src="/images/footer/linkedin.png" alt="linkedin" width="32px" height="32px" />
              <!-- Instagram -->
              <NuxtImg src="/images/footer/instagram.png" alt="instagram" width="32px" height="32px" />
            </div>
          </div>

        </template>

        <template #default>
          <!-- 导航 -->
          <div class="uno-grid uno-grid-cols-2 uno-gap-40px uno-mb-32px">
            <div>
              <h3 class="uno-text-[#011813] uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-mb-16px">Pages
              </h3>
              <ul class="uno-space-y-16px">
                <li><a href="/" class="uno-text-[#011813] uno-font-['Outfit'] hover:uno-text-[#4E5255]">Home 1</a></li>
                <li><a href="/" class="uno-text-[#011813] uno-font-['Outfit'] hover:uno-text-[#4E5255]">Home 2</a></li>
                <li><a href="/" class="uno-text-[#011813] uno-font-['Outfit'] hover:uno-text-[#4E5255]">Home 3</a></li>
                <li><a href="/about" class="uno-text-[#011813] uno-font-['Outfit'] hover:uno-text-[#4E5255]">About
                    Us</a></li>
                <li><a href="/courses"
                    class="uno-text-[#011813] uno-font-['Outfit'] hover:uno-text-[#4E5255]">Courses</a></li>
              </ul>
            </div>
            <div>
              <h3 class="uno-text-[#011813] uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-mb-16px">Others
              </h3>
              <ul class="uno-space-y-16px">
                <li><a href="/mentors"
                    class="uno-text-[#011813] uno-font-['Outfit'] hover:uno-text-[#4E5255]">Mentors</a></li>
                <li><a href="#" class="uno-text-[#011813] uno-font-['Outfit'] hover:uno-text-[#4E5255]">Contact Us</a>
                </li>
                <li><a href="/blog" class="uno-text-[#011813] uno-font-['Outfit'] hover:uno-text-[#4E5255]">Blog</a>
                </li>
                <li><a href="#" class="uno-text-[#011813] uno-font-['Outfit'] hover:uno-text-[#4E5255]">Privacy
                    Policy</a></li>
                <li><a href="#" class="uno-text-[#011813] uno-font-['Outfit'] hover:uno-text-[#4E5255]">Terms &
                    Conditions</a></li>
              </ul>
            </div>
          </div>
        </template>

        <template #right>
          <!-- 联系信息 -->
          <div>
            <h3 class="uno-text-[#011813] uno-text-2xl uno-font-['Outfit'] uno-font-semibold uno-mb-16px">Contact Us
            </h3>
            <div class="uno-space-y-16px">
              <!-- 电话 -->
              <div class="uno-flex uno-items-center uno-gap-8px">
                <NuxtImg src="/images/footer/tel.png" alt="tel" width="20px" height="20px" class="uno-text-[#4E5255]" />
                <a href="tel:+8801798155521" class="uno-text-[#011813] uno-font-['Outfit']">+8801798155521</a>
              </div>
              <!-- 邮箱 -->
              <div class="uno-flex uno-items-center uno-gap-8px">
                <NuxtImg src="/images/footer/mailto.png" alt="mailto" width="20px" height="20px"
                  class="uno-text-[#4E5255]" />
                <a href="mailto:hello@designmonks.co"
                  class="uno-text-[#011813] uno-font-['Outfit']">hello@designmonks.co</a>
              </div>
              <!-- 地址 -->
              <div class="uno-flex uno-items-start uno-gap-8px">
                <NuxtImg src="/images/footer/address.png" alt="mailto" width="20px" height="20px"
                  class="uno-text-[#4E5255]" />
                <div class="uno-text-[#011813] uno-font-['Outfit'] uno-not-italic">4886 Stroman Drives,
                  California,<br>South
                  Stanton, USA</div>
              </div>
            </div>
          </div>
        </template>
        <template #bottom>
          <!-- 分割线 -->
          <div
            class="uno-w-full uno-flex uno-justify-center uno-max-w-[1440px] uno-m-b-32px uno-mx-auto uno-px-40px xl:uno-px-0 max-md:uno-max-w-[80%] sm:uno-w-full">
            <NuxtImg src="/images/footer/line.png" alt="line" width="100%" height="1px" object-fit="contain" />
          </div>
          <div
            class="uno-w-full uno-max-w-[1440px] uno-mx-auto uno-px-40px xl:uno-px-0 uno-flex uno-items-center uno-justify-between max-md:uno-max-w-[80%] max-sm:uno-max-w-full max-sm:uno-flex-col max-sm:uno-items-start max-sm:uno-gap-16px max-xs:uno-gap-12px">
            <div
              class="uno-text-[#011813] uno-font-['Outfit'] uno-text-center uno-text-16px max-sm:uno-text-14px max-xs:uno-text-12px">
              2024 ©Design Monks. All rights reserved.
            </div>
            <!-- 支付方式 -->
            <div
              class="uno-flex uno-items-center uno-gap-12px uno-flex-wrap uno-justify-center max-sm:uno-gap-8px max-xs:uno-gap-6px">
              <span
                class="uno-text-[#011813] uno-font-['Outfit'] uno-mr-12px max-sm:uno-mr-8px max-xs:uno-mr-6px max-sm:uno-text-14px max-xs:uno-text-12px">
                Payments:</span>
              <NuxtImg src="/images/footer/payments-logo-1.png" alt="Visa" width="36px" height="24px" />
              <NuxtImg src="/images/footer/payments-logo-2.png" alt="Mastercard" width="36px" height="24px" />
              <NuxtImg src="/images/footer/payments-logo-3.png" alt="UnionPay" width="36px" height="24px" />
              <NuxtImg src="/images/footer/payments-logo-4.png" alt="American Express" width="36px" height="24px" />
              <NuxtImg src="/images/footer/payments-logo-5.png" alt="PayPal" width="36px" height="24px" />
            </div>
          </div>
        </template>

      </UFooter>
    </div>
  </div>
</template>
<script setup lang="ts">


</script>
<style scoped></style>
