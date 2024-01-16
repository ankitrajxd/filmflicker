/* eslint-disable @next/next/no-img-element */
import React from "react";
import AnimatedDiv from "./AnimatedDiv";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Movie } from "../services/fetchMovies";

interface Props {
    movie: Movie;
    className?: string;
}

const MovieCard = ({movie, className}: Props) => {
  return (
    <AnimatedDiv className={`break-inside-avoid ${className}`} key={movie.id}>
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
            <Badge variant="outline">❤️ {movie.vote_average.toFixed(1)}</Badge>
          </div>
        </CardContent>
      </Card>
    </AnimatedDiv>
  );
};

export default MovieCard;
