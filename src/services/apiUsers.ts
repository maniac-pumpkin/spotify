import validateUsername from "../utils/validateUsername";
import validatePassword from "../utils/validatorPassword";

export type Tuser = {
  user_id?: number;
  username: string;
  password: string;
  created_at?: string;
};

const URL = import.meta.env.VITE_SUPABASE_URL;
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const getUsers = async () => {
  const options = {
    method: "GET",
    headers: {
      apikey: KEY,
      Authorization: KEY,
    },
  };
  const response = await fetch(`${URL}/rest/v1/users?select=*`, options);
  if (!response.ok) return;
  const data: Tuser[] = await response.json();
  return data;
};

export const addUser = async (credentials: Tuser) => {
  const bodyData = {
    username: credentials.username,
    password: credentials.password,
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
  const users = await getUsers();
  const existingUser = users?.find(
    (user) => user.username === credentials.username,
  );
  if (existingUser) throw new Error("Username is already taken");
  if (!validateUsername(credentials.username))
    throw new Error(
      "Username must consist of English characters and be at least 5 characters long",
    );
  if (!validatePassword(credentials.password))
    throw new Error(
      "Password must contain at least one special character and one uppercase letter.",
    );
  const response = await fetch(`${URL}/rest/v1/users`, options);
  const data: Tuser = await response.json();
  return data;
};

export const handleSignIn = async (
  inputUsername: string,
  inputPassword: string,
  onSuccessFn: () => void,
  onFailureFn: () => void,
) => {
  const users = await getUsers();
  const matchedUser = users?.find((user) => {
    const un = user.username === inputUsername;
    const pw = user.password === inputPassword;
    if (un && pw) return user;
  });
  if (!matchedUser) {
    onFailureFn();
    return;
  }
  onSuccessFn();
  return matchedUser;
};
