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
import { unstable_noStore as noStore } from "next/cache";

const WatchList = async () => {
  const movies = await prisma.movieWatchList.findMany();

  return (
    <div>
      <Sheet>
        <SheetTrigger>View</SheetTrigger>
        <SheetContent side={"right"}>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              <ul>
                {movies.map((m) => (
                  <li key={m.movieid}>{m.moviename}</li>
                ))}
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default WatchList;
