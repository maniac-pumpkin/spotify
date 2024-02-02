import { Link } from "wouter";
import { HeartFilledIcon } from "../icons/BoxIcons";

function LikedSongsLink() {
  return (
    <Link
      to="/liked-songs"
      className="flex h-5 cursor-pointer items-center gap-4 overflow-hidden rounded-md bg-whiteBackground lg:h-8 lg:w-40"
    >
      <div className="flex h-full w-5 items-center justify-center bg-purpleGradient lg:w-8">
        <HeartFilledIcon className="fill-pureWhite md:w-30" />
      </div>
      <h2 className="lg:text-lg">Liked songs</h2>
    </Link>
  );
}

export default LikedSongsLink;
