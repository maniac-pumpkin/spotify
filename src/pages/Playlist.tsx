import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import PageHeader from "../components/PageHeader";
import SongPreMini from "../components/SongPreMini";
import SongPreSkeleton from "../components/SongPreSkeleton";
import Warning from "../components/Warning";
import { getPlaylistSongsByName } from "../services/apiPlaylist";
import filterURL from "../utils/filterURL";

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
      <PageHeader
        upperText="Playlist"
        downerText={filterURL(name)}
        shape="playlist"
      />
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
        {isError && <Warning text="Something went wrong!" center />}
        {songs?.length === 0 && <Warning text="Songs not found" center />}
      </section>
    </>
  );
}
