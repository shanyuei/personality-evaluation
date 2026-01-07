import { u as useI18n, a as useSeoMeta, _ as __nuxt_component_6, b as __nuxt_component_1$1, c as _sfc_main$8 } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createBlock, openBlock, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { I as IconsCheck } from './Check-BPcG3T8o.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Sad",
  __ssrInlineRender: true,
  props: {
    backgroundColor: {},
    checkColor: {},
    size: {}
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const backgroundColor = computed(() => props.backgroundColor || "#F6998D");
    const checkColor = computed(() => props.checkColor || "#011813");
    const size = computed(() => props.size || 40);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: size.value,
        height: size.value,
        viewBox: "0 0 40 40",
        fill: "none",
        "aria-hidden": "true"
      }, _attrs))}><g><rect x="0" y="0"${ssrRenderAttr("width", size.value)}${ssrRenderAttr("height", size.value)}${ssrRenderAttr("rx", size.value / 2)}${ssrRenderAttr("fill", backgroundColor.value)} fill-opacity="1"></rect><g><path d="M28.437143,15.522389408125001Q28.58683,15.380761738125,28.668314,15.191486958125Q28.7498,15.002212208125,28.7498,14.796142578125Q28.749798,14.697670869125,28.730587,14.601091278125Q28.711376,14.504511688125,28.673691,14.413535718125Q28.636009,14.322559718125,28.581301,14.240683498125Q28.526594,14.158807278125,28.456964,14.089177248125Q28.387335,14.019547228124999,28.305458,13.964839338125Q28.223581,13.910131398125,28.132604999999998,13.872447908125Q28.041629999999998,13.834764358125,27.945051,13.815553488125Q27.848471,13.796342608125,27.75,13.796342548125Q27.558306,13.796342548125,27.380205,13.867244718125Q27.202105,13.938147008125,27.062858,14.069895268125L27.06272,14.069750188125L21.5627165,19.273608678125L16.7628493,23.815033878125L16.7665939,23.806237178125002L15.2071054,22.246748478125L12.95710665,19.996750378125L12.95696521,19.996891978125Q12.81634104,19.856267478124998,12.63260677,19.780161878125Q12.44887252,19.704057178124998,12.25,19.704057178124998Q12.151528291,19.704057178124998,12.0549487,19.723267578125Q11.95836911,19.742478378125,11.86739314,19.780161878125Q11.77641714,19.817845378125,11.69454092,19.872552878125Q11.6126647,19.927261378125,11.54303467,19.996891478125Q11.473404649999999,20.066521178125,11.41869676,20.148397478125Q11.36398882,20.230273678125002,11.32630533,20.321249978125Q11.28862178,20.412225678125,11.26941091,20.508805778125Q11.25020003,20.605385778125,11.25019997,20.703857378125Q11.25020003,20.902729978125002,11.32630527,21.086463978125Q11.40241051,21.270198378125002,11.54303455,21.410822878125L11.54289335,21.410963978125L13.7928916,23.660962078125L15.352382200000001,25.220453578125Q15.9239936,25.792063578125,16.728242899999998,25.810283578125002Q17.544528,25.828778578125,18.137410199999998,25.267817578124998L22.937278,20.726393178125L28.437281,15.522534968125L28.437143,15.522389408125001Z" fill-rule="evenodd"${ssrRenderAttr("fill", checkColor.value)} fill-opacity="1"></path></g></g></svg>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Sad.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "IconsSad" });
