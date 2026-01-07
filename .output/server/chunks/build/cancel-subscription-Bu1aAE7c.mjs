import { _ as _sfc_main$2, U as UFormFieldTheme, a as UInputTheme } from './UInput-DGQ-n-q2.mjs';
import { _ as _sfc_main$3 } from './Input-Cs9A8AMk.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, mergeModels, useSlots, useModel, useId, computed, createBlock, openBlock, resolveDynamicComponent, renderSlot, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderVNode, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { useForwardProps, Primitive, Label, CheckboxRoot, CheckboxIndicator } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { u as useI18n, a as useSeoMeta, c as _sfc_main$8, _ as __nuxt_component_6, g as useAppConfig, o as useFormField, t as tv, s as _sfc_main$e } from './server.mjs';
import { U as UButtonTheme } from './UButton-CtKGpLNs.mjs';
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

const theme = {
  "slots": {
    "root": "relative flex items-start",
    "container": "flex items-center",
    "base": "rounded-sm ring ring-inset ring-accented overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2",
    "indicator": "flex items-center justify-center size-full text-inverted",
    "icon": "shrink-0 size-full",
    "wrapper": "w-full",
    "label": "block font-medium text-default",
    "description": "text-muted"
  },
  "variants": {
    "color": {
      "primary": {
        "base": "focus-visible:outline-primary",
        "indicator": "bg-primary"
      },
      "secondary": {
        "base": "focus-visible:outline-secondary",
        "indicator": "bg-secondary"
      },
      "success": {
        "base": "focus-visible:outline-success",
        "indicator": "bg-success"
      },
      "info": {
        "base": "focus-visible:outline-info",
        "indicator": "bg-info"
      },
      "warning": {
        "base": "focus-visible:outline-warning",
        "indicator": "bg-warning"
      },
      "error": {
        "base": "focus-visible:outline-error",
        "indicator": "bg-error"
      },
      "neutral": {
        "base": "focus-visible:outline-inverted",
        "indicator": "bg-inverted"
      }
    },
    "variant": {
      "list": {
        "root": ""
      },
      "card": {
        "root": "border border-muted rounded-lg"
      }
    },
    "indicator": {
      "start": {
        "root": "flex-row",
        "wrapper": "ms-2"
      },
      "end": {
        "root": "flex-row-reverse",
        "wrapper": "me-2"
      },
      "hidden": {
        "base": "sr-only",
        "wrapper": "text-center"
      }
    },
    "size": {
      "xs": {
        "base": "size-3",
        "container": "h-4",
        "wrapper": "text-xs"
      },
      "sm": {
        "base": "size-3.5",
        "container": "h-4",
        "wrapper": "text-xs"
      },
      "md": {
        "base": "size-4",
        "container": "h-5",
        "wrapper": "text-sm"
      },
      "lg": {
        "base": "size-4.5",
        "container": "h-5",
        "wrapper": "text-sm"
      },
      "xl": {
        "base": "size-5",
        "container": "h-6",
        "wrapper": "text-base"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-error"
      }
    },
    "disabled": {
      "true": {
        "root": "opacity-75",
        "base": "cursor-not-allowed",
        "label": "cursor-not-allowed",
        "description": "cursor-not-allowed"
      }
    },
    "checked": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "size": "xs",
      "variant": "card",
      "class": {
        "root": "p-2.5"
      }
    },
    {
      "size": "sm",
      "variant": "card",
      "class": {
        "root": "p-3"
      }
    },
    {
      "size": "md",
      "variant": "card",
      "class": {
        "root": "p-3.5"
      }
    },
    {
      "size": "lg",
      "variant": "card",
      "class": {
        "root": "p-4"
      }
    },
    {
      "size": "xl",
      "variant": "card",
      "class": {
        "root": "p-4.5"
      }
    },
    {
      "color": "primary",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-secondary"
      }
    },
    {
      "color": "success",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-success"
      }
    },
    {
      "color": "info",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-info"
      }
    },
    {
      "color": "warning",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-warning"
      }
    },
    {
      "color": "error",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-error"
      }
    },
    {
      "color": "neutral",
      "variant": "card",
      "class": {
        "root": "has-data-[state=checked]:border-inverted"
      }
    },
    {
      "variant": "card",
      "disabled": true,
      "class": {
        "root": "cursor-not-allowed"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "list",
    "indicator": "start"
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UCheckbox",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    label: { type: String, required: false },
    description: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    indicator: { type: null, required: false },
    icon: { type: null, required: false },
    indeterminateIcon: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    disabled: { type: Boolean, required: false },
    required: { type: Boolean, required: false },
    name: { type: String, required: false },
    value: { type: null, required: false },
    id: { type: String, required: false },
    defaultValue: { type: [Boolean, String], required: false }
  }, {
    "modelValue": { type: [Boolean, String], ...{ default: void 0 } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const slots = useSlots();
    const emits = __emit;
    const modelValue = useModel(__props, "modelValue", { type: [Boolean, String], ...{ default: void 0 } });
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "required", "value", "defaultValue"));
    const { id: _id, emitFormChange, emitFormInput, size, color, name, disabled, ariaAttrs } = useFormField(props);
    const id = _id.value ?? useId();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.checkbox || {} })({
      size: size.value,
      color: color.value,
      variant: props.variant,
      indicator: props.indicator,
      required: props.required,
      disabled: disabled.value
    }));
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: !__props.variant || __props.variant === "list" ? __props.as : unref(Label),
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: props.ui?.container }))}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(CheckboxRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
              modelValue: modelValue.value,
              "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
              name: unref(name),
              disabled: unref(disabled),
              "data-slot": "base",
              class: ui.value.base({ class: props.ui?.base })
            }), {
              default: withCtx(({ modelValue: modelValue2 }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(CheckboxIndicator), {
                    "data-slot": "indicator",
                    class: ui.value.indicator({ class: props.ui?.indicator })
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (modelValue2 === "indeterminate") {
                          _push4(ssrRenderComponent(_sfc_main$e, {
                            name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon })
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_sfc_main$e, {
                            name: __props.icon || unref(appConfig).ui.icons.check,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon })
                          }, null, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          modelValue2 === "indeterminate" ? (openBlock(), createBlock(_sfc_main$e, {
                            key: 0,
                            name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$e, {
                            key: 1,
                            name: __props.icon || unref(appConfig).ui.icons.check,
                            "data-slot": "icon",
                            class: ui.value.icon({ class: props.ui?.icon })
                          }, null, 8, ["name", "class"]))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(CheckboxIndicator), {
                      "data-slot": "indicator",
                      class: ui.value.indicator({ class: props.ui?.indicator })
                    }, {
                      default: withCtx(() => [
                        modelValue2 === "indeterminate" ? (openBlock(), createBlock(_sfc_main$e, {
                          key: 0,
                          name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: props.ui?.icon })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$e, {
                          key: 1,
                          name: __props.icon || unref(appConfig).ui.icons.check,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: props.ui?.icon })
                        }, null, 8, ["name", "class"]))
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (__props.label || !!slots.label || (__props.description || !!slots.description)) {
              _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId}>`);
              if (__props.label || !!slots.label) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? unref(Label) : "p"), {
                  for: unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: props.ui?.label })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "label", { label: __props.label }, () => {
                        _push3(`${ssrInterpolate(__props.label)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                          createTextVNode(toDisplayString(__props.label), 1)
                        ])
                      ];
                    }
                  }),
                  _: 3
                }), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              if (__props.description || !!slots.description) {
                _push2(`<p data-slot="description" class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", { description: __props.description }, () => {
                  _push2(`${ssrInterpolate(__props.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                "data-slot": "container",
                class: ui.value.container({ class: props.ui?.container })
              }, [
                createVNode(unref(CheckboxRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                  modelValue: modelValue.value,
                  "onUpdate:modelValue": [($event) => modelValue.value = $event, onUpdate],
                  name: unref(name),
                  disabled: unref(disabled),
                  "data-slot": "base",
                  class: ui.value.base({ class: props.ui?.base })
                }), {
                  default: withCtx(({ modelValue: modelValue2 }) => [
                    createVNode(unref(CheckboxIndicator), {
                      "data-slot": "indicator",
                      class: ui.value.indicator({ class: props.ui?.indicator })
                    }, {
                      default: withCtx(() => [
                        modelValue2 === "indeterminate" ? (openBlock(), createBlock(_sfc_main$e, {
                          key: 0,
                          name: __props.indeterminateIcon || unref(appConfig).ui.icons.minus,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: props.ui?.icon })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$e, {
                          key: 1,
                          name: __props.icon || unref(appConfig).ui.icons.check,
                          "data-slot": "icon",
                          class: ui.value.icon({ class: props.ui?.icon })
                        }, null, 8, ["name", "class"]))
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]),
                  _: 1
                }, 16, ["id", "modelValue", "onUpdate:modelValue", "name", "disabled", "class"])
              ], 2),
              __props.label || !!slots.label || (__props.description || !!slots.description) ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "wrapper",
                class: ui.value.wrapper({ class: props.ui?.wrapper })
              }, [
                __props.label || !!slots.label ? (openBlock(), createBlock(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? unref(Label) : "p"), {
                  key: 0,
                  for: unref(id),
                  "data-slot": "label",
                  class: ui.value.label({ class: props.ui?.label })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "label", { label: __props.label }, () => [
                      createTextVNode(toDisplayString(__props.label), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["for", "class"])) : createCommentVNode("", true),
                __props.description || !!slots.description ? (openBlock(), createBlock("p", {
                  key: 1,
                  "data-slot": "description",
                  class: ui.value.description({ class: props.ui?.description })
                }, [
                  renderSlot(_ctx.$slots, "description", { description: __props.description }, () => [
                    createTextVNode(toDisplayString(__props.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.2.1_@babel+parse_98c83e5e7de1a5db25516d8987e26607/node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
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
      const _component_UFormField = _sfc_main$2;
      const _component_UInput = _sfc_main$3;
      const _component_UCheckbox = _sfc_main$1;
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
//# sourceMappingURL=cancel-subscription-Bu1aAE7c.mjs.map
