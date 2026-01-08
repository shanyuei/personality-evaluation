import { _ as __nuxt_component_6 } from './server.mjs';
import { defineComponent, computed, createVNode, resolveDynamicComponent, mergeProps, unref, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppArrowButton",
  __ssrInlineRender: true,
  props: {
    to: {},
    iconSize: { default: 44 },
    variant: { default: "primary" },
    imgClass: { default: "" },
    hoverClass: { default: "" },
    iconSrc: { default: "/images/common/go-arrow-1.png" },
    preset: {}
  },
  setup(__props) {
    const props = __props;
    const presetMap = {
      header: {
        variant: "outline",
        hoverClass: "hover:uno-bg-[var(--ui-foreground)] hover:uno-text-white !hover:uno-opacity-100",
        iconSrc: "/images/header/go-icon-1.png",
        iconSize: 40,
        extraClass: "uno-h-[48px] uno-gap-3 uno-py-1 uno-pr-1 uno-pl-[20px] uno-rounded-[100px]"
      }
    };
    const variantBaseClasses = {
      primary: "uno-bg-[var(--ui-primary)] uno-text-white",
      outline: "uno-border uno-border-[var(--ui-foreground)] uno-bg-transparent uno-text-[var(--ui-foreground)]",
      ghost: "uno-bg-transparent",
      dark: "uno-bg-[var(--ui-foreground)] uno-text-white"
    };
    const variantHoverClasses = {
      primary: "hover:uno-bg-[var(--ui-foreground)]",
      outline: "hover:uno-opacity-80",
      ghost: "hover:uno-bg-gray-100",
      dark: "hover:uno-opacity-90"
    };
    const presetConf = computed(() => props.preset ? presetMap[props.preset] : void 0);
    const finalVariant = computed(() => presetConf.value?.variant ?? props.variant);
    const finalBaseClass = computed(() => variantBaseClasses[finalVariant.value]);
    const finalVariantHoverClass = computed(() => variantHoverClasses[finalVariant.value]);
    const finalHoverClass = computed(() => [presetConf.value?.hoverClass, props.hoverClass].filter(Boolean).join(" "));
    const finalIconSrc = computed(() => presetConf.value?.iconSrc ?? props.iconSrc);
    const finalIconSize = computed(() => presetConf.value?.iconSize ?? props.iconSize);
    const presetExtraClass = computed(() => presetConf.value?.extraClass ?? "");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_6;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.to ? "AppLink" : "button"), mergeProps({
        to: __props.to,
        class: ["uno-group uno-inline-flex uno-items-center uno-justify-center uno-rounded-full uno-transition-all uno-duration-200 disabled:uno-opacity-50 disabled:uno-cursor-not-allowed", [
          unref(finalBaseClass),
          unref(finalVariantHoverClass),
          unref(finalHoverClass),
          unref(presetExtraClass)
        ]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: unref(finalIconSrc),
              alt: "arrow-right",
              width: unref(finalIconSize),
              height: unref(finalIconSize),
              class: ["uno-transform uno-transition-transform group-hover:uno-rotate-45", __props.imgClass]
            }, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(_component_NuxtImg, {
                src: unref(finalIconSrc),
                alt: "arrow-right",
                width: unref(finalIconSize),
                height: unref(finalIconSize),
                class: ["uno-transform uno-transition-transform group-hover:uno-rotate-45", __props.imgClass]
              }, null, 8, ["src", "width", "height", "class"])
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppArrowButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main, { __name: "AppArrowButton" });

export { __nuxt_component_3 as _ };
//# sourceMappingURL=AppArrowButton-lIHrE8JJ.mjs.map
