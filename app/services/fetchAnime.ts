import axios from "axios";

//fetching trending anime
export interface Anime {
  id: string;
  name: string;
  poster: string;
  rank: number;
}

interface HomePageResponse {
  trendingAnimes: Anime[];
}

export const fetchTrendingAnime = async () => {
  const res = await axios.get<HomePageResponse>(
    "https://aniwatch-api-tawny.vercel.app/anime/home"
  );

  return res.data.trendingAnimes;
};

// searching anime
interface AnimeEpisodeStats {
  sub: number;
  dub: number;
}

export interface SearchAnime {
  id: string;
  name: string;
  poster: string;
  duration: string;
  type: string;
  rating: string;
  episodes: AnimeEpisodeStats;
}

interface AnimeResponse {
  animes: SearchAnime[];
}

export const searchAnime = async (query: string) => {
  const res = await axios.get<AnimeResponse>(
    `https://aniwatch-api-tawny.vercel.app/anime/search?q=${query}`
  );

  return res.data.animes;
};
