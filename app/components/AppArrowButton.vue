<template>
  <component
    :is="to ? 'AppLink' : 'button'"
    :to="to"
    class="uno-group uno-inline-flex uno-items-center uno-justify-center uno-rounded-full uno-transition-all uno-duration-200 disabled:uno-opacity-50 disabled:uno-cursor-not-allowed"
    :class="[
      finalBaseClass,
      finalVariantHoverClass,
      finalHoverClass,
      presetExtraClass
    ]"
  >
    <slot />
    <NuxtImg
      :src="finalIconSrc"
      alt="arrow-right"
      :width="finalIconSize"
      :height="finalIconSize"
      :class="['uno-transform uno-transition-transform group-hover:uno-rotate-45', imgClass]"
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
  hoverClass?: string
  iconSrc?: string
  preset?: 'header'
}

const props = withDefaults(defineProps<Props>(), {
  iconSize: 44,
  variant: 'primary',
  imgClass: '',
  hoverClass: '',
  iconSrc: '/images/common/go-arrow-1.png'
})

const presetMap = {
  header: {
    variant: 'outline' as const,
    hoverClass: 'hover:uno-bg-[var(--ui-foreground)] hover:uno-text-white !hover:uno-opacity-100',
    iconSrc: '/images/header/go-icon-1.png',
    iconSize: 40,
    extraClass: 'uno-h-[48px] uno-gap-3 uno-py-1 uno-pr-1 uno-pl-[20px] uno-rounded-[100px]'
  }
}

const variantBaseClasses = {
  primary: 'uno-bg-[var(--ui-primary)] uno-text-white',
  outline: 'uno-border uno-border-[var(--ui-foreground)] uno-bg-transparent uno-text-[var(--ui-foreground)]',
  ghost: 'uno-bg-transparent',
  dark: 'uno-bg-[var(--ui-foreground)] uno-text-white'
}

const variantHoverClasses = {
  primary: 'hover:uno-bg-[var(--ui-foreground)]',
  outline: 'hover:uno-opacity-80',
  ghost: 'hover:uno-bg-gray-100',
  dark: 'hover:uno-opacity-90'
}

const presetConf = computed(() => props.preset ? presetMap[props.preset] : undefined)
const finalVariant = computed(() => presetConf.value?.variant ?? props.variant)
const finalBaseClass = computed(() => variantBaseClasses[finalVariant.value])
const finalVariantHoverClass = computed(() => variantHoverClasses[finalVariant.value])
const finalHoverClass = computed(() => [presetConf.value?.hoverClass, props.hoverClass].filter(Boolean).join(' '))
const finalIconSrc = computed(() => presetConf.value?.iconSrc ?? props.iconSrc)
const finalIconSize = computed(() => presetConf.value?.iconSize ?? props.iconSize)
const presetExtraClass = computed(() => presetConf.value?.extraClass ?? '')
</script>
