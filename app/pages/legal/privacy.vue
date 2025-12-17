<template>
  <main class="uno-py-12 uno-px-6 md:uno-px-10 ">
    <div class="page-container  uno-mx-auto">
      <!-- 面包屑导航 -->
      <div class="uno-text-sm  uno-mb-6">
        <a href="/">Home</a> / <span>Privacy Policy</span>
      </div>

      <div class="uno-mb-20">
        <h1 class="uno-text-4xl md:uno-text-5xl uno-font-['Outfit'] uno-font-bold uno-text-gray-900">Privacy Policy</h1>
      </div>

      <div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-4 uno-gap-8">
        <!-- 侧边栏菜单 -->
        <div class="uno-col-span-1 uno-hidden md:uno-block">
          <nav class="uno-sticky uno-top-8">
            <ul class="uno-space-y-4">
              <li>
                <a href="#privacy-policy"
                  :class="['uno-block uno-text-sm uno-font-medium hover:text-[var(--color-pink-1)]', activeSection === 'privacy-policy' ? 'text-[var(--color-pink-1)]' : '']"
                  @click="handleClick('privacy-policy')">Privacy
                  Policy</a>
              </li>
              <li>
                <a href="#information-we-collect"
                  :class="['uno-block uno-text-sm uno-font-medium hover:text-[var(--color-pink-1)]', activeSection === 'information-we-collect' ? 'text-[var(--color-pink-1)]' : '']"
                  @click="handleClick('information-we-collect')">Information We
                  Collect</a>
              </li>
              <li>
                <a href="#how-we-use-your-information"
                  :class="['uno-block uno-text-sm uno-font-medium hover:text-[var(--color-pink-1)]', activeSection === 'how-we-use-your-information' ? 'text-[var(--color-pink-1)]' : '']"
                  @click="handleClick('how-we-use-your-information')">How We Use
                  Your Information</a>
              </li>
              <li>
                <a href="#data-sharing-and-disclosure"
                  :class="['uno-block uno-text-sm uno-font-medium hover:text-[var(--color-pink-1)]', activeSection === 'data-sharing-and-disclosure' ? 'text-[var(--color-pink-1)]' : '']"
                  @click="handleClick('data-sharing-and-disclosure')">Data Sharing
                  and Disclosure</a>
              </li>
              <li>
                <a href="#cookies-and-tracking-technologies"
                  :class="['uno-block uno-text-sm uno-font-medium hover:text-[var(--color-pink-1)]', activeSection === 'cookies-and-tracking-technologies' ? 'text-[var(--color-pink-1)]' : '']"
                  @click="handleClick('cookies-and-tracking-technologies')">Cookies and
                  Tracking Technologies</a>
              </li>
              <li>
                <a href="#changes-to-this-privacy-policy"
                  :class="['uno-block uno-text-sm uno-font-medium hover:text-[var(--color-pink-1)]', activeSection === 'changes-to-this-privacy-policy' ? 'text-[var(--color-pink-1)]' : '']"
                  @click="handleClick('changes-to-this-privacy-policy')">Changes to
                  This Privacy Policy</a>
              </li>
              <li>
                <a href="#contact-us"
                  :class="['uno-block uno-text-sm uno-font-medium hover:text-[var(--color-pink-1)]', activeSection === 'contact-us' ? 'text-[var(--color-pink-1)]' : '']"
                  @click="handleClick('contact-us')">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- 主内容区域 -->
        <div class="uno-col-span-3">
          <div class="uno-space-y-8">
            <!-- Privacy Policy -->
            <section id="privacy-policy">
              <h2 class="uno-text-2xl uno-font-['Outfit'] uno-font-bold uno-text-gray-900 uno-mb-4">Privacy Policy</h2>
              <p class="uno-text-sm uno-text-gray-500 uno-mb-6">Last Update: 25-11-2024</p>
              <p class="uno-text-gray-700 uno-mb-4">
                At MH. Masters Hub, we value and prioritize your privacy. This Privacy Policy describes how we collect,
                use,
                share, and protect your information while you use our Learning Management System (LMS) website and
                services. We are committed to ensuring that your personal data remains secure and that you are informed
                about your rights and options regarding your information.
              </p>
            </section>

            <!-- Information We Collect -->
            <section id="information-we-collect">
              <h2 class="uno-text-xl uno-font-['Outfit'] uno-font-bold uno-text-gray-900 uno-mb-4">Information We
                Collect</h2>
              <p class="uno-text-gray-700 uno-mb-4">
                We collect personal information such as your name, email, and contact details to manage your account and
                improve your learning experience. We track your course progress, assignments, and assessments to tailor
                our
                services. For purchases, we collect payment details for secure processing. We also gather usage data,
                including
                IP address and device information, to enhance our platform's performance.
              </p>
            </section>

            <!-- How We Use Your Information -->
            <section id="how-we-use-your-information">
              <h2 class="uno-text-xl uno-font-['Outfit'] uno-font-bold uno-text-gray-900 uno-mb-4">How We Use Your
                Information</h2>
              <p class="uno-text-gray-700 uno-mb-4">
                We use your data to manage your account, personalize your learning, and communicate important updates.
                With your consent, we may send you promotional offers. Your payment information is used for secure
                transactions
                and fraud prevention. We also use your data to improve our website, customer services, and comply with
                legal
                requirements.
              </p>
            </section>

            <!-- Data Sharing and Disclosure -->
            <section id="data-sharing-and-disclosure">
              <h2 class="uno-text-xl uno-font-['Outfit'] uno-font-bold uno-text-gray-900 uno-mb-4">Data Sharing and
                Disclosure</h2>
              <p class="uno-text-gray-700 uno-mb-4">
                Your privacy is important to us, and we ensure your information is kept confidential. We do not sell or
                rent your
                data. But may share it with trusted third-party vendors for services like hosting and payment
                processing. These
                providers are required to protect your data. We may also share information to comply with legal
                obligations or
                with your consent.
              </p>
            </section>

            <!-- Cookies and Tracking Technologies -->
            <section id="cookies-and-tracking-technologies">
              <h2 class="uno-text-xl uno-font-['Outfit'] uno-font-bold uno-text-gray-900 uno-mb-4">Cookies and Tracking
                Technologies</h2>
              <p class="uno-text-gray-700 uno-mb-4">
                Our website uses cookies and similar tracking technologies to improve user experience and functionality.
                Cookies enable us to remember your preferences, analyze site usage, and enhance our services. Cookies
                are
                small files stored on your device, and while you may choose to disable them via your browser settings,
                doing so
                could limit certain functionalities or features on our website.
              </p>
            </section>

            <!-- Changes to This Privacy Policy -->
            <section id="changes-to-this-privacy-policy">
              <h2 class="uno-text-xl uno-font-['Outfit'] uno-font-bold uno-text-gray-900 uno-mb-4">Changes to This
                Privacy Policy</h2>
              <p class="uno-text-gray-700 uno-mb-4">
                We may update this Privacy Policy to reflect changes in our practices or legal requirements. Updates
                will be
                posted here, and significant changes will be communicated via email or notifications. We encourage you
                to
                review this policy regularly to stay informed. By continuing to use our website, you accept the updated
                terms.
              </p>
            </section>

            <!-- Contact Us -->
            <section id="contact-us">
              <h2 class="uno-text-xl uno-font-['Outfit'] uno-font-bold uno-text-gray-900 uno-mb-4">Contact Us</h2>
              <p class="uno-text-gray-700 uno-mb-4">
                If you have any questions, concerns, or feedback regarding this Privacy Policy, please reach out to us.
                We are
                here to address any inquiries you may have to ensure your experience with MH. Masters Hub is secure and
                trustworthy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'


const { t } = useI18n()

definePageMeta({
  layoutShowCurious: true,
  title: () => 'seo.legal.privacy.title'
})

useSeoMeta({
  title: () => t('seo.legal.privacy.title'),
  description: () => t('seo.legal.privacy.description'),
})
const activeSection = ref('privacy-policy')
const isClicking = ref(false)

const handleScroll = () => {
  if (isClicking.value) return
  
  const sections = document.querySelectorAll('section[id]')
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100
    const sectionId = section.getAttribute('id')
    if (window.scrollY >= sectionTop) {
      activeSection.value = sectionId
    }
  })
}

const handleClick = (sectionId) => {
  isClicking.value = true
  activeSection.value = sectionId
  
  // Reset clicking state after a delay to allow scroll to complete
  setTimeout(() => {
    isClicking.value = false
  }, 1000)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped></style>
