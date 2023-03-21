<script setup lang="ts">
import Logo from '@/icons/logo-light.svg';
import BurgerIcon from '@/icons/burger.svg';
import CloseIcon from '@/icons/close.svg';
import GitHub from '@/icons/github.svg';
import Twitch from '@/icons/twitch.svg';
import Twitter from '@/icons/twitter.svg';

let isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
    if (window.innerWidth <= 992) {
        document.body.style.overflow = document.body.style.overflow ? '' : 'hidden';
    }
}
</script>

<template>
    <header>
        <button class="mobile-menu-toggle" @click="toggleMenu">
            <BurgerIcon />
        </button>
        <a href="/" class="logo" title="Logo" aria-label="Logo">
            <Logo />
        </a>
        <nav class="navigation" :class="isOpen ? 'activated' : ''">
            <Logo class="mobile-logo" />
            <button class="mobile-menu-close" @click="toggleMenu">
                <CloseIcon />
            </button>
            <ul class="links">
                <li>
                    <router-link to="/about" @click="toggleMenu()">About</router-link>
                </li>
                <li>
                    <dropdown-menu title="Info" :class="{'router-link-active': $route.path.includes('/info/')}">
                        <router-link to="/info/brand" @click="toggleMenu()">Brand</router-link>
                        <router-link to="/info/gear" @click="toggleMenu()">Gear</router-link>
                        <a href="https://streamlabs.com/arkyfinity" target="_blank" rel="noopener" title="Merch">Merch Store</a>
                    </dropdown-menu>
                </li>
                <li>
                    <dropdown-menu title="Stream" :class="{'router-link-active': $route.path.includes('/stream/')}">
                        <router-link to="/stream/schedule" @click="toggleMenu()">Schedule</router-link>
                        <router-link to="/stream/commands" @click="toggleMenu()">Twitch Bot</router-link>
                    </dropdown-menu>
                </li>
                <li>
                    <router-link to="/socials" @click="toggleMenu()">Socials</router-link>
                </li>
                <li>
                    <router-link to="/contact" @click="toggleMenu()">Contact</router-link>
                </li>
            </ul>

            <ul class="links right">
                <li>
                    <router-link to="/articles" @click="toggleMenu()">Articles</router-link>
                </li>
                <li>
                    <dropdown-menu title="Guild Wars 2" :class="{'router-link-active': $route.path.includes('/gw2/')}">
                        <router-link to="/gw2/builds" @click="toggleMenu()">Builds</router-link>
                        <a href="https://gw2.arky.gg" target="_blank" rel="noopener" title="GW2 server population">Server population</a>
                    </dropdown-menu>
                </li>
                <li>
                    <dropdown-menu title="Ashes of Creation" :class="{'router-link-active': $route.path.includes('/aoc/')}">
                        <router-link to="/aoc/info" @click="toggleMenu()">Info</router-link>
                        <router-link to="/aoc/arky-talks-ashes" @click="toggleMenu()">Arky talks Ashes</router-link>
                    </dropdown-menu>
                </li>
            </ul>
            <ul class="link-icons">
                <li>
                    <a href="https://twitch.tv/arkyfinity" target="_blank" rel="noopener" title="Twitch">
                        <Twitch />
                    </a>
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
        </nav>
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
        margin: 0 auto;

        @media (min-width: 992px) {
            margin: 0 2rem 0 0;
        }

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

    .mobile-menu-toggle {
        display: inline-flex;
        margin: 0;
        padding: 0;
        background-color: transparent;
        border: none;
        color: $light;
        transition: color .25s ease;
        cursor: pointer;

        @include hover-state() {
            color: darken($light, 15%);
        }


        @media (min-width: 992px) {
            display: none;
        }
    }
}

.navigation {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 270px;
    height: 100vh;
    padding: .5rem 1rem;
    background-color: darken($dark, 5%);
    transform: translateX(-270px);
    transition: transform .25s cubic-bezier(0.075, 0.82, 0.165, 1);
    z-index: 3;

    @media (min-width: 992px) {
        position: relative;
        flex-direction: row;
        width: 100%;
        height: 100%;
        padding: 0;
        background-color: transparent;
        transform: translateX(0);
    }

    &.activated {
        transform: translateX(0);
    }

    .mobile-logo {
        height: 60px;
        margin: 0 auto 1rem 0;

        @media (min-width: 992px) {
            display: none;
        }
    }

    .mobile-menu-close {
        position: absolute;
        right: .5rem;
        top: .5rem;
        background-color: transparent;
        border: 0;
        color: $light;
        transition: color .25s ease;
        cursor: pointer;

        @include hover-state() {
            color: darken($light, 15%);
        }

        @media (min-width: 992px) {
            display: none;
        }
    }

    .links {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        list-style: none;

        @media (min-width: 992px) {
            height: 100%;
            flex-direction: row;
            align-items: center;
        }

        [class^="dropdown-menu"] {
            @media (min-width: 992px) {
                left: 0;
            }
        }

        &.right {
            @media (min-width: 992px) {
                margin-left: auto;
            }
        }

        & > * + *  {
            @media (min-width: 992px) {
                margin-left: 1.2rem;
            }
        }

        li {
            display: flex;
            align-items: center;

            @media (min-width: 992px) {
                height: 100%;
            }

            a {
                display: block;
                margin: 0 0 1rem;
                color: $light;
                font-weight: 500;
                text-decoration: none;
                transition: color .25s ease;

                @media (min-width: 992px) {
                    display: flex;
                    align-items: center;
                    height: 100%;
                    margin: 0;
                }

                @include hover-state() {
                    color: darken($light, 25%);
                    text-decoration: underline;
                }
            }

            > a {
                border-bottom: 4px solid transparent;

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

    .link-icons {
        position: absolute;
        top: calc(100% - 40px);
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;

        @media (min-width: 992px) {
            position: relative;
            top: auto;
            align-items: center;
        }

        li {
            margin: 0 1rem 0 0;

            @media (min-width: 992px) {
                margin: 0 0 0 1rem;
            }
        }
    }
}
</style>

<style lang="scss">
@import '@/styles/variables';
@import '@/styles/mixins';

.navigation {
    .links {
        &.right {
            [class^="dropdown-menu"] {
                @media (min-width: 992px) {
                    right: 0;
                }
            }
        }

        [class^="dropdown"] {
            &.router-link-active {
                .dropdown-title {
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
        }
    }
}
</style>
