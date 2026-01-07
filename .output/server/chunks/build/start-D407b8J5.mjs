import { u as useI18n, f as useRouter, a as useLocalePath, e as useSeoMeta, _ as __nuxt_component_6, g as _sfc_main$8 } from './server.mjs';
import { I as IconsCheck } from './Check-BPcG3T8o.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { U as UButtonTheme } from './UButton-CtKGpLNs.mjs';
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
  __name: "start",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const router = useRouter();
    const localePath = useLocalePath();
    useSeoMeta({
      title: () => t("seo.test.start.title"),
      description: () => t("seo.test.start.description")
    });
    const nextStep = () => {
      console.log("nextStep", router.getRoutes());
      router.push(localePath({ name: "test-step", query: { step: 1 } }));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_6;
      const _component_IconsCheck = IconsCheck;
      const _component_UButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container uno-py-6" }, _attrs))}><main class="uno-py-8 md:uno-py-16 uno-px-0 md:uno-px-10"><div class="uno-max-w-full md:uno-max-w-[64%] uno-mx-auto uno-text-center"><div class="uno-flex uno-items-center uno-justify-center uno-mb-6">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/test/6.png",
        class: "uno-w-16 uno-h-16 uno-rounded-full",
        alt: "Test icon"
      }, null, _parent));
      _push(`</div><h1 class="uno-text-[#011813] uno-text-2xl md:uno-text-5xl uno-font-[&#39;Outfit&#39;] uno-text-center uno-font-semibold uno-leading-[1.2] uno-mb-4 md:uno-mb-6">${ssrInterpolate(_ctx.$t("pages.testStart.title"))}</h1><div class="uno-max-w-[880px] uno-mx-auto uno-space-y-4 uno-text-left"><div class="uno-flex uno-items-center uno-gap-3"><div class="uno-w-40px">`);
      _push(ssrRenderComponent(_component_IconsCheck, {
        size: 40,
        class: "uno-mt-1",
        "background-color": "none",
        "check-color": "var(--ui-primary)"
      }, null, _parent));
      _push(`</div><p class="uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;]"><span class="uno-font-semibold">${ssrInterpolate(_ctx.$t("pages.testStart.format.title"))}</span> ${ssrInterpolate(_ctx.$t("pages.testStart.format.body"))}</p></div><div class="uno-flex uno-items-center uno-gap-3"><div class="uno-w-40px">`);
      _push(ssrRenderComponent(_component_IconsCheck, {
        size: 40,
        class: "uno-mt-1",
        "background-color": "none",
        "check-color": "var(--ui-primary)"
      }, null, _parent));
      _push(`</div><p class="uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;]"><span class="uno-font-semibold">${ssrInterpolate(_ctx.$t("pages.testStart.scoring.title"))}</span> ${ssrInterpolate(_ctx.$t("pages.testStart.scoring.body"))}</p></div></div><div class="uno-flex uno-items-center uno-justify-center uno-mt-8">`);
      _push(ssrRenderComponent(_component_UButton, {
        ui: unref(UButtonTheme),
        onClick: nextStep
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("pages.testStart.cta.getStarted"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("pages.testStart.cta.getStarted")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="uno-w-full uno-max-w-[880px] uno-text-[#4E5255] uno-text-xs uno-font-[&#39;Outfit&#39;] uno-text-center uno-leading-normal uno-mx-0 uno-mt-4">${ssrInterpolate(_ctx.$t("pages.testStart.disclaimer"))}</p></div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test/start.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=start-D407b8J5.mjs.map
