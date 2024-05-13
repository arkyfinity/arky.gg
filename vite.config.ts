import { basename, resolve, join } from 'node:path';
import crypto from 'node:crypto';
import { defineConfig } from 'vite';
import fs from 'fs-extra';
import Pages from 'vite-plugin-pages';
import Inspect from 'vite-plugin-inspect';
import Components from 'unplugin-vue-components/vite';
import Markdown from 'unplugin-vue-markdown/vite';
import Vue from '@vitejs/plugin-vue';
import SvgLoader from 'vite-svg-loader';
import matter from 'gray-matter';
import AutoImport from 'unplugin-auto-import/vite';
import Attrs from 'markdown-it-attrs';
import anchor from 'markdown-it-anchor';
import LinkAttributes from 'markdown-it-link-attributes';
import { bundledLanguages, getHighlighter } from 'shikiji';

import { slugify } from './src/helpers/slugify';

const isDev = process.env.NODE_ENV !== 'production';

const cspNonce = crypto.randomBytes(32).toString('base64');

const mocha = JSON.parse(fs.readFileSync('./catppuccin-mocha.json', 'utf-8'));
const latte = JSON.parse(fs.readFileSync('./catppuccin-latte.json', 'utf-8'));

const promises: Promise<any>[] = [];

export const aliases = {
    '@': resolve(__dirname, './src'),
    '@/icons': resolve(__dirname, './src/icons'),
    '@/pages': resolve(__dirname, './pages'),
    '@/styles': resolve(__dirname, './src/styles'),
};

export default defineConfig({
    resolve: {
        alias: [
            { find: /~(.+)/, replacement: join(process.cwd(), './node_modules/$1') },
            { find: /@\//, replacement: `${join(process.cwd(), './src')}/` },
            { find: /@\/icons/, replacement: `${join(process.cwd(), './src/icons')}/` },
            { find: /@\/pages/, replacement: `${join(process.cwd(), './pages')}/` },
            { find: /@\/styles/, replacement: `${join(process.cwd(), './src/styles')}/` },
        ],
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

        Pages({
            extensions: ['vue', 'md'],
            pagesDir: 'pages',
            extendRoute(route) {
                const path = resolve(__dirname, route.component.slice(1));

                if (path.endsWith('.md')) {
                    const md = fs.readFileSync(path, 'utf-8');
                    const { data } = matter(md);
                    route.meta = Object.assign(route.meta || {}, { frontmatter: data });
                }

                return route;
            },
        }),

        Markdown({
            wrapperComponent: 'page',
            wrapperClasses: 'docs-content relative',
            headEnabled: true,
            exportFrontmatter: false,
            exposeFrontmatter: false,
            exposeExcerpt: false,
            markdownItOptions: {
                html: true,
                quotes: '""\'\'',
            },
            async markdownItSetup(md) {
                const shiki = await getHighlighter({
                    themes: [latte, mocha],
                    langs: Object.keys(bundledLanguages) as any,
                });

                md.use((markdown) => {
                    markdown.options.highlight = (code, lang) => {
                        return shiki.codeToHtml(code, {
                            lang,
                            themes: {
                                light: latte,
                                dark: mocha,
                            },
                        });
                    };
                });

                md.use(LinkAttributes, {
                    pattern: /^https?:/,
                    attrs: {
                        target: '_blank',
                        rel: 'noopener',
                    },
                });

                md.use(anchor, {
                    slugify,
                    tabIndex: false,
                    level: [1, 2, 3],
                });

                md.use(Attrs);
            },

            frontmatterPreprocess(frontmatter, options, id, defaults) {
                (() => {
                    if (!id.endsWith('.md')) return;

                    const route = basename(id, '.md');
                    // eslint-disable-next-line no-useless-return
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
        }),

        Components({
            extensions: ['vue', 'md'],
            dts: true,
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        }),

        Inspect({
            enabled: !isDev,
        }),

        SvgLoader(),

        {
            name: 'await',
            async closeBundle() {
                await Promise.all(promises);
            },
        },
    ],

    server: {
        fs: {
            strict: true,
        },
    },

    ssgOptions: {
        script: 'async',
        formatting: 'minify',
    },

    html: {
        cspNonce: `nonce-${cspNonce}`,
    },
});
