<template>
  <div class="w-full relative">
    <div class="w-full h-full absolute bottom-0 left-0 z-[1]">
      <NuxtPicture src="/theme/layout/footer-bg-1440.png" :sources="[
        { srcset: '/theme/layout/footer-bg-1920px.png', media: '(max-width: 1920px)' },
        { srcset: '/theme/layout/footer-bg-1440.png', media: '(max-width: 1440px)' }
      ]" :img-attrs="{ class: 'w-full h-471px', alt: 'footer' }" />
    </div>
    <div class="w-full h-full top-0 left-0 z-[2] absolute">
      <UFooter :ui="{
        container: 'py-80px px-0 gap-0 z-[2] relative max-w-[1440px] mx-auto items-start md:max-w-[1200px] sm:max-w-full sm:px-40px',
        left: 'flex-none',
        right: 'flex-none',
        center: 'flex-none',
        bottom: 'p-t-0',
      }">
        <template #left>
          <div class="flex flex-col w-210px">
            <!-- logo -->
            <NuxtImg src="/theme/logo.png" alt="logo" width="175px" height="40px" />
            <!-- 介绍 -->
            <p class="text-[#4E5255] font-['Outfit'] text-sm m-t-12px">
              {{ $t('footer.introduction') }}
            </p>
            <p class="text-[#011813] text-xl font-['Outfit'] font-medium m-t-24px">
              {{ $t('footer.stayConnected') }}
            </p>
            <!-- 图标 -->
            <div class="flex gap-12px m-t-16px">
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
          <div class="grid grid-cols-2 gap-40px">
            <div>
              <h3 class="text-[#011813] text-2xl font-['Outfit'] font-semibold mb-16px">{{ $t('footer.pagesText') }}
              </h3>
              <ul class="space-y-16px">
                <li><a href="/" class="text-[#011813] font-['Outfit'] hover:text-[#4E5255]">Home 1</a></li>
                <li><a href="/" class="text-[#011813] font-['Outfit'] hover:text-[#4E5255]">Home 2</a></li>
                <li><a href="/" class="text-[#011813] font-['Outfit'] hover:text-[#4E5255]">Home 3</a></li>
                <li><a href="/about" class="text-[#011813] font-['Outfit'] hover:text-[#4E5255]">About Us</a></li>
                <li><a href="/courses" class="text-[#011813] font-['Outfit'] hover:text-[#4E5255]">Courses</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-[#011813] text-2xl font-['Outfit'] font-semibold mb-16px">{{ $t('footer.othersText') }}
              </h3>
              <ul class="space-y-16px">
                <li><a href="/mentors" class="text-[#011813] font-['Outfit'] hover:text-[#4E5255]">Mentors</a></li>
                <li><a href="#" class="text-[#011813] font-['Outfit'] hover:text-[#4E5255]">Contact Us</a></li>
                <li><a href="/blog" class="text-[#011813] font-['Outfit'] hover:text-[#4E5255]">Blog</a></li>
                <li><a href="#" class="text-[#011813] font-['Outfit'] hover:text-[#4E5255]">Privacy Policy</a></li>
                <li><a href="#" class="text-[#011813] font-['Outfit'] hover:text-[#4E5255]">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </template>

        <template #right>
          <!-- 联系信息 -->
          <div>
            <h3 class="text-[#011813] text-2xl font-['Outfit'] font-semibold mb-16px">Contact Us</h3>
            <div class="space-y-16px">
              <!-- 电话 -->
              <div class="flex items-center gap-8px">
                <NuxtImg src="/images/footer/tel.png" alt="tel" width="20px" height="20px" class="text-[#4E5255]" />
                <a href="tel:+8801798155521" class="text-[#011813] font-['Outfit']">+8801798155521</a>
              </div>
              <!-- 邮箱 -->
              <div class="flex items-center gap-8px">
                <NuxtImg src="/images/footer/mailto.png" alt="mailto" width="20px" height="20px"
                  class="text-[#4E5255]" />
                <a href="mailto:hello@designmonks.co" class="text-[#011813] font-['Outfit']">hello@designmonks.co</a>
              </div>
              <!-- 地址 -->
              <div class="flex items-start gap-8px">
                <NuxtImg src="/images/footer/address.png" alt="mailto" width="20px" height="20px"
                  class="text-[#4E5255]" />
                <div class="text-[#011813] font-['Outfit'] not-italic">4886 Stroman Drives, California,<br>South
                  Stanton, USA</div>
              </div>
            </div>
          </div>
        </template>
        <template #bottom>
          <!-- 分割线 -->
          <div class="w-full flex justify-center max-w-[1440px] m-b-32px mx-auto px-0 md:max-w-[1200px] sm:w-full sm:px-40px">
            <NuxtImg src="/images/footer/line.png" alt="line" width="100%" height="1px" object-fit="contain" />
          </div>
          <div
            class="w-full max-w-[1440px]  mx-auto flex items-center justify-between md:max-w-[1200px] sm:max-w-full sm:px-40px">
            <div class="text-[#011813] font-['Outfit'] text-center text-16px">
              {{ $t('footer.copyright') }}
            </div>
            <!-- 支付方式 -->
            <div class="flex items-center gap-12px flex-wrap justify-center">
              <span class="text-[#011813] font-['Outfit'] mr-12px">{{ $t('footer.payments') }}:</span>
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
import { ref } from 'vue'

const items = ref([
  {
    label: 'Figma Kit',
    to: 'https://go.nuxt.com/figma-ui',
    target: '_blank'
  }, {
    label: 'Playground',
    to: 'https://stackblitz.com/edit/nuxt-ui',
    target: '_blank'
  }, {
    label: 'Releases',
    to: 'https://github.com/nuxt/ui/releases',
    target: '_blank'
  }
])
</script>
<style scoped></style>
