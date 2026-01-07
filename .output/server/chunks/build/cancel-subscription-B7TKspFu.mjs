import { _ as _sfc_main$1, U as UFormFieldTheme, a as UInputTheme } from './UInput-BgWiH_eU.mjs';
import { _ as _sfc_main$2 } from './Input-B6rMyrRi.mjs';
import { _ as _sfc_main$3 } from './Checkbox-CHOfQbIG.mjs';
import { u as useI18n, e as useSeoMeta, g as _sfc_main$8, _ as __nuxt_component_6 } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { U as UButtonTheme } from './UButton-CtKGpLNs.mjs';
import 'reka-ui';
import '@vueuse/core';
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
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const UCheckboxTheme = {
  base: "size-5 rounded-[4px] border-2 border-[var(--ui-border)] focus:ring-2 focus:ring-[rgba(0,157,119,0.2)] focus:ring-offset-2 outline-none bg-[var(--ui-background)]",
  checked: "border-[var(--ui-primary)] bg-[var(--ui-primary)]",
  icon: "size-3 text-white",
  disabled: "opacity-50 cursor-not-allowed"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cancel-subscription",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo.orders.cancelSubscription.title"),
      description: () => t("seo.orders.cancelSubscription.description")
    });
    const email = ref("");
    const reasons = ref({
      difficult: false,
      missing: false,
      technical: false,
      switching: false,
      team: false,
      other: false
    });
    const emailError = ref(false);
    const submit = () => {
      emailError.value = email.value.trim() === "";
      if (emailError.value) return;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UFormField = _sfc_main$1;
      const _component_UInput = _sfc_main$2;
      const _component_UCheckbox = _sfc_main$3;
      const _component_UButton = _sfc_main$8;
      const _component_NuxtImg = __nuxt_component_6;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "uno-relative uno-flex uno-items-center uno-justify-center uno-py-12 sm:uno-py-24 md:uno-py-32" }, _attrs))}><div class="uno-w-full uno-max-w-[720px] uno-px-4 sm:uno-px-6 md:uno-px-10"><div class="uno-p-4 sm:uno-p-6 md:uno-p-8"><h1 class="uno-text-center uno-mb-3 uno-text-[#0F172A] uno-font-[&#39;Outfit&#39;] uno-font-bold uno-text-2xl sm:uno-text-3xl md:uno-text-4xl lg:uno-text-5xl"> Cancel Subscription</h1><p class="uno-text-center uno-text-[#4E5255] uno-mb-6 sm:uno-mb-8">Easily cancel your subscription by entering the email used to create your account.</p><div class="uno-mb-4 sm:uno-mb-6">`);
      _push(ssrRenderComponent(_component_UFormField, {
        label: "email",
        ui: unref(UFormFieldTheme)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UInput, {
              id: "email",
              modelValue: email.value,
              "onUpdate:modelValue": ($event) => email.value = $event,
              type: "email",
              placeholder: "Email Address",
              ui: unref(UInputTheme)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UInput, {
                id: "email",
                modelValue: email.value,
                "onUpdate:modelValue": ($event) => email.value = $event,
                type: "email",
                placeholder: "Email Address",
                ui: unref(UInputTheme)
              }, null, 8, ["modelValue", "onUpdate:modelValue", "ui"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (emailError.value) {
        _push(`<p class="uno-mt-2 uno-text-sm uno-text-[#EA4C89]">Email Address is required. This field cannot be left blank.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="uno-mb-6 sm:uno-mb-8"><h2 class="uno-text-[#0F172A] uno-font-[&#39;Outfit&#39;] uno-font-semibold uno-text-lg sm:uno-text-xl uno-mb-3 sm:uno-mb-4"> Why did you decide to cancel your subscription?</h2><div class="uno-space-y-2 sm:uno-space-y-3"><label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">`);
      _push(ssrRenderComponent(_component_UCheckbox, {
        modelValue: reasons.value.difficult,
        "onUpdate:modelValue": ($event) => reasons.value.difficult = $event,
        value: "difficult",
        ui: unref(UCheckboxTheme)
      }, null, _parent));
      _push(`<span>I found Cacaoo difficult to use.</span></label><label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">`);
      _push(ssrRenderComponent(_component_UCheckbox, {
        modelValue: reasons.value.missing,
        "onUpdate:modelValue": ($event) => reasons.value.missing = $event,
        value: "missing",
        ui: unref(UCheckboxTheme)
      }, null, _parent));
      _push(`<span>I didn&#39;t find the necessary function.</span></label><label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">`);
      _push(ssrRenderComponent(_component_UCheckbox, {
        modelValue: reasons.value.technical,
        "onUpdate:modelValue": ($event) => reasons.value.technical = $event,
        value: "technical",
        ui: unref(UCheckboxTheme)
      }, null, _parent));
      _push(`<span>I faced technical issues while working with Cacaoo.</span></label><label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">`);
      _push(ssrRenderComponent(_component_UCheckbox, {
        modelValue: reasons.value.switching,
        "onUpdate:modelValue": ($event) => reasons.value.switching = $event,
        value: "switching",
        ui: unref(UCheckboxTheme)
      }, null, _parent));
      _push(`<span>I had problems switching plans.</span></label><label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">`);
      _push(ssrRenderComponent(_component_UCheckbox, {
        modelValue: reasons.value.team,
        "onUpdate:modelValue": ($event) => reasons.value.team = $event,
        value: "team",
        ui: unref(UCheckboxTheme)
      }, null, _parent));
      _push(`<span>My team members do not want to use Cacaoo.</span></label><label class="uno-flex uno-items-start uno-gap-3 uno-cursor-pointer">`);
      _push(ssrRenderComponent(_component_UCheckbox, {
        modelValue: reasons.value.other,
        "onUpdate:modelValue": ($event) => reasons.value.other = $event,
        value: "other",
        ui: unref(UCheckboxTheme)
      }, null, _parent));
      _push(`<span>Other.</span></label></div></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        class: "uno-w-full uno-py-3 sm:uno-py-4 uno-px-4 uno-rounded-[16px] uno-transition-colors uno-duration-300 uno-mb-4 sm:uno-mb-6",
        ui: unref(UButtonTheme),
        onClick: submit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get Started `);
          } else {
            return [
              createTextVNode(" Get Started ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="uno-space-y-3 sm:uno-space-y-4 uno-text-sm uno-text-[#4E5255]"><div class="uno-flex uno-items-start uno-gap-2 sm:uno-gap-3">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/common/email-icon-1.png",
        alt: "Email Icon",
        width: "16",
        height: "16",
        class: "uno-mt-0.5 uno-hidden md:uno-block"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/common/email-icon-1.png",
        alt: "Email Icon",
        width: "50",
        height: "50",
        class: "uno-mt-0.5 uno-block md:uno-hidden"
      }, null, _parent));
      _push(`<div> If you don&#39;t remember which email you used to register, check your inbox for emails from &quot;Personality&quot;. Otherwise, contact our friendly customer support <span class="uno-underline uno-text-[#009D77]">here</span></div></div><p class="uno-flex uno-items-start uno-gap-2 sm:uno-gap-3">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/common/user-icon-1.png",
        alt: "User Icon",
        width: "16",
        height: "16",
        class: "uno-mt-0.5 uno-hidden md:uno-block"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/common/user-icon-1.png",
        alt: "User Icon",
        width: "50",
        height: "50",
        class: "uno-mt-0.5 uno-block md:uno-hidden"
      }, null, _parent));
      _push(` You can also cancel your subscription by logging into your account, going to the &quot;Membership&quot; tab and clicking &quot;Cancel Subscription&quot;. </p></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orders/cancel-subscription.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cancel-subscription-B7TKspFu.mjs.map
