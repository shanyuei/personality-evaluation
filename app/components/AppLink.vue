<template>
    <NuxtLink v-if="isLink" :to="finalTo">
        <slot/>
    </NuxtLink>
    <div v-else>
        <slot/>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    to: {
        type: [Object, String],
        default: () => ({})
    },
    isLink: {
        type: Boolean,
        default: true
    }
})
const localePath = useLocalePath()
const finalTo = computed(() => {
    const t = props.to as any
    if (!t) return ''
    return typeof t === 'string' ? localePath(t) : localePath(t)
})
</script>
