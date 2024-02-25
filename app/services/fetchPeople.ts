import axios from "axios";
import { endpoint, header } from "./fetchMovies";

interface People {
  biography: string;
  birthday: string;
  name: string;
  popularity: number;
  profile_path: string;
  place_of_birth: string;
}

export const getPeopleDetails = async (personId: string) => {
  const options = {
    method: "GET",
    headers: {
      ...header,
    },
  };

  const res = await axios.get<People>(
    `${endpoint}/person/${parseInt(personId)}`,
    options
  );

  return res.data;
};
