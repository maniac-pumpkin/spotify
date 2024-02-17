import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import PageHeader from "../components/PageHeader";
import SongPreview from "../components/SongPreview";
import Skeleton from "../components/Skeleton";
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
      <section className="mt-4 flex flex-col gap-1">
        {songs?.map((song) => (
          <SongPreview type="mini" song={song} key={song.song_id} />
        ))}
        {isLoading && <Skeleton type="songPreview_mini" quantity={4} />}
        {isError && <Warning text="Something went wrong!" center />}
        {songs?.length === 0 && <Warning text="Songs not found" center />}
      </section>
    </>
  );
}
