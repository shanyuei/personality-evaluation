import { _ as __nuxt_component_1 } from './AppLink-DT1Xb_nb.mjs';
import { u as useI18n, e as useSeoMeta, g as _sfc_main$8 } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createBlock, openBlock, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "lesson-guide",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const current = ref(3);
    const total = ref(10);
    const progress = ref(0);
    useSeoMeta({
      title: () => t("seo.userCourse.lessonGuide.title"),
      description: () => t("seo.userCourse.lessonGuide.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppLink = __nuxt_component_1;
      const _component_UButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container uno-py-6" }, _attrs))}><div class="course-header"><div class="course-nav">`);
      _push(ssrRenderComponent(_component_AppLink, {
        to: "/user-course/chapters",
        class: "back-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"${_scopeId}><path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: "20",
                height: "20"
              }, [
                createVNode("path", {
                  d: "M15 19l-7-7 7-7",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  fill: "none",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="progress-percent">${ssrInterpolate(progress.value)}%</div><div class="question-count">${ssrInterpolate(_ctx.$t("pages.userCourseLearn.lessonCount", { current: current.value, total: total.value }))}</div></div><div class="course-progress"><div class="progress-bar" style="${ssrRenderStyle({ width: progress.value + "%" })}"></div></div></div><div class="uno-mt-4 uno-bg-white uno-rounded-[20px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]"><div class="uno-p-6 md:uno-p-8"><h1 class="uno-text-2xl md:uno-text-[32px] uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2] uno-text-[#011813] uno-mb-8">${ssrInterpolate(_ctx.$t("pages.userCourseLearn.title"))}</h1><div class="uno-space-y-6 uno-tracking-[0.8px]"><div class="uno-space-y-3"><p class="uno-text-base md:uno-text-lg uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.userCourseLearn.objective.title"))}</p><p class="uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.userCourseLearn.objective.body"))}</p></div><div class="uno-space-y-3"><p class="uno-text-base md:uno-text-lg uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.userCourseLearn.intro.title"))}</p><p class="uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.userCourseLearn.intro.body"))}</p></div></div><div class="uno-mt-8">`);
      _push(ssrRenderComponent(_component_AppLink, {
        to: "/user-course/lesson",
        class: "uno-block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              ui: unref(UButtonTheme),
              class: "uno-font-['Outfit']"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("pages.userCourseLearn.cta"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("pages.userCourseLearn.cta")), 1)
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
                  createTextVNode(toDisplayString(_ctx.$t("pages.userCourseLearn.cta")), 1)
                ]),
                _: 1
              }, 8, ["ui"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user-course/lesson-guide.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=lesson-guide-Dz_60kP-.mjs.map
