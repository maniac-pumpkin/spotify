import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAccountContext } from "../contexts/AccountContext";
import Button from "./ui/Button";
import LazyImage from "./ui/LazyImage";
import { HeartFilledIcon, HeartOutlinedIcon } from "../icons/BoxIcons";
import { handleLike, getLikedSongBySongID } from "../services/apiLikedSongs";
import { Tuser } from "../services/apiUsers";

type TsongPrevMini = {
  title: string;
  artist: string;
  image: string;
  song_id: number;
  hidden?: boolean;
};

function SongPreMini({ title, artist, image, song_id, hidden }: TsongPrevMini) {
  const [isLiked, setIsLiked] = useState(false);
  const { signedIn } = useAccountContext();
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

  const handleLikeButton = () => {
    setIsLiked((p) => !p);
    mutate();
  };

  useEffect(() => {
    setIsLiked(liked ? true : false);
  }, [liked]);

  return (
    <div
      className={`flex cursor-pointer items-center justify-between ${
        hidden && "hidden"
      }`}
    >
      <figure className="flex items-center gap-2">
        <LazyImage src={image} alt={title} className="h-6 w-6" />
        <div>
          <h3 className="mb-1 font-bold text-md">{title}</h3>
          <figcaption className="text-sm text-silverGray">{artist}</figcaption>
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
}

export default SongPreMini;
