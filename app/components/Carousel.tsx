/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"

import { Movie, MovieList } from "../services/fetchMovies";
import Link from "next/link";
// configure Swiper to use modules

const Carousel = () => {
  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const res = await MovieList("popular");
      setMovies(res);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <Swiper
      className="my-4 border-2 p-4 rounded-xl"
      spaceBetween={0}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay
    >
      {movies?.map((m) => (
        <SwiperSlide className="p-3" key={m.id}>
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

export default Carousel;
