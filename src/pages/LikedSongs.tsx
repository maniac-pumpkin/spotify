import { useQuery } from "@tanstack/react-query";
import SongPreSkeleton from "../components/SongPreSkeleton";
import SongPreMini from "../components/SongPreMini";
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
          <SongPreMini
            title={likedSong.title}
            artist={likedSong.artist}
            image={likedSong.image_path}
            song_id={likedSong.song_id}
            key={likedSong.song_id}
          />
        ))}
        {isLoading && <SongPreSkeleton type="mini" quantity={4} />}
        {!isError && likedSongs?.length === 0 && (
          <Warning text="You've not liked any songs yet" center />
        )}
        {isError && <Warning text="Something went wrong!" center />}
      </section>
    </>
  );
}
