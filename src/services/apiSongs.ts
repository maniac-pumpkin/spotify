export type Tsong = {
  song_id: number;
  title: string;
  song_path: string;
  image_path: string;
  artist: string;
  created_at: string;
};

const URL = import.meta.env.VITE_SUPABASE_URL;
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const getSongs = async () => {
  const options = {
    method: "GET",
    headers: {
      apikey: KEY,
      Authorization: KEY,
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
