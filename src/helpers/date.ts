import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat.js';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(advancedFormat);
dayjs.extend(timezone);

export const formatDate = (d: string | Date): string => {
    const date = dayjs(d);
    return date.format('MMMM Do, YYYY');
};

export const formatDay = (d: string | Date): string => {
    const date = dayjs(d);
    return date.format('ddd');
};

export const formatDayNumber = (d: string | Date): string => {
    const date = dayjs(d);
    return date.format('DD');
};

export const formatMonthName = (d: string | Date): string => {
    const date = dayjs(d);
    return date.format('MMM');
};

export const formatTime = (d: string | Date): string => {
    const date = dayjs(d);
    return date.format('HH:mm');
};

export const formatTimezone = (d: string | Date): string => {
    const date = dayjs(d);
    return date.format('z').replace('GMT', 'UTC');
};
