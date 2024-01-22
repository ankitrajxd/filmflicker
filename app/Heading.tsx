import React from "react";

interface Props {
  selectedList?: string;
  selectedGenre?: string;
}
const Heading = ({ selectedList, selectedGenre }: Props) => {
  const list: Record<string, string> = {
    now_playing: "Now Playing",
    upcoming: "Upcoming",
    popular: "Popular",
    top_rated: "Top",
  };

  return (
    <h1
      style={{ lineHeight: "1.4" }}
      className="text-4xl mb-3 sm:mb-0 md:text-6xl text-center sm:text-left font-extrabold bg-clip-text text-transparent   bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient"
    >
      {selectedGenre
        ? `${selectedGenre} Movies`
        : selectedList
        ? `${list[selectedList]} Movies`
        : "Trending Movies"}
    </h1>
  );
};

export default Heading;
