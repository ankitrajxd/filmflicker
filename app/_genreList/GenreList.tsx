import { fetchGenre } from "../services/fetchGenre";
import List from "./List";

interface Props {
  selectedGenre?: string;
}

const GenreList = async ({ selectedGenre }: Props) => {
  const genres = await fetchGenre();

  return (
    <>
      <h2 className="mb-3 text-2xl ">Genres</h2>
      <List selectedGenre={selectedGenre} data={genres} />
    </>
  );
};

export default GenreList;
