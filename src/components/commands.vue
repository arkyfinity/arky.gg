<template>
    <table class="commands-table">
        <thead>
            <tr>
                <th>Command</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="command in commands" :key="command">
                <td><div class="flex-cell">{{ command.command }} <span v-if="command.vip" class="badge">vip</span><span v-if="command.redeem" class="badge badge--redeem">Redeem</span></div></td>
                <td>{{ command.description }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    data: () => ({
        commands: [
            {
                "command": "!arcdps",
                "description": "Link to my tutorial on how to install ArcDPS"
            },
            {
                "command": "!backseat",
                "description": "Backseat gaming discouragement"
            },
            {
                "command": "!bonk",
                "description": "Bonk yourself by timing yourself out for 1 second to delete what you've said in the chat"
            },
            {
                "command": "!builds",
                "description": "List of builds I'm currently running"
            },
            {
                "command": "!buygw2",
                "description": "A way to purchase Guild Wars 2 by using my affiliate link"
            },
            {
                "command": "!cat",
                "description": "catJAM"
            },
            {
                "command": "!clip",
                "description": "Clip the last 30 seconds automagically. Bot will post a link to the clip in chat, and in my Discord"
            },
            {
                "command": "!commands",
                "description": "A link to this list. The recursion..."
            },
            {
                "command": "!d912pxy",
                "description": "Link to my tutorial on how to chainload d912pxy and ArcDPS"
            },
            {
                "command": "!discord",
                "description": "Link to my Discord"
            },
            {
                "command": "!gw2wiki",
                "description": "Search the Guild Wars 2 Wiki"
            },
            {
                "command": "!ign",
                "description": "Displays my Guild Wars 2 IGN (in-game name)"
            },
            {
                "command": "!kdr",
                "description": "My current WvW matchup including KDR ratio"
            },
            {
                "command": "!kills",
                "description": "My current Guild Wars 2 PvP- and WvW kills"
            },
            {
                "command": "!kiss",
                "description": "catJAMkiss"
            },
            {
                "command": "!lurk",
                "description": "Activate lurk mode",
                "redeem": true
            },
            {
                "command": "!matchup",
                "description": "My current WvW matchup including victory points"
            },
            {
                "command": "!newplayer",
                "description": "A link to ArenaNet's official Guild Wars 2 New Player's Guide, and a motivational speech that we're here to help"
            },
            {
                "command": "!oodie",
                "description": "What is an Oodie? Find out, and get my discount code to get your own"
            },
            {
                "command": "!rank",
                "description": "My current Guild Wars 2 PvP- and WvW rank"
            },
            {
                "command": "!server",
                "description": "Displays which Guild Wars 2 server/world Arky is currently residing"
            },
            {
                "command": "!serverstatus <server>",
                "description": "Display a Guild Wars 2 server's current population status"
            },
            {
                "command": "!so",
                "description": "Shoutout someone on Twitch",
                "vip": true
            },
            {
                "command": "!socials",
                "description": "Link to all my socials"
            },
            {
                "command": "!song",
                "description": "Displays current song playing, or an error if no song is playing"
            },
            {
                "command": "!specs",
                "description": "Link to my PC specs"
            },
            {
                "command": "!steam",
                "description": "My Steam ID"
            },
            {
                "command": "!twitter",
                "description": "Link to my Twitter"
            },
            {
                "command": "!unlurk",
                "description": "Deactivate lurk mode",
                "redeem": true
            },
            {
                "command": "!uptime",
                "description": "Uptime of the current stream. Will display an error if stream is offline"
            },
            {
                "command": "!welcome",
                "description": "Standard welcome message - remember to refresh your stream"
            },
            {
                "command": "!youtube",
                "description": "Link to my YouTube channel"
            }
        ]
    })
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.flex-cell {
    display: flex;
    align-items: center;
}

.commands-table {
    margin: 0 0 3rem;
    table-layout: auto;
    border-collapse: collapse;
    line-height: 1.5;

    thead {
        th {
            padding: .5rem 1rem;
            text-align: left;
        }
    }

    tbody {
        tr {
            td {
                padding: .5rem 1rem;
                border: 1px solid rgba(255,255,255,.3);

                &:first-of-type {
                    font-family: $font-code;
                    font-size: 1rem;
                }
            }
        }

    }

    .badge {
        display: inline-block;
        margin-left: auto;
        padding: .25rem .5rem;
        color: $dark;
        background-color: $light;
        border-radius: .25rem;
        font-size: .5rem;
        font-family: $font;
        font-weight: 700;
        line-height: 1;
        text-transform: uppercase;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;

        &--redeem {
            background-color: $purple;
            color: $light;
        }
    }
}
</style>
