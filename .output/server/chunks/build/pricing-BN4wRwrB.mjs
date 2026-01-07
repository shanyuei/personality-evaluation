import { d as _export_sfc, u as useI18n, a as useLocalePath, b as useRoute, c as useHead, _ as __nuxt_component_6 } from './server.mjs';
import { defineComponent, withAsyncContext, computed, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_3 } from './FAQSection-QVBmPaiF.mjs';
import { g as getPlanList } from './tests-Wzq-XyKT.mjs';
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
import './useApi-BWDHtmzl.mjs';
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "pricing",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const planConfig = {
      1: { key: "weekly", billingFallback: true },
      2: { key: "monthly" },
      3: { key: "yearly", badge: "pages.pricing.plans.yearly.badge" }
    };
    const { data: plansData } = ([__temp, __restore] = withAsyncContext(() => getPlanList()), __temp = await __temp, __restore(), __temp);
    const plans = computed(() => {
      console.log("plansData:", plansData.value);
      const list = plansData.value?.data || [];
      return list.map((item) => {
        const config = planConfig[item.id] || { key: "monthly" };
        return {
          ...item,
          ...config
        };
      });
    });
    const selectedPlan = ref("yearly");
    const { t } = useI18n();
    useLocalePath();
    useRoute();
    const features = computed(() => [
      t("pages.pricing.features.publishing"),
      t("pages.pricing.features.webflow"),
      t("pages.pricing.features.pages"),
      t("pages.pricing.features.cms"),
      t("pages.pricing.features.ai")
    ]);
    const whyItems = computed(() => [
      {
        title: t("pages.home.receive.card1.title"),
        desc: t("pages.home.receive.card1.desc"),
        image: "/images/pricing/2.png"
      },
      {
        title: t("pages.home.receive.card3.title"),
        desc: t("pages.home.receive.card3.desc"),
        image: "/images/pricing/3.png"
      },
      {
        title: t("pages.home.receive.card5.title"),
        desc: t("pages.home.receive.card5.desc"),
        image: "/images/pricing/4.png"
      },
      {
        title: t("pages.home.receive.card2.title"),
        desc: t("pages.home.receive.card2.desc"),
        image: "/images/pricing/5.png"
      },
      {
        title: t("pages.home.receive.card4.title"),
        desc: t("pages.home.receive.card4.desc"),
        image: "/images/pricing/6.png"
      },
      {
        title: t("pages.home.receive.card6.title") || "Transparency and Value",
        desc: t("pages.home.receive.card6.desc"),
        image: "/images/pricing/7.png"
      }
    ]);
    const faqItems = computed(() => [
      {
        question: t("pages.pricing.faq.items.0.q"),
        answer: t("pages.pricing.faq.items.0.a")
      },
      {
        question: t("pages.pricing.faq.items.1.q"),
        answer: t("pages.pricing.faq.items.1.a")
      },
      {
        question: t("pages.pricing.faq.items.2.q"),
        answer: t("pages.pricing.faq.items.2.a")
      },
      {
        question: t("pages.pricing.faq.items.3.q"),
        answer: t("pages.pricing.faq.items.3.a")
      },
      {
        question: t("pages.pricing.faq.items.4.q"),
        answer: t("pages.pricing.faq.items.4.a")
      }
    ]);
    useHead({
      title: t("pages.pricing.title"),
      meta: [
        { name: "description", content: t("pages.pricing.subtitle") }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "uno-font-['Outfit']" }, _attrs))} data-v-49b39234><section class="page-container uno-pt-12 sm:uno-pt-16 md:uno-pt-20 uno-pb-12 sm:uno-pb-16 md:uno-pb-24" data-v-49b39234><div class="uno-text-center uno-mb-12 sm:uno-mb-16" data-v-49b39234><h1 class="uno-text-[#011813] uno-text-3xl sm:uno-text-4xl md:uno-text-5xl uno-font-bold uno-mb-4 sm:uno-mb-6" data-v-49b39234>${ssrInterpolate(_ctx.$t("pages.pricing.title"))}</h1><p class="uno-text-[#4E5255] uno-text-sm sm:uno-text-base md:uno-text-lg uno-max-w-3xl uno-mx-auto uno-px-4" data-v-49b39234>${ssrInterpolate(_ctx.$t("pages.pricing.subtitle"))}</p></div><div class="uno-grid uno-grid-cols-1 lg:uno-grid-cols-3 uno-gap-6 md:uno-gap-8 uno-items-start" data-v-49b39234><!--[-->`);
      ssrRenderList(plans.value, (plan) => {
        _push(`<div class="${ssrRenderClass([[
          selectedPlan.value === plan.key ? "uno-bg-[#E8FAF5] uno-border-[#009D77] uno-shadow-lg" : "uno-bg-white uno-border-[#E7E7E8]"
        ], "uno-rounded-[24px] uno-p-6 sm:uno-p-8 uno-border uno-shadow-sm hover:uno-shadow-md uno-transition-all uno-cursor-pointer uno-relative uno-overflow-hidden"])}" data-v-49b39234>`);
        if (plan.badge) {
          _push(`<div class="uno-absolute uno-top-6 uno-right-6 uno-bg-[#009D77] uno-text-white uno-text-xs uno-font-bold uno-px-3 uno-py-1 uno-rounded-full" data-v-49b39234>${ssrInterpolate(_ctx.$t(plan.badge))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h3 class="uno-text-xl uno-font-bold uno-text-[#011813] uno-mb-2" data-v-49b39234>${ssrInterpolate(plan.name)}</h3><div class="uno-flex uno-items-baseline uno-gap-1 uno-mb-1" data-v-49b39234><span class="uno-text-4xl uno-font-bold uno-text-[#011813]" data-v-49b39234>${ssrInterpolate(plan.unit)}${ssrInterpolate(plan.price)}</span></div><button class="${ssrRenderClass([[
          selectedPlan.value === plan.key ? "uno-bg-[#009D77] hover:uno-bg-[var(--color-green-2)] uno-text-white" : "uno-bg-[#009D77] hover:uno-bg-[var(--color-green-2)] uno-text-white"
        ], "uno-w-full uno-mt-6 uno-h-[48px] uno-rounded-[12px] uno-font-bold uno-mb-8 uno-transition-colors"])}" data-v-49b39234>${ssrInterpolate(_ctx.$t(`pages.pricing.plans.${plan.key}.button`))}</button><div class="uno-space-y-4" data-v-49b39234><div class="uno-text-xs uno-font-normal uno-text-[#8D8E8F] uno-tracking-wider uno-uppercase" data-v-49b39234>PUBLISHING</div><ul class="uno-space-y-3" data-v-49b39234><!--[-->`);
        ssrRenderList(features.value, (feat, i) => {
          _push(`<li class="uno-flex uno-items-center uno-justify-between uno-gap-3" data-v-49b39234><span class="${ssrRenderClass([{ "uno-text-[#011813]": selectedPlan.value === plan.key }, "uno-text-[#4E5255] uno-text-sm"])}" data-v-49b39234>${ssrInterpolate(feat)}</span>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: "/images/pricing/1.png",
            alt: "Feature Included",
            class: "uno-w-5 uno-h-5 uno-object-contain",
            loading: "lazy",
            format: "webp"
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div></section><section class="page-container uno-py-12 sm:uno-py-16" data-v-49b39234><div class="uno-text-center uno-mb-12" data-v-49b39234><h2 class="uno-text-[#011813] uno-text-2xl sm:uno-text-3xl md:uno-text-4xl uno-font-bold uno-mb-4" data-v-49b39234>${ssrInterpolate(_ctx.$t("pages.pricing.why.title"))}</h2><p class="uno-text-[#4E5255] uno-text-sm sm:uno-text-base uno-max-w-2xl uno-mx-auto" data-v-49b39234>${ssrInterpolate(_ctx.$t("pages.pricing.why.subtitle"))}</p></div><div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-2 lg:uno-grid-cols-3 uno-gap-6" data-v-49b39234><!--[-->`);
      ssrRenderList(whyItems.value, (item, idx) => {
        _push(`<div class="uno-bg-white uno-rounded-[24px] uno-p-8 uno-text-center uno-border uno-border-[#E7E7E8] uno-shadow-sm hover:uno-shadow-md uno-transition-shadow" data-v-49b39234><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} class="uno-w-16 uno-h-16 uno-mx-auto uno-mb-6 uno-object-contain" data-v-49b39234><h3 class="uno-text-lg uno-font-bold uno-text-[#011813] uno-mb-3" data-v-49b39234>${ssrInterpolate(item.title)}</h3><p class="uno-text-[#4E5255] uno-text-sm" data-v-49b39234>${ssrInterpolate(item.desc)}</p></div>`);
      });
      _push(`<!--]--></div></section>`);
      _push(ssrRenderComponent(__nuxt_component_3, {
        title: _ctx.$t("pages.pricing.faq.title"),
        description: _ctx.$t("pages.pricing.faq.subtitle"),
        items: faqItems.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pricing = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-49b39234"]]);

export { pricing as default };
//# sourceMappingURL=pricing-BN4wRwrB.mjs.map
