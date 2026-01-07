import { u as useI18n, a as useSeoMeta, _ as __nuxt_component_6, c as _sfc_main$8 } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { U as UButtonTheme } from './UButton-CtKGpLNs.mjs';
import { u as useGetFetch } from './useApi-CwyQzSst.mjs';
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
import '@vue/shared';

const getTestQuestions = () => {
  return useGetFetch(`/personal/questions`);
};
const total = 20;
const current = 1;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo.test.title"),
      description: () => t("seo.test.description")
    });
    getTestQuestions().then(({ data }) => {
      console.log("getTestQuestions", data);
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
      const _component_UButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container uno-py-6" }, _attrs))}><div class="uno-flex uno-flex-col uno-items-center uno-gap-4"><div class="uno-w-[80px] uno-h-[80px] uno-flex uno-items-center uno-justify-center"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="80" height="79.997802734375" viewBox="0 0 80 79.997802734375"><g><g><path d="M23.9426,6.2976718C32.925961,-2.1259091,46.915886,-2.0954692,55.862717,6.3669062C55.862717,6.3669062,65.106529,15.110062,65.106529,15.110062C65.106529,15.110062,73.639397,24.138941,73.639397,24.138941C82.045288,33.033203,82.129723,46.91748,73.832123,55.912834C73.832123,55.912834,65.106529,65.372101,65.106529,65.372101C65.106529,65.372101,55.921101,73.837807,55.921101,73.837807C50.19355,79.116486,42.487534,80.997826,35.349407,79.500229C31.20351,78.630402,28.862253,74.346199,28.864952,70.110046C28.864952,70.106804,28.864954,70.104179,28.864954,70.102196C28.864954,70.102196,28.864954,61.03669,28.864954,61.03669C32.181892,62.790154,35.962029,63.784851,39.974991,63.784882C53.123951,63.784882,63.783291,53.125492,63.783329,39.976543C63.783329,26.827562,53.12397,16.168211,39.974991,16.168211C26.826096,16.168312,16.166658,26.827625,16.166658,39.976543C16.16666,40.681503,16.199121,41.379169,16.259142,42.068558C16.198723,42.420307,16.167173,42.781994,16.167173,43.15099C16.167173,43.15099,16.167173,66.079948,16.167173,66.079948C16.167173,66.079948,14.579951,64.578491,14.579951,64.578491C14.579951,64.578491,6.3570857,55.874084,6.3570857,55.874084C-2.1002257,46.921619,-2.1215689,32.930992,6.3085184,23.952936C6.3085184,23.952936,15.109026,14.580988,15.109026,14.580988C15.109026,14.580988,23.9426,6.2976718,23.9426,6.2976718ZM39.974991,28.86599C46.111183,28.86599,51.085545,33.840351,51.085545,39.976543C51.085506,46.112705,46.11116,51.087105,39.974991,51.087105C33.838909,51.087002,28.864473,46.11264,28.864437,39.976543C28.864437,33.840416,33.838886,28.866091,39.974991,28.86599Z" fill="#009D77" fill-opacity="1"></path></g></g></svg></div><h1 class="uno-w-full uno-text-[#011813] uno-text-2xl md:uno-text-5xl uno-font-[&#39;Outfit&#39;] uno-text-center uno-font-semibold uno-leading-[1.2] uno-mb-8 md:uno-mb-12">${ssrInterpolate(_ctx.$t("pages.testIntro.title"))}</h1></div><div class="uno-mt-6"><div class="uno-grid uno-gap-6 md:uno-gap-8 md:uno-grid-cols-3"><div class="uno-w-full uno-max-w-xs uno-bg-[#FBF0F4] uno-rounded-[24px] uno-p-4 uno-mx-auto"><div class="uno-inline-block uno-w-full uno-p-4 uno-space-y-2 uno-bg-[#FBF0F4] uno-rounded-2xl"><div class="uno-flex uno-flex-col uno-items-center uno-gap-3"><span class="uno-w-20 uno-h-20 uno-rounded-full uno-bg-[var(--color-pink-4)] uno-flex uno-items-center uno-justify-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/test/1.png",
        alt: "step1",
        width: "80",
        height: "80"
      }, null, _parent));
      _push(`</span><span class="uno-inline-flex uno-justify-start uno-items-center uno-flex-row uno-gap-2.5 uno-py-1 uno-px-4 uno-bg-[#FD9AC0] uno-rounded-3xl uno-self-start uno-text-[#011813] uno-text-center uno-text-xs uno-font-[&#39;Outfit&#39;] uno-font-medium uno-leading-[1.36]">STEP 1</span></div><div class="uno-text-[#011813] uno-text-base md:uno-text-xl uno-font-[&#39;Outfit&#39;] uno-font-semibold">${ssrInterpolate(_ctx.$t("pages.testIntro.pc.step1.title"))}</div><p class="uno-text-xs md:uno-text-sm uno-text-[#4E5255] uno-font-[&#39;Outfit&#39;]">${ssrInterpolate(_ctx.$t("pages.testIntro.pc.step1.desc"))}</p></div></div><div class="uno-w-full uno-max-w-xs uno-bg-white uno-rounded-[24px] uno-p-4 uno-mx-auto"><div class="uno-inline-block uno-w-full uno-p-4 uno-space-y-2 uno-bg-[#EEE5F8] uno-rounded-[24px]"><div class="uno-flex uno-flex-col uno-items-center uno-gap-3"><span class="uno-w-20 uno-h-20 uno-rounded-full uno-bg-[var(--color-purple-4)] uno-flex uno-items-center uno-justify-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/test/2.png",
        alt: "step2",
        width: "80",
        height: "80"
      }, null, _parent));
      _push(`</span><span class="uno-inline-flex uno-justify-start uno-items-center uno-flex-row uno-gap-2.5 uno-py-1 uno-px-4 uno-bg-[#DEC4FA] uno-rounded-3xl uno-text-[#011813] uno-text-center uno-text-xs uno-font-[&#39;Outfit&#39;] uno-font-medium uno-leading-[1.36] uno-self-start">STEP 2</span></div><div class="uno-text-[#011813] uno-text-base md:uno-text-xl uno-font-[&#39;Outfit&#39;] uno-font-semibold">${ssrInterpolate(_ctx.$t("pages.testIntro.pc.step2.title"))}</div><p class="uno-text-xs md:uno-text-sm uno-text-[#4E5255] uno-font-[&#39;Outfit&#39;]">${ssrInterpolate(_ctx.$t("pages.testIntro.pc.step2.desc"))}</p></div></div><div class="uno-w-full uno-max-w-xs uno-bg-[#D2F2E9] uno-rounded-[24px] uno-p-4 uno-mx-auto"><div class="uno-inline-block uno-w-full uno-p-4 uno-space-y-2 uno-bg-[#D2F2E9] uno-rounded-2xl"><div class="uno-flex uno-flex-col uno-items-center uno-gap-3"><span class="uno-w-20 uno-h-20 uno-rounded-full uno-bg-[var(--color-green-3)] uno-flex uno-items-center uno-justify-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/test/3.png",
        alt: "step3",
        width: "80",
        height: "80"
      }, null, _parent));
      _push(`</span><span class="uno-inline-block uno-rounded-full uno-bg-[var(--color-green-2)] uno-text-[#011813] uno-text-xs uno-font-[&#39;Outfit&#39;] uno-px-3 uno-py-1 uno-self-start">STEP 3</span></div><div class="uno-text-[#011813] uno-text-base md:uno-text-xl uno-font-[&#39;Outfit&#39;] uno-font-semibold">${ssrInterpolate(_ctx.$t("pages.testIntro.pc.step3.title"))}</div><p class="uno-text-xs md:uno-text-sm uno-text-[#4E5255] uno-font-[&#39;Outfit&#39;]">${ssrInterpolate(_ctx.$t("pages.testIntro.pc.step3.desc"))}</p></div></div></div></div><div class="course-header md:!uno-w-[80%] md:!uno-max-w-[80%] uno-mx-auto uno-mt-4"><div class="course-nav"><div class="progress-percent">${ssrInterpolate(progress.value)}%</div><div class="question-count">${ssrInterpolate(_ctx.$t("pages.testIntro.progress.step", { current, total }))}</div></div><div class="course-progress"><div class="progress-bar" style="${ssrRenderStyle({ width: progress.value + "%" })}"></div></div></div><div class="uno-w-full md:uno-w-[80%] uno-mx-auto uno-mt-4"><div class="uno-p-4 md:uno-p-6"><h2 class="uno-text-[#011813] uno-text-base md:uno-text-lg uno-font-[&#39;Outfit&#39;] uno-text-center uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.testIntro.instructions"))}</h2><div class="uno-flex uno-flex-row uno-items-baseline uno-justify-center uno-gap-0 uno-mt-4 uno-px-[5%]"><div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F4D0CB] uno-border-solid uno-border-[#F6BAB2] uno-border-2"></div><span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(_ctx.$t("pages.testIntro.scale.sd"))}</span></div><div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F1DACE] uno-border-solid uno-border-[#F5CEB6] uno-border-2"></div><span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(_ctx.$t("pages.testIntro.scale.d"))}</span></div><div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F0F0F0] uno-border-solid uno-border-[#D8D8D8] uno-border-2"></div><span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(_ctx.$t("pages.testIntro.scale.n"))}</span></div><div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#C6EAD8] uno-border-solid uno-border-[#9FE2AA] uno-border-2"></div><span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(_ctx.$t("pages.testIntro.scale.a"))}</span></div><div class="uno-flex-1 uno-flex uno-flex-col uno-items-center uno-gap-1"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#B3E1D6] uno-border-solid uno-border-[#88D9BA] uno-border-2"></div><span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(_ctx.$t("pages.testIntro.scale.sa"))}</span></div></div></div></div><div class="uno-w-full md:uno-w-[80%] uno-mx-auto uno-mt-4"><div class="uno-space-y-4"><!--[-->`);
      ssrRenderList(questions, (q, qi) => {
        _push(`<div class="uno-bg-white uno-rounded-[16px] md:uno-rounded-[20px] uno-border uno-border-[var(--ui-border)] uno-shadow-[0px_2px_8px_rgba(0,0,0,0.06)]"><div class="uno-p-4 md:uno-p-6"><p class="uno-text-[#011813] uno-font-[&#39;Outfit&#39;] uno-text-base md:uno-text-lg uno-text-center uno-leading-[1.2] uno-mb-8">${ssrInterpolate(q)}</p><div class="uno-flex uno-flex-row uno-items-center uno-justify-center uno-gap-2 md:uno-gap-[20px] uno-mt-4 uno-px-[5%]"><div class="uno-flex-1 uno-flex uno-justify-center uno-items-center"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F4D0CB] uno-border-solid uno-border-[#F6BAB2] uno-border-2"></div></div><div class="uno-flex-1 uno-flex uno-justify-center uno-items-center"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F1DACE] uno-border-solid uno-border-[#F5CEB6] uno-border-2"></div></div><div class="uno-flex-1 uno-flex uno-justify-center uno-items-center"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#F0F0F0] uno-border-solid uno-border-[#D8D8D8] uno-border-2"></div></div><div class="uno-flex-1 uno-flex uno-justify-center uno-items-center"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#C6EAD8] uno-border-solid uno-border-[#9FE2AA] uno-border-2"></div></div><div class="uno-flex-1 uno-flex uno-justify-center uno-items-center"><div class="uno-w-[40px] uno-h-[40px] uno-rounded-[20px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-[5px] uno-p-2.5 uno-bg-[#B3E1D6] uno-border-solid uno-border-[#88D9BA] uno-border-2"></div></div></div></div></div>`);
      });
      _push(`<!--]--></div><p class="uno-text-[#8D8E8F] uno-font-[&#39;Outfit&#39;] uno-text-xs md:uno-text-sm uno-text-center uno-leading-[1.2] uno-mt-6">${ssrInterpolate(_ctx.$t("pages.testIntro.notice"))}</p></div><div class="uno-w-full md:uno-w-[80%] uno-mx-auto uno-mt-6 uno-flex uno-justify-center uno-mb-12">`);
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
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-TH3KL-aH.mjs.map
