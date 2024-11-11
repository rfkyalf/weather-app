import Image from 'next/image';
import { FaWind } from 'react-icons/fa6';

export default function Wind({
  otherInfoWeatherList,
}: {
  otherInfoWeatherList: { wind: { deg: number; speed: number } };
}) {
  return (
    <div className="h-full w-1/2 bg-neutral-200/50 border border-neutral-300 rounded-lg flex flex-col gap-y-2 p-4">
      <h3 className="text-[1rem] text-neutral-700 mb-1 flex items-center gap-x-2">
        <FaWind className="size-5" /> <span>Wind</span>
      </h3>
      <div className="relative flex items-center justify-center">
        <Image src="/compass_body.svg" alt="compass" width={90} height={90} />
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
  );
}
