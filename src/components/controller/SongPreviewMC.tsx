import { useQuery } from "@tanstack/react-query";
import { usePlayerStore } from "../../stores/playerStore";
import Skeleton from "../Skeleton";
import { Tsong } from "../../services/apiSongs";

function SongPreviewMC() {
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

export default SongPreviewMC;
