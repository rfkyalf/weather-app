import MapSection from '@/components/Map';
import Search from '@/components/Search';
import TemperatureSection from '@/components/Temperature';

export default function HomePage() {
  return (
    <main className="bg-neutral-50 relative min-h-screen">
      <div className="w-[1200px] mx-auto">
        <Search />
        <div className="h-[320px] flex gap-x-2">
          <TemperatureSection />
          <MapSection />
          <div></div>
        </div>
      </div>
    </main>
  );
}
