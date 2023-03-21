<script setup lang="ts">
import { Color } from '@/types';

const props = defineProps<{
    name: string,
    from: string,
    to: string,
    angle: string,
}>();

const color = computed((): Color => {
    return {
        name: props.name,
        from: props.from,
        to: props.to,
        angle: props.angle,
    };
});

const linearGradient = computed((): string => {
    return `linear-gradient(${props.angle}deg, #${props.from}, #${props.to})`
});
</script>

<template>
    <div class="gradient-box" :style="{background: linearGradient }">
        <div class="color-name">{{color.name}}</div>
        <div class="color-info">
            <div class="color-info-text">From: #{{color.from.toUpperCase()}}</div>
            <div class="color-info-text">To: #{{color.to.toUpperCase()}}</div>
            <div class="color-info-text">Angle: {{color.angle}}deg</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables';

.gradient-box {
    grid-column: span 12;
    padding: 1rem;
    border-radius: 6px;
    border: 2px solid rgba(255,255,255,.06);
    color: $dark;
    background-repeat: no-repeat !important;
    background-clip: padding-box !important;

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
