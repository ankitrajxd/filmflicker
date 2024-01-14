import MovieCardGrid from "@/app/components/MovieCardGrid";
import { MovieList } from "@/app/services/fetchMovies";


const nowPlayingPage = async () => {


    const Movies = await MovieList("now_playing")

  return (
    <MovieCardGrid Movies={Movies}/>
  );
};

export default nowPlayingPage;
