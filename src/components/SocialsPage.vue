<script setup lang="ts">
import SocialBox from './SocialBox.vue';
import Twitch from '@/icons/social-icon-twitch.svg?component';
import Twitter from '@/icons/social-icon-twitter.svg?skipsvgo';
import Tiktok from '@/icons/social-icon-tiktok.svg?component';
import YouTube from '@/icons/social-icon-youtube.svg?component';
import Discord from '@/icons/social-icon-discord.svg?component';
import Instagram from '@/icons/social-icon-instagram.svg?component';
import GitHub from '@/icons/social-icon-github.svg?component';
</script>

<template>
    <div class="rowGrid">
        <SocialBox media="Twitch" url="https://twitch.tv/arkyfinity">
            <Twitch />
        </SocialBox>

        <SocialBox media="Twitter" url="https://twitter.com/@arkyfinity">
            <Twitter />
        </SocialBox>

        <SocialBox media="TikTok" url="https://tiktok.com/arkyfinity">
            <Tiktok />
        </SocialBox>

        <SocialBox media="YouTube" url="https://youtube.com/@arkyfinity">
            <YouTube />
        </SocialBox>

        <SocialBox media="Discord" url="https://discord.gg/sPgbNp7">
            <Discord />
        </SocialBox>

        <SocialBox media="Instagram" url="https://instagram.com/arkyfinity">
            <Instagram />
        </SocialBox>

        <SocialBox media="GitHub" url="https://github.com/arkyfinity">
            <GitHub />
        </SocialBox>
    </div>
</template>
