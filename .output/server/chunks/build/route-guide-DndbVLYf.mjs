import { _ as __nuxt_component_1 } from './AppLink-DT1Xb_nb.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { d as _export_sfc, u as useI18n, e as useSeoMeta } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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
  __name: "route-guide",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo.routeGuide.title"),
      description: () => t("seo.routeGuide.description")
    });
    useRouter();
    const routes = ref([]);
    const formatRouteName = (path) => {
      if (path === "/") return "首页";
      const parts = path.replace(/^\//, "").split("/");
      const nameParts = parts.map((part) => {
        const specialNames = {
          "about": "关于我们",
          "auth": "认证登录",
          "blog": "博客",
          "courses": "课程",
          "mentors": "导师",
          "orders": "订单",
          "test": "测试",
          "analyzing": "分析中",
          "result": "测试结果",
          "step": "测试步骤",
          "cancel-subscription": "取消订阅",
          "sign-in": "登录",
          "route-guide": "路由引导"
        };
        if (specialNames[part]) return specialNames[part];
        return part.replace(/([A-Z])/g, " $1").replace(/-/g, " ").replace(/^./, (str) => str.toUpperCase());
      });
      return nameParts.join(" - ");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppLink = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "uno-min-h-screen uno-bg-gradient-to-br uno-from-gray-50 uno-to-gray-100 uno-py-8 uno-px-4 sm:uno-px-6 lg:uno-px-8" }, _attrs))} data-v-7c0fa40d><div class="uno-max-w-7xl uno-mx-auto" data-v-7c0fa40d><div class="uno-text-center uno-mb-8 sm:uno-mb-12" data-v-7c0fa40d><h1 class="uno-text-2xl sm:uno-text-3xl md:uno-text-4xl uno-font-[&#39;Outfit&#39;] uno-font-bold uno-text-gray-900 uno-mb-4" data-v-7c0fa40d>${ssrInterpolate(_ctx.$t("pages.routeGuide.title"))}</h1><p class="uno-text-base sm:uno-text-lg uno-text-gray-600 uno-max-w-2xl uno-mx-auto" data-v-7c0fa40d>${ssrInterpolate(_ctx.$t("pages.routeGuide.intro"))}</p></div><div class="uno-bg-white uno-rounded-2xl uno-shadow-xl uno-p-4 sm:uno-p-6 md:uno-p-8" data-v-7c0fa40d><div class="uno-mb-6 sm:uno-mb-8 uno-p-3 sm:uno-p-4 uno-bg-gray-50 uno-rounded-xl" data-v-7c0fa40d><p class="uno-text-gray-700 uno-font-medium" data-v-7c0fa40d>${ssrInterpolate(_ctx.$t("pages.routeGuide.stats", { count: routes.value.length }))}</p></div>`);
      if (routes.value.length > 0) {
        _push(`<div class="uno-space-y-3 sm:uno-space-y-4" data-v-7c0fa40d><!--[-->`);
        ssrRenderList(routes.value, (route) => {
          _push(`<div class="uno-group" data-v-7c0fa40d>`);
          _push(ssrRenderComponent(_component_AppLink, {
            to: route.path,
            class: "uno-block uno-p-3 sm:uno-p-4 uno-border uno-border-gray-200 uno-rounded-xl hover:uno-border-green-500 uno-transition-all uno-duration-300 hover:uno-bg-gray-50 uno-transform hover:uno--translate-y-0.5 hover:uno-shadow-md"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="uno-flex uno-flex-col md:uno-flex-row md:uno-items-center uno-justify-between" data-v-7c0fa40d${_scopeId}><div class="uno-flex-1" data-v-7c0fa40d${_scopeId}><h3 class="uno-text-base sm:uno-text-lg uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-text-gray-900 group-hover:uno-text-green-600 uno-transition-colors" data-v-7c0fa40d${_scopeId}>${ssrInterpolate(formatRouteName(route.path))}</h3><p class="uno-text-gray-500 uno-text-xs sm:uno-text-sm uno-mt-1 uno-truncate" data-v-7c0fa40d${_scopeId}>${ssrInterpolate(_ctx.$t("pages.routeGuide.pathLabel"))}: ${ssrInterpolate(route.path)}</p></div><div class="uno-mt-2 md:uno-mt-0 uno-flex-shrink-0" data-v-7c0fa40d${_scopeId}><span class="uno-inline-flex uno-items-center uno-px-3 uno-py-1 uno-rounded-full uno-text-xs sm:uno-text-sm uno-font-medium uno-bg-green-100 uno-text-green-800" data-v-7c0fa40d${_scopeId}>${ssrInterpolate(_ctx.$t("pages.routeGuide.visit"))} <svg class="uno-w-4 uno-h-4 uno-ml-1 uno-transition-transform group-hover:uno-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-7c0fa40d${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-v-7c0fa40d${_scopeId}></path></svg></span></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "uno-flex uno-flex-col md:uno-flex-row md:uno-items-center uno-justify-between" }, [
                    createVNode("div", { class: "uno-flex-1" }, [
                      createVNode("h3", { class: "uno-text-base sm:uno-text-lg uno-font-['Outfit'] uno-font-semibold uno-text-gray-900 group-hover:uno-text-green-600 uno-transition-colors" }, toDisplayString(formatRouteName(route.path)), 1),
                      createVNode("p", { class: "uno-text-gray-500 uno-text-xs sm:uno-text-sm uno-mt-1 uno-truncate" }, toDisplayString(_ctx.$t("pages.routeGuide.pathLabel")) + ": " + toDisplayString(route.path), 1)
                    ]),
                    createVNode("div", { class: "uno-mt-2 md:uno-mt-0 uno-flex-shrink-0" }, [
                      createVNode("span", { class: "uno-inline-flex uno-items-center uno-px-3 uno-py-1 uno-rounded-full uno-text-xs sm:uno-text-sm uno-font-medium uno-bg-green-100 uno-text-green-800" }, [
                        createTextVNode(toDisplayString(_ctx.$t("pages.routeGuide.visit")) + " ", 1),
                        (openBlock(), createBlock("svg", {
                          class: "uno-w-4 uno-h-4 uno-ml-1 uno-transition-transform group-hover:uno-translate-x-1",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M14 5l7 7m0 0l-7 7m7-7H3"
                          })
                        ]))
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="uno-text-center uno-py-12" data-v-7c0fa40d><div class="uno-mb-4 uno-flex uno-justify-center" data-v-7c0fa40d><svg class="uno-w-12 uno-h-12 uno-text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-7c0fa40d><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" data-v-7c0fa40d></path></svg></div><p class="uno-text-gray-500" data-v-7c0fa40d>${ssrInterpolate(_ctx.$t("pages.routeGuide.empty"))}</p></div>`);
      }
      _push(`</div><div class="uno-mt-6 sm:uno-mt-8 uno-text-center" data-v-7c0fa40d>`);
      _push(ssrRenderComponent(_component_AppLink, {
        to: "/",
        class: "uno-inline-flex uno-items-center uno-px-5 sm:uno-px-6 uno-py-2 sm:uno-py-3 uno-border uno-border-transparent uno-text-sm sm:uno-text-base uno-font-medium uno-rounded-md uno-text-white uno-bg-green-600 hover:uno-bg-green-700 uno-transition-colors uno-shadow-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="uno-w-4 uno-h-4 sm:uno-w-5 sm:uno-h-5 uno-mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-7c0fa40d${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V7a2 2 0 00-2-2M5 12V7a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-v-7c0fa40d${_scopeId}></path></svg> ${ssrInterpolate(_ctx.$t("pages.routeGuide.back"))}`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "uno-w-4 uno-h-4 sm:uno-w-5 sm:uno-h-5 uno-mr-2",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M19 12H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V7a2 2 0 00-2-2M5 12V7a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                })
              ])),
              createTextVNode(" " + toDisplayString(_ctx.$t("pages.routeGuide.back")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/route-guide.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const routeGuide = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7c0fa40d"]]);

export { routeGuide as default };
//# sourceMappingURL=route-guide-DndbVLYf.mjs.map
