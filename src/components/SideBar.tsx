import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useFormContext } from "../contexts/FormContext";
import { useAccountContext } from "../contexts/AccountContext";
import PlaylistItem from "./PlaylistItem";
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
  const { signedIn } = useAccountContext();
  const { formAction } = useFormContext();
  const [location] = useLocation();

  const { data: user } = useQuery<Tuser>({
    queryKey: ["user"],
  });

  const { data: playlists } = useQuery({
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
      <div className="flex shrink grow flex-col gap-4 overflow-y-scroll rounded-md bg-charcoalBlack p-4">
        <div className="flex items-center justify-between">
          <SideButton Icon={PlaylistIcon} text="Your Library" />
          {signedIn && (
            <Button
              shape="transparent"
              onClick={formAction.showCreatePlaylistForm}
            >
              <PlusIcon className="h-3.5 w-3.5 hover:fill-hoverWhite" />
            </Button>
          )}
        </div>
        <section className="flex flex-col gap-4">
          {playlists?.length !== 0 &&
            playlists?.map((list) => (
              <PlaylistItem
                name={list.name}
                key={list.playlist_id}
                id={list.playlist_id}
              />
            ))}
        </section>
        {signedIn && playlists?.length === 0 && <Warning text="No playlist" />}
        {!signedIn && <Warning text="Sign in to create playlists" />}
      </div>
    </section>
  );
}

export default SideBar;
