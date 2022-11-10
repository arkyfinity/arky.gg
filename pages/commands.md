---
title: Commands - arky.gg
description: Arky's chat bot commands and information
---

<script setup lang="ts">
import commands from '../src/components/commands.vue';
</script>

# Commands

#### List of Twitch bot commands and what they do

NB: This list does not include commands used by the StreamElements chatbot. Those commands are mostly used for mods and only utilise the storage of commands within StreamElements and/or use their built-in variables.

<commands />

<h3 class="h3" id="the-bot">The Bot</h3>

**Arky_Bot** is custom-made with JavaScript, self-hosted as a Node.js-instance on a server in Helsinki, Finland. All functionality is maintained by me, and can be made available open-source on request should you need anything from it. However, it is currently not possible to add the bot to other channels, and I have no plans re-enable this functionality.

The bot also works in conjunction with a Discord bot, that posts to a notifications channel once the stream goes live, done through a webhooks server running under the hood.

The bot is based on [tmi.js](https://github.com/tmijs/tmi.js), and besides integrating with my own personal API, it has the following API integrations:

- Twitch
- Discord
- Guild Wars 2
- Guild Wars 2 Wiki
- Spotify
{.commands-list}
