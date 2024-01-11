import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import SongPreview from "../components/SongPreview";
import isMobile from "../utils/isMobile";
import { HeartFilledIcon } from "../icons/BoxIcons";

export default function LikedSongs() {
  const itIsMobile = isMobile();

  return (
    <>
      <div className="mt-4 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-purpleGradient md:h-14 md:w-14">
          <HeartFilledIcon
            className="fill-pureWhite"
            size={itIsMobile ? 50 : 70}
          />
        </div>
        <div>
          <p className="mb-2 lg:text-lg">Playlist</p>
          <PageTitle title="Liked songs" noSpace />
        </div>
      </div>
      <section className="mt-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <SongPreview type={itIsMobile ? "superMini" : "mini"} />
          <Button shape="transparent">
            <HeartFilledIcon className="fill-green" />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <SongPreview type={itIsMobile ? "superMini" : "mini"} />
          <Button shape="transparent">
            <HeartFilledIcon className="fill-green" />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <SongPreview type={itIsMobile ? "superMini" : "mini"} />
          <Button shape="transparent">
            <HeartFilledIcon className="fill-green" />
          </Button>
        </div>
      </section>
    </>
  );
}
