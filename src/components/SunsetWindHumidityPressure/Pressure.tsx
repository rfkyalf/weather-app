import { IoSpeedometer } from 'react-icons/io5';

export default function Pressure({
  otherInfoWeatherList,
}: {
  otherInfoWeatherList: {
    main: {
      pressure: number;
    };
  };
}) {
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
    <div className="h-full w-1/2 bg-neutral-200/50 border border-neutral-300 rounded-lg flex flex-col justify-between p-4">
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
  );
}
