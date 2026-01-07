import { a as useSeoMeta, u as useI18n, f as useRoute, b as __nuxt_component_1$1, c as _sfc_main$8 } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { I as IconsCheck } from './Check-BPcG3T8o.mjs';
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
  __name: "result",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: () => t("seo.test.result.title"),
      description: () => t("seo.test.result.description")
    });
    const route = useRoute();
    const scoreValue = ref(Number(route.query.score ?? 20));
    const scoreTotal = ref(Number(route.query.total ?? 40));
    const { t } = useI18n();
    const areas = [
      { key: "format", title: t("pages.testEnd.areas.format.title"), body: t("pages.testEnd.areas.format.body") },
      { key: "financial", title: t("pages.testEnd.areas.financial.title"), body: t("pages.testEnd.areas.financial.body") },
      { key: "ratio", title: t("pages.testEnd.areas.ratio.title"), body: t("pages.testEnd.areas.ratio.body") },
      { key: "investment", title: t("pages.testEnd.areas.investment.title"), body: t("pages.testEnd.areas.investment.body") }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_UButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container uno-py-6" }, _attrs))}><main class="uno-py-8 md:uno-py-16 uno-px-0 md:uno-px-10"><div class="uno-max-w-full md:uno-max-w-[880px] uno-mx-auto"><section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]"><div class="uno-p-6 md:uno-p-10"><div class="uno-flex uno-items-center uno-justify-center uno-mb-6"><div class="uno-w-20 uno-h-20 uno-rounded-full uno-bg-[var(--ui-input)] uno-flex uno-items-center uno-justify-center uno-font-[&#39;Outfit&#39;] uno-text-[var(--ui-foreground)] uno-text-sm md:uno-text-base text-center">${ssrInterpolate(_ctx.$t("pages.testEnd.score", { value: scoreValue.value, total: scoreTotal.value }))}</div></div><h1 class="uno-self-stretch uno-text-[#011813] uno-text-2xl md:uno-text-[32px] uno-font-[&#39;Outfit&#39;] uno-text-center uno-font-semibold uno-leading-[1.2] style-1">${ssrInterpolate(_ctx.$t("pages.testEnd.title"))}</h1><p class="uno-w-full uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal uno-mx-auto uno-mt-4">${ssrInterpolate(_ctx.$t("pages.testEnd.description"))}</p><div class="uno-mt-6 uno-w-full uno-mx-auto uno-p-2 md:uno-p-0"><p class="uno-text-[#011813] uno-text-base md:uno-text-lg uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.testEnd.areasTitle"))}</p><div class="uno-space-y-4 uno-mt-3 uno-text-[#4E5255] uno-font-[&#39;Outfit&#39;]"><!--[-->`);
      ssrRenderList(areas, (item) => {
        _push(`<div class="uno-flex uno-items-center uno-gap-3"><div class="uno-hidden md:uno-block">`);
        _push(ssrRenderComponent(IconsCheck, {
          size: 30,
          "background-color": "none",
          "check-color": "var(--ui-primary)",
          class: "uno-mt-1"
        }, null, _parent));
        _push(`</div><div class="uno-block md:uno-hidden">`);
        _push(ssrRenderComponent(IconsCheck, {
          size: 24,
          "background-color": "none",
          "check-color": "var(--ui-primary)",
          class: "uno-mt-1"
        }, null, _parent));
        _push(`</div><p class="uno-text-sm"><span class="uno-font-semibold">${ssrInterpolate(item.title)}</span> ${ssrInterpolate(item.body)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="uno-flex uno-flex-col md:uno-flex-row uno-items-center uno-justify-center uno-gap-3 uno-mt-6 md:uno-mt-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/courses",
        class: "uno-inline-block uno-w-full md:uno-w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, { ui: unref(UButtonTheme) }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("pages.testEnd.ctaPrimary"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("pages.testEnd.ctaPrimary")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, { ui: unref(UButtonTheme) }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("pages.testEnd.ctaPrimary")), 1)
                ]),
                _: 1
              }, 8, ["ui"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tests",
        class: "uno-inline-block uno-w-full md:uno-w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, { ui: unref(UButtonThemeDark) }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("pages.testEnd.ctaSecondary"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("pages.testEnd.ctaSecondary")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, { ui: unref(UButtonThemeDark) }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("pages.testEnd.ctaSecondary")), 1)
                ]),
                _: 1
              }, 8, ["ui"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="uno-w-full uno-text-[#4E5255] uno-text-xs uno-font-[&#39;Outfit&#39;] uno-text-center uno-leading-normal uno-mt-4 uno-mx-auto">${ssrInterpolate(_ctx.$t("pages.testEnd.disclaimer"))}</p></div></section></div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test/result.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=result-Db_zshhs.mjs.map
