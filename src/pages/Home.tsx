import { useQuery } from "@tanstack/react-query";
import { useAccountContext } from "../contexts/AccountContext";
import Skeleton from "../components/Skeleton";
import LikedSongsLink from "../components/LikedSongsLink";
import SongPreview from "../components/SongPreview";
import PageTitle from "../components/PageTitle";
import Warning from "../components/Warning";
import { getSongs } from "../services/apiSongs";
import { Tuser } from "../services/apiUsers";
import greeting from "../utils/greeting";

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
      {signedIn && (
        <>
          <PageTitle title={`${greeting()}, ${user?.username}`} />
          <LikedSongsLink />
        </>
      )}
      {!isError && (
        <section className="mt-4 grid grid-cols-2 place-items-center gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {isLoading && <Skeleton type="songPreview_normal" quantity={8} />}
          {songs?.map((song) => (
            <SongPreview type="normal" song={song} key={song.song_id} />
          ))}
        </section>
      )}
      {isError && <Warning text="Check your connection!" center />}
    </>
  );
}
