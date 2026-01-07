import { u as useI18n, a as useSeoMeta, _ as __nuxt_component_6, c as _sfc_main$8, b as __nuxt_component_1$1 } from './server.mjs';
import { _ as __nuxt_component_3 } from './FAQSection-D0dWxZbX.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
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

const name = "liyangzhi";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "detail",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo.profile.detail.title"),
      description: () => t("seo.profile.detail.description")
    });
    const tabs = [
      { id: "core", label: useI18n().t("pages.testDetail.tab.core") },
      { id: "motivation", label: useI18n().t("pages.testDetail.tab.motivation") },
      { id: "relationships", label: useI18n().t("pages.testDetail.tab.relationships") },
      { id: "work", label: useI18n().t("pages.testDetail.tab.work") },
      { id: "stress", label: useI18n().t("pages.testDetail.tab.stress") },
      { id: "compatibility", label: useI18n().t("pages.testDetail.tab.compatibility") }
    ];
    const activeTab = ref("core");
    const scoreBars = [
      { num: 7, label: "Enthusiast", value: 93, color: "var(--ui-primary)" },
      { num: 4, label: "Individualist", value: 88, color: "var(--color-pink-1)" },
      { num: 2, label: "Helper", value: 86, color: "var(--color-green-2)" },
      { num: 5, label: "Investigator", value: 86, color: "var(--ui-primary)" },
      { num: 8, label: "Challenger", value: 86, color: "var(--color-green-2)" },
      { num: 3, label: "Achiever", value: 84, color: "var(--ui-primary)" },
      { num: 6, label: "Loyalist", value: 83, color: "var(--color-green-2)" },
      { num: 9, label: "Peacemaker", value: 66, color: "var(--ui-primary)" },
      { num: 1, label: "Reformer", value: 52, color: "var(--color-pink-1)" }
    ];
    const enneaNodes = Array.from({ length: 9 }, (_, i) => {
      const id = i + 1;
      const fill = id === 7 ? "var(--color-green-2)" : id === 4 ? "var(--color-pink-1)" : "var(--ui-primary)";
      return { id, fill };
    });
    computed(() => {
      const map = {};
      const cx = 110, cy = 110, r = 80;
      enneaNodes.forEach((n, idx) => {
        const angleDeg = -90 + idx * (360 / 9);
        const rad = angleDeg * Math.PI / 180;
        map[n.id] = { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
      });
      return map;
    });
    const faqItems = [
      { question: t("pages.personalityDetail.faq.q1"), answer: t("pages.personalityDetail.faq.a1") },
      { question: t("pages.personalityDetail.faq.q2"), answer: t("pages.personalityDetail.faq.a2") },
      { question: t("pages.personalityDetail.faq.q3"), answer: t("pages.personalityDetail.faq.a3") },
      { question: t("pages.personalityDetail.faq.q4"), answer: t("pages.personalityDetail.faq.a4") },
      { question: t("pages.personalityDetail.faq.q5"), answer: t("pages.personalityDetail.faq.a5") }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_6;
      const _component_UButton = _sfc_main$8;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_FAQSection = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container uno-w-full md:uno-w-[90%] uno-mx-auto uno-py-12" }, _attrs))}><h1 class="uno-text-2xl md:uno-text-3xl uno-font-[&#39;Outfit&#39;] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-6">${ssrInterpolate(_ctx.$t("pages.testDetail.welcome", { name }))}</h1><section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]"><div class="uno-p-6 md:uno-p-8 uno-grid uno-gap-6 md:uno-grid-cols-3"><div class="uno-col-span-full md:uno-col-span-1 uno-flex uno-flex-col uno-items-start uno-space-y-4"><div class="uno-space-y-2"><div class="uno-text-[#4E5255] uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2] uno-text-sm">${ssrInterpolate(_ctx.$t("pages.profile.aboutTitle"))}</div></div><div class="uno-flex uno-items-center uno-gap-4"><div class="uno-w-20 uno-h-20 uno-aspect-square uno-rounded-full uno-overflow-hidden uno-bg-[#F0F0F0]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/instructors/jane-smith.jpg",
        alt: "avatar",
        class: "uno-w-full uno-h-full uno-object-cover"
      }, null, _parent));
      _push(`</div><div class="uno-flex uno-flex-col uno-items-start uno-gap-1"><div class="uno-text-[#4E5255] uno-text-xs uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.profile.type"))} 7</div><div class="uno-text-[#011813] uno-text-2xl uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.profile.typeName"))}</div></div><div class="uno-h-[2px] uno-bg-[#4E5255]"></div></div><p class="uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal uno-text-left uno-max-w-md">${ssrInterpolate(_ctx.$t("profile.intro"))}</p><div>`);
      _push(ssrRenderComponent(_component_UButton, {
        ui: unref(UButtonTheme),
        class: "uno-w-full md:uno-w-[151px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("pages.profile.readMore"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("pages.profile.readMore")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><h3 class="uno-text-[#011813] uno-text-lg uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.profile.totalScore"))}</h3><div class="uno-mt-3 uno-space-y-3"><!--[-->`);
      ssrRenderList(scoreBars, (bar) => {
        _push(`<div class="uno-flex uno-items-center uno-gap-3"><span class="uno-w-[28px] uno-h-[28px] uno-flex uno-justify-center uno-items-center uno-flex-col uno-gap-[8.75px] uno-py-[3.5px] uno-px-[11.37px] uno-bg-[#F0F0F0] uno-rounded-[14px] uno-overflow-hidden uno-text-[#4E5255] uno-text-[14px] uno-font-[&#39;Outfit&#39;] uno-font-medium uno-leading-normal">${ssrInterpolate(bar.num)}</span><span class="uno-w-28 uno-text-sm uno-text-[#4E5255] uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(bar.label)}</span><div class="uno-flex-1 uno-h-2 uno-rounded-full uno-bg-[var(--ui-input)]"><div class="uno-h-2 uno-rounded-full" style="${ssrRenderStyle({ width: bar.value + "%", background: bar.label === "Individualist" ? "#E786DF" : bar.num === 2 ? "#F5CEA4" : bar.num === 5 ? "#B57AF5" : bar.num === 8 ? "#67DCA9" : bar.num === 3 ? "#E97274" : bar.num === 9 ? "#C7EB78" : bar.num === 6 ? "#7E6EE7" : bar.num === 1 ? "#F4DA8F" : "#8FADF6" })}"></div></div><span class="uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(bar.value)}%</span></div>`);
      });
      _push(`<!--]--></div></div><div class="uno-flex uno-items-center uno-justify-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/test/5.png",
        alt: "Enneagram",
        class: "uno-w-full md:uno-w-[220px] uno-h-auto"
      }, null, _parent));
      _push(`</div></div></section><div class="uno-mt-4 uno-flex uno-gap-2 uno-flex-wrap uno-justify-center"><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<button class="${ssrRenderClass([
          "uno-px-4 uno-py-2 uno-h-48px uno-rounded-full uno-font-'Outfit' uno-text-sm",
          activeTab.value === tab.id ? "uno-bg-[var(--ui-primary)] uno-text-white" : "uno-bg-transparent uno-text-[var(--ui-primary)] uno-border uno-border-[var(--ui-primary)]"
        ])}">${ssrInterpolate(tab.label)}</button>`);
      });
      _push(`<!--]--></div><section class="uno-mt-4 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]"><div class="uno-p-6 md:uno-p-8"><h2 class="uno-text-[#011813] uno-text-2xl uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.testDetail.core.title"))}</h2><div class="uno-grid uno-gap-6 md:uno-grid-cols-2"><!--[-->`);
      ssrRenderList(8, (i) => {
        _push(`<div class="uno-space-y-2"><h3 class="uno-text-[#011813] uno-text-lg uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.testDetail.core.cardTitle"))}</h3><p class="uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("profile.optimisticDesc"))}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="uno-mt-6 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]"><div class="uno-p-6 md:uno-p-8 uno-space-y-6"><h2 class="uno-text-[#011813] uno-text-2xl uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.personalityDetail.subtypes.title"))}</h2><p class="uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("profile.subtypesIntro"))}</p><div class="uno-grid uno-gap-6 md:uno-grid-cols-3"><div class="uno-space-y-2"><h3 class="uno-text-[#011813] uno-text-lg uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.personalityDetail.subtypes.sp"))}</h3><p class="uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.personalityDetail.subtypes.spDesc"))}</p></div><div class="uno-space-y-2"><h3 class="uno-text-[#011813] uno-text-lg uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.personalityDetail.subtypes.social"))}</h3><p class="uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.personalityDetail.subtypes.socialDesc"))}</p></div><div class="uno-space-y-2"><h3 class="uno-text-[#011813] uno-text-lg uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.personalityDetail.subtypes.oneToOne"))}</h3><p class="uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.personalityDetail.subtypes.oneToOneDesc"))}</p></div></div><div class="uno-flex uno-justify-center">`);
      _push(ssrRenderComponent(_component_UButton, {
        ui: unref(UButtonTheme),
        class: "uno-w-full md:uno-w-[151px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("pages.personalityDetail.subtypes.cta"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("pages.personalityDetail.subtypes.cta")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="uno-mt-6 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]"><div class="uno-p-6 md:uno-p-8 uno-space-y-4"><h2 class="uno-text-[#011813] uno-text-2xl uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.personalityDetail.conclusion.title"))}</h2><p class="uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("profile.conclusion"))}</p></div></section><section class="uno-mt-6 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]"><div class="uno-p-6 md:uno-p-8 uno-space-y-6"><h2 class="uno-text-[#011813] uno-text-2xl uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.personalityDetail.growth.title"))}</h2><div class="uno-grid uno-gap-6 md:uno-grid-cols-3"><div class="uno-space-y-3"><div class="uno-w-10 uno-h-10 uno-rounded-full uno-border uno-border-[var(--ui-border)] uno-flex uno-items-center uno-justify-center uno-text-[var(--ui-foreground)] uno-font-semibold"> 1</div><h3 class="uno-text-[#011813] uno-text-lg uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.personalityDetail.growth.items.i1.title"))}</h3><p class="uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.personalityDetail.growth.items.i1.body"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/courses",
        class: "uno-inline-block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              ui: unref(UButtonTheme),
              class: "uno-w-full md:uno-w-[151px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("pages.personalityDetail.growth.ctaCourses"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("pages.personalityDetail.growth.ctaCourses")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                ui: unref(UButtonTheme),
                class: "uno-w-full md:uno-w-[151px]"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("pages.personalityDetail.growth.ctaCourses")), 1)
                ]),
                _: 1
              }, 8, ["ui"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="uno-space-y-3"><div class="uno-w-10 uno-h-10 uno-rounded-full uno-border uno-border-[var(--ui-border)] uno-flex uno-items-center uno-justify-center uno-text-[var(--ui-foreground)] uno-font-semibold"> 2</div><h3 class="uno-text-[#011813] uno-text-lg uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.personalityDetail.growth.items.i2.title"))}</h3><p class="uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.personalityDetail.growth.items.i2.body"))}</p></div><div class="uno-space-y-3"><div class="uno-w-10 uno-h-10 uno-rounded-full uno-border uno-border-[var(--ui-border)] uno-flex uno-items-center uno-justify-center uno-text-[var(--ui-foreground)] uno-font-semibold"> 3</div><h3 class="uno-text-[#011813] uno-text-lg uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.personalityDetail.growth.items.i3.title"))}</h3><p class="uno-text-[#4E5255] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.personalityDetail.growth.items.i3.body"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/test",
        class: "uno-inline-block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              ui: unref(UButtonTheme),
              class: "uno-w-full md:uno-w-[151px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("pages.personalityDetail.growth.ctaTests"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("pages.personalityDetail.growth.ctaTests")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                ui: unref(UButtonTheme),
                class: "uno-w-full md:uno-w-[151px]"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("pages.personalityDetail.growth.ctaTests")), 1)
                ]),
                _: 1
              }, 8, ["ui"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
      _push(ssrRenderComponent(_component_FAQSection, {
        title: _ctx.$t("pages.personalityDetail.faq.title"),
        description: _ctx.$t("pages.personalityDetail.faq.description"),
        items: faqItems,
        accordion: true,
        "default-expanded-index": 0
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=detail-ClFK3two.mjs.map
