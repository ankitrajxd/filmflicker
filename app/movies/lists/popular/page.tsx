import MovieCardGrid from "@/app/components/MovieCardGrid";
import { MovieList } from "@/app/services/fetchMovies";
import React from "react";

const PopularMoviesPage = async () => {
  const Movies = await MovieList("popular");
  return <MovieCardGrid Movies={Movies} />;
};

export default PopularMoviesPage;
