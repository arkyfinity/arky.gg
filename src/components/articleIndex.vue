<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { formatDate } from '@/date';
import { Post } from '@/types';

const props = defineProps<{
    type?: string,
    posts?: Post[],
}>();

const router = useRouter();
const routes: Post[] = router.getRoutes()
    .filter(i => i.path.startsWith('/articles') && i.meta.frontmatter.date && i.meta.frontmatter.published === true)
    .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))
    .filter(i => !i.path.endsWith('.html') && i.meta.frontmatter.type === props.type)
    .map(i => ({
        path: i.path,
        title: i.meta.frontmatter.display,
        date: i.meta.frontmatter.date,
    }));
const posts = computed(() => (props.posts || routes));
</script>

<template>
    <ul>
        <template v-if="!posts.length">
            <div>
                <span class="h3">Nothing here yet</span>
            </div>
        </template>
        <router-link
            v-for="route in posts" :key="route.path"
            class="item block font-normal mb-6 mt-2 no-underline"
            :to="route.path"
        >
            <li class="no-underline">
                <div class="title text-lg">
                    {{ route.title }}
                </div>

                <div class="time opacity-50 text-sm -mt-1">
                    {{ formatDate(route.date) }}
                </div>
            </li>
        </router-link>
    </ul>
</template>
