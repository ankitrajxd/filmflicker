"use client";

import { Movie } from "@/app/services/fetchMovies";
import styles from "./recommendedMovies.module.css";
import MovieCard from "@/app/components/MovieCard";
import { useRef } from "react";

interface Props {
  movies: Movie[];
}

const RecommendedMoviesComponent = ({ movies }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (element) {
      if (e.deltaY === 0) return;
      element.scrollTo({
        left: element.scrollLeft + e.deltaY,
      });
    }
  };

  return (
    <>
      <h1 className="mt-[5rem] mb-2 font-extrabold text-2xl">
        Recommended Movies
      </h1>
      <div
        className={`flex flex-row overflow-x-scroll gap-3 ${styles.noScroll}`}
        onWheelCapture={onWheel}
      >
        {movies.map((m) => (
          <MovieCard className="min-w-[250px]" key={m.id} movie={m}></MovieCard>
        ))}
      </div>
    </>
  );
};

export default RecommendedMoviesComponent;
