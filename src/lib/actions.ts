import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({ baseURL: API_URL });

export const getLocation = async (query: string) => {
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
