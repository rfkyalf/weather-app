import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';

export default function GithubLink() {
  return (
    <Link
      href={'https://github.com/rfkyalf/weather-app'}
      className="h-full w-[5%] bg-neutral-200/50 hover:bg-neutral-300 border border-neutral-300 rounded-lg flex items-center justify-center"
    >
      <FaGithub className="size-8 text-neutral-700" />
    </Link>
  );
}
