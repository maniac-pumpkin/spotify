import { useLocation } from "wouter";
import { useSelector, showCreatePlaylistForm } from "../contexts/Global";
import SideButton from "./SideButton";
import Button from "./Button";
import {
  HomeIcon,
  PlaylistIcon,
  PlusIcon,
  SearchIcon,
} from "../icons/BoxIcons";

function SideBar() {
  const { dispatch } = useSelector();
  const [location] = useLocation();

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
            onClick={() => dispatch(showCreatePlaylistForm())}
          >
            <PlusIcon size={35} className="hover:fill-hoverWhite" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SideBar;
