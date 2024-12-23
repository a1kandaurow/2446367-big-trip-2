import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

const WAYPOINT_TYPE = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];

const DEFAULT_WAYPOINT = {
  id: 0,
  basePrice: 0,
  dateFrom: dayjs.utc().format(),
  dateTo: dayjs.utc().format(),
  destination: '',
  isFavorite: false,
  offers: [],
  type: 'flight',
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const MILLISECONDS_IN_HOUR = 3600000;

const MILLISECONDS_IN_DAY = 86400000;

const DateFormat = {
  DAY_MONTH: 'D MMM',
  MONTH_DAY: 'MMM D',
  HOUR_MINUTES: 'HH:mm',
  DAY_MONTH_YEAR: 'DD/MM/YY[&nbsp;]HH:mm',
  MINUTES_WITH_POSTFIX: 'mm[M]',
  HOUR_MINUTES_WITH_POSTFIX: 'HH[H] mm[M]',
  DAY_HOUR_MINUTES_WITH_POSTFIX: 'DD[D] HH[H] mm[M]',
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers',
};

const UserAction = {
  UPDATE_WAYPOINT: 'UPDATE_WAYPOINT',
  ADD_WAYPOINT: 'ADD_WAYPOINT',
  DELETE_WAYPOINT: 'DELETE_WAYPOINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

export {
  WAYPOINT_TYPE,
  DEFAULT_WAYPOINT,
  FilterType,
  DateFormat,
  MILLISECONDS_IN_HOUR,
  MILLISECONDS_IN_DAY,
  Mode,
  SortType,
  UserAction,
  UpdateType,
};
