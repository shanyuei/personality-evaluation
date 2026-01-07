import { u as useI18n, a as useSeoMeta, b as __nuxt_component_1$1, c as _sfc_main$8 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const score = 0;
const total = 10;
const courseName = "People Leadership vs. Management";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "test-complete",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo.userCourse.testComplete.title"),
      description: () => t("seo.userCourse.testComplete.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_UButton = _sfc_main$8;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "page-container uno-py-6" }, _attrs))}><div class="uno-w-full uno-mx-auto uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]"><div class="uno-p-8 md:uno-p-10 uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-6"><div class="uno-w-20 uno-h-20 uno-aspect-square uno-rounded-full uno-border-2 uno-border-[var(--color-pink-2)] uno-flex uno-items-center uno-justify-center"><div class="uno-flex uno-items-center uno-flex-col"><span class="uno-text-[var(--color-pink-1)] uno-text-lg md:uno-text-xl uno-font-[&#39;Outfit&#39;] uno-font-semibold">${ssrInterpolate(_ctx.$t("pages.userCourseTestComplete.scoreLabel", { score, total }))}</span></div></div><h1 class="uno-text-2xl md:uno-text-[32px] uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2] uno-text-[#011813]">${ssrInterpolate(courseName)}</h1><p class="uno-w-full uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.userCourseTestComplete.description"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { class: "uno-w-full md:uno-w-[520px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              ui: unref(UButtonTheme),
              class: "uno-font-['Outfit']"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("pages.userCourseTestComplete.cta"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("pages.userCourseTestComplete.cta")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                ui: unref(UButtonTheme),
                class: "uno-font-['Outfit']"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("pages.userCourseTestComplete.cta")), 1)
                ]),
                _: 1
              }, 8, ["ui"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user-course/test-complete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=test-complete-DyxkdyNK.mjs.map
