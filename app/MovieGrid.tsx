/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MovieList, fetchMovies } from "./services/fetchMovies";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import AnimatedDiv from "./components/AnimatedDiv";

interface Props {
  query?: string;
  filter_by?: string;
  genre?: string;
}

const MovieGrid = async ({ query, filter_by, genre }: Props) => {
  let Movies;
  if (query) {
    Movies = await fetchMovies("search", undefined, query);
  } else if (filter_by) {
    Movies = await MovieList(filter_by);
  } else if (genre) {
    Movies = await fetchMovies("discover", genre);
  } else {
    Movies = await fetchMovies("discover");
  }

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mt-3">
      <ul>
        {Movies?.map((movie) => (
          <AnimatedDiv className="break-inside-avoid" key={movie.id}>
            <Card className="mb-4 border-2">
              <CardHeader style={{ overflow: "hidden" }}>
                <img
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
                <CardTitle className="text-base mb-1">{movie.title}</CardTitle>
                <div className="flex justify-between items-center">
                  <Button className="border-2" size="sm" variant="outline">
                    <Link href={`/movies/${movie.id}`}>Read More</Link>
                  </Button>
                  <Badge variant="outline">
                    ❤️ {movie.vote_average.toFixed(1)}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </AnimatedDiv>
        ))}
      </ul>
    </div>
  );
};

export default MovieGrid;
