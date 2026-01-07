import { u as useI18n, a as useSeoMeta, _ as __nuxt_component_6, b as __nuxt_component_1$1, c as _sfc_main$8 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
  __name: "chapters",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo.userCourse.chapters.title"),
      description: () => t("seo.userCourse.chapters.description")
    });
    const chapters = [
      "Foundations of Leadership",
      "Emotional Intelligence in Leadership",
      "Communication Skills for Leaders",
      "Building and Leading Teams",
      "Foundations of Leadership",
      "Conflict Resolution Strategies",
      "Ethical Leadership and Corporate Responsibility",
      "Change Management",
      "Strategic Planning and Decision Making",
      "Developing Your Leadership Style"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_6;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_UButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container my-10" }, _attrs))}><div class="uno-w-full md:uno-w-[720px] uno-mx-auto uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]"><div class="uno-w-full uno-h-[220px] md:uno-h-[260px] uno-overflow-hidden uno-rounded-t-[24px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/home/1.png",
        alt: "cover",
        class: "uno-w-full uno-h-full uno-object-cover"
      }, null, _parent));
      _push(`</div><div class="uno-p-6 md:uno-p-8"><h1 class="uno-text-2xl md:uno-text-3xl uno-font-[&#39;Outfit&#39;] uno-font-bold uno-text-[var(--ui-foreground)] uno-mb-3">${ssrInterpolate(_ctx.$t("pages.userCourseChapters.title"))}</h1><p class="uno-text-sm md:uno-text-base uno-text-[var(--ui-muted-foreground)] uno-mb-6">${ssrInterpolate(_ctx.$t("pages.userCourseChapters.description"))}</p><div class="uno-mb-4"><p class="uno-text-[var(--ui-foreground)] uno-font-semibold">${ssrInterpolate(_ctx.$t("pages.userCourseChapters.coverQuestion"))}</p></div><div class="uno-space-y-3 uno-mb-8"><!--[-->`);
      ssrRenderList(chapters, (item, idx) => {
        _push(`<div class="uno-flex uno-items-center uno-gap-4"><span class="uno-inline-flex uno-items-center uno-justify-center uno-w-8 uno-h-8 uno-aspect-square uno-rounded-full uno-bg-[var(--ui-input)] uno-text-[var(--ui-muted-foreground)] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-font-medium uno-leading-normal">${ssrInterpolate(idx + 1)}</span><span class="uno-text-[var(--ui-muted-foreground)] uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(item)}</span></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/user-course/lesson-guide",
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
                  _push3(`${ssrInterpolate(_ctx.$t("pages.userCourseChapters.cta"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("pages.userCourseChapters.cta")), 1)
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
                  createTextVNode(toDisplayString(_ctx.$t("pages.userCourseChapters.cta")), 1)
                ]),
                _: 1
              }, 8, ["ui"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user-course/chapters.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=chapters-pIsSOE70.mjs.map
