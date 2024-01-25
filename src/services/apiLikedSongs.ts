import { getSongs } from "./apiSongs";

type TlikedSong = {
  user_id: number;
  song_id: number;
  created_at?: string;
};

const URL = import.meta.env.VITE_SUPABASE_URL;
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const getLikedSongs = async () => {
  const options = {
    method: "GET",
    headers: {
      apikey: KEY,
      Authorization: KEY,
    },
  };
  const response = await fetch(`${URL}/rest/v1/liked_songs?select=*`, options);
  const data: TlikedSong[] = await response.json();
  return data;
};

export const getLikedSongsByID = async (userID: number | undefined) => {
  if (!userID) return;
  const allLikedSongs = await getLikedSongs();
  const filteredLikedSongs = allLikedSongs
    .filter((song) => song.user_id === userID)
    .map((each) => each.song_id);
  const songs = await getSongs();
  const likedSongs = songs.filter((song) =>
    filteredLikedSongs.includes(song.song_id),
  );
  return likedSongs;
};

export const likeSong = async (info: TlikedSong) => {
  const bodyData = {
    user_id: info.user_id,
    song_id: info.song_id,
  };
  const options = {
    method: "POST",
    headers: {
      apikey: KEY,
      Authorization: KEY,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(bodyData),
  };
  const response = await fetch(`${URL}/rest/v1/liked_songs`, options);
  const data: TlikedSong = await response.json();
  return data;
};
