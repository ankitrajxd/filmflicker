/* eslint-disable @next/next/no-img-element */
import React from "react";
import AnimatedDiv from "./AnimatedDiv";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Movie } from "../services/fetchMovies";
import AddToWatch from "../AddToWatch";
import Image from "next/image";

interface Props {
  movie: Movie;
  className?: string;
}

const MovieCard = ({ movie, className }: Props) => {
  return (
    <AnimatedDiv className={`break-inside-avoid ${className}`} key={movie.id}>
      <Card className="mb-4 border-2 relative overflow-hidden">
        <CardHeader
          style={{ overflow: "hidden" }}
          className="h-[180px] sm:h-full object-contain"
        >
          <Link href={`/movies/${movie.id}`}>
            <img
              className="md:hover:scale-[1.125] transition-transform ease-in-out duration-300 rounded-md object-cover"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="anime-img"
            ></img>
          </Link>
        </CardHeader>
        <CardContent className="mt-2">
          <CardTitle className="text-base mb-3">
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
            <Badge className="mx-2" variant="secondary">
              {movie.release_date?.split("-")[0]}
            </Badge>
          </CardTitle>
          <div className="flex justify-between items-center">
            <Button className="border-2" size="sm" variant="secondary">
              <Link href={`/movies/${movie.id}`}>Read More</Link>
            </Button>
            <Badge
              className="absolute top-3 left-3 bg-slate-800 backdrop-blur-md font-bold"
              variant="secondary"
            >
              ❤️ {movie.vote_average?.toFixed(1)}
            </Badge>
            <AddToWatch movie={movie} />
          </div>
        </CardContent>
      </Card>
    </AnimatedDiv>
  );
};

export default MovieCard;
