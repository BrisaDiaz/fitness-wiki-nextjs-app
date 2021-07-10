import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-0 border-b border-solid bg-green-200  px-2 py-4  sm:px-4 shadow">
      <div className="flex flex-row gap-1 items-center">
        <img className="w-8 " src="/heartbeat-solid.svg" alt="calories" />
        <Link href="/" passHref>
          <a href="!#" className=" text-2xl font-semibold text-gray-600 ">
            Fitness Wiki
          </a>
        </Link>
      </div>
    </header>
  );
}
