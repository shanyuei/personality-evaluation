import { u as useI18n, b as useRoute, p as _sfc_main$e, _ as __nuxt_component_6 } from './server.mjs';
import { _ as _sfc_main$1 } from './Input-B6rMyrRi.mjs';
import { _ as _sfc_main$2 } from './Checkbox-CHOfQbIG.mjs';
import { _ as __nuxt_component_4 } from './TestimonialsSection-B9mBv91_.mjs';
import { _ as __nuxt_component_3 } from './FAQSection-QVBmPaiF.mjs';
import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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

const baseText = "An exceptional platform for career development. The current curriculum, skilled instructors, and hands-on learning are truly rewarding.";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useRoute();
    const form = ref({
      order_id: "",
      email: "",
      name: "",
      cardNumber: "",
      expires: "",
      cvv: "",
      zip: "",
      consent: false
    });
    ref(false);
    const emailError = ref(false);
    computed(() => {
      const emailValid = !!form.value.email && !emailError.value;
      const orderIdValid = !!form.value.order_id;
      const consentValid = form.value.consent;
      return emailValid && orderIdValid && consentValid;
    });
    const trustItems = computed(() => [
      { text: t("pages.order.create.trust.us"), image: "/images/orders/create/5.png" },
      { text: t("pages.order.create.trust.noCharge"), image: "/images/orders/create/6.png" },
      { text: t("pages.order.create.trust.refund"), image: "/images/orders/create/7.png" },
      { text: t("pages.order.create.trust.cancel"), image: "/images/orders/create/8.png" }
    ]);
    const reviews = Array.from({ length: 30 }, (_, i) => ({
      text: baseText,
      avatarUrl: `https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${i % 99 + 1}.jpg`,
      name: "Brandon Michael",
      role: "UX/UI Designer"
    }));
    const faqItems = [
      {
        question: "Can I Track My Assignments and Grades?",
        answer: 'Yes, the LMS offers a "Gradebook" where students can view their grades, mentor feedback on assignments, and class attendance data. You can view your grade and comments for each submission.'
      },
      {
        question: "Does the LMS support video lessons and live classes?",
        answer: "Yes, it supports both pre-recorded video lessons and live classes with interactive features."
      },
      {
        question: "How can I communicate with my instructor?",
        answer: "You can use messaging tools, discussion boards, and scheduled office hours to communicate."
      },
      {
        question: "What support is available for students and instructors?",
        answer: "Help center articles, email support, and live chat are available for both students and instructors."
      },
      {
        question: "Are there interactive features for students?",
        answer: "Quizzes, assignments, polls, and peer discussions are available to enhance engagement."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$e;
      const _component_UInput = _sfc_main$1;
      const _component_UCheckbox = _sfc_main$2;
      const _component_NuxtImg = __nuxt_component_6;
      const _component_TestimonialsSection = __nuxt_component_4;
      const _component_FAQSection = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "uno-py-12 md:uno-py-16" }, _attrs))}><div class="page-container uno-grid uno-grid-cols-1 lg:uno-grid-cols-12 uno-gap-8 lg:uno-gap-16 uno-mb-24 uno-items-start"><div class="lg:uno-col-span-5"><h1 class="uno-text-4xl md:uno-text-5xl uno-font-bold uno-text-[#011813] uno-mb-4 uno-font-[&#39;Outfit&#39;]">${ssrInterpolate(_ctx.$t("pages.order.create.title"))}</h1><p class="uno-text-[#4E5255] uno-text-lg uno-mb-8 uno-font-[&#39;Outfit&#39;]">${ssrInterpolate(_ctx.$t("pages.order.create.subtitle"))}</p><div class="uno-bg-[#EAFBF6] uno-rounded-[24px] uno-p-6 md:uno-p-8"><div class="uno-flex uno-justify-between uno-items-baseline uno-mb-6"><h3 class="uno-text-2xl uno-font-bold uno-text-[#009D77]">${ssrInterpolate(_ctx.$t("pages.order.create.summary.trial"))}</h3><span class="uno-text-2xl uno-font-bold uno-text-[#009D77]">${ssrInterpolate(_ctx.$t("pages.order.create.summary.price"))}</span></div><ul class="uno-space-y-4 uno-mb-8"><li class="uno-flex uno-items-start uno-gap-3"><div class="uno-w-6 uno-h-6 uno-rounded-full uno-bg-[#009D77] uno-flex uno-items-center uno-justify-center uno-shrink-0 uno-mt-0.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-check",
        class: "uno-text-white uno-w-4 uno-h-4"
      }, null, _parent));
      _push(`</div><span class="uno-text-[#011813] uno-font-medium">${ssrInterpolate(_ctx.$t("pages.order.create.summary.benefit1"))}</span></li><li class="uno-flex uno-items-start uno-gap-3"><div class="uno-w-6 uno-h-6 uno-rounded-full uno-bg-[#009D77] uno-flex uno-items-center uno-justify-center uno-shrink-0 uno-mt-0.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-check",
        class: "uno-text-white uno-w-4 uno-h-4"
      }, null, _parent));
      _push(`</div><span class="uno-text-[#011813] uno-font-medium">${ssrInterpolate(_ctx.$t("pages.order.create.summary.benefit2"))}</span></li><li class="uno-flex uno-items-start uno-gap-3"><div class="uno-w-6 uno-h-6 uno-rounded-full uno-bg-[#009D77] uno-flex uno-items-center uno-justify-center uno-shrink-0 uno-mt-0.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-lucide-check",
        class: "uno-text-white uno-w-4 uno-h-4"
      }, null, _parent));
      _push(`</div><span class="uno-text-[#011813] uno-font-medium">${ssrInterpolate(_ctx.$t("pages.order.create.summary.benefit3"))}</span></li></ul><p class="uno-text-xs uno-text-[#4E5255] uno-leading-relaxed">${ssrInterpolate(_ctx.$t("pages.order.create.summary.terms"))}</p></div></div><div class="lg:uno-col-span-7"><div class="uno-bg-white uno-rounded-[24px] uno-p-6 md:uno-p-8 uno-shadow-lg uno-border uno-border-[#E7E7E8]"><form class="uno-space-y-6"><div class="uno-space-y-2"><label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">${ssrInterpolate(_ctx.$t("pages.order.create.form.email"))}</label>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        placeholder: _ctx.$t("pages.order.create.form.emailPlaceholder"),
        size: "xl",
        ui: { rounded: "rounded-[12px]" },
        class: "uno-w-full"
      }, null, _parent));
      _push(`</div><div class="uno-space-y-2"><label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">${ssrInterpolate(_ctx.$t("pages.order.create.form.name"))}</label>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        placeholder: _ctx.$t("pages.order.create.form.namePlaceholder"),
        size: "xl",
        ui: { rounded: "rounded-[12px]" },
        class: "uno-w-full"
      }, null, _parent));
      _push(`</div><div class="uno-space-y-2"><label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">${ssrInterpolate(_ctx.$t("pages.order.create.form.cardNumber"))}</label>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(form).cardNumber,
        "onUpdate:modelValue": ($event) => unref(form).cardNumber = $event,
        placeholder: _ctx.$t("pages.order.create.form.cardNumberPlaceholder"),
        size: "xl",
        icon: "i-lucide-credit-card",
        ui: { rounded: "rounded-[12px]" },
        class: "uno-w-full"
      }, null, _parent));
      _push(`</div><div class="uno-grid uno-grid-cols-3 uno-gap-4"><div class="uno-space-y-2"><label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">${ssrInterpolate(_ctx.$t("pages.order.create.form.expires"))}</label>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(form).expires,
        "onUpdate:modelValue": ($event) => unref(form).expires = $event,
        placeholder: _ctx.$t("pages.order.create.form.expiresPlaceholder"),
        size: "xl",
        ui: { rounded: "rounded-[12px]" },
        class: "uno-w-full"
      }, null, _parent));
      _push(`</div><div class="uno-space-y-2"><label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">${ssrInterpolate(_ctx.$t("pages.order.create.form.cvv"))}</label>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(form).cvv,
        "onUpdate:modelValue": ($event) => unref(form).cvv = $event,
        placeholder: _ctx.$t("pages.order.create.form.cvvPlaceholder"),
        size: "xl",
        ui: { rounded: "rounded-[12px]" },
        class: "uno-w-full"
      }, null, _parent));
      _push(`</div><div class="uno-space-y-2"><label class="uno-block uno-text-sm uno-font-medium uno-text-[#011813]">${ssrInterpolate(_ctx.$t("pages.order.create.form.zip"))}</label>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(form).zip,
        "onUpdate:modelValue": ($event) => unref(form).zip = $event,
        placeholder: _ctx.$t("pages.order.create.form.zipPlaceholder"),
        size: "xl",
        ui: { rounded: "rounded-[12px]" },
        class: "uno-w-full"
      }, null, _parent));
      _push(`</div></div><div class="uno-flex uno-items-start uno-gap-3">`);
      _push(ssrRenderComponent(_component_UCheckbox, {
        modelValue: unref(form).consent,
        "onUpdate:modelValue": ($event) => unref(form).consent = $event,
        ui: { base: "uno-w-5 uno-h-5", rounded: "rounded" }
      }, null, _parent));
      _push(`<p class="uno-text-xs uno-text-[#4E5255] uno-leading-tight uno-mt-0.5">${ssrInterpolate(_ctx.$t("pages.order.create.form.consent"))}</p></div><div class="uno-space-y-3"><button class="uno-w-full uno-h-[48px] uno-bg-[#009D77] hover:uno-bg-[var(--color-green-2)] uno-text-white uno-rounded-[12px] uno-font-bold uno-transition-colors">${ssrInterpolate(_ctx.$t("pages.order.create.form.subscribeBtn"))}</button><button type="button" class="uno-w-full uno-h-[48px] uno-bg-[#191919] hover:uno-bg-black uno-text-white uno-rounded-[12px] uno-font-bold uno-transition-colors uno-flex uno-items-center uno-justify-center uno-gap-2">${ssrInterpolate(_ctx.$t("pages.order.create.form.paypalBtn"))} `);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-simple-icons-paypal",
        class: "uno-text-white"
      }, null, _parent));
      _push(`</button><button type="button" class="uno-w-full uno-h-[48px] uno-bg-[#191919] hover:uno-bg-black uno-text-white uno-rounded-[12px] uno-font-bold uno-transition-colors uno-flex uno-items-center uno-justify-center uno-gap-2">${ssrInterpolate(_ctx.$t("pages.order.create.form.gpayBtn"))} `);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "i-simple-icons-googlepay",
        class: "uno-text-white"
      }, null, _parent));
      _push(`</button></div><div class="uno-flex uno-items-center uno-justify-center uno-gap-4 uno-mt-6 uno-opacity-60">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/orders/create/1.png",
        height: "24",
        class: "uno-h-6 uno-w-auto"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/orders/create/2.png",
        height: "24",
        class: "uno-h-6 uno-w-auto"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/orders/create/3.png",
        height: "24",
        class: "uno-h-6 uno-w-auto"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/orders/create/4.png",
        height: "24",
        class: "uno-h-6 uno-w-auto"
      }, null, _parent));
      _push(`</div></form></div></div></div><div class="page-container uno-grid uno-grid-cols-2 md:uno-grid-cols-4 uno-gap-8 uno-mb-24 uno-max-w-5xl uno-mx-auto"><!--[-->`);
      ssrRenderList(unref(trustItems), (item, index) => {
        _push(`<div class="uno-flex uno-flex-col uno-items-center uno-text-center">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: item.image,
          width: "64",
          height: "64",
          class: "uno-w-16 uno-h-16 uno-mb-4"
        }, null, _parent));
        _push(`<h4 class="uno-text-[#4E5255] uno-font-bold uno-font-[&#39;Outfit&#39;]">${ssrInterpolate(item.text)}</h4></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_TestimonialsSection, {
        title: _ctx.$t("pages.order.create.testimonials.title"),
        description: _ctx.$t("pages.order.create.testimonials.subtitle"),
        rating: 5,
        reviews: unref(reviews)
      }, null, _parent));
      _push(ssrRenderComponent(_component_FAQSection, {
        title: _ctx.$t("pages.home.faq.title"),
        description: _ctx.$t("pages.home.faq.description"),
        items: faqItems
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orders/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-B49p6xv3.mjs.map
