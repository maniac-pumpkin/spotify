import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SongPreMini from "../components/SongPreMini";
import PageTitle from "../components/PageTitle";
import Input from "../components/Input";
import Warning from "../components/Warning";
import SongPreSkeleton from "../components/SongPreSkeleton";
import { getSongsByTitle } from "../services/apiSongs";
import useDebounce from "../hooks/useDebounce";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const delayedValue = useDebounce(searchText);

  const { data: songs, isLoading } = useQuery({
    queryKey: ["filteredSongs"],
    queryFn: () => getSongsByTitle(delayedValue),
    enabled: Boolean(delayedValue),
  });

  return (
    <>
      <PageTitle title="Search" />
      <Input
        type="search"
        placeholder="What do you want to listen to?"
        fullWidth
        value={searchText}
        onChange={(e) => setSearchText(e.currentTarget.value)}
      />
      <section className="mt-4 flex flex-col gap-4">
        {delayedValue &&
          songs?.map((song) => (
            <SongPreMini
              title={song.title}
              artist={song.artist}
              image={song.image_path}
              key={song.song_id}
            />
          ))}
        {isLoading &&
          Array.from({ length: 4 }, (_, i) => (
            <SongPreSkeleton type="mini" key={i + 1} />
          ))}
        {!isLoading && !delayedValue && <Warning text="No song found" />}
      </section>
    </>
  );
}
