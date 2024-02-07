import { useState } from "react";
import RangeSlider from "./ui/RangeSlider";
import Button from "./ui/Button";
import {
  PlayIcon,
  ForwardIcon,
  BackwardIcon,
  FullScreenIcon,
  RepeatIcon,
  VolumeOffIcon,
  VolumeLowIcon,
  VolumeFullIcon,
} from "../icons/BoxIcons";
import toggleFullScreen from "../utils/toggleFullScreen";

function MediaController() {
  const [volume, setVolume] = useState(100);

  return (
    <section className="flex w-full items-center justify-between">
      <figure className="flex items-center gap-2">
        <img
          src={
            "https://lgstazshsimhouzevait.supabase.co/storage/v1/object/public/images/Azure.png"
          }
          alt={"Azure"}
          className="w-5 rounded-md bg-cover bg-center"
        />
        <div>
          <h3 className="mb-1 font-bold text-sm">{"Azure"}</h3>
          <figcaption className="text-xsm text-silverGray">
            {"Soundroll"}
          </figcaption>
        </div>
      </figure>

      <div className="md:hidden">
        <div className="flex items-center gap-2">
          <Button shape="transparent">
            <RepeatIcon className="h-2 w-2" />
          </Button>
          <div className="flex items-center gap-2">
            <Button shape="transparent">
              <BackwardIcon className="h-3 w-3" />
            </Button>
            <Button shape="circle">
              <PlayIcon className="fill-pureBlack" />
            </Button>
            <Button shape="transparent">
              <ForwardIcon className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden shrink grow md:block md:max-w-sm lg:max-w-md xl:max-w-2xl">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <Button shape="transparent">
              <BackwardIcon className="h-3 w-3" />
            </Button>
            <Button shape="circle">
              <PlayIcon className="h-3 w-3 fill-pureBlack" />
            </Button>
            <Button shape="transparent">
              <ForwardIcon className="h-3 w-3" />
            </Button>
          </div>
          <RangeSlider className="w-full" />
        </div>
      </div>

      <div className="hidden md:block">
        <div className="flex items-center gap-2">
          <Button shape="transparent">
            <RepeatIcon className="w-2" />
          </Button>
          <div className="flex items-center gap-1">
            <Button shape="transparent" onClick={() => setVolume(0)}>
              {volume === 0 ? (
                <VolumeOffIcon />
              ) : volume < 50 && volume > 0 ? (
                <VolumeLowIcon />
              ) : volume <= 100 && volume > 50 ? (
                <VolumeFullIcon />
              ) : (
                <VolumeFullIcon />
              )}
            </Button>
            <RangeSlider
              min="0"
              max="100"
              step="1"
              className="w-10"
              onChange={(e) => setVolume(+e.currentTarget.value)}
              value={volume}
            />
          </div>

          <Button shape="transparent" onClick={toggleFullScreen}>
            <FullScreenIcon className="h-2 w-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default MediaController;
