import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import {
  DateFormat,
  MILLISECONDS_IN_HOUR,
  MILLISECONDS_IN_DAY,
} from '../data.js';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function humanizeDate(date, format) {
  return date ? dayjs(date).format(format) : '';
}

function getDifferenceInTime(start, end) {
  const difference = dayjs(end).diff(start);

  if (difference < MILLISECONDS_IN_HOUR) {
    return dayjs(difference).format(DateFormat.MINUTES_WITH_POSTFIX);
  }

  if (difference > MILLISECONDS_IN_HOUR && difference < MILLISECONDS_IN_DAY) {
    return dayjs(difference).format(DateFormat.HOUR_MINUTES_WITH_POSTFIX);
  }

  if (difference > MILLISECONDS_IN_DAY) {
    return dayjs(difference).format(DateFormat.DAY_HOUR_MINUTES_WITH_POSTFIX);
  }
}

const isWaypointFuture = (date) => date && dayjs().isAfter(date);
const isWaypointPast = (date) => date && dayjs().isBefore(date);
const isWaypointPastAndFuture = (dateFrom, dateTo) => dayjs().isSameOrBefore(dateFrom) && dayjs().isSameOrAfter(dateTo);
const sortByTime = (a, b) => dayjs(b.dateTo).diff(b.dateFrom) - dayjs(a.dateTo).diff(a.dateFrom);
const sortByPrice = (a, b) => b.basePrice - a.basePrice;


export {
  humanizeDate,
  getDifferenceInTime,
  isWaypointFuture,
  isWaypointPast,
  isWaypointPastAndFuture,
  sortByTime,
  sortByPrice,
};
