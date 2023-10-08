<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    font: string;
    weights: string;
}>();

const fontName = computed((): string => {
    return props.font;
});

const fontWeights = computed((): string => {
    return props.weights;
});
</script>

<template>
    <div class="font-box" :style="{fontFamily: fontName}">
        <div class="font-name">{{ fontName }}</div>
        <div class="font-weights">Weights: {{ fontWeights }}</div>
        <div class="font-example">Almost before we knew it, we had left the ground.</div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables';

.font-box {
    grid-column: span 12;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 0 1.5rem;
    padding: .5rem .5rem .8rem;
    border-radius: 6px;
    border: 2px solid rgba(255,255,255,.06);
    box-shadow: 0 1px 1px rgba(0,0,0,.25);
    background-clip: padding-box;
    color: $light;

    .font-name {
        font-size: 3rem;
        font-weight: 500;
    }

    .font-weights {
        font-family: $font;
        font-size: .875rem;
        color: rgba($light, .55);
        margin: 0 0 1rem;
    }

    .font-example {
        font-size: 1rem;
        font-weight: 300;
    }
}
</style>
