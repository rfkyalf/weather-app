import moment from 'moment';

export const convertToLocalTime = (timestamp: number, timezone: number) => {
  return moment
    .unix(timestamp)
    .utcOffset(timezone / 60)
    .format('h:mm A');
};

export const celvinToCelsius = (celcius: number) => {
  return Math.round(celcius - 273.15);
};

export const toTitleCase = (str: string | undefined | null) => {
  if (!str) return ''; // Mengembalikan string kosong jika str tidak terdefinisi

  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
