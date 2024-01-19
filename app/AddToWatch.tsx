"use client";

import { MdAddToPhotos } from "react-icons/md";
import axios, { Axios } from "axios";
import { Movie } from "./services/fetchMovies";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "./components/Spinner";

interface Props {
  movie: Movie;
}

const AddToWatch = ({ movie }: Props) => {
  const { toast } = useToast();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>();

  const addToWatchlist = async (movie: Movie) => {
    try {
      setIsLoading(true);

      await axios.post("/api/watchlist", movie);

      toast({
        title: "Movie Added!",
        description: `${movie.title} added to your watchlist!`,
      });

      router.refresh();
      setIsLoading(false);

      // alert(movie.title + " Added!");
    } catch (error) {
      toast({
        // title: "Movie Added!",
        description: `${movie.title} is already in your Watchlist!`,
      });
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading && <Spinner />}

      {!isLoading && (
        <MdAddToPhotos
          className="cursor-pointer"
          onClick={() => addToWatchlist(movie)}
        />
      )}
    </div>
  );
};

export default AddToWatch;
