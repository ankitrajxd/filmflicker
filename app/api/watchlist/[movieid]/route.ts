import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function DELETE(
request: NextRequest,
{ params }: { params: { movieid: string } }
) {
// console.log(params.movieid);

  const movie = await prisma.movieWatchList.findUnique({
where: {
movieid: parseInt(params.movieid),
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
