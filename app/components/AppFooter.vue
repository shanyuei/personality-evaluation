<template>
  <div class="w-full relative overflow-hidden">
    <div class="w-full h-full relative top-0 left-0 z-[1]">
      <NuxtPicture src="/theme/layout/footer-bg-1440.png" :sources="[
        { srcset: '/theme/layout/footer-bg-1920px.png', media: '(max-width: 1920px)' },
        { srcset: '/theme/layout/footer-bg-1440.png', media: '(max-width: 1440px)' }
      ]" :img-attrs="{ class: 'w-full h-auto', alt: 'footer' }" />
    </div>
    <div class="w-full h-full top-0 left-0 z-[2] absolute">
      <UFooter :ui="{
        container: 'py-80px px-120px gap-0 z-[2] relative',
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
              <NuxtImg src="/theme/twitter.png" alt="twitter" width="32px" height="32px" />
              <!-- 脸书 -->
              <NuxtImg src="/theme/facebook.png" alt="facebook" width="32px" height="32px" />
              <!-- Linkedin -->
              <NuxtImg src="/theme/linkedin.png" alt="linkedin" width="32px" height="32px" />
              <!-- Instagram -->
              <NuxtImg src="/theme/instagram.png" alt="instagram" width="32px" height="32px" />
            </div>
          </div>

        </template>

        <template #default>
          <!-- 导航 -->
          <div class="grid grid-cols-2 gap-40px">
            <div>
              <h3 class="text-[#011813] text-2xl font-['Outfit'] font-semibold mb-16px">{{ $t('footer.pagesText') }}</h3>
              <ul class="space-y-12px">
                <li><a href="/" class="text-[#011813] font-['Outfit'] hover:text-[#4E5255]">Home 1</a></li>
                <li><a href="/" class="text-[#011813] font-['Outfit'] hover:text-[#4E5255]">Home 2</a></li>
                <li><a href="/" class="text-[#011813] font-['Outfit'] hover:text-[#4E5255]">Home 3</a></li>
                <li><a href="/about" class="text-[#011813] font-['Outfit'] hover:text-[#4E5255]">About Us</a></li>
                <li><a href="/courses" class="text-[#011813] font-['Outfit'] hover:text-[#4E5255]">Courses</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-[#011813] text-2xl font-['Outfit'] font-semibold mb-16px">{{ $t('footer.othersText') }}</h3>
              <ul class="space-y-12px">
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
          <!-- 关于我 -->
           
        </template>
        <template #bottom>
          <div class="w-full " />
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
