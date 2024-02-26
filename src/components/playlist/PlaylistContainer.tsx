import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "../../stores/authStore";
import PlaylistItem from "./PlaylistItem";
import Skeleton from "../Skeleton";
import Warning from "../Warning";
import { getPlaylists } from "../../services/apiPlaylist";
import { Tuser } from "../../services/apiUsers";

function PlaylistContainer() {
  const signedIn = useAuthStore((state) => state.signedIn);
  const { data: user } = useQuery<Tuser>({
    queryKey: ["user"],
  });
  const {
    data: playlists,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["playlists"],
    queryFn: () => getPlaylists(user?.user_id),
    enabled: Boolean(user),
  });

  return (
    <>
      <section className="flex flex-col gap-1">
        {!isLoading &&
          !isError &&
          signedIn &&
          playlists?.length !== 0 &&
          playlists?.map((list) => (
            <PlaylistItem
              name={list.name}
              key={list.playlist_id}
              id={list.playlist_id}
            />
          ))}
        {isLoading && <Skeleton type="playlist" quantity={4} />}
      </section>
      {signedIn && playlists?.length === 0 && (
        <Warning text="No playlist" center />
      )}
      {isError && <Warning text="Something went wrong!" center />}
      {!signedIn && <Warning text="Sign in to create playlists" center />}
    </>
  );
}

export default PlaylistContainer;
