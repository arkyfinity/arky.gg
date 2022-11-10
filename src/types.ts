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
}

export type Build = {
    item: string;
};

export type ColorBox = {
    name: string;
    hex: string;
};

export type Theme = {
    isLight?: boolean;
    isDark?: boolean;
}
