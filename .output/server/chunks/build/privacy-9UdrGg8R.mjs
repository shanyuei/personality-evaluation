import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';
import { u as useI18n, e as useSeoMeta } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue-router';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'ipx';
import 'pinia';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo.legal.privacy.title"),
      description: () => t("seo.legal.privacy.description")
    });
    const activeSection = ref("privacy-policy");
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "uno-py-12 uno-px-6 md:uno-px-10" }, _attrs))}><div class="page-container uno-mx-auto"><div class="uno-text-sm uno-mb-6"><a href="/">Home</a> / <span>Privacy Policy</span></div><div class="uno-mb-20"><h1 class="uno-text-4xl md:uno-text-5xl uno-font-[&#39;Outfit&#39;] uno-font-bold uno-text-gray-900">Privacy Policy</h1></div><div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-4 uno-gap-8"><div class="uno-col-span-1 uno-hidden md:uno-block"><nav class="uno-sticky uno-top-8"><ul class="uno-space-y-4"><li><a href="#privacy-policy" class="${ssrRenderClass(["uno-block uno-text-sm uno-font-medium hover:text-[var(--color-pink-1)]", activeSection.value === "privacy-policy" ? "text-[var(--color-pink-1)]" : ""])}">Privacy Policy</a></li><li><a href="#information-we-collect" class="${ssrRenderClass(["uno-block uno-text-sm uno-font-medium hover:text-[var(--color-pink-1)]", activeSection.value === "information-we-collect" ? "text-[var(--color-pink-1)]" : ""])}">Information We Collect</a></li><li><a href="#how-we-use-your-information" class="${ssrRenderClass(["uno-block uno-text-sm uno-font-medium hover:text-[var(--color-pink-1)]", activeSection.value === "how-we-use-your-information" ? "text-[var(--color-pink-1)]" : ""])}">How We Use Your Information</a></li><li><a href="#data-sharing-and-disclosure" class="${ssrRenderClass(["uno-block uno-text-sm uno-font-medium hover:text-[var(--color-pink-1)]", activeSection.value === "data-sharing-and-disclosure" ? "text-[var(--color-pink-1)]" : ""])}">Data Sharing and Disclosure</a></li><li><a href="#cookies-and-tracking-technologies" class="${ssrRenderClass(["uno-block uno-text-sm uno-font-medium hover:text-[var(--color-pink-1)]", activeSection.value === "cookies-and-tracking-technologies" ? "text-[var(--color-pink-1)]" : ""])}">Cookies and Tracking Technologies</a></li><li><a href="#changes-to-this-privacy-policy" class="${ssrRenderClass(["uno-block uno-text-sm uno-font-medium hover:text-[var(--color-pink-1)]", activeSection.value === "changes-to-this-privacy-policy" ? "text-[var(--color-pink-1)]" : ""])}">Changes to This Privacy Policy</a></li><li><a href="#contact-us" class="${ssrRenderClass(["uno-block uno-text-sm uno-font-medium hover:text-[var(--color-pink-1)]", activeSection.value === "contact-us" ? "text-[var(--color-pink-1)]" : ""])}">Contact Us</a></li></ul></nav></div><div class="uno-col-span-3"><div class="uno-space-y-8"><section id="privacy-policy"><h2 class="uno-text-2xl uno-font-[&#39;Outfit&#39;] uno-font-bold uno-text-gray-900 uno-mb-4">Privacy Policy</h2><p class="uno-text-sm uno-text-gray-500 uno-mb-6">Last Update: 25-11-2024</p><p class="uno-text-gray-700 uno-mb-4"> At MH. Masters Hub, we value and prioritize your privacy. This Privacy Policy describes how we collect, use, share, and protect your information while you use our Learning Management System (LMS) website and services. We are committed to ensuring that your personal data remains secure and that you are informed about your rights and options regarding your information. </p></section><section id="information-we-collect"><h2 class="uno-text-xl uno-font-[&#39;Outfit&#39;] uno-font-bold uno-text-gray-900 uno-mb-4">Information We Collect</h2><p class="uno-text-gray-700 uno-mb-4"> We collect personal information such as your name, email, and contact details to manage your account and improve your learning experience. We track your course progress, assignments, and assessments to tailor our services. For purchases, we collect payment details for secure processing. We also gather usage data, including IP address and device information, to enhance our platform&#39;s performance. </p></section><section id="how-we-use-your-information"><h2 class="uno-text-xl uno-font-[&#39;Outfit&#39;] uno-font-bold uno-text-gray-900 uno-mb-4">How We Use Your Information</h2><p class="uno-text-gray-700 uno-mb-4"> We use your data to manage your account, personalize your learning, and communicate important updates. With your consent, we may send you promotional offers. Your payment information is used for secure transactions and fraud prevention. We also use your data to improve our website, customer services, and comply with legal requirements. </p></section><section id="data-sharing-and-disclosure"><h2 class="uno-text-xl uno-font-[&#39;Outfit&#39;] uno-font-bold uno-text-gray-900 uno-mb-4">Data Sharing and Disclosure</h2><p class="uno-text-gray-700 uno-mb-4"> Your privacy is important to us, and we ensure your information is kept confidential. We do not sell or rent your data. But may share it with trusted third-party vendors for services like hosting and payment processing. These providers are required to protect your data. We may also share information to comply with legal obligations or with your consent. </p></section><section id="cookies-and-tracking-technologies"><h2 class="uno-text-xl uno-font-[&#39;Outfit&#39;] uno-font-bold uno-text-gray-900 uno-mb-4">Cookies and Tracking Technologies</h2><p class="uno-text-gray-700 uno-mb-4"> Our website uses cookies and similar tracking technologies to improve user experience and functionality. Cookies enable us to remember your preferences, analyze site usage, and enhance our services. Cookies are small files stored on your device, and while you may choose to disable them via your browser settings, doing so could limit certain functionalities or features on our website. </p></section><section id="changes-to-this-privacy-policy"><h2 class="uno-text-xl uno-font-[&#39;Outfit&#39;] uno-font-bold uno-text-gray-900 uno-mb-4">Changes to This Privacy Policy</h2><p class="uno-text-gray-700 uno-mb-4"> We may update this Privacy Policy to reflect changes in our practices or legal requirements. Updates will be posted here, and significant changes will be communicated via email or notifications. We encourage you to review this policy regularly to stay informed. By continuing to use our website, you accept the updated terms. </p></section><section id="contact-us"><h2 class="uno-text-xl uno-font-[&#39;Outfit&#39;] uno-font-bold uno-text-gray-900 uno-mb-4">Contact Us</h2><p class="uno-text-gray-700 uno-mb-4"> If you have any questions, concerns, or feedback regarding this Privacy Policy, please reach out to us. We are here to address any inquiries you may have to ensure your experience with MH. Masters Hub is secure and trustworthy. </p></section></div></div></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/legal/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=privacy-9UdrGg8R.mjs.map
