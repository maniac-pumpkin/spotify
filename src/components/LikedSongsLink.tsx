import { Link } from "wouter";
import { HeartFilledIcon } from "../icons/BoxIcons";
import isMobile from "../utils/isMobile";

function LikedSongsLink() {
  return (
    <Link to="/liked-songs">
      <section className="flex h-5 cursor-pointer items-center gap-4 overflow-hidden rounded-md bg-whiteBackground lg:h-8 lg:w-40">
        <div className="bg-purpleGradient flex h-full w-5 items-center justify-center lg:w-8">
          <HeartFilledIcon
            className="fill-pureWhite"
            size={isMobile() ? 24 : 30}
          />
        </div>
        <h3 className="lg:text-lg">Liked songs</h3>
      </section>
    </Link>
  );
}

export default LikedSongsLink;
