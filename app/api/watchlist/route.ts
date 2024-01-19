import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const movieIdSchema = z.object({
  movieid: z.number(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const movie = await prisma.movieWatchList.findUnique({
    where: {
      movieid: body.id,
    },
  });

  if (movie) {
    return NextResponse.json(
      { error: "Movie Already exist!" },
      { status: 400 }
    );
  }

  const newMovie = await prisma.movieWatchList.create({
    data: {
      movieid: body.id,
      movie: {
        id: body.id,
        title: body.title,
        poster_path: body.poster_path,
        release_date: body.release_date,
        vote_average: body.vote_average,
      },
    },
  });

  return NextResponse.json(newMovie, { status: 201 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const movie = await prisma.movieWatchList.findUnique({
    where: {
      movieid: parseInt(params.id),
    },
  });

  if (!movie) {
    return NextResponse.json(
      { error: "Movie does not exist" },
      { status: 404 }
    );
  }

  await prisma.movieWatchList.delete({
    where: {
      movieid: movie.movieid,
    },
  });

  return NextResponse.json({}, { status: 200 });
}
