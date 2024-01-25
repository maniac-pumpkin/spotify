import { useQuery } from "@tanstack/react-query";
import PageHeader from "../components/PageHeader";
import SongPreMini from "../components/SongPreMini";
import Warning from "../components/Warning";
import { getLikedSongsByID } from "../services/apiLikedSongs";
import { Tuser } from "../services/apiUsers";

export default function LikedSongs() {
  const { data: user } = useQuery<Tuser>({
    queryKey: ["user"],
  });

  const { data: likedSongs } = useQuery({
    queryKey: ["likedSongs"],
    queryFn: () => getLikedSongsByID(user?.user_id),
    enabled: Boolean(user),
  });

  return (
    <>
      <PageHeader upperText="Playlist" downerText="Liked Songs" />
      <section className="mt-4 flex flex-col gap-4">
        {likedSongs?.map((likedSong) => (
          <SongPreMini
            title={likedSong.title}
            artist={likedSong.artist}
            image={likedSong.image_path}
            key={likedSong.song_id}
            liked
          />
        ))}
        {likedSongs?.length === 0 && (
          <Warning text="You've not liked any songs yet" />
        )}
      </section>
    </>
  );
}
