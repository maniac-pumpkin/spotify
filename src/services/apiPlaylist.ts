import { URL, KEY, AUTHkey } from "./vars";
import { getSongs } from "./apiSongs";

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

export const getPlaylistSongsByName = async (name: string | undefined) => {
  if (!name) throw new Error("Playlist name not found");
  const options = {
    method: "GET",
    headers: {
      apikey: KEY,
      Authorization: AUTHkey,
    },
  };
  const response = await fetch(
    `${URL}/rest/v1/playlists?name=eq.${name}&select=*`,
    options,
  );
  const songs = await getSongs();
  const playlist: Tplaylist[] = await response.json();
  return songs.filter(
    (song) => playlist.at(0)?.songs.indexOf(song.song_id) !== -1,
  );
};

export const addPlaylist = async (
  userID: number | undefined,
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
  if (!userID) throw new Error("User not found");
  const response = await fetch(`${URL}/rest/v1/playlists`, options);
  if (!response.ok) throw new Error("Failed to create playlist");
};

export const deletePlaylist = async (playlistID: number) => {
  const options = {
    method: "DELETE",
    headers: {
      apikey: KEY,
      Authorization: AUTHkey,
    },
  };
  if (!playlistID) throw new Error("User ID is required");
  const response = await fetch(
    `${URL}/rest/v1/playlists?playlist_id=eq.${playlistID}`,
    options,
  );
  if (!response.ok) throw new Error("Failed to delete playlist");
};
