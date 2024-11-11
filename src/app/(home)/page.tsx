import AirPollutionSection from '@/components/AirPollution';
import DayForecastSection from '@/components/DayForecast';
import HourlyForecast from '@/components/HourlyForecast';
import { Map } from '@/components/Map';
import PopularCitiesSection from '@/components/PopularCitiesSection';
import PopulationSection from '@/components/PopulationSection';
import Search from '@/components/Search';
import SunsetWindHumidityPressureSection from '@/components/SunsetWindHumidityPressure';
import TemperatureSection from '@/components/TemperatureSection';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';

export default async function HomePage() {
  return (
    <main className="relative min-h-screen">
      <div className="w-[1200px] mx-auto mb-2">
        <div className="my-2 flex items-center gap-x-2 h-[60px]">
          <Link
            href={'/'}
            className="w-[15%] h-full flex items-center justify-center bg-neutral-200/50 hover:bg-neutral-300 border border-neutral-300  px-4 rounded-lg"
          >
            <h1 className="title text-[2rem] font-bold text-neutral-700">
              Cloudly.
            </h1>
          </Link>
          <Search />
          <Link
            href={'https://github.com/rfkyalf/weather-app'}
            className="h-full w-[5%] bg-neutral-200/50 hover:bg-neutral-300 border border-neutral-300 rounded-lg flex items-center justify-center"
          >
            <FaGithub className="size-8 text-neutral-700" />
          </Link>
        </div>
        <div className="h-[320px] flex gap-x-2">
          <TemperatureSection />
          <Map />
          <SunsetWindHumidityPressureSection />
        </div>
        <div className="h-[440px] flex gap-x-2 mt-2">
          <DayForecastSection />
          <section className="h-full w-[40%] rounded-lg flex flex-col justify-center gap-y-2">
            <HourlyForecast />
            <AirPollutionSection />
          </section>
          <section className="h-full w-[30%] rounded-lg flex flex-col justify-center gap-y-2">
            <PopulationSection />
            <PopularCitiesSection />
          </section>
        </div>
        <footer className="w-full h-[60px] bg-neutral-200/50 border border-neutral-300 rounded-lg text-[1rem] text-neutral-700 flex justify-between items-center mt-2 px-4">
          <p>
            Created by{' '}
            <Link
              href={'https://www.linkedin.com/in/rifkyalfarez'}
              className="font-bold hover:underline"
            >
              Rifky Alfarez
            </Link>
          </p>
          <p>
            Powered by{' '}
            <Link
              href={'https://openweathermap.org/api'}
              className="font-bold hover:underline"
            >
              OWM API
            </Link>{' '}
            &{' '}
            <Link
              href={'https://www.openstreetmap.org'}
              className="font-bold hover:underline"
            >
              OSM API
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
