import { useDebouncedCallback } from 'use-debounce';

export default function SearchBar({
  setQuery,
}: {
  setQuery: (query: string) => void;
}) {
  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;
      const trimmedInput = input.replace(/^\s+/, '');
      setQuery(trimmedInput);
    },
    500
  );

  return (
    <input
      type="text"
      placeholder="Search for cities..."
      className="bg-neutral-200 w-full text-neutral-700 text-[1rem] placeholder-neutral-500 placeholder:text-[1rem] px-4 py-2 rounded-lg outline-none focus:ring-1 focus:ring-neutral-400"
      onChange={(e) => handleSearch(e)}
    />
  );
}
