import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { d as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FAQSection",
  __ssrInlineRender: true,
  props: {
    title: { default: "Frequently Asked Questions" },
    description: { default: "" },
    items: {},
    accordion: { type: Boolean, default: true },
    defaultExpandedIndex: { default: 0 }
  },
  setup(__props) {
    const props = __props;
    const expandedIndex = ref(props.defaultExpandedIndex);
    const localItems = computed(() => props.items);
    const isExpanded = (i) => expandedIndex.value === i;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container uno-faq-section uno-py-16 sm:uno-py-20 md:uno-py-24" }, _attrs))} data-v-0cd62dc9><div class="uno-w-full md:uno-mx-auto md:uno-max-w-[80%]" data-v-0cd62dc9><div class="uno-text-center uno-mb-16" data-v-0cd62dc9><h2 class="uno-text-3xl md:uno-text-4xl uno-font-[&#39;Outfit&#39;] uno-font-bold uno-mb-3" data-v-0cd62dc9>${ssrInterpolate(__props.title)}</h2>`);
      if (__props.description) {
        _push(`<p class="uno-text-gray-600 uno-max-w-3xl uno-mx-auto" data-v-0cd62dc9>${ssrInterpolate(__props.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="uno-max-w-3xl uno-w-full uno-mx-auto" data-v-0cd62dc9><!--[-->`);
      ssrRenderList(unref(localItems), (item, idx) => {
        _push(`<div class="${ssrRenderClass([isExpanded(idx) ? "item-expanded" : "item-collapsed", "uno-w-full uno-rounded-lg uno-mb-4 uno-overflow-hidden uno-transition-shadow uno-relative"])}" data-v-0cd62dc9>`);
        if (isExpanded(idx)) {
          _push(`<div aria-hidden="true" style="${ssrRenderStyle({ "flex": "none", "background": "linear-gradient(90deg, rgba(234,76,137,0.12) 0%, rgba(0,157,119,0.38) 49%, rgba(147,46,250,0.12) 100%)", "left": "0", "right": "0", "margin": "0 auto", "pointer-events": "none" })}" class="uno-hidden md:uno-block uno-w-full uno-h-[160px] uno-rounded-[48px] uno-shadow-[blur(48px)] uno-absolute" data-v-0cd62dc9></div>`);
        } else {
          _push(`<!---->`);
        }
        if (isExpanded(idx)) {
          _push(`<div data-v-0cd62dc9><div class="uno-flex uno-justify-start uno-items-start uno-flex-col uno-relative" data-v-0cd62dc9><div class="uno-flex uno-self-stretch uno-justify-start uno-items-start uno-flex-col uno-gap-3 uno-py-[20px] uno-px-[24px] uno-bg-[#FFFFFF]" data-v-0cd62dc9><div style="${ssrRenderStyle({ "flex-shrink": "0" })}" class="uno-w-full uno-flex uno-justify-between uno-items-center uno-flex-row" data-v-0cd62dc9><p class="uno-text-[#009D77] uno-text-xl md:uno-text-2xl uno-font-[&#39;Outfit&#39;] uno-text-center uno-font-medium" data-v-0cd62dc9>${ssrInterpolate(item.question)}</p><svg xmlns="http://www.w3.org/2000/svg" uno-xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" uno-version="1.1" width="24" height="24" viewBox="0 0 24 24" data-v-0cd62dc9><defs data-v-0cd62dc9><clipPath id="master_svg0_0_17743" data-v-0cd62dc9><rect uno-x="0" uno-y="0" width="24" height="24" uno-rx="0" data-v-0cd62dc9></rect></clipPath></defs><g uno-clip-path="url(#master_svg0_0_17743)" data-v-0cd62dc9><g data-v-0cd62dc9><path d="M6,13L18,13L18,12.99980003Q18.098471,12.99979997,18.195050000000002,12.98058909Q18.291629999999998,12.96137822,18.382607,12.92369473Q18.473582,12.88601124,18.555459,12.8313033Q18.637335,12.776595350000001,18.706965,12.70696533Q18.776595999999998,12.6373353,18.831304,12.55545908Q18.886011,12.47358286,18.923695000000002,12.38260686Q18.961378,12.29163089,18.980589000000002,12.1950513Q18.9998,12.098471709,18.9998,12Q18.9998,11.901528291,18.980589000000002,11.8049487Q18.961378,11.70836911,18.923693999999998,11.61739314Q18.886011,11.52641714,18.831303,11.44454092Q18.776594,11.3626647,18.706964,11.29303467Q18.637334,11.223404649999999,18.555458,11.16869676Q18.473581,11.11398882,18.382606,11.07630533Q18.291629999999998,11.03862178,18.195050000000002,11.01941091Q18.098471,11.00020003,18,11.00019997L18,11L6,11L6,11.00019997Q5.901528291,11.00020003,5.8049487,11.01941091Q5.70836911,11.03862178,5.61739314,11.07630527Q5.52641714,11.11398876,5.44454092,11.1686967Q5.3626647,11.223404649999999,5.29303467,11.29303467Q5.22340465,11.3626647,5.16869676,11.44454092Q5.11398882,11.52641714,5.07630533,11.61739314Q5.03862178,11.70836911,5.0194109099999995,11.8049487Q5.00020003,11.901528291,5.00019997,12Q5.00020003,12.098471709,5.0194109099999995,12.1950513Q5.03862178,12.29163089,5.07630527,12.38260686Q5.11398876,12.47358286,5.1686967,12.55545908Q5.22340465,12.6373353,5.29303467,12.70696533Q5.3626647,12.776595350000001,5.44454092,12.83130324Q5.52641714,12.88601118,5.61739314,12.92369467Q5.70836911,12.96137822,5.8049487,12.98058909Q5.901528291,12.99979997,6,12.99980003L6,13Z" uno-fill-rule="evenodd" fill="#009D77" uno-fill-opacity="1" data-v-0cd62dc9></path></g></g></svg></div><p style="${ssrRenderStyle({ "flex-shrink": "0" })}" class="uno-self-stretch uno-text-[#4E5255] uno-font-[&#39;Outfit&#39;]" data-v-0cd62dc9>${ssrInterpolate(item.answer)}</p></div></div></div>`);
        } else {
          _push(`<div data-v-0cd62dc9><div class="uno-flex uno-justify-between uno-items-center uno-flex-row uno-py-[20px] uno-px-[24px] uno-bg-[#FFFFFF]" data-v-0cd62dc9><span class="uno-text-[#011813] uno-text-xl md:uno-text-2xl uno-font-[&#39;Outfit&#39;] uno-font-medium" data-v-0cd62dc9>${ssrInterpolate(item.question)}</span><svg xmlns="http://www.w3.org/2000/svg" uno-xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" uno-version="1.1" width="24" height="24" viewBox="0 0 24 24" data-v-0cd62dc9><defs data-v-0cd62dc9><clipPath id="master_svg0_0_17747" data-v-0cd62dc9><rect uno-x="0" uno-y="0" width="24" height="24" uno-rx="0" data-v-0cd62dc9></rect></clipPath></defs><g uno-clip-path="url(#master_svg0_0_17747)" data-v-0cd62dc9><g data-v-0cd62dc9><path d="M11.0001998,6Q11.0001993,5.901528291,11.0194101,5.8049487Q11.0386209,5.70836911,11.0763044,5.61739314Q11.1139879,5.52641714,11.1686959,5.44454092Q11.223403900000001,5.3626647,11.2930346,5.29303467Q11.362664200000001,5.22340465,11.444540499999999,5.16869676Q11.5264168,5.11398882,11.617392500000001,5.07630533Q11.7083683,5.03862178,11.8049483,5.0194109099999995Q11.9015284,5.00020003,12,5.00019997Q12.0984716,5.00020003,12.1950507,5.0194109099999995Q12.291630699999999,5.03862178,12.3826065,5.07630527Q12.4735823,5.11398876,12.5554585,5.1686967Q12.6373348,5.22340465,12.706965,5.29303467Q12.7765946,5.3626647,12.8313026,5.44454092Q12.886010200000001,5.52641714,12.923694099999999,5.61739314Q12.961378100000001,5.70836911,12.9805889,5.8049487Q12.9997997,5.901528291,12.9998002,6L13,6L13,11L18,11L18,11.0001998Q18.098471,11.0001998,18.195050000000002,11.0194106Q18.291629999999998,11.0386214,18.382607,11.0763049Q18.473582,11.1139884,18.555459,11.1686964Q18.637335,11.2234044,18.706965,11.2930346Q18.776595999999998,11.362664200000001,18.831304,11.444540499999999Q18.886011,11.5264168,18.923695000000002,11.617392500000001Q18.961378,11.7083683,18.980589000000002,11.8049483Q18.9998,11.9015284,18.9998,12Q18.9998,12.0984716,18.980589000000002,12.1950507Q18.961378,12.291630699999999,18.923693999999998,12.3826065Q18.886011,12.4735823,18.831303,12.5554585Q18.776594,12.6373348,18.706964,12.706965Q18.637334,12.7765946,18.555458,12.8313026Q18.473581,12.886010200000001,18.382606,12.923694099999999Q18.291629999999998,12.961378100000001,18.195050000000002,12.9805889Q18.098471,12.9997997,18,12.9998002L18,13L13,13L13,18L12.9998002,18Q12.9997997,18.098471,12.9805889,18.195050000000002Q12.961378100000001,18.291629999999998,12.923694099999999,18.382607Q12.886010599999999,18.473582,12.8313026,18.555459Q12.7765951,18.637335,12.7069654,18.706965Q12.6373348,18.776595999999998,12.5554585,18.831304Q12.4735823,18.886011,12.3826065,18.923695000000002Q12.291630699999999,18.961378,12.1950507,18.980589000000002Q12.0984716,18.9998,12,18.9998Q11.9015284,18.9998,11.8049483,18.980589000000002Q11.7083683,18.961378,11.617392500000001,18.923693999999998Q11.5264168,18.886011,11.444540499999999,18.831303Q11.362664200000001,18.776594,11.2930346,18.706964Q11.223403900000001,18.637334,11.1686959,18.555458Q11.1139879,18.473581,11.0763044,18.382606Q11.0386209,18.291629999999998,11.0194101,18.195050000000002Q11.0001993,18.098471,11.0001998,18L11,18L11,13L6,13L6,12.9998002Q5.901528291,12.9997997,5.8049487,12.9805889Q5.70836911,12.961378100000001,5.61739314,12.923694099999999Q5.52641714,12.886010599999999,5.44454092,12.8313026Q5.3626647,12.7765951,5.29303467,12.7069654Q5.22340465,12.6373348,5.16869676,12.5554585Q5.11398882,12.4735823,5.07630533,12.3826065Q5.03862178,12.291630699999999,5.0194109099999995,12.1950507Q5.00020003,12.0984716,5.00019997,12Q5.00020003,11.9015284,5.0194109099999995,11.8049483Q5.03862178,11.7083683,5.07630527,11.617392500000001Q5.11398876,11.5264168,5.1686967,11.444540499999999Q5.22340465,11.362664200000001,5.29303467,11.2930346Q5.3626647,11.2234044,5.44454092,11.1686964Q5.52641714,11.1139884,5.61739314,11.0763049Q5.70836911,11.0386214,5.8049487,11.0194106Q5.901528291,11.0001998,6,11.0001998L6,11L11,11L11,6L11.0001998,6Z" uno-fill-rule="evenodd" fill="#011813" uno-fill-opacity="1" data-v-0cd62dc9></path></g></g></svg></div></div>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FAQSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-0cd62dc9"]]), { __name: "FAQSection" });

export { __nuxt_component_3 as _ };
//# sourceMappingURL=FAQSection-D0dWxZbX.mjs.map
