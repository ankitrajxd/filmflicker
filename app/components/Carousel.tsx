import { MovieList } from "../services/fetchMovies";
import SwiperCarousel from "./SwiperCarousel";
import AnimatedDiv from "./AnimatedDiv";

const Carousel = async () => {
  const movies = await MovieList("popular");

  return (
    <AnimatedDiv>
      <SwiperCarousel movies={movies} />
    </AnimatedDiv>
  );
};

export default Carousel;
