import Heading from "@/app/Heading";
import MovieListSwitch from "@/app/MovieListSwitch";
import GenreList from "@/app/_genreList/GenreList";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const listLayout = ({ children }: Props) => {
  return (
    <div className="grid sm:grid-cols-5 grid-cols-1 md:mt-[3rem]">
      <div className="md:flex md:max-w-[120px] md:flex-col sm:gap-2 hidden my-3">
        <GenreList />
      </div>

      <div className="col-span-5 md:col-span-4 gap-5">
        <div>
          <Heading />
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <MovieListSwitch />
            {/* <SearchInput /> */}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default listLayout;
