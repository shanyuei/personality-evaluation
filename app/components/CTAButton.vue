<template>
  <button
    class="cta-button inline-flex items-center gap-3 px-6 py-3 bg-black rounded-full text-white font-medium hover:bg-gray-800 transition-all duration-300"
    :disabled="disabled"
    @click="onClick"
  >
    <span>{{ text || $t('common.getStarted') }}</span>
    <span class="w-8 h-8 inline-flex items-center justify-center rounded-full border border-white/40">
      <svg
        class="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </svg>
    </span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  text?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const onClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<style scoped>
.cta-button {
  /* 基础样式已在模板中使用原子类定义 */
}

.cta-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
