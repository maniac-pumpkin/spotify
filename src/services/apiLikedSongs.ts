import { URL, KEY, AUTHkey } from "./vars";
import { getSongs } from "./apiSongs";

export type TlikedSong = {
  user_id: number;
  song_id: number;
  created_at?: string;
};

const getLikedSongs = async (userID: number): Promise<number[]> => {
  const options = {
    method: "GET",
    headers: {
      apikey: KEY,
      Authorization: AUTHkey,
      Range: "0-9",
    },
  };
  const response = await fetch(
    `${URL}/rest/v1/liked_songs?user_id=eq.${userID}&select=*`,
    options,
  );
  const data: TlikedSong[] = await response.json();
  return data.map((song) => song.song_id);
};

export const getLikedSongsByUserID = async (userID: number | undefined) => {
  if (!userID) throw new Error("User not found");
  const allLikedSongs = await getLikedSongs(userID);
  const songs = await getSongs();
  const likedSongs = songs.filter((song) =>
    allLikedSongs.includes(song.song_id),
  );
  return likedSongs;
};

export const getLikedSongBySongID = async (
  userID: number | undefined,
  songID: number,
) => {
  if (!userID) throw new Error("User not found");
  const likedSongs = await getLikedSongsByUserID(userID);
  const matchedSong = likedSongs?.find((song) => songID === song.song_id);
  return Boolean(matchedSong);
};

const likeSong = async (userID: number, songID: number) => {
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
  const response = await fetch(`${URL}/rest/v1/liked_songs`, options);
  if (!response.ok) throw new Error("Failed to like song");
};

const unLikeSong = async (userID: number, songID: number) => {
  const options = {
    method: "DELETE",
    headers: {
      apikey: KEY,
      Authorization: AUTHkey,
    },
  };
  const response = await fetch(
    `${URL}/rest/v1/liked_songs?user_id=eq.${userID}&song_id=eq.${songID}`,
    options,
  );
  if (!response.ok) throw new Error("Failed to unlike song");
};

export const handleLike = async (
  userID: number | undefined,
  songID: number,
) => {
  if (!userID) throw new Error("User not found");
  const likedSongs = await getLikedSongs(userID);
  if (likedSongs.includes(songID)) {
    await unLikeSong(userID, songID);
    return false;
  }
  await likeSong(userID, songID);
  return true;
};
