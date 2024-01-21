/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";

type Taction = {
  type: string;
  payload?: unknown;
};

type Tinitials = {
  signedIn: boolean;
  forms: {
    signIn: boolean;
    signUp: boolean;
    createPlaylist: boolean;
  };
};

interface Icontext extends Tinitials {
  dispatch: Dispatch<Taction>;
}

const initials: Tinitials = {
  signedIn: false,
  forms: {
    signIn: false,
    signUp: false,
    createPlaylist: false,
  },
};

const Global = createContext<Icontext | null>(null);

const reducer = (prevState: Tinitials, action: Taction): Tinitials => {
  switch (action.type) {
    case "account/signIn":
      return {
        ...prevState,
        signedIn: true,
      };
    case "account/signOut":
      return {
        ...prevState,
        signedIn: false,
      };
    case "form/showSignIn":
      return { ...prevState, forms: { ...prevState.forms, signIn: true } };
    case "form/showSignUp":
      return { ...prevState, forms: { ...prevState.forms, signUp: true } };
    case "form/showCreatePlaylist":
      return {
        ...prevState,
        forms: { ...prevState.forms, createPlaylist: true },
      };
    case "form/hideSignIn":
      return { ...prevState, forms: { ...prevState.forms, signIn: false } };
    case "form/hideSignUp":
      return { ...prevState, forms: { ...prevState.forms, signUp: false } };
    case "form/hideCreatePlaylist":
      return {
        ...prevState,
        forms: { ...prevState.forms, createPlaylist: false },
      };
    default:
      return prevState;
  }
};

export const signOut = (): Taction => {
  return { type: "account/signOut" };
};

export const signIn = (): Taction => {
  return { type: "account/signIn" };
};

export const showSignInForm = (): Taction => {
  return { type: "form/showSignIn" };
};

export const showSignUpForm = (): Taction => {
  return { type: "form/showSignUp" };
};

export const showCreatePlaylistForm = (): Taction => {
  return { type: "form/showCreatePlaylist" };
};

export const hideSignInForm = (): Taction => {
  return { type: "form/hideSignIn" };
};

export const hideSignUpForm = (): Taction => {
  return { type: "form/hideSignUp" };
};

export const hideCreatePlaylistForm = (): Taction => {
  return { type: "form/hideCreatePlaylist" };
};

export const useSelector = () => {
  const context = useContext(Global);
  if (context === null || context === undefined)
    throw new Error("Context must be consumed within the context provider");
  return context;
};

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initials);

  return (
    <Global.Provider value={{ ...state, dispatch }}>{children}</Global.Provider>
  );
}
