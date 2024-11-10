import { IoLocationSharp } from 'react-icons/io5';

interface Location {
  display_name: string;
  lat: number;
  lon: number;
}

export default function SearchSuggestList({
  query,
  isLoading,
  error,
  LocationList,
  onSelectLocation,
}: {
  query: string;
  isLoading: boolean;
  error: Error | null;
  LocationList: Location[];
  onSelectLocation: (lat: number, lon: number) => void;
}) {
  return (
    <>
      {query === '' ? null : (
        <div className="bg-neutral-200 mt-1 rounded-lg px-2 py-2 absolute z-[9999] w-full border border-neutral-400">
          <div className="flex flex-col gap-y-2">
            {isLoading ? (
              <span className="text-[1rem] text-neutral-700 px-2 py-1 rounded-md cursor-progress">
                Loading...
              </span>
            ) : error ? (
              <span className="text-[1rem] text-red-700 px-2 py-1 rounded-md">
                {error.message}
              </span>
            ) : LocationList?.length === 0 ? (
              <span className="text-[1rem] text-neutral-700 px-2 py-1 rounded-md">
                No results found
              </span>
            ) : (
              LocationList?.map(
                ({ display_name, lat, lon }: Location, index) => (
                  <h3
                    key={index}
                    className="flex items-center gap-x-4 text-[1rem] text-neutral-700 hover:bg-neutral-50 px-2 py-1 rounded-md cursor-pointer"
                    onClick={() => onSelectLocation(lat, lon)}
                  >
                    <IoLocationSharp className="size-6" />
                    {display_name}
                  </h3>
                )
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
