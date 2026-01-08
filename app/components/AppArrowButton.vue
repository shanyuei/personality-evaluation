<template>
  <component
    :is="to ? 'AppLink' : 'button'"
    :to="to"
    class="uno-group uno-inline-flex uno-items-center uno-justify-center uno-rounded-full uno-transition-all uno-duration-200 disabled:uno-opacity-50 disabled:uno-cursor-not-allowed"
    :class="[
      variantClasses[variant],
    ]"
  >
    <slot />
    <NuxtImg
      src="/images/common/go-arrow-1.png"
      alt="arrow-right"
      :width="iconSize"
      :height="iconSize"
      :class="imgClass"
    />
  </component>
</template>

<script setup lang="ts">
// Nuxt auto-imports components in template, but for dynamic component :is="to ? 'AppLink' : 'button'", 
// string 'AppLink' works if it is globally registered or auto-imported by Nuxt.

interface Props {
  to?: string | object
  iconSize?: number | string
  variant?: 'primary' | 'outline' | 'ghost' | 'dark'
  imgClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  iconSize: 44,
  variant: 'primary',
  imgClass: ''
})

const variantClasses = {
  primary: 'uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] uno-text-white',
  outline: 'uno-border uno-border-[var(--ui-foreground)] uno-bg-transparent hover:uno-opacity-80 uno-text-[var(--ui-foreground)]',
  ghost: 'uno-bg-transparent hover:uno-bg-gray-100',
  dark: 'uno-bg-[var(--ui-foreground)] hover:uno-opacity-90 uno-text-white'
}
</script>
