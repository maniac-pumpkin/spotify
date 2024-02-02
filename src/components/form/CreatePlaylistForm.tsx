import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormContext } from "../../contexts/FormContext";
import { toast } from "react-hot-toast";
import useOutsideClick from "../../hooks/useOutsideClick";
import BackdropLayer from "../structural/BackdropLayer";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { CheckIcon, CloseIcon } from "../../icons/BoxIcons";
import { addPlaylist } from "../../services/apiPlaylist";
import { Tsong } from "../../services/apiSongs";
import { Tuser } from "../../services/apiUsers";

function CreatePlaylistForm() {
  const [playlistName, setPlaylistName] = useState("");
  const [playlistSongs, setPlaylistSongs] = useState<number[]>([]);
  const [playlistSearch, setPlaylistSearch] = useState("");
  const [showCombo, setShowCombo] = useState(false);
  const { formAction } = useFormContext();
  const formRef = useOutsideClick<HTMLFormElement>(
    formAction.hideCreatePlaylistForm,
  );
  const comboBoxRef = useOutsideClick<HTMLDivElement>(() =>
    setShowCombo(false),
  );
  const queryClient = useQueryClient();

  const { data: user } = useQuery<Tuser>({
    queryKey: ["user"],
  });

  const { data: songs } = useQuery<Tsong[]>({
    queryKey: ["songs"],
  });

  const { mutate } = useMutation({
    mutationFn: () => addPlaylist(user?.user_id, playlistName, playlistSongs),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["playlists"],
      });
      formAction.hideCreatePlaylistForm();
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
          value={playlistName}
          onChange={(e) => setPlaylistName(e.currentTarget.value)}
          required
        />
        <div className="relative w-full" ref={comboBoxRef}>
          <Input
            type="search"
            variant="classic"
            label="Playlist songs"
            placeholder="Search..."
            autoComplete="off"
            value={playlistSearch}
            onFocus={() => setShowCombo(true)}
            onInput={(e) => setPlaylistSearch(e.currentTarget.value)}
          />
          {showCombo && (
            <section className="mt-1 flex h-10 flex-col gap-2 overflow-y-scroll rounded-md bg-slateGray p-2">
              {songs?.map((song) => (
                <Button
                  type="button"
                  shape="transparent"
                  className={`justify-between rounded-md p-1 text-pureWhite hover:bg-neroBlack ${
                    song.title
                      .toLowerCase()
                      .includes(playlistSearch.toLowerCase())
                      ? "flex"
                      : !playlistSearch
                        ? "flex"
                        : "hidden"
                  }`}
                  key={song.song_id}
                  fullWidth
                  onClick={() =>
                    setPlaylistSongs((p) =>
                      p.includes(song.song_id)
                        ? [...p].filter((id) => song.song_id !== id)
                        : [...p, song.song_id],
                    )
                  }
                >
                  <span>
                    {song.song_id} - {song.title}
                  </span>
                  {playlistSongs.includes(song.song_id) && (
                    <CheckIcon className="fill-pureWhite" />
                  )}
                </Button>
              ))}
            </section>
          )}
        </div>

        <Button type="submit" color="green" fullWidth>
          Create
        </Button>
        <Button
          type="button"
          shape="transparent"
          className="absolute right-2 top-2"
          onClick={formAction.hideCreatePlaylistForm}
        >
          <CloseIcon />
        </Button>
      </form>
    </BackdropLayer>
  );
}

export default CreatePlaylistForm;
