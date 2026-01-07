import { _ as __nuxt_component_1 } from './AppLink-DT1Xb_nb.mjs';
import { d as _export_sfc, u as useI18n, e as useSeoMeta, _ as __nuxt_component_6 } from './server.mjs';
import { g as getCategories, a as getAllTags, b as getRecommendArticles, c as getLatestArticles, d as getImageUrl, f as formatDate, e as getAllArticles } from './blog-BZq9s-qV.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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
import './useApi-BWDHtmzl.mjs';
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo.blog.title"),
      description: () => t("seo.blog.description")
    });
    const hasMoreOther = ref(false);
    const tags = ref([]);
    ref(1);
    const recommendArticles = ref([]);
    const articles = ref([]);
    const previewArticles = ref([]);
    const categories = ref([]);
    const activeTagSlug = ref(null);
    getCategories().then(({ data }) => {
      console.log("getCategories", data);
      categories.value = data.value?.data || [];
    });
    getAllTags().then(({ data }) => {
      tags.value = data.value?.data || [];
    });
    getRecommendArticles().then(({ data }) => {
      console.log("getRecommendArticles", data);
      recommendArticles.value = Array.isArray(data.value?.data) ? data.value?.data : [];
    });
    getLatestArticles().then(({ data }) => {
      console.log("getLatestArticles", data);
      previewArticles.value = Array.isArray(data.value?.data) ? data.value?.data : [];
    });
    const getPageData = async (page = 1, append = false) => {
      const { data } = await getAllArticles(page, activeTagSlug?.value ?? void 0);
      const dataV = data.value;
      console.log("getPageData", data);
      if (append) {
        articles.value = [...articles.value, ...dataV.data];
      } else {
        articles.value = dataV.data;
      }
      hasMoreOther.value = articles?.value?.length < dataV?.meta?.total;
      return data;
    };
    getPageData(1);
    const smallArticles = computed(() => {
      const list = Array.isArray(recommendArticles.value) ? recommendArticles.value : [];
      return list.slice(1, 5);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppLink = __nuxt_component_1;
      const _component_NuxtImg = __nuxt_component_6;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "page-container uno-py-46px blog-page" }, _attrs))} data-v-7405dbaa><section class="" data-v-7405dbaa><p class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#011813] uno-leading-[20px] md:uno-leading-[24px]" data-v-7405dbaa>${ssrInterpolate(_ctx.$t("pages.blog.breadcrumb.list"))}</p><h1 class="uno-font-semibold uno-text-[28px] md:uno-text-[72px] uno-text-[#011813] uno-leading-[36px] md:uno-leading-[86px] uno-mt-12px" data-v-7405dbaa>${ssrInterpolate(_ctx.$t("pages.blog.hero.title"))}</h1></section><section class="uno-my-[56px]" data-v-7405dbaa><div class="uno-grid md:uno-grid-cols-2 uno-gap-[24px]" data-v-7405dbaa>`);
      if (recommendArticles.value && recommendArticles.value[0]) {
        _push(ssrRenderComponent(_component_AppLink, {
          "is-link": !!recommendArticles.value[0]?.slug,
          to: {
            name: "blog-dateil-slug",
            params: {
              slug: recommendArticles.value[0]?.slug || ""
            }
          },
          class: "uno-rounded-2xl uno-overflow-hidden"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div data-v-7405dbaa${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: ("getImageUrl" in _ctx ? _ctx.getImageUrl : unref(getImageUrl))(recommendArticles.value[0]?.cover?.[0]?.url),
                alt: recommendArticles.value[0].title,
                width: "588",
                height: "392",
                class: "uno-rounded-2xl uno-overflow-hidden"
              }, null, _parent2, _scopeId));
              _push2(`<div class="uno-py-6" data-v-7405dbaa${_scopeId}><p class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px] uno-mb-1" data-v-7405dbaa${_scopeId}>${ssrInterpolate(recommendArticles.value[0].updatedBy.firstname + " " + recommendArticles.value[0].updatedBy.lastname)} · ${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(recommendArticles.value[0].publishedAt, "datetime"))}</p><h3 class="uno-font-semibold uno-text-[20px] md:uno-text-[24px] uno-text-[#011813] uno-leading-[28px] md:uno-leading-[33px] uno-mb-3" data-v-7405dbaa${_scopeId}>${ssrInterpolate(recommendArticles.value[0].title)}</h3><p class="uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px] uno-line-clamp-3" data-v-7405dbaa${_scopeId}>${ssrInterpolate(recommendArticles.value[0].excerpt)}</p></div></div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode(_component_NuxtImg, {
                    src: ("getImageUrl" in _ctx ? _ctx.getImageUrl : unref(getImageUrl))(recommendArticles.value[0]?.cover?.[0]?.url),
                    alt: recommendArticles.value[0].title,
                    width: "588",
                    height: "392",
                    class: "uno-rounded-2xl uno-overflow-hidden"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "uno-py-6" }, [
                    createVNode("p", { class: "uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px] uno-mb-1" }, toDisplayString(recommendArticles.value[0].updatedBy.firstname + " " + recommendArticles.value[0].updatedBy.lastname) + " · " + toDisplayString(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(recommendArticles.value[0].publishedAt, "datetime")), 1),
                    createVNode("h3", { class: "uno-font-semibold uno-text-[20px] md:uno-text-[24px] uno-text-[#011813] uno-leading-[28px] md:uno-leading-[33px] uno-mb-3" }, toDisplayString(recommendArticles.value[0].title), 1),
                    createVNode("p", { class: "uno-font-normal uno-text-[14px] md:uno-text-[16px] uno-text-[#4e5255] uno-leading-[20px] md:uno-leading-[24px] uno-line-clamp-3" }, toDisplayString(recommendArticles.value[0].excerpt), 1)
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="uno-hidden md:uno-grid md:uno-grid-cols-2 uno-gap-[24px]" data-v-7405dbaa><!--[-->`);
      ssrRenderList(smallArticles.value, (a) => {
        _push(ssrRenderComponent(_component_AppLink, {
          key: a.id,
          "is-link": !!a?.slug,
          to: {
            name: "blog-dateil-slug",
            params: {
              slug: a?.slug || ""
            }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="uno-rounded-2xl uno-overflow-hidden" data-v-7405dbaa${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                width: "282",
                height: "188",
                src: ("getImageUrl" in _ctx ? _ctx.getImageUrl : unref(getImageUrl))(a.cover?.[0]?.url),
                alt: a.title,
                class: "uno-rounded-2xl uno-overflow-hidden"
              }, null, _parent2, _scopeId));
              _push2(`<div class="uno-py-4" data-v-7405dbaa${_scopeId}><p class="uno-text-[16px] uno-text-gray-500 uno-mb-1" data-v-7405dbaa${_scopeId}>${ssrInterpolate(a.updatedBy.firstname + " " + a.updatedBy.lastname)} · ${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(a.publishedAt, "date"))}</p><h4 class="uno-text-[20px] uno-font-500 uno-text-gray-900 uno-mb-2" data-v-7405dbaa${_scopeId}>${ssrInterpolate(a.title)}</h4></div></div>`);
            } else {
              return [
                createVNode("div", { class: "uno-rounded-2xl uno-overflow-hidden" }, [
                  createVNode(_component_NuxtImg, {
                    width: "282",
                    height: "188",
                    src: ("getImageUrl" in _ctx ? _ctx.getImageUrl : unref(getImageUrl))(a.cover?.[0]?.url),
                    alt: a.title,
                    class: "uno-rounded-2xl uno-overflow-hidden"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "uno-py-4" }, [
                    createVNode("p", { class: "uno-text-[16px] uno-text-gray-500 uno-mb-1" }, toDisplayString(a.updatedBy.firstname + " " + a.updatedBy.lastname) + " · " + toDisplayString(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(a.publishedAt, "date")), 1),
                    createVNode("h4", { class: "uno-text-[20px] uno-font-500 uno-text-gray-900 uno-mb-2" }, toDisplayString(a.title), 1)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="uno-mt-60px md:uno-mt-120px" data-v-7405dbaa><div class="uno-text-center uno-mb-10" data-v-7405dbaa><h2 class="uno-font-semibold uno-text-[48px] uno-text-[#011813] uno-leading-[58px] uno-text-center" data-v-7405dbaa>${ssrInterpolate(_ctx.$t("pages.blog.exploreTitle"))}</h2></div><div class="uno-flex uno-flex-col lg:uno-flex-row uno-gap-8" data-v-7405dbaa><div class="lg:uno-w-3/5" data-v-7405dbaa><div class="uno-grid sm:uno-grid-cols-2 md:uno-grid-cols-2 uno-gap-6" data-v-7405dbaa><!--[-->`);
      ssrRenderList(articles.value, (a) => {
        _push(ssrRenderComponent(_component_AppLink, {
          key: a.id,
          "is-link": !!a?.slug,
          to: {
            name: "blog-dateil-slug",
            params: {
              slug: a?.slug || ""
            }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="uno-rounded-2xl" data-v-7405dbaa${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: ("getImageUrl" in _ctx ? _ctx.getImageUrl : unref(getImageUrl))(a.cover?.[0]?.url),
                alt: a.title,
                width: "384",
                height: "282",
                class: "uno-rounded-2xl uno-overflow-hidden"
              }, null, _parent2, _scopeId));
              _push2(`<p class="uno-font-normal uno-text-[16px] uno-text-[#4e5255] uno-leading-[24px] uno-mt-2 uno-line-clamp-2" data-v-7405dbaa${_scopeId}>${ssrInterpolate(a.updatedBy.firstname + " " + a.updatedBy.lastname)} · ${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(a.publishedAt, "date"))}</p><h4 class="uno-font-medium uno-text-[24px] uno-text-[#011813] uno-leading-[33px] uno-line-clamp-2" data-v-7405dbaa${_scopeId}>${ssrInterpolate(a.title)}</h4></div>`);
            } else {
              return [
                createVNode("div", { class: "uno-rounded-2xl" }, [
                  createVNode(_component_NuxtImg, {
                    src: ("getImageUrl" in _ctx ? _ctx.getImageUrl : unref(getImageUrl))(a.cover?.[0]?.url),
                    alt: a.title,
                    width: "384",
                    height: "282",
                    class: "uno-rounded-2xl uno-overflow-hidden"
                  }, null, 8, ["src", "alt"]),
                  createVNode("p", { class: "uno-font-normal uno-text-[16px] uno-text-[#4e5255] uno-leading-[24px] uno-mt-2 uno-line-clamp-2" }, toDisplayString(a.updatedBy.firstname + " " + a.updatedBy.lastname) + " · " + toDisplayString(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(a.publishedAt, "date")), 1),
                  createVNode("h4", { class: "uno-font-medium uno-text-[24px] uno-text-[#011813] uno-leading-[33px] uno-line-clamp-2" }, toDisplayString(a.title), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="uno-flex uno-justify-center uno-mt-24px" data-v-7405dbaa><button class="${ssrRenderClass([!hasMoreOther.value ? "uno-opacity-50 uno-cursor-not-allowed uno-border-[var(--ui-border)] uno-text-[var(--ui-muted-foreground)]" : "", "uno-h-[40px] uno-px-24px uno-rounded-[999px] uno-bg-transparent uno-border uno-border-[var(--color-pink-1)] uno-text-[var(--color-pink-1)] uno-font-['Outfit'] uno-font-medium hover:uno-opacity-80"])}"${ssrIncludeBooleanAttr(!hasMoreOther.value) ? " disabled" : ""} data-v-7405dbaa>${ssrInterpolate(_ctx.$t("pages.blog.loadMore"))}</button></div></div><div class="lg:uno-w-2/5" data-v-7405dbaa><div class="uno-rounded-2xl uno-mb-12" data-v-7405dbaa><h3 class="uno-text-[22px] uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-text-[#011813] uno-mb-4" data-v-7405dbaa>${ssrInterpolate(_ctx.$t("pages.blog.sidebar.categories"))}</h3><ul class="uno-space-y-3" data-v-7405dbaa><!--[-->`);
      ssrRenderList(categories.value, (c, i) => {
        _push(`<li data-v-7405dbaa>`);
        _push(ssrRenderComponent(_component_AppLink, {
          "is-link": !!c?.slug,
          to: {
            name: "blog-category-slug",
            params: {
              slug: c?.slug || ""
            }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="uno-flex uno-items-center hover:uno-text-[var(--color-pink-1)]" data-v-7405dbaa${_scopeId}><span class="uno-text-[16px] uno-font-400 uno-font-[&#39;Outfit&#39;]" data-v-7405dbaa${_scopeId}>${ssrInterpolate(c.name)}</span><span class="uno-text-[16px] uno-font-400 uno-ml-2" data-v-7405dbaa${_scopeId}>(${ssrInterpolate(c.posts.count)})</span></div>`);
            } else {
              return [
                createVNode("div", { class: "uno-flex uno-items-center hover:uno-text-[var(--color-pink-1)]" }, [
                  createVNode("span", { class: "uno-text-[16px] uno-font-400 uno-font-['Outfit']" }, toDisplayString(c.name), 1),
                  createVNode("span", { class: "uno-text-[16px] uno-font-400 uno-ml-2" }, "(" + toDisplayString(c.posts.count) + ")", 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="uno-rounded-2xl uno-mb-6" data-v-7405dbaa><h3 class="uno-text-[24px] uno-font-semibold uno-text-gray-900 uno-mb-4" data-v-7405dbaa>${ssrInterpolate(_ctx.$t("pages.blog.sidebar.recent"))}</h3><ul class="uno-space-y-4" data-v-7405dbaa><!--[-->`);
      ssrRenderList(previewArticles.value, (recent) => {
        _push(`<li data-v-7405dbaa>`);
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
              _push2(`<div class="uno-flex uno-gap-4 uno-group" data-v-7405dbaa${_scopeId}><div class="uno-rounded-[12px] uno-flex-shrink-0" data-v-7405dbaa${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: ("getImageUrl" in _ctx ? _ctx.getImageUrl : unref(getImageUrl))(recent.cover?.[0]?.url),
                alt: recent.title,
                width: "102",
                class: "uno-rounded-[12px]",
                height: "102"
              }, null, _parent2, _scopeId));
              _push2(`</div><div data-v-7405dbaa${_scopeId}><h4 class="uno-font-medium uno-text-[20px] uno-text-[#011813] uno-leading-[30px] group-hover:uno-text-[var(--color-pink-1)] uno-transition-colors uno-duration-200 uno-line-clamp-1" data-v-7405dbaa${_scopeId}>${ssrInterpolate(recent.title)}</h4><p class="uno-font-normal uno-text-[16px] uno-text-[#4e5255] uno-leading-[24px] uno-mt-1 uno-line-clamp-2" data-v-7405dbaa${_scopeId}>${ssrInterpolate(recent.excerpt)}</p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "uno-flex uno-gap-4 uno-group" }, [
                  createVNode("div", { class: "uno-rounded-[12px] uno-flex-shrink-0" }, [
                    createVNode(_component_NuxtImg, {
                      src: ("getImageUrl" in _ctx ? _ctx.getImageUrl : unref(getImageUrl))(recent.cover?.[0]?.url),
                      alt: recent.title,
                      width: "102",
                      class: "uno-rounded-[12px]",
                      height: "102"
                    }, null, 8, ["src", "alt"])
                  ]),
                  createVNode("div", null, [
                    createVNode("h4", { class: "uno-font-medium uno-text-[20px] uno-text-[#011813] uno-leading-[30px] group-hover:uno-text-[var(--color-pink-1)] uno-transition-colors uno-duration-200 uno-line-clamp-1" }, toDisplayString(recent.title), 1),
                    createVNode("p", { class: "uno-font-normal uno-text-[16px] uno-text-[#4e5255] uno-leading-[24px] uno-mt-1 uno-line-clamp-2" }, toDisplayString(recent.excerpt), 1)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="uno-rounded-2xl uno-py-6" data-v-7405dbaa><h3 class="uno-text-[24px] uno-font-semibold uno-text-gray-900 uno-mb-3" data-v-7405dbaa>${ssrInterpolate(_ctx.$t("pages.blog.sidebar.tags"))}</h3><div class="uno-flex uno-flex-wrap uno-gap-3" data-v-7405dbaa><!--[-->`);
      ssrRenderList(tags.value, (tag) => {
        _push(`<span role="button" class="${ssrRenderClass([
          "uno-text-[16px] uno-font-400  uno-px-3 uno-py-1 uno-rounded-[999px] uno-border uno-bg-transparent uno-text-[#011813] uno-cursor-pointer hover:uno-border-[var(--color-pink-1)] hover:uno-text-[var(--color-pink-1)]",
          activeTagSlug.value === tag?.slug || "" ? "uno-border-[var(--color-pink-1)] uno-text-[var(--color-pink-1)]" : "uno-border-[var(--ui-border)]"
        ])}" data-v-7405dbaa>${ssrInterpolate(tag.name)}</span>`);
      });
      _push(`<!--]--></div></div><div class="uno-rounded-2xl uno-py-6 uno-flex uno-items-center uno-gap-[12px]" data-v-7405dbaa><h3 class="uno-text-[18px] uno-font-400 uno-text-gray-900" data-v-7405dbaa>${ssrInterpolate(_ctx.$t("pages.blog.sidebar.follow"))}</h3><div class="uno-flex uno-gap-[12px]" data-v-7405dbaa><a href="#" aria-label="Twitter" class="uno-w-[40px] uno-h-[40px] uno-rounded-full uno-flex uno-items-center uno-justify-center" data-v-7405dbaa>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/footer/twitter.png",
        alt: "twitter",
        width: "40",
        height: "40"
      }, null, _parent));
      _push(`</a><a href="#" aria-label="Facebook" class="uno-w-[40px] uno-h-[40px] uno-rounded-full uno-flex uno-items-center uno-justify-center" data-v-7405dbaa>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/footer/facebook.png",
        alt: "facebook",
        width: "40",
        height: "40"
      }, null, _parent));
      _push(`</a><a href="#" aria-label="Instagram" class="uno-w-[40px] uno-h-[40px] uno-rounded-full uno-flex uno-items-center uno-justify-center" data-v-7405dbaa>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/footer/instagram.png",
        alt: "instagram",
        width: "40",
        height: "40"
      }, null, _parent));
      _push(`</a><a href="#" aria-label="LinkedIn" class="uno-w-[40px] uno-h-[40px] uno-rounded-full uno-flex uno-items-center uno-justify-center" data-v-7405dbaa>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7405dbaa"]]);

export { index as default };
//# sourceMappingURL=index-Cl63Fybj.mjs.map
