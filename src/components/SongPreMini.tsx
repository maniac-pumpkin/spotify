import Button from "./Button";
import { HeartFilledIcon, HeartOutlinedIcon } from "../icons/BoxIcons";

type TsongPrevMini = {
  title?: string;
  artist?: string;
  image?: string;
  liked: boolean;
};

function SongPreMini({ title, artist, image, liked }: TsongPrevMini) {
  return (
    <div className="flex cursor-pointer items-center justify-between">
      <figure className="flex items-center gap-2">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-6 rounded-md bg-cover bg-center"
        />
        <div>
          <h3 className="mb-1 font-bold text-md">{title}</h3>
          <figcaption className="text-sm text-silverGray">{artist}</figcaption>
        </div>
      </figure>

      <Button shape="transparent">
        {liked && <HeartFilledIcon className="fill-green" />}
        {!liked && <HeartOutlinedIcon className="fill-green" />}
      </Button>
    </div>
  );
}

export default SongPreMini;
