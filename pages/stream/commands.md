---
title: Commands - arky.gg
description: Arky's chat bot commands and information
---

<script setup lang="ts">
import commands from '../../src/components/botCommands.vue';
</script>

# Commands

<commands />

<h3 class="h3" id="the-bot">The Bot</h3>

**Arky_Bot** is custom-made with TypeScript, self-hosted as a Node.js-instance on a server in Helsinki, Finland. All functionality is maintained by me, and can be made available open-source on request should you need anything from it. However, it is currently not possible to add the bot to other channels, and I have no plans re-enable this functionality.

The bot also works in conjunction with a Discord bot, that posts to a notifications channel once the stream goes live, done through a webhooks server running under the hood.

The bot is build on top of [tmi.js](https://github.com/tmijs/tmi.js) with custom functionality, and besides integrating with my own personal API, it has the following API integrations:

- Twitch
- Discord
- Guild Wars 2
- Guild Wars 2 Wiki
- Spotify
{.commands-list}
