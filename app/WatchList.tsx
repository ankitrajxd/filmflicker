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
import DeleteMovie from "./DeleteMovie";
import { auth } from "@clerk/nextjs/server";
import { toast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";

const WatchList = async () => {
  const { userId } = auth();
  let movies;

  if (!userId) {
    toast({
      title: "Login first!",
    });
  } else {
    movies = await prisma.movieWatchList.findMany();

    return (
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="border-2 ml-2" variant="outline">
              Watchlist
            </Button>
          </SheetTrigger>
          <SheetContent side={"right"}>
            <SheetHeader>
              <SheetTitle>Global WatchList</SheetTitle>
              <SheetDescription>
                <div className="flex flex-col gap-3">
                  {movies?.map((m) => (
                    <div key={m.movieid}>
                      <div className="flex justify-between border-2 p-2 rounded-md">
                        <Link className="flex gap-6" href={`/movies/${m.movie.id}`}>
                          <img
                            className="rounded-md"
                            width="70px"
                            src={`https://image.tmdb.org/t/p/w500/${m.movie.poster_path}`}
                            alt="movieimg"
                          />

                          <div >
                            <p className="text-md font-bold">{m.movie.title}</p>
                            <Badge className="my-2 text-start" variant={'secondary'}>{m.movie.release_date?.split('-')[0]}</Badge>
                          </div>
                        </Link>
                        <DeleteMovie movieid={m.movie.id} />
                      </div>
                    </div>
                  ))}
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    );
  }
};

export const dynamic = "force-dynamic";

export default WatchList;
