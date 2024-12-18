'use client';

import { getWeather } from '@/lib/actions';
import { WeatherIcon } from '@/lib/icons';
import {
  celvinToCelsius,
  convertToLocalDate,
  convertToLocalTime,
  toTitleCase,
} from '@/lib/utils';
import { useLocationStore } from '@/stores/useLocationStore';
import { useQuery } from '@tanstack/react-query';
import Error from './Error';
import Loading from './Loading';
export default function TemperatureSection() {
  const { lat, lon } = useLocationStore();

  const {
    data: weatherList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['weather', lat, lon],
    queryFn: () => getWeather(lat, lon),
  });

  if (isLoading) return <Loading style="h-full w-[30%]" />;

  if (error) return <Error error={error} style="h-full w-[30%]" />;

  return (
    <div className="h-full w-[30%] bg-neutral-200/50 border border-neutral-300 rounded-lg flex flex-col justify-center px-4">
      <div>
        <div className="w-full flex items-center justify-between">
          <h2 className="text-[1.2rem] font-medium text-neutral-700">
            {weatherList?.name}
          </h2>
          <h2 className="text-[1rem] text-neutral-700">
            {convertToLocalDate(weatherList?.dt, weatherList?.timezone)}
          </h2>
        </div>
        <span className="text-[0.9rem] text-neutral-600">
          {convertToLocalTime(weatherList?.dt, weatherList?.timezone)}
        </span>
      </div>
      <div className="flex items-center justify-center gap-x-8 my-10">
        <WeatherIcon
          code={weatherList?.weather[0].icon}
          iconStyle="size-28 text-neutral-700"
        />
        <div>
          <h1 className="text-[3rem] font-bold text-neutral-700 mb-[-10px]">
            {celvinToCelsius(weatherList?.main.temp)}
            <span className="align-super text-[2rem] font-normal">°c</span>
          </h1>
          <h2 className="text-[1rem] text-neutral-600">
            {toTitleCase(weatherList?.weather[0].description)}
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-between gap-x-4">
        <div>
          <h3 className="text-neutral-700 text-[1rem]">Low</h3>
          <span className="text-[0.9rem] text-neutral-600">
            {celvinToCelsius(weatherList?.main.temp_min)}
            <span className="align-super">°c</span>
          </span>
        </div>
        <div>
          <h3 className="text-neutral-700 text-[1rem]">High</h3>
          <span className="text-[0.9rem] text-neutral-600">
            {celvinToCelsius(weatherList?.main.temp_max)}
            <span className="align-super">°c</span>
          </span>
        </div>
        <div>
          <h3 className="text-neutral-700 text-[1rem]">Feels Like</h3>
          <span className="text-[0.9rem] text-neutral-600">
            {celvinToCelsius(weatherList?.main.feels_like)}
            <span className="align-super">°c</span>
          </span>
        </div>
        <div>
          <h3 className="text-neutral-700 text-[1rem]">Humidity</h3>
          <span className="text-[0.9rem] text-neutral-600">
            {weatherList?.main.humidity}%
          </span>
        </div>
      </div>
    </div>
  );
}
