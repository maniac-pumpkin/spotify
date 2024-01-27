import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import Button from "./Button";
import { useAccountContext } from "../contexts/AccountContext";
import { HeartFilledIcon, HeartOutlinedIcon } from "../icons/BoxIcons";
import { handleLike, getLikedSongBySongID } from "../services/apiLikedSongs";
import { Tuser } from "../services/apiUsers";

type TsongPrevMini = {
  title?: string;
  artist?: string;
  image?: string;
  song_id: number;
};

function SongPreMini({ title, artist, image, song_id }: TsongPrevMini) {
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
    <div className="flex cursor-pointer items-center justify-between">
      <figure className="flex items-center gap-2">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-6 rounded-md bg-cover bg-center"
        />
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
