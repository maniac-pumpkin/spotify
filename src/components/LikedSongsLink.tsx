import { Link } from "wouter";
import { HeartFilledIcon } from "../icons/BoxIcons";
import isMobile from "../utils/isMobile";

function LikedSongsLink() {
  const itIsMobile = isMobile();

  return (
    <Link to="/liked-songs">
      <section className="flex h-5 cursor-pointer items-center gap-4 overflow-hidden rounded-md bg-whiteBackground lg:h-8 lg:w-40">
        <div className="flex h-full w-5 items-center justify-center bg-purpleGradient lg:w-8">
          <HeartFilledIcon
            className="fill-pureWhite"
            size={itIsMobile ? 24 : 30}
          />
        </div>
        <h3 className="lg:text-lg">Liked songs</h3>
      </section>
    </Link>
  );
}

export default LikedSongsLink;
