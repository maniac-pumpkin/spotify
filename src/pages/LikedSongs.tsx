import { useQuery } from "@tanstack/react-query";
import Skeleton from "../components/Skeleton";
import SongPreview from "../components/SongPreview";
import PageHeader from "../components/PageHeader";
import Warning from "../components/Warning";
import { getLikedSongsByUserID } from "../services/apiLikedSongs";
import { Tuser } from "../services/apiUsers";

export default function LikedSongs() {
  const { data: user } = useQuery<Tuser>({
    queryKey: ["user"],
  });

  const {
    data: likedSongs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["songs", "liked"],
    queryFn: () => getLikedSongsByUserID(user?.user_id),
    enabled: Boolean(user),
  });

  return (
    <>
      <PageHeader
        upperText="Playlist"
        downerText="Liked Songs"
        shape="likedMusic"
      />
      <section className="mt-4 flex flex-col gap-4">
        {likedSongs?.map((likedSong) => (
          <SongPreview type="mini" song={likedSong} key={likedSong.song_id} />
        ))}
        {isLoading && <Skeleton type="songPreview_mini" quantity={4} />}
        {!isError && likedSongs?.length === 0 && (
          <Warning text="You've not liked any songs yet" center />
        )}
        {isError && <Warning text="Something went wrong!" center />}
      </section>
    </>
  );
}
