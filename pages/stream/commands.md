---
title: Commands - arky.gg
description: Arky's chat bot commands and information
---

# Commands

<BotCommands />

<h3 class="h3" id="the-bot">The Bot</h3>

**Arky_Bot** is custom-made with TypeScript, self-hosted as a Node.js-instance on a server in Frankfurt, Germany. All functionality is maintained by me, and can be made available open-source on request should you need anything from it. However, it is currently not possible to add the bot to other channels, and I have no plans re-enable this functionality at this point in time.

The bot also works in conjunction with a Discord bot, that posts to a notifications channel once the stream goes live, done through an eventsub service running under the hood. It also serves as a remote console.log, whenever there's an error.

The bot is build on top of [tmi.js](https://github.com/tmijs/tmi.js) with custom functionality, and besides integrating with my own personal API, it has the following API integrations:

- Twitch
- Discord
- Guild Wars 2
- Guild Wars 2 Wiki
- Triggerfyre
- YouTube Music
{.commands-list}
