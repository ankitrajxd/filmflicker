import MovieCardGrid from "@/app/components/MovieCardGrid";
import { MovieList } from "@/app/services/fetchMovies";


const UpcomingMoviePage = async () => {
  const Movies = await MovieList("upcoming");

  return <MovieCardGrid Movies={Movies} />;
};

export default UpcomingMoviePage;
