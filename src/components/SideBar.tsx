import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useFormStore } from "../stores/formStore";
import { useAuthStore } from "../stores/authStore";
import PlaylistItem from "./PlaylistItem";
import Skeleton from "./Skeleton";
import SideButton from "./SideButton";
import Button from "./ui/Button";
import Warning from "./Warning";
import {
  HomeIcon,
  PlaylistIcon,
  PlusIcon,
  SearchIcon,
} from "../icons/BoxIcons";
import { getPlaylists } from "../services/apiPlaylist";
import { Tuser } from "../services/apiUsers";

function SideBar() {
  const signedIn = useAuthStore((state) => state.signedIn);
  const showCreatePlaylistForm = useFormStore(
    (state) => state.showCreatePlaylistForm,
  );
  const [location] = useLocation();

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
    <section className="flex h-full w-30 flex-col gap-2">
      <div className="flex shrink-0 grow-0 flex-col justify-between gap-4 rounded-md bg-charcoalBlack p-4">
        <SideButton
          Icon={HomeIcon}
          text="Home"
          to="/"
          enabled={location === "/" && true}
        />
        <SideButton
          Icon={SearchIcon}
          text="Search"
          to="/search"
          enabled={location === "/search" && true}
        />
      </div>
      <div className="relative flex shrink grow flex-col gap-4 overflow-y-scroll rounded-md bg-charcoalBlack p-4">
        <div className="flex items-center justify-between">
          <SideButton Icon={PlaylistIcon} text="Your Library" />
          {signedIn && (
            <Button shape="transparent" onClick={showCreatePlaylistForm}>
              <PlusIcon className="h-3.5 w-3.5 hover:fill-hoverWhite" />
            </Button>
          )}
        </div>
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
      </div>
    </section>
  );
}

export default SideBar;
