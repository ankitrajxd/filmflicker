import MovieCardGrid from "@/app/components/MovieCardGrid";
import { MovieList } from "@/app/services/fetchMovies";
import React from "react";

const nowPlayingPage = async () => {


    const Movies = await MovieList("now_playing")

  return (
    <MovieCardGrid Movies={Movies}/>
  );
};

export default nowPlayingPage;
