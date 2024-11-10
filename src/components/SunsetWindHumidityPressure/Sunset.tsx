import { convertToLocalTime, convertToLocalTime1Arg } from '@/lib/utils';
import { BsFillSunriseFill, BsFillSunsetFill } from 'react-icons/bs';

export default function Sunset({
  otherInfoWeatherList,
}: {
  otherInfoWeatherList: {
    dt: number;
    timezone: number;
    sys: { sunrise: number; sunset: number };
  };
}) {
  const currentTime = convertToLocalTime(
    otherInfoWeatherList?.dt,
    otherInfoWeatherList?.timezone
  );
  const sunsetTime = convertToLocalTime1Arg(otherInfoWeatherList?.sys.sunset);
  const sunriseTime = convertToLocalTime1Arg(otherInfoWeatherList?.sys.sunrise);

  // Ambil jam dari string waktu (format "HH:mm")
  const currentHour = parseInt(currentTime.split(':')[0]);
  const sunriseHour = parseInt(sunriseTime.split(':')[0]);
  const sunsetHour = parseInt(sunsetTime.split(':')[0]);

  const isAfterSunrise = currentHour >= sunriseHour && currentHour < sunsetHour;

  const displayIcon = isAfterSunrise ? (
    <BsFillSunsetFill className="size-5 text-neutral-700" />
  ) : (
    <BsFillSunriseFill className="size-5 text-neutral-700" />
  );
  const displayTitle = isAfterSunrise ? 'Sunset' : 'Sunrise';
  const displayTime = isAfterSunrise ? sunsetTime : sunriseTime;

  return (
    <div className="h-full w-1/2 bg-neutral-200 rounded-lg p-4 flex flex-col justify-between">
      <div>
        <h3 className="text-[1rem] text-neutral-700 mb-1 flex items-center gap-x-2">
          {displayIcon}
          <span>{displayTitle}</span>
        </h3>
        <span className="text-[1.2rem] text-neutral-700 font-bold">
          {displayTime}
        </span>
      </div>
      <span className="text-[0.9rem] text-neutral-700">
        {isAfterSunrise ? `Sunrise: ${sunriseTime}` : `Sunset: ${sunsetTime}`}
      </span>
    </div>
  );
}
