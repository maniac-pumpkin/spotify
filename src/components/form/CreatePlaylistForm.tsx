import { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormStore } from "../../stores/formStore";
import useOutsideClick from "../../hooks/useOutsideClick";
import BackdropLayer from "../structural/BackdropLayer";
import ComboBox from "../ui/ComboBox";
import Spinner from "../ui/Spinner";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { CheckIcon, CloseIcon } from "../../icons/BoxIcons";
import { addPlaylist } from "../../services/apiPlaylist";
import { getSongs } from "../../services/apiSongs";
import { Tuser } from "../../services/apiUsers";

type TformInfo = {
  playlistName: string;
  playlistSongs: number[];
};

function CreatePlaylistForm() {
  const [formInfo, setFormInfo] = useState<TformInfo>({
    playlistName: "",
    playlistSongs: [],
  });
  const [playlistSearch, setPlaylistSearch] = useState("");
  const hideCreatePlaylistForm = useFormStore(
    (state) => state.hideCreatePlaylistForm,
  );
  const formRef = useOutsideClick<HTMLFormElement>(hideCreatePlaylistForm);
  const queryClient = useQueryClient();

  const { data: user } = useQuery<Tuser>({
    queryKey: ["user"],
  });

  const { data: songs } = useQuery({
    queryKey: ["songs", "playlistItem"],
    queryFn: getSongs,
    enabled: Boolean(user),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      addPlaylist(user?.user_id, formInfo.playlistName, formInfo.playlistSongs),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["playlists"],
      });
      hideCreatePlaylistForm();
      toast.success("Playlist has been created");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
    <BackdropLayer>
      <form
        id="playlist-form"
        className="relative flex w-30 flex-col items-center justify-center gap-4 rounded-md bg-gunMetalBlack p-5 md:w-50"
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          mutate();
        }}
      >
        <h3 className="mb-5 font-bold text-2xl">Create a playlist</h3>
        <Input
          type="text"
          variant="classic"
          label="Playlist name"
          placeholder="Name..."
          value={formInfo.playlistName}
          onInput={(e) =>
            setFormInfo((p) => ({
              ...p,
              playlistName: (e.target as HTMLInputElement).value,
            }))
          }
          required
        />
        <ComboBox inputSearchFn={setPlaylistSearch} inputValue={playlistSearch}>
          {songs?.map((song) => (
            <Button
              type="button"
              shape="transparent"
              className={`justify-between rounded-md p-1 text-pureWhite hover:bg-neroBlack ${
                song.title.toLowerCase().includes(playlistSearch.toLowerCase())
                  ? "flex"
                  : !playlistSearch
                    ? "flex"
                    : "hidden"
              }`}
              key={song.song_id}
              fullWidth
              onClick={() =>
                setFormInfo((p) => ({
                  ...p,
                  playlistSongs: p.playlistSongs.includes(song.song_id)
                    ? [...p.playlistSongs].filter((id) => song.song_id !== id)
                    : [...p.playlistSongs, song.song_id],
                }))
              }
            >
              <span>
                {song.song_id} - {song.title}
              </span>
              {formInfo.playlistSongs.includes(song.song_id) && (
                <CheckIcon className="fill-pureWhite" />
              )}
            </Button>
          ))}
        </ComboBox>
        <Button
          className="gap-1"
          type="submit"
          color="green"
          disabled={isPending}
          fullWidth
        >
          Create
          {isPending && <Spinner className="fill-gunMetalBlack" />}
        </Button>
        <Button
          type="button"
          shape="transparent"
          className="absolute right-2 top-2"
          onClick={hideCreatePlaylistForm}
        >
          <CloseIcon />
        </Button>
      </form>
    </BackdropLayer>
  );
}

export default CreatePlaylistForm;
