import { URL, KEY, AUTHkey } from "./vars";

export type Tsong = {
  song_id: number;
  title: string;
  song_path: string;
  image_path: string;
  artist: string;
  created_at: string;
};

export const getSongs = async () => {
  const options = {
    method: "GET",
    headers: {
      apikey: KEY,
      Authorization: AUTHkey,
    },
  };
  const response = await fetch(`${URL}/rest/v1/songs?select=*`, options);
  const data: Tsong[] = await response.json();
  return data;
};

export const getSongsByTitle = async (title: string) => {
  const songs = await getSongs();
  const songTitle = title.toLowerCase();
  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(songTitle),
  );
  return filteredSongs;
};
