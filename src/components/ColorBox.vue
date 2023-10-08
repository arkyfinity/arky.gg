<script setup lang="ts">
import { computed } from 'vue';
import { ColorBox } from '@/types';

const props = defineProps<{
    name: string;
    hex: string;
}>();

const color = computed((): ColorBox => {
    return {
        name: props.name,
        hex: props.hex,
    };
});

const calculatedColor = computed((hex: string): number[] | string => {
    hex = props.hex;

    let computedC: number = 0;
    let computedM: number = 0;
    let computedY: number = 0;
    let computedK: number = 0;

    const r: number = parseInt(hex.slice(0, 2), 16);
    const g: number = parseInt(hex.slice(2, 4), 16);
    const b: number = parseInt(hex.slice(4, 6), 16);

    if (r === 0 && g === 0 && b === 0) {
        computedK = 1;
        return [0, 0, 0, 1];
    }

    computedC = 1 - (r / 255);
    computedM = 1 - (g / 255);
    computedY = 1 - (b / 255);

    const minCMY = Math.min(computedC, Math.min(computedM, computedY));

    computedC = Math.round((computedC - minCMY) / (1 - minCMY) * 100);
    computedM = Math.round((computedM - minCMY) / (1 - minCMY) * 100);
    computedY = Math.round((computedY - minCMY) / (1 - minCMY) * 100);
    computedK = Math.round(minCMY * 100);

    return `${computedC}, ${computedM}, ${computedY}, ${computedK}`;
});
</script>

<template>
    <div class="color-box" :style="{backgroundColor: `#${color.hex}`}">
        <div class="color-name">{{ color.name }}</div>
        <div class="color-info">
            <div class="color-info-text">#{{ color.hex.toUpperCase() }}</div>
            <div class="color-info-text">CMYK {{ calculatedColor }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables';

.color-box {
    grid-column: span 12;
    padding: 1rem;
    border-radius: 6px;
    border: 2px solid rgba(255,255,255,.06);
    background-clip: padding-box;
    overflow: hidden;
    color: $dark;
    margin-bottom: 20px;

    @media (min-width: 992px) {
        grid-column: span 6;
    }

    &:nth-child(-n+2) {
        color: $light;
    }

    .color-name {
        font-size: 1.75rem;
        font-weight: 600;
    }

    .color-info {
        margin-top: 42px;
        opacity: .65;

        .color-info-text {
            font-size: clamp(1rem,2vw,20px);
            line-height: 1.625;
        }
    }
}
</style>
