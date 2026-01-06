<template>
    <NuxtLink v-if="isLink" :to="to">
        <slot/>
    </NuxtLink>
    <div v-else>
        <slot/>
    </div>
</template>

<script setup lang="ts">
defineProps({
    to: {
        type: Object,
        default: () => ({})
    },
    isLink: {
        type: Boolean,
        default: true
    }

})
</script>
