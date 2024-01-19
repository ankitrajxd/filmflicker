/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import prisma from "@/prisma/client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const WatchList = async () => {
  const movies = await prisma.movieWatchList.findMany();

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
        <Button className="border-2" variant="outline">Watchlist</Button>
        </SheetTrigger>
        <SheetContent side={"right"}>
          <SheetHeader>
            <SheetTitle>Your WatchList</SheetTitle>
            <SheetDescription>
              <div className="flex flex-wrap gap-3">
                {movies.map((m) => (
                  <div key={m.movieid}>
                    <Link href={`/movies/${m.movie.id}`}>
                      <img
                        className="rounded-md"
                        width="110px"
                        src={`https://image.tmdb.org/t/p/w500/${m.movie.poster_path}`}
                        alt="movieimg"
                      />

                      <Link href={`/movies/${m.movie.id}`}>
                        <p>{m.movie.title}</p>
                      </Link>
                    </Link>
                  </div>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default WatchList;
