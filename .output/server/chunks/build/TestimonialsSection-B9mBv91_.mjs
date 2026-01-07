import { q as __nuxt_component_0$3 } from './server.mjs';
import { defineComponent, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TestimonialsSection",
  __ssrInlineRender: true,
  props: {
    title: { default: "Trusted by 20,000+ customers" },
    description: { default: "Be always were in form of volunteers range time is mediatingappositive the in our affidavit how solitary saw more in his not" },
    rating: { default: 5 },
    reviews: {}
  },
  setup(__props) {
    const props = __props;
    const all = computed(() => props.reviews || []);
    const mid = computed(() => Math.ceil(all.value.length / 2));
    computed(() => all.value.slice(0, mid.value));
    computed(() => all.value.slice(mid.value));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "uno-testimonials-section uno-py-16 sm:uno-py-20 md:uno-py-24 uno-bg-[var(--ui-background)] uno-w-full uno-mx-auto uno-overflow-hidden" }, _attrs))}><div class="uno-px-4"><div class="uno-text-center uno-mb-16"><h2 class="uno-text-[48px] uno-font-[&#39;Outfit&#39;] uno-font-bold uno-mb-4 uno-text-[var(--ui-foreground)]">${ssrInterpolate(__props.title)}</h2><p class="uno-text-[var(--ui-muted-foreground)] uno-max-w-3xl uno-mx-auto">${ssrInterpolate(__props.description)}</p></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TestimonialsSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main, { __name: "TestimonialsSection" });

export { __nuxt_component_4 as _ };
//# sourceMappingURL=TestimonialsSection-B9mBv91_.mjs.map
