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
