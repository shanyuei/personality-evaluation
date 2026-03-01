<template>


    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        @click="$emit('click')">
        <g>
            <rect x="0" y="0" :width="size" :height="size" :rx="size / 2" :fill="backgroundColor" fill-opacity="1" />
            <g>
                <path
                    d="M6.5 14.4998L10.2499 16.9997L17.7497 7"
                    stroke-width="2.49993" stroke-linecap="round" stroke-linejoin="round" :stroke="checkColor" />
            </g>
        </g>
    </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    color?: string
    backgroundColor?: string
    checkColor?: string
    size?: number
}>()

// 设置默认背景颜色为深绿色，支持旧的 color 属性作为别名
const backgroundColor = computed(() => props.backgroundColor || props.color || '#5AD7A7')
// 设置默认对勾颜色为深黑色
const checkColor = computed(() => props.checkColor || '#011813')
// 设置默认大小为 40
const size = computed(() => props.size || 40)

defineEmits(['click'])
</script>