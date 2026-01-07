import { u as useI18n, e as useSeoMeta, _ as __nuxt_component_6, g as _sfc_main$8 } from './server.mjs';
import { _ as __nuxt_component_1 } from './AppLink-DT1Xb_nb.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
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

const courseName = "People Leadership vs. Management";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "lesson-complete",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const current = ref(3);
    useSeoMeta({
      title: () => t("seo.userCourse.lessonComplete.title"),
      description: () => t("seo.userCourse.lessonComplete.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_6;
      const _component_AppLink = __nuxt_component_1;
      const _component_UButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container my-10" }, _attrs))}><div class="uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-8"><div class="uno-w-16 uno-h-16 md:uno-w-20 md:uno-h-20 uno-rounded-full uno-bg-[var(--color-green-3)] uno-flex uno-items-center uno-justify-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/user-course/1.png",
        class: "uno-w-full uno-h-full uno-object-cover",
        alt: "Lesson complete icon"
      }, null, _parent));
      _push(`</div><h1 class="uno-text-3xl md:uno-text-5xl uno-text-center uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2] uno-text-[var(--ui-foreground)]">${ssrInterpolate(_ctx.$t("pages.userCourseLessonComplete.title"))}</h1><p class="uno-text-sm md:uno-text-base uno-text-[var(--ui-muted-foreground)] uno-font-[&#39;Outfit&#39;] uno-text-center uno-max-w-[520px] uno-mx-auto">${ssrInterpolate(_ctx.$t("pages.userCourseLessonComplete.desc", { current: current.value, courseName }))}</p>`);
      _push(ssrRenderComponent(_component_AppLink, {
        to: "/user-course/chapters",
        class: "uno-w-full md:uno-w-[520px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              ui: unref(UButtonTheme),
              class: "uno-font-['Outfit']"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("pages.userCourseLessonComplete.cta"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("pages.userCourseLessonComplete.cta")), 1)
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
                  createTextVNode(toDisplayString(_ctx.$t("pages.userCourseLessonComplete.cta")), 1)
                ]),
                _: 1
              }, 8, ["ui"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AppLink, {
        to: "/",
        class: "uno-text-[var(--ui-muted-foreground)] uno-font-['Outfit'] uno-text-center hover:uno-text-[var(--ui-foreground)]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("pages.userCourseLessonComplete.toDashboard"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("pages.userCourseLessonComplete.toDashboard")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user-course/lesson-complete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=lesson-complete-CO96Xe5q.mjs.map
