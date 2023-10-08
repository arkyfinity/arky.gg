import '@/styles/app.scss';

import autoRoutes from 'pages-generated';
import { ViteSSG } from 'vite-ssg';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat.js';
import App from '@/App.vue';

const routes = autoRoutes.map((route) => {
    return {
        ...route,
        alias: route.path.endsWith('/') ? `${route.path}index.html` : `${route.path}.html`,
    };
});

const scrollBehavior = (to: any, from: any, savedPosition: any) => {
    if (savedPosition)
        return savedPosition;
    else
        return { top: 0 };
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
