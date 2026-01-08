import { _ as __nuxt_component_3 } from './AppArrowButton-lIHrE8JJ.mjs';
import { u as useI18n, e as useSeoMeta, _ as __nuxt_component_6, d as _export_sfc } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
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

const progressRadius = 30;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    course: {}
  },
  setup(__props) {
    const props = __props;
    const formatPercent = (p) => {
      const v = Math.round(p ?? 10);
      if (v < 0) return 0;
      if (v > 100) return 100;
      return v;
    };
    const progressCircumference = 2 * Math.PI * progressRadius;
    const progressOffset = computed(() => {
      const p = formatPercent(props.course?.percent);
      return progressCircumference - p / 100 * progressCircumference;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_6;
      const _component_AppArrowButton = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "course-card" }, _attrs))} data-v-14edeb18>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: __props.course.image,
        alt: __props.course.title,
        width: "564",
        height: "270",
        class: "course-card__img"
      }, null, _parent));
      _push(`<h3 class="course-card__title" data-v-14edeb18>${ssrInterpolate(__props.course.title)}</h3><p class="course-card__desc" data-v-14edeb18>${ssrInterpolate(__props.course.description)}</p>`);
      if (__props.course.footerType === 1) {
        _push(`<div class="course-card__footer" data-v-14edeb18><div class="course-card__footer__status" data-v-14edeb18>${ssrInterpolate(_ctx.$t("common.courseCard.status.completed"))}</div>`);
        _push(ssrRenderComponent(_component_AppArrowButton, {
          variant: "dark",
          class: "uno-h-[48px] uno-min-w-[158px] uno-gap-3 uno-pl-5 uno-pr-1 uno-py-1 max-md:uno-h-[44px] max-md:uno-min-w-[140px] max-md:uno-gap-2 max-md:uno-pl-[14px] max-md:uno-pr-[6px] max-md:uno-justify-between uno-font-medium",
          "icon-size": 40,
          "hover-class": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("common.retakeTest"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("common.retakeTest")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="course-card__footer__link" data-v-14edeb18><span class="course-card__footer__link-text" data-v-14edeb18>${ssrInterpolate(_ctx.$t("common.viewResults"))}</span></div><div class="course-card__footer__badge course-card__footer__badge--points" data-v-14edeb18><div class="course-card__footer__badge-wrap" data-v-14edeb18><span class="course-card__footer__badge-value" data-v-14edeb18>${ssrInterpolate(__props.course.points ?? 20)}</span><span class="course-card__footer__badge-label" data-v-14edeb18>${ssrInterpolate(__props.course.resultLabel ?? _ctx.$t("common.points"))}</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.course.footerType === 2) {
        _push(`<!--[--><div class="course-card__status uno-text-bold uno-text-#000" data-v-14edeb18><span data-v-14edeb18>${ssrInterpolate(__props.course.completedLessons ?? 1)}</span><span data-v-14edeb18>${ssrInterpolate(_ctx.$t("common.of"))}</span><span data-v-14edeb18>${ssrInterpolate(__props.course.lessons ?? 10)}</span><span data-v-14edeb18>${ssrInterpolate(_ctx.$t("common.lessons"))}</span></div><div class="course-card__footer" data-v-14edeb18>`);
        _push(ssrRenderComponent(_component_AppArrowButton, {
          variant: "primary",
          class: "uno-h-[48px] uno-min-w-[158px] uno-gap-3 uno-pl-5 uno-pr-1 uno-py-1 max-md:uno-h-[44px] max-md:uno-min-w-[140px] max-md:uno-gap-2 max-md:uno-pl-[14px] max-md:uno-pr-[6px] max-md:uno-justify-between uno-font-medium",
          "icon-size": 40,
          "hover-class": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("common.getStarted") || "Get Started")}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("common.getStarted") || "Get Started"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="course-card__footer__progress uno-relative" role="progressbar"${ssrRenderAttr("aria-valuenow", formatPercent(__props.course.percent))} aria-valuemin="0" aria-valuemax="100" data-v-14edeb18><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-14edeb18><rect x="2" y="2" width="60" height="60" rx="30" stroke="#E7E7E8" stroke-width="4" data-v-14edeb18></rect><rect x="2" y="2" width="60" height="60" rx="30" stroke="var(--ui-primary)" stroke-width="4" class="uno-transition-all uno-duration-500 uno-ease-out" style="${ssrRenderStyle({ strokeDasharray: progressCircumference, strokeDashoffset: progressOffset.value })}" data-v-14edeb18></rect></svg><span class="course-card__footer__progress-text uno-absolute uno-top-1/2 uno-left-1/2 uno-transform uno-translate-x-[-50%] uno-translate-y-[-50%]" data-v-14edeb18>${ssrInterpolate(formatPercent(__props.course.percent))}% </span></div></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (__props.course.footerType === 3) {
        _push(`<div class="course-card__footer" data-v-14edeb18><div class="course-card__footer__status" data-v-14edeb18><span class="course-card__footer__status-text" data-v-14edeb18>${ssrInterpolate(_ctx.$t("common.courseCard.status.completed"))}</span></div>`);
        _push(ssrRenderComponent(_component_AppArrowButton, {
          variant: "dark",
          class: "uno-h-[48px] uno-min-w-[158px] uno-gap-3 uno-pl-5 uno-pr-1 uno-py-1 max-md:uno-h-[44px] max-md:uno-min-w-[140px] max-md:uno-gap-2 max-md:uno-pl-[14px] max-md:uno-pr-[6px] max-md:uno-justify-between uno-font-medium",
          "icon-size": 40,
          "hover-class": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("common.getStarted"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("common.getStarted")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="course-card__footer__link" data-v-14edeb18><span class="course-card__footer__link-text" data-v-14edeb18>${ssrInterpolate(_ctx.$t("common.viewResults"))}</span></div>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/common/check-mark-1.png",
          alt: "check-mark",
          width: "64",
          height: "64",
          class: "max-sm:hidden max-xs:hidden"
        }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/common/check-mark-1.png",
          alt: "check-mark",
          width: "24",
          height: "24",
          class: "hidden max-sm:block max-xs:block"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.course.footerType === 4) {
        _push(`<!--[--><div class="course-card__footer__meta" data-v-14edeb18><span class="course-card__footer__meta-item" data-v-14edeb18>${ssrInterpolate(__props.course.lessons ?? 10)} ${ssrInterpolate(_ctx.$t("common.lessons"))}</span><span class="course-card__footer__meta-item" data-v-14edeb18>${ssrInterpolate(__props.course.duration ?? "2 weeks")}</span>`);
        if (__props.course.certificate !== false) {
          _push(`<span class="course-card__footer__meta-item" data-v-14edeb18>${ssrInterpolate(_ctx.$t("common.certificate"))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="course-card__footer" data-v-14edeb18><div class="course-card__footer__row" data-v-14edeb18><div class="course-card__footer__left" data-v-14edeb18><div class="course-card__footer__actions" data-v-14edeb18>`);
        _push(ssrRenderComponent(_component_AppArrowButton, {
          variant: "primary",
          class: "uno-h-[48px] uno-min-w-[158px] uno-gap-3 uno-pl-5 uno-pr-1 uno-py-1 max-md:uno-h-[44px] max-md:uno-min-w-[140px] max-md:uno-gap-2 max-md:uno-pl-[14px] max-md:uno-pr-[6px] max-md:uno-justify-between uno-font-medium",
          "icon-size": 40,
          "hover-class": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("common.getStarted"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("common.getStarted")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="course-card__footer__people" data-v-14edeb18><div class="course-card__footer__avatars" data-v-14edeb18><!--[-->`);
        ssrRenderList(__props.course.avatars?.slice(0, 3) ?? ["/images/home/8.png", "/images/home/11.png", "/images/about/3.png"], (a, idx) => {
          _push(`<div class="course-card__footer__avatar" data-v-14edeb18><img${ssrRenderAttr("src", a)}${ssrRenderAttr("alt", "avatar-" + (idx + 1))} data-v-14edeb18></div>`);
        });
        _push(`<!--]--></div><p class="course-card__footer__people-text" data-v-14edeb18>${ssrInterpolate(__props.course.finishedText ?? `3067
                  ${_ctx.$t("common.finished")}`)}</p></div></div></div></div></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/course/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-14edeb18"]]), { __name: "CourseCard" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo.courses.title"),
      description: () => t("seo.courses.description")
    });
    const recommended = ref({
      title: "Budgeting",
      description: "Budgeting is a foundational aspect of financial planning, bboth for individuals and organizations. In this lesson, we will explore the basics of budgeting, its role in setting finarcial goals, and how it helps in managing income and expenses effectively",
      lessons: 10,
      duration: "2 weeks",
      certificate: true,
      image: "/images/home/1.png",
      avatars: ["/images/home/8.png", "/images/home/11.png", "/images/about/3.png"]
    });
    const courses = ref([
      {
        id: 1,
        title: "People Leadership vs. Management",
        description: "Learn the difference between leadership and management to inspire teams and drive outcomes.",
        image: "/images/courses/1.png",
        points: 20,
        ctaTheme: "dark",
        footerType: 1
      },
      {
        id: 1,
        title: "People Leadership vs. Management",
        description: "Learn the difference between leadership and management to inspire teams and drive outcomes.",
        image: "/images/courses/1.png",
        points: 20,
        percent: 10,
        completedLessons: 1,
        lessons: 10,
        ctaTheme: "dark",
        footerType: 2
      },
      {
        id: 1,
        title: "People Leadership vs. Management",
        description: "Learn the difference between leadership and management to inspire teams and drive outcomes.",
        image: "/images/courses/1.png",
        points: 20,
        ctaTheme: "dark",
        footerType: 3
      },
      {
        id: 1,
        title: "People Leadership vs. Management",
        description: "Learn the difference between leadership and management to inspire teams and drive outcomes.",
        image: "/images/courses/1.png",
        points: 20,
        ctaTheme: "dark",
        footerType: 4,
        lessons: 10,
        duration: "2 weeks",
        certificate: true,
        avatars: ["/images/home/8.png", "/images/home/11.png", "/images/about/3.png"],
        finishedText: "3067 people already finished it"
      }
    ]);
    const sortOrder = ref("popular");
    const sortedCourses = computed(() => {
      const list = [...courses.value];
      if (sortOrder.value === "duration") {
        return list.sort((a, b) => (parseInt(a.duration) || 0) - (parseInt(b.duration) || 0));
      }
      return list;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppArrowButton = __nuxt_component_3;
      const _component_NuxtImg = __nuxt_component_6;
      const _component_CourseCard = __nuxt_component_2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "uno-py-64px" }, _attrs))}><section class="uno-py-10 page-container"><div class="uno-flex uno-justify-start uno-items-center uno-flex-col uno-gap-[15px]"><div class="uno-w-full"><p class="uno-text-[var(--ui-muted-foreground)] uno-font-[&#39;Outfit&#39;] uno-font-medium">${ssrInterpolate(_ctx.$t("pages.course.recommendedForYou"))}</p></div><div class="uno-w-full uno-flex uno-justify-between uno-items-start uno-flex-col md:uno-flex-row uno-gap-6 md:uno-gap-[56px] uno-p-6 md:uno-p-[32px] uno-bg-white uno-rounded-3xl uno-shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]"><div class="uno-flex uno-flex-col md:uno-flex-row uno-gap-6 md:uno-gap-[56px] uno-w-full md:uno-w-642px"><div class="uno-flex uno-flex-col uno-gap-6"><div class="uno-flex uno-flex-col uno-gap-4"><p class="uno-text-[var(--ui-foreground)] uno-text-2xl md:uno-text-5xl uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2]">${ssrInterpolate(recommended.value.title)}</p><p class="uno-text-[var(--ui-muted-foreground)] uno-text-sm uno-font-[&#39;Outfit&#39;]">${ssrInterpolate(recommended.value.description)}</p></div><div class="uno-flex uno-flex-row uno-gap-6"><span class="uno-text-[var(--ui-foreground)] uno-font-[&#39;Outfit&#39;] uno-font-medium">${ssrInterpolate(recommended.value.lessons)} ${ssrInterpolate(_ctx.$t("pages.course.lessons"))}</span><span class="uno-text-[var(--ui-foreground)] uno-font-[&#39;Outfit&#39;] uno-font-medium">${ssrInterpolate(recommended.value.duration)}</span><span class="uno-text-[var(--ui-foreground)] uno-font-[&#39;Outfit&#39;] uno-font-medium">${ssrInterpolate(_ctx.$t("pages.course.certificate"))}</span></div><div class="uno-flex uno-items-center uno-flex-row uno-flex-wrap md:uno-flex-nowrap uno-gap-4 md:uno-gap-6 uno-mt-2">`);
      _push(ssrRenderComponent(_component_AppArrowButton, {
        class: "uno-h-[48px] md:uno-h-[56px] uno-gap-3 uno-py-1.5 uno-pr-1.5 uno-pl-[16px] md:uno-pl-[20px] uno-font-['Outfit'] uno-font-medium",
        "hover-class": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("common.getStarted"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("common.getStarted")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="uno-flex uno-items-center uno-flex-row uno-gap-1 md:uno-gap-2 uno-rounded-xl uno-mt-3 md:uno-mt-0"><div class="uno-flex uno-items-center uno-flex-row"><!--[-->`);
      ssrRenderList(recommended.value.avatars, (a, idx) => {
        _push(`<div class="${ssrRenderClass(["uno-w-[20px] uno-h-[20px] md:uno-w-[24px] md:uno-h-[24px] uno-bg-white uno-border-solid uno-border-white uno-border uno-rounded-full uno-overflow-hidden", idx > 0 ? "uno--ml-1 md:uno--ml-2" : ""])}">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: a,
          alt: "avatar",
          class: "uno-w-full uno-h-full uno-object-cover"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><p class="uno-text-[var(--ui-muted-foreground)] uno-text-[12px] md:uno-text-[12px] uno-font-[&#39;Outfit&#39;] uno-text-center md:uno-text-left"> 3067 people already finished it</p></div></div></div></div>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/courses/1.png",
        alt: "image",
        width: "425",
        height: "270"
      }, null, _parent));
      _push(`</div></div></section><section class="uno-pt-[32px] uno-pb-[120px] uno-bg-[var(--color-gray-9)]"><div class="uno-mx-auto page-container"><p class="uno-text-[var(--ui-muted-foreground)] uno-text-xl uno-font-[&#39;Outfit&#39;] uno-font-medium">${ssrInterpolate(_ctx.$t("pages.course.allCourses"))}</p><div class="uno-mt-4"><div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-2 uno-gap-[40px_24px]"><!--[-->`);
      ssrRenderList(sortedCourses.value, (course) => {
        _push(ssrRenderComponent(_component_CourseCard, {
          key: course.id,
          course
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CQ6pYYKG.mjs.map
