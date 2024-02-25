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
import minutetohour from "@/app/services/minuteToHour";
import { MdVerified } from "react-icons/md";
import DownloadMovie from "./DownloadMovie";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import MovieCredits from "./MovieCredits";

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
  const { userId } = auth();

  return (
    <AnimatedDiv className="md:my-[4rem]">
      <div className="flex flex-col md:flex-row gap-4 ">
        <img
          className="rounded-lg min-w-[100%] md:min-w-[initial] md:w-[18rem]"
          alt="movie poster"
          src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`}
        ></img>
        <div className="relative">
          <ul>
            {/* <li>{Movie.id}</li>
            <li>{Movie.imdb_id}</li> */}
            <li className="text-3xl font-extrabold">{Movie.title}</li>
            <li className="mb-7">{Movie.tagline}</li>
            <li>Release Date: {Movie.release_date}</li>
            <li>{Movie.vote_average?.toFixed(1)}/10</li>
            <li>{minutetohour(Movie.runtime)}</li>
            <li>Status: {Movie.status}</li>
          </ul>

          <div className="flex flex-wrap gap-3 mt-3 mb-7">
            {Movie.genres.map((g) => (
              <Badge variant={"secondary"} key={g.id}>
                {g.name}
              </Badge>
            ))}
          </div>

          {MovieProviders["US"] && <p>Available On</p>}
          <div className="flex flex-wrap gap-3 my-3">
            {MovieProviders["US"]?.rent?.map((r) => (
              <div key={r.provider_id}>
                {/* <p key={r.provider_id}>{r.provider_name}</p> */}
                <img
                  style={{ width: "40px", borderRadius: "10px" }}
                  src={`https://image.tmdb.org/t/p/w500/${r.logo_path}`}
                  alt={`provider logo - ${r.provider_name}`}
                />
              </div>
            ))}
          </div>

          <Link
            className="absolute left-[-19rem] top-[-2.5rem] right-3 hidden md:block"
            href={"../"}
          >
            <FaArrowLeftLong />
          </Link>
        </div>
      </div>

      {/* Movie Credits */}
      {/* <div
        className={`flex flex-row overflow-x-scroll gap-5 mt-[4rem] ${styles.noScroll}`}
      >
        {MovieCast.map((cast) => (
          <div key={cast.cast_id} className="">
            <div className="w-[7rem]">
              <img
                className=" object-cover rounded-lg"
                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                alt={cast.name}
              />
            </div>
            <p className="text-[14px] mt-3">{cast.name}</p>
            <p className="text-[12px] text-slate-400">
              {cast.character?.split("/")[0]}
            </p>
            {/* <p>{cast.cast_id}</p> */}
      {/* </div>
        ))}
        // </div> */}

      <MovieCredits movieCast={MovieCast} />

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

      {/* links */}
      {userId && (
        <div>
          <h2 className="text-2xl font-extrabold">Available Links</h2>
          <DownloadMovie Imdb_id={Movie.imdb_id} />
        </div>
      )}

      {/* User reviews */}

      <h2 className="font-extrabold text-2xl mt-[3rem] mb-2 text-center">
        User Reviews
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {MovieReviews.map((review) => (
          <div key={review.id} className="border-2 p-2 rounded-md">
            <div className="flex gap-1 items-center mb-3">
              <p className="font-extrabold text-[#45caff]">{review.author}</p>
              <MdVerified />
            </div>
            <p>{review.content.slice(0, 200)}</p>
          </div>
        ))}
      </div>

      <RecommendedMoviesComponent movies={RecommendedMovies} />
    </AnimatedDiv>
  );
};

export default MovieDetailPage;
