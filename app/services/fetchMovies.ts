"use server";

import axios from "axios";

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

interface fetchResponse {
  page: string;
  results: Movie[];
}

export const fetchMovies = async (
  action: string,
  with_genres?: string,
  query?: string,
  page?: number,
) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY!}`,
    },
    params: {
      page: page,
      sort_by: "vote_count.desc",
      ...(action === "search" && { query: query }),
      with_genres: with_genres,
    },
  };

  const res = await axios.get<fetchResponse>(
    `https://api.themoviedb.org/3/${action}/movie`,
    options
  );

  return res.data.results;
};

export const MovieList = async (MovieListAction: string, page?: number) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY!}`,
    },
    params: {
      page: page
    }
  };

  const res = await axios.get<fetchResponse>(
    `https://api.themoviedb.org/3/movie/${MovieListAction}?language=en-US&page=1`,
    options
  );

  return res.data.results;
};
