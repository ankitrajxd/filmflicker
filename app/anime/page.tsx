import React from "react";
import AnimeCard from "../components/AnimeCard";
import SearchInput from "../SearchInput";
import { fetchTrendingAnime, searchAnime } from "../services/fetchAnime";

interface Props {
  searchParams: {
    query: string;
  };
}

const AnimePage = async ({ searchParams }: Props) => {
  let anime;

  // console.log(params.query);
  if (searchParams.query) {
    anime = await searchAnime(searchParams.query);
  } else {
    anime = await fetchTrendingAnime();
  }

  return (
    <>
      <h1 className="text-4xl font-extrabold my-[1rem]">Top Streaming</h1>
      <SearchInput />

      <div className="columns-2  sm:columns-2 md:columns-3 lg:columns-5 gap-4 mt-3">
        {anime?.map((a) => (
          <AnimeCard className="break-inside-avoid" key={a.id} anime={a} />
        ))}
      </div>
    </>
  );
};
export default AnimePage;