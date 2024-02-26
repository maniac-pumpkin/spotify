import { usePlayerStore } from "../../stores/playerStore";
import RangeSlider from "../ui/RangeSlider";
import Button from "../ui/Button";
import {
  VolumeFullIcon,
  VolumeLowIcon,
  VolumeOffIcon,
} from "../../icons/BoxIcons";

function VolumeController() {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);

  return (
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
        className="w-10"
        onChange={(e) => setVolume(+e.currentTarget.value)}
        value={volume}
      />
    </div>
  );
}

export default VolumeController;
