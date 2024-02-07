import { URL, KEY, AUTHkey } from "./vars";
import { getSongs } from "./apiSongs";

export type Tplaylist = {
  playlist_id: number;
  user_id: number;
  name: string;
  songs: number[];
  created_at?: string;
};

export const getPlaylists = async (userID: number | undefined) => {
  const options = {
    method: "GET",
    headers: {
      apikey: KEY,
      Authorization: AUTHkey,
    },
  };
  if (!userID) throw new Error("User not found");
  const response = await fetch(
    `${URL}/rest/v1/playlists?user_id=eq.${userID}&select=*`,
    options,
  );
  const data: Tplaylist[] = await response.json();
  return data;
};

export const getPlaylistSongsByName = async (name: string | undefined) => {
  const options = {
    method: "GET",
    headers: {
      apikey: KEY,
      Authorization: AUTHkey,
    },
  };
  if (!name) throw new Error("Playlist name not found");
  const response = await fetch(
    `${URL}/rest/v1/playlists?name=eq.${name}&select=*`,
    options,
  );
  const playlist: Tplaylist[] = await response.json();
  const songs = await getSongs();
  return songs.filter((song) => playlist.at(0)?.songs.includes(song.song_id));
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
  if (!songs.length) throw new Error("Select at least one song");
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
  const response = await fetch(
    `${URL}/rest/v1/playlists?playlist_id=eq.${playlistID}`,
    options,
  );
  if (!response.ok) throw new Error("Failed to delete playlist");
};
