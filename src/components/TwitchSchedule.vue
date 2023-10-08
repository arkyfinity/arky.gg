<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import twitchapi from '@/helpers/twitchapi';
import { ScheduleItem } from '@/types';
import {
    formatDay,
    formatDayNumber,
    formatMonthName,
    formatTime,
    formatTimezone,
} from '@/helpers/date';

const props = defineProps<{
    numberOfDays: number;
    stream: boolean;
}>();

const calendar = ref<ScheduleItem[]>([]);

const fetchSchedule = () => {
    twitchapi.get(`/schedule?broadcaster_id=${import.meta.env.VITE_broadcasterId}&first=10`)
        .then((data: any) => {
            const calObjects = data.data.data.segments;
            const calMap = calObjects.filter((item: ScheduleItem) => item.canceled_until === null)
                .slice(0, `${props.numberOfDays}`)
                .map((item: ScheduleItem) => item);

            calendar.value = calMap;
        })
        .catch((error: any) => {
            // eslint-disable-next-line no-console
            console.log('error', error);
        });
};

const isDev = computed(() => {
    return process.env.NODE_ENV !== 'production';
});

const formattedDay = (dateString: string | Date): string => {
    return formatDay(dateString);
};

const formattedNumber = (dateString: string | Date): string => {
    return formatDayNumber(dateString);
};

const formattedMonthName = (dateString: string | Date): string => {
    return formatMonthName(dateString);
};

const formattedTime = (dateString: string | Date): string => {
    return formatTime(dateString);
};

const formattedTimezone = (dateString: string | Date): string => {
    return formatTimezone(dateString);
};

onMounted(() => {
    fetchSchedule();
});
</script>

<template>
    <div class="calendar-grid">
        <div v-for="item in calendar" :key="item.start_time" class="calendar-item">
            <div class="calendar-item-date">
                <div class="calendar-item-date-day">{{ formattedDay(item.start_time) }}</div>
                <div class="calendar-item-date-number">{{ formattedNumber(item.start_time) }}</div>
                <div class="calendar-item-date-month">{{ formattedMonthName(item.start_time) }}</div>
            </div>
            <div class="calendar-item-content">
                <div class="calendar-item-image">
                    <game-image :game-title="item.category.name" />
                </div>
                <div class="calendar-item-info">
                    <div class="calendar-item-info-title">{{ item.title }}</div>
                    <div class="calendar-item-info-subtitle">{{ item.category.name }}</div>
                    <div class="calendar-item-info-time">
                        {{ formattedTime(item.start_time) }} - {{ formattedTime(item.end_time) }} <span class="calendar-item-info-time-timezone">{{ formattedTimezone(item.start_time) }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="stream" class="twitch-iframe">
        <iframe :src="`https://player.twitch.tv?autoplay=true&amp;channel=arkyfinity&amp;muted=true&amp;parent=${isDev ? '127.0.0.1' : 'arky.gg'}&amp;theme=dark`" :parent="isDev ? '127.0.0.1' : 'arky.gg'" allowfullscreen scrolling="no" frameborder="0" />
    </div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/mixins';

.calendar-grid {
    display: grid;
    grid-template-columns: repeat(1, 2fr);
    grid-template-rows: 2fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    margin: 2rem 0 3rem;

    @media (min-width: 992px) {
        grid-template-columns: repeat(2, 2fr);
    }

    .calendar-item {
        display: flex;
        padding: 1rem;
        border: none;
        border-left: 6px solid;
        border-image-slice: 1;
        border-image-source: linear-gradient(166deg, rgba(146,131,253,1) 0%, rgba(134,221,240,1) 100%);
        border-top-right-radius: .25rem;
        border-bottom-right-radius: .25rem;
        background-color: lighten($dark, 5%);

        .calendar-item-date {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-weight: 700;
            line-height: 1;

            .calendar-item-date-day {
                font-size: .75rem;
                text-transform: uppercase;
            }

            .calendar-item-date-number {
                margin-top: .25rem;
                font-size: 2.25rem;
            }

            .calendar-item-date-month {
                margin-top: .25rem;
                font-size: .75rem;
                text-transform: uppercase;
            }
        }

        .calendar-item-content {
            display: flex;
            margin-left: 1rem;

            .calendar-item-image {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                width: 51px;
                height: auto;

                img {
                    display: block;
                    width: 100%;
                    height: auto;
                    border: none;
                }
            }

            .calendar-item-info {
                margin-left: 1rem;
                .calendar-item-info-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    line-height: 1.125;
                    text-transform: uppercase;
                }

                .calendar-item-info-subtitle {
                    margin: .25rem 0;
                    font-size: .875rem;
                    font-weight: 700;
                    color: darken($light, 40%);
                    text-transform: uppercase;
                }

                .calendar-item-info-time {
                    font-size: .75rem;
                    font-weight: 700;
                    text-transform: uppercase;

                    .calendar-item-info-time-timezone {
                        color: darken($light, 35%);
                    }
                }
            }
        }
    }
}

.twitch-iframe {
    position: relative;
    display: none;
    width: 100%;

    @media (min-width: 992px) {
        display: block;
        padding-top: 56.25%;
    }

    iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        max-width: 100%;
        top: 0;
        left: 0;
    }
}
</style>
