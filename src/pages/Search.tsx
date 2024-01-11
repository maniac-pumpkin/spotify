import SongPreview from "../components/SongPreview";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import Input from "../components/Input";
import { HeartOutlinedIcon } from "../icons/BoxIcons";
import isMobile from "../utils/isMobile";

export default function Search() {
  const itIsMobile = isMobile();

  return (
    <>
      <PageTitle title="Search" />
      <Input placeholder="What do you want to listen to?" fullWidth />
      <section className="mt-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <SongPreview type={itIsMobile ? "superMini" : "mini"} />
          <Button shape="transparent">
            <HeartOutlinedIcon className="fill-green" />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <SongPreview type={itIsMobile ? "superMini" : "mini"} />
          <Button shape="transparent">
            <HeartOutlinedIcon className="fill-green" />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <SongPreview type={itIsMobile ? "superMini" : "mini"} />
          <Button shape="transparent">
            <HeartOutlinedIcon className="fill-green" />
          </Button>
        </div>
      </section>
    </>
  );
}
