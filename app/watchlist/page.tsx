/* eslint-disable @next/next/no-img-element */
import React from "react";
import prisma from "@/prisma/client";
import Link from "next/link";
import DeleteMovie from "../DeleteMovie";

const AboutPage = async () => {
  const movies = await prisma.movieWatchList.findMany();

  return (
    <div className="flex flex-wrap gap-3 my-7">
      {movies.map((m) => (
        <div key={m.movieid}>
          <Link href={`/movies/${m.movie.id}`}>
            <img
              className="rounded-md"
              width="110px"
              src={`https://image.tmdb.org/t/p/w500/${m.movie.poster_path}`}
              alt="movieimg"
            />
            <Link href={`/movies/${m.movie.id}`}>
              <p>{m.movie.title}</p>
            </Link>
          </Link>
          <DeleteMovie movieid={m.movieid}/>
        </div>
      ))}
    </div>
  );
};

export const dynamic = "force-dynamic";

export default AboutPage;
