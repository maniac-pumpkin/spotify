import { useState } from "react";
import Button from "./Button";
import { PlayIcon, PauseIcon } from "../icons/BoxIcons";

type TSongPreview = {
  src?: string;
  songName?: string;
  artist?: string;
  type: "mini" | "superMini" | "fullCover";
};

function SongPreview({ src, songName, artist, type }: TSongPreview) {
  const [hover, setHover] = useState(true);

  src =
    "https://cdn11.bigcommerce.com/s-1xa2dhlu0a/images/stencil/1280x1280/products/83262/84267/LDE9764__24164.1657985409.jpg?c=1";
  songName = "Jews must die";
  artist = "Mr. Bond";

  if (type === "superMini")
    return (
      <figure className="flex items-center gap-2">
        <img
          src={src}
          alt={songName}
          className="w-4 rounded-md bg-cover bg-center"
        />
        <div className="mt-1">
          <h3 className="mb-1 font-bold text-xsm">{songName}</h3>
          <figcaption className="text-tn text-silverGray">{artist}</figcaption>
        </div>
      </figure>
    );

  if (type === "mini")
    return (
      <figure className="flex items-center gap-2">
        <img
          src={src}
          alt={songName}
          className="w-6 rounded-md bg-cover bg-center"
        />
        <div className="mt-1">
          <h3 className="mb-1 font-bold text-md">{songName}</h3>
          <figcaption className="text-sm text-silverGray">{artist}</figcaption>
        </div>
      </figure>
    );

  if (type === "fullCover")
    return (
      <figure
        className="w-fit rounded-md bg-gunMetalBlack p-4 transition hover:bg-neroBlack"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="relative">
          <img
            src={src}
            alt={songName}
            className="w-full rounded-md bg-cover bg-center"
          />
          <Button
            shape="circle"
            color="green"
            className={`absolute bottom-0 right-0 mb-1 mr-1 transition ${
              hover ? "opacity-100" : "opacity-0"
            }`}
          >
            <PlayIcon />
          </Button>
        </div>
        <div className="mt-1">
          <h3 className="mb-1 font-bold text-xsm md:text-sm lg:text-md">
            {songName}
          </h3>
          <figcaption className="text-tn text-silverGray md:text-xsm lg:text-sm">
            {artist}
          </figcaption>
        </div>
      </figure>
    );
}

export default SongPreview;
