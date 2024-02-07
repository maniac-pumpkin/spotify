import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SongPreSkeleton from "../components/SongPreSkeleton";
import SongPreMini from "../components/SongPreMini";
import PageTitle from "../components/PageTitle";
import Input from "../components/ui/Input";
import Warning from "../components/Warning";
import { getSongs } from "../services/apiSongs";

export default function Search() {
  const [inputSearch, setInputSearch] = useState("");

  const {
    data: songs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["songs", "search"],
    queryFn: getSongs,
  });

  return (
    <>
      <PageTitle title="Search" />
      <Input
        type="search"
        placeholder="What do you want to listen to?"
        fullWidth
        value={inputSearch}
        onChange={(e) => setInputSearch(e.currentTarget.value)}
      />
      <section className="mt-4 flex flex-col gap-4">
        {inputSearch &&
          songs?.map((song) => {
            const matchedSong = !song.title
              .toLowerCase()
              .includes(inputSearch.toLowerCase());
            return (
              <SongPreMini
                title={song.title}
                artist={song.artist}
                image={song.image_path}
                song_id={song.song_id}
                key={song.song_id}
                hidden={matchedSong}
              />
            );
          })}
        {isLoading && <SongPreSkeleton type="mini" quantity={4} />}
        {!isError && !isLoading && !inputSearch && (
          <Warning text="Type something" center />
        )}
        {isError && <Warning text="Something went wrong!" center />}
      </section>
    </>
  );
}
