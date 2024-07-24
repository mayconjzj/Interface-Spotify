import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { AlbumCard } from '@/components/ui/AlbumCard/AlbumCard';
import { Button } from '@/components/ui/Button';

export function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 h-[calc(100vh-97px)] overflow-auto">
          <div className="flex items-center gap-3">
            <Button variant="icon" rounded="full">
              <ChevronLeft />
            </Button>
            <Button variant="icon" rounded="full">
              <ChevronRight />
            </Button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <AlbumCard.Root href="/">
              <AlbumCard.Image
                src="/images/album.jpg"
                alt="Capa do álbum Wasting Light da banda Figthers"
              />
              <strong>Wasting Light</strong>
            </AlbumCard.Root>
            <AlbumCard.Root href="/">
              <AlbumCard.Image
                src="/images/album.jpg"
                alt="Capa do álbum Wasting Light da banda Figthers"
              />
              <strong>Wasting Light</strong>
            </AlbumCard.Root>
            <AlbumCard.Root href="/">
              <AlbumCard.Image
                src="/images/album.jpg"
                alt="Capa do álbum Wasting Light da banda Figthers"
              />
              <strong>Wasting Light</strong>
            </AlbumCard.Root>
            <AlbumCard.Root href="/">
              <AlbumCard.Image
                src="/images/album.jpg"
                alt="Capa do álbum Wasting Light da banda Figthers"
              />
              <strong>Wasting Light</strong>
            </AlbumCard.Root>
            <AlbumCard.Root href="/">
              <AlbumCard.Image
                src="/images/album.jpg"
                alt="Capa do álbum Wasting Light da banda Figthers"
              />
              <strong>Wasting Light</strong>
            </AlbumCard.Root>
            <AlbumCard.Root href="/">
              <AlbumCard.Image
                src="/images/album.jpg"
                alt="Capa do álbum Wasting Light da banda Figthers"
              />
              <strong>Wasting Light</strong>
            </AlbumCard.Root>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Maycon Douglas
          </h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <AlbumCard.Root href="/" variant="mixCard">
              <AlbumCard.Image
                src="/images/album.jpg"
                alt="Capa do álbum Wasting Light da banda Figthers"
                variant="mixCard"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </AlbumCard.Root>
            <AlbumCard.Root href="/" variant="mixCard">
              <AlbumCard.Image
                src="/images/album.jpg"
                alt="Capa do álbum Wasting Light da banda Figthers"
                variant="mixCard"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </AlbumCard.Root>
            <AlbumCard.Root href="/" variant="mixCard">
              <AlbumCard.Image
                src="/images/album.jpg"
                alt="Capa do álbum Wasting Light da banda Figthers"
                variant="mixCard"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </AlbumCard.Root>
            <AlbumCard.Root href="/" variant="mixCard">
              <AlbumCard.Image
                src="/images/album.jpg"
                alt="Capa do álbum Wasting Light da banda Figthers"
                variant="mixCard"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </AlbumCard.Root>
            <AlbumCard.Root href="/" variant="mixCard">
              <AlbumCard.Image
                src="/images/album.jpg"
                alt="Capa do álbum Wasting Light da banda Figthers"
                variant="mixCard"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </AlbumCard.Root>
            <AlbumCard.Root href="/" variant="mixCard">
              <AlbumCard.Image
                src="/images/album.jpg"
                alt="Capa do álbum Wasting Light da banda Figthers"
                variant="mixCard"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </AlbumCard.Root>
            <AlbumCard.Root href="/" variant="mixCard">
              <AlbumCard.Image
                src="/images/album.jpg"
                alt="Capa do álbum Wasting Light da banda Figthers"
                variant="mixCard"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </AlbumCard.Root>
            <AlbumCard.Root href="/" variant="mixCard">
              <AlbumCard.Image
                src="/images/album.jpg"
                alt="Capa do álbum Wasting Light da banda Figthers"
                variant="mixCard"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </AlbumCard.Root>
            <AlbumCard.Root href="/" variant="mixCard">
              <AlbumCard.Image
                src="/images/album.jpg"
                alt="Capa do álbum Wasting Light da banda Figthers"
                variant="mixCard"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </AlbumCard.Root>
            <AlbumCard.Root href="/" variant="mixCard">
              <AlbumCard.Image
                src="/images/album.jpg"
                alt="Capa do álbum Wasting Light da banda Figthers"
                variant="mixCard"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Wallows, COIN, girl in red and more
              </span>
            </AlbumCard.Root>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
