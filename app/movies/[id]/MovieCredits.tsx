/* eslint-disable @next/next/no-img-element */
"use client";
import { Cast } from "@/app/services/fetchMovies";
import React from "react";
import styles from "./recommendedMovies.module.css";
import Link from "next/link";

interface Props {
  movieCast: Cast[];
}

const MovieCredits = ({ movieCast }: Props) => {
  return (
    <div
      className={`flex flex-row overflow-x-scroll gap-5 mt-[4rem] ${styles.noScroll}`}
    >
      {movieCast.map((cast) => (
        <Link href={`/people/${cast.id}`} key={cast.id}>
          <div className="w-[7rem]">
            <img
              className=" object-cover rounded-lg"
              src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
              alt={cast.name}
            />
          </div>
          <p className="text-[14px] mt-3">{cast.name}</p>
          <p className="text-[12px] text-slate-400">
            {cast.character?.split("/")[0]}
          </p>
          <p>{cast.id}</p>
        </Link>
      ))}
    </div>
  );
};

export default MovieCredits;
