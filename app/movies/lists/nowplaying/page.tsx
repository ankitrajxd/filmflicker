import NowPlayingMovies from "./NowPlayingMovies";


interface Props {
  searchParams: {
    page?: string;
  }
}

const nowPlayingPage = ({searchParams}: Props) => {
  return (
    <>
      <NowPlayingMovies page={parseInt(searchParams.page!)} />
    </>
  );
};

export default nowPlayingPage;
