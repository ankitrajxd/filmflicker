"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

interface Props {
  Imdb_id: string;
}

interface MovieDownloadResponse {
  status: string;
  status_message: string;
  data: {
    movie_count: number;
    limit: number;
    page_number: number;
    movies: {
      title: string;
      torrents: {
        hash: any;
        url: string;
      }[];
    }[];
  };
}

const DownloadMovie = ({ Imdb_id }: Props) => {
  const [links, setLinks] = useState<string[]>();
  const { toast } = useToast();

  useEffect(() => {
    try {
      const fetchLink = async () => {
        const res = await axios.get<MovieDownloadResponse>(
          "https://yts.mx/api/v2/list_movies.json",
          {
            params: {
              query_term: Imdb_id,
            },
          }
        );

        const magnetUrls = res.data.data.movies?.flatMap((movie) =>
          movie.torrents.map((torrent) => {
            const trackers = [
              "http://track.one:1234/announce",
              "udp://track.two:80",
            ]
              .map((tracker) => `&tr=${encodeURIComponent(tracker)}`)
              .join("");

            return `magnet:?xt=urn:btih:${torrent.hash}&dn=${encodeURIComponent(
              movie.title
            )}${trackers}`;
          })
        );

        setLinks(magnetUrls);
      };

      fetchLink();
    } catch (error) {
      console.log(error);
    }
  }, [Imdb_id]);

  const handleCopyToClipboard = async (magnetUrl: string) => {
    try {
      await navigator.clipboard.writeText(magnetUrl);
      toast({
        title: "URL Copied!",
        description: "Paste this url in a Download Manager.",
      });
    } catch (error) {
      console.error("Unable to copy to clipboard:", error);
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      {links?.map((l, index) => (
        <p className="" key={index}>
          <Button variant={"link"} onClick={() => handleCopyToClipboard(l)}>
            Link {index + 1}
          </Button>
          {/* <span>{l}</span> */}
        </p>
      ))}
    </div>
  );
};

export default DownloadMovie;
