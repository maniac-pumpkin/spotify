import { Link } from "wouter";
import Button from "./Button";
import { HomeIcon, SearchIcon } from "../icons/BoxIcons";

function NavLinks() {
  return (
    <nav className="flex items-center gap-3">
      <Link to="/">
        <Button shape="square">
          <HomeIcon size={16} />
        </Button>
      </Link>
      <Link to="/search">
        <Button shape="square">
          <SearchIcon size={16} />
        </Button>
      </Link>
    </nav>
  );
}

export default NavLinks;
