const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = `http://api.openweathermap.org`;

export const getLocation = async (query: string) => {
  try {
    const response = await fetch(
      `${API_URL}/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
