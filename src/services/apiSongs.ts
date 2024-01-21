import { toast } from "react-hot-toast";

export const getSongs = async () => {
  const URL = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/songs?select=*`;
  const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const options = {
    method: "GET",
    headers: {
      apikey: KEY,
      Authorization: KEY,
    },
  };
  try {
    const response = await fetch(URL, options);
    const data = await response.json();
    return data;
  } catch (err) {
    toast.error(err.message);
  }
};
