import { d as _export_sfc, u as useI18n, a as useSeoMeta, _ as __nuxt_component_6 } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "analyzing",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo.test.analyzing.title"),
      description: () => t("seo.test.analyzing.description")
    });
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container uno-py-6" }, _attrs))} data-v-28d2c727><div class="uno-flex uno-flex-col uno-items-center uno-justify-center uno-py-6 md:uno-py-12 uno-px-4 md:uno-px-6" data-v-28d2c727>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/test/4.png",
        alt: "test image",
        width: "450",
        height: "450"
      }, null, _parent));
      _push(`<div class="uno-w-full uno-max-w-md md:uno-max-w-lg uno-px-2" data-v-28d2c727><div class="uno-w-full uno-h-2 uno-bg-gray-100 uno-rounded-full uno-overflow-hidden uno-shadow-sm" data-v-28d2c727><div class="uno-h-full uno-bg-green-500 uno-rounded-full uno-w-[70%] uno-transition-all uno-duration-1000 uno-ease-in-out uno-animate-pulse" data-v-28d2c727></div></div><p class="uno-text-center uno-text-[#8D8E8F] uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-leading-[1.2] uno-mt-3 md:uno-mt-4 uno-text-[10px] md:uno-text-xs uno-max-w-[70%] md:uno-max-w-[60%] uno-mx-auto" data-v-28d2c727> We are analyzing your answers and preparing your personality type report...</p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test/analyzing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const analyzing = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-28d2c727"]]);

export { analyzing as default };
//# sourceMappingURL=analyzing-DQV87h1H.mjs.map
