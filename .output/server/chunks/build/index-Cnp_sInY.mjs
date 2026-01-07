import { u as useI18n, a as useSeoMeta, _ as __nuxt_component_6, c as _sfc_main$8 } from './server.mjs';
import { _ as _sfc_main$1, U as URadioTheme } from './URadio-DJEeNrSW.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo.profile.title"),
      description: () => t("seo.profile.description")
    });
    const scoreBars = [
      { num: 7, label: "Enthusiast", value: 93, color: "var(--ui-primary)" },
      { num: 4, label: "Individualist", value: 88, color: "var(--color-pink-1)" },
      { num: 2, label: "Helper", value: 86, color: "var(--color-green-2)" },
      { num: 5, label: "Investigator", value: 86, color: "var(--ui-primary)" },
      { num: 8, label: "Challenger", value: 86, color: "var(--color-green-2)" },
      { num: 3, label: "Achiever", value: 84, color: "var(--ui-primary)" },
      { num: 9, label: "Loyalist", value: 83, color: "var(--color-green-2)" },
      { num: 6, label: "Peacemaker", value: 66, color: "var(--ui-primary)" },
      { num: 1, label: "Reformer", value: 52, color: "var(--color-pink-1)" }
    ];
    const triviaOptions = ["Avoidance", "Guesswork", "Practice", "Analytical thinking"];
    const triviaSelected = ref(null);
    const radioItems = computed(() => {
      return triviaOptions.map((opt, idx) => ({
        label: opt,
        value: idx
      }));
    });
    const weekdays = [
      { text: "M", active: false },
      { text: "T", active: false },
      { text: "W", active: false },
      { text: "T", active: false },
      { text: "F", active: false },
      { text: "S", active: false },
      { text: "S", active: false }
    ];
    const testCards = [
      { id: 1, title: "Operations Management", desc: "Objective: To assess an individual's proficiency in a specific hard skill through multiple-choice questions designed to evaluate knowledge, application, and problem-solving abilities." },
      { id: 2, title: "Business Analysis", desc: "Your score: 35 out of 40 points", completed: true, try: true },
      { id: 3, title: "Operations Management", desc: "Objective: To assess an individual's proficiency in a specific hard skill through multiple-choice questions designed to evaluate knowledge, application, and problem-solving abilities." }
    ];
    const courseCards = [
      { id: 1, title: "Business Analysis", desc: "Leadership and management are two distinctive and complementary systems of actions in the business environment. Both are necessary for success in an increasingly complex and volatile business environment.", image: "/images/blog/1.png" },
      { id: 2, title: "Brand Management", desc: "Leadership and management are two distinctive and complementary systems of actions in the business environment.", image: "/images/blog/2.png" },
      { id: 3, title: "Brand Management", desc: "Leadership and management are two distinctive and complementary systems of actions in the business environment.", image: "/images/blog/3.png" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_6;
      const _component_UButton = _sfc_main$8;
      const _component_URadioGroup = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container uno-w-full md:uno-w-[90%] uno-mx-auto uno-py-12" }, _attrs))}><h1 class="uno-text-2xl md:uno-text-3xl uno-font-[&#39;Outfit&#39;] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-6">${ssrInterpolate(_ctx.$t("pages.profile.welcome", { name }))}</h1><section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]"><div class="uno-p-4 md:uno-p-8 uno-grid uno-gap-6 md:uno-grid-cols-3"><div class="uno-col-span-full md:uno-col-span-1 uno-flex uno-flex-col uno-items-start uno-space-y-4"><div class="uno-space-y-2"><div class="uno-text-[#4E5255] uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2] uno-text-sm">${ssrInterpolate(_ctx.$t("pages.profile.aboutTitle"))}</div></div><div class="uno-flex uno-items-center uno-gap-4"><div class="uno-w-20 uno-h-20 uno-aspect-square uno-rounded-full uno-overflow-hidden uno-bg-[#F0F0F0]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/instructors/jane-smith.jpg",
        alt: "avatar",
        class: "uno-w-full uno-h-full uno-object-cover"
      }, null, _parent));
      _push(`</div><div class="uno-flex uno-flex-col uno-items-start uno-gap-1"><div class="uno-text-[#4E5255] uno-text-xs uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.profile.type"))} 7</div><div class="uno-text-[#011813] uno-text-2xl uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.profile.typeName"))}</div></div></div><div class="uno-h-[1px] uno-w-full uno-bg-[var(--ui-border)]"></div><p class="uno-text-xs uno-text-[var(--ui-muted-foreground)] uno-text-left uno-max-w-md">${ssrInterpolate(_ctx.$t("pages.profile.detailedDesc"))}</p><div class="uno-w-full md:uno-w-200px">`);
      _push(ssrRenderComponent(_component_UButton, { ui: unref(UButtonTheme) }, {
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
      _push(`</div></div><div class="uno-col-span-full md:uno-col-span-1"><h3 class="uno-text-[#323233] uno-text-base md:uno-text-lg uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.profile.totalScore"))}</h3><div class="uno-mt-3 uno-space-y-3"><!--[-->`);
      ssrRenderList(scoreBars, (bar) => {
        _push(`<div class="uno-flex uno-items-center uno-gap-3"><span class="uno-w-[28px] uno-h-[28px] uno-flex uno-justify-center uno-items-center uno-flex-col uno-gap-[8.75px] uno-py-[3.5px] uno-px-[11.37px] uno-bg-[#F0F0F0] uno-rounded-[14px] uno-overflow-hidden uno-text-[#4E5255] uno-text-[14px] uno-font-[&#39;Outfit&#39;] uno-font-medium uno-leading-normal">${ssrInterpolate(bar.num)}</span><span class="uno-w-28 uno-text-xs md:uno-text-sm uno-text-[#4E5255] uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(bar.label)}</span><div class="uno-flex-1 uno-h-2 uno-rounded-full uno-bg-[var(--ui-input)]"><div class="uno-h-2 uno-rounded-full" style="${ssrRenderStyle({ width: bar.value + "%", background: bar.label === "Individualist" ? "#E786DF" : bar.num === 2 ? "#F5CEA4" : bar.num === 5 ? "#B57AF5" : bar.num === 8 ? "#67DCA9" : bar.num === 3 ? "#E97274" : bar.num === 9 ? "#C7EB78" : bar.num === 6 ? "#7E6EE7" : bar.num === 1 ? "#F4DA8F" : "#8FADF6" })}"></div></div><span class="uno-text-xs md:uno-text-sm uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(bar.value)}%</span></div>`);
      });
      _push(`<!--]--></div></div><div class="uno-col-span-full md:uno-col-span-1 uno-flex uno-items-center uno-justify-center uno-hidden md:uno-block">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/test/5.png",
        alt: "Enneagram",
        class: "uno-w-full md:uno-w-[220px] uno-h-auto"
      }, null, _parent));
      _push(`</div></div></section><div class="uno-grid uno-gap-6 md:uno-grid-cols-5 uno-mt-6"><section class="uno-col-span-full md:uno-col-span-3 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]"><div class="uno-p-4 md:uno-p-8 uno-space-y-4"><span class="uno-text-[#4E5255] uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.profile.dailyTrivia"))}</span><h3 class="uno-text-[#011813] uno-text-base md:uno-text-2xl uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2] uno-mt-4">${ssrInterpolate(_ctx.$t("pages.profile.triviaQuestion"))}</h3><div class="uno-space-y-3">`);
      _push(ssrRenderComponent(_component_URadioGroup, {
        modelValue: triviaSelected.value,
        "onUpdate:modelValue": ($event) => triviaSelected.value = $event,
        items: radioItems.value,
        ui: unref(URadioTheme)
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        ui: unref(UButtonTheme),
        class: "uno-w-full md:uno-w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("pages.profile.viewResults"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("pages.profile.viewResults")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="uno-col-span-full md:uno-col-span-2 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]"><div class="uno-p-4 md:uno-p-8"><span class="uno-text-[#4E5255] uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2] uno-mb-3">${ssrInterpolate(_ctx.$t("pages.profile.dailyStreak"))}</span><div class="uno-flex uno-items-center uno-gap-2 uno-my-4"><div class="uno-text-[#011813] uno-text-[64px] md:uno-text-[88px] uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]"> 0</div><p class="uno-text-[#4E5255] uno-text-sm md:uno-text-base uno-font-[&#39;Outfit&#39;] uno-leading-[1.6]">${ssrInterpolate(_ctx.$t("pages.profile.begin"))}</p></div><div class="uno-flex uno-gap-2 uno-mt-2 uno-flex-wrap"><!--[-->`);
      ssrRenderList(weekdays, (d, idx) => {
        _push(`<span class="${ssrRenderClass([
          idx === 2 ? "uno-w-[48px] uno-h-[48px] uno-flex uno-justify-center uno-items-end uno-pb-0 uno-px-[19.5px] uno-bg-[#DCFBF2] uno-border-solid uno-border-[#009D77] uno-border-[4.2px] uno-rounded-[24px] uno-overflow-hidden" : "uno-w-[46px] uno-h-[46px] uno-flex uno-justify-center uno-items-end uno-pb-0 uno-px-[19.5px] uno-bg-[#F0F0F0] uno-border-solid uno-border-[#DDDDDD] uno-border-[4.2px] uno-rounded-[24px] uno-overflow-hidden",
          d.active ? "uno-bg-[var(--ui-primary)] uno-text-white uno-font-bold" : idx === 2 ? "uno-text-[#009D77]" : "uno-bg-[#F0F0F0] uno-text-black uno-font-bold"
        ])}">${ssrInterpolate(d.text)}</span>`);
      });
      _push(`<!--]--></div></div></section></div><div class="uno-grid uno-gap-6 md:uno-grid-cols-5 uno-mt-6"><section class="uno-col-span-full md:uno-col-span-3 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]"><div class="uno-p-4 md:uno-p-8 uno-space-y-6"><span class="uno-text-xs uno-text-[#4E5255] uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.profile.continueCourse.label"))}</span><h3 class="uno-text-[#011813] uno-text-xl md:uno-text-2xl uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.profile.continueCourse.title"))}</h3><p class="uno-text-[#323233] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.profile.continueCourse.desc"))}</p><div class="uno-flex uno-justify-between uno-items-center"><span class="uno-text-[#323233] uno-text-sm uno-font-[&#39;Outfit&#39;] uno-font-medium uno-leading-normal">0/10 ${ssrInterpolate(_ctx.$t("pages.profile.lessons"))}</span></div><div class="uno-flex uno-items-end uno-justify-between uno-gap-4">`);
      _push(ssrRenderComponent(_component_UButton, {
        ui: unref(UButtonTheme),
        class: "uno-w-full md:uno-w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("pages.profile.continueCourse.cta"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("pages.profile.continueCourse.cta")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="uno-w-[64px] uno-h-[64px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[14.55px] uno-p-[14.55px] uno-border-solid uno-border-[#E7E7E8] uno-border-4 uno-rounded-[145.45px] uno-overflow-hidden"><span class="uno-text-sm uno-text-[var(--ui-muted-foreground)]">0%</span></div></div></div></section><section class="uno-col-span-full md:uno-col-span-2 uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]"><div class="uno-p-4 md:uno-p-8 uno-space-y-6"><h3 class="uno-text-base md:uno-text-lg uno-text-[#4E5255] uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.profile.progress.title"))}</h3><div class="uno-space-y-4"><div class="uno-flex uno-items-end uno-justify-between"><div class="uno-flex uno-items-center uno-gap-3">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/profile/1.png",
        alt: "completed",
        class: "uno-w-[24px] uno-h-[24px]"
      }, null, _parent));
      _push(`<span class="uno-text-[#323233] uno-font-[&#39;Outfit&#39;] uno-text-sm">${ssrInterpolate(_ctx.$t("pages.profile.progress.tests"))}</span></div><div class="uno-text-[#323233] uno-text-4xl md:uno-text-5xl uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-mb-0">2 </div></div><div class="uno-h-[2px] uno-bg-[var(--ui-border)]"></div><div class="uno-flex uno-items-end uno-justify-between"><div class="uno-flex uno-items-center uno-gap-3">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/profile/2.png",
        alt: "book",
        class: "uno-w-[24px] uno-h-[24px]"
      }, null, _parent));
      _push(`<span class="uno-text-[#323233] uno-font-[&#39;Outfit&#39;] uno-text-sm">${ssrInterpolate(_ctx.$t("pages.profile.progress.courses"))}</span></div><div class="uno-text-[#323233] uno-text-4xl md:uno-text-5xl uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-mb-0">1 </div></div><div class="uno-h-[2px] uno-bg-[var(--ui-border)]"></div><div class="uno-flex uno-items-end uno-justify-between"><div class="uno-flex uno-items-center uno-gap-3">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/profile/3.png",
        alt: "test tube",
        class: "uno-w-[24px] uno-h-[24px]"
      }, null, _parent));
      _push(`<span class="uno-text-[#323233] uno-font-[&#39;Outfit&#39;] uno-text-sm">${ssrInterpolate(_ctx.$t("pages.profile.progress.challenges"))}</span></div><div class="uno-text-[#323233] uno-text-4xl md:uno-text-5xl uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-mb-0">1 </div></div></div></div></section></div><section class="uno-mt-8"><h2 class="uno-text-2xl md:uno-text-[32px] uno-text-[#011813] uno-font-[&#39;Outfit&#39;] uno-font-bold uno-leading-normal uno-mt-12 uno-mb-6">${ssrInterpolate(_ctx.$t("pages.profile.takeAnother"))}</h2><div class="uno-grid uno-gap-6 md:uno-grid-cols-3"><!--[-->`);
      ssrRenderList(testCards, (card) => {
        _push(`<div class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]"><div class="uno-p-4 md:uno-p-8 uno-space-y-3"><div class="uno-flex uno-items-center uno-justify-between uno-gap-2"><span class="uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-2 uno-py-2 uno-px-4 uno-bg-[#F0F0F0] uno-rounded-lg uno-text-sm uno-text-right">${ssrInterpolate(_ctx.$t("pages.profile.tag.hard"))}</span>`);
        if (card.id !== 2) {
          _push(`<span class="uno-text-[#4E5255] uno-font-[&#39;Outfit&#39;] uno-text-right uno-font-medium uno-leading-normal uno-text-sm">10 ${ssrInterpolate(_ctx.$t("pages.profile.questions"))}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (card.completed) {
          _push(`<span class="uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-2 uno-py-2 uno-px-4 uno-bg-[#F0FDF9] uno-border-solid uno-border-[rgba(0,157,119,0.3)] uno-border uno-rounded-lg uno-text-[#009D77] uno-font-[&#39;Outfit&#39;] uno-font-medium uno-leading-normal">`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: "/images/profile/4.png",
            alt: "completed",
            class: "uno-w-[13.75px] uno-h-[12.5px]"
          }, null, _parent));
          _push(` ${ssrInterpolate(_ctx.$t("pages.profile.completed"))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><h3 class="uno-text-[#011813] uno-text-lg md:uno-text-xl uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.24]">${ssrInterpolate(card.title)}</h3><p class="uno-text-[#323233] uno-text-xs uno-font-[&#39;Outfit&#39;] uno-leading-normal uno-min-h-[80px]">${ssrInterpolate(card.desc)}</p><div class="uno-flex uno-gap-3">`);
        _push(ssrRenderComponent(_component_UButton, {
          ui: unref(UButtonTheme),
          class: "uno-flex-1"
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
          _: 2
        }, _parent));
        if (card.try) {
          _push(ssrRenderComponent(_component_UButton, {
            ui: unref(UButtonTheme),
            variant: "secondary",
            class: "uno-flex-1"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("pages.profile.tryAgain"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("pages.profile.tryAgain")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></section><section class="uno-mt-8"><h2 class="uno-text-2xl md:uno-text-[32px] uno-text-[#011813] uno-font-[&#39;Outfit&#39;] uno-font-bold uno-leading-normal uno-mt-12 uno-mb-6">${ssrInterpolate(_ctx.$t("pages.profile.continueLearning"))}</h2><div class="uno-grid uno-gap-6 md:uno-grid-cols-3"><!--[-->`);
      ssrRenderList(courseCards, (course, index) => {
        _push(`<div class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)] uno-overflow-hidden"><div class="uno-p-4 md:uno-p-8 uno-space-y-3"><h3 class="uno-text-lg uno-font-bold uno-text-[var(--ui-foreground)] uno-mb-3">${ssrInterpolate(course.title)}</h3><p class="uno-text-sm uno-text-[var(--ui-muted-foreground)] uno-mb-4 line-clamp-3">${ssrInterpolate(course.desc)}</p><div class="uno-mt-2"><div class="uno-flex uno-items-center uno-justify-between"><div><span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">1/10 ${ssrInterpolate(_ctx.$t("pages.profile.lessons"))}</span></div></div><div class="uno-flex uno-items-center uno-justify-between uno-mt-3">`);
        _push(ssrRenderComponent(_component_UButton, {
          ui: unref(UButtonTheme),
          size: "sm",
          class: "uno-w-[180px] md:uno-w-[120px]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("pages.profile.continueCourse.cta"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("pages.profile.continueCourse.cta")), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="uno-relative uno-w-14 uno-h-14"><div class="uno-absolute uno-inset-0 uno-flex uno-items-center uno-justify-center"><span class="uno-text-sm uno-font-medium uno-text-[var(--ui-primary)]">10%</span></div><svg class="uno-w-full uno-h-full" viewBox="0 0 100 100"><circle class="uno-fill-none uno-stroke-[#E0E0E0] uno-stroke-w-6" cx="50" cy="50" r="45"></circle><circle class="uno-fill-none uno-stroke-[#009D77] uno-stroke-w-6 uno-stroke-linecap-round" cx="50" cy="50" r="45" stroke-dasharray="283" stroke-dashoffset="254.7"></circle></svg></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cnp_sInY.mjs.map
