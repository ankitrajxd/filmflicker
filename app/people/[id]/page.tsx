/* eslint-disable @next/next/no-img-element */
import { getPeopleDetails } from "@/app/services/fetchPeople";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const PeopleDetailPage = async ({ params: { id } }: Props) => {
  const people = await getPeopleDetails(id);

  return (
    <>
      <img
        alt="natasha ji"
        src={`https://image.tmdb.org/t/p/w500/${people.profile_path}`}
      />
      <div>PeopleDetailPage: People Id: {id}</div>
      <div> {people.name}</div>
      <div> {people.biography}</div>
      <div> {people.birthday}</div>
      <div> {people.popularity.toFixed()}</div>
      <div> {people.place_of_birth}</div>
    </>
  );
};

export default PeopleDetailPage;
