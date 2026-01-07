import { _ as __nuxt_component_1 } from './AppLink-DT1Xb_nb.mjs';
import { u as useI18n, e as useSeoMeta, g as _sfc_main$8 } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createBlock, openBlock, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "lesson",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const current = ref(3);
    const total = ref(10);
    const progress = computed(() => Math.round(current.value / total.value * 100));
    useSeoMeta({
      title: () => t("seo.userCourse.lesson.title"),
      description: () => t("seo.userCourse.lesson.description")
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
      _push(`<div class="progress-percent">${ssrInterpolate(progress.value)}%</div><div class="question-count">${ssrInterpolate(_ctx.$t("pages.userCourseLesson.lessonCount", { current: current.value, total: total.value }))}</div></div><div class="course-progress"><div class="progress-bar" style="${ssrRenderStyle({ width: progress.value + "%" })}"></div></div></div><div class="uno-mt-4 uno-w-full md:uno-w-[1000px] uno-mx-auto uno-bg-white uno-rounded-[20px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]"><div class="uno-p-6 md:uno-p-8"><h1 class="uno-text-[#011813] uno-text-2xl md:uno-text-[32px] uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2] uno-mb-4">${ssrInterpolate(_ctx.$t("pages.userCourseLesson.title"))}</h1><section class="uno-space-y-2 uno-mb-6"><p class="uno-text-[#323233] uno-text-lg uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.userCourseLesson.sections.activeListening.title"))}:</p><p class="uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-font-bold uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.userCourseLesson.sections.activeListening.descriptionTitle"))}:</p><p class="uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.userCourseLesson.sections.activeListening.descriptionBody"))}</p><p class="uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-font-bold uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.userCourseLesson.sections.activeListening.applicationTitle"))}:</p><p class="uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.userCourseLesson.sections.activeListening.applicationBody"))}</p></section><section class="uno-space-y-2 uno-mb-6"><p class="uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-font-bold uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.userCourseLesson.sections.effectiveSpeaking.title"))}:</p></section><section><p class="uno-text-[#323233] uno-text-2xl md:uno-text-[32px] uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-normal uno-mb-3">${ssrInterpolate(_ctx.$t("pages.userCourseLesson.sections.takeaways.title"))}</p><div class="uno-space-y-3"><div class="uno-flex uno-items-start uno-gap-3"><span class="uno-inline-flex uno-items-center uno-justify-center uno-w-6 uno-h-6 uno-aspect-square uno-rounded-full uno-bg-white uno-border-2 uno-border-[var(--ui-primary)]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><span class="uno-w-full uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.userCourseLesson.sections.takeaways.i1"))}</span></div><div class="uno-flex uno-items-start uno-gap-3"><span class="uno-inline-flex uno-items-center uno-justify-center uno-w-6 uno-h-6 uno-aspect-square uno-rounded-full uno-bg-white uno-border-2 uno-border-[var(--ui-primary)]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><span class="uno-w-full uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.userCourseLesson.sections.takeaways.i2"))}</span></div><div class="uno-flex uno-items-start uno-gap-3"><span class="uno-inline-flex uno-items-center uno-justify-center uno-w-6 uno-h-6 uno-aspect-square uno-rounded-full uno-bg-white uno-border-2 uno-border-[var(--ui-primary)]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><span class="uno-w-full uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.userCourseLesson.sections.takeaways.i3"))}</span></div></div></section><div class="uno-mt-8 uno-grid uno-grid-cols-1 md:uno-grid-cols-2 uno-gap-4">`);
      _push(ssrRenderComponent(_component_AppLink, {
        to: "/user-course/lesson-complete",
        class: "uno-block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              ui: unref(UButtonTheme),
              class: "uno-w-full uno-font-['Outfit']"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("pages.userCourseLesson.ctaPrimary"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("pages.userCourseLesson.ctaPrimary")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                ui: unref(UButtonTheme),
                class: "uno-w-full uno-font-['Outfit']"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("pages.userCourseLesson.ctaPrimary")), 1)
                ]),
                _: 1
              }, 8, ["ui"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        ui: unref(UButtonThemeDark),
        class: "uno-font-['Outfit']"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("pages.userCourseLesson.ctaSecondary"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("pages.userCourseLesson.ctaSecondary")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user-course/lesson.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=lesson-f5E9i34j.mjs.map
