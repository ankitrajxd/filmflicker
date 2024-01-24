import axios from "axios";
import React from "react";
import ReactPlayer from "react-player";
import VideoPlayer from "./VideoPlayer";

interface Props {
  params: {
    id: string;
  };
}

type AnimeEpisodeStats = {
  sub: number;
  dub: number;
};

type AnimeStats = {
  rating: string;
  quality: string;
  episodes: AnimeEpisodeStats;
  type: string;
  duration: string;
};

type AnimeInfo = {
  id: string;
  name: string;
  poster: string;
  description: string;
  stats: AnimeStats;
};

type AnimeMoreInfo = {
  aired: string;
  genres: string[];
  status: string;
  studios: string;
  duration: string;
  // Add any other properties from the "moreInfo" object
};

type AnimeResponse = {
  anime: {
    info: AnimeInfo;
    moreInfo: AnimeMoreInfo;
  }[];
  mostPopularAnimes: {
    episodes: AnimeEpisodeStats;
    id: string;
    jname: string;
    name: string;
    poster: string;
    // Add any other properties from the "mostPopularAnimes" object
  }[];
};

const AnimeDetailPage = async ({ params }: Props) => {
  const res = await axios.get(
    `https://api-aniwatch.onrender.com/anime/info?id=${params.id}`
  );

  // console.log(res.data.anime);

  return (
    <div>
      <p>{res.data.anime.info.name}</p>
      <p>{res.data.anime.info.description}</p>
      <p>{res.data.anime.info.stats.rating}</p>
      <p>{res.data.anime.info.stats.duration}</p>

      {/* <p>This is params - {params.id}</p> */}
      {/* <VideoPlayer /> */}
    </div>
  );
};

export default AnimeDetailPage;
