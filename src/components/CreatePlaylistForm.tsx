import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useFormContext } from "../contexts/FormContext";
import useOutsideClick from "../hooks/useOutsideClick";
import BackdropLayer from "./BackdropLayer";
import Button from "./Button";
import Input from "./Input";
import { CheckIcon, CloseIcon } from "../icons/BoxIcons";
import { Tsong } from "../services/apiSongs";

function CreatePlaylistForm() {
  const [playlistName, setPlaylistName] = useState("");
  const [playlistSongs, setPlaylistSongs] = useState<number[]>([]);
  const [showCombo, setShowCombo] = useState(false);
  const { formAction } = useFormContext();
  const formRef = useOutsideClick<HTMLFormElement>(
    formAction.hideCreatePlaylistForm,
  );
  const comboBoxRef = useOutsideClick<HTMLDivElement>(() =>
    setShowCombo(false),
  );

  const { data: songs } = useQuery<Tsong[]>({
    queryKey: ["songs"],
  });

  return (
    <BackdropLayer>
      <form
        id="playlist-form"
        className="relative flex w-30 flex-col items-center justify-center gap-4 rounded-md bg-gunMetalBlack p-5 md:w-50"
        ref={formRef}
      >
        <h3 className="mb-5 font-bold text-2xl">Create a playlist</h3>
        <Input
          type="text"
          variant="classic"
          label="Playlist name"
          placeholder="Name..."
          value={playlistName}
          onChange={(e) => setPlaylistName(e.currentTarget.value)}
        />

        <div className="relative w-full" ref={comboBoxRef}>
          <Input
            type="search"
            variant="classic"
            label="Playlist songs"
            placeholder="Search..."
            autoComplete="off"
            onFocus={() => setShowCombo(true)}
          />
          {showCombo && (
            <section className="mt-1 flex h-10 flex-col gap-2 overflow-y-scroll rounded-md bg-slateGray p-2">
              {songs?.map((song) => (
                <Button
                  type="button"
                  shape="transparent"
                  className="justify-between rounded-md p-1 text-pureWhite hover:bg-neroBlack"
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
