'use client';

import { popularCitiesList } from '@/lib/consts';
import { useLocationStore } from '@/stores/useLocationStore';
import { FaRankingStar } from 'react-icons/fa6';

export default function PopularCitiesSection() {
  const setCoordinates = useLocationStore((state) => state.setCoordinates);
  return (
    <section className="h-2/3 w-full bg-neutral-200/50 border border-neutral-300 rounded-lg p-4">
      <h3 className="text-[1.2rem] text-neutral-700 font-medium mb-1 flex items-center gap-x-4 border-b border-neutral-300 pb-4">
        <FaRankingStar className="size-7" /> <span>Popular Cities</span>
      </h3>
      <div className="flex flex-col gap-y-4 mt-4">
        {popularCitiesList.map(
          (
            {
              city,
              country,
              lat,
              lon,
            }: { city: string; country: string; lat: number; lon: number },
            index
          ) => (
            <div
              onClick={() => setCoordinates(lat, lon)}
              key={index}
              className="text-[1rem] text-neutral-600 hover:underline cursor-pointer"
            >
              <span>
                {city}, {country}
              </span>
            </div>
          )
        )}
      </div>
    </section>
  );
}
