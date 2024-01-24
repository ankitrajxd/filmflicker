"use client";
import { useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Genre } from "../services/fetchMovies";
import LoadingBar from "react-top-loading-bar";

interface Props {
  data: Genre[];
  selectedGenre?: string;
}
const List = ({ data, selectedGenre }: Props) => {
  const ref = useRef(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onSubmit = (genre: Genre) => {
    const params = new URLSearchParams(searchParams);

    if (genre.id) {
      params.set("genre", genre.id.toString());
      params.set("genreName", genre.name);
    } else {
      params.delete("genre");
      params.delete("genreName");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <ul className="flex flex-col gap-2">
      {data.map((genre) => (
        <li
          onClick={() => onSubmit(genre)}
          key={genre.id}
          className={
            selectedGenre === genre.name
              ? "whitespace-nowrap hover:underline hover:underline-offset-4 font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] cursor-pointer underline underline-offset-4 decoration-accent-foreground"
              : "cursor-pointer hover:underline hover:underline-offset-4"
          }
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
