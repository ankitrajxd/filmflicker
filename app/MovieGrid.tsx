/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MovieList, fetchMovies } from "./services/fetchMovies";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import AnimatedDiv from "./components/AnimatedDiv";
import LoadNext from "./LoadNext";
import MovieCardGrid from "./components/MovieCardGrid";

interface Props {
  query?: string;
  filter_by?: string;
  genre?: string;
  page?: number;
}

const MovieGrid = async ({ query, filter_by, genre, page }: Props) => {
  let Movies;
  if (query) {
    Movies = await fetchMovies("search", undefined, query);
  } 
  else if (genre) {
    Movies = await fetchMovies("discover", genre);
  } else if (page) {
    Movies = await fetchMovies("discover", undefined, undefined, page);
  } else {
    Movies = await fetchMovies("discover");
  }

  return (
    <>
      <MovieCardGrid Movies={Movies} />
      {<LoadNext />}
    </>
  );
};

export default MovieGrid;
