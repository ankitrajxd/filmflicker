import axios from "axios";

interface Genre {
  id: number;
  name: string;
}

interface fetchResponse {
  genres: Genre[];
}

export const fetchGenre = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY!}`,
    },
  };

  const res = await axios.get<fetchResponse>(
    `https://api.themoviedb.org/3/genre/movie/list`,
    options
  );

  return res.data.genres;
};
