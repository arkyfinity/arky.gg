import autoRoutes from 'pages-generated';
import { ViteSSG } from 'vite-ssg';
import { RouterScrollBehavior } from 'vue-router';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat.js';
import App from '@/App.vue';

import '@/styles/app.scss';

declare module 'vue-router' {
    interface RouteMeta {
        frontmatter: any;
    }
};

const routes = autoRoutes.map((route) => {
    return {
        ...route,
        alias: route.path.endsWith('/') ? `${route.path}index.html` : `${route.path}.html`,
    };
});

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
    if (savedPosition)
        return savedPosition;
    else
        return { top: 0 }
};

export const createApp = ViteSSG(
    App,
    { routes, scrollBehavior },
    ({ router, isClient }) => {
        dayjs.extend(LocalizedFormat);

        if (isClient) {
            router.beforeEach(() => { });
            router.afterEach(() => { });
        }
    },
);
