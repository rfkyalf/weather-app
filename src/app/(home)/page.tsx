import Search from '@/components/Search';
import TemperatureSection from '@/components/Temperature';

export default function HomePage() {
  return (
    <main className="bg-neutral-50 relative min-h-screen">
      <div className="w-[1200px] mx-auto">
        <Search />
        <div className="h-[280px]">
          <TemperatureSection />
        </div>
      </div>
    </main>
  );
}
