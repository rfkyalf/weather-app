import moment from 'moment';

export const convertToLocalTime = (timestamp: number, timezone: number) => {
  return moment
    .unix(timestamp)
    .utcOffset(timezone / 60)
    .format('HH:mm');
};

export const convertToLocalDate = (timestamp: number, timezone: number) => {
  return moment
    .unix(timestamp)
    .utcOffset(timezone / 60)
    .format('dddd, DD MMM YYYY');
};

export const convertToLocalTime1Arg = (timestamp: number) => {
  return moment.unix(timestamp).format('HH:mm');
};

export const celvinToCelsius = (celcius: number) => {
  return Math.round(celcius - 273.15);
};

export const toTitleCase = (str: string) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const toKMformat = (value: number) => {
  return Math.round(value / 1000);
};

export const populationFormat = (number: number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + ' M';
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + ' K';
  } else {
    return number;
  }
};

export const getHours = (timestamp: string) => {
  return moment(timestamp).format('HH:mm');
};
