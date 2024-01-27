import { URL, KEY, AUTHkey } from "./vars";
import validateUsername from "../utils/validateUsername";
import validatePassword from "../utils/validatorPassword";

export type Tuser = {
  user_id?: number;
  username: string;
  password: string;
  created_at?: string;
};

const getUsers = async () => {
  const options = {
    method: "GET",
    headers: {
      apikey: KEY,
      Authorization: AUTHkey,
    },
  };
  const response = await fetch(`${URL}/rest/v1/users?select=*`, options);
  if (!response.ok) return;
  const data: Tuser[] = await response.json();
  return data;
};

export const addUser = async (username: string, password: string) => {
  const options = {
    method: "POST",
    headers: {
      apikey: KEY,
      Authorization: AUTHkey,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  const users = await getUsers();
  const existingUser = users?.find((user) => user.username === username);
  if (existingUser) throw new Error("Username is already taken");
  if (!validateUsername(username))
    throw new Error(
      "Username must consist of English characters and be at least 5 characters long",
    );
  if (!validatePassword(password))
    throw new Error(
      "Password must contain at least one special character and one uppercase letter.",
    );
  await fetch(`${URL}/rest/v1/users`, options);
};

export const handleSignIn = async (
  inputUsername: string,
  inputPassword: string,
  onSuccessFn: (user: Tuser) => void,
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
  onSuccessFn(matchedUser);
  return matchedUser;
};
