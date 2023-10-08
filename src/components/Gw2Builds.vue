<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { Build } from '@/types';

const buildList = ref<Build[] | null>(null);

const fetchData = () => {
    fetch('https://api.arky.dk/builds')
        .then((res) => res.json())
        .then((data: Build[]) => {
            buildList.value = data;
        })
        .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
        });
};

const buildImage = (spec: string) => {
    let image = '';
    if (spec) {
        switch (spec) {
            case 'harbinger':
                image = 'https://wiki.guildwars2.com/images/a/a7/Harbinger_icon_white.png';
                break;
            case 'necromancer':
                image = 'https://wiki.guildwars2.com/images/a/ab/Necromancer_icon_white.png';
                break;
            case 'reaper':
                image = 'https://wiki.guildwars2.com/images/b/be/Reaper_icon_white.png';
                break;
            case 'scourge':
                image = 'https://wiki.guildwars2.com/images/8/80/Scourge_icon_white.png';
                break;
            default:
                image = 'https://wiki.guildwars2.com/images/a/a9/Any_tango_icon_48px.png';
        }
    }

    return image;
};

const wvwBuilds = computed(() => {
    return buildList.value?.filter((build: Build) => build.tag === 'WvW');
});

const pvpBuilds = computed(() => {
    return buildList.value?.filter((build: Build) => build.tag === 'PvP');
});

onMounted(() => {
    fetchData();
});
</script>

<template>
    <h3 class="builds-header mt-2">WvW builds</h3>
    <ul class="builds">
        <li v-for="build in wvwBuilds" :key="build.name">
            <div class="builds-icon">
                <img :src="buildImage(build.elitespec)" :alt="build.name" />
            </div>
            <div class="builds-info">
                <div class="builds-name">{{ build.name }}</div>
                <div class="builds-link">Link: <a :href="build.link" target="_blank" rel="noopener">GW2Skills</a></div>
            </div>
        </li>
    </ul>

    <h3 class="builds-header">PvP builds</h3>
    <ul class="builds mb-0">
        <li v-for="build in pvpBuilds" :key="build.name">
            <div class="builds-icon">
                <img :src="buildImage(build.elitespec)" :alt="build.name" />
            </div>
            <div class="builds-info">
                <div class="builds-name">{{ build.name }}</div>
                <div class="builds-link">Link: <a :href="build.link" target="_blank" rel="noopener">GW2Skills</a></div>
            </div>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/mixins';

.builds-header {
    margin-bottom: 1rem;
}

ul {
    margin: 0 0 3rem;
    padding: 0;
    list-style: none;

    li {
        display: flex;
        align-items: center;
        margin: 0 0 1.5rem -.5rem;

        .builds-icon {
            width: 32px;
            height: 32px;
            margin-right: .5rem;

            img {
                width: 100%;
                height: auto;
                border: none;
            }
        }

        .builds-info {
            .builds-link {
                font-size: .75rem;
                color: darken($light, 25%);
            }
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
