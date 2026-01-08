import { _ as __nuxt_component_3 } from './AppArrowButton-lIHrE8JJ.mjs';
import { d as _export_sfc, u as useI18n, a as useLocalePath, e as useSeoMeta, _ as __nuxt_component_6 } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_4 } from './TestimonialsSection-B9mBv91_.mjs';
import { _ as __nuxt_component_3$1 } from './FAQSection-CDBrxtsV.mjs';
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

const baseText = "An exceptional platform for career development. The current curriculum, skilled instructors, and hands-on learning are truly rewarding.";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const localePath = useLocalePath();
    useSeoMeta({
      title: () => t("seo.home.title"),
      description: () => t("seo.home.description")
    });
    const reviews = Array.from({ length: 30 }, (_, i) => ({
      text: baseText,
      avatarUrl: `https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${i % 99 + 1}.jpg`,
      name: "Brandon Michael",
      role: "UX/UI Designer"
    }));
    const heroAvatars = Array.from({ length: 6 }, (_, i) => ({
      src: `/images/home/hero/hero-${i + 1}.png`,
      alt: `卡通人物${i + 1}`
    }));
    const statsItems = [
      {
        value: "241K+",
        color: "#009D77",
        labelKey: "pages.home.stats.testsToday"
      },
      {
        value: "172M+",
        color: "#EA4C89",
        labelKey: "pages.home.stats.testsUS"
      },
      {
        value: "1460M+",
        color: "#FD9AC0",
        labelKey: "pages.home.stats.totalTests"
      },
      {
        value: "91.2%",
        color: "#B273F2",
        labelKey: "pages.home.stats.accurateRate"
      }
    ];
    const whyCards = [
      {
        icon: "/images/home/3.png",
        alt: "Better decision-making icon",
        iconColor: "uno-text-amber-500",
        titleKey: "pages.home.why.small1.title",
        descKey: "pages.home.why.small1.desc"
      },
      {
        icon: "/images/home/4.png",
        alt: "Enhanced relationships icon",
        iconColor: "uno-text-pink-500",
        titleKey: "pages.home.why.small2.title",
        descKey: "pages.home.why.small2.desc"
      },
      {
        icon: "/images/home/5.png",
        alt: "Career satisfaction icon",
        iconColor: "uno-text-indigo-500",
        titleKey: "pages.home.why.small3.title",
        descKey: "pages.home.why.small3.desc"
      }
    ];
    const howSteps = [
      {
        step: 1,
        bgClass: "uno-bg-[#E8FAF5]",
        textClass: "uno-text-[#009D77]",
        titleKey: "pages.home.how.step1.title",
        descKey: "pages.home.how.step1.desc"
      },
      {
        step: 2,
        bgClass: "uno-bg-[#FFF5F9]",
        textClass: "uno-text-[#EA4C89]",
        titleKey: "pages.home.how.step2.title",
        descKey: "pages.home.how.step2.desc"
      },
      {
        step: 3,
        bgClass: "uno-bg-[#F5EFFC]",
        textClass: "uno-text-[#932EFA]",
        titleKey: "pages.home.how.step3.title",
        descKey: "pages.home.how.step3.desc"
      }
    ];
    const receiveCards = [
      {
        icon: "/images/home/7.png",
        alt: "Comprehensive Personality Report",
        titleKey: "pages.home.receive.card1.title",
        descKey: "pages.home.receive.card1.desc"
      },
      {
        icon: "/images/home/8.png",
        alt: "Personalized Course Recommendations",
        titleKey: "pages.home.receive.card3.title",
        descKey: "pages.home.receive.card3.desc"
      },
      {
        icon: "/images/home/9.png",
        alt: "Skill Assessment Tests",
        titleKey: "pages.home.receive.card5.title",
        descKey: "pages.home.receive.card5.desc"
      },
      {
        icon: "/images/home/10.png",
        alt: "Practical Daily Challenges",
        titleKey: "pages.home.receive.card2.title",
        descKey: "pages.home.receive.card2.desc"
      },
      {
        icon: "/images/home/11.png",
        alt: "Learning and Development Library",
        titleKey: "pages.home.receive.card4.title",
        descKey: "pages.home.receive.card4.desc"
      },
      {
        icon: "/images/home/12.png",
        alt: "Certificates of Achievement",
        titleKey: "pages.home.receive.card6.title",
        descKey: "pages.home.receive.card6.desc"
      }
    ];
    const faqItems = [
      {
        question: "Can I Track My Assignments and Grades?",
        answer: 'Yes, the LMS offers a "Gradebook" where students can view their grades, mentor feedback on assignments, and class attendance data. You can view your grade and comments for each submission.'
      },
      {
        question: "Does the LMS support video lessons and live classes?",
        answer: "Yes, it supports both pre-recorded video lessons and live classes with interactive features."
      },
      {
        question: "How can I communicate with my instructor?",
        answer: "You can use messaging tools, discussion boards, and scheduled office hours to communicate."
      },
      {
        question: "What support is available for students and instructors?",
        answer: "Help center articles, email support, and live chat are available for both students and instructors."
      },
      {
        question: "Are there interactive features for students?Are there interactive features for students?Are there interactive features for students?Are there interactive features for students?Are there interactive features for students?",
        answer: "Quizzes, assignments, polls, and peer discussions are available to enhance engagement.Quizzes, assignments, polls, and peer discussions are available to enhance engagement.Quizzes, assignments, polls, and peer discussions are available to enhance engagement.Quizzes, assignments, polls, and peer discussions are available to enhance engagement.Quizzes, assignments, polls, and peer discussions are available to enhance engagement.Quizzes, assignments, polls, and peer discussions are available to enhance engagement.Quizzes, assignments, polls, and peer discussions are available to enhance engagement."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppArrowButton = __nuxt_component_3;
      const _component_NuxtImg = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "uno-py-12 sm:uno-py-16 md:uno-py-24 lg:uno-py-32" }, _attrs))} data-v-47e838e2><div class="page-container uno-relative uno-rounded-xl uno-border uno-border-transparent uno-px-4 sm:uno-px-6 md:uno-px-8" data-v-47e838e2><div class="uno-flex uno-justify-start uno-items-center uno-flex-col" data-v-47e838e2><div class="uno-flex uno-justify-start uno-items-center uno-flex-col uno-gap-12px sm:uno-gap-16px md:uno-gap-24px" data-v-47e838e2><h1 class="uno-text-[#011813] uno-text-xl sm:uno-text-2xl md:uno-text-5xl lg:uno-text-7xl uno-font-[&#39;Outfit&#39;] uno-text-center uno-font-semibold" data-v-47e838e2>${ssrInterpolate(_ctx.$t("pages.home.title"))}</h1><h2 class="uno-text-[#4E5255] uno-font-[400] uno-text-xs sm:uno-text-sm md:uno-text-lg uno-font-[&#39;Outfit&#39;] uno-text-center" data-v-47e838e2>${ssrInterpolate(_ctx.$t("pages.home.description"))}</h2></div>`);
      _push(ssrRenderComponent(_component_AppArrowButton, {
        variant: "primary",
        class: "uno-m-t-32px sm:uno-m-t-48px md:uno-m-t-72px uno-gap-[8px] sm:uno-gap-[12px] md:uno-gap-[18px] uno-py-2 sm:uno-py-3 md:uno-py-4 uno-pr-2 sm:uno-pr-3 md:uno-pr-3 uno-pl-[20px] sm:uno-pl-[24px] md:uno-pl-[48px] uno-text-[14px] sm:uno-text-[18px] md:uno-text-[32px] uno-font-['Outfit'] uno-font-medium",
        "icon-size": 72,
        to: unref(localePath)("/test")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Take the Test `);
          } else {
            return [
              createTextVNode(" Take the Test ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="page-container uno-hero-section uno-w-full uno-my-12" data-v-47e838e2><div class="uno-flex uno-justify-center uno-items-center uno-gap-2 sm:uno-gap-3 md:uno-gap-4 lg:uno-gap-6 xl:uno-gap-6" data-v-47e838e2><!--[-->`);
      ssrRenderList(unref(heroAvatars), (hero, index2) => {
        _push(`<div class="uno-hero-avatar uno-relative uno-w-26 uno-h-34 md:uno-w-32 md:uno-h-48 lg:uno-w-32 lg:uno-h-48 xl:uno-w-40 xl:uno-h-64 uno-overflow-hidden uno-flex uno-items-center uno-justify-center" data-v-47e838e2>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: hero.src,
          alt: hero.alt,
          class: "uno-w-full uno-h-full uno-object-contain"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="uno-data-stats uno-bg-[#F5F8FF] uno-my-12" data-v-47e838e2><div class="page-container uno-px-4" data-v-47e838e2><div class="uno-grid uno-grid-cols-2 md:uno-grid-cols-4 uno-gap-3 sm:uno-gap-4 md:uno-gap-6" data-v-47e838e2><!--[-->`);
      ssrRenderList(statsItems, (item, index2) => {
        _push(`<div class="uno-text-center uno-p-3 sm:uno-p-4 md:uno-p-6 uno-flex uno-flex-col uno-justify-center uno-items-center" data-v-47e838e2><div style="${ssrRenderStyle({ color: item.color })}" class="uno-text-lg sm:uno-text-2xl md:uno-text-4xl lg:uno-text-5xl uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-m-b-1px sm:uno-m-b-2px md:uno-m-b-4px" data-v-47e838e2>${ssrInterpolate(item.value)}</div><div class="uno-text-[#4E5255] uno-text-xs sm:uno-text-sm md:uno-text-base lg:uno-text-lg uno-font-[&#39;Outfit&#39;]" data-v-47e838e2>${ssrInterpolate(_ctx.$t(item.labelKey))}</div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="page-container uno-intro-section uno-py-12 sm:uno-py-16 md:uno-py-20 lg:uno-py-24" data-v-47e838e2><div class="uno-px-4" data-v-47e838e2><div class="uno-mb-12 sm:uno-mb-16 md:uno-mb-20 lg:uno-mb-24" data-v-47e838e2><div class="uno-max-w-[800px] uno-mx-auto" data-v-47e838e2><h2 class="uno-text-[#011813] uno-text-2xl sm:uno-text-3xl md:uno-text-4xl lg:uno-text-5xl uno-font-[&#39;Outfit&#39;] uno-text-center uno-font-semibold uno-m-b-6px sm:uno-m-b-8px md:uno-m-b-12px" data-v-47e838e2>${ssrInterpolate(_ctx.$t("pages.home.why.title"))}</h2><p class="uno-text-[#4E5255] uno-font-[&#39;Outfit&#39;] uno-text-center uno-text-sm sm:uno-text-base uno-mb-[56px] sm:uno-mb-[80px]" style="${ssrRenderStyle({ "white-space": "pre-line" })}" data-v-47e838e2>${ssrInterpolate(_ctx.$t("pages.home.why.desc"))}</p></div><div class="uno-shadow-lg uno-mb-6 sm:uno-mb-8 md:uno-mb-10 lg:uno-mb-12 uno-w-full uno-bg-[#F8F8F8] uno-border-solid uno-border-[#E7E7E8] uno-border uno-rounded-[32px] uno-p-[24px] uno-relative uno-overflow-hidden" data-v-47e838e2><div class="uno-flex uno-flex-col md:uno-flex-row uno-items-center uno-gap-8 md:uno-gap-12" data-v-47e838e2><div class="uno-w-full md:uno-w-[45%] uno-flex uno-flex-col uno-justify-center uno-relative" data-v-47e838e2><div class="uno-w-12 uno-h-12 uno-bg-[#E0F2EF] uno-rounded-xl uno-flex uno-items-center uno-justify-center uno-mb-6" data-v-47e838e2>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/home/2.png",
        alt: "decor",
        width: "48",
        height: "48",
        class: "uno-w-10 uno-h-10 md:uno-w-14 md:uno-h-14 uno-object-contain"
      }, null, _parent));
      _push(`</div><h3 class="uno-text-[24px] sm:uno-text-[28px] md:uno-text-[32px] uno-font-[&#39;Outfit&#39;] uno-font-bold uno-mb-4 uno-text-[#011813] uno-leading-tight" data-v-47e838e2>${ssrInterpolate(_ctx.$t("pages.home.why.main.title"))}</h3><p class="uno-text-[#4E5255] uno-text-base sm:uno-text-lg uno-mb-6 uno-leading-relaxed" data-v-47e838e2>${ssrInterpolate(_ctx.$t("pages.home.why.main.desc"))}</p><div class="uno-w-full uno-h-[1px] uno-bg-[#E7E7E8] uno-mb-6" data-v-47e838e2></div><div class="uno-relative uno-inline-flex" data-v-47e838e2>`);
      _push(ssrRenderComponent(_component_AppArrowButton, {
        class: "uno-pl-6 uno-pr-2 uno-py-2 uno-gap-3",
        "icon-size": 44,
        to: unref(localePath)("/test"),
        "hover-class": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="uno-font-[&#39;Outfit&#39;] uno-font-medium uno-text-[16px]" data-v-47e838e2${_scopeId}>${ssrInterpolate(_ctx.$t("common.getStarted"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "uno-font-['Outfit'] uno-font-medium uno-text-[16px]" }, toDisplayString(_ctx.$t("common.getStarted")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/home/1.png",
        alt: "Self-awareness illustration",
        width: "564",
        height: "376",
        class: "uno-object-contain uno-rounded-2xl"
      }, null, _parent));
      _push(`</div></div><div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-3 sm:uno-gap-4 md:uno-gap-6 lg:uno-gap-8 uno-px-2 sm:uno-px-0" data-v-47e838e2><!--[-->`);
      ssrRenderList(whyCards, (card, index2) => {
        _push(`<div class="uno-bg-[#F8F8F8] uno-border-solid uno-border-[#E7E7E8] uno-border uno-rounded-3xl uno-p-12px sm:uno-p-16px md:uno-p-24px uno-shadow-lg uno-relative" data-v-47e838e2><div class="${ssrRenderClass([card.iconColor, "uno-mb-2 sm:uno-mb-3 md:uno-mb-4"])}" data-v-47e838e2>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: card.icon,
          alt: card.alt,
          width: "32",
          height: "32",
          class: "sm:uno-w-[40px] sm:uno-h-[40px] md:uno-w-[56px] md:uno-h-[56px]"
        }, null, _parent));
        _push(`</div><h3 class="uno-text-base sm:uno-text-lg md:uno-text-[32px] uno-font-[&#39;Outfit&#39;] uno-font-bold uno-mb-2 sm:uno-mb-3" data-v-47e838e2>${ssrInterpolate(_ctx.$t(card.titleKey))}</h3><p class="uno-text-gray-600 uno-text-xs sm:uno-text-sm md:uno-text-base" data-v-47e838e2>${ssrInterpolate(_ctx.$t(card.descKey))}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="uno-flex uno-flex-col md:uno-flex-row uno-gap-8 sm:uno-gap-12 uno-items-center" data-v-47e838e2><div class="uno-w-full md:uno-w-1/2" data-v-47e838e2><h2 class="uno-text-[32px] sm:uno-text-[48px] md:uno-text-[48px] uno-font-[&#39;Outfit&#39;] uno-font-bold uno-mb-6 sm:uno-mb-8" data-v-47e838e2>${ssrInterpolate(_ctx.$t("pages.home.how.title"))}</h2><p class="uno-text-gray-600 uno-mb-8 sm:uno-mb-12" data-v-47e838e2>${ssrInterpolate(_ctx.$t("pages.home.how.desc"))}</p>`);
      _push(ssrRenderComponent(_component_AppArrowButton, {
        class: "uno-m-t-12px sm:uno-m-t-16px md:uno-m-t-24px uno-gap-[6px] sm:uno-gap-[8px] md:uno-gap-[12px] uno-py-2 sm:uno-py-2 uno-pr-[3px] sm:uno-pr-[4px] md:uno-pr-[6px] uno-pl-[12px] sm:uno-pl-[16px] md:uno-pl-[24px] uno-text-[12px] sm:uno-text-[14px] md:uno-text-[16px] uno-font-['Outfit'] uno-font-medium",
        to: unref(localePath)("/test"),
        "icon-size": 44,
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
      _push(`</div><div class="uno-w-full md:uno-w-1/2" data-v-47e838e2><div class="uno-flex uno-justify-start uno-items-end uno-flex-col uno-gap-4 sm:uno-gap-6" data-v-47e838e2><!--[-->`);
      ssrRenderList(howSteps, (item, index2) => {
        _push(`<div style="${ssrRenderStyle({ "flex-shrink": "0" })}" class="uno-w-full uno-flex uno-justify-start uno-items-center uno-flex-row uno-gap-[12px] sm:uno-gap-[12px] uno-py-16px sm:uno-py-24px uno-px-16px sm:uno-px-24px uno-bg-[#FFFFFF] uno-rounded-2xl uno-shadow-[0_20px_40px_0_rgba(0,157,119,0.08)] uno-border uno-border-solid uno-border-[#F0F0F0]" data-v-47e838e2><div style="${ssrRenderStyle({ "flex": "none" })}" class="${ssrRenderClass([item.bgClass, "uno-w-[48px] uno-h-[48px] sm:uno-w-[64px] sm:uno-h-[64px] uno-flex uno-justify-center uno-items-center uno-rounded-[24px] sm:uno-rounded-[50px] uno-flex uno-items-center uno-justify-center"])}" data-v-47e838e2><span class="${ssrRenderClass([item.textClass, "uno-text-3xl sm:uno-text-[36px] uno-font-['Outfit'] uno-font-semibold uno-mb-[6px]"])}" data-v-47e838e2>${ssrInterpolate(item.step)}</span></div><div class="uno-flex uno-justify-start uno-items-start uno-flex-col uno-gap-1 sm:uno-gap-2" data-v-47e838e2><p class="uno-text-[#011813] uno-text-xl sm:uno-text-2xl uno-font-[&#39;Outfit&#39;] uno-font-semibold" data-v-47e838e2>${ssrInterpolate(_ctx.$t(item.titleKey))}</p><p class="uno-w-full uno-text-[#4E5255] uno-font-[&#39;Outfit&#39;]" data-v-47e838e2>${ssrInterpolate(_ctx.$t(item.descKey))}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div><div class="uno-receive-section uno-bg-gray-5 uno-relative" data-v-47e838e2>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/theme/home/receive-box-bg-h5.png",
        alt: "",
        "aria-hidden": "true",
        width: "375",
        height: "1920",
        class: "uno-absolute uno-inset-0 uno--z-10 uno-pointer-events-none uno-object-cover uno-object-center uno-block md:uno-hidden",
        "uno-preload": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/theme/home/receive-box-bg-pc.png",
        alt: "",
        "aria-hidden": "true",
        width: "100vw",
        height: "100%",
        class: "uno-w-full uno-h-[100%] uno-absolute uno-top-0 uno-left-0 uno--z-10 uno-pointer-events-none uno-hidden md:uno-block",
        "uno-preload": ""
      }, null, _parent));
      _push(`<div class="page-container uno-px-4 uno-py-8 sm:uno-py-12 md:uno-py-16 lg:uno-py-20 xl:uno-py-24 relative z-10" data-v-47e838e2><h2 class="uno-text-xl sm:uno-text-2xl md:uno-text-[48px] uno-font-[&#39;Outfit&#39;] uno-font-bold uno-text-center uno-mb-2 sm:uno-mb-3 md:uno-mb-4" data-v-47e838e2>${ssrInterpolate(_ctx.$t("pages.home.receive.title"))}</h2><p class="uno-text-center uno-text-gray-600 uno-text-xs sm:uno-text-sm md:uno-text-base uno-mb-6 sm:uno-mb-8 md:uno-mb-16 uno-max-w-3xl uno-mx-auto" data-v-47e838e2>${ssrInterpolate(_ctx.$t("pages.home.receive.desc"))}</p><div class="uno-grid uno-grid-cols-1 md:uno-grid-cols-3 uno-gap-[24px] sm:uno-gap-[24px] md:uno-gap-[24px]" data-v-47e838e2><!--[-->`);
      ssrRenderList(receiveCards, (card, index2) => {
        _push(`<div class="uno-bg-white uno-rounded-[32px] uno-shadow-[0_2px_8px_rgba(0,0,0,0.04)] uno-p-[32px] uno-border uno-border-solid uno-border-[#E7E7E8] uno-flex uno-flex-col uno-items-center uno-justify-between uno-text-center uno-min-h-[256px]" data-v-47e838e2><div class="uno-w-64px uno-h-64px sm:uno-w-64px sm:uno-h-64px uno-flex uno-items-center uno-justify-center uno-bg-gray-50 uno-rounded-full uno-mb-8px" data-v-47e838e2>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: card.icon,
          alt: card.alt,
          width: "64",
          height: "64"
        }, null, _parent));
        _push(`</div><h3 class="uno-text-lg sm:uno-text-xl md:uno-text-[20px] uno-font-[&#39;Outfit&#39;] uno-font-500 uno-leading-tight uno-px-2 uno-mb-12px" data-v-47e838e2>${ssrInterpolate(_ctx.$t(card.titleKey))}</h3><p class="uno-text-gray-500 uno-text-sm sm:uno-text-base uno-font-[&#39;Outfit&#39;] uno-leading-relaxed" data-v-47e838e2>${ssrInterpolate(_ctx.$t(card.descKey))}</p></div>`);
      });
      _push(`<!--]--></div></div></div>`);
      _push(ssrRenderComponent(__nuxt_component_4, {
        title: _ctx.$t("pages.home.testimonials.title"),
        description: _ctx.$t("pages.home.testimonials.description"),
        rating: 5,
        reviews: unref(reviews)
      }, null, _parent));
      _push(ssrRenderComponent(__nuxt_component_3$1, {
        title: _ctx.$t("pages.home.faq.title"),
        description: _ctx.$t("pages.home.faq.description"),
        items: faqItems
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-47e838e2"]]);

export { index as default };
//# sourceMappingURL=index-BfaM1EQQ.mjs.map
