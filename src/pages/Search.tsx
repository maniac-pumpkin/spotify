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
      <Input
        type="search"
        placeholder="What do you want to listen to?"
        fullWidth
      />
      <section className="mt-4 flex flex-col gap-4">
        {Array.from({ length: 20 }, (_, i) => (
          <div className="flex items-center justify-between" key={i + 1}>
            <SongPreview type={itIsMobile ? "superMini" : "mini"} />
            <Button shape="transparent">
              <HeartOutlinedIcon className="fill-green" />
            </Button>
          </div>
        ))}
      </section>
    </>
  );
}
