import { d as _export_sfc, u as useI18n, _ as __nuxt_component_6 } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
  __name: "report",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const count = ref(103267);
    const digits = computed(() => count.value.toString().split(""));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen uno-overflow-hidden bg-white" }, _attrs))} data-v-418b721a><div class="uno-absolute uno-top-0 uno-left-0 uno-w-full uno-h-[800px] -uno-z-10" style="${ssrRenderStyle({ "background": "radial-gradient(circle at 50% 0%, #E0F7FA 0%, #F3E5F5 30%, #FFF3E0 60%, #FFFFFF 100%)", "opacity": "0.6" })}" data-v-418b721a></div><div class="page-container uno-py-12 md:uno-py-20" data-v-418b721a><div class="uno-max-w-6xl uno-mx-auto uno-text-center" data-v-418b721a><h1 class="uno-text-3xl md:uno-text-5xl uno-font-bold uno-mb-6 uno-text-slate-900 font-outfit uno-leading-tight" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.title"))}</h1><p class="uno-text-gray-500 uno-max-w-3xl uno-mx-auto uno-mb-20 uno-leading-relaxed uno-text-base md:uno-text-lg font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.subtitle"))}</p><div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-x-8 uno-gap-y-12 uno-mb-24" data-v-418b721a><div class="uno-flex uno-flex-col uno-items-center" data-v-418b721a>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/report/1.png",
        class: "uno-w-24 uno-h-24 uno-mb-6 uno-object-contain"
      }, null, _parent));
      _push(`<h3 class="uno-font-bold uno-text-xl uno-mb-3 uno-text-slate-800 font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.features.identity.title"))}</h3><p class="uno-text-sm uno-text-gray-500 uno-px-4 uno-leading-relaxed font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.features.identity.desc"))}</p></div><div class="uno-flex uno-flex-col uno-items-center" data-v-418b721a>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/report/2.png",
        class: "uno-w-24 uno-h-24 uno-mb-6 uno-object-contain"
      }, null, _parent));
      _push(`<h3 class="uno-font-bold uno-text-xl uno-mb-3 uno-text-slate-800 font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.features.strengths.title"))}</h3><p class="uno-text-sm uno-text-gray-500 uno-px-4 uno-leading-relaxed font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.features.strengths.desc"))}</p></div><div class="uno-flex uno-flex-col uno-items-center" data-v-418b721a>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/report/3.png",
        class: "uno-w-24 uno-h-24 uno-mb-6 uno-object-contain"
      }, null, _parent));
      _push(`<h3 class="uno-font-bold uno-text-xl uno-mb-3 uno-text-slate-800 font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.features.relationships.title"))}</h3><p class="uno-text-sm uno-text-gray-500 uno-px-4 uno-leading-relaxed font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.features.relationships.desc"))}</p></div></div><div class="uno-max-w-xl uno-mx-auto uno-mb-16 uno-relative" data-v-418b721a><div class="uno-flex uno-items-end uno-justify-between uno-mb-4 uno-px-2" data-v-418b721a><span class="uno-font-bold uno-text-gray-600 uno-text-lg font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.pricing.access"))}</span><span class="uno-font-bold uno-text-[#009D77] uno-text-3xl font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.pricing.price"))}</span></div><div class="uno-relative" data-v-418b721a><button class="uno-w-full uno-bg-[#009D77] hover:uno-bg-[#0AA17F] uno-text-white uno-font-bold uno-py-4 uno-rounded-[8px] uno-text-xl uno-shadow-lg hover:uno-shadow-xl uno-transition-all uno-mb-4 active:uno-scale-[0.98] font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.pricing.cta"))}</button></div><div class="uno-flex uno-items-center uno-justify-center uno-text-xs md:uno-text-sm uno-text-gray-500 uno-gap-1.5 font-outfit" data-v-418b721a><div class="i-lucide-check-circle uno-text-gray-400" data-v-418b721a></div><span class="uno-underline uno-decoration-gray-300 uno-underline-offset-2" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.pricing.trial"))}</span></div></div><div class="uno-flex uno-items-center uno-justify-center uno-gap-3 uno-text-lg uno-font-bold uno-text-gray-800 font-outfit uno-mb-32" data-v-418b721a><div class="uno-flex uno-gap-2" data-v-418b721a><!--[-->`);
      ssrRenderList(unref(digits), (digit, index) => {
        _push(`<div class="uno-w-10 uno-h-12 md:uno-w-12 md:uno-h-14 uno-bg-white uno-shadow-sm uno-border uno-border-gray-100 uno-rounded-[4px] uno-flex uno-items-center uno-justify-center uno-text-2xl md:uno-text-3xl uno-font-bold uno-text-slate-900" data-v-418b721a>${ssrInterpolate(digit)}</div>`);
      });
      _push(`<!--]--></div><span class="uno-text-base md:uno-text-lg uno-ml-3 uno-text-gray-600 uno-font-normal" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.pricing.ordered"))}</span></div><div class="uno-mb-20 uno-bg-[#F8FAFC] uno-rounded-[32px] uno-py-12 uno-px-6 md:uno-px-16" data-v-418b721a><h2 class="uno-text-3xl md:uno-text-4xl uno-font-bold uno-text-slate-900 uno-mb-4 font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.receive.title"))}</h2><p class="uno-text-gray-500 uno-max-w-2xl uno-mx-auto uno-mb-16 uno-text-sm md:uno-text-base font-outfit uno-leading-relaxed" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.receive.subtitle"))}</p><div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-2 lg:uno-grid-cols-3 uno-gap-8" data-v-418b721a><div class="uno-bg-white uno-rounded-[24px] uno-p-8 uno-shadow-sm hover:uno-shadow-md uno-transition-shadow uno-flex uno-flex-col uno-items-center uno-text-center" data-v-418b721a>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/report/4.png",
        class: "uno-w-16 uno-h-16 uno-mb-6 uno-object-contain"
      }, null, _parent));
      _push(`<h3 class="uno-font-bold uno-text-lg uno-mb-4 uno-text-slate-900 font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.receive.cards.report.title"))}</h3><p class="uno-text-gray-500 uno-text-sm uno-leading-relaxed font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.receive.cards.report.desc"))}</p></div><div class="uno-bg-white uno-rounded-[24px] uno-p-8 uno-shadow-sm hover:uno-shadow-md uno-transition-shadow uno-flex uno-flex-col uno-items-center uno-text-center" data-v-418b721a>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/report/5.png",
        class: "uno-w-16 uno-h-16 uno-mb-6 uno-object-contain"
      }, null, _parent));
      _push(`<h3 class="uno-font-bold uno-text-lg uno-mb-4 uno-text-slate-900 font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.receive.cards.courses.title"))}</h3><p class="uno-text-gray-500 uno-text-sm uno-leading-relaxed font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.receive.cards.courses.desc"))}</p></div><div class="uno-bg-white uno-rounded-[24px] uno-p-8 uno-shadow-sm hover:uno-shadow-md uno-transition-shadow uno-flex uno-flex-col uno-items-center uno-text-center" data-v-418b721a>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/report/6.png",
        class: "uno-w-16 uno-h-16 uno-mb-6 uno-object-contain"
      }, null, _parent));
      _push(`<h3 class="uno-font-bold uno-text-lg uno-mb-4 uno-text-slate-900 font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.receive.cards.assessment.title"))}</h3><p class="uno-text-gray-500 uno-text-sm uno-leading-relaxed font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.receive.cards.assessment.desc"))}</p></div><div class="uno-bg-white uno-rounded-[24px] uno-p-8 uno-shadow-sm hover:uno-shadow-md uno-transition-shadow uno-flex uno-flex-col uno-items-center uno-text-center" data-v-418b721a>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/report/7.png",
        class: "uno-w-16 uno-h-16 uno-mb-6 uno-object-contain"
      }, null, _parent));
      _push(`<h3 class="uno-font-bold uno-text-lg uno-mb-4 uno-text-slate-900 font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.receive.cards.challenges.title"))}</h3><p class="uno-text-gray-500 uno-text-sm uno-leading-relaxed font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.receive.cards.challenges.desc"))}</p></div><div class="uno-bg-white uno-rounded-[24px] uno-p-8 uno-shadow-sm hover:uno-shadow-md uno-transition-shadow uno-flex uno-flex-col uno-items-center uno-text-center" data-v-418b721a>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/report/8.png",
        class: "uno-w-16 uno-h-16 uno-mb-6 uno-object-contain"
      }, null, _parent));
      _push(`<h3 class="uno-font-bold uno-text-lg uno-mb-4 uno-text-slate-900 font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.receive.cards.library.title"))}</h3><p class="uno-text-gray-500 uno-text-sm uno-leading-relaxed font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.receive.cards.library.desc"))}</p></div><div class="uno-bg-white uno-rounded-[24px] uno-p-8 uno-shadow-sm hover:uno-shadow-md uno-transition-shadow uno-flex uno-flex-col uno-items-center uno-text-center" data-v-418b721a>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/report/9.png",
        class: "uno-w-16 uno-h-16 uno-mb-6 uno-object-contain"
      }, null, _parent));
      _push(`<h3 class="uno-font-bold uno-text-lg uno-mb-4 uno-text-slate-900 font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.receive.cards.certificates.title"))}</h3><p class="uno-text-gray-500 uno-text-sm uno-leading-relaxed font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.receive.cards.certificates.desc"))}</p></div></div></div><div class="uno-max-w-3xl uno-mx-auto uno-mb-24 uno-bg-[#F0FDF9] uno-rounded-[40px] uno-p-8 md:uno-p-12 uno-shadow-sm" data-v-418b721a><div class="uno-flex uno-items-center uno-justify-between uno-mb-8 uno-px-2" data-v-418b721a><span class="uno-font-bold uno-text-gray-600 uno-text-xl font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.pricing.access"))}</span><span class="uno-font-bold uno-text-[#009D77] uno-text-4xl font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.pricing.price"))}</span></div><div class="uno-relative" data-v-418b721a><button class="uno-w-full uno-bg-[#009D77] hover:uno-bg-[#0AA17F] uno-text-white uno-font-bold uno-py-5 uno-rounded-[12px] uno-text-2xl uno-shadow-lg hover:uno-shadow-xl uno-transition-all uno-mb-6 active:uno-scale-[0.98] font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.pricing.cta"))}</button></div><div class="uno-flex uno-items-center uno-justify-center uno-text-sm md:uno-text-base uno-text-gray-500 uno-gap-2 uno-mb-10 font-outfit" data-v-418b721a><div class="i-lucide-check-circle uno-text-gray-400" data-v-418b721a></div><span class="uno-underline uno-decoration-gray-300 uno-underline-offset-2" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.pricing.trial"))}</span></div><div class="uno-flex uno-items-center uno-justify-center uno-gap-3 uno-text-lg uno-font-bold uno-text-gray-800 font-outfit" data-v-418b721a><div class="uno-flex uno-gap-2" data-v-418b721a><!--[-->`);
      ssrRenderList(unref(digits), (digit, index) => {
        _push(`<div class="uno-w-10 uno-h-12 md:uno-w-12 md:uno-h-14 uno-bg-white uno-shadow-sm uno-border uno-border-gray-100 uno-rounded-[4px] uno-flex uno-items-center uno-justify-center uno-text-2xl md:uno-text-3xl uno-font-bold uno-text-slate-900" data-v-418b721a>${ssrInterpolate(digit)}</div>`);
      });
      _push(`<!--]--></div><span class="uno-text-base md:uno-text-lg uno-ml-3 uno-text-gray-600 uno-font-normal" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.pricing.ordered"))}</span></div></div><div class="uno-mb-24 uno-text-center" data-v-418b721a><h2 class="uno-text-2xl md:uno-text-4xl uno-font-bold uno-mb-4 uno-text-slate-900 font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.trusted.title"))}</h2><p class="uno-text-gray-500 uno-max-w-2xl uno-mx-auto uno-mb-12 uno-text-sm md:uno-text-base font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.trusted.subtitle"))}</p><div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-6" data-v-418b721a><!--[-->`);
      ssrRenderList(3, (i) => {
        _push(`<div class="uno-bg-white uno-p-8 uno-rounded-[24px] uno-shadow-sm uno-text-left" data-v-418b721a><div class="uno-flex uno-gap-1 uno-mb-4" data-v-418b721a><!--[-->`);
        ssrRenderList(5, (s) => {
          _push(`<div class="i-lucide-star uno-text-yellow-400 uno-fill-yellow-400" data-v-418b721a></div>`);
        });
        _push(`<!--]--></div><p class="uno-text-gray-600 uno-leading-relaxed font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.trusted.card_text"))}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="uno-mb-24 uno-text-center" data-v-418b721a><h2 class="uno-text-2xl md:uno-text-3xl uno-font-bold uno-mb-4 uno-text-slate-900 font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.worldwide.title"))}</h2><p class="uno-text-gray-500 uno-mb-8 font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.worldwide.subtitle"))}</p><div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-4" data-v-418b721a><div class="uno-bg-white uno-p-4 uno-rounded-[12px] uno-shadow-sm uno-flex uno-items-center uno-gap-3 uno-text-left" data-v-418b721a>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/report/10.png",
        class: "uno-w-8 uno-h-8 uno-object-contain"
      }, null, _parent));
      _push(`<div class="uno-text-sm" data-v-418b721a><span class="uno-text-gray-500" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.worldwide.orders.amelia"))}</span><span class="uno-font-bold uno-block uno-text-slate-900" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.worldwide.types.peacemaker"))}</span></div></div><div class="uno-bg-white uno-p-4 uno-rounded-[12px] uno-shadow-sm uno-flex uno-items-center uno-gap-3 uno-text-left" data-v-418b721a>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/report/11.png",
        class: "uno-w-8 uno-h-8 uno-object-contain"
      }, null, _parent));
      _push(`<div class="uno-text-sm" data-v-418b721a><span class="uno-text-gray-500" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.worldwide.orders.diego"))}</span><span class="uno-font-bold uno-block uno-text-slate-900" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.worldwide.types.loyalist"))}</span></div></div><div class="uno-bg-white uno-p-4 uno-rounded-[12px] uno-shadow-sm uno-flex uno-items-center uno-gap-3 uno-text-left" data-v-418b721a>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/report/12.png",
        class: "uno-w-8 uno-h-8 uno-object-contain"
      }, null, _parent));
      _push(`<div class="uno-text-sm" data-v-418b721a><span class="uno-text-gray-500" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.worldwide.orders.mia"))}</span><span class="uno-font-bold uno-block uno-text-slate-900" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.worldwide.types.loyalist"))}</span></div></div></div></div><div class="uno-bg-[#E0F2F1] uno-rounded-[40px] uno-p-8 md:uno-p-12 uno-grid uno-grid-cols-1 lg:uno-grid-cols-2 uno-gap-12 uno-items-center uno-mb-24" data-v-418b721a><div class="uno-relative" data-v-418b721a>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/report/14.png",
        class: "uno-w-full uno-h-auto uno-object-cover uno-rounded-[24px]"
      }, null, _parent));
      _push(`</div><div data-v-418b721a><h2 class="uno-text-2xl md:uno-text-3xl lg:uno-text-4xl uno-font-bold uno-mb-8 uno-text-slate-900 font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.cta_full.title"))}</h2><ul class="uno-space-y-4 uno-mb-8" data-v-418b721a><!--[-->`);
      ssrRenderList(4, (i) => {
        _push(`<li class="uno-flex uno-items-start uno-gap-3 uno-text-left" data-v-418b721a>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/report/13.png",
          class: "uno-w-5 uno-h-5 uno-mt-1 uno-shrink-0 uno-object-contain"
        }, null, _parent));
        _push(`<span class="uno-text-gray-700 font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t(`pages.test.report.cta_full.list.${i}`))}</span></li>`);
      });
      _push(`<!--]--></ul><div class="uno-flex uno-items-center uno-justify-between uno-mb-6" data-v-418b721a><span class="uno-text-gray-500 font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.cta_full.access"))}</span><span class="uno-text-[#009D77] uno-text-3xl uno-font-bold font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.cta_full.price"))}</span></div><button class="uno-w-full uno-bg-[#009D77] hover:uno-bg-[#0AA17F] uno-text-white uno-font-bold uno-py-4 uno-rounded-[12px] uno-text-xl uno-shadow-lg hover:uno-shadow-xl uno-transition-all uno-mb-3 active:uno-scale-[0.98] font-outfit" data-v-418b721a>${ssrInterpolate(_ctx.$t("pages.test.report.cta_full.btn"))}</button><p class="uno-text-xs uno-text-gray-400 uno-text-center font-outfit" data-v-418b721a><span class="i-lucide-check-circle uno-inline-block uno-w-3 uno-h-3 uno-mr-1" data-v-418b721a></span> ${ssrInterpolate(_ctx.$t("pages.test.report.cta_full.note"))}</p></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test/report.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const report = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-418b721a"]]);

export { report as default };
//# sourceMappingURL=report-DMmTQeHU.mjs.map
