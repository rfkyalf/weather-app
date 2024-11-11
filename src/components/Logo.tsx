import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href={'/'}
      className="w-[15%] h-full flex items-center justify-center bg-neutral-200/50 hover:bg-neutral-300 border border-neutral-300  px-4 rounded-lg"
    >
      <h1 className="title text-[2rem] font-bold text-neutral-700">Cloudly.</h1>
    </Link>
  );
}
