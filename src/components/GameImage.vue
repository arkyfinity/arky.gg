<script setup lang="ts">
import { onMounted, ref } from 'vue';
import twitchapi from '@/helpers/twitchapi';

const props = defineProps<{
    gameTitle: string;
}>();

const imageSource = ref<string>('');

const fetchImage = () => {
    twitchapi.get(`/games?name=${props.gameTitle}`)
        .then((data: any) => {
            const gameData = data.data.data;
            const boxArt = gameData.find((item: any) => {
                return item.box_art_url;
            });
            if (boxArt) imageSource.value = boxArt.box_art_url.replace('{width}x{height}', '144x192');
            else imageSource.value = '';
        })
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
        });
};

onMounted(() => {
    fetchImage();
});
</script>

<template>
    <img :src="imageSource" :alt="gameTitle" />
</template>
