import { useState, useLayoutEffect } from "react";
import { toast } from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAccountContext } from "../contexts/AccountContext";
import { usePlayerContext } from "../contexts/PlayerContext";
import LazyImage from "./ui/LazyImage";
import Button from "./ui/Button";
import {
  HeartFilledIcon,
  HeartOutlinedIcon,
  PauseIcon,
  PlayIcon,
} from "../icons/BoxIcons";
import { handleLike, getLikedSongBySongID } from "../services/apiLikedSongs";
import { Tuser } from "../services/apiUsers";
import { Tsong } from "../services/apiSongs";

type IsongPreview = {
  song: Tsong;
  hidden?: boolean;
  type: "normal" | "mini";
};

function SongPreview({ type, hidden, song }: IsongPreview) {
  const { title, artist, image_path, song_id, song_path } = song;

  const [hover, setHover] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { signedIn } = useAccountContext();
  const { playerAction, isPlaying, audioId } = usePlayerContext();
  const queryClient = useQueryClient();

  const { data: user } = useQuery<Tuser>({
    queryKey: ["user"],
  });

  const { data: liked } = useQuery({
    queryKey: ["songs", "preview", song_id],
    queryFn: () => getLikedSongBySongID(user?.user_id, song_id),
    enabled: Boolean(user),
  });

  const { mutate } = useMutation({
    mutationFn: () => handleLike(user?.user_id, song_id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["songs", "liked"],
      });
      toast.success(data ? "Liked" : "unLiked");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  useLayoutEffect(() => {
    setIsLiked(liked ? true : false);
  }, [liked]);

  const handleLikeButton = () => {
    setIsLiked((p) => !p);
    mutate();
  };

  const handleClick = () => {
    playerAction.playAudio(song_id, song_path);
  };

  if (type === "mini")
    return (
      <div
        className={`flex items-center justify-between rounded-md p-1 transition hover:bg-neroBlack ${
          hidden && "hidden"
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <figure className="flex items-center gap-2">
          <div className="relative h-6 w-6">
            <LazyImage src={image_path} alt={title} className="h-full w-full" />
            {hover && (
              <div
                className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-md  backdrop-blur-sm"
                onClick={handleClick}
              >
                <Button shape="transparent">
                  {isPlaying && song_id === audioId ? (
                    <PauseIcon className="h-4 w-4 fill-pureWhite" />
                  ) : (
                    <PlayIcon className="h-4 w-4 fill-pureWhite" />
                  )}
                </Button>
              </div>
            )}
          </div>
          <div>
            <h3
              className={`mb-1 font-bold text-md ${
                audioId === song_id && "text-green"
              }`}
            >
              {title}
            </h3>
            <figcaption className="text-sm text-silverGray">
              {artist}
            </figcaption>
          </div>
        </figure>
        {signedIn && (
          <Button shape="transparent" onClick={handleLikeButton}>
            {isLiked && <HeartFilledIcon className="fill-green" />}
            {!isLiked && <HeartOutlinedIcon className="fill-green" />}
          </Button>
        )}
      </div>
    );

  if (type === "normal")
    return (
      <figure
        className="w-fit cursor-pointer rounded-md bg-gunMetalBlack p-2 shadow-thinBorder transition hover:bg-neroBlack"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="relative">
          <LazyImage src={image_path} alt={title} />
          {hover && (
            <div
              className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-md  backdrop-blur-sm"
              onClick={handleClick}
            >
              <Button shape="transparent">
                {isPlaying && song_id === audioId ? (
                  <PauseIcon className="h-4 w-4 fill-pureWhite" />
                ) : (
                  <PlayIcon className="h-4 w-4 fill-pureWhite" />
                )}
              </Button>
            </div>
          )}
        </div>
        <div className="mt-3">
          <h3
            className={`mb-1 line-clamp-1 font-bold text-xsm md:text-sm lg:text-md ${
              audioId === song_id && "text-green"
            }`}
          >
            {title}
          </h3>
          <figcaption className="line-clamp-1 text-tn text-silverGray md:text-xsm lg:text-sm">
            {artist}
          </figcaption>
        </div>
      </figure>
    );
}

export default SongPreview;
