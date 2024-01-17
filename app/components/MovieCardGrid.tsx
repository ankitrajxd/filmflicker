/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Movie } from "../services/fetchMovies";
import AnimatedDiv from "./AnimatedDiv";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface Props {
  Movies: Movie[];
}

const MovieCardGrid = ({ Movies }: Props) => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mt-3">
      {Movies?.map((movie) => (
        <AnimatedDiv className="break-inside-avoid" key={movie.id}>
          <Card className="mb-4 border-2 relative overflow-hidden">
            <CardHeader style={{ overflow: "hidden" }}>
              <img
                className="md:hover:scale-[1.125] transition-transform ease-in-out duration-300"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="anime-img"
                style={{
                  borderRadius: "6px",
                  objectFit: "cover",
                  height: "290px",
                }}
              ></img>
            </CardHeader>
            <CardContent className="mt-2">
              <CardTitle className="text-base mb-3">
                <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                <Badge className="mx-2" variant="secondary">
                  {movie.release_date.split("-")[0]}
                </Badge>
              </CardTitle>
              <div className="flex justify-between items-center">
                <Button className="border-2" size="sm" variant="outline">
                  <Link href={`/movies/${movie.id}`}>Read More</Link>
                </Button>
                <Badge
                  className="absolute top-3 left-3 bg-slate-800 backdrop-blur-md font-bold"
                  variant="secondary"
                >
                  ❤️ {movie.vote_average.toFixed(1)}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </AnimatedDiv>
      ))}
    </div>
  );
};

export default MovieCardGrid;
