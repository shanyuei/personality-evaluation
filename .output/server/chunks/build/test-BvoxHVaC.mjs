import { u as useI18n, a as useSeoMeta, b as __nuxt_component_1$1, c as _sfc_main$8 } from './server.mjs';
import { _ as _sfc_main$1, U as URadioTheme } from './URadio-DJEeNrSW.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createBlock, openBlock, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
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
  __name: "test",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const current = ref(4);
    const total = ref(10);
    const progress = computed(() => Math.round(current.value / total.value * 100));
    const selected = ref("");
    const question = ref("这是一个测试问题的内容，应该从数据源查询获取");
    const options = [
      "选项 A - 这是第一个选项",
      "选项 B - 这是第二个选项",
      "选项 C - 这是第三个选项",
      "选项 D - 这是第四个选项"
    ];
    const radioItems = computed(() => {
      return options.map((opt, idx) => ({
        label: opt,
        value: idx
      }));
    });
    useSeoMeta({
      title: () => t("seo.userCourse.test.title"),
      description: () => t("seo.userCourse.test.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_URadioGroup = _sfc_main$1;
      const _component_UButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container uno-py-6" }, _attrs))}><div class="course-header"><div class="course-nav">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/user-course/chapter-complete",
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
      _push(`<div class="progress-percent">${ssrInterpolate(progress.value)}%</div><div class="question-count">${ssrInterpolate(_ctx.$t("pages.userCourseTest.questionCount", { current: current.value, total: total.value }))}</div></div><div class="course-progress"><div class="progress-bar" style="${ssrRenderStyle({ width: progress.value + "%" })}"></div></div></div><div class="uno-mt-4 uno-w-full uno-max-w-[860px] uno-mx-auto uno-bg-white uno-rounded-[20px] md:uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] md:uno-border md:uno-border-[var(--ui-border)]"><div class="uno-p-0 md:uno-p-8"><h1 class="uno-text-[#011813] uno-text-[20px] md:uno-text-[32px] uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2] uno-mb-6">${ssrInterpolate(question.value)}</h1><div class="uno-space-y-4 uno-mx-auto">`);
      _push(ssrRenderComponent(_component_URadioGroup, {
        modelValue: selected.value,
        "onUpdate:modelValue": ($event) => selected.value = $event,
        items: radioItems.value,
        ui: unref(URadioTheme)
      }, null, _parent));
      _push(`</div><div class="uno-mt-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/user-course/test-complete",
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
                  _push3(`${ssrInterpolate(_ctx.$t("pages.userCourseTest.cta"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("pages.userCourseTest.cta")), 1)
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
                  createTextVNode(toDisplayString(_ctx.$t("pages.userCourseTest.cta")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user-course/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=test-BvoxHVaC.mjs.map
