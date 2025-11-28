<template>
  <button :class="btnClass" :style="finalStyle" :disabled="disabled" @click="onClick">
    <span :class="textClass" :style="textStyle">{{ text || $t('common.getStarted') }}</span>
    <NuxtImg src="/images/common/go-arrow-1.png" alt="btn-icon" :width="iconSize" :height="iconSize" />
  </button>
</template>

<script setup lang="ts">
interface Props {
  text?: string;
  disabled?: boolean;

  iconSizePx?: number | null;
  bgColor?: string;
  hoverBgColor?: string;
  activeBgColor?: string;

  fontClass?: string;
  btnClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  disabled: false,
  iconSizePx: null,
  bgColor: '#009D77',
  hoverBgColor: '#008A68',
  activeBgColor: '#007759',
  fontClass: '',
  btnClass: ''
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
  const base = 'cta-button flex justify-center items-center flex-row gap-[18px] rounded-[149.99px] transition-all duration-300 hover:shadow-lg active:scale-[0.98]';
  const pad = 'py-4 pr-3 pl-[48px]';
  return `${base} ${pad} ${props.btnClass}`.trim();
});

const textClass = computed(() => {
  const base = "text-[#FFFFFF] font-['Outfit']  leading-normal";
  const defaultSize = props.fontClass ? '' : 'text-[32px]';
  return `${base} ${defaultSize} ${props.fontClass}`.trim();
});
const iconSize = computed(() => props.iconSizePx ?? 72);

const btnStyle = computed(() => {
  const style: Record<string, string> = {}
  return style
})

const btnVars = computed(() => ({
  '--bg-color': props.bgColor,
  '--hover-bg-color': props.hoverBgColor,
  '--active-bg-color': props.activeBgColor
} as Record<string, string>))

const finalStyle = computed(() => Object.assign({}, btnStyle.value, btnVars.value))

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
