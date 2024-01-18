"use client";

import React from "react";
import { MdAddToPhotos } from "react-icons/md";
import axios, { Axios } from "axios";
import { Movie } from "./services/fetchMovies";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface Props {
  movie: Movie;
}

const AddToWatch = ({ movie }: Props) => {
  const { toast } = useToast();
  const router = useRouter();

  const addToWatchlist = async (movieid: number, moviename: string) => {
    try {
      await axios.post("/api/watchlist", { movieid, moviename });

      toast({
        title: "Movie Added!",
        description: `${moviename} added to your watchlist!`,
      });

      router.refresh();

      // alert(movie.title + " Added!");
    } catch (error) {
      toast({
        // title: "Movie Added!",
        description: `${moviename} is already in your Watchlist!`,
      });
    }
  };

  return (
    <MdAddToPhotos
      className="cursor-pointer"
      onClick={() => addToWatchlist(movie.id, movie.title)}
    />
  );
};

export default AddToWatch;
