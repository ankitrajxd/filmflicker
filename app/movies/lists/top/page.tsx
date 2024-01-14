import MovieCardGrid from '@/app/components/MovieCardGrid';
import { MovieList } from '@/app/services/fetchMovies';


const topPage = async () => {
    const Movies = await MovieList("top_rated");
    return <MovieCardGrid Movies={Movies} />;
}

export default topPage