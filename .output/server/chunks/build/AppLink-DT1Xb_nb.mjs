import { a as useLocalePath, J as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppLink",
  __ssrInlineRender: true,
  props: {
    to: {
      type: [Object, String],
      default: () => ({})
    },
    isLink: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const props = __props;
    const localePath = useLocalePath();
    const finalTo = computed(() => {
      const t = props.to;
      if (!t) return "";
      return typeof t === "string" ? localePath(t) : localePath(t);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      if (__props.isLink) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ to: unref(finalTo) }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "AppLink" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=AppLink-DT1Xb_nb.mjs.map
