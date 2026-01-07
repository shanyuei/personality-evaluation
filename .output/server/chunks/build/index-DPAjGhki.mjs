import { u as useI18n, a as useSeoMeta, c as _sfc_main$8, b as __nuxt_component_1$1, _ as __nuxt_component_6 } from './server.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MyCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    image: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$8;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_NuxtImg = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "uno-p-6 md:uno-p-8 uno-flex uno-flex-col-reverse md:uno-flex-row uno-items-start md:uno-items-center uno-gap-10 md:uno-gap-16" }, _attrs))}><div class="uno-flex-1 uno-space-y-3"><h3 class="uno-text-xl md:uno-text-2xl uno-font-[&#39;Outfit&#39;] uno-font-bold uno-text-[var(--ui-foreground)]">${ssrInterpolate(__props.title)}</h3><p class="uno-text-sm md:uno-text-base uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(__props.description)}</p><div class="uno-flex uno-gap-3 uno-pt-2 uno-justify-between">`);
      _push(ssrRenderComponent(_component_UButton, { ui: { base: `flex-1 h-[48px] flex justify-center items-center flex-row gap-1 py-1 px-[20px]  rounded-lg text-[#FFFFFF] text-[11px] md:text-sm font-['Outfit'] font-bold leading-normal` } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("pages.ebooks.primary.download"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("pages.ebooks.primary.download")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/ebooks/detail" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              ui: { base: ` h-[48px] flex justify-center items-center flex-row gap-1 py-1 px-[20px] border-solid  border-2 rounded-lg  text-[11px] md:text-sm font-['Outfit'] font-bold leading-normal` }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("pages.ebooks.primary.readOnline"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("pages.ebooks.primary.readOnline")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                variant: "ghost",
                ui: { base: ` h-[48px] flex justify-center items-center flex-row gap-1 py-1 px-[20px] border-solid  border-2 rounded-lg  text-[11px] md:text-sm font-['Outfit'] font-bold leading-normal` }
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("pages.ebooks.primary.readOnline")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: __props.image,
        alt: "ebook",
        width: "268",
        height: "209",
        class: "uno-rounded-[24px] uno-m-auto"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ebooks/MyCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "EbooksMyCard" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OtherCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    price: {},
    originalPrice: {},
    sale: { type: Boolean },
    image: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_6;
      const _component_UButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "uno-p-6 md:uno-p-8 uno-flex uno-flex-col uno-gap-8 md:uno-gap-12" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: __props.image,
        alt: __props.title,
        width: "320",
        height: "209",
        class: "uno-rounded-[16px]"
      }, null, _parent));
      _push(`<div class="uno-flex-1 uno-flex uno-flex-col uno-gap-2"><h3 class="uno-text-lg md:uno-text-xl uno-font-[&#39;Outfit&#39;] uno-font-bold uno-text-[var(--ui-foreground)]">${ssrInterpolate(__props.title)}</h3><div class="uno-flex uno-items-center uno-gap-3 uno-flex-wrap uno-justify-between">`);
      if (__props.originalPrice) {
        _push(`<span class="uno-w-full uno-text-[var(--ui-muted-foreground)] uno-line-through">${ssrInterpolate(__props.originalPrice)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="uno-text-[22px] uno-font-bold uno-text-[var(--ui-primary)]">${ssrInterpolate(__props.price)}</span><span class="uno-text-xs uno-text-[var(--ui-muted-foreground)]">${ssrInterpolate(_ctx.$t("pages.ebooks.oneTime"))}</span></div><div class="uno-flex uno-gap-3 uno-pt-2">`);
      _push(ssrRenderComponent(_component_UButton, { ui: { base: `flex-1 h-[48px] flex justify-center items-center flex-row gap-1 py-1 px-[20px]  rounded-lg text-[#FFFFFF] text-[11px] md:text-sm font-['Outfit'] font-bold leading-normal` } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("pages.ebooks.buyNow"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("pages.ebooks.buyNow")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        variant: "ghost",
        ui: { base: `h-[48px] flex justify-center items-center flex-row gap-1 py-1 px-[20px] border-solid  border-2 rounded-lg  text-[11px] md:text-sm font-['Outfit'] font-bold leading-normal` }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("pages.ebooks.readMore"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("pages.ebooks.readMore")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ebooks/OtherCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "EbooksOtherCard" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo.ebooks.title"),
      description: () => t("seo.ebooks.description")
    });
    const primaryBooks = [
      {
        id: 1,
        title: t("pages.ebooks.primary.title"),
        description: t("pages.ebooks.primary.desc"),
        image: "/images/blog/2.png"
      },
      {
        id: 2,
        title: t("pages.ebooks.primary.title"),
        description: t("pages.ebooks.primary.desc"),
        image: "/images/blog/7.png"
      },
      {
        id: 3,
        title: t("pages.ebooks.primary.title"),
        description: t("pages.ebooks.primary.desc"),
        image: "/images/blog/8.png"
      }
    ];
    const others = [
      {
        id: 1,
        title: t("pages.ebooks.cardTitle"),
        image: "/images/blog/1.png",
        originalPrice: "CN¥40",
        price: "CN¥5.49",
        sale: true
      },
      {
        id: 2,
        title: t("pages.ebooks.cardTitle"),
        image: "/images/blog/3.png",
        originalPrice: "CN¥40",
        price: "CN¥5.49",
        sale: true
      },
      {
        id: 3,
        title: t("pages.ebooks.cardTitle"),
        image: "/images/blog/4.png",
        originalPrice: "CN¥40",
        price: "CN¥5.49",
        sale: false
      },
      {
        id: 4,
        title: t("pages.ebooks.cardTitle"),
        image: "/images/blog/5.png",
        originalPrice: "CN¥40",
        price: "CN¥5.49",
        sale: true
      },
      {
        id: 5,
        title: t("pages.ebooks.cardTitle"),
        image: "/images/blog/6.png",
        originalPrice: "CN¥40",
        price: "CN¥5.49",
        sale: false
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EbooksMyCard = __nuxt_component_0;
      const _component_EbooksOtherCard = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "uno-py-10 uno-px-4 sm:uno-px-6" }, _attrs))}><div class="page-container uno-mx-auto"><div class="uno-flex uno-flex-col md:uno-flex-row uno-gap-6 uno-w-full uno-mx-auto"><section class="uno-w-full md:uno-w-[66.66%] md:uno-shrink-0"><h2 class="uno-text-2xl md:uno-text-3xl uno-font-[&#39;Outfit&#39;] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-4">${ssrInterpolate(_ctx.$t("pages.ebooks.myTitle"))}</h2><div class="uno-space-y-6"><!--[-->`);
      ssrRenderList(primaryBooks, (book) => {
        _push(`<div class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">`);
        _push(ssrRenderComponent(_component_EbooksMyCard, {
          title: book.title,
          description: book.description,
          image: book.image
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></section><section class="uno-w-full md:uno-w-[33.33%] md:uno-shrink-0"><h2 class="uno-text-2xl md:uno-text-3xl uno-font-[&#39;Outfit&#39;] uno-font-extrabold uno-text-[var(--ui-foreground)] uno-mb-4">${ssrInterpolate(_ctx.$t("pages.ebooks.otherTitle"))}</h2><div class="uno-space-y-6"><!--[-->`);
      ssrRenderList(others, (item) => {
        _push(`<div class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]">`);
        _push(ssrRenderComponent(_component_EbooksOtherCard, {
          title: item.title,
          price: item.price,
          "original-price": item.originalPrice,
          sale: item.sale,
          image: item.image
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></section></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ebooks/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DPAjGhki.mjs.map
