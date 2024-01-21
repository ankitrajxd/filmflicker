/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Movie } from "../services/fetchMovies";
import AnimatedDiv from "./AnimatedDiv";
import MovieCard from "./MovieCard";

interface Props {
  Movies: Movie[];
}

const MovieCardGrid = ({ Movies }: Props) => {
  return (
    <div className="columns-2  sm:columns-2 md:columns-3 lg:columns-4 gap-4 mt-3">
      {Movies?.map((movie) => (
        <AnimatedDiv className="break-inside-avoid" key={movie.id}>
          <MovieCard movie={movie} />
        </AnimatedDiv>
      ))}
    </div>
  );  
};

export default MovieCardGrid;
