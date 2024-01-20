"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

interface Props {
  Imdb_id: string;
}

const DownloadMovie = ({ Imdb_id }: Props) => {
  const [links, setLinks] = useState();

  useEffect(() => {
    try {
      const fetchlink = async () => {
        return await axios.get("https://yts.mx/api/v2/list_movies.json", {
          params: {
            query_term: Imdb_id,
          },
        });
      };

      console.log(fetchlink);
    } catch (error) {
      console.log(error);
    }
  }, [Imdb_id]);

  return <div>DownloadMovie</div>;
};

export default DownloadMovie;
