<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { formatDate } from '@/helpers/date';
import { Post } from '@/types';

const props = defineProps<{
    type?: string;
    posts?: Post[];
    showPosts?: number;
}>();

const router = useRouter();
const routes: Post[] = router.getRoutes()
    .filter((i) => i.path.startsWith('/articles') && i.meta.frontmatter.date && i.meta.frontmatter.published === true)
    .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))
    .filter((i) => !i.path.endsWith('.html') && i.meta.frontmatter.type === props.type)
    .slice(0, props.showPosts ?? props.posts?.length)
    .map((i) => ({
        path: i.path,
        title: i.meta.frontmatter.display,
        date: i.meta.frontmatter.date,
    }));

const posts = computed(() => (props.posts || routes));
</script>

<template>
    <ul class="articleList">
        <template v-if="!posts.length">
            <h5>Nothing here yet</h5>
        </template>
        <router-link v-for="route in posts" :key="route.path" class="articleListPost" :to="route.path">
            <li>
                <div class="articleListTitle">{{ route.title }}</div>
                <div class="articleListDate">{{ formatDate(route.date) }}</div>
            </li>
        </router-link>
    </ul>
</template>

<style lang="scss" scoped>
.articleList {
    margin: 0;
    padding: 0;
    list-style: none;

    a {
        text-decoration: none;
    }

    li {
        margin: 0 0 2rem;
        .articleListTitle {
            font-size: 1.25rem;
            font-weight: 600;
        }

        .articleListDate {
            margin-top: .01rem;
            font-size: .875rem;
            opacity: .5;
        }
    }
}
</style>
