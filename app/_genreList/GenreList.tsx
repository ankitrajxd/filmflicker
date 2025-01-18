import { fetchGenre } from "../services/fetchGenre";
import List from "./List";

interface Props {
  selectedGenre?: string;
}

const GenreList = async ({ selectedGenre }: Props) => {
  const genres = await fetchGenre();

  return (
    <div className="md:flex md:max-w-[120px] md:flex-col sm:gap-2 hidden my-3 sticky top-5 z-10">
      <h2 className="mb-3 text-2xl ">Genres</h2>
      <List selectedGenre={selectedGenre} data={genres} />
    </div>
  );
};

export default GenreList;
