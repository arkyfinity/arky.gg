import axios from 'axios';

const clientID = import.meta.env.VITE_twitchclient;
const token = import.meta.env.VITE_twitchtoken;

const twitchapi = axios.create({
    baseURL: 'https://api.twitch.tv/helix',
    headers: {
        Authorization: `Bearer ${token}`,
        'Client-ID': clientID,
    },
});

export default twitchapi;
