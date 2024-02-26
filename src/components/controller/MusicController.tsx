import { useQuery } from "@tanstack/react-query";
import { usePlayerStore } from "../../stores/playerStore";
import Button from "../ui/Button";
import {
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
} from "../../icons/BoxIcons";
import type { Tsong } from "../../services/apiSongs";

function MusicController() {
  const audioId = usePlayerStore((state) => state.audioID);
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const playAudio = usePlayerStore((state) => state.playAudio);
  const pauseAudio = usePlayerStore((state) => state.pauseAudio);
  const resumeAudio = usePlayerStore((state) => state.resumeAudio);

  const { data: songs } = useQuery<Tsong[]>({
    queryKey: ["songs"],
    enabled: Boolean(audioId),
  });

  const handleForward = () => {
    const nextSongId = audioId! < 24 ? audioId! + 1 : 24;
    const songPath = songs?.at(nextSongId - 1)?.song_path;
    if (songPath) playAudio(nextSongId, songPath);
  };

  const handleBackward = () => {
    const previousSongId = audioId! > 1 ? audioId! - 1 : 1;
    const songPath = songs?.at(previousSongId - 1)?.song_path;
    if (songPath) playAudio(previousSongId, songPath);
  };

  return (
    <div className="flex items-center gap-1">
      <Button shape="transparent" onClick={handleBackward}>
        <BackwardIcon className="h-3 w-3 lg:h-4 lg:w-4" />
      </Button>
      <Button
        shape="circle"
        onClick={() => (isPlaying ? pauseAudio() : resumeAudio())}
      >
        {isPlaying && <PauseIcon className="h-3 w-3 fill-pureBlack" />}
        {!isPlaying && <PlayIcon className="h-3 w-3 fill-pureBlack" />}
      </Button>
      <Button shape="transparent" onClick={handleForward}>
        <ForwardIcon className="h-3 w-3 lg:h-4 lg:w-4" />
      </Button>
    </div>
  );
}

export default MusicController;
