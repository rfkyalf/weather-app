'use client';

import { getForecast } from '@/lib/actions';
import { WeatherIcon } from '@/lib/icons';
import { celvinToCelsius } from '@/lib/utils';
import { useLocationStore } from '@/stores/useLocationStore';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';

interface DayForecast {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;
    icon: string;
  }[];
}

export default function DayForecastSection() {
  const { lat, lon } = useLocationStore();

  const { data: forecastData } = useQuery({
    queryKey: ['dayForecast', lat, lon],
    queryFn: () => getForecast(lat, lon),
  });

  const dayForecastList: DayForecast[] | undefined = forecastData?.list
    .filter((item: DayForecast) => item.dt_txt.includes('12:00:00'))
    .slice(0, 5);

  return (
    <section className="h-full w-[30%] bg-neutral-200 rounded-lg flex flex-col justify-center px-4">
      <h2 className="text-[1.2rem] font-medium text-neutral-700">
        5-Day Forecast
      </h2>
      <div className="flex flex-col mt-8 gap-y-5">
        {dayForecastList?.map(
          (
            { dt_txt, main: { temp }, weather: [{ main, icon }] }: DayForecast,
            index: number
          ) => (
            <div
              key={index}
              className="w-full flex items-center justify-between border-b border-neutral-400 pb-5"
            >
              <span className="text-[1rem] text-neutral-600">
                {moment(dt_txt).format('ddd')}
              </span>
              <span className="text-[1.2rem] text-neutral-700 font-medium flex items-center gap-x-4">
                <WeatherIcon code={icon} iconStyle="size-6" />{' '}
                <span>{main}</span>
              </span>
              <span className="text-[1.2rem] text-neutral-700 font-medium">
                {celvinToCelsius(temp)}
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
