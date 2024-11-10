import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const OSM_URL = process.env.NEXT_PUBLIC_OSM_API_URL;

const axiosInstance = axios.create({ baseURL: API_URL });
const osmInstance = axios.create({ baseURL: OSM_URL });

export const getSearchOSM = async (query: string) => {
  if (!query) return [];

  try {
    const res = await osmInstance.get(
      `/search?format=json&q=${query}&addressdetails=1`
    );

    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getLocation = async (query: string) => {
  if (!query) return [];

  try {
    const res = await axiosInstance.get(
      `/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
    );

    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getWeather = async (lat: number, lon: number) => {
  try {
    const res = await axiosInstance.get(
      `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getForecast = async (lat: number, lon: number) => {
  try {
    const res = await axiosInstance.get(
      `/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
