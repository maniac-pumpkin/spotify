import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useFormContext } from "../contexts/FormContext";
import SideButton from "./SideButton";
import Button from "./Button";
import Warning from "./Warning";
import PlaylistItem from "./PlaylistItem";
import {
  HomeIcon,
  PlaylistIcon,
  PlusIcon,
  SearchIcon,
} from "../icons/BoxIcons";
import { getPlaylists } from "../services/apiPlaylist";

function SideBar() {
  const { formAction } = useFormContext();
  const [location] = useLocation();

  const { data: playlists } = useQuery({
    queryKey: ["playlists"],
    queryFn: getPlaylists,
  });

  return (
    <section className="flex h-full w-40 flex-col gap-2">
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
          <Button
            shape="transparent"
            onClick={formAction.showCreatePlaylistForm}
          >
            <PlusIcon size={35} className="hover:fill-hoverWhite" />
          </Button>
        </div>
        {playlists?.length === 0 && <Warning text="No playlist" />}
        <section className="flex flex-col gap-4">
          {playlists?.map((list) => (
            <PlaylistItem name={list.name} key={list.playlist_id} />
          ))}
        </section>
      </div>
    </section>
  );
}

export default SideBar;
