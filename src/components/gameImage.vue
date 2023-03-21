<script lang="ts">
import twitchapi from '@/helpers/twitchapi';

export default {
    props: ['gameTitle'],
    data: () => ({
        imageSource: ''
    }),

    methods: {
        fetchImage() {
            twitchapi.get(`/games?name=${this.gameTitle}`)
            .then((data: any) => {
                const gameData = data.data.data;
                const boxArt = gameData.find((item: any) => {
                    return item.box_art_url;
                });
                boxArt ? this.imageSource = boxArt.box_art_url.replace('{width}x{height}', '144x192') : '';
            })
            .catch((error) => {
                console.log(error);
            });
        }
    },

    mounted() {
        this.fetchImage();
    },
};
</script>

<template>
    <img :src="imageSource" :alt="gameTitle" />
</template>
