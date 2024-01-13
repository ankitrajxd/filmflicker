"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  selectedList?: string;
}

const MovieListSwitch = ({ selectedList }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onclickPopular = () => {
    const params = new URLSearchParams(searchParams);
    params.set("filter_by", "popular");
    replace(`${pathname}?${params.toString()}`);
  };
  const onclickNowPlaying = () => {
    const params = new URLSearchParams(searchParams);
    params.set("filter_by", "now_playing");
    replace(`${pathname}?${params.toString()}`);
  };
  const onclickUpcoming = () => {
    const params = new URLSearchParams(searchParams);
    params.set("filter_by", "upcoming");
    replace(`${pathname}?${params.toString()}`);
  };
  const onclickTop = () => {
    const params = new URLSearchParams(searchParams);
    params.set("filter_by", "top_rated");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Tabs defaultValue={selectedList}>
      <TabsList>
        <TabsTrigger onClick={onclickNowPlaying} value="now_playing">
          Now Playing
        </TabsTrigger>
        <TabsTrigger onClick={onclickPopular} value="popular">
          Popular
        </TabsTrigger>
        <TabsTrigger onClick={onclickUpcoming} value="upcoming">
          Upcoming
        </TabsTrigger>
        <TabsTrigger onClick={onclickTop} value="top_rated">
          Top
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default MovieListSwitch;