const total = 20;
const current = 1;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "step",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo.test.step.title"),
      description: () => t("seo.test.step.description")
    });
    const questions = [
      t("pages.testIntro.q.q1"),
      t("pages.testIntro.q.q2"),
      t("pages.testIntro.q.q3"),
      t("pages.testIntro.q.q4"),
      t("pages.testIntro.q.q5")
    ];
    const answers = ref(Array(questions.length).fill(null));
    const answeredCount = computed(() => answers.value.filter((a) => a !== null).length);
    const progress = computed(() => Math.round(answeredCount.value / total * 100));
    const canContinue = computed(() => answeredCount.value === questions.length);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_6;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_IconsSad = __nuxt_component_2;
      const _component_IconsCheck = IconsCheck;
      const _component_UButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container uno-py-6" }, _attrs))}><main class="uno-py-6 md:uno-py-12 md:uno-px-10"><div class="uno-mx-auto"><div class="uno-flex uno-flex-col uno-items-center uno-gap-4">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/process/1.png",
        alt: "Process Icon",
        class: "uno-w-12 md:uno-w-14 uno-h-12 md:uno-h-14 uno-rounded-full"
      }, null, _parent));
      _push(`<h1 class="uno-w-full uno-text-[#011813] uno-text-2xl md:uno-text-5xl uno-font-[&#39;Outfit&#39;] uno-text-center uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.testIntro.title"))}</h1></div><div class="course-header md:!uno-w-[80%] md:!uno-max-w-[80%] uno-mx-auto"><div class="course-nav"><div class="progress-percent">${ssrInterpolate(progress.value)}%</div><div></div><div class="question-count">${ssrInterpolate(_ctx.$t("pages.testIntro.progress.step", { current, total }))}</div></div><div class="course-progress"><div class="progress-bar" style="${ssrRenderStyle({ width: progress.value + "%" })}"></div></div></div><div class="uno-w-full md:uno-w-[80%] uno-mx-auto uno-mt-4"><div class="uno-flex uno-items-center uno-justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tests",
        class: "uno-inline-flex uno-items-center uno-gap-2 hover:uno-text-[var(--ui-foreground)]"
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
      _push(`<h2 class="uno-text-[#011813] uno-text-base md:uno-text-lg uno-font-[&#39;Outfit&#39;] uno-text-center uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.testIntro.instructions"))}</h2><div class="uno-w-6"></div></div><div class="uno-p-4 md:uno-p-6"><div class="uno-flex uno-flex-row uno-items-baseline uno-justify-center uno-gap-0 uno-mt-4 uno-px-[5%]"><div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F4D0CB] uno-border-solid uno-border-[#F6BAB2] uno-border-2"></div><span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(_ctx.$t("pages.testIntro.scale.sd"))}</span></div><div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F1DACE] uno-border-solid uno-border-[#F5CEB6] uno-border-2"></div><span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(_ctx.$t("pages.testIntro.scale.d"))}</span></div><div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F0F0F0] uno-border-solid uno-border-[#D8D8D8] uno-border-2"></div><span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(_ctx.$t("pages.testIntro.scale.n"))}</span></div><div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#C6EAD8] uno-border-solid uno-border-[#9FE2AA] uno-border-2"></div><span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(_ctx.$t("pages.testIntro.scale.a"))}</span></div><div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#B3E1D6] uno-border-solid uno-border-[#88D9BA] uno-border-2"></div><span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(_ctx.$t("pages.testIntro.scale.sa"))}</span></div></div></div></div><div class="uno-w-full md:uno-w-[80%] uno-mx-auto uno-mt-4"><div class="uno-space-y-4"><!--[-->`);
      ssrRenderList(questions, (q, qi) => {
        _push(`<div class="uno-bg-white uno-rounded-[16px] md:uno-rounded-[20px] uno-border uno-border-[var(--ui-border)] uno-shadow-[0px_2px_8px_rgba(0,0,0,0.06)]"><div class="uno-p-4 md:uno-p-6"><p class="uno-text-[#011813] uno-font-[&#39;Outfit&#39;] uno-text-base md:uno-text-lg uno-text-center uno-leading-[1.2] uno-mb-8">${ssrInterpolate(q)}</p><div class="uno-flex uno-flex-row uno-items-center uno-justify-center uno-gap-2 md:uno-gap-[20px] uno-mt-4 uno-px-[5%]"><div class="uno-flex-1 uno-flex uno-justify-center uno-items-center">`);
        if (qi === 2) {
          _push(ssrRenderComponent(_component_IconsSad, {
            onClick: ($event) => answers.value[qi] = 1
          }, null, _parent));
        } else {
          _push(`<div class="uno-flex-1 uno-flex uno-justify-center uno-items-center"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F4D0CB] uno-border-solid uno-border-[#F6BAB2] uno-border-2"></div></div>`);
        }
        _push(`</div><div class="uno-flex-1 uno-flex uno-justify-center uno-items-center">`);
        if (qi === 2) {
          _push(ssrRenderComponent(_component_IconsCheck, {
            color: "#FFC8A7",
            onClick: ($event) => answers.value[qi] = 2
          }, null, _parent));
        } else {
          _push(`<div class="uno-flex-1 uno-flex uno-justify-center uno-items-center"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F1DACE] uno-border-solid uno-border-[#F5CEB6] uno-border-2"></div></div>`);
        }
        _push(`</div><div class="uno-flex-1 uno-flex uno-justify-center uno-items-center">`);
        if (qi === 2) {
          _push(ssrRenderComponent(_component_IconsCheck, {
            color: "#D8D8D8",
            onClick: ($event) => answers.value[qi] = 3
          }, null, _parent));
        } else {
          _push(`<div class="uno-flex-1 uno-flex uno-justify-center uno-items-center"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F0F0F0] uno-border-solid uno-border-[#D8D8D8] uno-border-2"></div></div>`);
        }
        _push(`</div><div class="uno-flex-1 uno-flex uno-justify-center uno-items-center">`);
        if (qi === 2) {
          _push(ssrRenderComponent(_component_IconsCheck, {
            color: "#96E5A3",
            onClick: ($event) => answers.value[qi] = 4
          }, null, _parent));
        } else {
          _push(`<div class="uno-flex-1 uno-flex uno-justify-center uno-items-center"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#C6EAD8] uno-border-solid uno-border-[#9FE2AA] uno-border-2"></div></div>`);
        }
        _push(`</div><div class="uno-flex-1 uno-flex uno-justify-center uno-items-center">`);
        if (qi === 2) {
          _push(ssrRenderComponent(_component_IconsCheck, {
            color: "#5AD7A7",
            onClick: ($event) => answers.value[qi] = 5
          }, null, _parent));
        } else {
          _push(`<div class="uno-flex-1 uno-flex uno-justify-center uno-items-center"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#B3E1D6] uno-border-solid uno-border-[#88D9BA] uno-border-2"></div></div>`);
        }
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--></div><p class="uno-text-[#8D8E8F] uno-font-[&#39;Outfit&#39;] uno-text-xs md:uno-text-sm uno-text-center uno-leading-[1.2] uno-mt-6">${ssrInterpolate(_ctx.$t("pages.testIntro.notice"))}</p></div><div class="uno-w-full md:uno-w-[602px] uno-mx-auto uno-mt-6 uno-flex uno-justify-center">`);
      _push(ssrRenderComponent(_component_UButton, {
        ui: unref(UButtonTheme),
        disabled: !canContinue.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("pages.testIntro.cta"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("pages.testIntro.cta")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test/step.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=step-BFoEnLVt.mjs.map
