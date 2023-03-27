import { basename, resolve, join } from 'path';
import { defineConfig } from 'vite';
import fs from 'fs-extra';
import Pages from 'vite-plugin-pages';
import Inspect from 'vite-plugin-inspect';
import Components from 'unplugin-vue-components/vite';
import Markdown from 'vite-plugin-vue-markdown';
import Vue from '@vitejs/plugin-vue';
import Shiki from 'markdown-it-shiki';
import SvgLoader from 'vite-svg-loader';
import matter from 'gray-matter';
import AutoImport from 'unplugin-auto-import/vite';
import Attrs from 'markdown-it-attrs';
import anchor from 'markdown-it-anchor';
import LinkAttributes from 'markdown-it-link-attributes';

import { slugify } from './src/slugify';

const isDev = process.env.NODE_ENV !== 'production';

export const aliases = {
    '@': resolve(__dirname, './src'),
    '@/icons': resolve(__dirname, './src/icons'),
    '@/pages': resolve(__dirname, './pages'),
    '@/styles': resolve(__dirname, './src/styles'),
};

const nightOwlDark = '../../../../../../Night-Owl-color-theme';
const nightOwlLight = '../../../../../../Night-Owl-Light-color-theme';

export default defineConfig({
    resolve: {
        alias: [
            { find: /~(.+)/, replacement: join(process.cwd(), './node_modules/$1') },
            { find: /@\//, replacement: join(process.cwd(), './src') + '/' },
            { find: /@\/icons/, replacement: join(process.cwd(), './src/icons') + '/' },
            { find: /@\/pages/, replacement: join(process.cwd(), './pages') + '/' },
            { find: /@\/styles/, replacement: join(process.cwd(), './src/styles') + '/' },
        ]
    },

    optimizeDeps: {
        include: [
            'vue',
            'vue-router',
            '@vueuse/core',
            '@vueuse/head',
        ],
    },

    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),

        SvgLoader(),

        Pages({
            extensions: ['vue', 'md'],
            pagesDir: 'pages',
            extendRoute(route) {
                const path = resolve(__dirname, route.component.slice(1));
                const md = fs.readFileSync(path, 'utf-8');
                const { data } = matter(md);
                route.meta = Object.assign(route.meta || {}, { frontmatter: data });

                return route;
            },
        }),

        Markdown({
            wrapperComponent: 'page',
            wrapperClasses: 'docs-content relative',
            headEnabled: true,
            markdownItOptions: {
                html: true,
                quotes: '""\'\''
            },
            markdownItSetup(md) {
                md.use(Shiki, {
                    theme: {
                        light: nightOwlLight,
                        dark: nightOwlDark,
                    },
                })
                md.use(LinkAttributes, {
                    pattern: /^https?:/,
                    attrs: {
                        target: '_blank',
                        rel: 'noopener'
                    }
                })
                md.use(anchor, {
                    slugify,
                    tabIndex: false,
                    level: [1, 2, 3],
                })
                md.use(Attrs)
            },

            frontmatterPreprocess(frontmatter, options, id, defaults) {
                (() => {
                    if (!id.endsWith('.md')) return;

                    const route = basename(id, '.md');
                    if (route === 'index' || frontmatter.image || !frontmatter.title) return;
                })();

                const head = defaults(frontmatter, options);
                return { head, frontmatter };
            },
        }),

        AutoImport({
            imports: [
                'vue',
                'vue-router',
                '@vueuse/core',
                '@vueuse/head',
            ],
            dts: 'src/auto-imports.d.ts',
        }),

        Components({
            extensions: ['vue', 'md'],
            dts: 'src/components.d.ts',
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        }),

        Inspect({
            enabled: !isDev ? true : false,
        }),
    ],

    server: {
        fs: {
            strict: true,
        }
    },

    // @ts-ignore
    ssgOptions: {
        script: 'async',
        formatting: 'minify',
    },
});
