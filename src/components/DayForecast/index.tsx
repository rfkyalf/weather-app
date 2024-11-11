'use client';

import { getForecast } from '@/lib/actions';
import { WeatherIcon } from '@/lib/icons';
import { celvinToCelsius } from '@/lib/utils';
import { useLocationStore } from '@/stores/useLocationStore';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import Loading from '../Loading';
import Error from '../Error';

interface DayForecast {
  dt_txt: string;
  main: {
    temp_min: number;
    temp_max: number;
  };
  weather: {
    main: string;
    icon: string;
  }[];
}

export default function DayForecastSection() {
  const { lat, lon } = useLocationStore();

  const {
    data: forecastData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['dayForecast', lat, lon],
    queryFn: () => getForecast(lat, lon),
  });

  const dayForecastList = forecastData?.list
    .reduce((acc: DayForecast[], item: DayForecast) => {
      const date = moment(item.dt_txt).format('YYYY-MM-DD');

      const existing = acc.find((day) => day.dt_txt === date);

      if (existing) {
        existing.main.temp_min = Math.min(
          existing.main.temp_min,
          item.main.temp_min
        );
        existing.main.temp_max = Math.max(
          existing.main.temp_max,
          item.main.temp_max
        );
      } else {
        acc.push({
          dt_txt: date,
          main: { temp_min: item.main.temp_min, temp_max: item.main.temp_max },
          weather: item.weather,
        });
      }
      return acc;
    }, [])
    .slice(0, 5);

  if (isLoading) return <Loading style="h-full w-[30%]" />;

  if (error) return <Error error={error} style="h-full w-[30%]" />;

  return (
    <section className="h-full w-[30%] bg-neutral-200/50 border border-neutral-300 rounded-lg flex flex-col justify-center px-4">
      <h2 className="text-[1.2rem] font-medium text-neutral-700">
        5-Day Forecast
      </h2>
      <div className="flex flex-col mt-8 gap-y-5">
        {dayForecastList?.map(
          (
            {
              dt_txt,
              main: { temp_max, temp_min },
              weather: [{ main, icon }],
            }: DayForecast,
            index: number
          ) => (
            <div
              key={index}
              className="w-full flex items-center justify-between border-b border-neutral-300 pb-5"
            >
              <span className="text-[1rem] text-neutral-600">
                {moment(dt_txt).format('ddd')}
              </span>
              <span className="text-[1.2rem] text-neutral-700 font-medium flex items-center gap-x-4">
                <WeatherIcon code={icon} iconStyle="size-6" />{' '}
                <span>{main}</span>
              </span>
              <span className="text-[1.2rem] text-neutral-700 font-medium">
                {celvinToCelsius(temp_min)}
                <span className="text-[0.8rem] align-super font-normal">
                  °c
                </span>
                {' - '}
                {celvinToCelsius(temp_max)}
                <span className="text-[0.8rem] align-super font-normal">
                  °c
                </span>
              </span>
            </div>
          )
        )}
      </div>
    </section>
  );
}
