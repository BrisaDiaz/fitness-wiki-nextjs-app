import Link from 'next/link';
import Image from 'next/Image';
export default function Header() {
  return (
    <header className="border-0 border-b border-solid bg-green-200  px-2 py-4  sm:px-4 shadow">
      <div className="flex flex-row gap-1 items-center">
        <Image width={35} height={35} src="/heartbeat-solid.svg" alt="calories" />
        <Link href="/" passHref>
          <a href="!#" className=" text-2xl font-semibold text-gray-600 ">
            Fitness Wiki
          </a>
        </Link>
      </div>
    </header>
  );
}
