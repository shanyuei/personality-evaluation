import { u as useI18n, a as useSeoMeta, _ as __nuxt_component_6, c as _sfc_main$8, E as navigateTo } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { U as UButtonTheme, a as UButtonThemeDark } from './UButton-CtKGpLNs.mjs';
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
  __name: "purchase-complete",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo.orders.purchaseComplete.title"),
      description: () => t("seo.orders.purchaseComplete.description")
    });
    const goToReport = () => {
      navigateTo("/test/result");
    };
    const downloadGuidebook = () => {
      console.log("Download guidebook triggered");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_6;
      const _component_UButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "uno-flex uno-flex-col uno-items-center uno-justify-center uno-px-6 uno-py-10 md:uno-py-16" }, _attrs))}><div class="uno-max-w-md uno-w-full uno-flex uno-flex-col uno-items-center uno-text-center"><div class="uno-w-16 uno-h-16 md:uno-w-20 md:uno-h-20 uno-rounded-full uno-flex uno-items-center uno-justify-center uno-mb-6 md:uno-mb-8">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/images/common/pay-card-1.png",
        alt: "pay-card-1",
        width: "96",
        height: "96"
      }, null, _parent));
      _push(`</div><h1 class="uno-text-3xl md:uno-text-5xl uno-font-bold uno-text-gray-900 uno-mb-3 md:uno-mb-4 uno-font-[&#39;Outfit&#39;]">${ssrInterpolate(_ctx.$t("pages.orders.purchaseComplete.title"))}</h1><p class="uno-text-gray-600 uno-mb-6 md:uno-mb-8 uno-font-[&#39;Outfit&#39;] uno-text-sm md:uno-text-lg">${ssrInterpolate(_ctx.$t("pages.orders.purchaseComplete.description"))}</p>`);
      _push(ssrRenderComponent(_component_UButton, {
        class: "uno-w-full uno-h-[48px] uno-font-['Outfit']",
        ui: unref(UButtonTheme),
        onClick: goToReport
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("pages.orders.purchaseComplete.accessReport"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("pages.orders.purchaseComplete.accessReport")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="uno-text-gray-500 uno-mt-3 uno-mb-6 uno-font-[&#39;Outfit&#39;] uno-text-sm md:uno-text-base">${ssrInterpolate(_ctx.$t("pages.orders.purchaseComplete.accessNote"))}</p>`);
      _push(ssrRenderComponent(_component_UButton, {
        ui: unref(UButtonThemeDark),
        class: "uno-w-full uno-h-[48px] uno-font-['Outfit']",
        onClick: downloadGuidebook
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("pages.orders.purchaseComplete.downloadGuidebook"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("pages.orders.purchaseComplete.downloadGuidebook")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orders/purchase-complete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=purchase-complete-CfOASVzO.mjs.map
