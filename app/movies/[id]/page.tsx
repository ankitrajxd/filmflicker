import AnimatedDiv from "@/app/components/AnimatedDiv";
import React from "react";

interface Props {
  params: { id: string };
}

const MovieDetailPage = ({ params }: Props) => {
  return <AnimatedDiv>Movie id: {params.id}</AnimatedDiv>;
};

export default MovieDetailPage;
