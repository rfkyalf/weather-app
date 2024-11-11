'use client';

import { getForecast } from '@/lib/actions';
import { WeatherIcon } from '@/lib/icons';
import { celvinToCelsius, getHours } from '@/lib/utils';
import { useLocationStore } from '@/stores/useLocationStore';
import { useQuery } from '@tanstack/react-query';

export default function HourlyForecast() {
  const { lat, lon } = useLocationStore();

  const { data: todayData } = useQuery({
    queryKey: ['hourlyForecast', lat, lon],
    queryFn: () => getForecast(lat, lon),
  });

  return (
    <section className="h-2/3 w-full bg-neutral-200/50 border border-neutral-300 rounded-lg p-4 flex flex-col gap-y-10">
      <h2 className="text-[1.2rem] font-medium text-neutral-700">
        Today&apos;s Forecast
      </h2>
      <div className="w-full relative">
        <div className="absolute left-0 right-0">
          <div className="flex items-center gap-x-10 overflow-x-auto no-scrollbar pb-4">
            {todayData?.list.slice(0, 8).map(
              (
                {
                  weather,
                  main,
                  dt_txt,
                }: {
                  weather: { icon: string; description: string }[];
                  main: { temp: number };
                  dt_txt: string;
                },
                index: number
              ) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-y-4 flex-shrink-0 w-20"
                >
                  <span className="text-[1rem] text-neutral-600">
                    {getHours(dt_txt)}
                  </span>
                  <div className="text-neutral-700">
                    <WeatherIcon code={weather[0].icon} iconStyle="size-16" />
                  </div>
                  <h3 className="text-[1.4rem] font-medium text-neutral-700">
                    {celvinToCelsius(main.temp)}
                    <span className="text-[0.8rem] align-super font-normal">
                      °c
                    </span>
                  </h3>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
