'use client';

import { getSearchOSM } from '@/lib/actions';
import { useLocationStore } from '@/stores/useLocationStore';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import SearchBar from './SearchBar';
import SearchSuggestList from './SearchSuggestList';

export default function Search() {
  const [query, setQuery] = useState('');
  const setCoordinates = useLocationStore((state) => state.setCoordinates);

  const {
    data: LocationList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['location', query],
    queryFn: () => getSearchOSM(query),
  });

  return (
    <section className="relative w-[80%] h-full">
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
    </section>
  );
}
