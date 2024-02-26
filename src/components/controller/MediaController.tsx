import { useEffect } from "react";
import { usePlayerStore, audio } from "../../stores/playerStore";
import SongPreviewMC from "./SongPreviewMC";
import MusicController from "./MusicController";
import VolumeController from "./VolumeController";
import RangeSlider from "../ui/RangeSlider";
import Button from "../ui/Button";
import { FullScreenIcon } from "../../icons/BoxIcons";
import toggleFullScreen from "../../utils/toggleFullScreen";
import formatTime from "../../utils/formatTime";

function MediaController() {
  const currentTime = usePlayerStore((state) => state.currentTime);
  const duration = usePlayerStore((state) => state.duration);
  const seek = usePlayerStore((state) => state.seek);
  const setDuration = usePlayerStore((state) => state.setDuration);

  useEffect(() => {
    audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));
    audio.addEventListener("timeupdate", () => seek());

    return () => {
      audio.removeEventListener("loadedmetadata", () =>
        setDuration(audio.duration),
      );
      audio.removeEventListener("timeupdate", () => seek());
    };
  }, [seek, setDuration]);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-10 flex h-9 w-full items-center bg-pureBlack px-3">
      <section className="flex w-full items-center justify-between">
        <SongPreviewMC />
        <div className="lg:hidden">
          <MusicController />
        </div>
        <div className="hidden shrink grow lg:block lg:max-w-md xl:max-w-2xl">
          <div className="flex flex-col items-center gap-[0.2rem]">
            <MusicController />
            <div className="flex w-full items-center gap-1">
              <span className="text-md">{formatTime(currentTime)}</span>
              <RangeSlider
                className="w-full"
                onChange={(e) => seek(+e.currentTarget.value)}
                value={Math.round((currentTime / duration) * 100).toString()}
              />
              <span className="text-md">{formatTime(duration)}</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center gap-2">
            <VolumeController />
            <Button shape="transparent" onClick={toggleFullScreen}>
              <FullScreenIcon className="h-2 w-2" />
            </Button>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default MediaController;
