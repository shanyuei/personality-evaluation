import { u as useI18n, a as useSeoMeta, c as _sfc_main$8, _ as __nuxt_component_6, b as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    locale.value = "en";
    useSeoMeta({
      title: () => t("seo.tests.title"),
      description: () => t("seo.tests.description")
    });
    const filters = [
      { id: "all", label: t("pages.tests.filters.all") },
      { id: "soft", label: t("pages.tests.filters.soft") },
      { id: "hard", label: t("pages.tests.filters.hard") }
    ];
    const activeFilter = ref("all");
    const hero = { title: t("pages.tests.hero.title"), questions: 10 };
    const heroBadge = t("pages.tests.badges.hard");
    const tests = [
      { id: 1, cat: "hard", badge: t("pages.tests.badges.hard"), title: t("pages.tests.cards.operations.title"), desc: t("pages.tests.cards.operations.desc"), questions: 10, completed: false },
      { id: 2, cat: "hard", badge: t("pages.tests.badges.hard"), title: t("pages.tests.cards.business.title"), desc: t("pages.tests.cards.business.desc"), questions: 10, completed: true },
      { id: 3, cat: "hard", badge: t("pages.tests.badges.hard"), title: t("pages.tests.cards.operations.title"), desc: t("pages.tests.cards.operations.desc"), questions: 10, completed: false },
      { id: 4, cat: "hard", badge: t("pages.tests.badges.hard"), title: t("pages.tests.cards.operations.title"), desc: t("pages.tests.cards.operations.desc"), questions: 10, completed: false },
      { id: 5, cat: "hard", badge: t("pages.tests.badges.hard"), title: t("pages.tests.cards.operations.title"), desc: t("pages.tests.cards.operations.desc"), questions: 10, completed: false },
      { id: 6, cat: "hard", badge: t("pages.tests.badges.hard"), title: t("pages.tests.cards.operations.title"), desc: t("pages.tests.cards.operations.desc"), questions: 10, completed: false }
    ];
    const filteredTests = computed(() => {
      if (activeFilter.value === "all") return tests;
      return tests.filter((i) => i.cat === activeFilter.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$8;
      const _component_NuxtImg = __nuxt_component_6;
      const _component_NuxtLink = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container uno-py-8 uno-px-4 md:uno-py-6 md:uno-px-6" }, _attrs))}><div class="uno-flex uno-gap-2 uno-flex-wrap uno-justify-center uno-mb-6"><!--[-->`);
      ssrRenderList(filters, (f, i) => {
        _push(ssrRenderComponent(_component_UButton, {
          key: f.id,
          class: ["uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-1 uno-py-2 uno-px-[16px] uno-text-xs md:uno-py-3 md:uno-px-[20px] md:uno-text-base uno-rounded-[100px] uno-font-['Outfit'] uno-font-medium", i === 0 ? "uno-bg-[var(--ui-primary)] uno-text-[var(--ui-primary-foreground)]" : "uno-bg-white uno-text-[var(--ui-muted-foreground)] uno-border uno-border-solid uno-border-[var(--ui-border)]"],
          onClick: ($event) => activeFilter.value = f.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(f.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(f.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><section class="uno-bg-white uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]"><div class="uno-p-6 md:uno-p-8 uno-grid uno-gap-6 md:uno-grid-cols-3"><div class="md:uno-col-span-1">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/blog/2.png",
        alt: "hero",
        class: "uno-w-full uno-h-[180px] md:uno-h-full uno-object-cover uno-rounded-[16px]"
      }, null, _parent));
      _push(`</div><div class="md:uno-col-span-2 uno-space-y-3"><h1 class="uno-w-full md:uno-w-[642px] uno-text-[var(--ui-foreground)] uno-text-[clamp(1.5rem,5vw,2rem)] md:uno-text-5xl uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(_ctx.$t("pages.tests.hero.title"))}</h1><div class="uno-flex uno-items-center uno-justify-between"><span class="uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-2 uno-py-1 uno-px-3 uno-text-xs md:uno-py-2 md:uno-px-4 md:uno-text-base uno-bg-[var(--ui-muted)] uno-rounded-lg uno-text-[var(--ui-muted-foreground)] uno-font-[&#39;Outfit&#39;] uno-font-medium uno-leading-normal">${ssrInterpolate(unref(heroBadge))}</span><span class="uno-text-xs md:uno-text-base uno-text-[var(--ui-muted-foreground)] uno-font-[&#39;Outfit&#39;] uno-text-right uno-font-medium uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.tests.questions", { count: hero.questions }))}</span></div><p class="uno-text-[var(--ui-muted-foreground)] uno-text-xs md:uno-text-base uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.tests.hero.objective"))}</p><div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/test/step" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, { class: "uno-w-full md:uno-w-[151px] uno-h-[44px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-1 uno-py-1 uno-px-[20px] uno-bg-[var(--ui-primary)] uno-rounded-lg uno-text-[var(--ui-primary-foreground)] uno-text-sm md:uno-text-lg uno-font-['Outfit'] uno-font-bold uno-leading-normal" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("pages.tests.cta.startNow"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("pages.tests.cta.startNow")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, { class: "uno-w-full md:uno-w-[151px] uno-h-[44px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-1 uno-py-1 uno-px-[20px] uno-bg-[var(--ui-primary)] uno-rounded-lg uno-text-[var(--ui-primary-foreground)] uno-text-sm md:uno-text-lg uno-font-['Outfit'] uno-font-bold uno-leading-normal" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("pages.tests.cta.startNow")), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="uno-mt-4 md:uno-mt-6"><div class="uno-grid uno-gap-4 md:uno-gap-6 md:uno-grid-cols-2"><!--[-->`);
      ssrRenderList(filteredTests.value, (card) => {
        _push(`<div class="uno-bg-white uno-rounded-[16px] md:uno-rounded-[24px] uno-shadow-[0px_4px_12px_rgba(0,0,0,0.08)] uno-border uno-border-[var(--ui-border)]"><div class="uno-p-4 md:uno-p-6 uno-space-y-3"><div class="uno-flex uno-items-center uno-justify-between"><span class="uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-2 uno-py-1 uno-px-3 uno-text-xs md:uno-py-2 md:uno-px-4 md:uno-text-base uno-bg-[var(--ui-muted)] uno-rounded-lg uno-text-[var(--ui-muted-foreground)] uno-font-[&#39;Outfit&#39;] uno-font-medium uno-leading-normal">${ssrInterpolate(card.badge)}</span>`);
        if (!card.completed) {
          _push(`<span class="uno-text-xs md:uno-text-base uno-text-[var(--ui-muted-foreground)] uno-font-[&#39;Outfit&#39;] uno-text-right uno-font-medium uno-leading-normal">${ssrInterpolate(_ctx.$t("pages.tests.questions", { count: card.questions }))}</span>`);
        } else {
          _push(`<span class="uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-2 uno-py-1 uno-px-3 uno-text-xs md:uno-py-2 md:uno-px-4 md:uno-text-base uno-bg-[rgba(0,157,119,0.08)] uno-border uno-border-solid uno-border-[var(--ui-primary)] uno-rounded-lg uno-text-[#009D77] uno-font-[&#39;Outfit&#39;] uno-font-medium uno-leading-normal"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="13.749616384506226" height="12.499652670455933" viewBox="0 0 13.749616384506226 12.499651670455933" aria-hidden="true"><g><path d="M13.499453071678161,1.9998145716781615Q13.621137071678161,1.8375694716781616,13.685270071678161,1.6451704516781616Q13.749402071678162,1.4527714416781616,13.749402071678162,1.2499650716781616Q13.749403071678161,1.1885687936781617,13.743385071678162,1.1274681516781617Q13.737367071678161,1.0663675216781616,13.725389071678162,1.0061509716781616Q13.713412071678162,0.9459343816781616,13.695588071678161,0.8871818216781616Q13.677766071678162,0.8284292516781616,13.654270071678162,0.7717065216781616Q13.630776071678161,0.7149837616781616,13.601834071678162,0.6608370516781616Q13.572892071678162,0.6066904116781616,13.538780071678161,0.5556412916781617Q13.504671071678162,0.5045920616781616,13.465722071678162,0.45713210167816165Q13.426772071678162,0.40967214167816157,13.383358071678161,0.3662584416781616Q13.339946071678161,0.3228446816781616,13.292486071678162,0.2838953116781616Q13.245025071678162,0.24494587167816162,13.193976071678161,0.21083607167816165Q13.142927071678162,0.17672607167816157,13.088781071678161,0.14778407167816154Q13.034633071678162,0.11884217167816158,12.977910071678162,0.09534677167816152Q12.921188071678161,0.07185137167816169,12.862436071678161,0.054028971678161675Q12.80368407167816,0.03620657167816166,12.743466071678162,0.024228671678161673Q12.683250071678161,0.012250771678161687,12.622150071678162,0.006232971678161725Q12.56104907167816,0.00021507167816170458,12.499652071678161,0.00021507167816170458Q12.354141071678162,0.00021507167816170458,12.212520071678162,0.03364707167816161Q12.070899071678161,0.06707907167816152,11.940748071678161,0.13215447167816152Q11.810596071678162,0.19722987167816153,11.698879071678162,0.29046702167816163Q11.587160071678161,0.3837041216781616,11.499852071678161,0.5001146216781617L11.499681071678161,0.49998593167816163L4.709358771678161,9.553747571678162L1.9433209316781617,7.709722371678161L1.9432016616781618,7.709901171678162Q1.7892316616781616,7.607254871678162,1.6121228316781617,7.553630671678162Q1.4350140116781616,7.500006071678162,1.2499650716781616,7.500006071678162Q1.1885687936781617,7.500006571678162,1.1274681516781617,7.506024671678162Q1.0663675216781616,7.512042371678161,1.0061509716781616,7.524019571678162Q0.9459343816781616,7.535997771678161,0.8871818216781616,7.553819971678162Q0.8284292516781616,7.5716422716781615,0.7717065216781616,7.595136971678162Q0.7149837616781616,7.618632671678162,0.6608370516781616,7.647574771678162Q0.6066904116781616,7.676516871678162,0.5556412916781617,7.710626471678162Q0.5045920616781616,7.744737071678162,0.45713210167816165,7.783686471678162Q0.40967214167816157,7.822635971678162,0.3662584416781616,7.866049171678162Q0.3228446816781616,7.909463271678161,0.2838953116781616,7.956922871678161Q0.24494587167816162,8.004382971678162,0.21083607167816165,8.055431771678162Q0.17672607167816157,8.106480971678161,0.14778407167816154,8.160627771678161Q0.11884217167816158,8.214774471678162,0.09534677167816152,8.271496671678161Q0.07185137167816169,8.32821977167816,0.054028971678161675,8.386972771678161Q0.03620657167816166,8.445725771678163,0.024228671678161673,8.505941771678161Q0.012250771678161687,8.566158671678162,0.006232971678161725,8.627259571678161Q0.00021507167816170458,8.688360571678162,0.00021507167816170458,8.749756171678161Q0.00021517167816154092,8.904064071678162,0.037747971678161685,9.053737471678161Q0.07528107167816156,9.203410971678162,0.1480923716781617,9.339459771678161Q0.22090377167816166,9.475509071678161,0.32462025167816166,9.589763071678162Q0.4283367416781616,9.704017071678162,0.5567286616781616,9.789611171678162L0.5566092116781616,9.789790471678161L4.306504871678161,12.289721071678162Q4.355790471678162,12.322578071678162,4.407962471678162,12.350626071678162Q4.460134371678162,12.37867607167816,4.514724571678162,12.40166607167816Q4.569315271678162,12.424655071678162,4.625834871678162,12.442380071678162Q4.6823547716781615,12.460103071678162,4.740297471678161,12.472404071678161Q4.798240271678162,12.484704071678161,4.857086771678162,12.491470071678162Q4.915932971678162,12.498237071678162,4.975155271678162,12.499407071678162Q5.034377671678161,12.500578071678161,5.093445371678161,12.496144071678161Q5.152513171678162,12.491708071678161,5.210896871678162,12.481708071678161Q5.269280771678162,12.471708071678162,5.326456871678162,12.456230071678162Q5.3836329716781615,12.440753071678161,5.4390891716781615,12.419939071678161Q5.4945462716781615,12.399125071678162,5.547785671678161,12.373159071678161Q5.601024971678162,12.347194071678162,5.6515706716781615,12.316310071678162Q5.702116371678161,12.285426071678161,5.7495149716781615,12.24990207167816Q5.796913471678161,12.214378071678162,5.840740571678162,12.174529071678162Q5.884567571678161,12.13468107167816,5.924430271678162,12.090867071678161Q5.9642923716781615,12.047054071678161,5.999832471678162,11.999666071678162L13.499625071678162,1.9999442116781616L13.499453071678161,1.9998145716781615Z" fill-rule="evenodd" fill="#009D77" fill-opacity="1"></path></g></svg> ${ssrInterpolate(_ctx.$t("pages.tests.completed"))}</span>`);
        }
        _push(`</div><h3 class="uno-text-[var(--ui-foreground)] uno-text-lg md:uno-text-2xl uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.24]">${ssrInterpolate(card.title)}</h3><p class="uno-text-[var(--ui-muted-foreground)] uno-text-xs md:uno-text-base uno-font-[&#39;Outfit&#39;] uno-leading-normal">${ssrInterpolate(card.desc)}</p>`);
        if (!card.completed) {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_UButton, { class: "uno-w-full md:uno-w-[151px] uno-h-[44px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-1 uno-py-1 uno-px-[20px] uno-bg-[var(--ui-primary)] uno-rounded-lg uno-text-[var(--ui-primary-foreground)] uno-text-sm md:uno-text-lg uno-font-['Outfit'] uno-font-bold uno-leading-normal" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("pages.tests.cta.readMore"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("pages.tests.cta.readMore")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="uno-flex uno-gap-3">`);
          _push(ssrRenderComponent(_component_NuxtLink, { to: "/test/result" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UButton, { class: "uno-w-full md:uno-w-[151px] uno-h-[44px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-1 uno-py-1 uno-px-[20px] uno-bg-[var(--ui-primary)] uno-rounded-lg uno-text-[var(--ui-primary-foreground)] uno-text-sm md:uno-text-lg uno-font-['Outfit'] uno-font-bold uno-leading-normal" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("pages.tests.cta.viewResults"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("pages.tests.cta.viewResults")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UButton, { class: "uno-w-full md:uno-w-[151px] uno-h-[44px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-1 uno-py-1 uno-px-[20px] uno-bg-[var(--ui-primary)] uno-rounded-lg uno-text-[var(--ui-primary-foreground)] uno-text-sm md:uno-text-lg uno-font-['Outfit'] uno-font-bold uno-leading-normal" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("pages.tests.cta.viewResults")), 1)
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, { to: "/test/step" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UButton, {
                  variant: "ghost",
                  class: "uno-w-full md:uno-w-[151px] uno-h-[44px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-1 uno-py-1 uno-px-[20px] uno-bg-white uno-border-solid uno-border-2 uno-border-[var(--ui-primary)] uno-rounded-lg uno-text-[var(--ui-primary)] uno-text-sm md:uno-text-lg uno-font-['Outfit'] uno-font-bold uno-leading-normal"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.$t("pages.tests.cta.tryAgain"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.$t("pages.tests.cta.tryAgain")), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UButton, {
                    variant: "ghost",
                    class: "uno-w-full md:uno-w-[151px] uno-h-[44px] uno-flex uno-justify-center uno-items-center uno-flex-row uno-gap-1 uno-py-1 uno-px-[20px] uno-bg-white uno-border-solid uno-border-2 uno-border-[var(--ui-primary)] uno-rounded-lg uno-text-[var(--ui-primary)] uno-text-sm md:uno-text-lg uno-font-['Outfit'] uno-font-bold uno-leading-normal"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("pages.tests.cta.tryAgain")), 1)
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="uno-flex uno-justify-center uno-mt-5">`);
      _push(ssrRenderComponent(_component_UButton, {
        variant: "ghost",
        class: "uno-w-full uno-h-[44px] uno-text-sm md:uno-h-[48px] md:uno-text-lg uno-rounded-[12px] uno-bg-white uno-border uno-border-[var(--ui-border)] uno-text-[var(--ui-muted-foreground)] uno-font-['Outfit'] uno-font-bold uno-leading-normal uno-flex uno-items-center uno-justify-center uno-text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("pages.tests.cta.loadMore"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("pages.tests.cta.loadMore")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tests/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cv0vHX0O.mjs.map
