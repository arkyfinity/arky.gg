<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    url: string;
    media: string;
}>();

const short = computed(() => {
    return props.url.slice(8);
});
</script>

<template>
    <a class="social-link" :href="props.url" :title="props.media" rel="noopener" target="_blank">
        <div class="social-box">
            <div class="social-icon">
                <slot />
            </div>
            <div class="social-info">
                <div class="social-name">{{ props.media }}</div>
                <div class="social-short">{{ short }}</div>
            </div>
        </div>
    </a>
</template>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/mixins';

.social-link {
    @include hover-state() {
        .social-box {
            background-color: $darker;
        }
    }
}
.social-box {
    position: relative;
    display: flex;
    margin: 0 0 1.5rem;
    padding: 1rem 0;
    background-color: $dark;
    background-clip: padding-box;
    border-radius: 6px;
    border: 5px solid transparent;
    color: $light;
    transition: background-color .25s ease;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: -5px;
        border-radius: inherit;
        background: linear-gradient(120deg, $purple, $blue);
        z-index: -1;
    }

    .social-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
        height: 50px;
        margin-right: 10px;

        @media (min-width: 786px) {
            height: 85px;
        }
    }

    .social-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 50px;

        @media (min-width: 768px) {
            height: 85px;
        }

        .social-name {
            font-size: 1.5rem;
            font-weight: 600;
            margin: 0 0 .5rem;
        }

        .social-short {
            font-size: .925rem;
            font-weight: 300;
            color: rgba(255,255,255,.35);
        }
    }
}
</style>

<style lang="scss">
.social-link {
    grid-column: span 12;
    text-decoration: none;
}

.social-icon {
    svg {
        width: auto;
        height: 75%;
    }
}
</style>
