import MovieCardGrid from '@/app/components/MovieCardGrid';
import { MovieList } from '@/app/services/fetchMovies';
import React from 'react'

const topPage = async () => {
    const Movies = await MovieList("top_rated");
    return <MovieCardGrid Movies={Movies} />;
}

export default topPage