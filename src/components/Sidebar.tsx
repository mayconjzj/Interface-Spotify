import { Home, Library, Search } from 'lucide-react';

import { Link } from './ui/Link';
import { MacbookWindowControls } from './ui/MacbookWindowControls';

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <MacbookWindowControls />

      <nav className="space-y-5 mt-10">
        <Link href="/" icon={<Home />}>
          Home
        </Link>
        <Link href="/" icon={<Search />}>
          Search
        </Link>
        <Link href="/" icon={<Library />}>
          Your Library
        </Link>
      </nav>

      <nav className="mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <Link
          href="/"
          className="text-zinc-400 hover:text-zinc-100 font-normal"
        >
          Hot Hits Brasil
        </Link>
        <Link
          href="/"
          className="text-zinc-400 hover:text-zinc-100 font-normal"
        >
          Aniver Funk
        </Link>
        <Link
          href="/"
          className="text-zinc-400 hover:text-zinc-100 font-normal"
        >
          My Playlist #13
        </Link>
        <Link
          href="/"
          className="text-zinc-400 hover:text-zinc-100 font-normal"
        >
          Top Brasil
        </Link>
      </nav>
    </aside>
  );
}
