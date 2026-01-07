import { defineComponent, ref, computed, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useId, inject, provide, reactive, readonly, resolveDynamicComponent, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';
import { useEventBus } from '@vueuse/core';
import { d as _export_sfc, u as useI18n, e as useSeoMeta, g as _sfc_main$8, h as useAppConfig, t as tv, i as formBusInjectionKey, j as formStateInjectionKey, k as formErrorsInjectionKey, l as formInputsInjectionKey, m as formLoadingInjectionKey, n as formOptionsInjectionKey, a as useLocalePath, o as navigateTo } from './server.mjs';
import { _ as _sfc_main$2, U as UFormFieldTheme, a as UInputTheme } from './UInput-BgWiH_eU.mjs';
import { _ as _sfc_main$3 } from './Input-B6rMyrRi.mjs';
import { _ as __nuxt_component_1 } from './AppLink-DT1Xb_nb.mjs';
import { U as UButtonTheme } from './UButton-CtKGpLNs.mjs';
import { a as useUserStore } from './useApi-BWDHtmzl.mjs';
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
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import '@vue/shared';

function isSuperStructSchema(schema) {
  return "schema" in schema && typeof schema.coercer === "function" && typeof schema.validator === "function" && typeof schema.refiner === "function";
}
function isStandardSchema(schema) {
  return "~standard" in schema;
}
async function validateStandardSchema(state, schema) {
  const result = await schema["~standard"].validate(state);
  if (result.issues) {
    return {
      errors: result.issues?.map((issue) => ({
        name: issue.path?.map((item) => typeof item === "object" ? item.key : item).join(".") || "",
        message: issue.message
      })) || [],
      result: null
    };
  }
  return {
    errors: null,
    result: result.value
  };
}
async function validateSuperstructSchema(state, schema) {
  const [err, result] = schema.validate(state);
  if (err) {
    const errors = err.failures().map((error) => ({
      message: error.message,
      name: error.path.join(".")
    }));
    return {
      errors,
      result: null
    };
  }
  return {
    errors: null,
    result
  };
}
function validateSchema(state, schema) {
  if (isStandardSchema(schema)) {
    return validateStandardSchema(state, schema);
  } else if (isSuperStructSchema(schema)) {
    return validateSuperstructSchema(state, schema);
  } else {
    throw new Error("Form validation failed: Unsupported form schema");
  }
}
function getAtPath(data, path) {
  if (!path) return data;
  const value = path.split(".").reduce(
    (value2, key) => value2?.[key],
    data
  );
  return value;
}
function setAtPath(data, path, value) {
  if (!path) return Object.assign(data, value);
  if (!data) return data;
  const keys = path.split(".");
  let current = data;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (current[key] === void 0 || current[key] === null) {
      if (i + 1 < keys.length && !Number.isNaN(Number(keys[i + 1]))) {
        current[key] = [];
      } else {
        current[key] = {};
      }
    }
    current = current[key];
  }
  const lastKey = keys[keys.length - 1];
  current[lastKey] = value;
  return data;
}
class FormValidationException extends Error {
  formId;
  errors;
  constructor(formId, errors) {
    super("Form validation exception");
    this.formId = formId;
    this.errors = errors;
    Object.setPrototypeOf(this, FormValidationException.prototype);
  }
}
const theme = {
  "base": ""
};
const _sfc_main$1 = {
  __name: "UForm",
  __ssrInlineRender: true,
  props: {
    id: { type: [String, Number], required: false },
    schema: { type: null, required: false },
    state: { type: null, required: false },
    validate: { type: Function, required: false },
    validateOn: { type: Array, required: false, default() {
      return ["input", "blur", "change"];
    } },
    disabled: { type: Boolean, required: false },
    name: { type: null, required: false },
    validateOnInputDelay: { type: Number, required: false, default: 300 },
    transform: { type: null, required: false, default: () => true },
    nested: { type: Boolean, required: false },
    loadingAuto: { type: Boolean, required: false, default: true },
    class: { type: null, required: false },
    onSubmit: { type: Function, required: false }
  },
  emits: ["submit", "error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.form || {} }));
    const formId = props.id ?? useId();
    const bus = useEventBus(`form-${formId}`);
    const parentBus = props.nested === true && inject(
      formBusInjectionKey,
      void 0
    );
    const parentState = props.nested === true ? inject(formStateInjectionKey, void 0) : void 0;
    const state = computed(() => {
      if (parentState?.value) {
        return props.name ? getAtPath(parentState.value, props.name) : parentState.value;
      }
      return props.state;
    });
    provide(formBusInjectionKey, bus);
    provide(formStateInjectionKey, state);
    const nestedForms = ref(/* @__PURE__ */ new Map());
    const errors = ref([]);
    provide(formErrorsInjectionKey, errors);
    const inputs = ref({});
    provide(formInputsInjectionKey, inputs);
    const dirtyFields = reactive(/* @__PURE__ */ new Set());
    const touchedFields = reactive(/* @__PURE__ */ new Set());
    const blurredFields = reactive(/* @__PURE__ */ new Set());
    function resolveErrorIds(errs) {
      return errs.map((err) => ({
        ...err,
        id: err?.name ? inputs.value[err.name]?.id : void 0
      }));
    }
    const transformedState = ref(null);
    async function getErrors() {
      let errs = props.validate ? await props.validate(state.value) ?? [] : [];
      if (props.schema) {
        const { errors: errors2, result } = await validateSchema(state.value, props.schema);
        if (errors2) {
          errs = errs.concat(errors2);
        } else {
          transformedState.value = result;
        }
      }
      return resolveErrorIds(errs);
    }
    async function _validate(opts = { silent: false, nested: false, transform: false }) {
      const names = opts.name && !Array.isArray(opts.name) ? [opts.name] : opts.name;
      let nestedResults = [];
      let nestedErrors = [];
      if (!names && opts.nested) {
        const validations = Array.from(nestedForms.value.values()).map(
          (form) => validateNestedForm(form, opts)
        );
        const results = await Promise.all(validations);
        nestedErrors = results.filter((r) => r.error).flatMap((r) => r.error.errors.map((e) => addFormPath(e, r.name)));
        nestedResults = results.filter((r) => r.output !== void 0);
      }
      const currentErrors = await getErrors();
      const allErrors = [...currentErrors, ...nestedErrors];
      if (names) {
        errors.value = filterErrorsByNames(allErrors, names);
      } else {
        errors.value = allErrors;
      }
      if (errors.value?.length) {
        if (opts.silent) return false;
        throw new FormValidationException(formId, errors.value);
      }
      if (opts.transform) {
        nestedResults.forEach((result) => {
          if (result.name) {
            setAtPath(transformedState.value, result.name, result.output);
          } else {
            Object.assign(transformedState.value, result.output);
          }
        });
        return transformedState.value ?? state.value;
      }
      return state.value;
    }
    const loading = ref(false);
    provide(formLoadingInjectionKey, readonly(loading));
    async function onSubmitWrapper(payload) {
      loading.value = props.loadingAuto && true;
      const event = payload;
      try {
        event.data = await _validate({ nested: true, transform: props.transform });
        await props.onSubmit?.(event);
        dirtyFields.clear();
      } catch (error) {
        if (!(error instanceof FormValidationException)) {
          throw error;
        }
        const errorEvent = {
          ...event,
          errors: error.errors
        };
        emits("error", errorEvent);
      } finally {
        loading.value = false;
      }
    }
    const disabled = computed(() => props.disabled || loading.value);
    provide(formOptionsInjectionKey, computed(() => ({
      disabled: disabled.value,
      validateOnInputDelay: props.validateOnInputDelay
    })));
    async function validateNestedForm(form, opts) {
      try {
        const result = await form.validate({ ...opts, silent: false });
        return { name: form.name, output: result };
      } catch (error) {
        if (!(error instanceof FormValidationException)) throw error;
        return { name: form.name, error };
      }
    }
    function addFormPath(error, formPath) {
      if (!formPath || !error.name) return error;
      return { ...error, name: formPath + "." + error.name };
    }
    function stripFormPath(error, formPath) {
      const prefix = formPath + ".";
      const name = error?.name?.startsWith(prefix) ? error.name.substring(prefix.length) : error.name;
      return { ...error, name };
    }
    function filterFormErrors(errors2, formPath) {
      if (!formPath) return errors2;
      return errors2.filter((e) => e?.name?.startsWith(formPath + ".")).map((e) => stripFormPath(e, formPath));
    }
    function getFormErrors(form) {
      return form.api.getErrors().map(
        (e) => form.name ? { ...e, name: form.name + "." + e.name } : e
      );
    }
    function matchesTarget(target, path) {
      if (!target || !path) return true;
      if (target instanceof RegExp) return target.test(path);
      return path === target || typeof target === "string" && target.startsWith(path + ".");
    }
    function getNestedTarget(target, formPath) {
      if (!target || target instanceof RegExp) return target;
      if (formPath === target) return void 0;
      if (typeof target === "string" && target.startsWith(formPath + ".")) {
        return target.substring(formPath.length + 1);
      }
      return target;
    }
    function filterErrorsByNames(allErrors, names) {
      const nameSet = new Set(names);
      const patterns = names.map((name) => inputs.value?.[name]?.pattern).filter(Boolean);
      const matchesNames = (error) => {
        if (!error.name) return false;
        if (nameSet.has(error.name)) return true;
        return patterns.some((pattern) => pattern.test(error.name));
      };
      const keepErrors = errors.value.filter((error) => !matchesNames(error));
      const newErrors = allErrors.filter(matchesNames);
      return [...keepErrors, ...newErrors];
    }
    function filterErrorsByTarget(currentErrors, target) {
      return currentErrors.filter(
        (err) => target instanceof RegExp ? !(err.name && target.test(err.name)) : !err.name || err.name !== target
      );
    }
    function isLocalError(error) {
      return !error.name || !!inputs.value[error.name];
    }
    const api = {
      validate: _validate,
      errors,
      setErrors(errs, name) {
        const localErrors = resolveErrorIds(errs.filter(isLocalError));
        const nestedErrors = [];
        for (const form of nestedForms.value.values()) {
          if (matchesTarget(name, form.name)) {
            const formErrors = filterFormErrors(errs, form.name);
            form.api.setErrors(formErrors, getNestedTarget(name, form.name || ""));
            nestedErrors.push(...getFormErrors(form));
          }
        }
        if (name) {
          const keepErrors = filterErrorsByTarget(errors.value, name);
          errors.value = [...keepErrors, ...localErrors, ...nestedErrors];
        } else {
          errors.value = [...localErrors, ...nestedErrors];
        }
      },
      async submit() {
        await onSubmitWrapper(new Event("submit"));
      },
      getErrors(name) {
        if (!name) return errors.value;
        return errors.value.filter(
          (err) => name instanceof RegExp ? err.name && name.test(err.name) : err.name === name
        );
      },
      clear(name) {
        const localErrors = name ? errors.value.filter(
          (err) => isLocalError(err) && (name instanceof RegExp ? !(err.name && name.test(err.name)) : err.name !== name)
        ) : [];
        const nestedErrors = [];
        for (const form of nestedForms.value.values()) {
          if (matchesTarget(name, form.name)) form.api.clear();
          nestedErrors.push(...getFormErrors(form));
        }
        errors.value = [...localErrors, ...nestedErrors];
      },
      disabled,
      loading,
      dirty: computed(() => !!dirtyFields.size),
      dirtyFields: readonly(dirtyFields),
      blurredFields: readonly(blurredFields),
      touchedFields: readonly(touchedFields)
    };
    __expose(api);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(parentBus) ? "div" : "form"), mergeProps({
        id: unref(formId),
        class: ui.value({ class: props.class }),
        onSubmit: onSubmitWrapper
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {
              errors: errors.value,
              loading: loading.value
            }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {
                errors: errors.value,
                loading: loading.value
              })
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@4.2.1_@babel+parse_98c83e5e7de1a5db25516d8987e26607/node_modules/@nuxt/ui/dist/runtime/components/Form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sign-in",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useSeoMeta({
      title: () => t("seo.auth.signIn.title"),
      description: () => t("seo.auth.signIn.description")
    });
    const userStore = useUserStore();
    const email = ref("");
    const password = ref("");
    const canSubmit = computed(() => {
      const e = email.value.trim();
      const p = password.value.trim();
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
      return emailOk && !!p;
    });
    const handleSignIn = () => {
      if (!canSubmit.value) return;
      userStore.login({ email: email.value, password: password.value }).then(() => {
        const localePath = useLocalePath();
        navigateTo(localePath("/"));
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = _sfc_main$1;
      const _component_UFormField = _sfc_main$2;
      const _component_UInput = _sfc_main$3;
      const _component_UButton = _sfc_main$8;
      const _component_AppLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "uno-relative uno-flex uno-items-center uno-justify-center uno-py-24 sm:uno-py-32" }, _attrs))} data-v-e007c91e><div class="uno-w-full uno-max-w-[720px] uno-px-6 sm:uno-px-10" data-v-e007c91e><div class="uno-rounded-[24px] uno-p-8 sm:uno-p-10" data-v-e007c91e><h1 class="uno-text-center uno-mb-10 uno-text-[#0F172A] uno-font-[&#39;Outfit&#39;] uno-font-bold uno-text-4xl sm:uno-text-5xl" data-v-e007c91e>${ssrInterpolate(_ctx.$t("pages.auth.signIn.title"))}</h1>`);
      _push(ssrRenderComponent(_component_UForm, {
        state: { email: email.value, password: password.value },
        class: "uno-space-y-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("pages.account.settings.profile.emailPlaceholder"),
              ui: unref(UFormFieldTheme)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: email.value,
                    "onUpdate:modelValue": ($event) => email.value = $event,
                    type: "email",
                    placeholder: _ctx.$t("pages.account.settings.profile.emailPlaceholder"),
                    ui: unref(UInputTheme)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: email.value,
                      "onUpdate:modelValue": ($event) => email.value = $event,
                      type: "email",
                      placeholder: _ctx.$t("pages.account.settings.profile.emailPlaceholder"),
                      ui: unref(UInputTheme)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "ui"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: _ctx.$t("pages.auth.signIn.passwordLabel"),
              ui: unref(UFormFieldTheme)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: password.value,
                    "onUpdate:modelValue": ($event) => password.value = $event,
                    type: "password",
                    placeholder: _ctx.$t("pages.auth.signIn.passwordPlaceholder"),
                    ui: unref(UInputTheme)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: password.value,
                      "onUpdate:modelValue": ($event) => password.value = $event,
                      type: "password",
                      placeholder: _ctx.$t("pages.auth.signIn.passwordPlaceholder"),
                      ui: unref(UInputTheme)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "ui"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              ui: unref(UButtonTheme),
              color: "primary",
              disabled: !canSubmit.value,
              onClick: handleSignIn
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("pages.auth.signIn.submit"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("pages.auth.signIn.submit")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormField, {
                label: _ctx.$t("pages.account.settings.profile.emailPlaceholder"),
                ui: unref(UFormFieldTheme)
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: email.value,
                    "onUpdate:modelValue": ($event) => email.value = $event,
                    type: "email",
                    placeholder: _ctx.$t("pages.account.settings.profile.emailPlaceholder"),
                    ui: unref(UInputTheme)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "ui"])
                ]),
                _: 1
              }, 8, ["label", "ui"]),
              createVNode(_component_UFormField, {
                label: _ctx.$t("pages.auth.signIn.passwordLabel"),
                ui: unref(UFormFieldTheme)
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: password.value,
                    "onUpdate:modelValue": ($event) => password.value = $event,
                    type: "password",
                    placeholder: _ctx.$t("pages.auth.signIn.passwordPlaceholder"),
                    ui: unref(UInputTheme)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "ui"])
                ]),
                _: 1
              }, 8, ["label", "ui"]),
              createVNode(_component_UButton, {
                ui: unref(UButtonTheme),
                color: "primary",
                disabled: !canSubmit.value,
                onClick: handleSignIn
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("pages.auth.signIn.submit")), 1)
                ]),
                _: 1
              }, 8, ["ui", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="uno-flex uno-items-center uno-justify-between uno-mt-6" data-v-e007c91e><p class="uno-text-[#8d8e8f] uno-font-[&#39;Outfit&#39;]" data-v-e007c91e>${ssrInterpolate(_ctx.$t("pages.auth.signIn.noAccount"))}</p>`);
      _push(ssrRenderComponent(_component_AppLink, {
        to: "/auth/sign-up",
        class: "uno-text-[#0F172A] hover:uno-text-[#4E5255] uno-font-['Outfit'] uno-underline uno-underline-offset-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("pages.auth.signIn.signUp"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("pages.auth.signIn.signUp")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/sign-in.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const signIn = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e007c91e"]]);

export { signIn as default };
//# sourceMappingURL=sign-in-Iu3XbLoo.mjs.map
