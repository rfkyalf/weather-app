import { toKMformat } from '@/lib/utils';
import { FaEye } from 'react-icons/fa6';

export default function Visibility({
  otherInfoWeatherList,
}: {
  otherInfoWeatherList: {
    visibility: number;
  };
}) {
  const visibilityDescription = () => {
    const visibility = toKMformat(otherInfoWeatherList?.visibility);
    if (visibility > 10) return 'Excellent: Clear and vast view';
    if (visibility > 5) return 'Good: Easily navigable';
    if (visibility > 2) return 'Moderate: Some limitations';
    if (visibility <= 2) return 'Poor: Restricted and unclear';
    return 'Unavailable: Visibility data not available';
  };

  return (
    <div className="h-full w-1/2 bg-neutral-200 rounded-lg flex flex-col justify-between p-4">
      <div>
        <h3 className="text-[1rem] text-neutral-700 mb-1 flex items-center gap-x-2">
          <FaEye className="size-5" /> <span>Visibility</span>
        </h3>
        <span className="text-[1.2rem] text-neutral-700 font-bold">
          {toKMformat(otherInfoWeatherList?.visibility)} km
        </span>
      </div>
      <p className="text-[0.9rem] text-neutral-700">
        {visibilityDescription()}
      </p>
    </div>
  );
}
