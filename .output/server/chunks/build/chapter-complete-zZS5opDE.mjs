import { u as useI18n, a as useSeoMeta, _ as __nuxt_component_6, b as __nuxt_component_1$1, c as _sfc_main$8 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
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
  __name: "chapter-complete",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo.userCourse.chapterComplete.title"),
      description: () => t("seo.userCourse.chapterComplete.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_6;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_UButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container uno-py-6 md:uno-py-8 uno-px-6 md:uno-px-10" }, _attrs))}><div class="uno-w-full md:uno-w-[520px] uno-mx-auto"><div class="uno-flex uno-flex-col uno-items-center uno-text-center uno-gap-6 md:uno-gap-8"><div class="uno-w-14 md:uno-w-20 uno-h-14 md:uno-h-20 uno-rounded-full uno-bg-[var(--color-green-3)] uno-flex uno-items-center uno-justify-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/user-course/1.png",
        class: "uno-w-full uno-h-full uno-object-cover",
        alt: "Chapter complete icon"
      }, null, _parent));
      _push(`</div><h1 class="uno-text-[var(--ui-foreground)] uno-text-base md:uno-text-xl lg:uno-text-3xl uno-font-[&#39;Outfit&#39;] uno-text-center uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.userCourseChapterComplete.title"))}</h1><p class="uno-text-[12px] md:uno-text-sm uno-text-[var(--ui-muted-foreground)] uno-font-[&#39;Outfit&#39;] uno-text-center uno-w-full uno-mx-auto uno-leading-relaxed">${ssrInterpolate(_ctx.$t("pages.userCourseChapterComplete.desc1", { courseName }))}</p><p class="uno-text-[12px] md:uno-text-sm uno-text-[var(--ui-muted-foreground)] uno-font-[&#39;Outfit&#39;] uno-text-center uno-w-full uno-mx-auto uno-leading-relaxed">${ssrInterpolate(_ctx.$t("pages.userCourseChapterComplete.desc2"))}</p><div class="uno-space-y-4 uno-mt-2 uno-w-full uno-mx-auto uno-px-2"><div class="uno-flex uno-items-start uno-gap-3"><span class="uno-inline-flex uno-items-center uno-justify-center uno-w-5 uno-h-5 md:uno-w-6 md:uno-h-6 uno-aspect-square uno-rounded-full uno-bg-white uno-border-2 uno-border-[var(--ui-primary)]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" class="md:uno-w-16 md:uno-h-16"><path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><p class="uno-text-[var(--ui-muted-foreground)] uno-text-[12px] md:uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-relaxed uno-text-left"><span class="uno-text-[var(--ui-muted-foreground)] uno-text-[12px] md:uno-text-sm uno-font-[&#39;Outfit&#39;] uno-font-bold uno-leading-relaxed">${ssrInterpolate(_ctx.$t("pages.userCourseChapterComplete.format.title"))}</span>: ${ssrInterpolate(_ctx.$t("pages.userCourseChapterComplete.format.body"))}</p></div><div class="uno-flex uno-items-start uno-gap-3"><span class="uno-inline-flex uno-items-center uno-justify-center uno-w-5 uno-h-5 md:uno-w-6 md:uno-h-6 uno-aspect-square uno-rounded-full uno-bg-white uno-border-2 uno-border-[var(--ui-primary)]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" class="md:uno-w-16 md:uno-h-16"><path d="M20 6L9 17l-5-5" stroke="var(--ui-primary)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><p class="uno-text-[var(--ui-muted-foreground)] uno-text-[12px] md:uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-relaxed uno-text-left"><span class="uno-text-[var(--ui-muted-foreground)] uno-text-[12px] md:uno-text-sm uno-font-[&#39;Outfit&#39;] uno-font-bold uno-leading-relaxed">${ssrInterpolate(_ctx.$t("pages.userCourseChapterComplete.scoring.title"))}</span>: ${ssrInterpolate(_ctx.$t("pages.userCourseChapterComplete.scoring.body"))}</p></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/user-course/test",
        class: "uno-w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              ui: unref(UButtonTheme),
              class: "uno-w-full uno-font-['Outfit']"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("pages.userCourseChapterComplete.cta"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("pages.userCourseChapterComplete.cta")), 1)
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
                  createTextVNode(toDisplayString(_ctx.$t("pages.userCourseChapterComplete.cta")), 1)
                ]),
                _: 1
              }, 8, ["ui"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/user-course",
        class: "uno-text-[var(--ui-muted-foreground)] uno-font-['Outfit'] uno-text-center hover:uno-text-[var(--ui-foreground)]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("pages.userCourseChapterComplete.later"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("pages.userCourseChapterComplete.later")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user-course/chapter-complete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=chapter-complete-zZS5opDE.mjs.map
