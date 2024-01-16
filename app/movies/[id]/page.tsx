/* eslint-disable @next/next/no-img-element */
import AnimatedDiv from "@/app/components/AnimatedDiv";
import {
  GetMovieCredits,
  GetMovieDetails,
  GetMovieImages,
  GetMovieProviders,
  GetMovieReviews,
  GetMovieVideos,
  GetRecommendedMovies,
} from "@/app/services/fetchMovies";
import styles from "./recommendedMovies.module.css";
import { Badge } from "@/components/ui/badge";
import RecommendedMoviesComponent from "./RecommendedMoviesComponent";

interface Props {
  params: { id: string };
}

const MovieDetailPage = async ({ params }: Props) => {
  const Movie = await GetMovieDetails(parseInt(params.id));
  const MovieImages = await GetMovieImages(parseInt(params.id));
  const MovieVideos = await GetMovieVideos(parseInt(params.id));
  const MovieProviders = await GetMovieProviders(parseInt(params.id));
  const RecommendedMovies = await GetRecommendedMovies(parseInt(params.id));
  const MovieReviews = await GetMovieReviews(parseInt(params.id));
  const MovieCast = await GetMovieCredits(parseInt(params.id));

  return (
    <AnimatedDiv className="md:my-[4rem]">
      <div className="flex flex-col md:flex-row gap-4">
        <img
          className="rounded-lg min-w-[100%] md:min-w-[initial] md:w-[18rem]"
          alt="movie poster"
          src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`}
        ></img>
        <div>
          <ul>
            {/* <li>{Movie.id}</li> */}
            <li className="text-3xl font-extrabold">{Movie.title}</li>
            <li className="mb-7">{Movie.tagline}</li>
            <li>Release Date: {Movie.release_date}</li>
            <li>{Movie.vote_average.toFixed(1)}/10</li>
            <li>{Movie.runtime}</li>
            <li>{Movie.status}</li>
          </ul>
          <div className="flex gap-3 mb-7">
            {Movie.genres.map((g) => (
              <Badge key={g.id}>{g.name}</Badge>
            ))}
          </div>

          <div className="flex  gap-3 my-3">
            {MovieProviders["US"].rent?.map((r) => (
              <div key={r.provider_id}>
                {/* <p key={r.provider_id}>{r.provider_name}</p> */}
                <img
                  style={{ width: "50px", borderRadius: "10px" }}
                  src={`https://image.tmdb.org/t/p/w500/${r.logo_path}`}
                  alt={`provider logo - ${r.provider_name}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Movie Credits */}
      <div
        className={`flex flex-row overflow-x-scroll gap-5 mt-[4rem] ${styles.noScroll}`}
      >
        {MovieCast.map((cast) => (
          <div key={cast.cast_id}>
            <div className="w-[50px]">
              <img
                className=" object-cover rounded-lg"
                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                alt={cast.name}
              />
            </div>
            <p className="text-sm mt-3">{cast.name}</p>
            {/* <p>{cast.cast_id}</p> */}
          </div>
        ))}
      </div>

      <div className="rounded-md overflow-hidden flex flex-col md:flex-row flex-wrap gap-3 my-8 ">
        {MovieVideos.map((v) => (
          <iframe
            key={v.key}
            className="max-w-[400px]"
            src={`https://www.youtube.com/embed/${v.key}`}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ))}
      </div>

      {/* User reviews */}

      <h2 className="font-extrabold text-2xl mt-[3rem] mb-2 text-center">
        User Reviews
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {MovieReviews.map((review) => (
          <div key={review.id} className="border-2 p-2 rounded-md">
            <p className="font-extrabold mb-3"> {review.author}</p>
            <p>{review.content.slice(0, 200)}</p>
          </div>
        ))}
      </div>

      <RecommendedMoviesComponent movies={RecommendedMovies} />
    </AnimatedDiv>
  );
};

export default MovieDetailPage;
