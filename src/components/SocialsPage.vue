<script setup lang="ts">
import SocialBox from './SocialBox.vue';
import Twitch from '@/icons/social-icon-twitch.svg';
import Twitter from '@/icons/social-icon-twitter.svg';
import Tiktok from '@/icons/social-icon-tiktok.svg';
import YouTube from '@/icons/social-icon-youtube.svg';
import Discord from '@/icons/social-icon-discord.svg';
import Instagram from '@/icons/social-icon-instagram.svg';
import GitHub from '@/icons/social-icon-github.svg';
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
