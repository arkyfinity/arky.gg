import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat.js';

dayjs.extend(advancedFormat);

export const formatDate = (d: string | Date): string => {
    const date = dayjs(d);
    if (date.year() === dayjs().year()) return date.format('MMMM Do');
    return date.format('MMMM Do, YYYY');
};
