import MapSection from '@/components/MapSection';
import Search from '@/components/Search';
import SunsetWindHumidityPressureSection from '@/components/SunsetWindHumidityPressure';
import TemperatureSection from '@/components/TemperatureSection';

export default function HomePage() {
  return (
    <main className="bg-neutral-50 relative min-h-screen">
      <div className="w-[1200px] mx-auto">
        <Search />
        <div className="h-[320px] flex gap-x-2">
          <TemperatureSection />
          <MapSection />
          <SunsetWindHumidityPressureSection />
        </div>
      </div>
    </main>
  );
}
