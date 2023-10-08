import { ViteSSGContext } from 'vite-ssg';

export type UserModule = (ctx: ViteSSGContext) => void;

export interface Post {
    path: string;
    title: string;
    date: string;
    desc?: string;
};

export type Command = {
    command: string;
    description: string;
    redeem?: boolean;
    vip?: boolean;
};

export type Color = {
    name: string;
    from: string;
    to: string;
    angle: string;
};

export type Build = {
    name: string;
    elitespec: string;
    link: string;
    shorturl?: string;
    tag: string;
};

export type ColorBox = {
    name: string;
    hex: string;
};

export type Theme = {
    isLight?: boolean;
    isDark?: boolean;
};

type ScheduleCategory = {
    id: number;
    name: string;
};

export type ScheduleItem = {
    canceled_until: string;
    category: ScheduleCategory;
    end_time: string;
    id: string;
    is_recurring: boolean;
    start_time: string;
    title: string;
    box_art?: string;
};

export type TwitchGame = {
    id: string;
    name: string;
    box_art_url: string;
    igcb_id: string | number;
};
