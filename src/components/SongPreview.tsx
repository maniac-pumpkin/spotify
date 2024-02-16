import { useState, useLayoutEffect } from "react";
import { toast } from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAccountContext } from "../contexts/AccountContext";
import { usePlayerContext } from "../contexts/PlayerContext";
import Button from "./ui/Button";
import LazyImage from "./ui/LazyImage";
import { HeartFilledIcon, HeartOutlinedIcon } from "../icons/BoxIcons";
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

  const [isLiked, setIsLiked] = useState(false);
  const { signedIn } = useAccountContext();
  const { playerAction } = usePlayerContext();
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
        className={`flex cursor-pointer items-center justify-between ${
          hidden && "hidden"
        }`}
        onClick={handleClick}
      >
        <figure className="flex items-center gap-2">
          <LazyImage src={image_path} alt={title} className="h-6 w-6" />
          <div>
            <h3 className="mb-1 font-bold text-md">{title}</h3>
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
        onClick={handleClick}
      >
        <LazyImage src={image_path} alt={title} />
        <div className="mt-3">
          <h3 className="mb-1 line-clamp-1 font-bold text-xsm md:text-sm lg:text-md">
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
