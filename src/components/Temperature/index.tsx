'use client';

import { getWeather } from '@/lib/actions';
import { celvinToCelsius, convertToLocalTime, toTitleCase } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { FaCloud } from 'react-icons/fa6';

export default function TemperatureSection() {
  const [lat, setLat] = useState(-7.3262484);
  const [lon, setLon] = useState(108.2201154);

  const { data: weatherList } = useQuery({
    queryKey: ['weather', lat, lon],
    queryFn: () => getWeather(lat, lon),
  });

  return (
    <div className="h-full w-[280px] bg-neutral-200 rounded-lg flex flex-col justify-center px-4">
      <div>
        <h2 className="text-[1.2rem] font-medium text-neutral-700">
          {weatherList?.name}
        </h2>
        <span className="text-[0.9rem] text-neutral-600">
          {convertToLocalTime(weatherList?.dt, weatherList?.timezone)}
        </span>
      </div>
      <div className="flex items-center justify-center gap-x-6 my-5">
        <FaCloud className="size-28 text-neutral-700" />
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
          <h3 className="text-neutral-700 text-[1rem]">Humidity</h3>
          <span className="text-[0.9rem] text-neutral-600">
            {weatherList?.main.humidity}%
          </span>
        </div>
      </div>
    </div>
  );
}
