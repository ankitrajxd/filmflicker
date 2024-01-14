import MovieCardGrid from "@/app/components/MovieCardGrid";
import { MovieList } from "@/app/services/fetchMovies";
import { usePathname } from "next/navigation";
import React from "react";

const UpcomingMoviePage = async () => {
  const Movies = await MovieList("upcoming");

  //   const pathname = usePathname();

  //   console.log(pathname);

  return <MovieCardGrid Movies={Movies} />;
};

export default UpcomingMoviePage;
