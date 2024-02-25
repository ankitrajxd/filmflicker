import axios from "axios";

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

interface fetchResponse {
  page: string;
  results: Movie[];
}

interface MovieDetail {
  backdrop_path: string;
  genres: Genre[];
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  id: number;
  imdb_id: string;
}

interface MovieImage {
  file_path: string;
  aspect_ratio: number;
}

interface fetchMovieImagesResponse {
  backdrops: MovieImage[];
}

interface MovieVideo {
  name: string;
  key: string;
  type: string;
  official: boolean;
}

interface fetchMovieVideosResponse {
  results: MovieVideo[];
}

export const header = {
  accept: "application/json",
  Authorization: `Bearer ${process.env.TMDB_API_KEY!}`,
};

export const endpoint = "https://api.themoviedb.org/3";

// fetching movies

export const fetchMovies = async (
  action: string,
  with_genres?: string,
  query?: string,
  page?: number
) => {
  const options = {
    method: "GET",
    headers: {
      ...header,
    },
    params: {
      page: page,
      sort_by: "vote_count.desc",
      ...(action === "search" && { query: query }),
      with_genres: with_genres,
    },
  };

  const res = await axios.get<fetchResponse>(
    `${endpoint}/${action}/movie`,
    options
  );

  return res.data.results;
};

// fetching movies by genre

export const fetchMoviesByGenre = async (
  with_genres?: number,
  page?: number
) => {
  const options = {
    method: "GET",
    headers: {
      ...header,
    },
    params: {
      page: page,
      sort_by: "vote_count.desc",
    },
  };

  const res = await axios.get<fetchResponse>(
    `${endpoint}/movie/${with_genres}`,
    options
  );

  return res.data.results;
};

// fetching movie lists

export const MovieList = async (
  MovieListAction: "now_playing" | "popular" | "upcoming" | "top_rated",
  page?: number
) => {
  const options = {
    method: "GET",
    headers: {
      ...header,
    },
    params: {
      page: page,
    },
  };

  const res = await axios.get<fetchResponse>(
    `${endpoint}/movie/${MovieListAction}?language=en-US&page=1`,
    options
  );

  return res.data.results;
};

// get movie details
export const GetMovieDetails = async (movieId: number) => {
  const options = {
    method: "GET",
    headers: {
      ...header,
    },
    params: {
      movie_id: movieId,
    },
  };

  const res = await axios.get<MovieDetail>(
    `${endpoint}/movie/${movieId}`,
    options
  );

  return res.data;
};

// get movie Images
export const GetMovieImages = async (movieId: number) => {
  const options = {
    method: "GET",
    headers: {
      ...header,
    },
    params: {
      movie_id: movieId,
    },
  };

  const res = await axios.get<fetchMovieImagesResponse>(
    `${endpoint}/movie/${movieId}/images`,
    options
  );

  const limitedBackdrops = res.data.backdrops.slice(0, 4);

  return limitedBackdrops;
};

// get movie Videos
export const GetMovieVideos = async (movieId: number) => {
  const options = {
    method: "GET",
    headers: {
      ...header,
    },
    params: {
      movie_id: movieId,
    },
  };

  const res = await axios.get<fetchMovieVideosResponse>(
    `${endpoint}/movie/${movieId}/videos`,
    options
  );

  const videos = res.data.results.filter(
    (video) =>
      (video.name.toLowerCase().includes("official") &&
        video.name.toLowerCase().includes("trailer")) ||
      video.type.toLowerCase().includes("trailer")
  );

  return videos;
};

interface FetchMovieProvidersResponse {
  id: number;
  results: {
    [countryCode: string]: {
      link: string;
      flatrate?: Array<{
        logo_path: string;
        provider_id: number;
        provider_name: string;
        display_priority: number;
      }>;
      buy?: Array<{
        logo_path: string;
        provider_id: number;
        provider_name: string;
        display_priority: number;
      }>;
      rent?: Array<{
        logo_path: string;
        provider_id: number;
        provider_name: string;
        display_priority: number;
      }>;
    };
  };
}

// Getting movie streaming providers
export const GetMovieProviders = async (movieId: number) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY!}`,
    },
    params: {
      movie_id: movieId,
    },
  };

  const res = await axios.get<FetchMovieProvidersResponse>(
    `${endpoint}/movie/${movieId}/watch/providers`,
    options
  );

  return res.data.results;
};

export const GetRecommendedMovies = async (movieId: number) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY!}`,
    },
    params: {
      movie_id: movieId,
    },
  };

  const res = await axios.get<fetchResponse>(
    `${endpoint}/movie/${movieId}/recommendations`,
    options
  );

  return res.data.results;
};

interface Review {
  author: string;
  author_details: Array<{
    name: string;
    avatar_path: string;
  }>;
  content: string;
  id: string;
}

interface fetchReviewsResponse {
  page: number;
  results: Review[];
}

// Fetch Movie Reviews
export const GetMovieReviews = async (movieId: number) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY!}`,
    },
    params: {
      movie_id: movieId,
    },
  };

  const res = await axios.get<fetchReviewsResponse>(
    `${endpoint}/movie/${movieId}/reviews`,
    options
  );

  return res.data.results.slice(0, 6);
};

// getting credits of a movie
export interface Cast {
  name: string;
  profile_path: string;
  id: number;
  character: string;
}

interface fetchCreditsResponse {
  cast: Cast[];
}

export const GetMovieCredits = async (movieId: number) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY!}`,
    },
    params: {
      movie_id: movieId,
    },
  };

  const res = await axios.get<fetchCreditsResponse>(
    `${endpoint}/movie/${movieId}/credits`,
    options
  );

  return res.data.cast;
};
