import { useLocation } from "wouter";
import { useFormStore } from "../../stores/formStore";
import { useAuthStore } from "../../stores/authStore";
import PlaylistContainer from "../playlist/PlaylistContainer";
import SideButton from "./SideButton";
import Button from "../ui/Button";
import {
  HomeIcon,
  PlaylistIcon,
  PlusIcon,
  SearchIcon,
} from "../../icons/BoxIcons";

function SideBar() {
  const signedIn = useAuthStore((state) => state.signedIn);
  const showCreatePlaylistForm = useFormStore(
    (state) => state.showCreatePlaylistForm,
  );
  const [location] = useLocation();

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
        <PlaylistContainer />
      </div>
    </section>
  );
}

export default SideBar;
