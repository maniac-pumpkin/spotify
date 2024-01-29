import { useState } from "react";
import Button from "./Button";
import RangeSlider from "./RangeSlider";
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
import isMobile from "../utils/isMobile";

function MediaController() {
  const [volume, setVolume] = useState(100);
  const itIsMobile = isMobile();

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
      {itIsMobile && (
        <div className="flex items-center gap-2">
          <Button shape="transparent">
            <RepeatIcon size={20} />
          </Button>
          <div className="flex items-center gap-2">
            <Button shape="transparent">
              <BackwardIcon size={30} />
            </Button>
            <Button shape="circle">
              <PlayIcon className="fill-pureBlack" />
            </Button>
            <Button shape="transparent">
              <ForwardIcon size={30} />
            </Button>
          </div>
        </div>
      )}
      {!itIsMobile && (
        <div className="flex max-w-3xl shrink grow flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <Button shape="transparent">
              <BackwardIcon size={30} />
            </Button>
            <Button shape="circle">
              <PlayIcon className="fill-pureBlack" size={35} />
            </Button>
            <Button shape="transparent">
              <ForwardIcon size={30} />
            </Button>
          </div>
          <RangeSlider className="w-full" />
        </div>
      )}
      {!itIsMobile && (
        <div className="flex items-center gap-2">
          <Button shape="transparent">
            <RepeatIcon size={20} />
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
            <FullScreenIcon size={20} />
          </Button>
        </div>
      )}
    </section>
  );
}

export default MediaController;
