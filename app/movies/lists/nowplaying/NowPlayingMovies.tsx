import LoadNext from "@/app/LoadNext";
import MovieCardGrid from "@/app/components/MovieCardGrid";
import { MovieList } from "@/app/services/fetchMovies";

interface Props {
    page: number;
}


const NowPlayingMovies = async ({page}: Props) => {

  const Movies = await MovieList("now_playing", 4);

  return (
    <>
      <MovieCardGrid Movies={Movies} />
      <LoadNext/>
    </>
  );
};



export default NowPlayingMovies;
