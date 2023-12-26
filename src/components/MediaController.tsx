import Button from "./Button";
import SongPreview from "./SongPreview";
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

// TODO: There's a lot to do

function MediaController() {
  return (
    <section className="flex h-8 w-full items-center justify-between bg-gray-700">
      <SongPreview type={isMobile() ? "superMini" : "mini"} />
      <div className="flex flex-col items-center gap-2">
        <DefaultButtons />
        <input type="range" min="0" max="100" step="1" className="h-0.5 w-30" />
      </div>
      {!isMobile() && (
        <div className="flex items-center gap-2">
          <Button shape="transparent">
            <RepeatIcon size={20} />
          </Button>
          <VolumeChanger />
          <Button shape="transparent" onClick={toggleFullScreen}>
            <FullScreenIcon size={20} />
          </Button>
        </div>
      )}
    </section>
  );
}

function DefaultButtons() {
  return (
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
  );
}

function VolumeChanger() {
  return (
    <div className="flex items-center gap-1">
      <Button shape="transparent">
        <VolumeFullIcon />
      </Button>
      <input type="range" min="0" max="100" step="1" className="h-0.5 w-10" />
    </div>
  );
}

export default MediaController;
