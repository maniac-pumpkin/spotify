/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import { Taction } from "./types";
import { Tprovider } from "./types";

const values = {
  forms: {
    signIn: false,
    signUp: false,
    createPlaylist: false,
  },
};

type Tvalues = typeof values;

interface Icontext extends Tvalues {
  formAction: {
    showSignInForm(): void;
    showSignUpForm(): void;
    showCreatePlaylistForm(): void;
    hideSignInForm(): void;
    hideSignUpForm(): void;
    hideCreatePlaylistForm(): void;
  };
}

const Form = createContext<Icontext | null>(null);

const reducer = (prevState: Tvalues, action: Taction): Tvalues => {
  switch (action.type) {
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

export const useFormContext = () => {
  const context = useContext(Form);
  if (context === null || context === undefined)
    throw new Error("Context must be consumed within the context provider");
  return context;
};

export default function FormProvider({ children }: Tprovider) {
  const [state, dispatch] = useReducer(reducer, values);

  const formAction = {
    showSignInForm() {
      dispatch({ type: "form/showSignIn" });
    },
    showSignUpForm() {
      dispatch({ type: "form/showSignUp" });
    },
    showCreatePlaylistForm() {
      dispatch({ type: "form/showCreatePlaylist" });
    },
    hideSignInForm() {
      dispatch({ type: "form/hideSignIn" });
    },
    hideSignUpForm() {
      dispatch({ type: "form/hideSignUp" });
    },
    hideCreatePlaylistForm() {
      dispatch({ type: "form/hideCreatePlaylist" });
    },
  };

  return (
    <Form.Provider value={{ ...state, formAction }}>{children}</Form.Provider>
  );
}
