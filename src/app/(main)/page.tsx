import Temperature from '@/components/Content/Temperature';

export default function Home() {
  return (
    <main>
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temperature />
        </div>
        <div className="flex flex-col w-full"></div>
      </div>
    </main>
  );
}
