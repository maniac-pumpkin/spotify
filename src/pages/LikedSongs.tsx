import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import SongPreview from "../components/SongPreview";
import isMobile from "../utils/isMobile";
import { HeartFilledIcon } from "../icons/BoxIcons";

export default function LikedSongs() {
  const itIsMobile = isMobile();

  return (
    <>
      <PageHeader upperText="Playlist" downerText="Liked Songs" />
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
