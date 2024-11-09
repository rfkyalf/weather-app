'use client';

import { getLocation } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';

export default function HomePage() {
  const { data: locationList } = useQuery({
    queryKey: ['location'],
    queryFn: () => getLocation('London'),
  });

  return (
    <main>
      <div>
        {locationList?.map(({ name, lat }: { name: string; lat: number }) => (
          <div key={lat + name}>{name}</div>
        ))}
      </div>
    </main>
  );
}
