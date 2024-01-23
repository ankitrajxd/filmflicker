"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  selectedList?: string;
}

const MovieListSwitch = ({ selectedList }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // const onclickPopular = () => {
  //   const params = new URLSearchParams(searchParams);
  //   params.set("filter_by", "Popular");
  //   replace(`${pathname}?${params.toString()}`);
  // };
  // const onclickNowPlaying = () => {
  //   const params = new URLSearchParams(searchParams);
  //   params.set("filter_by", "Now Playing");
  //   replace(`${pathname}?${params.toString()}`);
  // };
  // const onclickUpcoming = () => {
  //   const params = new URLSearchParams(searchParams);
  //   params.set("filter_by", "Upcoming");
  //   replace(`${pathname}?${params.toString()}`);
  // };
  // const onclickTop = () => {
  //   const params = new URLSearchParams(searchParams);
  //   params.set("filter_by", "top");
  //   replace(`${pathname}?${params.toString()}`);
  // };

  return (
    <Tabs defaultValue={selectedList}>
      <TabsList>
        <TabsTrigger value="now_playing">
          <Link href="/movies/lists/nowplaying">Now Playing</Link>
        </TabsTrigger>
        <TabsTrigger value="popular">
          <Link href="/movies/lists/popular">Popular</Link>
        </TabsTrigger>
        <TabsTrigger value="upcoming">
          <Link href="/movies/lists/upcoming">Upcoming</Link>
        </TabsTrigger>
        <TabsTrigger value="top_rated">
          <Link href="/movies/lists/top">Top</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default MovieListSwitch;
