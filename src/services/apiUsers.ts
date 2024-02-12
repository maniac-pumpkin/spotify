import { URL, KEY, AUTHkey } from "./vars";
import validateUsername from "../utils/validateUsername";
import validatePassword from "../utils/validatorPassword";

export type Tuser = {
  user_id?: number;
  username: string;
  password: string;
  created_at?: string;
};

const getUsers = async (username?: string | undefined) => {
  const options = {
    method: "GET",
    headers: {
      apikey: KEY,
      Authorization: AUTHkey,
    },
  };
  const getUsersURL = username
    ? `${URL}/rest/v1/users?username=eq.${username}&select=*`
    : `${URL}/rest/v1/users?select=*`;
  const response = await fetch(getUsersURL, options);
  if (!response.ok) return;
  const data: Tuser[] = await response.json();
  return data;
};

export const handleSignUp = async (username: string, password: string) => {
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
  const user = await getUsers(username);
  if (user?.length) throw new Error("Username is already taken");
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
  username: string,
  password: string,
  onSuccessFn: (user: Tuser) => void,
  onFailureFn: () => void,
) => {
  const user = await getUsers(username);
  const matchedUser = user?.length && user.at(0)?.password === password;
  if (matchedUser) {
    onSuccessFn(user.at(0)!);
    return user.at(0);
  }
  onFailureFn();
};
