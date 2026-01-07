import { u as useI18n, e as useSeoMeta, g as _sfc_main$8 } from './server.mjs';
import { _ as __nuxt_component_1 } from './AppLink-DT1Xb_nb.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "detail",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo.ebooks.detail.title"),
      description: () => t("seo.ebooks.detail.description")
    });
    const learnList = [
      t("pages.ebookDetail.learn.i1"),
      t("pages.ebookDetail.learn.i2"),
      t("pages.ebookDetail.learn.i3"),
      t("pages.ebookDetail.learn.i4"),
      t("pages.ebookDetail.learn.i5")
    ];
    const requireList = [
      t("pages.ebookDetail.require.i1"),
      t("pages.ebookDetail.require.i2"),
      t("pages.ebookDetail.require.i3")
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$8;
      const _component_AppLink = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "uno-py-10 uno-px-6 md:uno-px-10" }, _attrs))}><div class="page-container"><div class="uno-bg-[var(--ui-primary)] uno-text-white uno-rounded-[20px] uno-px-6 uno-py-8 md:uno-px-10 md:uno-py-12 uno-shadow-[0_8px_24px_rgba(0,0,0,0.12)]"><h1 class="uno-text-2xl md:uno-text-4xl uno-font-[&#39;Outfit&#39;] uno-font-extrabold uno-text-center">${ssrInterpolate(_ctx.$t("pages.ebookDetail.hero.title"))}</h1><p class="uno-text-center uno-mt-3 uno-text-sm md:uno-text-base">${ssrInterpolate(_ctx.$t("pages.ebookDetail.hero.subtitle"))}</p></div><section class="uno-mt-6"><div class="uno-py-6 md:uno-p-10 uno-space-y-6"><h2 class="uno-text-2xl md:uno-text-3xl uno-font-[&#39;Outfit&#39;] uno-font-extrabold uno-text-[var(--ui-foreground)]">${ssrInterpolate(_ctx.$t("pages.ebookDetail.title"))}</h2><p class="uno-text-[var(--ui-muted-foreground)] uno-text-sm md:uno-text-base">${ssrInterpolate(_ctx.$t("pages.ebookDetail.intro"))}</p><div class="uno-space-y-4"><h3 class="uno-text-xl uno-font-bold uno-text-[var(--ui-foreground)]">${ssrInterpolate(_ctx.$t("pages.ebookDetail.sections.contentCreation.title"))}</h3><p class="uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(_ctx.$t("pages.ebookDetail.sections.contentCreation.body"))}</p><p class="uno-text-[var(--ui-foreground)] uno-font-medium">${ssrInterpolate(_ctx.$t("pages.ebookDetail.sections.keyTakeaway.title"))}</p><p class="uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(_ctx.$t("pages.ebookDetail.sections.keyTakeaway.body"))}</p></div><div class="uno-space-y-4"><h3 class="uno-text-xl uno-font-bold uno-text-[var(--ui-foreground)]">${ssrInterpolate(_ctx.$t("pages.ebookDetail.sections.social.title"))}</h3><p class="uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(_ctx.$t("pages.ebookDetail.sections.social.body"))}</p></div><div class="uno-space-y-4"><h3 class="uno-text-xl uno-font-bold uno-text-[var(--ui-foreground)]">${ssrInterpolate(_ctx.$t("pages.ebookDetail.sections.about.title"))}</h3><p class="uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(_ctx.$t("pages.ebookDetail.sections.about.body"))}</p></div><div class="uno-space-y-3"><h3 class="uno-text-xl uno-font-bold uno-text-[var(--ui-foreground)]">${ssrInterpolate(_ctx.$t("pages.ebookDetail.learn.title"))}</h3><ul class="uno-space-y-2"><!--[-->`);
      ssrRenderList(learnList, (item, i) => {
        _push(`<li class="uno-text-[var(--ui-foreground)]"><span class="uno-text-[var(--ui-foreground)]">${ssrInterpolate(item)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="uno-space-y-3"><h3 class="uno-text-xl uno-font-bold uno-text-[var(--ui-foreground)]">${ssrInterpolate(_ctx.$t("pages.ebookDetail.require.title"))}</h3><ul class="uno-space-y-2"><!--[-->`);
      ssrRenderList(requireList, (item, i) => {
        _push(`<li class="uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="uno-space-y-4"><h3 class="uno-text-xl uno-font-bold uno-text-[var(--ui-foreground)]">${ssrInterpolate(_ctx.$t("pages.ebookDetail.sections.analytics.title"))}</h3><p class="uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(_ctx.$t("pages.ebookDetail.sections.analytics.body"))}</p></div><div class="uno-space-y-4"><h3 class="uno-text-xl uno-font-bold uno-text-[var(--ui-foreground)]">${ssrInterpolate(_ctx.$t("pages.ebookDetail.sections.video.title"))}</h3><p class="uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(_ctx.$t("pages.ebookDetail.sections.video.body"))}</p></div><div class="uno-space-y-4"><h3 class="uno-text-xl uno-font-bold uno-text-[var(--ui-foreground)]">${ssrInterpolate(_ctx.$t("pages.ebookDetail.sections.copywriting.title"))}</h3><p class="uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(_ctx.$t("pages.ebookDetail.sections.copywriting.body"))}</p></div><div class="uno-flex uno-flex-col md:uno-flex-row uno-items-center uno-justify-center uno-gap-3 uno-mx-auto uno-mt-6 uno-p-4 md:uno-p-5 uno-w-full md:uno-w-[440px] md:uno-h-[72px] uno-rounded-[12px] uno-bg-[var(--color-green-7)]">`);
      _push(ssrRenderComponent(_component_UButton, { ui: { base: `w-full md:w-[calc(50%-12px)] h-[48px] flex justify-center items-center flex-row gap-1 py-1 px-[20px] bg-[var(--ui-primary)] rounded-lg text-white text-sm md:text-lg font-['Outfit'] font-bold leading-normal` } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("pages.ebookDetail.cta.download"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("pages.ebookDetail.cta.download")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AppLink, {
        to: "/ebooks",
        class: "uno-inline-block w-full md:w-[calc(50%-12px)]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              ui: { base: `w-full h-[48px] flex justify-center items-center flex-row gap-1 py-1 px-[20px] border-solid border-[var(--ui-primary)] border-2 rounded-lg text-[var(--ui-primary)] text-sm md:text-lg font-['Outfit'] font-bold leading-normal` }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("pages.ebookDetail.cta.close"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("pages.ebookDetail.cta.close")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                variant: "ghost",
                ui: { base: `w-full h-[48px] flex justify-center items-center flex-row gap-1 py-1 px-[20px] border-solid border-[var(--ui-primary)] border-2 rounded-lg text-[var(--ui-primary)] text-sm md:text-lg font-['Outfit'] font-bold leading-normal` }
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("pages.ebookDetail.cta.close")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ebooks/detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=detail-hm-21xaT.mjs.map
