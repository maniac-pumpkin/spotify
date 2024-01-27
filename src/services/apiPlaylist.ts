import { URL, KEY, AUTHkey } from "./vars";

type Tplaylist = {
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
