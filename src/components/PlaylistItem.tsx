import { Link } from "wouter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePlaylist } from "../services/apiPlaylist";
import { toast } from "react-hot-toast";
import { MusicIcon, TrashcanIcon } from "../icons/BoxIcons";
import Button from "./ui/Button";

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
        <div className="flex h-4 w-4 items-center justify-center rounded-md bg-purpleGradient">
          <MusicIcon className="h-2 w-2 fill-pureWhite" />
        </div>
        <span className="text-md">{name}</span>
      </div>
      <Button shape="transparent" onClick={() => mutate()}>
        <TrashcanIcon />
      </Button>
    </Link>
  );
}

export default PlaylistItem;
