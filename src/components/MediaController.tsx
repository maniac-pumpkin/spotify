import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { usePlayerStore, audio } from "../stores/playerStore";
import RangeSlider from "./ui/RangeSlider";
import Skeleton from "./Skeleton";
import Button from "./ui/Button";
import {
  PlayIcon,
  PauseIcon,
  ForwardIcon,
  BackwardIcon,
  VolumeOffIcon,
  VolumeLowIcon,
  VolumeFullIcon,
  FullScreenIcon,
} from "../icons/BoxIcons";
import toggleFullScreen from "../utils/toggleFullScreen";
import formatTime from "../utils/formatTime";
import { Tsong } from "../services/apiSongs";

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
        <MCsongPreview />
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

function MCsongPreview() {
  const audioId = usePlayerStore((state) => state.audioID);

  const { data: songs } = useQuery<Tsong[]>({
    queryKey: ["songs"],
    enabled: Boolean(audioId),
  });

  const song = songs?.at(audioId! - 1);

  if (!song) return <Skeleton type="songPreview_mini" quantity={1} />;

  return (
    <figure className="flex items-center gap-2">
      <img
        src={song.image_path}
        alt={song.title}
        className="w-5 rounded-md bg-cover bg-center"
      />
      <div>
        <h3 className="mb-1 font-bold text-sm">{song.title}</h3>
        <figcaption className="text-xsm text-silverGray">
          {song.artist}
        </figcaption>
      </div>
    </figure>
  );
}

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

export default MediaController;
