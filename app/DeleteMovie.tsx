"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";
import { useToast } from "@/components/ui/use-toast";
import Spinner from "./components/Spinner";

interface Props {
  movieid: number;
}

const DeleteMovie = ({ movieid }: Props) => {
  const router = useRouter();
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState<boolean>();

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete("/api/watchlist/" + movieid);
      toast({
        title: "Movie Removed!",
      });
      router.refresh();
      setIsLoading(false);
    } catch (error: any) {
      toast({
        title: "Error!",
      });
      setIsLoading(false);
    }
    router.refresh();
  };

  return (
    <>
      {isLoading && <div className="my-8">
        <Spinner />
      </div>}
      {!isLoading && (
        <div onClick={() => onDelete()} className="my-8">
          <MdDelete color='red' size={"25px"} />
        </div>
      )}
    </>
  );
};

export default DeleteMovie;
