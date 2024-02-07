import { Link } from "wouter";
import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "./ui/Button";
import { MusicIcon, TrashcanIcon } from "../icons/BoxIcons";
import { deletePlaylist } from "../services/apiPlaylist";

type Tplaylistitem = {
  name: string;
  id: number;
};

function PlaylistItem({ name, id }: Tplaylistitem) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => deletePlaylist(id),
    onSuccess: () => {
      toast.success("Playlist has been deleted");
      queryClient.invalidateQueries({
        queryKey: ["playlists"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
    <Link
      to={`/playlist/:${name}`}
      className="flex items-center justify-between rounded-md"
    >
      <div className="flex cursor-pointer items-center gap-2">
        <div className="flex h-4 w-4 items-center justify-center rounded-md bg-grayGradient">
          <MusicIcon className="h-2 w-2 fill-pureWhite" />
        </div>
        <span className="text-md">{name}</span>
      </div>
      <Button shape="transparent" onClick={() => mutate()}>
        <TrashcanIcon className="h-2 w-2" />
      </Button>
    </Link>
  );
}

export default PlaylistItem;
