import { useState } from "react";
import Button from "./Button";
import SongPreview from "./SongPreview";
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

  return (
    <section className="flex h-8 w-full items-center justify-between">
      <SongPreview type={isMobile() ? "superMini" : "mini"} />
      {isMobile() && (
        <div className="flex items-center gap-2">
          <Button shape="transparent">
            <RepeatIcon size={20} />
          </Button>
          <div className="flex items-center gap-2">
            <Button shape="transparent">
              <BackwardIcon size={30} />
            </Button>
            <Button shape="circle">
              <PlayIcon />
            </Button>
            <Button shape="transparent">
              <ForwardIcon size={30} />
            </Button>
          </div>
        </div>
      )}
      {!isMobile() && (
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <Button shape="transparent">
              <BackwardIcon size={30} />
            </Button>
            <Button shape="circle">
              <PlayIcon />
            </Button>
            <Button shape="transparent">
              <ForwardIcon size={30} />
            </Button>
          </div>

          <RangeSlider />
        </div>
      )}
      {!isMobile() && (
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
