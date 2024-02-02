import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import filterURL from "../utils/filterURL";
import PageHeader from "../components/PageHeader";
import SongPreMini from "../components/SongPreMini";
import SongPreSkeleton from "../components/SongPreSkeleton";
import { getPlaylistSongsByName } from "../services/apiPlaylist";
import Warning from "../components/Warning";

export default function Playlist() {
  const { name } = useParams();
  const {
    data: songs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["playlists", filterURL(name)],
    queryFn: () => getPlaylistSongsByName(filterURL(name)),
    enabled: Boolean(name),
  });

  return (
    <>
      <PageHeader upperText="Playlist" downerText="Liked Songs" />
      <section className="mt-4 flex flex-col gap-4">
        {songs?.map((song) => (
          <SongPreMini
            title={song.title}
            artist={song.artist}
            image={song.image_path}
            song_id={song.song_id}
            key={song.song_id}
          />
        ))}
        {isLoading && <SongPreSkeleton type="mini" quantity={4} />}
        {isError && <Warning text="Nothing is here to be seen" />}
      </section>
    </>
  );
}
