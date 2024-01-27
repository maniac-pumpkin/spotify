import { useQuery } from "@tanstack/react-query";
import { useAccountContext } from "../contexts/AccountContext";
import LikedSongsLink from "../components/LikedSongsLink";
import SongPreview from "../components/SongPreview";
import SongPreSkeleton from "../components/SongPreSkeleton";
import Warning from "../components/Warning";
import PageTitle from "../components/PageTitle";
import greeting from "../utils/greeting";
import { getSongs } from "../services/apiSongs";
import { Tuser } from "../services/apiUsers";

export default function Home() {
  const { signedIn } = useAccountContext();

  const { data: user } = useQuery<Tuser>({
    queryKey: ["user"],
  });

  const {
    data: songs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["songs"],
    queryFn: getSongs,
  });

  return (
    <>
      {signedIn && user && (
        <>
          <PageTitle title={`${greeting()}, ${user.username}`} />
          <LikedSongsLink />
        </>
      )}
      {!isError && (
        <section className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
          {isLoading && <SongPreSkeleton type="normal" quantity={8} />}
          {songs?.map((song) => (
            <SongPreview
              title={song.title}
              artist={song.artist}
              image={song.image_path}
              key={song.song_id}
            />
          ))}
        </section>
      )}
      {isError && <Warning text="Failed to load songs :(" />}
    </>
  );
}
