import { Link } from "wouter";
import { HeartFilledIcon } from "../icons/BoxIcons";

function LikedSongsLink() {
  return (
    <Link
      to="/liked-songs"
      className="flex h-5 cursor-pointer items-center gap-4 overflow-hidden rounded-md bg-whiteBackground lg:h-8 lg:w-37 xl:w-42"
    >
      <div className="flex h-full w-5 items-center justify-center bg-purpleGradient lg:w-8">
        <HeartFilledIcon className="fill-pureWhite lg:h-3.5 lg:w-3.5" />
      </div>
      <h2 className="lg:text-lg">Liked songs</h2>
    </Link>
  );
}

export default LikedSongsLink;
