import { MusicIcon, TrashcanIcon } from "../icons/BoxIcons";
import Button from "./Button";

type Tplaylistitem = {
  name: string;
};

function PlaylistItem({ name }: Tplaylistitem) {
  return (
    <div className="flex items-center justify-between rounded-md">
      <div className="flex cursor-pointer items-center gap-2">
        <div className="flex h-4 w-4 items-center justify-center rounded-md bg-purpleGradient">
          <MusicIcon className="fill-pureWhite" size={20} />
        </div>
        <span className="text-md">{name}</span>
      </div>
      <Button shape="transparent">
        <TrashcanIcon />
      </Button>
    </div>
  );
}

export default PlaylistItem;
