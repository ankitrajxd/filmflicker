import { Button } from "@/components/ui/button";
import Heading from "./Heading";
import MovieGrid from "./MovieGrid";
import MovieListSwitch from "./MovieListSwitch";
import SearchInput from "./SearchInput";
import GenreList from "./_genreList/GenreList";
import WatchList from "./WatchList";
import Carousel from "./components/Carousel";

interface Props {
  searchParams: {
    query?: string;
    filter_by?: string;
    genre?: string;
    genreName?: string;
    page?: string;
  };
}

export default function Home({ searchParams }: Props) {
  return (
    <div className="grid sm:grid-cols-5 grid-cols-1 md:mt-[2.5rem]">
      <div className="md:flex md:max-w-[120px] md:flex-col sm:gap-2 hidden my-3">
        <GenreList selectedGenre={searchParams.genreName} />
      </div>

      <div className="col-span-5 md:col-span-4 gap-5">
        <Heading
          selectedGenre={searchParams.genreName}
          selectedList={searchParams.filter_by}
        />

        {!searchParams.query && !searchParams.genre && <Carousel />}

        {!searchParams.query && !searchParams.genre && (
          <p
            className={`font-extrabold text-2xl sm:text-4xl text-center sm:text-start mt-[2rem] mb-4 $`}
          >
            Discover 🍿
          </p>
        )}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <MovieListSwitch selectedList={searchParams.filter_by} />
          <div className="flex gap-y-3 items-center">
            <SearchInput />
            <div className="md:hidden">
              <WatchList />
            </div>
          </div>
        </div>
        <MovieGrid
          genre={searchParams.genre}
          filter_by={searchParams.filter_by}
          query={searchParams.query}
          page={parseInt(searchParams.page!)}
        />
      </div>
    </div>
  );
}
