<script setup lang="ts">
import Logo from '@/icons/logo-light.svg';
import Articles from '@/icons/articles.svg';
import Builds from '@/icons/builds.svg';
import Commands from '@/icons/commands.svg';
import Brand from '@/icons/brand.svg';
import GitHub from '@/icons/github.svg';
import Twitter from '@/icons/twitter.svg';
</script>

<template>
    <header>
        <a href="/" class="logo" title="Logo" aria-label="Logo">
            <Logo />
        </a>
        <ul class="links">
            <li>
                <router-link to="/articles">
                    <span class="md-visible">Articles</span>
                    <Articles class="md-hidden" />
                </router-link>
            </li>
            <li>
                <router-link to="/builds">
                    <span class="md-visible">Builds</span>
                    <Builds class="md-hidden" />
                </router-link>
            </li>
            <li>
                <router-link to="/commands">
                    <span class="md-visible">Commands</span>
                    <Commands class="md-hidden" />
                </router-link>
            </li>
            <li>
                <router-link to="/brand">
                    <span class="md-visible">Brand</span>
                    <Brand class="md-hidden" />
                </router-link>
            </li>
            <li>
                <a href="https://twitter.com/arkyfinity" target="_blank" rel="noopener" title="Twitter">
                    <Twitter />
                </a>
            </li>
            <li>
                <a href="https://github.com/arkyfinity" target="_blank" rel="noopener" title="GitHub">
                    <GitHub />
                </a>
            </li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/mixins';

header {
    display: flex;
    align-items: center;
    padding: .5rem 1rem 0;
    height: 40px;

    @media (min-width: 992px) {
        height: 54px;
    }

    > a:first-of-type {
        display: flex;

        svg {
            width: auto;
            height: 35px;

            @media (min-width: 768px) {
                height: 40px;
            }
        }

        svg path {
            fill: $light;
        }
    }
}
.links {
    display: flex;
    align-items: center;
    margin: 0 0 0 auto;
    padding: 0;
    list-style: none;

    & > * + *  {
        margin-left: 1.2rem;
    }

    li {
        display: flex;
        align-items: center;

        a {
            display: flex;
            align-items: center;
            color: $light;
            font-weight: 500;
            border-bottom: 4px solid transparent;
            text-decoration: none;
            transition: color .25s ease;

            @include hover-state() {
                color: darken($light, 25%);
                text-decoration: underline;
            }

            &.router-link-active {
                border-bottom: 4px solid;
                border-image-slice: 1;
                border-image-source: linear-gradient(120deg, rgba(146,131,253,1) 0%, rgba(134,221,240,1) 100%);
                text-decoration: none;

                @include hover-state() {
                    border-bottom: 4px solid;
                    border-image-slice: 1;
                    border-image-source: linear-gradient(120deg, rgba(146,131,253,1) 0%, rgba(134,221,240,1) 100%);
                    text-decoration: none;
                }
            }
        }

        svg {
            width: auto;
            height: 24px;

            @include hover-state {
                cursor: pointer;
            }
        }
    }
}

.md-visible {
    @media (max-width: 768px) {
        display: none;
    }
}

.md-hidden {
    @media (min-width: 768px) {
        display: none;
    }
}
</style>
