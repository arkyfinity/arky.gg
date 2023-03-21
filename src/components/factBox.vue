<script lang="ts" setup>
//
</script>
<template>
    <div class="factBox">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables';

.factBox {
    padding: 1rem;
    background-color: rgba($purple, .55);
    border-radius: .5rem;
    font-size: .875rem;
    color: $light;

    @media (min-width: 992px) {
        max-width: calc(60% - 1rem);
        padding: 1rem 1.5rem;
    }
}
</style>

<style lang="scss">
.factBox {
    p {
        margin-top: 0;

        &:last-of-type {
            margin-bottom: 0;
        }
    }
}
</style>
