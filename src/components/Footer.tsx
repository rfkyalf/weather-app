import Link from 'next/link';

export default function Footer() {
  return (
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
  );
}
