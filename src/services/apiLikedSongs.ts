import { URL, KEY, AUTHkey } from "./vars";
import { getSongs } from "./apiSongs";

export type TlikedSong = {
  user_id: number;
  song_id: number;
  created_at?: string;
};

const getLikedSongs = async () => {
  const options = {
    method: "GET",
    headers: {
      apikey: KEY,
      Authorization: AUTHkey,
    },
  };
  const response = await fetch(`${URL}/rest/v1/liked_songs?select=*`, options);
  const data: TlikedSong[] = await response.json();
  return data;
};

export const getLikedSongsByUserID = async (userID: number | undefined) => {
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

export const getLikedSongBySongID = async (
  userID: number | undefined,
  songID: number,
) => {
  if (!userID) return;
  const likedSongs = await getLikedSongsByUserID(userID);
  const matchedSong = likedSongs?.find((song) => songID === song.song_id);
  return Boolean(matchedSong);
};

const likeSong = async (userID: number | undefined, songID: number) => {
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
      song_id: songID,
    }),
  };
  if (!userID) throw new Error("User ID is required");
  const response = await fetch(`${URL}/rest/v1/liked_songs`, options);
  if (!response.ok) throw new Error("Failed to like song");
};

const unLikeSong = async (userID: number | undefined, songID: number) => {
  const options = {
    method: "DELETE",
    headers: {
      apikey: KEY,
      Authorization: AUTHkey,
    },
  };
  if (!userID) throw new Error("User ID is required");
  const response = await fetch(
    `${URL}/rest/v1/liked_songs?user_id=eq.${userID}&song_id=eq.${songID}`,
    options,
  );
  if (!response.ok) throw new Error("Failed to delete liked song");
};

export const handleLike = async (
  userID: number | undefined,
  songID: number,
) => {
  const likedSongs = await getLikedSongs();
  const existingSong = likedSongs.find(
    (song) => song.user_id === userID && song.song_id === songID,
  );
  if (existingSong) {
    await unLikeSong(userID, songID);
    return false;
  }
  await likeSong(userID, songID);
  return true;
};
