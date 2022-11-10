<script lang="ts">
import { Build } from '@/types';

export default {
    data: () => ({
        buildList: [] as Build[],
    }),

    methods: {
        fetchData() {
            fetch('https://api.arky.dk/builds')
            .then(res => res.json())
            .then((data: Build[]) => {
                this.buildList = data;
            })
            .catch((error) => {
                console.log(error);
            });
        },

        linkify(text: string) {
            const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
            return text.replace(urlRegex, (url) => {
                return `<a href="${url}" target="_blank" rel="noopener">${url}</a>`;
            });
        },
    },

    mounted() {
        this.fetchData();
    },
};
</script>

<template>
    <ul class="builds">
        <li
            v-for="(build, index) in buildList"
            :key="index"
            v-html="linkify(build.item)">
        </li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    margin: 2rem 0 0;
    padding: 0;
    list-style: none;

    li {
        line-height: 2;

        &:before {
            content: "-";
            margin-right: 5px;
        }
    }
}
</style>

<style lang="scss">
.builds {
    li {
        a {
            font-weight: 500;
        }
    }
}
</style>
