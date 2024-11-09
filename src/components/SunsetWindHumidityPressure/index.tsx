'use client';

import { getWeather } from '@/lib/actions';
import { useLocationStore } from '@/stores/useLocationStore';
import { useQuery } from '@tanstack/react-query';
import Sunset from './Sunset';
import { toKMformat } from '@/lib/utils';
import { FaEye } from 'react-icons/fa';
import { IoSpeedometer } from 'react-icons/io5';
import { FaWind } from 'react-icons/fa6';
import Image from 'next/image';

export default function SunsetWindHumidityPressureSection() {
  const { lat, lon } = useLocationStore();
  const {
    data: otherInfoWeatherList,
    // isLoading,
    // error,
  } = useQuery({
    queryKey: ['otherInfoWeather', lat, lon],
    queryFn: () => getWeather(lat, lon),
  });

  const visibilityDescription = () => {
    const visibility = toKMformat(otherInfoWeatherList?.visibility);
    if (visibility > 10) return 'Excellent: Clear and vast view';
    if (visibility > 5) return 'Good: Easily navigable';
    if (visibility > 2) return 'Moderate: Some limitations';
    if (visibility <= 2) return 'Poor: Restricted and unclear';
    return 'Unavailable: Visibility data not available';
  };

  const getPressureDescription = (pressure: number) => {
    if (pressure < 1000) return 'Very low pressure';

    if (pressure >= 1000 && pressure < 1015)
      return 'Low pressure. Expect weather changes.';

    if (pressure >= 1015 && pressure < 1025)
      return 'Normal pressure. Expect weather changes.';

    if (pressure >= 1025 && pressure < 1040)
      return 'High pressure. Expect weather changes.';

    if (pressure >= 1040) return 'Very high pressure. Expect weather changes.';

    return 'Unavailable pressure data';
  };

  return (
    <section className="h-full w-[30%] flex flex-col gap-y-2">
      <div className="h-1/2 w-full flex gap-x-2 rounded-lg">
        <Sunset otherInfoWeatherList={otherInfoWeatherList} />
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
      </div>
      <div className="h-1/2 w-full flex gap-x-2 rounded-lg">
        <div className="h-full w-1/2 bg-neutral-200 rounded-lg flex flex-col justify-between p-4">
          <div>
            <h3 className="text-[1rem] text-neutral-700 mb-1 flex items-center gap-x-2">
              <IoSpeedometer className="size-5" /> <span>Pressure</span>
            </h3>
            <span className="text-[1.2rem] text-neutral-700 font-bold">
              {otherInfoWeatherList?.main.pressure} hPa
            </span>
          </div>
          <p className="text-[0.9rem] text-neutral-700">
            {getPressureDescription(otherInfoWeatherList?.main.pressure)}
          </p>
        </div>
        <div className="h-full w-1/2 bg-neutral-200 rounded-lg flex flex-col gap-y-2 p-4">
          <h3 className="text-[1rem] text-neutral-700 mb-1 flex items-center gap-x-2">
            <FaWind className="size-5" /> <span>Wind</span>
          </h3>
          <div className="relative flex items-center justify-center">
            <Image
              src="/compass_body.svg"
              alt="compass"
              width={90}
              height={90}
            />
            <Image
              src="/compass_arrow.svg"
              alt="compass arrow"
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${otherInfoWeatherList?.wind.deg}deg)`,
              }}
              width={9}
              height={9}
            />
            <span className="text-[0.6rem] text-neutral-700 font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {otherInfoWeatherList?.wind.speed} m/s
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
