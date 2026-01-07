import { u as useI18n, e as useSeoMeta, _ as __nuxt_component_6 } from './server.mjs';
import { _ as __nuxt_component_1 } from './AppLink-DT1Xb_nb.mjs';
import { h as getArticleBySlug, c as getLatestArticles, u as updatePreviewBySlug, d as getImageUrl, f as formatDate } from './blog-BZq9s-qV.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
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
import './useApi-BWDHtmzl.mjs';
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { t } = useI18n();
    const slug = computed(() => String(route.params.slug || ""));
    const article = ref();
    const recentArticles = ref([]);
    getArticleBySlug(slug.value).then((res) => {
      console.log("getArticleBySlug", res.data);
      article.value = res.data.value.data[0];
    });
    getLatestArticles().then((res) => {
      recentArticles.value = res.data.value.data;
    });
    updatePreviewBySlug(slug.value);
    useSeoMeta({
      title: () => article.value ? `${article.value.title} - ${t("seo.blog.slug.title")}` : t("seo.blog.title"),
      description: () => article.value ? article.value.excerpt : t("seo.blog.slug.description")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_6;
      const _component_AppLink = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "page-container uno-py-46px blog-page" }, _attrs))}><section><p class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#011813] uno-leading-[20px] md:uno-leading-[24px]">${ssrInterpolate(_ctx.$t("pages.blog.detail.breadcrumb"))}</p></section><section class="uno-my-[24px] md:uno-my-[40px]">`);
      if (unref(article)) {
        _push(`<div class="uno-rounded-[24px] uno-overflow-hidden">`);
        if (unref(article)?.cover?.[0]?.url) {
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: ("getImageUrl" in _ctx ? _ctx.getImageUrl : unref(getImageUrl))(unref(article).cover?.[0]?.url || ""),
            alt: unref(article).title,
            class: "uno-w-full uno-h-420px uno-object-cover"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="uno-grid md:uno-grid-cols-3 uno-gap-[24px] uno-mt-56px">`);
      if (unref(article)) {
        _push(`<div class="md:uno-col-span-2"><p class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px]"> · ${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(unref(article).publishedAt, "datetime"))}</p><h1 class="uno-font-semibold uno-text-[28px] md:uno-text-[48px] uno-text-[#011813] uno-leading-[36px] md:uno-leading-[58px] uno-mt-8px">${ssrInterpolate(unref(article).title)}</h1><p class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px] uno-mt-8px">${ssrInterpolate(unref(article).excerpt)}</p><div class="uno-mt-24px md:uno-mt-40px">${unref(article).content ?? ""}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><div class="uno-rounded-2xl uno-mb-6"><h3 class="uno-text-[24px] uno-font-semibold uno-text-gray-900 uno-mb-4">${ssrInterpolate(_ctx.$t("pages.blog.sidebar.recent"))}</h3><ul class="uno-space-y-4"><!--[-->`);
      ssrRenderList(unref(recentArticles), (recent) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_AppLink, {
          "is-link": !!recent?.slug,
          to: {
            name: "blog-dateil-slug",
            params: {
              slug: recent?.slug || ""
            }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="uno-flex uno-gap-4 uno-group"${_scopeId}><div class="uno-rounded-[12px] uno-flex-shrink-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: ("getImageUrl" in _ctx ? _ctx.getImageUrl : unref(getImageUrl))(recent.cover?.[0]?.url || ""),
                alt: recent.title,
                width: "72",
                class: "uno-rounded-[12px]",
                height: "72"
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><h4 class="uno-font-medium uno-text-[20px] uno-text-[#011813] uno-leading-[26px] group-hover:uno-text-[var(--ui-primary)] uno-transition-colors uno-duration-200 uno-line-clamp-1"${_scopeId}>${ssrInterpolate(recent.title)}</h4><p class="uno-font-normal uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] uno-mt-1 uno-line-clamp-2"${_scopeId}>${ssrInterpolate(recent.excerpt)}</p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "uno-flex uno-gap-4 uno-group" }, [
                  createVNode("div", { class: "uno-rounded-[12px] uno-flex-shrink-0" }, [
                    createVNode(_component_NuxtImg, {
                      src: ("getImageUrl" in _ctx ? _ctx.getImageUrl : unref(getImageUrl))(recent.cover?.[0]?.url || ""),
                      alt: recent.title,
                      width: "72",
                      class: "uno-rounded-[12px]",
                      height: "72"
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("div", null, [
                    createVNode("h4", { class: "uno-font-medium uno-text-[20px] uno-text-[#011813] uno-leading-[26px] group-hover:uno-text-[var(--ui-primary)] uno-transition-colors uno-duration-200 uno-line-clamp-1" }, toDisplayString(recent.title), 1),
                    createVNode("p", { class: "uno-font-normal uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] uno-mt-1 uno-line-clamp-2" }, toDisplayString(recent.excerpt), 1)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="uno-rounded-2xl uno-py-6 uno-flex uno-items-center uno-gap-[12px]"><h3 class="uno-text-[18px] uno-font-400 uno-text-gray-900">${ssrInterpolate(_ctx.$t("pages.blog.sidebar.follow"))}</h3><div class="uno-flex uno-gap-[12px]"><a href="#" aria-label="Twitter" class="uno-w-[40px] uno-h-[40px] uno-rounded-full uno-flex uno-items-center uno-justify-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/footer/twitter.png",
        alt: "twitter",
        width: "40",
        height: "40"
      }, null, _parent));
      _push(`</a><a href="#" aria-label="Facebook" class="uno-w-[40px] uno-h-[40px] uno-rounded-full uno-flex uno-items-center uno-justify-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/footer/facebook.png",
        alt: "facebook",
        width: "40",
        height: "40"
      }, null, _parent));
      _push(`</a><a href="#" aria-label="Instagram" class="uno-w-[40px] uno-h-[40px] uno-rounded-full uno-flex uno-items-center uno-justify-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/footer/instagram.png",
        alt: "instagram",
        width: "40",
        height: "40"
      }, null, _parent));
      _push(`</a><a href="#" aria-label="LinkedIn" class="uno-w-[40px] uno-h-[40px] uno-rounded-full uno-flex uno-items-center uno-justify-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/footer/linkedin.png",
        alt: "linkedin",
        width: "40",
        height: "40"
      }, null, _parent));
      _push(`</a></div></div></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/dateil/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-DRlh4x4G.mjs.map
