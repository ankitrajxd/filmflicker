"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Movie, MovieList } from "../services/fetchMovies";

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
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {movies?.map((m) => (
        <SwiperSlide key={m.id}>{m.title}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
