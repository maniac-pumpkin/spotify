import { useLocation } from "wouter";
import Button from "./ui/Button";
import { HomeIcon, SearchIcon } from "../icons/BoxIcons";

function NavLinks() {
  const [, setLocation] = useLocation();

  return (
    <nav className="flex items-center gap-3">
      <Button shape="square" onClick={() => setLocation("/")}>
        <HomeIcon className="h-1.6 w-1.6 fill-pureBlack" />
      </Button>
      <Button shape="square" onClick={() => setLocation("/search")}>
        <SearchIcon className="h-1.6 w-1.6 fill-pureBlack" />
      </Button>
    </nav>
  );
}

export default NavLinks;
