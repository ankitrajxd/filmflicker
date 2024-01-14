import Heading from "./Heading";
import MovieGrid from "./MovieGrid";
import MovieListSwitch from "./MovieListSwitch";
import SearchInput from "./SearchInput";
import GenreList from "./_genreList/GenreList";

interface Props {
  searchParams: {
    query?: string;
    filter_by?: string;
    genre?: string;
    page?: string;
  };
}

export default function Home({ searchParams }: Props) {
  return (
    <div className="grid sm:grid-cols-5 grid-cols-1 md:mt-[3rem]">
      <div className="md:flex md:max-w-[120px] md:flex-col sm:gap-2 hidden my-3">
        <GenreList selectedGenre={searchParams.genre} />
      </div>

      <div className="col-span-5 md:col-span-4 gap-5">
        <Heading
          selectedGenre={searchParams.genre}
          selectedList={searchParams.filter_by}
        />
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <MovieListSwitch selectedList={searchParams.filter_by} />
          <SearchInput />
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
