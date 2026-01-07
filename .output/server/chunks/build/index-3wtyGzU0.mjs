import { defineComponent, ref, reactive, mergeProps, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useI18n, a as useSeoMeta } from './server.mjs';
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

const inputColor = "var(--ui-input)";
const foregroundColor = "var(--ui-foreground)";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FaqToggle",
  __ssrInlineRender: true,
  props: {
    expanded: { type: Boolean, default: false },
    size: { default: 24 }
  },
  setup(__props) {
    const props = __props;
    const size = computed(() => props.size || 24);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: size.value,
        height: size.value,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true"
      }, _attrs))}><rect x="0" y="0"${ssrRenderAttr("width", size.value)}${ssrRenderAttr("height", size.value)}${ssrRenderAttr("rx", size.value / 6)}${ssrRenderAttr("fill", inputColor)}></rect><line x1="6" y1="12" x2="18" y2="12"${ssrRenderAttr("stroke", foregroundColor)} stroke-width="2" stroke-linecap="round"></line>`);
      if (!__props.expanded) {
        _push(`<line x1="12" y1="6" x2="12" y2="18"${ssrRenderAttr("stroke", foregroundColor)} stroke-width="2" stroke-linecap="round"></line>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</svg>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/FaqToggle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "IconsFaqToggle" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo.faq.title"),
      description: () => t("seo.faq.description")
    });
    const currentCategory = ref("all");
    const expanded = reactive({
      general: 0,
      integration: null,
      account: null,
      billing: null
    });
    const isExpanded = (section, i) => expanded[section] === i;
    const asideCategories = [
      {
        id: "integration",
        title: "Integration",
        items: [
          {
            text: "How We Use Your Information",
            id: "1",
            list: [
              { question: "什么是我们的服务？", answer: "我们提供专业的测评服务，帮助你了解自己的优势和不足。", id: "1", type: "1" },
              { question: "如何注册账户？", answer: "点击右上角注册按钮，填写邮箱和密码即可完成注册。", id: "2", type: "1" },
              { question: "忘记密码怎么办？", answer: "点击登录页忘记密码链接，输入邮箱即可重置密码。", id: "3", type: "1" },
              { question: "如何注册账户？", answer: "点击右上角注册按钮，填写邮箱和密码即可完成注册。", id: "4", type: "1" },
              { question: "忘记密码怎么办？", answer: "点击登录页忘记密码链接，输入邮箱即可重置密码。", id: "5", type: "1" }
            ]
          },
          {
            text: "Data Sharing and Disclosure",
            id: "2",
            list: [
              { question: "如何集成我们的API？", answer: "你可以参考我们的API文档，按照步骤完成集成。", id: "6", type: "2" },
              { question: "API调用有频率限制吗？", answer: "免费用户每分钟最多调用10次，付费用户无限制。", id: "7", type: "2" },
              { question: "如何获取API密钥？", answer: "登录账户后，在设置页面可以生成和管理API密钥。", id: "8", type: "2" }
            ]
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsFaqToggle = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "uno-py-12 uno-px-6 md:uno-px-10" }, _attrs))}><div class="page-container"><div class="uno-mb-8"><h1 class="uno-text-[40px] md:uno-text-[64px] lg:uno-text-[72px] uno-font-[&#39;Outfit&#39;] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-tracking-tight">${ssrInterpolate(_ctx.$t("pages.faq.title"))}</h1></div><div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-8"><aside class="uno-hidden md:uno-block md:uno-col-span-1"><div class="uno-rounded-2xl uno-p-6"><div class="uno-flex uno-justify-start uno-items-start uno-flex-col uno-gap-4"><span class="uno-text-[var(--ui-foreground)] uno-text-2xl uno-font-[&#39;Outfit&#39;] uno-font-medium uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.faq.sections.general.title"))}</span><!--[-->`);
      ssrRenderList(asideCategories, (cat) => {
        _push(`<div class="uno-flex uno-justify-start uno-items-start uno-flex-col uno-gap-3 uno-cursor-pointer"><div class="uno-text-xl uno-font-[&#39;Outfit&#39;] uno-leading-normal uno-text-[var(--ui-foreground)] uno-font-medium">${ssrInterpolate(cat.title)}</div><!--[-->`);
        ssrRenderList(cat.items, (text, i) => {
          _push(`<div class="${ssrRenderClass([
            `uno-font-['Outfit'] uno-leading-[2.4] uno-cursor-pointer uno-font-medium`,
            currentCategory.value === text.id ? "uno-text-[var(--ui-primary)]" : "uno-text-[var(--ui-muted-foreground)]"
          ])}">${ssrInterpolate(text.text)}</div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></aside><section class="md:uno-col-span-2 uno-space-y-10"><div class="uno-space-y-4"><h2 class="uno-text-2xl md:uno-text-3xl uno-font-[&#39;Outfit&#39;] uno-font-bold uno-text-black uno-mb-4">${ssrInterpolate(_ctx.$t("pages.faq.sections.general.title"))}</h2><div class="uno-space-y-5"><!--[-->`);
      ssrRenderList(asideCategories, (entry) => {
        _push(`<!--[--><h4 class="uno-text-gray-800 uno-text-xl md:uno-text-2xl uno-font-[&#39;Outfit&#39;] uno-font-medium">${ssrInterpolate(entry.title)}</h4><!--[-->`);
        ssrRenderList(entry.items, (item) => {
          _push(`<!--[-->`);
          if (currentCategory.value === "all" || item.id === currentCategory.value) {
            _push(`<!--[--><h6 class="uno-text-gray-700 uno-text-lg md:uno-text-xl uno-font-[&#39;Outfit&#39;] uno-font-medium">${ssrInterpolate(item.text)}</h6><!--[-->`);
            ssrRenderList(item.list, (text, i) => {
              _push(`<div class="uno-border-t uno-border-t-[var(--ui-border)] uno-rounded-[12px]"><div class="uno-flex uno-justify-between uno-items-center uno-py-[20px]"><p class="uno-text-[var(--ui-foreground)] uno-text-xl uno-font-[&#39;Outfit&#39;] uno-font-medium">${ssrInterpolate(text.question)}</p><div class="uno-w-[24px] uno-h-[24px] uno-flex uno-items-center uno-justify-center uno-mr-4">`);
              _push(ssrRenderComponent(_component_IconsFaqToggle, null, null, _parent));
              _push(`</div></div>`);
              if (isExpanded("general", i)) {
                _push(`<div class="uno-pb-[20px]"><p class="uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(text.answer)}</p></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            });
            _push(`<!--]--><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--><!--]-->`);
      });
      _push(`<!--]--></div></div></section></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-3wtyGzU0.mjs.map
