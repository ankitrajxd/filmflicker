/* eslint-disable @next/next/no-img-element */
import React from "react";
import AnimatedDiv from "./AnimatedDiv";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Anime, SearchAnime } from "../services/fetchAnime";

interface Props {
  anime: Anime | SearchAnime;
  className?: string;
}

const AnimeCard = ({ anime, className }: Props) => {
  return (
    <AnimatedDiv className={`break-inside-avoid ${className}`} key={anime.id}>
      <Card className="mb-4 border-2 relative overflow-hidden">
        <CardHeader
          style={{ overflow: "hidden" }}
          className="h-[180px] sm:h-full object-contain"
        >
          <img
            className="md:hover:scale-[1.125] transition-transform ease-in-out duration-300 rounded-md object-cover"
            src={anime.poster}
            alt="anime-img"
          ></img>
        </CardHeader>
        <CardContent className="mt-2">
          <CardTitle className="text-base mb-3">
            <Link href={`/movies/${anime.id}`}>{anime.name}</Link>
            {/* <Badge className="mx-2" variant="secondary">
              {anime.release_date?.split("-")[0]}
            </Badge> */}
          </CardTitle>
          <div className="flex justify-between items-center">
            <Button className="border-2" size="sm" variant="secondary">
              <Link href={`/anime/${anime.id}`}>Read More</Link>
            </Button>
            {isAnime(anime) && (
              <Badge
                className="absolute top-3 left-3 bg-slate-800 backdrop-blur-md font-bold"
                variant="secondary"
              >
                # {anime.rank}
              </Badge>
            )}
            {/* <AddToWatch movie={movie} /> */}
          </div>
        </CardContent>
      </Card>
    </AnimatedDiv>
  );
};

export default AnimeCard;

// Helper function to check if the anime is of type Anime
function isAnime(anime: Anime | SearchAnime): anime is Anime {
  return (anime as Anime).rank !== undefined;
}
