import { URL, KEY, AUTHkey } from "./vars";

export type Tplaylist = {
  playlist_id: number;
  user_id: number;
  name: string;
  songs: number[];
  created_at?: string;
};

export const getPlaylists = async () => {
  const options = {
    method: "GET",
    headers: {
      apikey: KEY,
      Authorization: AUTHkey,
    },
  };
  const response = await fetch(`${URL}/rest/v1/playlists?select=*`, options);
  const data: Tplaylist[] = await response.json();
  return data;
};

export const addPlaylist = async (
  userID: number,
  playlistName: string,
  songs: number[],
) => {
  const options = {
    method: "POST",
    headers: {
      apikey: KEY,
      Authorization: AUTHkey,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      user_id: userID,
      name: playlistName,
      songs,
    }),
  };
  const response = await fetch(`${URL}/rest/v1/liked_songs`, options);
  if (!response.ok) throw new Error("Failed to create playlist");
};
