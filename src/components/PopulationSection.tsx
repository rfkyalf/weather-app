'use client';

import { getForecast } from '@/lib/actions';
import { populationFormat } from '@/lib/utils';
import { useLocationStore } from '@/stores/useLocationStore';
import { useQuery } from '@tanstack/react-query';
import { FaPeopleGroup } from 'react-icons/fa6';

export default function PopulationSection() {
  const { lat, lon } = useLocationStore();

  const {
    data: populationData,
    // isLoading,
    // error,
  } = useQuery({
    queryKey: ['population', lat, lon],
    queryFn: () => getForecast(lat, lon),
  });

  return (
    <section className="h-1/3 w-full bg-neutral-200 rounded-lg flex flex-col justify-center p-4">
      <div className="h-full flex flex-col justify-between">
        <div>
          <h3 className="text-[1rem] text-neutral-700 mb-1 flex items-center gap-x-2">
            <FaPeopleGroup className="size-5" /> <span>Population</span>
          </h3>
          <span className="text-[1.5rem] font-medium text-neutral-700">
            {populationData?.city.population === 0
              ? 'N/A'
              : populationFormat(populationData?.city.population)}
          </span>
        </div>
        <p className="text-[0.9rem] text-neutral-700">
          Latest UN population data for {populationData?.city.name}
        </p>
      </div>
    </section>
  );
}
