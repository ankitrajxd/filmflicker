/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Movie } from "../services/fetchMovies";
import Link from "next/link";

interface Props {
  movies: Movie[] | undefined;
}

const SwiperCarousel = ({ movies }: Props) => {
  return (
    <Swiper
      modules={[Autoplay]}
      className="my-4 mt-1 border-2 p-4 rounded-xl"
      spaceBetween={0}
      slidesPerView={3.5}
      autoplay={{
        delay: 2200,
      }}
    >
      {movies?.map((m) => (
        <SwiperSlide className="p-2 md:p-3" key={m.id}>
          <Link href={"/movies/" + m.id}>
            <img
              className="rounded-lg"
              src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
              alt="movie"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;
