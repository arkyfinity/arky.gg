<template>
    <ul class="builds">
        <li v-for="(build, index) in builds" :key="index" v-html="linkify(build.item)"></li>
    </ul>
</template>

<script>
export default {
    data: () => ({
        builds: []
    }),

    async mounted() {
        this.builds = await fetch('https://api.arky.dk/builds').then(res => res.json())
    },

    methods: {
        linkify(text) {
            const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g
            return text.replace(urlRegex, (url) => {
                return '<a href="' + url + '" target="_blank" rel="noopener">' + url + '</a>'
            })
        }
    }
}
</script>

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
