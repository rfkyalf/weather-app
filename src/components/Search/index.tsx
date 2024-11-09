'use client';

import { getLocation } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import SearchBar from './SearchBar';
import SearchSuggestList from './SearchSuggestList';
import { useLocationStore } from '@/stores/useLocationStore';

export default function Search() {
  const [query, setQuery] = useState('');
  const setCoordinates = useLocationStore((state) => state.setCoordinates);

  const {
    data: LocationList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['location', query],
    queryFn: () => getLocation(query),
  });

  return (
    <section>
      <div className="my-2 relative">
        <SearchBar setQuery={setQuery} />
        <SearchSuggestList
          LocationList={LocationList}
          query={query}
          isLoading={isLoading}
          error={error}
          onSelectLocation={(lat, lon) => {
            setCoordinates(lat, lon);
            setQuery('');
          }}
        />
      </div>
    </section>
  );
}
