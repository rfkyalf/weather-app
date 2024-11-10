'use client';

import { getWeather } from '@/lib/actions';
import { useLocationStore } from '@/stores/useLocationStore';
import { useQuery } from '@tanstack/react-query';
import Error from '../Error';
import Loading from '../Loading';
import Pressure from './Pressure';
import Sunset from './Sunset';
import Visibility from './Visibility';
import Wind from './Wind';

export default function SunsetWindHumidityPressureSection() {
  const { lat, lon } = useLocationStore();
  const {
    data: otherInfoWeatherList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['otherInfoWeather', lat, lon],
    queryFn: () => getWeather(lat, lon),
  });

  return (
    <section className="h-full w-[30%] flex flex-col gap-y-2">
      <div className="h-1/2 w-full flex gap-x-2 rounded-lg">
        {isLoading ? (
          <Loading style="h-full w-1/2" />
        ) : error ? (
          <Error error={error} style="h-full w-1/2" />
        ) : (
          <Sunset otherInfoWeatherList={otherInfoWeatherList} />
        )}
        {isLoading ? (
          <Loading style="h-full w-1/2" />
        ) : error ? (
          <Error error={error} style="h-full w-1/2" />
        ) : (
          <Visibility otherInfoWeatherList={otherInfoWeatherList} />
        )}
      </div>
      <div className="h-1/2 w-full flex gap-x-2 rounded-lg">
        {isLoading ? (
          <Loading style="h-full w-1/2" />
        ) : error ? (
          <Error error={error} style="h-full w-1/2" />
        ) : (
          <Pressure otherInfoWeatherList={otherInfoWeatherList} />
        )}
        {isLoading ? (
          <Loading style="h-full w-1/2" />
        ) : error ? (
          <Error error={error} style="h-full w-1/2" />
        ) : (
          <Wind otherInfoWeatherList={otherInfoWeatherList} />
        )}
      </div>
    </section>
  );
}
