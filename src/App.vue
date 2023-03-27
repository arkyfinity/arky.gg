<script setup lang="ts">
useHead({
    meta: [
        { property: 'author', content: 'Arkyfinity' },
        { property: 'og:image', content: 'https://arky.gg/images/og_image.png' },
        { property: 'og:type', content: 'website' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:creator', content: '@arkyfinity' },
        { property: 'twitter:site', content: '@arkyfinity' },
    ],
});
</script>

<template>
    <arky-header />
    <main>
        <router-view />
    </main>
    <arky-footer />
</template>
