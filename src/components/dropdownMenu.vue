<script setup lang="ts">
import DropdownIcon from '@/icons/dropdown.svg';

const props = defineProps<{
    title: string;
}>();
</script>

<template>
    <div class="dropdown">
        <div class="dropdown-title">{{ props.title }} <DropdownIcon class="icon" /></div>
        <div class="dropdown-menu">
            <slot />
        </div>
    </div>
</template>

<style lang="scss">
@import '@/styles/variables';
@import '@/styles/mixins';

.dropdown {
    position: relative;
    display: flex;
    cursor: pointer;

    @media (min-width: 992px) {
        height: 100%;
    }

    .dropdown-title {
        display: none;

        @media (min-width: 992px) {
            display: flex;
            align-items: center;
            font-weight: 500;
            color: $light;
            border-bottom: 4px solid transparent;
            text-decoration: none;
            transition: color .25s ease;
        }

        @include hover-state() {
            color: darken($light, 25%);
            text-decoration: underline;
        }

        .icon {
            display: none;

            @media (min-width: 992px) {
                display: block;
                margin-left: .2rem;
            }
        }
    }

    .dropdown-menu {
        display: block;

        @media (min-width: 992px) {
            position: absolute;
            top: 100%;
            display: none;
            min-width: 180px;
            padding: .25rem;
            background-color: lighten($dark, 5%);
            border-radius: .5rem;
        }

        > a {
            @media (min-width: 992px) {
                margin: .75rem 0 !important;
                padding: 0 1rem;
            }
        }
    }

    @include hover-state() {
        .dropdown-menu {
            display: block;
        }
    }
}
</style>
