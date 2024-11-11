import AirPollutionSection from '@/components/AirPollution';
import DayForecastSection from '@/components/DayForecast';
import HourlyForecast from '@/components/HourlyForecast';
import { Map } from '@/components/Map';
import PopularCitiesSection from '@/components/PopularCitiesSection';
import PopulationSection from '@/components/PopulationSection';
import Search from '@/components/Search';
import SunsetWindHumidityPressureSection from '@/components/SunsetWindHumidityPressure';
import TemperatureSection from '@/components/TemperatureSection';

export default async function HomePage() {
  return (
    <main className="bg-neutral-50 relative min-h-screen">
      <div className="w-[1200px] mx-auto mb-2">
        <Search />
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
      </div>
    </main>
  );
}
