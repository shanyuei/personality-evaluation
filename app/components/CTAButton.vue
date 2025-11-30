<template>
  <button :class="btnClass" :style="finalStyle" :disabled="disabled" @click="onClick">
    <NuxtImg v-if="iconPosition === 'left'" :src="iconSrc" :alt="iconAlt" v-bind="iconAttrs" :class="iconClass" />
    <span :class="textClass" :style="textStyle">{{ text || $t('common.getStarted') }}</span>
    <NuxtImg v-if="iconPosition !== 'left'" :src="iconSrc" :alt="iconAlt" v-bind="iconAttrs" :class="iconClass" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
defineOptions({ name: 'CtaButton' })

interface Props {
  text?: string;
  disabled?: boolean;

  iconSizePx?: number | null;
  iconSrc?: string;
  iconAlt?: string;
  iconPosition?: 'left' | 'right';
  iconClass?: string;
  bgColor?: string;
  hoverBgColor?: string;
  activeBgColor?: string;
  
  textClass?: string;
  btnClass?: string;
  variant?: 'primary' | 'outline' | 'ghost' | 'link';
  rounded?: 'pill' | 'full' | 'md' | 'none';
  size?: 'sm' | 'md' | 'lg';
  useDefaultStyles?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  disabled: false,
  iconSizePx: null,
  iconSrc: '/images/common/go-arrow-1.png',
  iconAlt: 'btn-icon',
  iconPosition: 'right',
  iconClass: '',
  bgColor: '#009D77',
  hoverBgColor: '#008A68',
  activeBgColor: '#007759',
  textClass: '',
  btnClass: '',
  variant: 'primary',
  rounded: 'pill',
  size: 'md',
  useDefaultStyles: true
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const onClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event);
  }
};

// removed unused size maps

const btnClass = computed(() => {
  if (!props.useDefaultStyles) {
    return `${props.btnClass}`.trim();
  }
  const base = 'cta-button flex justify-center items-center flex-row gap-[18px] transition-all duration-300 hover:shadow-lg active:scale-[0.98]';
  const rounded = props.rounded === 'pill' ? 'rounded-[149.99px]'
    : props.rounded === 'full' ? 'rounded-full'
    : props.rounded === 'md' ? 'rounded-md' : 'rounded-none';
  const sizePad = props.size === 'sm' ? 'py-2 pr-2 pl-[24px]'
    : props.size === 'lg' ? 'py-5 pr-4 pl-[56px]' : 'py-4 pr-3 pl-[48px]';
  const variantExtra = props.variant === 'outline' ? 'border'
    : props.variant === 'link' ? 'bg-transparent shadow-none active:scale-100' : '';
  return `${base} ${rounded} ${sizePad} ${variantExtra} ${props.btnClass}`.trim();
});

const textClass = computed(() => {
  if (!props.useDefaultStyles) {
    return `${props.textClass}`.trim();
  }
  const base = "text-[#FFFFFF] font-['Outfit'] leading-normal";
  const sizeClass = props.size === 'sm' ? 'text-[16px]' : props.size === 'lg' ? 'text-[32px]' : 'text-[20px]';
  const defaultSize = props.textClass ? '' : sizeClass;
  return `${base} ${defaultSize} ${props.textClass}`.trim();
});
const iconSize = computed(() => {
  if (props.iconSizePx != null) return props.iconSizePx;
  if (!props.useDefaultStyles) return null as unknown as number;
  return props.size === 'sm' ? 16 : props.size === 'lg' ? 72 : 40;
});

const iconAttrs = computed(() => {
  const attrs: Record<string, any> = {}
  if (iconSize.value) {
    attrs.width = iconSize.value
    attrs.height = iconSize.value
  }
  return attrs
})

const btnStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.variant === 'outline') {
    style['backgroundColor'] = 'transparent'
    style['borderColor'] = 'var(--bg-color)'
  }
  if (props.variant === 'link' || props.variant === 'ghost') {
    style['backgroundColor'] = 'transparent'
  }
  return style
})

const btnVars = computed(() => {
  if (!props.useDefaultStyles) return {} as Record<string, string>
  return ({
    '--bg-color': props.bgColor,
    '--hover-bg-color': props.hoverBgColor,
    '--active-bg-color': props.activeBgColor
  } as Record<string, string>)
})

const finalStyle = computed(() => Object.assign({}, btnVars.value, btnStyle.value))

const textStyle = computed(() => ({}))
</script>

<style scoped>
.cta-button {
  background-color: var(--bg-color);
}

.cta-button:hover {
  background-color: var(--hover-bg-color);
}

.cta-button:active {
  background-color: var(--active-bg-color);
}

.cta-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
