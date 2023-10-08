<script setup lang="ts">
import { computed } from 'vue';
import { Theme } from '@/types';

const props = defineProps<{
    theme: string;
    src: string;
    dlName: string;
}>();

const themeCheck = computed((): Theme => {
    return {
        isLight: props.theme === 'light',
        isDark: props.theme === 'dark',
    };
});

const svgSrc = computed((): string => {
    return `${props.src.slice(0, -4)}.svg`;
});

const pngSrc = computed((): string => {
    return `${props.src.slice(0, -4)}.png`;
});
</script>

<template>
    <div class="logo-box" :class="{light: themeCheck.isLight, dark: themeCheck.isDark}">
        <img class="logo-image" :src="svgSrc" alt="Arkyfinity logo" />
        <div class="link-container">
            <a class="logo-box-link" :href="svgSrc" :download="dlName" target="_blank">.svg</a>
            <a class="logo-box-link" :href="pngSrc" :download="dlName" target="_blank">.png</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables';

.logo-box {
    grid-column: span 12;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 175px;
    border-radius: 6px;
    border: 2px solid rgba(255,255,255,.06);
    box-shadow: 0 1px 1px rgba(0,0,0,.25);
    background-clip: padding-box;
    overflow: hidden;

    @media (min-width: 992px) {
        grid-column: span 6;
    }

    .logo-image {
        max-height: 80px;
    }

    .link-container {
        position: absolute;
        bottom: .25rem;
        right: 0;

        .logo-box-link {
            color: $blue;
            margin-right: .5rem;
            text-decoration: none;

            &:hover {
                color: $blue;
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
}
.light {
    background-color: #fff;
    background-image: linear-gradient(45deg,#f6f6f6 25%,transparent 0,transparent 75%,#f6f6f6 0,#f6f6f6),linear-gradient(45deg,#f6f6f6 25%,transparent 0,transparent 75%,#f6f6f6 0,#f6f6f6);
}

.dark {
    background-color: transparent;
    background-image: linear-gradient(45deg,#222427 25%,transparent 0,transparent 75%,#222427 0,#222427),linear-gradient(45deg,#222427 25%,transparent 0,transparent 75%,#222427 0,#222427);
}

.light, .dark {
    background-size: 30px 30px;
    background-position: 0 0, 45px 45px;
}
</style>
